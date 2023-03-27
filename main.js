
let audioAtual;
function tocaSom(idElementoAudio) {

    // Pausa o áudio anterior, se existir
  
  if (audioAtual) {
    audioAtual.pause();
  }

  const audioElemento = document.querySelector(idElementoAudio);
  audioElemento.play();

  // Atualiza a referência para o áudio em reprodução
  audioAtual = audioElemento;

  audioElemento.addEventListener("timeupdate", function() {
    const elementoProgresso = document.getElementById("progresso");
    const duracaoTotal = audioElemento.duration;
    const tempoAtual = audioElemento.currentTime;
    const porcentagemCompleta = (tempoAtual / duracaoTotal) * 100;
    elementoProgresso.style.width = `${porcentagemCompleta}%`;
  });
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;
  
  tecla.onclick = function() {
    tocaSom(idAudio);
  };
}
