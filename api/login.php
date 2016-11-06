<?php


  include 'config.php';

  // get JSON input from HTTP POST
  $postdata = file_get_contents("php://input");


  $request = json_decode($postdata);

	$username = $_POST['username'];
	$password = $_POST['password'];

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

    //echo $result;
    if ($result) {
    	echo false;
    }
    else {
			//fetch table rows from mysql db
	    $sql = "SELECT id_user, nama_user, ket_user, keterangan, status_date, nama_komoditas_concat, nama_topik_concat FROM user_view where username='$username'";
	    $result = mysqli_query($link, $sql) or die("Error in Selecting " . mysqli_error($link));

	    //create an array
	    $emparray = array();
	    while($row =mysqli_fetch_assoc($result))
	    {
	        $emparray[] = $row;
	    }
	    echo json_encode($emparray);
			echo "aaa";
			}
	}

  mysqli_close($link);

?>
