
const CreateAccountButton = document.getElementById('CAB')
CreateAccountButton.addEventListener('click', CreateUserButton)

function CreateUserButton(){
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    const data = { email, password };
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
    fetch('/api/auth/login',{
        method: 'Post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
}
