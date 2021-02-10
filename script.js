//DOM
let textWrapper = document.querySelector(".text");

//textWrapper
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='text'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".text",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1),
  })
  .add({
    targets: ".text-showCase",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000,
  });
