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
