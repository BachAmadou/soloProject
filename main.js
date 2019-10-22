// Get the value from the input when typing and update the card paragraph automatically

function displayText() {
    const inputText = document.querySelector(".textTyping").value;
    document.querySelector(".cardParagraph").innerHTML = inputText;
}
