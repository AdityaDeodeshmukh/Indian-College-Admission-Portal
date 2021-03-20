const submitbtn3 = document.querySelector(".submitbtn");

function edudetails() {
    window.location.href = "documents.html";
}


submitbtn3.addEventListener("click", function (e) {
    e.preventDefault();
    edudetails();
})