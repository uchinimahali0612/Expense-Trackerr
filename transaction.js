var incomeVal=document.getElementById('incometracker');
var expenseVal=document.getElementById('trackerexpense');
var balanceVal=document.getElementById('balance');
var inputAmt= document.getElementById('amount-sign');
var his_box = document.getElementById('historyBox');
var nameTracker= document.getElementById('text-details');

// var inputAmt= document.getElementById('amount-sign').innerText;



function addTransaction()
{
    if(inputAmt.value > 0)
     {
        var income=parseInt(document.getElementById('incometracker').innerText);
        income +=parseInt(document.getElementById('amount-sign').value);
        incomeVal.innerText=income;

        var balanceAmt=parseInt(document.getElementById('balance').innerText);
        balanceAmt +=parseInt(document.getElementById('amount-sign').value);
        balanceVal.innerText = balanceAmt;
        
    
    }
    else
    {
        var expense=parseInt(document.getElementById('trackerexpense').innerText);
        expense = Math.abs(parseInt(document.getElementById('amount-sign').value ));
        expenseVal.innerText= expense;

        var balanceAmt=parseInt(document.getElementById('balance').innerText);
        balanceAmt -=Math.abs( parseInt(document.getElementById('amount-sign').value));
        balanceVal.innerText = balanceAmt;

      

    }
}

function showHistory()
{
    var equation = nameTracker.value;
    var incomeRecieved = inputAmt.value;
    his_box.innerText += `${equation}- ${incomeRecieved}`;
                                
console.log(nameTracker,inputAmt);

}


function deleteHistory()
{
    var choice = confirm("Are you sure you want to delete history ?");
    if(choice)
        document.getElementById('historyBox').innerHTML = "";
}
