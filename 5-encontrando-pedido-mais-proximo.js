const pedidos = [
    { 
        nome: "Rafael", 
        tipo: "massa", 
        y: 3.5
      },
      { 
        nome: "Julia", 
        tipo: "árabe", 
        y: 4.2
      },
      { 
        nome: "Carla",
        tipo: "hamburguer", 
        y: 2.0
      }
    ];
  
  //TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  const min = pedidos.reduce((prev, current) => (prev.y < current.y) ? prev : current, 1)
  
  console.log(`O pedido mais próximo é o de ${min.nome}, do tipo ${min.tipo}`)
