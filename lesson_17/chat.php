<?php 
   session_start(); 

   if ( isset( $_SESSION["messages"])) {
     var_dump($_SESSION["messages"]);
   }
   
?>