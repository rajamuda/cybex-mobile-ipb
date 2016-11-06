<?php

  include 'config.php';

  // get JSON input from HTTP POST
  $postdata = file_get_contents("php://input");

  if ($postdata){
      // JSON Decode from input
      $request = json_decode($postdata);
			$id_artikel = $request->id_artikel;
			$isikomentar = $request->isi_komentar;

			$isikomentar2 = nl2br($isikomentar);
			$isi_komentar = '<p>'.$isikomentar2.'</p>';

      $id_kategori = 1;
      $id_topik = 1;
      $id_komoditas = 1;
      $id_user_input = 16;

			$query = mysqli_query($link, "INSERT INTO artikel_komentar (id_user, isi_komentar, id_artikel, status) VALUES (12, '$isi_komentar', '$id_artikel', 1);");

      // avoid print unless username & password is set
      if ($query){
          echo "sukses";
      }
      else {
          echo "gagal";
      }
  }
  else echo "gagal koneksi";

?>
