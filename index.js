const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
yesBtn.addEventListener("click", yesClicked);
noBtn.addEventListener("click", noClicked);

// -------------- When yesBtn clicked --------------
function yesClicked() {
    // Change img url
    const img = document.getElementsByTagName("iframe")[0]
    img.src = "https://giphy.com/embed/D4E5aFXa1ATG2QJQ3c";
    img.width = "400";
    img.height = "480"

    // Change title text
    document.getElementsByTagName("h1")[0].innerHTML = "You're my valentine now ❤️";

    // Hide buttons
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    
};

// -------------- When noBtn clicked --------------
var i = 0;
function noClicked() {
    const btnMessage = [
        "For sure?",
        "What makes you choose this?...",
        "Really?",
        "I will give you another chance.",
        "Excuse me?",
        "Hmm...",
        "Are you serious?",
        "Choose the other one.",
        "Come on!",
    ];

    // reset the message when they are all read.
    if (i == btnMessage.length) {
        i = 0;
    };
    // Change the button text
    noBtn.innerHTML = btnMessage[i];
    i++;

    // ------ noBtn -------
    // Change the font-size
    var noBtnWinFontSize = window.getComputedStyle(noBtn, null).getPropertyValue('font-size');
    var noBtnFontSize = parseFloat(noBtnWinFontSize); 
    noBtn.style.fontSize = (noBtnFontSize - 1) + 'px';

    // Change padding
    if (noBtnFontSize < 8) {
        // Hide the text when it gets too small.
        noBtn.style.display = "none";
    } else if (noBtnFontSize < 10) {
        noBtn.style.padding = "0";
        noBtn.style.margin = "0";
    } else if (noBtnFontSize < 15) {
        noBtn.style.padding = "5px 10px";
    } else if (noBtnFontSize < 20) {
        noBtn.style.padding = "10px 20px";
    };

    // ------ yesBtn -------
    // Change the font-size
    var yesBtnWinFontSize = window.getComputedStyle(yesBtn, null).getPropertyValue('font-size');
    var yesBtnFontSize = parseFloat(yesBtnWinFontSize);
    yesBtn.style.fontSize = (yesBtnFontSize + 30) + 'px';
    
    // Change padding
    if (yesBtnFontSize >= 400) {
        yesBtn.style.padding = "200px 400px";
    } else if (yesBtnFontSize >= 300) {
        yesBtn.style.padding = "100px 200px";
    } else if (yesBtnFontSize >= 200) {
        yesBtn.style.padding = "50px 100px";
    } else if (yesBtnFontSize >= 100) {
        yesBtn.style.padding = "30px 60px";
    };
    
};

