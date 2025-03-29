const slides = document.querySelectorAll('.slider');
const elipses = document.querySelectorAll('.ellipse')
let currentIndex = 0;

function updateEllipse() {
    elipses.forEach((ellipse, index) => {
        if(index === currentIndex) {
            ellipse.src="./assets/Ellipse 1.png";
        }
        else {
            ellipse.src="./assets/Ellipse 2.png";
        }
    });
}

function changeSlide(direction) {
    slides[currentIndex].classList.remove('on');
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = slides.length - 1; 
    } else if (currentIndex >= slides.length) {
        currentIndex = 0; 
    }

    slides[currentIndex].classList.add("on"); 
    updateEllipse()
}

function goToSlide(index) {
    slides[currentIndex].classList.remove("on");

    currentIndex = index;

    slides[currentIndex].classList.add("on");
    updateEllipse()
}

updateEllipse()

const passamouse1 = document.querySelector('.areadetexto1');

passamouse1.addEventListener('mouseover', () => {
    passamouse1.classList.add('eventohover');
});

const tirapointer1 = document.querySelector('.areadetexto1');

tirapointer1.addEventListener('click', () => {
    tirapointer1.classList.remove('eventohover');
});

const passamouse2 = document.querySelector('.areadetexto2');

passamouse2.addEventListener('mouseover', () => {
    passamouse2.classList.add('eventohover');
});

const tirapointer2 = document.querySelector('.areadetexto2');

tirapointer2.addEventListener('click', () => {
    tirapointer2.classList.remove('eventohover');
});

const passamouse3 = document.querySelector('.areadetexto3');

passamouse3.addEventListener('mouseover', () => {
    passamouse3.classList.add('eventohover');
});

const tirapointer3 = document.querySelector('.areadetexto3');

tirapointer3.addEventListener('click', () => {
    tirapointer3.classList.remove('eventohover');
});

const passamouse4 = document.querySelector('.areadetexto4');

passamouse4.addEventListener('mouseover', () => {
    passamouse4.classList.add('eventohover');
});

const tirapointer4 = document.querySelector('.areadetexto4');

tirapointer4.addEventListener('click', () => {
    tirapointer4.classList.remove('eventohover');
});


const botoes = document.querySelectorAll("[data-carrossel-botao]");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        const offset = botao.dataset.carrosselBotao === "next" ? 1 : -1;
        const comentarios = botao.closest("[data-carrossel]").querySelector('[data-comentarios]');

        const comentarioAtivo = comentarios.querySelector("[data-active]");
        let newIndex = [...comentarios.children].indexOf(comentarioAtivo) + offset;

        comentarios.children[newIndex].dataset.active = true;
        delete comentarioAtivo.dataset.active
    });
});


