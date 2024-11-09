const createPixel = () => {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");
  pixel.style.left = `${Math.random() * 100}vw`;
  pixel.style.backgroundColor = getRandomColor();
  pixel.style.animationDuration = `${Math.random() * 3 + 3}s`;
  document.body.appendChild(pixel);

  setTimeout(() => {
    pixel.remove();
  }, 10000);
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

setInterval(createPixel, 75);
