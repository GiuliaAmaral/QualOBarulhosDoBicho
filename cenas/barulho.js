async function barulhoErrou() {
    global.jogo.elementAudio.pause();
    var nomeDoBicho = global.jogo.barulhos[global.jogo.nBarulhoAtual]["nomeDoBicho"];
    var ilustracao = global.jogo.barulhos[global.jogo.nBarulhoAtual]["ilustracao"];
    await mudarCena("erro");
    $("#cenas_erro h1").html("Poxa que pena, você errou!");
    $("#cenas_erro p").html(`
        Esse barulho era do animal ${nomeDoBicho}.
        <br/>
        <img src="${global.config.pastaIlustacoes}${ilustracao}" alt="Ilustração do bicho." />
    `);
    $("#cenas_erro .conteudoAdd").html('<button onclick=\'mudarCena("inicio")\' type="button" class="btn btn-stopstop">Voltar ao Início</button>');
}

async function barulhoAcertou() {
    global.jogo.elementAudio.pause();
    if (global.jogo.nBarulhoAtual >= (5-1)) {
        // Vitoriaa
        global.jogo.pontosAtual = global.jogo.pontosAtual + 10;
        await mudarCena('vitoria');
        return;
    } else {
        global.jogo.pontosAtual = global.jogo.pontosAtual + 10;
        global.jogo.nBarulhoAtual = global.jogo.nBarulhoAtual+1;
        await mudarCena("acertou");
        $("#cenas_acertou h1").html("Parabéns");
        $("#cenas_acertou p").html("Você acertou, vamo pra o próximo barulho !");
        setTimeout(async () => {
            await mudarCena('barulho');
        }, 1000);
        return;
    }
}