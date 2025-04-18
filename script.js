const projects = {
  discord: [
    {
      title: "RNG Game Bot",
      description: "Perfect RNG Game Bot With Over 100 Items,cooldown, messages requirements, auto chat purge, ETC.",
      media: ["assets/bot1.png", "assets/bot2.mp4"]
    }
  ],
  website: [
    {
      title: "Custom Web Dashboards",
      description: "Live dashboards with automation & real-time UI.",
      media: ["assets/web-1.png", "assets/web-2.mp4"]
    }
  ],
  games: [
    {
      title: "Game Overlay",
      description: "Live HUD built in Java + web techs.",
      media: ["assets/game-1.png", "assets/game-2.mp4"]
    }
  ],
  tools: [
    {
      title: "Auto Tools",
      description: "Scripts for Discord, Twitch, and more automation.",
      media: ["assets/tool-1.png", "assets/tool-2.mp4"]
    }
  ]
};

const categoryButtons = document.querySelectorAll(".category-btn");
const projectList = document.getElementById("project-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const mediaSlider = document.getElementById("media-slider");
const closeBtn = document.querySelector(".close-btn");

let currentSlide = 0;

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const cat = btn.dataset.category;
    renderProjects(cat);
  });
});

function renderProjects(category) {
  projectList.innerHTML = "";
  projects[category].forEach((proj, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
    card.addEventListener("click", () => showModal(proj));
    projectList.appendChild(card);
  });
}

function showModal(project) {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  mediaSlider.innerHTML = `
    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
  `;

  project.media.forEach((src, i) => {
    const isVideo = src.endsWith(".mp4");
    const el = isVideo ? document.createElement("video") : document.createElement("img");
    el.src = src;
    el.classList.add("slide");
    if (isVideo) {
      el.controls = true;
    }
    if (i === 0) el.style.display = "block";
    mediaSlider.appendChild(el);
  });

  currentSlide = 0;
  modal.style.display = "flex";

  mediaSlider.querySelector(".prev").onclick = () => changeSlide(-1);
  mediaSlider.querySelector(".next").onclick = () => changeSlide(1);
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// Background audio
const audio = document.getElementById('bg-audio');
let audioInitialized = false;

function initAudioPlayback() {
  if (!audioInitialized) {
    audio.volume = 0.4;
    audio.play().catch(() => console.warn("Audio blocked"));
    audioInitialized = true;
  }
}
document.body.addEventListener('click', initAudioPlayback);
document.body.addEventListener('touchstart', initAudioPlayback);