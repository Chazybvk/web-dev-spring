<?php 
   
   
   session_start();
   $data = $_GET['message'];
   if ( isset($_SESSION["messages"])) {
      array_push($_SESSION["messages"], $data );
   } else {
    $_SESSION["messages"] = array($data);
   }

?>


  


