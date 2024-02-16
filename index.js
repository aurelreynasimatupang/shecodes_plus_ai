let apiKey = '2f06037930c0t042fb8364af86adf19o';
let apiUrl = '';
let context = '';
let promptText = '';

const displayPoem = (res) => {
    console.log(res.data.answers);
    new Typewriter('#poem', {
        strings: res.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    })
}

const generatePoem = (event) => {
    event.preventDefault();
    const userInput = document.querySelector("#userPrompt");
    const poemText = document.querySelector('#poem');
    poemText.innerHTML = 'Loading poem...';

    console.log('Processing');
    context = 'You are a romantitc poem expert writing a poem to sweep your lover off their feet';
    promptText = 'Write a valentines day poem';
    apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    
    axios.get(apiUrl).then(displayPoem);
}

const formComponenet = document.querySelector("form");
formComponenet.addEventListener("submit", generatePoem);
