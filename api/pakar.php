<?php

  include 'config.php';

  $id_pakar = $_GET['idpakar'];

  //fetch table rows from mysql db
  $sql = "SELECT user_view.id_user, nama_user, ket_user, keterangan, status_date, nama_komoditas_concat, nama_topik_concat FROM user_view where id_user='$id_pakar'";
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
