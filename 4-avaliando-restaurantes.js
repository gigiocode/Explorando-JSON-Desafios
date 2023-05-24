const restaurantes = [
    {
      nome: "bar do zé", 
      y: 3.5
    },
    {
      nome: "pizza boa", 
      y: 4.5
    }
  ];
  
  //TODO: Usando o array acima identifique o restaurante com a melhor avaliação.
  //Dica: Explore o conceito de "reduce" em seu array, ele pode muito útil neste desafio.
  //Referência: https://stackoverflow.com/a/34087850/3072570
  const max = restaurantes.reduce((prev, current) => (prev.y > current.y) ? prev : current, 1)
  
  console.log(`Restaurante: ${max.nome}, Avaliação:  ${max.y.toFixed(1)}`)