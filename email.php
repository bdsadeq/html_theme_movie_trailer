<?php

//a very simple email function

/**
 * Simple config START
 */
$email_to = 'sadeq@winexsoft.com'; //the address to which the email will be sent
$name = trim($_POST['name']);
$email = trim($_POST['email']);
$subject = trim($_POST['subject']);
$message = trim($_POST['message']);
/**
 * Simple config END
 */
/**
 * Additional config
 */
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

/**
 * Ajax reply with mail function
 */
if (mail($email_to, $subject, $message, $headers)) {
    echo 'ok';
} else {
    echo 'failed';
}
