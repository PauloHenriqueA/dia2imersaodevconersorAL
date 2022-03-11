function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmQuilometrosNumerico = parseFloat(valor);
  var valorEmQuilometros = (valorEmQuilometrosNumerico * 9500000000000000);
  
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "A distância é " + valorEmQuilometros;
  elementoValorConvertido.innerHTML = valorConvertido;
}
