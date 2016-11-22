<?php

  include 'config.php';
  include 'headers.php';

  // // require JWT
  require 'vendor/autoload.php';
  use \Firebase\JWT\JWT;

  // TOKEN PROVIDED
  if ($token) {

    try {

      // key JWT
      $key = 'lppmIPBCYBEX1p8';
      // decode token
      $decoded_raw = JWT::decode($token, $key, array('HS256'));
      $decoded = (array) $decoded_raw;

      $nim = $decoded['nim'];
      $id = $decoded['id'];

      echo $nim;

    }

    // TOKEN FAILED
    catch (Exception $e){

      $arr = array(
        'status' => false,
        'message' => 'Token Authorization Failed'
      );

      header('Content-type: application/json');
      header('HTTP/1.0 401 Unauthorized');
      // header('HTTP/1.0 213 TOKEN ERROR');
      echo json_encode($arr);

    }

  }

  // NO TOKEN PROVIDED
  else {

    $arr = array(
      'status' => false,
      'message' => 'No token provided'
    );

    header('Content-type: application/json');
    header('HTTP/1.0 401 Unauthorized');
    // header('HTTP/1.0 212 GAADATOKEN');
    echo json_encode($arr);

  }

 ?>
