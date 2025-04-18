particlesJS("particles-js", {
  particles: {
    number: { value: 70 },
    color: { value: "#00ffc3" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 2,
      out_mode: "out"
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#00ffc3",
      opacity: 0.4,
      width: 1
    }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 100 },
      push: { particles_nb: 4 }
    }
  },
  retina_detect: true
});
