function Pessoa(nome,email,senha){
    this.nome = nome,
    this.email = email,
    this.senha = senha
}


var rnome = [];
var rsenha = [];
const botaoRgt = document.getElementById('btnRegister');
botaoRgt.addEventListener('click',function(){
    
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;
    

    const pessoa = new Pessoa(userName,userPass);
    rnome.push(pessoa.nome)
    rsenha.push(pessoa.senha)
    
    
    
});

const botaoLgn = document.getElementById('btnLogin');
botaoLgn.addEventListener('click',function(){
    let controle = true;
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;
    if(!rnome.includes(userName) || !rnome.includes(userPass)){
        document.alert("Usuario não cadastrado, favor fazer cadastro");
        controle = false;
    }
    return controle;
    

   
    
    
    
});





