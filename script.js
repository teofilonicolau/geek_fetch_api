const produtoInput = document.getElementById('produto');
const valorInput = document.getElementById('valor');
const descricaoInput = document.getElementById('descricao');
const btnCadastrar = document.getElementById('btn-cadastrar');
const feedbackUsuario = document.getElementById('feedback-usuario');

btnCadastrar.addEventListener('click', cadastrarProduto);

function cadastrarProduto(evento) {
  evento.preventDefault();

  const bodyJson = JSON.stringify({
    produto: produtoInput.value,
    valor: valorInput.value,
    descricao: descricaoInput.value
  });

  fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyJson
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
    feedbackUsuario.textContent = 'Produto cadastrado com sucesso!';
    limparCampos();
  })
  .catch(error => {
    console.error(error);
    feedbackUsuario.textContent = 'Erro ao cadastrar o produto. Por favor, tente novamente.';
  });
}

function limparCampos() {
  produtoInput.value = '';
  valorInput.value = '';
  descricaoInput.value = '';
}