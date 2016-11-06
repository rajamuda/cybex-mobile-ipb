<?php

  include 'config.php';

  $id_user = $_GET['iduser'];


  //fetch table rows from mysql db
  $sql = "SELECT artikel_view.id_artikel, artikel_view.nama_kategori,
  artikel_view.judul_artikel, artikel_view.id_user_input,
  artikel_view.nama_user_input, artikel_komentar_view.id_user,
  artikel_komentar_view.nama_user, artikel_komentar_view.tanggal_komentar,artikel_komentar_view.status_komentar FROM artikel_view,
  artikel_komentar_view WHERE artikel_view.id_user_input='$id_user' AND artikel_komentar_view.id_artikel=artikel_view.id_artikel ORDER BY artikel_komentar_view.tanggal_komentar DESC;";
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
