const quotes = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed is an important skill in the digital age.",
    "Practice makes perfect, so keep typing every day!",
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts."
];

const quoteElement = document.getElementById("quote");
const inputElement = document.getElementById("input");
const startButton = document.getElementById("start");
const resultsElement = document.getElementById("results");

let currentQuote = "";
let startTime = null;

function startTest() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = currentQuote;
    inputElement.value = "";
    inputElement.disabled = false;
    inputElement.focus();
    resultsElement.textContent = "";
    startTime = new Date();

    startButton.disabled = true;
    startButton.textContent = "In Progress...";
}

function endTest() {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000; // seconds
    const typedText = inputElement.value;
    const wordsTyped = typedText.split(" ").filter(word => word.trim() !== "").length;

    let correctChars = 0;
    for (let i = 0; i < Math.min(currentQuote.length, typedText.length); i++) {
        if (currentQuote[i] === typedText[i]) {
            correctChars++;
        }
    }

    const accuracy = ((correctChars / currentQuote.length) * 100).toFixed(2);
    const wpm = ((wordsTyped / timeTaken) * 60).toFixed(2);

    resultsElement.innerHTML = `You typed <b>${wordsTyped}</b> words in <b>${timeTaken.toFixed(2)}</b> seconds.<br>
        <div>Your Typing Speed: <span style="color:rgb(255, 89, 0); font-size: 2.5em;">${wpm} WPM</span></div><br>`;

    startButton.disabled = false;
    startButton.textContent = "Start Test";
    inputElement.disabled = true;
}

startButton.addEventListener("click", startTest);
inputElement.addEventListener("input", () => {
    if (inputElement.value === currentQuote) {
        endTest();
    }
});
