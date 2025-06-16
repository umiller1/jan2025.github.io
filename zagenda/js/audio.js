function playAudio() {
    let audioPlayer = document.getElementById('unique-audio');
    // Reload the audio to ensure it plays.
    audioPlayer.load();
    audioPlayer.play();
}