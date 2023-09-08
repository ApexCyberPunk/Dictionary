const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById('result');
const sound = document.getElementById('sound');

const btn = document.getElementById('search-btn')

btn.addEventListener('click', () => {
let inpWord = document.getElementById('inp-word').value;

fetch(`${url}${inpWord}`)
.then((x) => x.json())
.then((y) => {

    console.log(y)
result.innerHTML = `  <div class="word">
<h3>${inpWord}</h3>
<button onclick="playSound()">
    <i class="fas fa-volume-high"></i>
</button>
</div>

<div class="details">
<p>${y[0].meanings[0].partOfSpeech}</p>
<p>/${y[0].phonetic}/</p>
</div>
<p class="word-meaning">${y[0].meanings[0].definitions[0].definition}</p>
<p class="word-example"> ${y[0].meanings[0].definitions[0].example || ""}</p>
`
sound.setAttribute("src", `${y[0].phonetics[0].audio}`);
console.log(sound);
})

.catch(() => {
    result.innerHTML = `<h3 class="error">Unfound Word</h3>`
})

});

function playSound() {
    sound.play();
}







