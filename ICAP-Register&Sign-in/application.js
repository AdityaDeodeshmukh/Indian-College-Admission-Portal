const submitbtn = document.querySelector(".submit");


function checkstudentdetails() {
    window.location.href = "parentdetails.html";
}

submitbtn.addEventListener("click",function(e){
    e.preventDefault();
    checkstudentdetails();
})


