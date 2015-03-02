window.onload=function  () {
		var pic=document.getElementById('pic');
		var prev=document.getElementById('prev');
		var next=document.getElementById('next');
		var start=document.getElementById('start');
		var stop=document.getElementById('stop1');
		var wait=false;
		var timer;

		function animate(move){
			wait=true;
			var time = 300;
			var interval = 10;
			var speed;
			var last = parseFloat(pic.style.left) + move;

			function flash(){
				speed=(last-parseFloat(pic.style.left))/(time/interval);
				if (speed>0) {speed=Math.ceil(speed)};
				if (speed<0) {speed=Math.floor(speed)};
				if ( (speed > 0 && parseFloat(pic.style.left) < last) || (speed < 0 && parseFloat(pic.style.left) > last)) {
                   pic.style.left = parseFloat(pic.style.left) + speed + 'px';
                   setTimeout(flash, interval);
			}
			else {
				wait=false;
                 pic.style.left = last + 'px';
                      if (pic.style.left == -8196 + 'px') {
				          pic.style.left = -1366 + 'px';
                        }
                      if (pic.style.left == 0 + 'px') {
				          pic.style.left = -6830 + 'px';
						}      
                  }
              }
              flash();
			}

		function startflash(){
				timer = setTimeout(function(){
					next.onclick();
					startflash();
				},3000);
			}

		function stopflash() {
                clearTimeout(timer);
            }

		next.onclick=function(){
			if (!wait) {
				animate(-1366);
			}
		}
		prev.onclick=function(){
			if (!wait) {
				animate(1366);
			}
		}
		start.onclick=function (){
			startflash();
			start.style.display='none';
			stop.style.display='block';
		};
		stop.onclick=function (){
			stopflash();
			stop.style.display='none';
			start.style.display='block';
		};

	}