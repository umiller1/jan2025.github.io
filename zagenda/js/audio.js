function playAudio() {
    let audioPlayer = document.getElementById('unique-audio');
    // Reload the audio to ensure it plays from the
    audioPlayer.load();
    audioPlayer.play();
}