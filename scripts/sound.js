const musica = document.getElementById('musica');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup-opcoes');
const btnMute = document.getElementById('btn-mute');
const sliderVolume = document.getElementById('volume');
const btnFechar = document.getElementById('btn-fechar');
const btnOpcoes = document.querySelector('.btn-imagem-opcoes');

// inicia música no primeiro clique
document.addEventListener('click', () => {
    if (musica.paused) musica.play();
}, { once: true });

// abre popup
btnOpcoes.addEventListener('click', () => {
    overlay.classList.add('ativo');
    popup.classList.add('ativo');
});

// fecha popup
btnFechar.addEventListener('click', fecharPopup);
overlay.addEventListener('click', fecharPopup);

function fecharPopup() {
    overlay.classList.remove('ativo');
    popup.classList.remove('ativo');
}

// volume
sliderVolume.addEventListener('input', () => {
    musica.volume = sliderVolume.value;
    if (musica.muted) {
        musica.muted = false;
        atualizarBtnMute();
    }
});

// mute
btnMute.addEventListener('click', () => {
    musica.muted = !musica.muted;
    atualizarBtnMute();
});

function atualizarBtnMute() {
    btnMute.textContent = musica.muted ? '🔇 Mutado: Sim' : '🔊 Mutado: Não';
} 