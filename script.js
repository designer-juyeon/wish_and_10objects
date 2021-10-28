console.clear();
gsap.registerPlugin(ScrollTrigger);


gsap.to(".massiveImage", {
  xPercent: -100, 
  x: () => innerWidth,
  ease: "none",
  scrollTrigger: {
    trigger: "#trigger1",
    start: "top top",
    end: () => innerWidth * 2,
    scrub: true,
    pin: true,
    invalidateOnRefresh: true,
    anticipatePin: 1
  }
});