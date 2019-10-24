
// SCRIPT FOR THE SEARCH INPUT - 1 (TYPING TEXT)
// Get the value from the input when typing and update the card paragraph automatically
function displayText() {
    const inputText = document.querySelector(".textTyping").value;
    const cardParagraphs = document.querySelectorAll(".cardParagraph");

    for (let i = 0; i < cardParagraphs.length; i++) {
        cardParagraphs[i].innerHTML = inputText;
    }
}




function filter() {
    let inputWord = document.getElementById('inputWord').value.toUpperCase();
    let cards = document.getElementsByClassName('card');

    for(card of cards) {
        for(i = 0; 1 < card.length; i++) {
            let name = card[i].getElementsByClassName('name');
            if(name[0].innerHTML.toUpperCase().indexOf(inputWord) > - 1) {
                card[i].style.display = '';
            } else {
                card[i].style.display = 'none';
            }
        }
    }
}


    // function filter() {
    //     // Get the value from the inpute
    //     let filterValue = document.getElementById('inputWord').value.toUpperCase();

    //     // Get the ul
    //     let ul = document.getElementsByClassName('card-items');

    //     // Get names from the ul
    //     let h4 = ul.querySelector('name');

    //     // Loop through the names
    //     for (let i = 0; i < h4.length; i++) {
    //         let word = h4[i].getElementsByClassName('name')[0];

    //         if(word.innerHTML.toUpperCase().indexOf(filterValue) > - 1) {
    //             h4[i].style.display = '';
    //         } else {
    //             h4[i].style.display = 'none';
    //         }
    //     }
    // }




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




// function ChangeFont(selectFont) {
//     let sizeIndex = selectFont.options[selectFont.selectedIndex].index;
//     document.getElementById('fontText').style.fontSize = sizeIndex;
// }