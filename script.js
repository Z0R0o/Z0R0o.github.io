// script.js

// Scroll reveal logic
const reveals = document.querySelectorAll('.card, .about, .projects');
function revealOnScroll() {
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

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

// Optional: Discord Rich Presence integration (if using Discord bot backend)
// Example of how you can send a rich presence using discord.js (Node.js backend)
// See Discord Developer Docs for the implementation on your backend side.