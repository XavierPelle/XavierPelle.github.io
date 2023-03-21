const chaser = document.querySelector("body>img");//avoir performance losses

document.querySelectorAll("main>section>img").forEach(el => {
    el.onmousemove = event => {
        chaser.style.left = `${event.screenX}px`;
        chaser.style.top = `${event.screenY - 100}px`;//compensating mouse offset
        chaser.style.display = "inline-block";//ensuring properties can be applied
    }
    el.onmouseleave = _event => {
        chaser.style.display = "none";//hiding mouse when finished.
    }
});
