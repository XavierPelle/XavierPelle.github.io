const footer = document.querySelector("footer");
let scrollAgain = 1;
footer.onscroll = () => console.log("scrolled");
const cpr = document.querySelector("footer>p");
setInterval(()=>console.log(cpr.getBoundingClientRect().top - window.innerHeight > -100), 500);
setInterval(()=>console.log(cpr.getBoundingClientRect().top - window.innerHeight), 500);


setTimeout(()=>{
    setInterval(()=> {
        if(cpr.getBoundingClientRect().top - window.innerHeight < -40)
            footer.classList.add("occupy-screen")
            if(scrollAgain)
            {
                scrollAgain = false;
                // setTimeout(()=>window.scrollTo({top: document.body.scrollHeight, behavior: "smooth"}), 10);
            }
    }, 300);
    
    
    setInterval(()=> {
        if(cpr.getBoundingClientRect().top - window.innerHeight > 340)
        {
            footer.classList.remove("occupy-screen")
            // scrollAgain = true;
        }
    }, 300);

}, 800);
