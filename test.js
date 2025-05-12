// if ("scrollRestoration" in history) {
//   history.scrollRestoration = "manual";
// }
// window.scrollTo(0, 0);

// const circle = document.getElementById('circle');
// const bgVideo = document.getElementById('bgVideo');
// const bullseyeMask = document.getElementById('bullseyeMask');
// const body = document.body;
// const navbar = document.getElementById('navbar');
// const centerImage = document.querySelector('.center-image');
// const textTop = document.querySelector('.text:first-child');
// const textBottom = document.querySelector('.text:last-child');
// const valveLetter = document.querySelector('.valve-letter');

// let hasAnimatedV = false;
// let textAnimationCompleted = false;

// // Initial transition
// textBottom.addEventListener('transitionend', () => {
//   textAnimationCompleted = true;
// });

// // Slide management setup
// const slides = [
//   { id: 'secondSlide', lineClass: 'vertical-line', threshold: 350 },
//   { id: 'detailsSlide', lineClass: 'details-vertical-line', threshold: 450 },
//   { id: 'fourthSlide', lineClass: 'fourth-vertical-line', threshold: 550 },
//   { id: 'fifthSlide', lineClass: 'fifth-vertical-line', threshold: 650 },
//   { id: 'sixSlide', lineClass: 'six-vertical-line', threshold: 750 },
//   { id: 'sevenSlide', lineClass: 'seven-vertical-line', threshold: 850 },
//   { id: 'eightSlide', lineClass: 'eight-vertical-line', threshold: 950 },
//   { id: 'nineSlide', lineClass: 'nine-vertical-line', threshold: 1050 },
//   { id: 'tenSlide', lineClass: 'ten-vertical-line', threshold: 1150 },
//   { id: 'elevenSlide', lineClass: 'eleven-vertical-line', threshold: 1250 },
//   { id: 'tweleveSlide', lineClass: 'tweleve-vertical-line', threshold: 1350 }
// ];

// // Slide state tracker
// const slideState = {};
// slides.forEach(({ id }) => {
//   slideState[id] = { shown: false };
// });

// // Scroll handler
// window.addEventListener('scroll', () => {
//   const scrollY = window.scrollY;

//   // Initial circle zoom
//   if (scrollY > 1100 && !hasAnimatedV) {
//     hasAnimatedV = true;
//     circle.classList.add('zoom-out');
//     bullseyeMask.classList.add('zoom-out');
//     bgVideo.style.opacity = 0;
//     body.classList.add('gray-bg');

//     setTimeout(() => {
//       navbar.style.display = 'flex';
//       navbar.classList.add('visible');
//       centerImage.classList.add('fade-out');
//       textTop.classList.add('scroll-to-top');
//       textBottom.classList.add('scroll-to-top');
//       valveLetter.classList.add('draw-line');
//       textBottom.classList.add('center-valve-text');
//     }, 2000);
//   }

//   // Slides scroll animation
//   slides.forEach(({ id, lineClass, threshold }) => {
//     const slide = document.getElementById(id);
//     const line = slide?.querySelector(`.${lineClass}`);
//     if (!slide) return;

//     const isIn = scrollY > threshold;
//     const state = slideState[id];

//     if (isIn && !state.shown && textAnimationCompleted) {
//       // Enter animation
//       slide.classList.add('visible');
//       line?.classList.add('active');
//       state.shown = true;
//     } else if (!isIn && state.shown) {
//       // Reverse animation
//       slide.classList.remove('visible');
//       slide.classList.add('exiting');
//       line?.classList.remove('active');
//       state.shown = false;

//       // Clean up exiting class after transition
//       setTimeout(() => {
//         slide.classList.remove('exiting');
//       }, 1000);
//     }
//   });

//   // Reset at top
//   if (scrollY <= 1100 && hasAnimatedV) {
//     hasAnimatedV = false;
//     textAnimationCompleted = false;

//     circle.classList.remove('zoom-out');
//     bullseyeMask.classList.remove('zoom-out');
//     bgVideo.style.opacity = 1;
//     body.classList.remove('gray-bg');
//     navbar.classList.remove('visible');
//     setTimeout(() => navbar.style.display = 'none', 500);

//     centerImage.classList.remove('fade-out');
//     textTop.classList.remove('scroll-to-top');
//     textBottom.classList.remove('scroll-to-top');
//     valveLetter.classList.remove('draw-line');
//     textBottom.classList.remove('center-valve-text');

//     slides.forEach(({ id, lineClass }) => {
//       const slide = document.getElementById(id);
//       const line = slide?.querySelector(`.${lineClass}`);
//       slide?.classList.remove('visible', 'exiting');
//       line?.classList.remove('active');
//       slideState[id].shown = false;
//     });
//   }
// });
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

const circle = document.getElementById('circle');
const bgVideo = document.getElementById('bgVideo');
const bullseyeMask = document.getElementById('bullseyeMask');
const body = document.body;
const navbar = document.getElementById('navbar');
const centerImage = document.querySelector('.center-image');
const textTop = document.querySelector('.text:first-child');
const textBottom = document.querySelector('.text:last-child');
const valveLetter = document.querySelector('.valve-letter');

