const cabinetImg = document.getElementById('cabinet');
const buttons = document.querySelectorAll('.color-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.dataset.color;
    cabinetImg.src = `images/cabinet-${color}.png`;
  });
});
