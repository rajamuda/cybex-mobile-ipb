<?php


  include 'config.php';
  include 'vendor/autoload.php';
  use \Firebase\JWT\JWT;

  // get JSON input from HTTP POST
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);

  // $username = $_POST['username'];
  // $password = $_POST['password'];

  $username = $request->username;
  $password = $request->password;
  // echo $username;
  // echo $password;

	if (isset($username) && isset($password)){

		$url = 'http://cybex.ipb.ac.id/index.php/user/SignIn';
    $data = array('username' => $username, 'password' => $password);

    // use key 'http' even if you send the request to https://...
    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result =  file_get_contents($url, false, $context);

    // echo $result;
    if ($result) {
      // header('Content-type: application/json');
      echo json_encode(array('status' => false, 'message' => 'username or password error'));
    }
    else {

	    $sql = "SELECT id_user, nama_user, ket_user, keterangan, status_date, nama_komoditas_concat, nama_topik_concat FROM user_view where username='$username'";
	    $result = mysqli_query($link, $sql) or die("Error in Selecting " . mysqli_error($link));

	    //create an array
	    while($row =mysqli_fetch_assoc($result))
	    {
	        $id = $row['id_user'];
          $nama = $row['nama_user'];
          $keterangan = $row['keterangan'];
	    }
      $key = "lppmIPBCYBEX1p8";
      $token = array(
          "iss" => "http://cybex.ipb.ac.id",
          "aud" => "ivanmaulana",
          "id" => $id,
          "nama" => $nama,
          "keterangan" => $keterangan,
          "iat" => time()
      );
      $jwt = JWT::encode($token, $key);

      header('Content-type: application/json');
      echo json_encode(array('status' => true, 'token' => $jwt, 'nama' => $nama, 'id' => $id));

		}
	}
  else {
    // header('Content-type: application/json');
    echo json_encode(array('status' => false, 'message' => 'please fill username and password'));
  }

  mysqli_close($link);

?>
