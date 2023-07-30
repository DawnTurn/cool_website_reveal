const tl = gsap.timeline()
const intro = document.querySelector('.black-container')


tl.to(".text", 0.6, { y: 0, stagger: 0.8, ease: Power1.easeIn })
  .to(".gradient", 1, { x: 0, ease: Power2.easeInOut })
  .to(".black-container", 0.8, { height: 0, ease: Power2.easeInOut })
  .to(".content", 0.7, { y: "-100%", ease: Power2.easeInOut }, "-=0.6")
  .fromTo(
    ".first-page",
    1,
    { opacity: 0 },
    { opacity: 1, ease: Power2.easeInOut }, '-=0.6'
  )
  .fromTo(
    ".hero-sec-content",
    0.5,
    { y: "15%", opacity: 0 },
    { y: 0, opacity: 1, ease: Power2.easeInOut },
    "-=0.4"
  )
  .fromTo(
    "header",
    0.6,
    { y: "-20px", opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.15"
  )
  .fromTo(".links", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.2")
  .fromTo(".logo", 0.3, { opacity: 0 }, { opacity: 1 }, "-=0.3")
  .fromTo(
    ".bx",
    0.4,
    { opacity: 0, x: "-20px" },
    { opacity: 1, x: 0, stagger: 0.25 },
    "-=0.1"
  );