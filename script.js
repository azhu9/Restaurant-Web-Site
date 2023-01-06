// const button = document.querySelector("button");
const submitButton = document.querySelector("#submit-button");
// function cateringAndReservations () {
// }
// document.getElementById("last-modified").innerHTML = "This page was last updated: "+document.lastModified;

submitButton.onclick = function(){
    document.getElementById("resume-input").value = "";
    document.getElementById("first-input").value = "";
    document.getElementById("last-input").value = "";
    document.getElementById("email-input").value = "";
}
