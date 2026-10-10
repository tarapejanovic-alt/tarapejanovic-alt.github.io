const heroFrame = document.querySelector(".frame");

if (heroFrame) {
  document.addEventListener("mousemove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 12;
    const y = (event.clientY / window.innerHeight - 0.5) * 12;

    heroFrame.style.transform = `rotate(${1.5 + x * 0.35}deg) translateY(${y * 0.45}px)`;
  });
}
