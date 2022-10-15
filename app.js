// METHOD ONE
const changebg = () => {
  let rgb = [
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
    Math.floor(Math.random() * 255),
  ];

  document.body.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;

  document.getElementById(
    "show"
  ).innerText = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
};

document.getElementById("butt").addEventListener("click", () => {
  changebg();
});

changebg();

// METHOD TWO
// const changebg = () => {
//   let r = Math.floor(Math.random() * 255);
//   let g = Math.floor(Math.random() * 255);
//   let b = Math.floor(Math.random() * 255);
//   document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//   document.getElementById("show").innerText = `RGB(${r}, ${g}, ${b})`;
// };

// document.getElementById("butt").addEventListener("click", () => {
//   changebg();
// });

// changebg();

// METHOD THREE

// const colors = () => {
//   for (let i = 0; i < 3; i++) {
//     let rgb = [Math.floor(Math.random() * 255)];
//   }
//   document.body.style.backgroundColor = `rgb(${rgb})`;
//   document.getElementById("show").innerText = `RGB (${rgb})`;
// };

// console.log(rgb);

// document.getElementById("butt").addEventListener("click", () => {
//   colors();
// });

// colors();
