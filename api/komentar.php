<?php

  include 'config.php';

  $id_artikel = $_GET['idartikel'];


  //fetch table rows from mysql db
  $sql = "SELECT id_artikel, isi_komentar, tanggal_komentar, nama_user FROM `artikel_komentar_view` WHERE id_artikel = '$id_artikel' ORDER BY id_kategoriuser";
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
