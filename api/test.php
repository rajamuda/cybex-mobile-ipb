<?php

  include 'config.php';

  // get JSON input from HTTP POST
  $postdata = file_get_contents("php://input");

  // {'id' : 1, 'value': 'ini test value'}


  if ($postdata){
      // echo $postdata;
      // JSON Decode from input
      $request = json_decode($postdata);
      $value = $request->value;

      echo $id." ".$value;

      $test = mysqli_query($link, "INSERT INTO test (value) values ('$value')");

      if ($test) {
        echo 'success';
      }
      else {
        echo 'failed';
      }


  }
  else echo "no input";


 ?>
