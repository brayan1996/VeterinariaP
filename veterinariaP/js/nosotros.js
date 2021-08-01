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