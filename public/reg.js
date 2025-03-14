/*
//Инициализация кнопок
const CreateAccountButton = document.getElementById('CAB')
CreateAccountButton.addEventListener('click', CreateUserButton)
let AccountCreateMessage = "Аккаунт " + username + " успешно создан!"

//Функция создания пользователя
function CreateUserButton(){
    let username = document.getElementById('username').value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const data = { username, email, password };

    //Отправка запроса для создания пользователя
    fetch('/api/elevion',{
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
}
    */

const CreateAccountButton = document.getElementById('CAB')
CreateAccountButton.addEventListener('click', CreateUserButton)

function CreateUserButton(){
    history.pushState(null, null, "curLoc");
}