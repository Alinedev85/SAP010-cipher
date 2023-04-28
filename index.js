import cipher from './cipher';

//                     ID do html          funcionar ao clicar        
document.getElementById("bcifrar").addEventListener("click", cifrar); //executar a função
document.getElementById("bdecifrar").addEventListener("click", decifrar);

//console.log(cipher);

function cifrar() { //declarando a função 

  const mensagem = document.getElementById("mensagem").value; /* cria uma variavel e atribui o valor fornecido no campo de input*/
  const chave = parseInt(document.getElementById("chave")).velue;
  const codificado = cipher.encode(mensagem, chave);
  document.getElementById("resultado").value = codificado;
}

function decifrar() {

  const mensagem = document.getElementById("mensagem").value; /* cria uma variavel e atribui o valor fornecido no campo de input*/
  const chave = parseInt(document.getElementById("chave")).value; /* parseInt- transforma o valor recebido do input (string) em um num. inteiro*/
  const decodificado = cipher.decode(mensagem, chave); /*será usada para armazenar msg cifrada*/
  document.getElementById("resultado").value = decodificado;
}




