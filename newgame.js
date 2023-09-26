// Get the ball elements
const ball1 = document.getElementById("ball1");
const ball2 = document.getElementById("ball2");
const ball3 = document.getElementById("ball3");
const ball4 = document.getElementById("ball4");

// Animate the balls
animate(ball1, "40%", "50%", "translateX(-50%)");
animate(ball2, "50%", 0, "translateY(-50%)");
animate(ball3, "60%", 0, "translateZ(-50%)");
animate(ball4, "50%", "50%", "translate(-50%, 0)");

function animate(element, top, left, transform) {
  element.animate(
    [
      { top: top, left: left, transform: transform },
      { top: "0", left: "50%", transform: "translate(-50%, 0)" },
    ],
    {
      duration: 2000,
      iterations: Infinity,
      direction: "alternate",
      easing: "cubic-bezier(0.8, 0.15, 0.2, 0.85)",
    }
  );
}
