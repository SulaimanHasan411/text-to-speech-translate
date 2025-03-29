const voiceSelector = document.querySelector("#voiceSelect");
const playButton = document.querySelector("#playButton");
const textInput = document.querySelector("textArea");
const languageSelect = document.querySelector("#languageSelect");

//array of supported langs with ISO codes (ex: en, fr)
const langs = [
    {code: "en", name: "English"},
    {code: "es", name: "Spanish"},
    {code: "fr", name: "French"},
    {code: "de", name: "German"},
    {code: "it", name: "Italian"},
    {code: "ja", name: "Japanese"},
    {code: "zh-CN", name: "Chinese (Simplified)"},
];

//populate select language box
langs.forEach(({code, name}) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = name;
    languageSelect.appendChild(option);
})

//load voices in
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

//tts
playButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const selectedVoice = voices[voiceSelector.value];
    if (selectedVoice){
        utterance.voice = selectedVoice;
    }
    speechSynthesis.speak(utterance);
})