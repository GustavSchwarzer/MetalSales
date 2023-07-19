//NAVBAR BEGING
const navMenu =  
document.getElementById('nav-menu'),
toggleMenu = document.getElementById('toggle-menu'),
closeMenu = document.getElementById('close-menu');

toggleMenu.addEventListener('click',() =>{

    navMenu.classList.toggle('show')

})

closeMenu.addEventListener('click',() =>{

    navMenu.classList.remove('show')

});

// NAVBAR END

// AUTO TEXT BEGING
const el = document.getElementById('autoText');
const phrases = ["Roldanas para o seu sucesso.", "Qualidade em cada rotação.", "Força e confiabilidade em movimento."];
const interval = 100; // Intervalo de digitação de cada caractere
const pauseDuration = 1000; // Duração da pausa entre as frases

let currentPhraseIndex = 0;

function showText(el, text, interval) {
  const char = text.split("").reverse();

  const typer = setInterval(() => {
    if (!char.length) {
      clearInterval(typer);
      setTimeout(() => {
        currentPhraseIndex++;
        if (currentPhraseIndex >= phrases.length) {
          currentPhraseIndex = 0;
        }
        el.innerHTML = ""; // Limpar o conteúdo do elemento para reiniciar o texto
        setTimeout(() => showText(el, phrases[currentPhraseIndex] + "|", interval), pauseDuration);
      }, pauseDuration);
      return;
    }

    const next = char.pop();
    el.innerHTML += next;
  }, interval);
}

showText(el, phrases[currentPhraseIndex] + "|", interval);

// AUTO TEXT END