const secondSlide = document.getElementById('secondSlide');
const verticalLine = document.getElementById('verticalLine');

const detailsSlide = document.getElementById('detailsSlide');
const detailsVerticalLine = detailsSlide?.querySelector('.details-vertical-line');

const fourthSlide = document.getElementById('fourthSlide');
const fourthVerticalLine = fourthSlide?.querySelector('.fourth-vertical-line');

const fifthSlide = document.getElementById('fifthSlide');
const fifthVerticalLine = fifthSlide?.querySelector('.fifth-vertical-line');

const sixSlide = document.getElementById('sixSlide');
const sixVerticalLine = sixSlide?.querySelector('.six-vertical-line');

const sevenSlide = document.getElementById('sevenSlide');
const sevenVerticalLine = sevenSlide?.querySelector('.seven-vertical-line');

const eightSlide = document.getElementById('eightSlide');
const eightVerticalLine = eightSlide?.querySelector('.eight-vertical-line');

const nineSlide = document.getElementById('nineSlide');
const nineVerticalLine = nineSlide?.querySelector('.nine-vertical-line');

const tenSlide = document.getElementById('tenSlide');
const tenVerticalLine = tenSlide?.querySelector('.ten-vertical-line');

const elevenSlide = document.getElementById('elevenSlide');
const elevenVerticalLine = elevenSlide?.querySelector('.eleven-vertical-line');

const tweleveSlide = document.getElementById('tweleveSlide');
const tweleveVerticalLine = tweleveSlide?.querySelector('.tweleve-vertical-line');

// Animation state flags
let hasAnimatedV = false;
let hasShownSecondSlide = false;
let hasShownDetailsSlide = false;
let hasShownFourthSlide = false;
let hasShownFifthSlide = false;
let hasShownSixSlide = false;
let hasShownSevenSlide = false;
let hasShownEightSlide = false;
let hasShownNineSlide = false;
let hasShownTenSlide = false;
let hasShownElevenSlide = false;
let hasShownTweleveSlide = false;

let textAnimationCompleted = false;
let secondSlideAnimationCompleted = false;
let detailsSlideAnimationCompleted = false;
let fourthSlideAnimationCompleted = false;
let fifthSlideAnimationCompleted = false;
let sixSlideAnimationCompleted = false;
let sevenSlideAnimationCompleted = false;
let eightSlideAnimationCompleted = false;
let nineSlideAnimationCompleted = false;
let tenSlideAnimationCompleted = false;
let elevenSlideAnimationCompleted = false;
let tweleveSlideAnimationCompleted = false;

// Transition end listeners
textBottom.addEventListener('transitionend', () => textAnimationCompleted = true);
secondSlide.addEventListener('transitionend', () => secondSlideAnimationCompleted = true);
detailsSlide?.addEventListener('transitionend', () => detailsSlideAnimationCompleted = true);
fourthSlide?.addEventListener('transitionend', () => fourthSlideAnimationCompleted = true);
fifthSlide?.addEventListener('transitionend', () => fifthSlideAnimationCompleted = true);
sixSlide?.addEventListener('transitionend', () => sixSlideAnimationCompleted = true);
sevenSlide?.addEventListener('transitionend', () => sevenSlideAnimationCompleted = true);
eightSlide?.addEventListener('transitionend', () => eightSlideAnimationCompleted = true);
nineSlide?.addEventListener('transitionend', () => nineSlideAnimationCompleted = true);
tenSlide?.addEventListener('transitionend', () => tenSlideAnimationCompleted = true);
elevenSlide?.addEventListener('transitionend', () => elevenSlideAnimationCompleted = true);
tweleveSlide?.addEventListener('transitionend', () => tweleveSlideAnimationCompleted = true);

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  // Trigger V animation
  if (scrollY > 250 && !hasAnimatedV) {
    hasAnimatedV = true;

    circle.classList.add('zoom-out');
    bullseyeMask.classList.add('zoom-out');
    bgVideo.style.opacity = 0;
    body.classList.add('gray-bg');

    setTimeout(() => {
      navbar.style.display = 'flex';
      navbar.classList.add('visible');

      centerImage.classList.add('fade-out');
      textTop.classList.add('scroll-to-top');
      textBottom.classList.add('scroll-to-top');

      valveLetter.classList.add('draw-line');
      textBottom.classList.add('center-valve-text');
    }, 2000);
  }

  // Slide animations with corresponding scroll events
  function handleSlideAnimation(slide, verticalLine, slideNumber, animationCompletedFlag) {
    if (scrollY > slideNumber && animationCompletedFlag) {
      if (!slide.classList.contains('visible')) {
        slide.classList.add('visible');
        verticalLine?.classList.add('active');
      }
    } else if (scrollY <= slideNumber && slide.classList.contains('visible')) {
      slide.classList.remove('visible');
      verticalLine?.classList.remove('active');
      animationCompletedFlag = false;
    }
  }

  handleSlideAnimation(secondSlide, verticalLine, 350, secondSlideAnimationCompleted);
  handleSlideAnimation(detailsSlide, detailsVerticalLine, 450, detailsSlideAnimationCompleted);
  handleSlideAnimation(fourthSlide, fourthVerticalLine, 550, fourthSlideAnimationCompleted);
  handleSlideAnimation(fifthSlide, fifthVerticalLine, 650, fifthSlideAnimationCompleted);
  handleSlideAnimation(sixSlide, sixVerticalLine, 750, sixSlideAnimationCompleted);
  handleSlideAnimation(sevenSlide, sevenVerticalLine, 850, sevenSlideAnimationCompleted);
  handleSlideAnimation(eightSlide, eightVerticalLine, 950, eightSlideAnimationCompleted);
  handleSlideAnimation(nineSlide, nineVerticalLine, 1050, nineSlideAnimationCompleted);
  handleSlideAnimation(tenSlide, tenVerticalLine, 1100, tenSlideAnimationCompleted);
  handleSlideAnimation(elevenSlide, elevenVerticalLine, 1150, elevenSlideAnimationCompleted);
  handleSlideAnimation(tweleveSlide, tweleveVerticalLine, 1150, tweleveSlideAnimationCompleted);

  // Reset everything if user scrolls back to top
  if (scrollY <= 250) {
    resetAll();
  }
});

