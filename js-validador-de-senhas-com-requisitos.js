//SOLUCAO 1
let senha = "";
do {
    senha = gets();
    if (senha !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));
} while (senha !== "");

function validadorDeSenha(senha) {
    /* (?=(?:.*?[A-Z]){1}) - Mínimo 1 letra maiúscula
       (?=(?:.*?[0-9]){1}) - Mínimo 1 número
       (?=(?:.*?[]){0})[0-9a-zA-Z] - Nao entrar nenhum outro caracter especial, dentro dos colchetes estar em branco
       Valida numeros, letras A-Z e a-z, e nao permite caracter alfanumerico. */
    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (senha.length < 6 || senha.length > 32) ? false : (!regex.exec(senha) ? false : true);
}





//SOLUCAO 2
do {
    if ((senha = gets()) !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));
} while (senha !== "");

function validadorDeSenha(pw) {
    /* (?=(?:.*?[A-Z]){1}) - Mínimo 1 letra maiúscula
       (?=(?:.*?[0-9]){1}) - Mínimo 1 número
       (?=(?:.*?[]){0})[0-9a-zA-Z] - Nao entrar nenhum outro caracter especial, dentro dos colchetes estar em branco
       Valida numeros, letras A-Z e a-z, e nao permite caracter alfanumerico. */
    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (pw.length < 6 || pw.length > 32) ? false : (!regex.exec(pw) ? false : true);
}