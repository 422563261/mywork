<?php

	$data = [
		'ret' => true,
		'errcode' => 0,
		'errmsg' => 'success',
		'ver' => 1,
		'data' => [
			'page' => 1,
			'travelers' => [
				0 => [
					'nickName' => "阿狸",
					'userImg' => "AL.jpg"
				],
				1 => [
					'nickName' => "阿卡丽",
					'userImg' => "AKL.jpg"
				],
				2 => [
					'nickName' => "卡特",
					'userImg' => "KT.jpg"
				],
				3 => [
					'nickName' => "娑娜",
					'userImg' => "SN.jpg"
				]
			],
			'travelerCnt' => 4,
			'size' => 20
		]
	];

	echo json_encode($data);
