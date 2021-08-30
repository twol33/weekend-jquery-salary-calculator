$(document).ready(readyNow)
    console.log('JS ready');
    
let amountTotal = [];

function readyNow() {
    $( '#submit-Button' ).on( 'click', addToTable )
        console.log('submit clicker working');
    
    $( '#input-Info' ).on( 'click', '.remove-Button', deleteFromTable )
        console.log('remove clicker working')

}

function addToTable(){
    console.log('added to table');
    let empFirstName = $('#employee-FirstName').val();
    let empLastName = $('#employee-LastName').val();
    let empID = $('#employee-Id').val();
    let empTitle = $('#employee-Title').val();
    let empSalary = $('#employee-Salary').val();
    let rowClass = ' ';
    
    let tableInputs = {
        firstName: empFirstName,
        lastName: empLastName,
        id: empID,
        title: empTitle,
        salary: empSalary
    }

    // if( empSalary > 20000 ){
    //     rowClass = 'red';
    // }

    amountTotal.push(tableInputs);

    $('#input-Info').append(`
        <tr class="${rowClass}">
            <td>${empFirstName}</td>
            <td>${empLastName}</td>
            <td>${empID}</td>
            <td>${empTitle}</td>
            <td id="salary-Amount">${empSalary}</td>
            <td><button class="remove-Button">Remove</button></td>
        </tr>
    `);

    $('#employee-FirstName').val( '' );
    $('#employee-LastName').val( '' );
    $('#employee-Id').val( '' );
    $('#employee-Title').val( '' );
    $('#employee-Salary').val( '' );

    calculateTotal()
}


function deleteFromTable() {
    let inputInfo = $(this).parent().parent()
    inputInfo.remove() 
}

function calculateTotal() {
    let costTotal = 0
    for( let i=0; i<amountTotal.length; i++){
        costTotal += parseInt(amountTotal[i].salary); 
    }
    
    let display = $( '#cost-Total' );
    display.empty();
    display.append( costTotal );

    if( costTotal > 20000){
       return $('#color-Red').css( 'background-color', 'red' );
    }
    console.log( 'this is the total cost:', costTotal );
}