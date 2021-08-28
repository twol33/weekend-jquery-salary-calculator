$(document).ready(readyNow)
    console.log('JS ready');
    

function readyNow() {
    $( '#submit-Button' ).on( 'click', addToTable )
        console.log('submit clicker working');
    

    $( '#remove-Button' ).on( 'click', deleteFromTable )
        console.log('remove clicker working');
        
}

function addToTable(){
    console.log('added to table');
    
}

function deleteFromTable(params) {
    console.log('removed from table');
    
}