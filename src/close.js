
const btnClose = document.getElementById('close');
const logoConsole = document.getElementById('logoConsole');
const commandline = document.getElementById('commandLine');

const isOpen = true;

btnClose.addEventListener('click', () => {

        commandline.style.display = "none"
        logoConsole.style.display = "block"
        
})

logoConsole.addEventListener('dblclick', () => {
        logoConsole.style.display = "none"
        commandline.style.display = "block"
})

$( function() {
    $( "#logoConsole" ).draggable();
} );

$( function() {
    $( "#commandLine" ).draggable();
} );