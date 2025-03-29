const voiceSelector = document.querySelector("#voiceSelect");
const playButton = document.querySelector("#playButton");
const textInput = document.querySelector("textArea");

// load voices in
let voices = [];
function loadVoices(){
    voices = speechSynthesis.getVoices();
    voiceSelector.innerHTML = voices
        .map((voice, index) => `<option value="${index}">${voice.name} (${voice.lang})</option>`)
        .join("");
}

//trigger loading voices when they become available 
speechSynthesis.onvoiceschanged = loadVoices;
loadVoices();

// tts
playButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voices[voiceSelector.value];
    if (selectedVoice){
        utterance.voice = selectedVoice;
    }
    speechSynthesis.speak(utterance);
})