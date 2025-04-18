// Background audio setup
let audioInitialized = false;
const audio = document.getElementById('bg-audio');

function initAudioPlayback() {
  if (!audioInitialized) {
    audio.volume = 0.4;
    audio.play().catch(() => {
      console.warn("Audio blocked, waiting for user interaction...");
    });
    audioInitialized = true;
  }
}

document.body.addEventListener('click', initAudioPlayback);
document.body.addEventListener('touchstart', initAudioPlayback);