// Reset all states
function resetAll() {
  hasAnimatedV = false;
  hasShownSecondSlide = false;
  hasShownDetailsSlide = false;
  hasShownFourthSlide = false;
  hasShownFifthSlide = false;
  hasShownSixSlide = false;
  hasShownSevenSlide = false;
  hasShownEightSlide = false;
  hasShownNineSlide = false;
  hasShownTenSlide = false;
  hasShownElevenSlide = false;
  hasShownTweleveSlide = false;

  textAnimationCompleted = false;
  secondSlideAnimationCompleted = false;
  detailsSlideAnimationCompleted = false;
  fourthSlideAnimationCompleted = false;
  fifthSlideAnimationCompleted = false;
  sixSlideAnimationCompleted = false;
  sevenSlideAnimationCompleted = false;
  eightSlideAnimationCompleted = false;
  nineSlideAnimationCompleted = false;
  tenSlideAnimationCompleted = false;
  elevenSlideAnimationCompleted = false;
  tweleveSlideAnimationCompleted = false;

  circle.classList.remove('zoom-out');
  bullseyeMask.classList.remove('zoom-out');
  bgVideo.style.opacity = 1;
  body.classList.remove('gray-bg');
  navbar.classList.remove('visible');

  setTimeout(() => {
    navbar.style.display = 'none';
  }, 500);

  centerImage.classList.remove('fade-out');
  textTop.classList.remove('scroll-to-top');
  textBottom.classList.remove('scroll-to-top');

  valveLetter.classList.remove('draw-line');
  textBottom.classList.remove('center-valve-text');

  secondSlide.classList.remove('visible');
  verticalLine.classList.remove('active');

  detailsSlide?.classList.remove('visible');
  detailsVerticalLine?.classList.remove('active');

  fourthSlide?.classList.remove('visible');
  fourthVerticalLine?.classList.remove('active');

  fifthSlide?.classList.remove('visible');
  fifthVerticalLine?.classList.remove('active');

  sixSlide?.classList.remove('visible');
  sixVerticalLine?.classList.remove('active');

  sevenSlide?.classList.remove('visible');
  sevenVerticalLine?.classList.remove('active');

  eightSlide?.classList.remove('visible');
  eightVerticalLine?.classList.remove('active');

  nineSlide?.classList.remove('visible');
  nineVerticalLine?.classList.remove('active');

  tenSlide?.classList.remove('visible');
  tenVerticalLine?.classList.remove('active');

  elevenSlide?.classList.remove('visible');
  elevenVerticalLine?.classList.remove('active');

  tweleveSlide?.classList.remove('visible');
  tweleveVerticalLine?.classList.remove('active');
}

// Video Zoom Magnifier
const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("bgVideo");
const zoomedVideo = document.getElementById("zoomedVideo");

videoContainer.addEventListener("mousemove", (e) => {
  const scale = 2;
  const mouseX = e.clientX - videoContainer.offsetLeft;
  const mouseY = e.clientY - videoContainer.offsetTop;

  const videoWidth = video.videoWidth;
  const videoHeight = video.videoHeight;

  const zoomX = (mouseX / videoContainer.offsetWidth) * videoWidth;
  const zoomY = (mouseY / videoContainer.offsetHeight) * videoHeight;

  zoomedVideo.style.transform = `translate(-${zoomX}px, -${zoomY}px) scale(${scale})`;
  zoomedVideo.style.clipPath = `circle(30% at ${mouseX}px ${mouseY}px)`;
  zoomedVideo.currentTime = video.currentTime;
  zoomedVideo.play();
});

videoContainer.addEventListener("mouseleave", () => {
  zoomedVideo.style.transform = "scale(1)";
  zoomedVideo.style.clipPath = "none";
  zoomedVideo.pause();
});
