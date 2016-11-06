<?php

  include 'config.php';

  //fetch table rows from mysql db
  $search = $_GET['search'];

  $sql = "SELECT id_artikel, judul_artikel, isi_artikel, tanggal, nama_user_input, total_baca, total_komentar FROM artikel_view WHERE is_remove='N' AND isi_artikel LIKE '%$search%' ORDER BY id_artikel DESC LIMIT 20";

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
