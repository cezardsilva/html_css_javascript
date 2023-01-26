const synth = window.speechSynthesis; // chamada SpeechSynthesis API
const input = document.querySelector('textarea'); // caixa de texto
const selectVoices = document.querySelector('select'); // lista de vozes
const pasteButton = document.querySelector('span');
const resume = document.querySelector('#resume');
const save = document.querySelector('#save');

    function getItem() {
      screen.currentMode = localStorage.getItem('videoTime') || 0;
    }
resume.addEventListener('click', getItem);

    save.addEventListener('click', event => {
      localStorage.setItem('videoTime', screen.currentMode);
    });

    addEventListener('load', getItem);

    // Assign an ontimeupdate event to the video element, and execute a function if the current playback position has changed
    player.ontimeupdate = function() {myFunction()};

function changeImage(a) {
  document.getElementById("tela").src=a;
  var col=document.getElementById("speak");
  col.style.color="#000000";
  document.body.style.backgroundColor = '#FFFFFF';
  document.querySelector('select').style.backgroundColor = '#FFFFFF' ;
  document.querySelector('textarea').style.backgroundColor = '#FFFFFF' ;
  var img=document.getElementById("tela").src;
  console.log(img);
}

pasteButton.addEventListener('click', async () => {

  try {
    const text = await navigator.clipboard.readText()
    document.querySelector('textarea').value += text;
    console.log('Text pasted.');
  } catch (error) {
    console.log('Failed to read clipboard. Using execCommand instead.');
    document.querySelector('textarea').focus();
    const result = document.execCommand('paste')
    console.log('document.execCommand result: ', result);
  }
});
let voices = [];
function getVoices() { 
  voices = synth.getVoices(); // armazena as vozes no array
  voices.forEach((voice, index) => {
    selectVoices.add(new Option(`${voice.name} (${voice.lang})`, index)); // adiciona as informações na lista de seleção..
  });
}

window.addEventListener('load', () => { // ao ser concluído..
  getVoices(); // carrega as vozes..
  if (synth.onvoiceschanged !== undefined)
    synth.onvoiceschanged = getVoices; // checa e atualiza o evento
});

// dispara um evento ao clicar no botão!
document.querySelector('button').addEventListener('click', () => {
  var utter = new SpeechSynthesisUtterance(input.value); // responsável pelo que vai falar!
  utter.voice = voices[selectVoices.value]; // define qual será a voz..
  synth.speak(utter); // reproduz o audio!
});



const img = document.getElementById('img');
const change_image = function() {
  if (img.dataset.image == "user1") {
    img.src = "wsun.png";
    img.dataset.image = "user2";


        var element = document.body;
        var element2 = document.querySelector('textarea');
        var element3 = document.querySelector('select');
        //var content = document.getElementById("DarkModetext");
        element.className = "dark-mode";
        element2.className = "dark-mode";
        element3.className = "dark-mode";
        content.innerText = "Dark Mode is ON";
    return
  };
  
  if (img.dataset.image == "user2") {
    img.src = "moon.png";
    img.dataset.image = "user1";

        var element = document.body;
        var element2 = document.querySelector('textarea');
        var element3 = document.querySelector('select');
        //var content = document.getElementById("DarkModetext");
        element.className = "light-mode";
        element2.className = "light-mode";
        element3.className = "light-mode";
        content.innerText = "Dark Mode is OFF";
    return
  };
};