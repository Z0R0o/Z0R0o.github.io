const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalVideo = document.getElementById('modal-video');

const projectMedia = {
  'bot-army': [
    { type: 'img', src: 'assets/bot-army1.png' },
    { type: 'img', src: 'assets/bot-army2.png' },
    { type: 'video', src: 'assets/bot-army-demo.mp4' }
  ],
  'game-overlay': [
    { type: 'img', src: 'assets/overlay1.png' },
    { type: 'video', src: 'assets/overlay-demo.mp4' }
  ],
  'web-tools': [
    { type: 'img', src: 'assets/web1.png' },
    { type: 'img', src: 'assets/web2.png' },
    { type: 'video', src: 'assets/web-demo.mp4' }
  ]
};

let currentMedia = [];
let currentIndex = 0;

function openModal(projectKey) {
  currentMedia = projectMedia[projectKey];
  currentIndex = 0;
  updateModal();
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
  modalImg.style.display = 'none';
  modalVideo.style.display = 'none';
  modalVideo.pause();
}

function updateModal() {
  const item = currentMedia[currentIndex];

  modalImg.style.display = 'none';
  modalVideo.style.display = 'none';
  modalVideo.pause();

  if (item.type === 'img') {
    modalImg.src = item.src;
    modalImg.style.display = 'block';
  } else if (item.type === 'video') {
    modalVideo.src = item.src;
    modalVideo.style.display = 'block';
    modalVideo.load();
    modalVideo.play();
  }
}

function nextMedia() {
  currentIndex = (currentIndex + 1) % currentMedia.length;
  updateModal();
}

function prevMedia() {
  currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
  updateModal();
}

// Scroll Reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card, .about, .projects').forEach((el) => observer.observe(el));

// Background audio
let audioInitialized = false;
const audio = document.getElementById('bg-audio');

function initAudioPlayback() {
  if (!audioInitialized) {
    audio.volume = 0.4;
    audio.play().catch(() => console.warn("Audio blocked, waiting for interaction..."));
    audioInitialized = true;
  }
}

document.body.addEventListener('click', initAudioPlayback);
document.body.addEventListener('touchstart', initAudioPlayback);