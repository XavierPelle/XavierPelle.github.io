/* Select all elements with "style" class */
let containers = document.querySelectorAll(".style");
let intervals = [];

/* Function to automatically scroll the content */
function autoScroll(containerIndex) {
  let container = containers[containerIndex];
  
  container.scrollLeft += 1;

/* Check if the scroll has reached the end */
  if (container.scrollLeft >= (container.scrollWidth - container.offsetWidth)) {
    container.scrollLeft = 0; /* Reset scroll position */
  }
}

/* Start auto scrolling for each item */
containers.forEach((container, index) => {
  intervals[index] = setInterval(() => autoScroll(index), 20); /* Save the interval for each element*/
  
/* Pause scroll on mouseover */
  container.addEventListener("mouseenter", function() {
    clearInterval(intervals[index]);/*Delete interval for this element*/
  });

/* Resume auto-scroll when mouse leaves container */
  container.addEventListener("mouseleave", function() {
    intervals[index] = setInterval(() => autoScroll(index), 20); /* Record a new interval for this element */
  });
});
