function validate()
{
 return (nameValidate() &&
 emailValidate() && cnfEmailValidate() && genderValidate() && phnNoValidate());
 }

 function nameValidate(){
  var NameErr = document.getElementById('name_error');
    if( document.myForm.fname.value == "" )
     {

          NameErr.innerHTML = "Please provide your Name!";
          document.myForm.fname.focus() ;
          return false;
      }
    else {
             NameErr.innerHTML = "";
    }
    return true;
 }

function emailValidate(){
     var email = document.myForm.email.value;

     var EmailErr = document.getElementById('email_error');
     atpos = email.indexOf("@");
     dotpos = email.lastIndexOf(".");

   if (email == "" || atpos < 1 || ( dotpos - atpos < 2 ))
   {

       EmailErr.innerHTML ="Please enter correct email ID";
       document.myForm.email.focus() ;
       return false;
    }
    else {
        EmailErr.innerHTML = "";
   }
   return true;
}

function cnfEmailValidate(){
 var cnfrmErr=document.getElementById('cnfEmail_error');
   if( document.myForm.email.value != document.myForm.cnfMail.value )
   {

       cnfrmErr.innerHTML="Email Id not match";
       return false;
   }
   else{
        cnfrmErr.innerHTML="";
   }
   return true;
 }

 function genderValidate(){

 var Gendererr = document.getElementById('gender_error');
    if ( ( myForm.gender[0].checked == false ) && ( myForm.gender[1].checked == false ) )
       {

           Gendererr.innerHTML = "Please choose your Gender: Male or Female" ;
           return false;
       }
    else {
            Gendererr.innerHTML = "";
          }
          return true;
 }

 function phnNoValidate(){
 var phn_error = document.getElementById('phnNo_error');
   if( document.myForm.phnNo.value == "" ||
              isNaN( document.myForm.phnNo.value) ||
              document.myForm.phnNo.value.length != 10 )
      {

          phn_error.innerHTML = "Please provide a Mobile No in the format 123." ;
          document.myForm.phnNo.focus() ;
          return false;
      }
   else {
         phn_error.innerHTML = "";
         }

   return (true);
}


