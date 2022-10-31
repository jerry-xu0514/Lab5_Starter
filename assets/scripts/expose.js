// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  
  // jsConfetti.addConfetti();
  const input = document.querySelector('input');
  let vol = document.getElementById("volume").value;
  let elem = document.getElementById("volume-controls").getElementsByTagName("img");
  elem.item(0).src = "assets/icons/volume-level-2.svg";
  document.querySelector("select").value = "select";
  let bgm = document.getElementsByClassName("hidden");
  bgm.src = null;
}
init();
const jsConfetti = new JSConfetti();
let bgm = document.getElementsByClassName("hidden");
let vol = document.getElementById("volume");
let elem = document.getElementById("volume-controls").getElementsByTagName("img");
const input = document.querySelector('input');
let sel = document.querySelector("select");
let click = document.querySelector("button");
const x = document.querySelector("select");
let images = document.querySelector("img");


input.addEventListener('input',changeVolumeIcon);
input.addEventListener('input', changeVolume);
sel.addEventListener("change", changeHorn);
click.addEventListener("click", play);


function play(e){
  if(x.value == "party-horn"){
    jsConfetti.addConfetti();
  }
  bgm.item(0).play();
}

function changeHorn(e){
    bgm.item(0).src =  "assets/audio/" + x.value + ".mp3";
    images.src = "assets/images/" + x.value + ".svg";
}


function changeVolume(e){
  document.getElementsByClassName("hidden").item(0).volume = vol.value/100;
}

function changeVolumeIcon(e){
  // console.log("hi");
    if (vol.value == 0) {
      elem.item(0).src = "assets/icons/volume-level-0.svg";
    }
    else if (vol.value  < 33) {
      elem.item(0).src = "assets/icons/volume-level-1.svg";
    }
    else if(vol.value < 67){
      elem.item(0).src = "assets/icons/volume-level-2.svg";
    }
    else{
      elem.item(0).src = "assets/icons/volume-level-3.svg";
    }
  }
