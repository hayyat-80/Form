document.querySelector("#profilepic").addEventListener("change",function(){
    const reader= new FileReader();
    reader.addEventListener("load",()=>{
        sessionStorage.setItem("recent-image",reader.result);
    });
    reader.readAsDataURL(this.files[0]);
})
function validate(){
    var regName = /^[a-zA-Z]+$/;
    var regemail= /^([a-z\d]+)([a-z\d$&+,:;=?@#|'<>.^*()%!-_]+)([a-z\d]+)@([a-z\d]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    var regpassword= /^([a-z\d$&+,:;=?@#|'<>.^*()%!-_]{8})$/;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    var fname = document.forms["myform"]["fname"].value;
    var lname = document.forms["myform"]["lname"].value;
    var profilepicture = document.forms["myform"]["profilepicture"].value;
    var gender = document.forms["myform"]["gender"].value;
    var city = document.forms["myform"]["city"].value;
    var email = document.forms["myform"]["email"].value;
    var password = document.forms["myform"]["password"].value;
    if (fname == "") {
        document.getElementById("fmsg").style.display="block";
        document.getElementById("fmsg").innerHTML="First Name must be filled out";
        return false;
    }
    if (lname == "") {
        document.getElementById("lmsg").style.display="block";
        document.getElementById("lmsg").innerHTML="Last Name must be filled out";
        return false;
    }
    if(profilepicture == ""){
        document.getElementById("profilepicturemsg").style.display="block";
        document.getElementById("profilepicturemsg").innerHTML="Profile picture must be attach"
        return false;
    }
    if(gender == ""){
        document.getElementById("gendermsg").style.display="block";
        document.getElementById("gendermsg").innerHTML="Please select your gender";
        return false;
    }
    if (city == "") {
        document.getElementById("citymsg").style.display="block";
        document.getElementById("citymsg").innerHTML="Please select your city!";
        return false;
    }
    if (email == "") {
        document.getElementById("emailmsg").style.display="block";
        document.getElementById("emailmsg").innerHTML="Please enter your email!";
        return false;
    }
    if (password == "") {
        document.getElementById("passwordmsg").style.display="block";
        document.getElementById("passwordmsg").innerHTML="Please enter your password!";
        return false;
    }
    else{
        if(!regName.test(fname)){
            document.getElementById("fmsg").style.display="block";
            document.getElementById("fmsg").innerHTML="First name is not matching the validation.";
            return false;
        }
        if(!regName.test(lname)){
            document.getElementById("lmsg").style.display="block";
            document.getElementById("lmsg").innerHTML="Last name is not matching the validation.";
            return false;
        }
        if (!regemail.test(email)) {
            document.getElementById("emailmsg").style.display="block";
            document.getElementById("emailmsg").innerHTML="Email is not matching the validation.";
            return false;
        }
        if (!regpassword.test(password)) {
            document.getElementById("passwordmsg").style.display="block";
            document.getElementById("passwordmsg").innerHTML="Password is not matching the validation.";
            return false;
        }
        if (!allowedExtensions.exec(profilepicture)) {
            document.getElementById("profilepicturemsg").style.display="block";
            document.getElementById("profilepicturemsg").innerHTML="Invalid file type";
            return false;
        } 
        else{
            return true;
        }
    }
}
function myFunction(){
    document.getElementById("fmsg").style.display="none";
    document.getElementById("lmsg").style.display="none";
    document.getElementById("profilepicturemsg").style.display="none";
    document.getElementById("gendermsg").style.display="none";
    document.getElementById("citymsg").style.display="none";
    document.getElementById("emailmsg").style.display="none";
    document.getElementById("passwordmsg").style.display="none";
}