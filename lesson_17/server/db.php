<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST,GET,OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$data = json_decode(file_get_contents('php://input'));
//var_dump($data->id);

if (isset($data->id_send) && isset($data->id_resv) && isset($data->message)) {
    $data = array($data->id_send, $data->id_resv, $data->message);
    var_dump($data);
    $fp = fopen('chatdb.csv', 'a+');
    fputcsv($fp, $data);
    fclose($fp);
    $result = array('code' => 200, 'message' => 'Все ОК !');
    echo json_encode($result);
} else {
    $error = array('code' => 500, 'message' => 'Не хватает параметров !');
    echo json_encode($error);
}



