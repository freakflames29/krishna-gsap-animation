console.log("GSAP");
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

gsap.to("#headingOverlay", {
  x: 1000,
  // opacity:0,
  duration: 2,
  delay: 1,
});

let mainP = document.querySelector("#main-p");
mainP.addEventListener("mousemove", function (e) {
  gsap.to("#cursor img", {
    x: e.x,
    y: e.y,
  });
});
mainP.addEventListener("mouseleave", function (e) {
  gsap.to("#cursor img", {
    scale: 0,
  });
});
mainP.addEventListener("mouseenter", function (e) {
  gsap.to("#cursor img", {
    scale: 1,
  });
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    markers: true,
    start: "40% 50%",
    end: "100% 20%",
    pin: true,
    scrub: 2,
  },
});
tl.to(
  "#top",
  {
    top: "-50%",
  },
  "krishna"
)
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "krishna"
  )
  .to(
    "#top-h",
    {
      bottom: "-50%",
    },
    "krishna"
  )
  .to(
    "#bottom-h",
    {
      top: "-50%",
    },
    "krishna"
  )
  .from(
    "#center h2",
    {
      delay: 0.1,
      y: 200,
      stagger: 0.5,
      opacity: 0,
    },
    "krishna"
  );
