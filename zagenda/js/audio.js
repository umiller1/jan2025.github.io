function playAudio() {
    let audioPlayer = document.getElementById('unique-audio');
    audioPlayer.load();  // Reload the audio to ensure it plays from the beginning
    audioPlayer.play();
}