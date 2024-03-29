## Exercicio - Validador de senhas com requisitos

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Introdução a busca e substituição em JavaScript.
[https://digitalinnovation.one](https://digitalinnovation.one)


#### Descrição do Desafio:

Pedro e Fernando são os desenvolvedores em uma stratup e vão desenvolver o novo sistema de cadastro, e pediram a sua ajuda. Sua task é fazer o código que valide as senhas que são cadastradas, para isso você deve atentar aos requisitos a seguir:

A senha deve conter, no mínimo, uma letra maiúscula, uma letra minúscula e um número;
A mesma não pode ter nenhum caractere de pontuação, acentuação ou espaço;
Além disso, a senha pode ter de 6 a 32 caracteres.


#### Entrada:

A entrada contém vários casos de teste e termina com final de arquivo. Cada linha tem uma string S, correspondente a senha que é inserida pelo usuário no momento do cadastro.


#### Saída:

A saída contém uma linha, que pode ser “Senha valida.”, caso a senha tenha cada item dos requisitos solicitados anteriormente, ou “Senha invalida.”, se um ou mais requisitos não forem atendidos.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
Digital Innovation One | Senha invalida.
" " | 
AbcdEfgh99 | Senha valida.
" " | 
DigitalInnovationOne123 | Senha valida.
" " | 
Digital Innovation One 123 | Senha invalida.
" " | 
Aass9 | Senha invalida.
" " | 
Aassd9 | Senha valida.

#### Update:
14-03-2021 Criado funções utilizando constantes (const). Ajustado nomenclatura das constantes (Uso de conceitos CleanCode). 
limitado o acesso de variaveis apenas para função que esta utilizando a variavel.


```javascript
//SOLUCAO 1
/* Criado funções utilizando constantes (const). Ajustado nomenclatura das constantes (Uso de conceitos CleanCode). 
limitado o acesso de variaveis apenas para função que esta utilizando a variavel*/

/* (?=(?:.*?[A-Z]){1}) - Mínimo 1 letra maiúscula
   (?=(?:.*?[0-9]){1}) - Mínimo 1 número
   (?=(?:.*?[]){0})[0-9a-zA-Z] - Nao entrar nenhum outro caracter especial, dentro dos colchetes estar em branco
   Valida numeros, letras A-Z e a-z, e nao permite caracter alfanumerico. */
const regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
const validadorDeSenha = (pw) => (pw.length < 6 || pw.length > 32) ? false : (!regex.exec(pw) ? false : true);

/* A entrada de dados será pelo (gets()), a variavel senha fica acessivel apenas na função anonima, 
nao sendo possivel o acesso fora dessa função*/
(function (senha) {
    while (senha !== "") {
        console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));
        senha = gets();
    }
})(gets()); 



//SOLUCAO 2
/*A entrada de dados será pelo (gets()), a variavel senha fica acessivel em todo o escopo*/
while ((senha = gets()) !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));

/* (?=(?:.*?[A-Z]){1}) - Mínimo 1 letra maiúscula
   (?=(?:.*?[0-9]){1}) - Mínimo 1 número
   (?=(?:.*?[]){0})[0-9a-zA-Z] - Nao entrar nenhum outro caracter especial, dentro dos colchetes estar em branco
   Valida numeros, letras A-Z e a-z, e nao permite caracter alfanumerico. */
function validadorDeSenha(pw) {
    regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (pw.length < 6 || pw.length > 32) ? false : (!regex.exec(pw) ? false : true);
}



//SOLUCAO 3
/*A entrada de dados será pelo (gets()), a variavel senha fica acessivel em todo o escopo*/
let senha = "";
do {
    senha = gets();
    if (senha !== "") console.log("Senha " + (validadorDeSenha(senha) ? "valida." : "invalida."));
} while (senha !== "");
/* (?=(?:.*?[A-Z]){1}) - Mínimo 1 letra maiúscula
   (?=(?:.*?[0-9]){1}) - Mínimo 1 número
   (?=(?:.*?[]){0})[0-9a-zA-Z] - Nao entrar nenhum outro caracter especial, dentro dos colchetes estar em branco
   Valida numeros, letras A-Z e a-z, e nao permite caracter alfanumerico. */
function validadorDeSenha(senha) {
    var regex = /^(?=(?:.*?[A-Z]){1})(?=(?:.*?[a-z]){1})(?=(?:.*?[0-9]){1})(?=(?:.*?[]){0})[0-9a-zA-Z]*$/;
    return (senha.length < 6 || senha.length > 32) ? false : (!regex.exec(senha) ? false : true);
}
```
