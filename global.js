var global = {
    config: {
        nIntervaloVitoriasModalAvaliar: 5,
        cacheForceClear: false,
        pastaAudios: "src/audios/",
        front: {
            // host: "https://www.stopstop.planetsgames.com.br/jogar"
            host: "http://localhost:5500"
        },
    },
    jogo: {
        nBarulhoAtual: 0,
        pontosAtual: 0,
        pontosTotais: localStorage.getItem("pontosTotais") || 0,
        barulhos: [
            {
                nomeDoBicho: "Vaca",
                audio: "COW.wav"
            },
            {
                nomeDoBicho: "Cachorro",
                audio: "BARK.wav"
            },
            {
                nomeDoBicho: "Pasarinho",
                audio: "BIRD1.wav"
            },
            {
                nomeDoBicho: "Urso",
                audio: "Bear1.wav"
            },
            {
                nomeDoBicho: "Gato",
                audio: "CAT.wav"
            },
            {
                nomeDoBicho: "Elefante",
                audio: "ELEPHANT1.wav"
            },
            {
                nomeDoBicho: "Gaivota",
                audio: "GAIVOTABVO.wav"
            }
        ]
    }
}