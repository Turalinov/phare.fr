<?php
    $post = json_decode(file_get_contents('php://input'), true);

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;



    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    require 'PHPMailer/src/SMTP.php';

    //Create an instance; passing `true` enables exceptions
    $mail = new PHPMailer(true);

    if(isset($post['messageObj'])) {


 



        // $admin_email = 'contact@phare360.com';

        // $to = $admin_email;
        // $subject = 'Заявка c сайта';
        $data = $post['messageObj'];

        $message = '';
        $subject = 'Subject';

          foreach ($data as $key => $value) {

            if ($key == "formtype") {
              
              if( $value == "reco" ) {
                $subject = "Convaincre mon RH/CSE";
              } else if ($value == "demo" ) {
                $subject = "Demandez une démo";

              } else { 
                $subject = "Souscrire le contrat";
                
            
              }


              continue;
            }

            if($key == "firstname") {
              $key = "Prénom";
            } else if ($key == "lastname") {
              $key = "Nom";
            }else if ($key == "email") {
              $key = "Email";
            }else if ($key == "entreprise") {
              $key = "Nom de l’entreprise";
            }else if ($key == "department") {
              $key = "Département";
            }else if ($key == "salaries") {
              $key = "Nombre de salariés";
            }else if ($key == "phone") {
              $key = "Téléphone";
            }else if ($key == "siret") {
              $key = "Siret";
            } else if ($key == "role") {
              $key = "Role";
            } else if ($key == "role") {
              $key = "Role";
            } else if ($key == "address") {
              $key = "Address";
            } 
              $message .=  $key . ": " . $value ."<br>";
          }

          try {
              $mail->isSMTP();
              $mail->Host = "smtp.gmail.com";
              $mail->SMTPAuth  = true;
              $mail->Username =  'testproject9494@gmail.com';
              $mail->Password = 'YPyeg4RI1ay#';
              $mail->SMTPSecure = PHPMailer :: ENCRYPTION_SMTPS ;
              $mail->Port = 465;
              $mail->CharSet = 'UTF-8';

              $mail->isHTML(true);
              $mail->setFrom('testproject9494@gmail.com', 'Phare');
              $mail->addAddress('contact@phare360.com'); //contact@phare360.com
              $mail->Subject = $subject;
              $mail->Body = $message;

              $mail->isHTML(true);
              $mail->send();

              echo json_encode(array('status' => true));  exit();
            } catch (Exception $e) {
    
              echo json_encode(array('status' => false, 'error' => $mail->ErrorInfo));  exit();
            }


        //заголовок
        // $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        // $headers .= "From: Phare <contact@phare360.com>\r\n";

        //отправляем
        // $result = mail($to, $subject, $message, $headers);




        // if($result) {
        //     echo json_encode(array('status' => true));  exit();
        // } else {
        //     echo json_encode(array('status' => false));  exit();
        // }
      //  exit();
    }

    // if(isset($post['data'])) {

    //     $admin_email = 'rusltur_24@mail.ru';

    //     $to = $admin_email;


    //     $subject = 'Заявка c сайта (Если у вас остались вопросы)';


    //     $data  = $post['data'];


    //     $message = '';
    //     $message .= '<b>Имя:</b> '.$data['username'].'<br>';
    //     $message .= '<b>Телефон:</b> '.$data['phone'].'<br>';


    //     //заголовок
    //     $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    //     $headers .= "From: Аудит-доверие | Аудиторские услуги <info@doverie-audit.ru>\r\n";

    //     //отправляем
    //     $result = mail($to, $subject, $message, $headers);

    //     if($result) {
    //         echo json_encode(array('status' => true));  exit();
    //     } else {
    //         echo json_encode(array('status' => false));  exit();
    //     }
    //    exit();
    // }

?>
