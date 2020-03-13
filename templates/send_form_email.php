<?php
if(isset($_POST["email"])) {

        $email_to = "whiteintheiris@gmail.com";
        $email_subject = "Contact The Great Fable"

        function died($error) {
            echo "Sorry, there was an error!";
            echo "<br /><br />";
            echo $error."<br /><br />";
            die();

        }

        if(!isset($_POST["name"]) ||
            !isset($_POST["email"]) ||
            !isset($_POST["phone"]) ||
            !isset($_POST["message"])) {
                died("Sorry, there was an error!");
        }

        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];

        $error_message = "";
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if(!preg_match($email_exp,$email_form)) {
        $error_message .= "Invalid Email! <br />";
    }

    $string_exp = "/^[A-Za-z .'-]+$/";

    if(!preg_match($string_exp,$name)) {
        $error_message .= "Please enter a valid name! <br />";
    }

    if(strlen($message) <2) {
        $error_message .= "Message cannot be blank!";
    }

    if(strlen($error_message)>0) {
        died($error_message);
    }

        $email_message = "Form details below. \n\n";

        function clean_string($string) {
            $bad = array("content-type","bcc:", "to:", "cc:", "href");
            return str_replace($bad,"",$string);
        }

        $email_message .= "Name: ".clean_string($name)."\n";
        $email_message .= "Email: ".clean_string($email)."\n";
        $email_message .= "Phone #: ".clean_string($phone)."\n";
        $email_message .= "Message: ".clean_string($message)."\n";


$header = "From: ".$email_from."\r\n"."Reply-To: ".$email_from."\r\n" . "X-Mailer: PHP/" . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);
?>
Thanks for reaching out!
<?php

}
?>