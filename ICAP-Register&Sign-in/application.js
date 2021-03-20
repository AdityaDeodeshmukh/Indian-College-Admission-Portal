const submitbtn = document.querySelector(".submit");


function checkstudentdetails() {
    window.location.href = "parent.html";
}

submitbtn.addEventListener("click",function(e){
    e.preventDefault();
    checkstudentdetails();
})


