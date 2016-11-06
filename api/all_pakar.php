<?php

  include 'config.php';

  //fetch table rows from mysql db
  $sql = "SELECT id_user, id_kategoriuser, nama_user, nama_komoditas_concat, nama_topik_concat FROM user_view where id_kategoriuser=2 ORDER BY nama_user";
  $result = mysqli_query($link, $sql) or die("Error in Selecting " . mysqli_error($link));

  //create an array
  $emparray = array();
  while($row =mysqli_fetch_assoc($result))
  {
      $emparray[] = $row;
  }
  echo json_encode($emparray);

  //close the db connection
  mysqli_close($link);

?>
