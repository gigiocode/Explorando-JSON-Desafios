const cliente1 = { 
  nome: "Renan", 
  item: "Massa", 
  preco: 45.0,
};

// JSON do Cliente 2
const cliente2 = { 
  nome: "Rafael", 
  item: "Massa", 
  preco: 45.0,
};

//TODO: Comparar os JSONs dos Clientes, verificando se todas as propriedades são iguais.


//TODO: Imprimir a saída conforme o enunciado deste desafio.
if (cliente1.nome === cliente2.nome && cliente1.item === cliente2.item && cliente1.preco === cliente2.preco) {
  console.log("Os pedidos são iguais")
 } else {
   console.log("Os pedidos são diferentes")
 }
