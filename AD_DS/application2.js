const submitbtn2 = document.querySelector(".submitbtn");

function edudetails() {
    window.location.href = "edudetails.html";
}


submitbtn2.addEventListener("click", function (e) {
    e.preventDefault();
    edudetails();
})