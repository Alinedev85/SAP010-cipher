console.log ("cipher")
//const cipher = {

  /* Codigo alfab.(0 a 25) /codigo ASCII maiuscula (65 até 90)/ codigo ASCII minúsculas(97 até 122)/ deslocar/ giro/ codigo alfb.*/
  // encode: function (chave, texto) {
  //   if (typeof chave !== 'number' || typeof texto !== 'string') { //verificar se o tipo de dado armazenado não é numero
  //     throw new TypeError("string e numero");

  //   } else {

  //     let encodedString = ""; //variável vazia para armazenar o texto cript.
  //     for (let i = 0; i < texto.length; i++) { // loop
  //       let caractere = texto[i]; // armazenar o caractere atual do texto original.
  //       const codigo = texto.charCodeAt(i); //variável para o valor numérico do caractere atual do texto original ----- tabela ASCII.
  //       if (caractere.match(/[A-Z]/)) { //maiúscula, match=comparação 
  //         if (codigo >= 65 && codigo <= 90); // valor numérico do caractere atual está dentro do intervalo  
  //         caractere = String.fromCharCode(((codigo - 65 + chave) % 26) + 65);//se for miniscula calcula o valor correspondente a letra codificada +chave fixa 
  //       } else if (caractere.match(/[a-z]/)) { //se o caractere atual não for uma letra maiúscula, o código verifica se é uma letra minúscula
  //         if (codigo >= 97 && codigo <= 122); //valor numérico do caractere atual está dentro do intervalo correspondente às letras minúsculas na tabela ASCII.
  //         caractere = String.fromCharCode(((codigo - 97 + chave) % 26) + 97);
  //       }

  //       encodedString += caractere;
  //     }

  //     return encodedString;
  //   }
  // },

  // decode: function (chave, texto) {
  //   if (typeof chave !== 'number' || typeof texto !== 'string') {
  //     throw new TypeError("apenas string e numero");

  //   } else {

  //     let decodificadodString = "";
  //     for (let i = 0; i < texto.length; i++) {
  //       let caractere = texto[i];
  //       const codigo = texto.charCodeAt(i);
  //       if (caractere.match(/[A-Z]/)) {
  //         if (codigo >= 65 && codigo <= 90) {
  //           caractere = String.fromCharCode(((codigo + 65 - chave + 26) % 26) + 65);
  //         }
  //       } else if (caractere.match(/[a-z]/)) {
  //         if (codigo >= 97 && codigo <= 122) {
  //           let resultado = codigo - 97 - chave;
  //           while (resultado < 0) {  //laço adicional de 26
  //             resultado += 26;
  //           }
  //           caractere = String.fromCharCode((resultado % 26) + 97);

  //         }
  //       }

  //       decodificadodString += caractere;
  //     }

  //     return decodificadodString;

  //   }


  // },
//};
//export default cipher