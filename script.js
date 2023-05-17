var jogador1 = '';
var jogador2 = '';
var jogoAtivo = false;

function iniciarJogo() {
    jogador1 = '';
    jogador2 = '';
    jogoAtivo = true;
    document.getElementById('start-button').disabled = true;
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';
    document.getElementById('resultado').textContent = '';
}

function escolherJogada(event) {
    if (!jogoAtivo) return;

    var tecla = event.key.toLowerCase();
    
    if (tecla === 'a' || tecla === 's' || tecla === 'd') {
        jogador1 = getEscolhaPorTecla(tecla);
    } else if (tecla === 'j' || tecla === 'k' || tecla === 'l') {
        jogador2 = getEscolhaPorTecla(tecla);
    }

    if (jogador1 !== '' && jogador2 !== '') {
        jogoAtivo = false;
        document.getElementById('result-container').style.display = 'block';
        exibirResultado();
    }
}

function getEscolhaPorTecla(tecla) {
    switch (tecla) {
        case 'a':
            return 'Pedra';
        case 's':
            return 'Papel';
        case 'd':
            return 'Tesoura';
        case 'j':
            return 'Pedra';
        case 'k':
            return 'Papel';
        case 'l':
            return 'Tesoura';
        default:
            return '';
    }
}

function exibirResultado() {
    var resultado = '';
    if (jogador1 === jogador2) {
        resultado = 'Empate!';
    } else if (
        (jogador1 === 'Pedra' && jogador2 === 'Tesoura') ||
        (jogador1 === 'Papel' && jogador2 === 'Pedra') ||
        (jogador1 === 'Tesoura' && jogador2 === 'Papel')
    ) {
        resultado = 'Jogador 1 venceu!';
    } else {
        resultado = 'Jogador 2 venceu!';
    }

    document.getElementById('resultado').textContent = resultado;
    document.getElementById('start-button').textContent = 'Reiniciar';
    document.getElementById('start-button').disabled = false;
}

document.addEventListener('keydown', escolherJogada);