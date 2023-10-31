const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
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

const helpCommand = () => {
    const helpCommand = document.createElement("p");
    helpCommand.innerHTML = "Voici la liste des commandes :<br />";
    helpCommand.innerHTML += "&nbsp;ls &nbsp; &nbsp; &nbsp; close &nbsp; &nbsp; &nbsp; pwd &nbsp; &nbsp; &nbsp; sudo"
    return helpCommand
}

const lsCommand = () => {
    const list = document.createElement("p");
    list.innerHTML = " CV_Xavier_Pelle &nbsp; &nbsp; &nbsp; Bio &nbsp; &nbsp; &nbsp; Github &nbsp; &nbsp; &nbsp; Linkedin &nbsp; &nbsp; &nbsp; Projets"
    return list
}

const closeCommand = () => {
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

const bioCommand = () => {
    const bio = document.createElement("p");
    bio.innerHTML = "Pas encore disponible";
    return bio;
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
    sleep(2000).then(() => {
        window.open("./src/CV_Xavier_Pelle.pdf")
        dlCV.innerHTML +='<a style="color: yellow" href="./src/CV_Xavier_Pelle.pdf" download>Cliquer ici pour télécharger</a>'
    });
    const dlCV = document.createElement("a");
    dlCV.innerHTML ='<span class="text-blue-600">Redirection vers mon CV...</span> <br />'
    return dlCV
}
const sudocdCommand = () =>{
    const egg = document.createElement('p');
    egg.innerHTML = "Insert easter egg"
    return egg 
}
const sudoCommand = () =>{
    const sudo = document.createElement('p');
    sudo.innerHTML = "Permet de se donner les droits sur une commande.&nbsp;&nbsp;&nbsp;&nbsp; sudo [commande]"
    return sudo 
}
const projetCommand = () =>{
    const projet = document.createElement('p');
    projet.innerHTML = "Voici la liste des projets sur lesquels j'ai travaillé <br />"
    projet.innerHTML += "Vous pouvez avoir le détail des technos utilisé en utilisant le nom du projet.<br />"
    projet.innerHTML += "<span class='text-blue-600'>30'seconds &nbsp;&nbsp; Cycle et Recycle &nbsp;&nbsp; Frog.io &nbsp;&nbsp; XavierPelle.fr</span>"
    return projet
}
const secondsCommand = ()=> {
    const seconds = document.createElement('p');
    seconds.innerHTML = "<span class='text-blue-600'>30'seconds</span> est le projet final de mon bootcamp chez The Hacking Project que j'ai réalisé avec mes collègues Dylan et Killian. <br />"
    seconds.innerHTML +="Le site permettait de jouer de la musique via son clavier avec différents instruments allant du piano à la batterie tout en ayant  des sons atypiques comme de la neige qui tombe ou encore des chats qui ronronne. On pouvait s'enregistrer pendant qu'on jouait de la musique sur des petites pistes de 30 secondes puis on pouvait les partager comme sur un réseau social. Il y avait un système de profil ou on pouvait customiser sa photo, sa bio, et retrouver tous nos morceaux. Il était possible d'écrire des commentaires sous les morceaux partagés et un système d'upvote avec un classement par semaine.<br /><br />"
    seconds.innerHTML +="Pour ce projet nous avons utilisé les technos suivante: <br />"
    seconds.innerHTML +="<span class='text-blue-600'>HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; Tailwinds &nbsp;&nbsp; Javascript &nbsp;&nbsp; Ruby on Rails &nbsp;&nbsp; PostgrèSQL</span><br /><br />"
    seconds.innerHTML +="Vous pouvez retrouvez le code de mon site sur mon <a style='color: yellow' href='https://github.com/XavierPelle/30-Seconds' target='_blank'>Github</a> <br />"
    return seconds
}
const cycleEtRecycleCommand = ()=> {
    const cer = document.createElement('p');
    cer.innerHTML = "<span class='text-blue-600'>Cycle et Recycle</span> est un projet de première page de site vitrine que j'ai réalisé. Voici la maquette <a style='color: yellow' href='https://www.figma.com/file/ojDginho1qPEyYC0QKWF1v/Untitled?type=design&node-id=0-1&mode=design&t=Khn4WUlsR19siXd7-0' target='_blank'>Figma</a> du projet.  <br />" 
    cer.innerHTML += "Pour ce projet j'ai utilisé les technos suivante: <br />"
    cer.innerHTML +="<span class='text-blue-600'>HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; Javascript </span><br /><br />"
    cer.innerHTML +="Vous pouvez retrouvez le code de mon site sur mon <a style='color: yellow' href='https://github.com/XavierPelle/CycleAndRecycle' target='_blank'>Github</a> <br />"
    return cer
}
const frogioCommand =()=> {
    const frog = document.createElement('p');
    frog.innerHTML = "<span class='text-blue-600'>Frog.io</span> est un projet servant à classer les grenouilles par famille, race ou encore type. Il était possible de créer des familles et des collections de grenouilles et de pouvoir les trier en fonction de beaucoup de paramètres.<br /><br />"
    frog.innerHTML += "Pour ce projet j'ai utilisé les technos suivante: <br />"
    frog.innerHTML +="<span class='text-blue-600'>HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; Javascript &nbsp;&nbsp; PHP &nbsp;&nbsp; PHPmyAdmin &nbsp;&nbsp; MySQL </span><br /><br />"
    frog.innerHTML +="Vous pouvez retrouvez le code de mon site sur mon <a style='color: yellow' href='https://github.com/XavierPelle/Frog.io' target='_blank'>Github</a> <br />"
    return frog
}
const xavierPelleCommand = () =>{
    const xp = document.createElement('p');
    xp.innerHTML = "<span class='text-blue-600'>XavierPelle.fr</span> est mon site portfolio, vous pourrez y retrouver des informations sur moi et voir les projets auquel j'ai participé <span style='font-size: 7px'>ainsi qu'un petit easter egg</span><br /><br /> "
    xp.innerHTML += "Pour ce projet j'ai utilisé les technos suivante: <br />"
    xp.innerHTML +="<span class='text-blue-600'>HTML &nbsp;&nbsp; CSS &nbsp;&nbsp; Tailwinds &nbsp;&nbsp Javascript;</span><br /><br />"
    xp.innerHTML +="Vous pouvez retrouvez le code de mon site sur mon <a style='color: yellow' href='https://github.com/XavierPelle/XavierPelle.github.io' target='_blank'>Github</a> <br />"
    return xp
}
