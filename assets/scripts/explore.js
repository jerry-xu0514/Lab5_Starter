// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const x = document.querySelector("img");
    x.src = "assets/images/smiling.png";
    const speech = window.speechSynthesis;
    if(speech.onvoiceschanged !== undefined)
    {
        speech.onvoiceschanged = () => populateVoiceList();
    }
}

const speech = window.speechSynthesis;
let sel = document.querySelector("select");
const input = document.getElementById('text-to-speak');
let txt = "";
let click = document.querySelector("button");
let utterThis = new SpeechSynthesisUtterance(input.value);
let images = document.querySelector("img");


click.addEventListener("click", startSpeaking);



function startSpeaking(e){
    const voices = speech.getVoices();
    images.src = "assets/images/smiling-open.png";
    if(speech.onvoiceschanged !== undefined)
    {
        speech.onvoiceschanged = () => populateVoiceList();
    }
    utterThis = new SpeechSynthesisUtterance(input.value);
    
    const selectedOption = sel.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
        if (voices[i].name === selectedOption) {
            utterThis.voice = voices[i];
        }
    }
    speech.speak(utterThis);

    // images.src = "assets/images/smiling.png";
    utterThis.onend = (event) => {
        images.src =  "assets/images/smiling.png";
    }
}

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    const voices = speechSynthesis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.querySelector("select").appendChild(option);
    }
  }