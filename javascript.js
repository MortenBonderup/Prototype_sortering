function showInfo(day) {
    // Hide all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.style.display = 'none');
    
    // Show selected card
    const selectedCard = document.getElementById(day);
    if (selectedCard) {
        selectedCard.style.display = 'block';
    }
}