// Wrap every letter in a span

document.addEventListener('DOMContentLoaded', () => {
  const lettersSpan = document.querySelector('span#titleLetters')
  letters = ['H', 'e', 'l', 'l', 'o', '\0', 'W', 'o', 'r', 'l', 'd', '!']
  letters.forEach( (letter) => {
    const letterSpan = document.createElement('span')
    letterSpan.classList.add('letter');
    letterSpan.textContent = letter;
    lettersSpan.appendChild(letterSpan);
  });

  anime.timeline({loop: true})
  .add({
    targets: '.grid-item .ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: function(el, i) {
      return 50 * i;
  }
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
});
