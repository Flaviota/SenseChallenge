
function login() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if (login == "flaviota" && senha == "flaviota") {
        alert('Sucesso!');
        location.href = "index.html";
    } else {
        alert('Usuário ou senha incorretos!')
    }
}