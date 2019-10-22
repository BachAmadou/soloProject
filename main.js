// Get the value from the input when typing and update the card paragraph automatically

function displayText() {
    const inputText = document.querySelector(".textTyping").value;
    const cardParagraphs = document.querySelectorAll(".cardParagraph");

    for (let i = 0; i < cardParagraphs.length; i++) {
        cardParagraphs[i].innerHTML = inputText;
    }
}


// Get the font size updated when the user selects a size option
// function ChangeFont(select) {
//     // Return the index of the selected option
//     let sizeIndex = select.selectedIndex;

//     // Return selected size values
//     let sizeOption = select.options[sizeIndex].text;
//     let fontSize = document.getElementById('fontText');

//     if ('fontSizeAdjust' in fontText.style) {
//         fontText.style.fontSizeAdjust = sizeOption;
//     }

// }

function ChangeFont(selectFont) {
    let sizeIndex = selectFont.options[selectFont.selectedIndex].index;
    document.getElementById('fontText').style.fontSize = sizeIndex;
}