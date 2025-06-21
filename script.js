document.getElementById("pedidoForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const tipo = document.getElementById("tipo").value;
  const descricao = document.getElementById("descricao").value;

  if (!nome || !tipo || !descricao) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  document.getElementById("resultado").innerText = "Pedido enviado! Obrigado :)";

  // Aqui você pode adicionar o código para enviar o formulário via EmailJS ou outro serviço
});

