// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    console.log("hi")
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

click.addEventListener("click", startSpeaking);




function startSpeaking(e){
    const voices = speech.getVoices();

    if(speech.onvoiceschanged !== undefined)
    {
        speech.onvoiceschanged = () => populateVoiceList();
    }
    const utterThis = new SpeechSynthesisUtterance(input.value);
    const selectedOption = sel.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
        if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
        }
    }
    speech.speak(utterThis);
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