const typed = new Typed('.typed', {
	// strings: [
	// 	'<i class="mascota">Gato</i>',
	// 	'<i class="mascota">Perro</i>',
	// 	'<i class="mascota">Conejo</i>',
	// 	'<i class="mascota">Pez</i>'
	// ],

	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});
// let header = document.getElementById("header")
// let nav = document.getElementById("nav")
// window.onscroll= function(){
// 	if(window.pageYOffset >=1){
// 		header.classList.replace("header","header--anclado")
// 		nav.classList.replace("navegacion__lista","navegacion__lista--anclado")
// 	} else{
// 		header.classList.replace("header--anclado","header")
// 		nav.classList.replace("navegacion__lista--anclado","navegacion__lista")
// 	}
// }


// clip path
let menuBoton = document.querySelector(".about__imagen--derecha")
let menu = document.querySelector(".menu")
menuBoton.addEventListener("click",()=>{
		menu.classList.toggle("uno")
		menu.classList.toggle("dos")
	 } )
const navegadores = [...document.querySelectorAll(".navegacion__elemento--modificado")]
navegadores.forEach(elemento =>elemento.addEventListener('click',()=>{
	menu.classList.toggle("uno")
	menu.classList.toggle("dos")
}))

// observer
const observados = [...document.querySelectorAll(".observado")]

const animar = id =>{
	const caja = document.getElementById(`${id}`)
	if (id == "caja1") caja.classList.replace("desanimado","animado--derecha")
	else if(id == "caja2") caja.classList.replace("desanimado","animado--derecha")
}
const desanimar = id => {
	const caja = document.getElementById(id) //funciona solo con poner id x si solo
	if (id == "caja1") caja.classList.replace("animado--derecha","desanimado")
	else if(id == "caja2") caja.classList.replace("animado--derecha","desanimado")
}
const cb = elementos =>{
	elementos.forEach(elemento =>{
		if(elemento.isIntersecting){
			console.log(elemento)
			animar(elemento.target.id)
		} else desanimar(elemento.target.id)
	})
}
const options={
	threshold:0
}
const observer = new IntersectionObserver(cb,options);
observados.forEach(elemen => observer.observe(elemen))


