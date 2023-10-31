$( function() {
    $( "#logoConsole" ).draggable();
} );

$( function() {
    $( "#commandLine" ).draggable();
} );

$( "#logoConsole" ).on( "dblclick", function() {
    $( "#commandLine" ).toggle( "slow" );
});

$( "#close" ).on( "click", function() {
    $( "#commandLine" ).toggle( "slow" );
});
