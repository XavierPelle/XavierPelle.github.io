fetch(`https://api.themoviedb.org/3/movie/785084/videos?api_key=3dbc8293b8ac6f93e868bf52d8fe4a97`)

    .then(response => response.json())
    .then(data => {
        const videos = data.results;
        if(videos){
            const videoUrl = `https://www.youtube.com/embed/${videos[0].key}?autoplay=1`;
            const videoElem = document.createElement("iframe");
            videoElem.src = videoUrl;
            videoElem.controls = true;
            document.getElementById("container").appendChild(videoElem);
        }
        else
        console.log("rip");
    })
    .catch(error => console.error(error));



