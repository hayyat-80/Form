const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fname = urlParams.get('fname')
const lname = urlParams.get('lname')
const profilepicture = urlParams.get('profilepicture')
const gender = urlParams.get('gender')
const city = urlParams.get('city')
const email = urlParams.get('email')
const password = urlParams.get('password')
console.log(password);
function myFunction(){
    document.getElementById("fname").placeholder=fname;
    document.getElementById("lname").placeholder=lname;
    document.getElementById("gender").placeholder=gender;
    document.getElementById("city").placeholder=city;
    document.getElementById("email").placeholder=email;
    document.getElementById("password").placeholder=password;
}

document.addEventListener("DOMContentLoaded",()=>{
    const recentImageDataUrl=sessionStorage.getItem("recent-image");
    if(recentImageDataUrl){
        document.querySelector("#profilepicpreview").setAttribute("src",recentImageDataUrl);
    }
})