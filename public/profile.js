document.getElementById("User").innerText = localStorage.getItem("username")

const Exit = document.getElementById('Exit')
Exit.addEventListener('click', exit)
function exit(){
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    localStorage.removeItem("email")
    window.location.href = "index.html";
}   
