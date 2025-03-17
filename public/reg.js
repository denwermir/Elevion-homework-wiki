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

const Back = document.getElementById('Back')
Back.addEventListener('click', back)
function back(){
    window.location.href = "index.html";
}   

function CreateUserButton(){
    //history.pushState(null, null, "curLoc");
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const data = { username, email, password };
    let returned, rpassword, remail, rusername
    fetch('/api/users',{
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    
    .then(response => {
        // Проверяем, успешен ли запрос
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json(); // Парсим JSON-ответ
      })
      .then(returned => {
        // Обрабатываем данные от сервера
        console.log('Ответ от сервера:', returned);
        if (returned.password) {
            
          console.log('Пароль пользователя:', returned.password);
        } else {
          console.log('Пароль не найден.');
        }
        rpassword = returned.password
        remail = returned.email
        rusername = returned.username
    
        localStorage.setItem("username", rusername)
        localStorage.setItem("password", rpassword)
        localStorage.setItem("email", remail)
    
        console.log(remail, rusername, rpassword)
      })
      .catch(error => {
        console.error('Ошибка при отправке запроса:', error.message);
      });
    

}

/*
fetch('/api/auth/login',{
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
})
//.then(response => response.json())
.then(response => {console.log(result.message);})
.then(result => {console.log(result.message);})
.catch(error => {
    console.error('Error:', error);
    alert('Error saving data');
});*/
