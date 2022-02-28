const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// *********************
// Side menu
// **********************

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .sidenav ul li");
// console.log("-------section id---------");
// sections.forEach((section) => {
//   console.log(section.getAttribute("id"));
// });
// console.log("-------list class:-------");

// navLi.forEach((list) => {
//   console.log(list.getAttribute("class"));
// });

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // topminusheight = sectionTop - sectionHeight / 3;

    if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
