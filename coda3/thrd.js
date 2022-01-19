function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
    item.innerHTML = "";
    }

    }
    function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

    }

    function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<2){
    seterror("name", "*Length of the name must be more than 2 charecters");
    returnval = false;
    }

    if (name.length == 0){
    seterror("name", "*name can't be blank");
    returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>25){
    seterror("email", "*Email length is too long");
    returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
    seterror("phone", "*Phone number should be of 10 digits and no alphebets can be used");
    returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

    // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
    seterror("pass", "*Password should be atleast 6 characters long!");
    returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if(cpassword != password){
        seterror("cpass","*password and confirm password should be same");
        returnval=false;
    }

    return returnval;
    }

