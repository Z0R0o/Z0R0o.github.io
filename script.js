// Open Modal Function
function openModal(projectId) {
  const modal = document.getElementById(projectId);
  modal.style.display = 'flex';
}

// Close Modal Function
function closeModal(projectId) {
  const modal = document.getElementById(projectId);
  modal.style.display = 'none';
}

// Close modal if user clicks outside the modal content
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card[data-url]").forEach(card => {
    card.addEventListener("click", () => {
      const url = card.getAttribute("data-url");
      window.open(url, "_blank");
    });
  });
});