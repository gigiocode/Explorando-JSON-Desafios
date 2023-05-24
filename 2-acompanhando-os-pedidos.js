const pedido = {
  cliente: {
    nome: "Ana",       // Lê a primeira linha da "Entrada": Nome do Cliente.
    endereco: "Rua DIO, 5",   // Lê a segunda linha da "Entrada": Endereço do Cliente.
  },
  id: 12,
  telefone: '1111-9999', // Lê a terceira linha da "Entrada": ID do Pedido.
};

//TODO: Leia a quarta linha da "Entrada": Telefone do Cliente.

//TODO: Crie dinamicamente a propriedade "telefone" no objeto JSON "pedido.cliente".

//TODO: Imprima a saída formatada de acordo com este desafio.
console.log(`Cliente: ${pedido.cliente.nome}, ${pedido.cliente.endereco}
ID: ${pedido.id}
Tel: ${pedido.telefone}`)