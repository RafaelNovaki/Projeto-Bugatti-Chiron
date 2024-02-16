function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "r" && senha == "r"){
        alert('Sucesso');
        location.href = "projeto.html";
    }else {
        alert('usuario ou senha incorretos')
    }
}
