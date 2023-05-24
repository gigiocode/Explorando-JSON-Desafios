//Aqui cria-se o objeto pedido com as informações do cliente, endereço, itens do pedido e taxa:
const pedido = {
  cliente: "João",
  endereco: "Rua B, 456",
  itens: [],
  taxaEntrega: 5.0
};

// Para popular o array de itens, criamos a seguinte estrutura de repetição:
var soma = 0
const quantidadeItens = 2
while (pedido.itens.length < quantidadeItens) {
  const nomeItem = ("Hamburguer", "Batata frita");
  const precoItem = (15, 8);
  pedido.itens.push({ nome: nomeItem, preco: precoItem });
  soma += precoItem
}

//TODO: Percorra o array de itens do pedido e calcule o seu valor total.
const totalFinal = soma + pedido.taxaEntrega


//TODO: Imprima a saída no padrão descrito neste desafio.
console.log(`Pedido: ${pedido.cliente}
Endereco de entrega: ${pedido.endereco}
Total: R$ ${totalFinal.toFixed(2)}`)