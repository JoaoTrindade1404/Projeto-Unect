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

const textarea = document.querySelectorAll("[data-text-area]");

textarea.forEach(txta =>{

    txta.addEventListener('mouseover', () => {
        txta.classList.add("eventohover");
    });

});

textarea.forEach(txta =>{

    txta.addEventListener('click', () => {
        txta.classList.remove("eventohover");
    });
    
});

function simulaEnvio(){
    textarea.values = "";
};

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

botoes.forEach(botao => {
    botao.addEventListener("mousedown", () => {

        if(botao.dataset.carrosselBotao === "next"){
            document.querySelectorAll(".imgSetaDir").forEach(i =>{
                i.src="./assets/Vector dir.png";
            });
        } else {
            document.querySelectorAll(".imgSetaEs").forEach(i =>{
                i.src="./assets/Vector es.png";
            });
        };
        botao.classList.add("carrossel-botao-click");
        botao.classList.remove("carrossel-botao");
    }); 
});

botoes.forEach(botao => {
    botao.addEventListener("mouseup", () => {
        if(botao.dataset.carrosselBotao === "next"){
            document.querySelectorAll(".imgSetaDir").forEach(j =>{
                j.src="./assets/arrow_back_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 3.png";
            })
        } else {
            document.querySelectorAll(".imgSetaEs").forEach(j =>{
                j.src="./assets/arrow_back_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24 3 2.png";
            })
        };
        botao.classList.remove("carrossel-botao-click");
        botao.classList.add("carrossel-botao");
    }); 
});
