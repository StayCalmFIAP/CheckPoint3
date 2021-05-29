function Pessoa(nome, senha){
    this.nome = nome,
    this.email = email,
    this.senha = senha
}

function Sac(assunto, nome, coment) {
    this.assunto = assunto,
    this.nome = nome,
    this.coment = coment;
    
}

var rnome = [];
var rsenha = [];
const botaoRgt = document.getElementById('btnEnviarSac');
botaoRgt.addEventListener('click',function(){
    
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;
    

    const pessoa = new Pessoa(userName,userPass);
    rnome.push(pessoa.nome)
    rsenha.push(pessoa.senha)
    
    
    
});

const botaoLgn = document.getElementById('btnEnviarSac');
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
var dados =['','','',''];
const botaoSac = document.getElementById('btnEnviarSac');
botaoSac.addEventListener('click',function(){
    const listaInputs = document.querySelectorAll('input[type="text"]');
    
            let assunto = idtxtAssunto.value;
           let nome = idtxtNomeSac.value;
           let comenta = idtxtComentarioSac.value;

       
            const sac = new Sac(assunto,nome,comenta);
                
                console.log('Assunto  : ' + sac.assunto);
                console.log('Nome : ' + sac.nome);
                console.log('Comentario : ' + sac.coment);
           
            
             
             
  
});

function validaCamposForm(){
    let controle = true;
    const listaInputs =document.querySelectorAll('input[type="text"]');
    for (i of listaInputs){
        if (i.value == ''){
            alert('Prencha todos os campos antes de enviar')
            controle = false;
        }
    }
    alert('Todos os campos foram preenchidos')
    return controle;
}








