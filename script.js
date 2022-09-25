function calcular() {
  const velocidade = document.querySelector("#numberInput").value;
  const gravidade = 10;
  const hmax = (velocidade * velocidade) / (2 * gravidade);
  const tempoTotal = velocidade / gravidade;

  // seleciona o elemento
  document.querySelector("#tempoTotal").innerHTML = tempoTotal;
  document.querySelector("#hmax").innerHTML = hmax;
}
