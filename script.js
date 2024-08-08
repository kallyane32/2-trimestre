const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        
        enunciado: "Qual é o nome do personagem interpretado por Robert Downey Jr. no Universo Marvel?",
        alternativas: [
            {
                texto: "Homem de Ferro",
                afirmacao: "Você escolheu a resposta certa! Robert Downey Jr. é conhecido por interpretar Tony Stark, o Homem de Ferro."
            },
            {
                texto: "Capitão América",
                afirmacao: "Resposta errada. O Capitão América é interpretado por Chris Evans."
            }
        ]
    },
    {
        enunciado: "Qual é o nome do planeta natal de Thor?",
        alternativas: [
            {
                texto: "Asgard",
                afirmacao: "Correto! Thor é de Asgard, o reino dos deuses nórdicos."
            },
            {
                texto: "Sakaar",
                afirmacao: "Errado. Sakaar é o planeta onde Thor luta no filme 'Thor: Ragnarok'."
            }
        ]
    },
    {
        enunciado: "Quem é o vilão principal do filme 'Vingadores: Ultimato'?",
        alternativas: [
            {
                texto: "Thanos",
                afirmacao: "Certo! Thanos é o vilão principal que busca as Joias do Infinito."
            },
            {
                texto: "Loki",
                afirmacao: "Incorreto. Loki é um vilão, mas em 'Vingadores: Ultimato', o principal antagonista é Thanos."
            }
        ]
    },
    {
        enunciado: "Qual é o nome da equipe formada por Peter Quill, Gamora, Drax, Rocket e Groot?",
        alternativas: [
            {
                texto: "Guardiões da Galáxia",
                afirmacao: "Correto! Eles são conhecidos como os Guardiões da Galáxia."
            },
            {
                texto: "Vingadores",
                afirmacao: "Errado. Os Vingadores são uma equipe diferente composta por heróis como Iron Man, Capitão América, e outros."
            }
        ]
    },
    {
        enunciado: "Qual é o nome da pedra que permite manipular o tempo em 'Doutor Estranho'?",
        alternativas: [
            {
                texto: "Pedra do Tempo",
                afirmacao: "Correto! A Pedra do Tempo é usada por Doutor Estranho para manipular o tempo."
            },
            {
                texto: "Pedra do Espaço",
                afirmacao: "Errado. A Pedra do Espaço é utilizada por Loki e a Tesseract."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Obrigado por participar do quiz dos Filmes da Marvel!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();