


var fooReveal = {
  delay    : 200,
  distance : '90px',
  easing   : 'ease-in-out',
  rotate   : { z: 10 },
  scale    : 1.1
};

window.sr = ScrollReveal({ reset: true });
sr.reveal('.lox', fooReveal);
sr.reveal('#chocolate', { delay: 500, scale: 0.9 });
sr.reveal('.foo',{duration: 500});
sr.reveal('.bar',{duration: 1000});
sr.reveal('.lol',{duration: 1500});
sr.reveal('.box', { duration: 1500 }, 50);