let scale = 1;

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "+") {
    scale += 0.2; // Увеличение масштаба
  } else if (event.ctrlKey && event.key === "-") {
    scale -= 0.2; // Уменьшение масштаба
  }
  document.body.style.transform = `scale(${scale})`;
  document.body.style.transformOrigin = "top left";
});
