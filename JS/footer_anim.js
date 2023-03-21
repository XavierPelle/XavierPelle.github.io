const footer = document.querySelector("footer");
let scrollAgain = 1;
const tEl = document.querySelector("footer>section>h3");

let ci = null;

const a = ()=> {
    console.log(tEl.getBoundingClientRect().top - window.innerHeight);
    if(tEl.getBoundingClientRect().top - window.innerHeight < 0)
    {
        footer.classList.add("occupy-screen");
        if (ci !== null)
            clearInterval(ci);
        ci = setInterval(c, 100);
        // setTimeout(window.scrollTo(0, document.body.scrollHeight), 200);
        setTimeout(window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" }), 200);
    }
};


const c = () => {
    if(tEl.getBoundingClientRect().top - window.innerHeight > 100)
    {
        if (ci !== null)
            clearInterval(ci);
        ci = setInterval(a, 100);
        footer.classList.remove("occupy-screen");
    }
};

setTimeout(()=>{
    ci = setInterval(a, 100);
}, 800);
