<?php

	$data = [
		'ret' => false,
		'errcode' => 0,
		'errmsg' => 'success',
		'ver' => 1,
		'data' => [
			'page' => 1,
			'travelers' => [
				0 => [
					'nickName' => "EEEE",
					'userImg' => "..."
				],
				1 => [
					'nickName' => "FFFF",
					'userImg' => "..."
				],
				2 => [
					'nickName' => "GGGG",
					'userImg' => "..."
				],
				3 => [
					'nickName' => "HHHH",
					'userImg' => "..."
				]
			],
			'travelerCnt' => 4,
			'size' => 20
		]
	];

	echo json_encode($data);
