<?php 
    $firstname= $_POST['firstname'];
    $lastname=  $_POST['lastname'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $message= $_POST['message'];

    $email_from = "shaktigurung.com";
    $email_subject = "New Message from Shakti Gurung Contact";
    $email_body = "Firstname: $firstname.\n".
                  "Lastname: $lastname.\n".
                  "Email: $email .\n".
                  "Mobile: $phone .\n".
                "Message: $message .\n";

   $to = "mr.shakti.gurung@gmail.com";
   $headers = "From: $email_from \r\n";
   $headers .= "Reply-To: $email \r\n";
          
   mail($to,$email_subject, $email_body, $headers);
   header("location: success.html");

?>