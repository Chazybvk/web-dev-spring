<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');


$messages = file('chatdb.csv');
$data = [];
$tmp = [];
foreach ( $messages as $item ) {
    $parts = explode(',', $item);
    $tmp['id_send'] = $parts[0];
    $tmp['id_resv'] = $parts[1];
    $tmp['message'] = $parts[2];
    array_push($data, $tmp );
}

echo json_encode($data);
// echo "<pre>";
// var_dump($data);
// echo "</pre>";

