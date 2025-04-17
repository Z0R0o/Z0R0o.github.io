// Open Modal
function openModal(projectId) {
  const modal = document.getElementById(projectId);
  modal.style.display = "block";
}

// Close Modal
function closeModal(projectId) {
  const modal = document.getElementById(projectId);
  modal.style.display = "none";
}

// Close the modal when the user clicks outside of the modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}

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