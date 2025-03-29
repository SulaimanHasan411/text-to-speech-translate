const voiceSelector = document.querySelector("#voiceSelect")
const playButton = document.querySelector("#playButton")
const textInput = document.querySelector("textArea")

// tts
playButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value)
    speechSynthesis.speak(utterance)
})