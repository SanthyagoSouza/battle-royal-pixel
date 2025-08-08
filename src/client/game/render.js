// Paleta de cores segura e acessível



const COLORS = {
  players: [
    '#ffd700', // Amarelo ouro
    '#00aaff', // Azul elétrico
    '#ff3333', // Vermelho vivo
    '#cc33ff', // Roxo magenta
    '#99ff00', // Verde limão
    '#ff8800', // Laranja vibrante
  ],
  food: [
    '#ffffff', // Branco puro
    '#33ddff', // Azul claro
    '#39ff14', // Verde neon
  ],
  powerUps: [
    '#ff00ff', // Rosa neon
    '#00ffff', // Ciano intenso
    '#ffff99', // Amarelo claro
  ],
  traps: [
    '#555555', // Cinza escuro
    '#990000', // Vermelho escuro
    '#663300', // Marrom
  ]
};

// Exemplo de matriz do jogo (5x5 só pra exemplo)
let gameMatrix = [
  ['.', '.', 'F1', '.', 'P1'],
  ['.', 'T1', '.', '.', '.'],
  ['P2', '.', '.', 'F2', '.'],
  ['.', '.', 'PU1', '.', 'T2'],
  ['.', 'P3', '.', '.', '.'],
];

/*
Legenda:
.  = espaço vazio
P1 = Jogador 1 (cor sorteada de COLORS.players)
F1 = Alimento (cor sorteada de COLORS.food)
PU1 = Power-up (cor sorteada de COLORS.powerUps)
T1 = Armadilha (cor sorteada de COLORS.traps)
*/

// Exemplo: associando cor com base no código
function getColorFromCode(code) {
  if (code.startsWith('P')) {
    const index = parseInt(code.substring(1)) - 1;
    return COLORS.players[index % COLORS.players.length];
  }
  if (code.startsWith('F')) {
    const index = parseInt(code.substring(1)) - 1;
    return COLORS.food[index % COLORS.food.length];
  }
  if (code.startsWith('PU')) {
    const index = parseInt(code.substring(2)) - 1;
    return COLORS.powerUps[index % COLORS.powerUps.length];
  }
  if (code.startsWith('T')) {
    const index = parseInt(code.substring(1)) - 1;
    return COLORS.traps[index % COLORS.traps.length];
  }
  return '#111'; // vazio = fundo
}

console.log(getColorFromCode('P1')); // exemplo de retorno