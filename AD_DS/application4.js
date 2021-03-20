const sb = document.querySelector(".submitbtn");



function collegedetails() {
    window.location.href = "engineering.html";
}


sb.addEventListener("click", function (e) {
    e.preventDefault();
    collegedetails();
})