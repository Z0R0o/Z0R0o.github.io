const categories = {
  discord: [
    {
      title: "Bot Army",
      description: "Moderation, AI chat, games, ticketing — full-featured Discord bot suite.",
      media: ["assets/discord1.png", "assets/discord2.mp4"]
    }
  ],
  website: [
    {
      title: "Dashboard Portal",
      description: "Custom panel for managing bots and analytics. Built using HTML/CSS/JS.",
      media: ["assets/web1.png", "assets/web2.mp4"]
    }
  ],
  games: [
    {
      title: "Live Game HUD",
      description: "Overlay for game stats, designed for streamers and pro players.",
      media: ["assets/game1.png", "assets/game2.mp4"]
    }
  ],
  tools: [
    {
      title: "Automation Tools",
      description: "Snappy CLI tools & scripts to boost productivity and uptime.",
      media: ["assets/tool1.png", "assets/tool2.mp4"]
    }
  ]
};

const projectGrid = document.getElementById("projectGrid");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const mediaSlider = document.getElementById("mediaSlider");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".category-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    projectGrid.innerHTML = "";
    categories[category].forEach((project, idx) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
      card.addEventListener("click", () => showModal(project));
      projectGrid.appendChild(card);
    });
  });
});

function showModal(project) {
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  mediaSlider.innerHTML = "";
  project.media.forEach(file => {
    if (file.endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = file;
      video.controls = true;
      mediaSlider.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = file;
      mediaSlider.appendChild(img);
    }
  });
  modal.style.display = "flex";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = e => {
  if (e.target == modal) modal.style.display = "none";
};

// Background Audio
const audio = document.getElementById("bg-audio");
let audioInitialized = false;
document.body.addEventListener('click', () => {
  if (!audioInitialized) {
    audio.volume = 0.4;
    audio.play().catch(() => {});
    audioInitialized = true;
  }
});
