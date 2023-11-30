const mdLinks = require('md-links-aaf');
const markdownFilePath = './src/README.md'

const caminho = './src/api.test.js'; // Use process.argv[2] para pegar o caminho do arquivo

mdLinks(markdownFilePath)
  .then(links => {

    console.log(links);
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });