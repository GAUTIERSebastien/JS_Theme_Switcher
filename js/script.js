import { createMarkup } from "./untils/createMarkup.js";

// Create button and article sections
const buttonSection = createMarkup("section","", document.body, [{id:"buttonSection"}]);
const articleSection = createMarkup("section","", document.body, [{id:"articleSection"}]);

const buttonState = {}; // Stores the state of the buttons

// Create thematic buttons
const thematicButtons = ["ALL", "HTML", "CSS", "JS"];
thematicButtons.forEach(theme => {
    createMarkup("button", theme, buttonSection, [{class:theme}]);
    buttonState[theme] = false; // ALL buttons are not clicked at the start
});

// Create articles
const articleThemes = ["HTML", "CSS", "JS"];
for (let i=0; i<16; i++) {
    const theme = articleThemes[i%3]; // Distribute themes among the articles
    const article = createMarkup("article", "", articleSection, [{class:theme}]);
    createMarkup("p", `Article about ${theme}`, article);
}

// Event handler for button clicks
document.querySelectorAll("button").forEach(button => {
    button.addEventListener('click', (e) => {
        let theme = e.target.textContent;
        buttonState[theme] = !buttonState[theme]; // Change the state of the button when it is clicked
        document.querySelectorAll("article").forEach(article => {
            // If the state of the button is true, display the articles, otherwise hide them
            article.style.display = (theme === "ALL" || (article.classList.contains(theme) && buttonState[theme])) ? "block" : "none";
        });
    });
});
