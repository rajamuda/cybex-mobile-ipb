<?php

  include 'config.php';

  $sql = "SELECT id_artikel, id_kategori, id_topik, id_komoditas, judul_artikel, tanggal,nama_user_input FROM artikel_view WHERE id_kategori=2 AND is_remove='N' ORDER BY id_artikel DESC";


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
