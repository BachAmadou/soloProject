// Get the value from the input when typing and update the card


const output =  document.querySelector('textTyping');

output.addEventListener('change', function(e) {
    e.preventDefault();
    const inputText = document.getElementById('textTyping').value;
    const cardText = document.getElementById('cardText');
    cardText.innerHTML = inputText;
});

