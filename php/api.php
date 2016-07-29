<?php


//записываем контакт в БД
	$json = file_get_contents('../json/users_database.json');
	// Декодируем
	$json = json_decode($json, true);
	// Добавляем элемент
	$json[] = $_POST['nickname_register'];
	$json[] = $_POST['email_register'];
	$json[] = $_POST['password_register'];
	// Превращаем опять в JSON
	$json = json_encode($json);
	// Перезаписываем файл
	file_put_contents('../json/users_database.json', $json);



	/*$url = file_get_contents("../json/users_database.json");

	$arr = json_decode($url,true); 
	foreach($arr as $item) {

		$json[] = $_POST[$item[0]];
		// Превращаем опять в JSON
		$json = json_encode($json);
		// Перезаписываем файл
		file_put_contents('../json/names.json', $json);
	}  */

/*
	$json = file_get_contents('../json/names.json');
	// Декодируем
	$json = json_decode($json, true);
	// Добавляем элемент
	$json[] = $_POST['email_validate'];
	$json[] = $_POST['password_validate'];
	// Превращаем опять в JSON
	$json = json_encode($json);
	// Перезаписываем файл
	file_put_contents('../json/names.json', $json);
*/









?>