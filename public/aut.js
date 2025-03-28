    let email = localStorage.getItem("email")
    let password = localStorage.getItem("password")
    const data = { email, password };
    let rpassword, remail, rusername
    fetch('/api/auth/login',{
      method: 'Post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
  })
  .then(response => {
      if (!response.ok) {
        throw new Error(`Ошибка HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(returned => {
      console.log('Ответ от сервера:', returned);
      if (returned.password) {
        window.location.href = "profile.html";
      } else {
        console.log('Пароль не найден.');
      }
    })
    .catch(error => {
      console.error('Ошибка при отправке запроса:', error.message);
    });

const JoinAccountButton = document.getElementById('CAB')
JoinAccountButton.addEventListener('click', JoinUserButton)

const Back = document.getElementById('Back')
Back.addEventListener('click', back)
function back(){
    window.location.href = "index.html";
}   

const Alter = document.getElementById('Alter')
Alter.addEventListener('click', AlterF)
function AlterF(){
    window.location.href = "register.html";
}   

function JoinUserButton(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
      const data = { email, password };
      let rpassword, remail, rusername
      fetch('/api/auth/login',{
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
      })
      .then(response => {
          if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
          }
          return response.json();
        })
        .then(returned => {
          console.log('Ответ от сервера:', returned);
          if (returned.password) {
            console.log('Пароль пользователя:', returned.password);
            rpassword = returned.password
            remail = returned.email
            rusername = returned.username
            localStorage.setItem("username", rusername)
            localStorage.setItem("password", rpassword)
            localStorage.setItem("email", remail)
            console.log(remail, rusername, rpassword)
            window.location.href = "profile.html";
          } else {
            console.log('Пароль не найден.');
          }
        })
        .catch(error => {
          console.error('Ошибка при отправке запроса:', error.message);
        });
}
