// JUST RANDOM CODE TO TEST ESLINT BELOW
const no = 15; // количество снежинок
const speed = 1; // скорость снежинок
const snowflake = 'sneg.gif';

const ns4up = (document.layers) ? 1 : 0;
const ie4up = (document.all) ? 1 : 0;
let dx;
let xp;
let yp;
let am;
let stx;
let sty;
let i;
let docWidth = 800;
let docHeight = 600;
if (ns4up) {
  docWidth = self.innerWidth;
  docHeight = self.innerHeight;
} else if (ie4up) {
  docWidth = document.body.clientWidth;
  docHeight = document.body.clientHeight;
}
dx = [];
xp = [];
yp = [];
am = [];
stx = [];
sty = [];
for (i = 0; i < no; ++i) {
  dx[i] = 0;
  xp[i] = Math.random() * (docWidth - 50);
  yp[i] = Math.random() * docHeight;
  am[i] = Math.random() * 20;
  stx[i] = 0.02 + Math.random() / 10;
  sty[i] = 0.7 + Math.random();
  if (ns4up) document.write(`<layer name="dot${i}" left="15" top="15" visibility="show"><img src="${snowflake}" border="0" alt="Снежинка"></layer>`);
  else if (ie4up) document.write(`<div id="dot${i}" style="position:absolute; z-index: ${i}; visibility:visible; top: 15px; left: 15px;"><img src="${snowflake}" border="0" alt="Снежинка"></div>`);
}
function snowNS() {
  for (i = 0; i < no; ++i) {
    yp[i] += sty[i];
    if (yp[i] > docHeight - 50) {
      xp[i] = Math.random() * (docWidth - am[i] - 30);
      yp[i] = 0;
      stx[i] = 0.02 + Math.random() / 10;
      sty[i] = 0.7 + Math.random();
      docWidth = self.innerWidth;
      docHeight = self.innerHeight;
    }
    dx[i] += stx[i];
    document.layers[`dot${i}`].top = yp[i];
    document.layers[`dot${i}`].left = xp[i] + am[i] * Math.sin(dx[i]);
  }
  setTimeout('snowNS()', speed);
}
function snowIE() {
  for (i = 0; i < no; ++i) {
    yp[i] += sty[i];
    if (yp[i] > docHeight - 50) {
      xp[i] = Math.random() * (docWidth - am[i] - 30);
      yp[i] = 0;
      stx[i] = 0.02 + Math.random() / 10;
      sty[i] = 0.7 + Math.random();
      docWidth = document.body.clientWidth;
      docHeight = document.body.clientHeight;
    }
    dx[i] += stx[i];
    document.all[`dot${i}`].style.pixelTop = yp[i];
    document.all[`dot${i}`].style.pixelLeft = xp[i] + am[i] * Math.sin(dx[i]);
  }
  setTimeout('snowIE()', speed);
}
if (ns4up) snowNS();
else if (ie4up) snowIE();
for (i = 0; i < 24; i++)document.write('Снег на странице<br>');
