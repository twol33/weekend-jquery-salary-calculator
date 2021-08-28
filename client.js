$(document).ready(readyNow)
    console.log('JS ready');
    
const totalCost = 0;
let amountTotal = [];

function readyNow() {
    $( '#submit-Button' ).on( 'click', addToTable )
        console.log('submit clicker working');
    
    $( '#input-Info' ).on( 'click', '.remove-Button', deleteFromTable )
        console.log('remove clicker working')

    calculateTotal()
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
    calculateTotal()
    $( '#employee-FirstName' ).val( '' );
    $('#employee-LastName').val( '' );
    $('#employee-Id').val( '' );
    $('#employee-Title').val( '' );
    $('#employee-Salary').val( '' );
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
    display.append( costTotal )

    console.log( 'this is the total cost:', costTotal );
}
