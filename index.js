let apiKey = '2f06037930c0t042fb8364af86adf19o';
let apiUrl = '';
let context = '';
let promptText = '';

const getAI = (event) => {
    event.preventDefault();
    console.log(event.target[0]);
    // console.log('Processing');
    // context = 'be polite and provide a very short answer';
    // promptText = 'Who the first sfemale president was';
    // apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
    // axios.get(apiUrl).then(showPoem);
}

const formComponenet = document.querySelector("form");
formComponenet.addEventListener("submit", getAI);

const showPoem = () => {
    new Typewriter("#poem", {
        strings: [response.data.answer],
        autoStart: true,
      });
}
