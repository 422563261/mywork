/**
 * Created by tan on 16/3/23.
 */
$(function(){
    var $last = $("#last");
    var $next = $("#next");
    var $box = $(".container-box");
    var $len = $box.find("img").length;
    var page = 1;
    var $light = $("#light").find("span");
    $last.bind("click",function(){
        if(!$box.is(":animated")){
            if(page == 1){
                $box.animate({left:"-2000"},1000);
                page = 5;
            }
            else{
                $box.animate({left:'+=500'},1000);
                page -= 1;
            }
            $light.eq((page-1)).addClass("active").siblings().removeClass("active");
        }

    })
    $next.bind("click",function(){
        if(!$box.is(":animated")){
            if(page == 5){
                $box.animate({left:"0"},1000);
                page = 1;
            }
            else{
                $box.animate({left:"-=500"},1000);
                page += 1;
            }
            $light.eq((page-1)).addClass("active").siblings().removeClass("active");
        }
    })
})
