<?php
$serverinimi = "localhost";
$kasutajanimi = "christoferkrabbi";
$parool = "12345";
$andmebaasinimi = "christoferkrabbi";
$yhendus = new mysqli($serverinimi, $kasutajanimi, $parool, $andmebaasinimi);
$yhendus->set_charset("utf8");