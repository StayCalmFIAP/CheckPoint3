let rnome = ['Gabriel',];
let rsenha = ['RM88760',];

function Pessoa(nome, senha) {
    this.nome = nome,
        this.senha = senha
}

function Sac(assunto, nome, coment) {
    this.assunto = assunto,
        this.nome = nome,
        this.coment = coment;
}

function fazerRegistro() {
    let userName = idTxtUser.value;
    let userPass = idTxtPass.value;

    const pessoa = new Pessoa(userName, userPass);
    rnome.push(pessoa.nome);
    rsenha.push(pessoa.senha);
}

function fazerLogon() {

    let controle = true;
    let userName = idTxtUser.value;
    let userPass = idtxtSenha.value;
    const pessoa = new Pessoa(userName, userPass)
    if (rnome.includes(pessoa.nome) && !rsenha.includes(pessoa.senha)) {
        alert("Senha incorreta para o usuario");
        controle = false;
        return controle;
    } else if (rnome.includes(pessoa.nome) && rsenha.includes(pessoa.senha)) {
        return controle;
    } else if (pessoa.nome == '' || pessoa.senha == '') {
        alert('Prencha todos os campos antes de enviar');
        controle = false;
        return controle
    } else {
        alert("Usuario não cadastrado, favor fazer cadastro");
        controle = false;
        return controle
    }

}
//funcao de enviar para o sac
function sac() {

    let assunto = idtxtAssunto.value;
    let nome = idtxtNomeSac.value;
    let comenta = idtxtComentarioSac.value;
    const sac = new Sac(assunto, nome, comenta);
    console.log('Assunto  : ' + sac.assunto);
    console.log('Nome : ' + sac.nome);
    console.log('Comentario : ' + sac.coment);

    let controle = true;
    const listaInputs = document.querySelectorAll('input[type="text"]');
    for (i of listaInputs) {
        if (i.value == '') {
            alert('Prencha todos os campos antes de enviar');
            controle = false;
        } else {
            alert('Todos os campos foram preenchidos');
        }
    }

    return controle;

}

function validaCamposForm() {
    let controle = true;
    const listaInputs = document.querySelectorAll('input[type="text"]');
    for (i of listaInputs) {
        if (i.value == '') {
            alert('Prencha todos os campos antes de enviar');
            controle = false;
        } else {
            alert('Todos os campos foram preenchidos');
        }
    }

    return controle;
}








