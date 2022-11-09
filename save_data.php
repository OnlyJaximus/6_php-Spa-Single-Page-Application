<?php

require 'bootstrap.php';

// Podaci se ne salju iz forme, salju se putem AJAX u obliku JSON
$json = file_get_contents('php://input');  // teksutalni podaci ili row data

$data = json_decode($json);  // pretvaramo u data type koji PHP razume

//var_dump($data);

echo $query->save($data);
