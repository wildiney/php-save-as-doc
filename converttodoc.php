<?php
  header("Content-type: application/vnd.ms-word");
  header("Content-Disposition: attachment;Filename=traducao.doc");    
  echo "<html>";
  echo "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">";
  echo "<body style='font-family:Arial, sans-serif;'>";
  echo "<h1>" . $_POST['title'] . "</h1>";
  echo $_POST['intro'];
  echo $_POST['content'];
  echo "</body>";
  echo "</html>";
?>