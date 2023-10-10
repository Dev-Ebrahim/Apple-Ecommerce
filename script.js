// Common JS

document.querySelectorAll(".watch-control, .controls a, .iphone-btns").forEach((control) => {
  control.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// End Of Common JS

// Cube

let x = 0;
let y = 20;
let z = 0;

let bool = true;
let interval;

const cube = document.querySelector(".cube");

document.querySelector(".top-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".bottom-x-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
});

document.querySelector(".left-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".right-y-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg)`;
});

document.querySelector(".top-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg)`;
});

document.querySelector(".bottom-z-control").addEventListener("click", () => {
  cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg)`;
});

const rotateCube = () => {
  if (bool) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 50);
  } else {
    clearInterval(interval);
  }
};

rotateCube();

document.querySelector(".controls").addEventListener("mouseover", () => {
  bool = false;
  rotateCube();
});

document.querySelector(".controls").addEventListener("mouseout", () => {
  bool = true;
  rotateCube();
});

// End Of Cube

// SlideShow
const divsContainer = document.querySelector(".slideShow");

const slideShowDivs = () => {
  for (let i = 1; i <= 5; i++) {
    let div = document.createElement("div");
    div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`;

    i === 1 && div.classList.add("change");

    divsContainer.appendChild(div);
  }
};

slideShowDivs();

const divs = document.querySelectorAll(".slideShow div");
let counter = 1;

const slideShow = () => {
  setInterval(() => {
    counter++;

    let div = document.querySelector(".change");
    div.classList.remove("change");

    if (counter <= divs.length) {
      div.nextElementSibling.classList.add("change");
    } else {
      divs[0].classList.add("change");
      counter = 1;
    }
  }, 10000);
};

slideShow();

// End Of SlideShow

// Section 3

const section3Content = document.querySelector(".section-3-content");

window.addEventListener("scroll", () => {
  if (
    window.pageYOffset + window.innerHeight >=
    section3Content.offsetTop + section3Content.offsetHeight / 2
  ) {
    section3Content.classList.add("change");
  }
});

// End Of Section 3

// Section 4

const watchBands = document.querySelector(".watch-bands");
const watchCases = document.querySelector(".watch-cases");

const watchTopControl = document.querySelector(".watch-top-control");
const watchBottomControl = document.querySelector(".watch-bottom-control");
const watchRightControl = document.querySelector(".watch-right-control");
const watchLeftControl = document.querySelector(".watch-left-control");

let axisY = 0;
let axisX = 0;

const hideControl = () => {
  if (axisY === -208) {
    watchTopControl.classList.add("hide-control");
  } else {
    watchTopControl.classList.remove("hide-control");
  }

  if (axisY === 208) {
    watchBottomControl.classList.add("hide-control");
  } else {
    watchBottomControl.classList.remove("hide-control");
  }

  if (axisX === 208) {
    watchRightControl.classList.add("hide-control");
  } else {
    watchRightControl.classList.remove("hide-control");
  }

  if (axisX === -208) {
    watchLeftControl.classList.add("hide-control");
  } else {
    watchLeftControl.classList.remove("hide-control");
  }
};

watchTopControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY -= 52)}rem`;
  hideControl();
});

watchBottomControl.addEventListener("click", () => {
  watchCases.style.marginTop = `${(axisY += 52)}rem`;
  hideControl();
});

watchRightControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX += 52)}rem`;
  hideControl();
});

watchLeftControl.addEventListener("click", () => {
  watchBands.style.marginRight = `${(axisX -= 52)}rem`;
  hideControl();
});

// End Of Section 4
