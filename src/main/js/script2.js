 var username=document.forms["myForm"]["fname"];
      username.addEventListner("blur",nameVerify,true);

      function Validate(){
      if(username.value == ""){
               name_error.textContent="username is required";
               return false;
      }
   }