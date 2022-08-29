//Variables para elegir la carta al azar//
const caritaSobrio = "<i class='fa-solid fa-face-smile-wink'>"+'</i>';
const caritaEbrio = "<i class='fa-solid fa-face-flushed'>"+'</i>';
const caritaSuperEbrio = "<i class='fa-solid fa-face-dizzy'>"+'</i>';
const caritaFondo = "<i class='fa-solid fa-face-tired'>"+'</i>';
const caritas = [caritaSobrio,caritaEbrio,caritaSuperEbrio,caritaFondo,caritaSobrio,caritaEbrio,caritaSuperEbrio,caritaFondo,caritaSobrio,caritaEbrio,caritaSuperEbrio,caritaFondo];

//Funcion para mostrar carita al azar//

function caritasRandom () {
    let cariRandom = Math.floor(Math.random()*caritas.length);
    return caritas[cariRandom];
}


//Btn-selector//
const btnSelector = document.querySelector('#btn-selector')

btnSelector.addEventListener('click', ()=> {
    iconoSelector.innerHTML = caritasRandom();
  });


//Btn-cerrar//
const btnCerrar = document.querySelector('#btn-cerrar');

const btnCerrar2 = document.querySelector('#btn-cerrar2');

const btnCerrar3 = document.querySelector('#btn-cerrar3');

const btnCerrar4 = document.querySelector('#btn-cerrar4');

//btn-abrir//

const btnSobrios = document.querySelector('#btn-sobrios');

const btnEbrios = document.querySelector('#btn-ebrios');

const btnSuper = document.querySelector('#btn-super');

const btnFondo = document.querySelector('#btn-fondo');

//lightbox//

const lightbox1 = document.querySelector('#contenedor-principal1');

const lightbox2 = document.querySelector('#contenedor-principal2');

const lightbox3 = document.querySelector('#contenedor-principal3');

const lightbox4 = document.querySelector('#contenedor-principal4');

//Texto//

var iconoSelector = document.querySelector('#selector')

var textoSobrios = document.querySelector('#sobrios');

var textoEbrios = document.querySelector('#ebrios');

var textoSuper = document.querySelector('#super');


//Array con los retos Super Ebrios//

const retosSuper = ['¡El suelo es lava! Ningún jugador puede tocar el suelo durante dos rondas, el que lo haga, le toca un shot por quemarse en la lava',' Debes tomar un shot del ombligo de la persona de sexo opuesto más cercana a ti',' ¡Francotirador! Escoge a una persona para que beba un shot',' ¡DobleKill! Escoge dos personas para que beban un shot cada uno','¡Se pudrió todo! Bebe un shot todo el mundo','La voz de la experiencia,  La persona con más edad, decide quien se toma el Shot','El Nene corrompido.  La persona con menos  edad bebe un shot! (Al menos que sea menor de edad, no queremos ir presos)','Grita: ¡Granada, Al suelo! El último en tirarse al suelo, bebe un shot por lento','¡Piensa rápido! Tienes 5 seg para decir, un país, una fruta y un animal por la letra "P", sino anda a leer un diccionario y bebe un shot mientras tanto','¿Confías en tu pulso? Los demás jugadores te taparan los ojos, y te pondrán 3 shots en frente, 2 con agua y uno con bebida; Deberás escoger uno a ciegas y rezar porque te toque agüita.','¡Piensa rápido! Tienes 5 seg para decir, un país, una fruta y un animal por la letra "A", sino anda a leer un diccionario y bebe un shot mientras tanto','¡Piensa rápido! Tienes 5 seg para decir, un país, una fruta y un animal por la letra "B", sino anda a leer un diccionario y bebe un shot mientras tanto','¡Duelo a Muerte! Juega piedra, papel o tijeras con el jugador de tu derecha, el que pierda bebe un shot','¡Mira, Sin Manos! Deberás tomar un shot sin usar las manos (¿Que como lo harás? Ese no es nuestro problema)','¡Juguemos! Los demás jugadores anotaran el nombre de un objeto en un papel, cuando ya esté listo, tienes 1 min para adivinar que es. Si adivinas, todos los demás jugadores deberán tomar un shot, si no adivinas… deberás beber 3 shots seguidos; ¡Que la fuerza te acompañe!','¡NO LEAS ESTA TARJETA EN VOZ ALTA! Te ayudare a joder a uno de tus amigos, sencillamente no menciones nada, y el primer jugador que te pregunte por lo que dice la tarjeta, deberá beber un shot (Por chismoso)','¡Con esa boca besas a tu madre! El primer jugador en decir una palabrota, deberá beber un shot'
];

//Array con los retos ebrios//

