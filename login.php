<?php
	header('Access-Control-Allow-Origin: *');	
	header('Content-Type: application/json');

	$email = $_POST["email"];
	$password = $_POST["password"];

	$sAdmins = file_get_contents("admins.json");
	$ajAdmins = json_decode( $sAdmins );
	$success = false;

	for ($i=0; $i < count($ajAdmins); $i++) { 
		if ($ajAdmins[$i]->email == $email && $ajAdmins[$i]->password == $password) {
            //echo $ajAdmins[$i]->email;
			$success = true;
			break;
            
            }
        
	}

echo json_encode(["success"=> $success]);

?>