const writeCLI = () => {

    const command = document.getElementById('command');
    
    command.addEventListener("keypress", function(event) {

        if (event.key === "Enter") {

            const [inputP , inputTXT , test] = createMenu();

            let result = choice(command);

            showResult(inputP,inputTXT,test,result);

            command.value = "";
            command.focus()
        }
    })
}

const choice = (command) => {
    switch (command.value) {
        case "--help":
            return helpCommand()
        case "ls":
            return lsCommand()
        case "close":
            return closeCommand()
        case "cd ..":
            return cdCommand()
        case "pwd":
            return pwdCommand()
        case "Linkedin":
            return linkedinCommand()
        case "Github":
            return githubCommand()
        case "CV_Xavier_Pelle":
            return cvCommand()
        case "sudo cd ..":
            return sudocdCommand();
        case "sudo":
            return sudoCommand();
        case "Bio" :
            return bioCommand();
        case "Projets":
            return projetCommand();
        case "30'seconds":
            return secondsCommand();
        case "Cycle Et Recycle":
            return cycleEtRecycleCommand();
        case "Frog.io":
            return frogioCommand();
        case "XavierPelle.fr":
            return xavierPelleCommand();
      default:
            return notFoundCommand()
    }
}

writeCLI()