const retosEbrios = ['Cántale el coro de una canción romántica a la persona de la derecha (Saca a relucir esa voz angelical y conquistal@... Si no estás con ganas, pues bebe un trago)', 'Párate de manos durante 30 segundos, (Si no puedes o no lo logras, bebe un trago... Si lo pudiste hacer, ¡FELICIDADES! dirigirte al circo más cercano)', ' ¡Hey, Examen sorpresa! Tienes 5 segundos para nombrar el apellido de todos los jugadores, si te equivocas o no te acuerdas, bebe un trago por mal amigo', 'El último que se toque la nariz ¡bebe! (¿Que por qué? ¡Pues porque sí!)','¡Hey Sherlock! De a que no adivinas el color de la ropa interior de la persona que tienes al frente... (Si la adivina, bebe esa persona; si no lo adivinas... Pues paila parcero, te toca beber)','Probemos tus habilidades artísticas! Tienes 30 segundos para dibujar a la persona de la izquierda, los demás decidirán si se parece en algo, sino se parece en nada, pues no pasa nada, solo bébete un traguito y ya está','Bebe el más oscur@ del grupo... Pues por negr@, ¡evidentemente!', 'Bebe la persona más clara del grupo; Así agarras un poco mas de sol el próximo verano', 'La lechuza, la lechuza hace shhh! Nadie puede mencionar ni una sola palabra ( El primero que hable bebe un trago)', '¡Hubo un error en el registro de tu nacimiento! Cambia por 3 rondas de nombre con la persona de en frente, si algún jugador los llama de otra manera deberá tomar un trago', '¡Hey! Pongámonos nostálgicos, escoge alguien de la mesa, para que cuente una anécdota que hayan tenido juntos, los demás deberán decir si es entretenida o no, si la mayoría le pareció aburrida, beben los dos'];

//Arrays con los retos sobrios//

const retosSobrios = ['¡Verdad o Verdad! ¿Cuál es el sitio más extraño donde hiciste el delicioso? (Pasa el dato)','¡Verdad o Verdad! Si tuvieras que besar a alguien del grupo de jugadores;  ¿A quién besarías? (No vale decir que a tu pareja, si esta está jugando','¡Verdad o Verdad!  ¿Alguna vez te escapaste de tu casa? Cuéntanos esa historia','¡Verdad o Verdad! Si hubiera un apocalipsis zombi en tu ciudad, ¿con que jugador preferirías sobrevivir?','¡Verdad o Verdad! ¿Qué es lo más vergonzoso que tus padres te llegaron a encontrar?', '¡Verdad o Verdad!  ¿Con que persona famosa harías el delicioso?','¡Verdad o Verdad! ¿Cuál sería tu gusto culposo más raro?','¡Verdad o Verdad! ¿Cuál fue la peor C@G@D@ que te mandaste de chico? Cuéntanos el regaño de tus padres','¡Verdad o Verdad! ¿Cuál fue tu mejor polvo? Y explica él porque (Si sonreíste al leer la pregunta, es porque ya te acordaste picar@)','¿Quién de la mesa crees que podría ser un asesino en serie? (Explica el porqué o corre por tu vida ¡Lo que quieras!)', '¡Verdad o Verdad! ¿Has probado drogas? (En este juego no juzgamos, solo nos divertimos)','¡Verdad o Verdad! ¿Qué es lo que más odias del jugador que tienes en frente? (Es tu momento de expresarle al mundo lo fe@ que es xD)'];

//Funcion para variar los retos sobrios//

function retSobrios () {
     let randomSobrios = Math.floor(Math.random()* retosSobrios.length)
    return retosSobrios[randomSobrios];
}

//Funcion para variar los retos ebrios//

function retEbrios () {
    let randomEbrios = Math.floor(Math.random()* retosEbrios.length)
   return retosEbrios[randomEbrios];
}

//Funcion para variar los SUPER ebrios//

function retSuper () {
    let randomSuper = Math.floor(Math.random()* retosSuper.length)
   return retosSuper[randomSuper];
}
 console.log(retSuper());

 //Abre ligthbox Fondo//

btnFondo.addEventListener('click', ()=> {
    lightbox4.style.display = 'flex';
  });

//Abre ligthbox SuperEbrios//

btnSuper.addEventListener('click', ()=> {
  lightbox3.style.display = 'flex';
   textoSuper.innerHTML= retSuper();

});

//Abre ligthbox Sobrios//

btnSobrios.addEventListener('click', ()=> {
    lightbox1.style.display = 'flex';
    textoSobrios.innerHTML= retSobrios();

});

//Abre ligthbox Ebrios//

btnEbrios.addEventListener('click', ()=> {
    lightbox2.style.display = 'flex';
    textoEbrios.innerHTML= retEbrios();

});

//Cerrar ligthboxs Sobrios//

btnCerrar.addEventListener('click', ()=> {
    lightbox1.style.display = 'none';
});

//Cerrar ligthboxs Ebrios//

btnCerrar2.addEventListener('click', ()=> {
    lightbox2.style.display = 'none';
});

//Cerrar ligthboxs Super Ebrios//

btnCerrar3.addEventListener('click', ()=> {
    lightbox3.style.display = 'none';
});

//Cerrar ligthboxs Super Ebrios//

btnCerrar4.addEventListener('click', ()=> {
    lightbox4.style.display = 'none';
});





