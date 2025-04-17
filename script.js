const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const mediaSlider = document.getElementById("mediaSlider");
const closeBtn = document.querySelector(".close-btn");

let currentIndex = 0;
let currentMedia = [];

const projects = [
  {
    title: "RNG game bot",
    category: "discord",
    description: "High-performance Discord Game bot with over 100 items to collect, perfect cooldown, messages requirement for rolls/spins, auto chat purge, and much more.",
    media: ["assets/bot1.png", "assets/bot2.mp4"]
  },
  {
    title: "Zoro Web",
    category: "website",
    description: "Clean & cold responsive landing sites, dashboards, panels, portfolios, you name it.",
    media: ["assets/web1.png", "assets/web2.png"]
  },
  {
    title: "HUD Game Overlay",
    category: "games",
    description: "Overlay system showing live stats, FPS, kill feed, built in Java & HTML layers.",
    media: ["assets/game1.mp4", "assets/game2.png"]
  },
  {
    title: "Automation Tools",
    category: "tools",
    description: "Custom automation for workflows — scrapers, alerts, triggers, Discord/Twitch APIs.",
    media: ["assets/tool1.png", "assets/tool2.mp4"]
  }
];

function renderProjects(category) {
  projectGrid.innerHTML = "";
  const filtered = projects.filter(p => p.category === category);
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
    card.addEventListener("click", () => showModal(p));
    projectGrid.appendChild(card);
  });
}

function showModal(project) {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  mediaSlider.innerHTML = "";
  currentMedia = [];

  project.media.forEach(file => {
    let el = file.endsWith(".mp4") ? document.createElement("video") : document.createElement("img");
    el.src = file;
    if (file.endsWith(".mp4")) el.controls = true;
    el.style.display = "none";
    currentMedia.push(el);
    mediaSlider.appendChild(el);
  });

  currentIndex = 0;
  if (currentMedia.length > 0) currentMedia[0].style.display = "block";

  modal.style.display = "flex";
}

document.getElementById("prevBtn").addEventListener("click", () => {
  if (!currentMedia.length) return;
  currentMedia[currentIndex].style.display = "none";
  currentIndex = (currentIndex - 1 + currentMedia.length) % currentMedia.length;
  currentMedia[currentIndex].style.display = "block";
});

document.getElementById("nextBtn").addEventListener("click", () => {
  if (!currentMedia.length) return;
  currentMedia[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % currentMedia.length;
  currentMedia[currentIndex].style.display = "block";
});

closeBtn.addEventListener("click", () => modal.style.display = "none");

// Category click logic
document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.getAttribute("data-category");
    renderProjects(cat);
  });
});

// Scroll reveal (optional)
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

// Background audio
let audioInitialized = false;
const audio = document.getElementById('bg-audio');
function initAudioPlayback() {
  if (!audioInitialized) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
    audioInitialized = true;
  }
}
document.body.addEventListener('click', initAudioPlayback);
document.body.addEventListener('touchstart', initAudioPlayback);
