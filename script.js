const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
let score = 0;

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');

    // Rastgele pozisyon ve renk
    const left = Math.random() * 90 + 5;
    balloon.style.left = `${left}%`;
    balloon.style.backgroundColor = getRandomColor();

    // Balon tıklanırsa patlat
    balloon.addEventListener('click', () => {
        const popSound = new Audio('assets/pop.mp3');
        popSound.play();

        balloon.classList.add('pop');
        score++;
        scoreDisplay.textContent = score;
        setTimeout(() => {
            gameArea.removeChild(balloon);
        }, 300);
    });

    gameArea.appendChild(balloon);

    // Belirli süre sonunda otomatik sil
    setTimeout(() => {
        if (gameArea.contains(balloon)) {
            gameArea.removeChild(balloon);
        }
    }, 6000);
}

// Her 700ms’de bir balon üret
setInterval(createBalloon, 700);

function getRandomColor() {
    const colors = ['#ff4c4c', '#4cff4c', '#4c4cff', '#ffcc00', '#ff66ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}
