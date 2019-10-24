// FUNCTIONALITY - 1: SCRIPT FOR THE SEARCH INPUT - 1 (SEARCH A FONT)
// User can search for a font by filtering a particular font.

function filter() {
    let inputWord = document.getElementById('inputWord').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for(card of cards) {
        let name = card.getElementsByClassName('name');
        let name_value = name[0].innerHTML.toLowerCase();
        if(name_value.indexOf(inputWord) > - 1) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    
    }
}


// FUNCTIONALITY - 2: SCRIPT FOR THE SEARCH INPUT - 2 (TYPING TEXT)
// Get the value from the input when typing and update the card paragraph automatically

function displayText() {
    const inputText = document.querySelector(".textTyping").value;
    const cardParagraphs = document.querySelectorAll(".cardParagraph");

    for (let i = 0; i < cardParagraphs.length; i++) {
        cardParagraphs[i].innerHTML = inputText;
    }
}


// FUNCTIONALITY - 3: USER CAN UPDATE THE FONT SIZE WHEN SELECTING AN OPTION

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




// FUNCTIONALITY - 4: USER CAN RESET THE CARD AFTER CLICK THE RESET BUTTON

// function ChangeFont(selectFont) {
//     let sizeIndex = selectFont.options[selectFont.selectedIndex].index;
//     document.getElementById('fontText').style.fontSize = sizeIndex;
// }


function resetAll() {
    const fontText = "Then came the night of the first falling star".
    document.getElementsByClassName('font-text').innerHTML = fontText;
}