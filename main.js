
let audioAtual;
function tocaSom(idElementoAudio, idBotao) {

    // Pausa o áudio anterior, se existir
  
  if (audioAtual) {
    audioAtual.pause();
   // audioAtual.currentTime =0;
   // audioAtual.removeAttribute('src');
  }

  const audioElemento = document.querySelector(idElementoAudio);
  audioElemento.play();

  // Atualiza a referência para o áudio em reprodução
  audioAtual = audioElemento;

  audioElemento.addEventListener("timeupdate", function() {
    const elementoProgresso = document.getElementById("progresso");
    const elementoBotao = document.getElementById(idBotao);
    const duracaoTotal = audioElemento.duration;
    const tempoAtual = audioElemento.currentTime;
    const porcentagemCompleta = (tempoAtual / duracaoTotal) * 100;
    elementoProgresso.style.width = `${porcentagemCompleta}%`;
    elementoBotao.style.backgroundImage = "linear-gradient(to right, #97DEFF " + audioElemento.currentTime / audioElemento.duration * 100 + "%, #C9EEFF " + audioElemento.currentTime / audioElemento.duration * 100 + "%)";
  });
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idBotao = listaDeTeclas[contador].id;
  const idAudio = `#som_${instrumento}`;
  
  tecla.onclick = function() {
    tocaSom(idAudio, idBotao);
    console.log(idBotao)
  };
}
