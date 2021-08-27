$( document ).ready(function() {
	var btnMenuMobile = $('.btn-menumobile');
	$('.btn-menumobile').on('click', function() {
		$('.nav-container ul').toggleClass('open');
	});
});


const lua = document.querySelector('.lua');
const sol = document.querySelector('.sol');
const body = document.querySelector('.container');
const nav = document.querySelector('nav');
const iconLua = document.querySelector('.lua');
const project = document.querySelector('#segunda');
const project1 = document.querySelector('#terceira');
const linhaProject = document.querySelector('.line');
const olaProject = document.querySelector('#ola');
const titulo = document.querySelector('h2');
const titulo1 = document.querySelector('#project');
const linhaProject1 = document.querySelectorAll('.pBox');


function mundandoCor(){
	body.style.background='black';
	nav.style.background = 'black';
	project.style.backgroundColor = 'black';
	project1.style.backgroundColor = 'black';
	linhaProject.style.color = 'rgba(255, 255, 255, .75)';
	olaProject.style.color = 'white';
	titulo.style.color = 'white';
	titulo1.style.color = 'white';
	linhaProject1[0].style.color ='white';
	linhaProject1[1].style.color ='white';
	linhaProject1[2].style.color ='white';
	linhaProject1[3].style.color ='white';
};
function mundandoCorEscuro(){
	body.style.background = 'white';
	nav.style.background = 'white';
	iconLua.style.background = 'black';
	sol.style.background='black';
	iconLua.style.borderRadius = '15px';
	sol.style.borderRadius = '10px';
	project.style.backgroundColor = 'white';
	project1.style.backgroundColor = 'white';
	project1.style.color = 'black';
	project.style.color = 'black';
	linhaProject.style.color = 'black';
	olaProject.style.color = 'black';
	titulo.style.color = 'black';
	titulo1.style.color = 'black';
	linhaProject1[0].style.color ='black';
	linhaProject1[1].style.color ='black';
	linhaProject1[2].style.color ='black';
	linhaProject1[3].style.color ='black';
}

lua.addEventListener('click', mundandoCor);
sol.addEventListener('click', mundandoCorEscuro);


