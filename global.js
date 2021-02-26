var global = {
    config: {
        nIntervaloVitoriasModalAvaliar: 5,
        cacheForceClear: false,
        pastaAudios: "src/audios/",
        pastaIlustacoes: "src/img/ilustracoes/",
        front: {
            // host: "https://giuliaamaral.github.io/QualOBarulhosDoBicho"
            host: "http://localhost:5500"
        },
    },
    jogo: {
        elementAudio: new Audio(),
        nBarulhoAtual: 0,
        pontosAtual: 0,
        pontosTotais: localStorage.getItem("pontosTotais") || 0,
        barulhos: [
            {
                nomeDoBicho: "Vaca",
                audio: "COW.wav",
                ilustracao: "vaca.png"
            },
            {
                nomeDoBicho: "Cachorro",
                audio: "BARK.wav",
                ilustracao: "cachorro.png"
            },
            {
                nomeDoBicho: "Pássaro",
                audio: "BIRD1.wav",
                ilustracao: "passaro.png"
            },
            {
                nomeDoBicho: "Urso",
                audio: "Bear1.wav",
                ilustracao: "urso.png"
            },
            {
                nomeDoBicho: "Gato",
                audio: "cat.mp3",
                ilustracao: "gato.png"
            },
            {
                nomeDoBicho: "Elefante",
                audio: "ELEPHANT1.wav",
                ilustracao: "elefante.png"
            },
            {
                nomeDoBicho: "Porco",
                audio: "Pig.mp3",
                ilustracao: "porco.png"
            },
            {
                nomeDoBicho: "Burro",
                audio: "burro.mp3",
                ilustracao: "burro.png"
            },
            {
                nomeDoBicho: "Ovelha",
                audio: "SHEEP.wav",
                ilustracao: "ovelha.png"
            },
            {
                nomeDoBicho: "Gaivota",
                audio: "GAIVOTABVO.wav",
                ilustracao: "gaivota.png"
            }
        ]
    }
}