const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const fname = urlParams.get('fname')
const lname = urlParams.get('lname')
const profilepicture = urlParams.get('profilepicture')
const gender = urlParams.get('gender')
const city = urlParams.get('city')
const email = urlParams.get('email')
const password = urlParams.get('password')
function getvalues(){
    document.getElementById("fname").value=fname;
    document.getElementById("lname").value=lname;
    document.getElementById("gender").value=gender;
    document.getElementById("city").value=city;
    document.getElementById("email").value=email;
    document.getElementById("password").value=password;
}

document.addEventListener("DOMContentLoaded",function () {
    const recentImageDataUrl=sessionStorage.getItem("recent-image");
    if(recentImageDataUrl){
        document.getElementById("profilepicpreview").setAttribute("src",recentImageDataUrl);
    }
})