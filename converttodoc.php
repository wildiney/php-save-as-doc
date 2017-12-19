<?php
require_once('./classes/SaveAs.class.php');

$url        = $_POST['url'];
$title      = $_POST['title'];
$intro      = $_POST['intro'];
$content    = $_POST['content'];

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $file = new SaveAs($url, $title, $intro, $content);
    echo $file->Doc();
} else {
    echo "Acesso não permitido.";
}