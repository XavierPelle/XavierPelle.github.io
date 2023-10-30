const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

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

const cutString = ()  =>{

    while(command.value.charAt(0) === ' ')
    {
        command.value = command.value.substring(1);
        break
    }
}

const showResult = (inputP,inputTXT,test,result) => {

    inputP.appendChild(inputTXT);
    inputP.appendChild(result);
    inputP.appendChild(test);
    cli.appendChild(inputP);

}

const createMenu = () =>{
    const inputP = document.createElement("p");
    inputTXT = document.createElement("p");
    inputTXT.innerHTML ="<span class='text-blue-600'>┌──(Xavier㉿Pelle)-[~]</span>&nbsp;&nbsp;" + command.value
    const test = document.getElementById('test');
    return [inputP , inputTXT , test]


}

const choice = (command) => {
    switch (command.value) {
        case "--help":
            return helpCommand()
        case "ls":
            return lsCommand()
        case "clear":
            return clearCommand()
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
            return sudoCommand();
      default:
            return notFoundCommand()
    }
}

const helpCommand = () => {
    const helpCommand = document.createElement("p");
    helpCommand.innerHTML = "Voici la liste des commandes :<br />";
    helpCommand.innerHTML += "&nbsp;ls &nbsp; &nbsp; &nbsp; clear &nbsp; &nbsp; &nbsp; pwd"
    return helpCommand
}

const lsCommand = () => {
    const list = document.createElement("p");
    list.innerHTML = " CV_Xavier_Pelle &nbsp; &nbsp; &nbsp; Bio &nbsp; &nbsp; &nbsp; Github &nbsp; &nbsp; &nbsp; Linkedin"
    return list
}

const clearCommand = () => {
    location.reload(true);
}

const notFoundCommand = () => {
    const notFoundCommand = document.createElement("p");
    notFoundCommand.innerHTML = "La commande n'existe pas. Tappez <span class='text-blue-600'>--help</span> pour voir la liste des commandes";
    return notFoundCommand
}

const cdCommand = () => {
    const cd = document.createElement("p");
    cd.innerHTML = 'Fatal error:&nbsp; &nbsp;'
    cd.innerHTML += "Vous n'avez pas les droits pour cette commande"
    cd.style.color = "red"
    return cd
}

const pwdCommand = () => {
    const pwd = document.createElement("p");
    pwd.innerHTML = "<span class='text-blue-600'>/home/xavier</span>"
    return pwd
}

const linkedinCommand = () => {
    const linkedin = document.createElement("p");
    sleep(2000).then(() => {
        window.open("https://www.linkedin.com/in/xavier-pelle-2a21b915b/")
    });
    linkedin.innerHTML = "<span class='text-blue-600'>Redirection vers Linkedin...</span>"
    return linkedin
}
const githubCommand = () => {
    const git = document.createElement("p");
    sleep(2000).then(() => {
        window.open("https://github.com/XavierPelle")
    });
    git.innerHTML = "<span class='text-blue-600'>Redirection vers Github...</span>"
    return git
}
const cvCommand = () => {
    window.open("./src/CV_Xavier_Pelle.pdf")
    const dlCV = document.createElement("a");
    dlCV.innerHTML ='<a class="text-blue-600" href="./src/CV_Xavier_Pelle.pdf" download>Download</a>'
    return dlCV
}
const sudoCommand = () =>{
    const egg = document.createElement('p');
    egg.innerHTML = "Insert easter egg"
    return egg 
}
writeCLI()