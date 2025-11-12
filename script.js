let btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let text = document.querySelector("#speech").value;
    if (!text) return alert("Please enter some text!");
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        speech.voice = voices[0];
    }
    window.speechSynthesis.speak(speech);
});