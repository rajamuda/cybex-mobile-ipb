<?php

  include 'config.php';

  // get JSON input from HTTP POST
  $postdata = file_get_contents("php://input");

  if ($postdata){
      // JSON Decode from input
      $request = json_decode($postdata);
      $judul_artikel = $request->judul_artikel;
			$isiartikel = $request->isi_artikel;

			$isiartikel2 = nl2br($isiartikel);
			$isi_artikel = '<p>'.$isiartikel2.'</p>';

      $id_kategori = 1;
      $id_topik = 1;
      $id_komoditas = 1;
      $id_user_input = 16;

      $query1 = mysqli_query($link, "BEGIN;");
			$query2 = mysqli_query($link, "INSERT INTO artikel (id_kategori, id_topik, id_komoditas, judul_artikel, isi_artikel, tanggal, is_remove) VALUES (2, 1, 1, '$judul_artikel', '$isi_artikel', NOW(), 'N');");
			$query3 = mysqli_query($link, "INSERT INTO artikel_status (id_artikel,id_user,artikel_status) VALUES (LAST_INSERT_ID(),598,'post'); ");
			$query4 = mysqli_query($link, "COMMIT;");

      // avoid print unless username & password is set
      if ($query1 &&  $query2 &&  $query3 &&  $query4){
          echo "sukses";
      }
      else {
          echo "gagal";
      }
  }
  else echo "gagal koneksi";

?>
