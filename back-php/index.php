<?php
// allow access from another app
header('Access-Control-Allow-Origin: *');

// create new object  and add some properties to it
$object = new class{};
$object->prop1 = "my first property";
$object->prop2 = 21;
$object->prop3 = "why not";

//  encode my object in json
$myJSON = json_encode($object);

//  send json
echo $myJSON;



?>
