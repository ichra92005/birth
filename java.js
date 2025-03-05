window.onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

   
    startAutoSlide();
};


function throwConfetti() {
    for (let i = 0; i < 100; i++) {
        createConfettiPiece();
    }
}

function createConfettiPiece() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    confetti.style.animation = 
        `confettiFall ${Math.random() * 3 + 2}s linear`;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
}

function throwConfettiAndRedirect() {
    throwConfetti();
    setTimeout(() => {
        window.location.href = "sur.html"; 
    }, 3000); 
}


const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots');
let currentIndex = 0;
let autoSlideInterval;

const slides = document.querySelectorAll('.slide');
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% { transform: translateY(-100vh) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);


slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if(index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
    });
    dotsContainer.appendChild(dot);
});


function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }, 5000); 
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}


slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
slider.addEventListener('mouseleave', () => startAutoSlide());
