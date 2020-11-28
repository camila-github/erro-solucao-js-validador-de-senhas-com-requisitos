//SOLUCAO 1
let senha = "";
do {
    senha = gets();
    if (senha !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));
} while (senha !== "");

function validadorDeSenha(senha) {
    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (senha.length < 6 || senha.length > 32) ? false : (!regex.exec(senha) ? false : true);
}



//SOLUCAO 2
while ((senha = gets()) !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));

function validadorDeSenha(pw) {
    regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (pw.length < 6 || pw.length > 32) ? false : (!regex.exec(pw) ? false : true);
}