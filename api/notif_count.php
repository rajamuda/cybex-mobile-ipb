<?php

  include 'config.php';

  $id_user = $_GET['iduser'];

  //fetch table rows from mysql db
  $sql = "SELECT count(*) AS notif_baru FROM artikel_view,
  artikel_komentar_view WHERE artikel_view.id_user_input='$id_user' AND artikel_komentar_view.id_artikel=artikel_view.id_artikel AND artikel_komentar_view.status_komentar=1;";
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
