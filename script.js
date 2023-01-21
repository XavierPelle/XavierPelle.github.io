
var options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }
  
  const handleIntersect = function () {
   entries.forEach(function (entry) {
    console.log(entry.IntersectionRatio)
   })
}




  var observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(document.querySelector('.reveal'))