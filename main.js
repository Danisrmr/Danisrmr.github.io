let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Me gusta desarrollar sitios web, y sobre todo el trabajo en equipo')
  .pauseFor(200)
  .deleteChars(10)
  .start();
