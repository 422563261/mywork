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
					'nickName' => "AAAA",
					'userImg' => "..."
				],
				1 => [
					'nickName' => "BBBB",
					'userImg' => "..."
				],
				2 => [
					'nickName' => "CCCC",
					'userImg' => "..."
				],
				3 => [
					'nickName' => "DDDD",
					'userImg' => "..."
				]
			],
			'travelerCnt' => 4,
			'size' => 20
		]
	];

	echo json_encode($data);
