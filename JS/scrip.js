class Pessoa {
    constructor(nome, senha) {
        this.nome = nome,
            this.email = email,
            this.senha = senha;
    }
}
class Sac {
    constructor(assunto, nome, email, comentario) {
        this.assunto = assunto,
            this.nome = nome,
            this.email = email,
            this.comentario = comentario;
    }
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

const botaoSac = document.getElementById('btnSac');
botaoSac.addEventListener('click',function(){
    const listaInputs = document.getElementsByTagName('input');
    


    //ITERAR A LISTA DE INPUTS
   for (i in listaInputs) {
       if ((listaInputs[i].value != '') && (listaInputs[i].type != 'checkbox') && (listaInputs[i].type != undefined)) {
         dados[i] = listaInputs[i];
        }

   }
    const sac = new Sac(dados[0],dados[1],dados[3],dados[4]);
    console.log('Assunto  : ' + sac.assunto);
    console.log('Nome : ' + sac.nome);
    console.log('Email  : ' + sac.email);
    console.log('Comentario : ' + sac.comentario);
    document.alert("Todos os campos foram preenchidos")
    
    
    
    
});

function validaCamposForm(){
    let controle = true;
    const listaInputs =document.querySelectorAll('input');
    for (i of listaInputs){
        if (i.value == ''){
            alert('Prencha todos os campos antes de enviar')
            controle = false;
        }
        alert(i.value)
    }
}
return controle;






