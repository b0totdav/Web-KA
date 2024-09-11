document.addEventListener('DOMContentLoaded', () => {
    const images = ['projekt2/Bosskicsi.png', 'projekt2/Fixerkicsi.png', 'projekt2/Gregorkicsi.png','projekt2/rexkicsi.png','projekt2/Scorchkicsi.png', 'projekt2/Sevkicsi.png','projekt2/Bosskicsi.png', 'projekt2/Fixerkicsi.png', 'projekt2/Gregorkicsi.png','projekt2/rexkicsi.png','projekt2/Scorchkicsi.png', 'projekt2/Sevkicsi.png'];
    let flippedCards = [];
    let matchedCards = [];

    const gameContainer = document.getElementById('game-container');

    images.sort(() => Math.random() - 0.5);

    images.forEach((image, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.image = image;
        card.dataset.index = index;
        card.addEventListener('click', handleCardClick);

        const imgElement = document.createElement('img');
        imgElement.src = 'projekt2/background.png'; 
        card.appendChild(imgElement);

        gameContainer.appendChild(card);
    });

    function handleCardClick() {
        const clickedCard = this;

        if (flippedCards.length < 2 && !flippedCards.includes(clickedCard) && !matchedCards.includes(clickedCard)) {
            flipCard(clickedCard);
            flippedCards.push(clickedCard);

            if (flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }
    }

    function flipCard(card) {
        const imgElement = card.querySelector('img');
        imgElement.src =  card.dataset.image; 
        card.style.backgroundColor = '#fff';
    }

    function unflipCards() {
        flippedCards.forEach(card => {
            const imgElement = card.querySelector('img');
            imgElement.src = 'projekt2/background.png';
            card.style.backgroundColor = '#ccc';
        });
        flippedCards = [];
    }

    function checkMatch() {
        const [firstCard, secondCard] = flippedCards;

        if (firstCard.dataset.image === secondCard.dataset.image) {
            matchedCards.push(firstCard, secondCard);
            flippedCards = [];

            if (matchedCards.length === images.length) {
                alert('Congratulations! You won!');
            }
        } else {
            unflipCards();
        }
    }
});

