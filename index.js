let dvdLogo = document.getElementById('dvd-logo');
console.log(dvdLogo);
// The following is hardcoded because dvdLogo.getBoundingClientRect() returns 0
// Even though on the browser I get a value ...

document.addEventListener('DOMContentLoaded', (event) => {
  console.log(dvdLogo.getBoundingClientRect());
});
const dvdLogoWidth = 250;
const dvdLogoHeight = 113;

const colorPalette = [
  '#F5E0DC',
  '#F2CDCD',
  '#DDB6F2',
  '#F5C2E7',
  '#E8A2AF',
  '#F28FAD',
  '#F8BD96',
  '#FAE3B0',
  '#ABE9B3',
  '#B5E8E0',
  '#96CDFB',
  '#89DCEB',
  '#C9CBFF',
];

function init() {
  window.requestAnimationFrame(loop);
}

let x = 1;
let y = 1;
let dx = 1;
let dy = 1;
let paletteIdx = 0;
const speed = 5;

function changeSVGColor(color) {
  paletteIdx = (paletteIdx + 1) % colorPalette.length;
  dvdLogo.style.color = color;
}

function loop(timeStamp) {
  let width = document.getElementById('background').clientWidth;
  let height = document.getElementById('background').clientHeight;

  if (x + dvdLogoWidth >= width) {
    dx = -1;
    changeSVGColor(colorPalette[paletteIdx]);
  } else if (y + dvdLogoHeight >= height) {
    dy = -1;
    changeSVGColor(colorPalette[paletteIdx]);
  } else if (x < 0) {
    dx = 1;
    changeSVGColor(colorPalette[paletteIdx]);
  } else if (y < 0) {
    dy = 1;
    changeSVGColor(colorPalette[paletteIdx]);
  }

  x += dx * speed;
  y += dy * speed;

  dvdLogo.style.transform = `translate(${x}px,${y}px)`;

  window.requestAnimationFrame(loop);
}
init();
