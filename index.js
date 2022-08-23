  const opcoes = {
  1: {nome: 'Pipoca'},
  2: {nome: 'Espaguete'},
  3: {nome: 'Bife'},
  4: {nome: 'Feijão'},
  5: {nome: 'Brigadeiro'},
}

  const tempodasOpcoes = {
  1: {'tempo': 10},
  2: {'tempo': 8},
  3: {'tempo': 15},
  4: {'tempo': 12},
  5: {'tempo': 8},
}

function microondas(numerodaOpcao,  tempo) {
  const prato = tempodasOpcoes[tempo]

  if(!prato) {
    return console.log("Prato inexistente")
  }

  let mensagem


  let resultado = tempodasOpcoes < tempo ? 'tempo insuficiente' :
  tempo  > tempodasOpcoes * 2 && tempo <= tempodasOpcoes * 3 ? 'A comida queimou :(' :
  tempo > tempodasOpcoes * 3 ? 'KabUM!!' : 'Prato pronto, bom apetite!!'
 

  console.log(resultado);

}

microondas(1)

