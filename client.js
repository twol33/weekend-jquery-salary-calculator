$(document).ready(readyNow)
    console.log('JS ready');
    
const totalCost = 20000;

function readyNow() {
    $( '#submit-Button' ).on( 'click', addToTable )
        console.log('submit clicker working');

    $( '#input-Info' ).on( 'click', '.remove-Button', deleteFromTable )
        console.log('remove clicker working');

    let 
        
}

function addToTable(){
    console.log('added to table');
    let empFirstName = $('#employee-FirstName').val();
    let empLastName = $('#employee-LastName').val();
    let emopID = $('#employee-Id').val();
    let empTitle = $('#employee-Title').val();
    let empSalary = $('#employee-Salary').val();
    let rowClass = ' ';

    $('#input-Info').append(`
        <tr class="${rowClass}">
            <td>${empFirstName}</td>
            <td>${empLastName}</td>
            <td>${emopID}</td>
            <td>${empTitle}</td>
            <td>${empSalary}</td>
            <td><button class="remove-Button">Remove</button></td>
        </tr>
    `);
    $( '#employee-FirstName' ).val( '' );
    $('#employee-LastName').val( '' );
    $('#employee-Id').val( '' );
    $('#employee-Title').val( '' );
    $('#employee-Salary').val( '' );
}
// function addButtonToDOM() {
//     $( '#remove-Button' ).on( 'click', deleteFromTable )
//         console.log('remove clicker working');
// }

function deleteFromTable() {
    let inputInfo = $(this).parent().parent()
    inputInfo.remove()
}