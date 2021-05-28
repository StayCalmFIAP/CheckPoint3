function Pessoa(nome,email,senha){
    this.nome = nome,
    this.email = email,
    this.senha = senha
}


var lnome = [];
var lemail = [];
var lsenha = [];

botaoSubmit.addEventListener('click',function(){
    
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;
    let userMail = idTxtMail.value;

    const pessoa = new Pessoa(userName,userMail,userPass);
    lnome.push(pessoa.nome)
    lemail.push(pessoa.email)
    lsenha.push(pessoa.senha)
    
    
    
});

