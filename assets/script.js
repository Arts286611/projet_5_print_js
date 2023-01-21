// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ]

const items = document.querySelectorAll('.slide');
const nbSlide = items.length;
const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');
let count = 0;
const bullets = document.querySelectorAll('.dot');
const paragraphes = document.querySelectorAll('.paragraphe');

function slideSuivante(){
	items[count].classList.remove('active');
	bullets[count].classList.remove('dot_selected');
	paragraphes[count].classList.remove('paragraphe_actif');
	
	if(count < nbSlide -1){
		count++;
	}
	else {
		count = 0;
	}

	items[count].classList.add('active');
	bullets[count].classList.add('dot_selected');
	paragraphes[count].classList.add('paragraphe_actif');


}

suivant.addEventListener('click', slideSuivante);




function slidePrecedente(){
	items[count].classList.remove('active');
	bullets[count].classList.remove('dot_selected');
	paragraphes[count].classList.remove('paragraphe_actif');

	if(count > 0){
		count--;
	}

	else{
		count = nbSlide -1;
	}

	items[count].classList.add('active');
	bullets[count].classList.add('dot_selected');
	paragraphes[count].classList.add('paragraphe_actif');
}

precedent.addEventListener('click', slidePrecedente);


