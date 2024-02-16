function showAnswer(response) {
    alert(response.data.answer);
}

let apiKey = '2f06037930c0t042fb8364af86adf19o';
let context = 'be polite and provide a very short answer';
let prompt = 'Who the first sfemale president was';
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log('Processing');
axios.get(apiUrl).then(showAnswer);