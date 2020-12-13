async function barulhoErrou() {
    var nomeBarulhoAtual = global.jogo.barulhos[global.jogo.nBarulhoAtual]["nomeDoBicho"];
    await mudarCena("erro");
    $("#cenas_erro h1").html("Errrrouu");
    $("#cenas_erro p").html("Esse barulho era do animal " + nomeBarulhoAtual + ".");
    $("#cenas_erro .conteudoAdd").html('<button onclick=\'mudarCena("inicio")\' type="button" class="btn btn-stopstop">Voltar ao Início</button>');
}

async function barulhoAcertou() {
    if (global.jogo.nBarulhoAtual >= (global.jogo.barulhos.length-1)) {
        // Vitoriaa
        global.jogo.pontosAtual = global.jogo.pontosAtual + 10;
        await mudarCena('vitoria');
        return;
    } else {
        global.jogo.pontosAtual = global.jogo.pontosAtual + 10;
        global.jogo.nBarulhoAtual = global.jogo.nBarulhoAtual+1;
        await mudarCena("acertou");
        $("#cenas_acertou h1").html("Parabéns");
        $("#cenas_acertou p").html("Você acertou, booaaa, vamo pra o próximo barulho !");
        setTimeout(async () => {
            await mudarCena('barulho');
        }, 1000);
        return;
    }
}