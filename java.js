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
