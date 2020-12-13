mudarCena('inicio');

async function clickJogar() {
    embaralhadorDeArray(global.jogo.barulhos);
    global.jogo.nBarulhoAtual = 0;

    setTimeout(async () => {
        await mudarCena('barulho');
    }, 100);
}
