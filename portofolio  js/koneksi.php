<?php

$koneksi = new database();

class database{
    var $host = "localhost";
    var $username = "root";
    var $password = "";
    var $database = "asessment";

    function __construct(){
        $conn = mysqli_connect($this->host, $this->username, $this->password, $this->database);
        
        if ($conn->connect_error) {
            die("Koneksi gagal: " . $conn->connect_error);
        }
        echo "Koneksi berhasil";
    
        $conn->close();
    }    
}

// new mysqli => Object-Oriented Approach
// mysqli_connect => Procedural Approach


?>