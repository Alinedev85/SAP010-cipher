const cipher = {

  /* Codigo alfab.(0 a 25) /codigo ASCII maiuscula (65 até 90)/ codigo ASCII minúsculas(97 até 122)/ deslocar/ giro/ codigo alfb.*/
  encode: function (chave, texto) {
    if (typeof chave !== 'number' || typeof texto !== 'string') { //verificar se o tipo de dado armazenado não é numero
      throw new TypeError("apenas string e numero");

    } else {

      let encodedString = "";
      for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];

        if (caractere.match(/[A-Z]/i)) { //maiúscula, match=comparação 
          const codigo = texto.charCodeAt(i);
          caractere = String.fromCharCode(((codigo + 65 + chave) % 26) + 65);
        } else if (caractere.match(/[a-z]/i)) {
          const codigo = texto.charCodeAt(i);
          caractere = String.fromCharCode(((codigo + 97 + chave) % 26) + 97);
        }

        encodedString += caractere;
      }

      return encodedString;
    }
  },

  decode: function (chave, texto) {
    if (typeof chave !== 'number' || typeof texto !== 'string') {
      throw new TypeError("apenas string e numero");

    } else {

      let decodificadodString = "";
      for (let i = 0; i < texto.length; i++) {
        let caractere = texto[i];

        if (caractere.match(/[A-Z]/i)) {
          const codigo = texto.charCodeAt(i);
          caractere = String.fromCharCode(((codigo + 65 - chave + 26) % 26) + 65);
        } else if (caractere.match(/[a-z]/i)) {
          const codigo = texto.charCodeAt(i);
          caractere = String.fromCharCode(((codigo - 97 - chave + 26) % 26) + 97);
        }

        decodificadodString += caractere;
      }

      return decodificadodString;

    }


  },
};
export default cipher