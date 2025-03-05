onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
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


const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% { transform: translateY(-100vh) rotate(0deg); }
        100% { transform: translateY(100vh) rotate(360deg); }
    }
`;
document.head.appendChild(style);

const slider = document.getElementById('slider');
        const dotsContainer = document.getElementById('dots');
        let touchStartX = 0;
        let currentIndex = 0;

        const slides = document.querySelectorAll('.slide');
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if(index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        slider.addEventListener('touchstart', e => {
            touchStartX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', e => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX - touchEndX;
            
            if(diff > 50) {
                nextSlide();
            } else if(diff < -50) {
                prevSlide();
            }
        });

        let isDragging = false;
        let startX = 0;

        slider.addEventListener('mousedown', e => {
            isDragging = true;
            startX = e.pageX;
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        document.addEventListener('mousemove', e => {
            if(!isDragging) return;
            const x = e.pageX;
            const diff = startX - x;
            
            if(diff > 50) {
                nextSlide();
                isDragging = false;
            } else if(diff < -50) {
                prevSlide();
                isDragging = false;
            }
        });

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        }

        function goToSlide(index) {
            currentIndex = index;
            updateSlider();
        }

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
    
