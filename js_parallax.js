const handlers = [...document.querySelectorAll("main>*")]//targeting all the direct childs of main
.map((el, i) => (() => (el.style.transform = "translateY(" + window.scrollY * -0.1 * i + "px)")));//create handler with a fixed offset coeff

onscroll = () => handlers.forEach(h=>h());//setting onscroll event listener to an arrow function calling all precomputed handlers to refresh scrolling when needed.