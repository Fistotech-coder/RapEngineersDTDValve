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

  // Second Slide
  if (scrollY > 350 && hasAnimatedV && textAnimationCompleted) {
    if (!hasShownSecondSlide) {
      hasShownSecondSlide = true;
      secondSlide.classList.add('visible');
      verticalLine.classList.add('active');
    }
  } else if (scrollY <= 350 && hasShownSecondSlide) {
    hasShownSecondSlide = false;
    secondSlide.classList.remove('visible');
    verticalLine.classList.remove('active');
    secondSlideAnimationCompleted = false;
  }

  // Details Slide
  if (scrollY > 450 && hasShownSecondSlide && secondSlideAnimationCompleted) {
    if (!hasShownDetailsSlide) {
      hasShownDetailsSlide = true;
      detailsSlide?.classList.add('visible');
      detailsVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 450 && hasShownDetailsSlide) {
    hasShownDetailsSlide = false;
    detailsSlide?.classList.remove('visible');
    detailsVerticalLine?.classList.remove('active');
    detailsSlideAnimationCompleted = false;
  }

  // Fourth Slide
  if (scrollY > 550 && hasShownDetailsSlide && detailsSlideAnimationCompleted) {
    if (!hasShownFourthSlide) {
      hasShownFourthSlide = true;
      fourthSlide?.classList.add('visible');
      fourthVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 550 && hasShownFourthSlide) {
    hasShownFourthSlide = false;
    fourthSlide?.classList.remove('visible');
    fourthVerticalLine?.classList.remove('active');
    fourthSlideAnimationCompleted = false;
  }

  // Fifth Slide
  if (scrollY > 650 && hasShownFourthSlide && fourthSlideAnimationCompleted) {
    if (!hasShownFifthSlide) {
      hasShownFifthSlide = true;
      fifthSlide?.classList.add('visible');
      fifthVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 650 && hasShownFifthSlide) {
    hasShownFifthSlide = false;
    fifthSlide?.classList.remove('visible');
    fifthVerticalLine?.classList.remove('active');
    fifthSlideAnimationCompleted = false;
  }

  // Sixth Slide
  if (scrollY > 750 && hasShownFifthSlide && fifthSlideAnimationCompleted) {
    if (!hasShownSixSlide) {
      hasShownSixSlide = true;
      sixSlide?.classList.add('visible');
      sixVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 750 && hasShownSixSlide) {
    hasShownSixSlide = false;
    sixSlide?.classList.remove('visible');
    sixVerticalLine?.classList.remove('active');
    sixSlideAnimationCompleted = false;
  }

  // Seventh Slide
  if (scrollY > 850 && hasShownSixSlide && sixSlideAnimationCompleted) {
    if (!hasShownSevenSlide) {
      hasShownSevenSlide = true;
      sevenSlide?.classList.add('visible');
      sevenVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 850 && hasShownSevenSlide) {
    hasShownSevenSlide = false;
    sevenSlide?.classList.remove('visible');
    sevenVerticalLine?.classList.remove('active');
    sevenSlideAnimationCompleted = false;
  }

  // Eighth Slide
  if (scrollY > 950 && hasShownSevenSlide && sevenSlideAnimationCompleted) {
    if (!hasShownEightSlide) {
      hasShownEightSlide = true;
      eightSlide?.classList.add('visible');
      eightVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 950 && hasShownEightSlide) {
    hasShownEightSlide = false;
    eightSlide?.classList.remove('visible');
    eightVerticalLine?.classList.remove('active');
    eightSlideAnimationCompleted = false;
  }

  // Ninth Slide
  if (scrollY > 1050 && hasShownEightSlide && eightSlideAnimationCompleted) {
    if (!hasShownNineSlide) {
      hasShownNineSlide = true;
      nineSlide?.classList.add('visible');
      nineVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 1050 && hasShownNineSlide) {
    hasShownNineSlide = false;
    nineSlide?.classList.remove('visible');
    nineVerticalLine?.classList.remove('active');
    nineSlideAnimationCompleted = false;
  }

  // Ten Slide
  if (scrollY > 1100 && hasShownNineSlide && nineSlideAnimationCompleted) {
    if (!hasShownTenSlide) {
      hasShownTenSlide = true;
      tenSlide?.classList.add('visible');
      tenVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 1100 && hasShownTenSlide) {
    hasShownTenSlide = false;
    tenSlide?.classList.remove('visible');
    tenVerticalLine?.classList.remove('active');
    tenSlideAnimationCompleted = false;
  }

  // Eleven Slide
  if (scrollY > 1150 && hasShownTenSlide && tenSlideAnimationCompleted) {
    if (!hasShownElevenSlide) {
      hasShownElevenSlide = true;
      elevenSlide?.classList.add('visible');
      elevenVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 1150 && hasShownElevenSlide) {
    hasShownElevenSlide = false;
    elevenSlide?.classList.remove('visible');
    elevenVerticalLine?.classList.remove('active');
    elevenSlideAnimationCompleted = false;
  }

  // Tweleve Slide
  if (scrollY > 1150 && hasShownElevenSlide && elevenSlideAnimationCompleted) {
    if (!hasShownTweleveSlide) {
      hasShownTweleveSlide = true;
      tweleveSlide?.classList.add('visible');
      tweleveVerticalLine?.classList.add('active');
    }
  } else if (scrollY <= 1150 && hasShownTweleveSlide) {
    hasShownTweleveSlide = false;
    tweleveSlide?.classList.remove('visible');
    tweleveVerticalLine?.classList.remove('active');
    tweleveSlideAnimationCompleted = false;
  }

  // Reset everything if user scrolls back to top
  if (scrollY <= 100 && (
    hasAnimatedV || hasShownSecondSlide || hasShownDetailsSlide ||
    hasShownFourthSlide || hasShownFifthSlide || hasShownSixSlide ||
    hasShownSevenSlide || hasShownEightSlide || hasShownNineSlide || 
    hasShownTenSlide || hasShownElevenSlide || hasShownTweleveSlide
  )) {
    hasAnimatedV = true;

    hasShownSecondSlide = true;
    hasShownDetailsSlide = true;
    hasShownFourthSlide = true;
    hasShownFifthSlide = true;
    hasShownSixSlide = true;
    hasShownSevenSlide = true;
    hasShownEightSlide = true;
    hasShownNineSlide = true;
    hasShownTenSlide = true;
    hasShownElevenSlide = true;
    hasShownTweleveSlide = true;

    textAnimationCompleted = true;
    secondSlideAnimationCompleted = true;
    detailsSlideAnimationCompleted = true;
    fourthSlideAnimationCompleted = true;
    fifthSlideAnimationCompleted = true;
    sixSlideAnimationCompleted = true;
    sevenSlideAnimationCompleted = true;
    eightSlideAnimationCompleted = true;
    nineSlideAnimationCompleted = true;
    tenSlideAnimationCompleted = true;
    elevenSlideAnimationCompleted = true;
    tweleveSlideAnimationCompleted = true;

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
});

// New Reverse Scroll Logic
slides.forEach((slide, index) => {
  const slideElement = document.getElementById(slide.id);
  const verticalLine = slideElement?.querySelector(`.${slide.line}`);

  if (!slideElement) return;

  const slideTop = slideElement.getBoundingClientRect().top + window.scrollY;
  const triggerPoint = slideTop - window.innerHeight / 1.2;

  // Reverse animation when scrolling up
  if (window.scrollY < triggerPoint && animationStates[slide.id]) {
    animationStates[slide.id] = false;
    animationCompletions[slide.id] = false;

    slideElement.classList.remove('visible');
    verticalLine?.classList.remove('active');
  }
});


// Pagination indicator
// const pageIndicator = document.getElementById('pageIndicator');
// const sections = document.querySelectorAll('.page-section');
// const totalPages = sections.length;

// function updatePageIndicator() {
//   let currentPage = 1;
//   sections.forEach((section, index) => {
//     const rect = section.getBoundingClientRect();
//     if (
//       rect.top <= window.innerHeight / 2 &&
//       rect.bottom >= window.innerHeight / 2
//     ) {
//       currentPage = index + 1;
//     }
//   });
//   pageIndicator.textContent = `${currentPage} / ${totalPages}`;
// }

// window.addEventListener('scroll', updatePageIndicator);
// window.addEventListener('load', updatePageIndicator);

// const sliderItems = document.querySelectorAll('.slider-item');
// let currentItemIndex = 0;

// function showNextSlide() {
//   sliderItems[currentItemIndex].classList.remove('active');
//   currentItemIndex = (currentItemIndex + 1) % sliderItems.length;
//   sliderItems[currentItemIndex].classList.add('active');
// }
// setInterval(showNextSlide, 3000);


console.log(window.innerHeight);

const videoContainer = document.getElementById("videoContainer");
const video = document.getElementById("video");
const magnifier = document.getElementById("magnifier");
const zoomedVideo = document.getElementById("zoomedVideo");

// Sync zoomed video with main video
video.addEventListener("play", () => zoomedVideo.play());
video.addEventListener("pause", () => zoomedVideo.pause());
video.addEventListener("timeupdate", () => {
  zoomedVideo.currentTime = video.currentTime;
});

// Mousemove event to update magnifier and zoomed video position
videoContainer.addEventListener("mousemove", (e) => {
  const { left, top, width, height } = videoContainer.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;

  console.log(`Mouse Position: x = ${x}, y = ${y}`); // Debugging mouse position

  magnifier.style.left = `${x}px`;
  magnifier.style.top = `${y}px`;
  magnifier.style.display = "block"; // Show the magnifier on mouse move

  const scale = 2; // Zoom factor
  zoomedVideo.style.width = `${width * scale}px`;
  zoomedVideo.style.height = `${height * scale}px`;
  zoomedVideo.style.left = `-${x * scale - magnifier.offsetWidth / 2}px`;
  zoomedVideo.style.top = `-${y * scale - magnifier.offsetHeight / 2}px`;

  // Debugging visibility
  console.log("Magnifier visibility:", magnifier.style.display);
});

// Hide magnifier when mouse leaves video container
videoContainer.addEventListener("mouseleave", () => {
  magnifier.style.display = "none";
});




document.addEventListener('DOMContentLoaded', function () {
  const valveImage = document.querySelector('.valve-image1');
  const segments = document.querySelectorAll('.circle-segment');
  const detailsDescription = document.querySelector('.details-description1');
  const featureList = detailsDescription.querySelector('.feature-list');

  // Initial color values for segments
  const originalColors = {
    'segment-dtd': '#1B7AC8',
    'segment-btm': '#448CDF',
    'segment-valve': '#74B2ED',
    'segment-sdtd': '#024591'
  };

  // Map segment class to valve info and left content
  const valveMap = {
    'segment-dtd': {
      image: './images/DTDnew.png',
      description: [
        'It is used with DT type RV',
        ' It is a transition piece connecting the RV outlet to the conveying line',
        'It has a flange connection (available in DIN / ANSI / JIS) on the top and pipe connection (available in different sizes) on the bottom',
        'Available in mild steel & stainless steel construction'
      ]
    },
    'segment-btm': {
      image: './images/Ytype.png',
      description: [
        'Sliding Rails option in RV is very useful for cleaning of valve with ease and less effort',
        'It is available for Exec.2 and dairy versions'
      ]
    },
    'segment-valve': {
      image: './images/SDTD.png',
      description: [
        'It is used with DT type RV',
        'It is a transition piece connecting the RV outlet to the conveying line',
        'It has a flange connection (available in DIN / ANSI / JIS) on the top and pipe connection (available in different sizes) on the bottom',
        'Available in mild steel & stainless steel construction'
      ]
    },
    'segment-sdtd': {
      image: './images/BDV.png',
      description: [
        'It is used with DT type RV',
        'It is a transition piece connecting the RV outlet to the conveying line',
        'It has a flange connection (available in DIN / ANSI / JIS) on the top and pipe connection (available in different sizes) on the bottom',
        'Available in mild steel & stainless steel construction'
      ]
    }
  };

  // Add click listeners to segments
  segments.forEach(segment => {
    segment.style.cursor = 'pointer';
    segment.addEventListener('click', () => {
      // Reset all segments to their original colors
      segments.forEach(seg => {
        for (let key in originalColors) {
          if (seg.classList.contains(key)) {
            seg.style.backgroundColor = originalColors[key];
          }
        }
      });

      // Change the clicked segment color to #1B1B1B
      segment.style.backgroundColor = '#1B1B1B';

      // Update the valve image and left-side content
      for (let key in valveMap) {
        if (segment.classList.contains(key)) {
          valveImage.src = valveMap[key].image;

          // Update the feature list
          featureList.innerHTML = '';  // Clear previous features
          valveMap[key].description.forEach(item => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="./images/Vector.png" alt=""> ${item}`;
            featureList.appendChild(listItem);
          });
        }
      }
    });
  });
});



