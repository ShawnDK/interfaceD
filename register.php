<?php
   	
   $myFile = "admins.json";
   $arr_data = array(); // create empty array
   $id = uniqid();
  try
  {
	   //Get form data
	   $formdata = array(
           'id' => $id, 
	      'email'=> $_POST['email'],
	      'password'=> $_POST['password'],
          'name'=> $_POST['name'],
          'age'=> $_POST['age'],
          'image'=> $_POST['image']
	   );

	   //Get data from existing json file
	   $jsondata = file_get_contents($myFile);

	   // converts json data into array
	   $arr_data = json_decode($jsondata, true);

	   // Push user data to array
	   array_push($arr_data,$formdata);

       //Convert updated array to JSON
	   $jsondata = json_encode($arr_data, JSON_PRETTY_PRINT);
	   
	   //write json data into data.json file
	   if(file_put_contents($myFile, $jsondata)) {
	        echo 'Data successfully saved';
	    }
	   else 
	        echo "error";

   }
   catch (Exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
   }

?>
