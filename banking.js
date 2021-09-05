//function for getting input values
function getInputValue(inputId){
 const inputField=document.getElementById(inputId);
 const inputAmountText=inputField.value;
 const inputAmount=parseFloat(inputAmountText);
 //clear input
 inputField.value='';
 return inputAmount;
 }
 //function for getting the current value if balance
 function getCurrentBalance(){
 const oldBalance=document.getElementById('balance-total');
 const oldBalanceText=oldBalance.innerText;
 const oldBalanceAmount=parseFloat(oldBalanceText);
 return oldBalanceAmount;
 }
//function to update after deposit or withdraw
function updateTotalField(totalFieldId,amount){ 
 const totalElement=document.getElementById(totalFieldId);
 const totalText=totalElement.innerText;
 const previousTotal=parseFloat(totalText);
 totalElement.innerText=previousTotal+amount;
}
//function to update balance after deposit or withdraw
function updateBalance(amount,isAdd){
const oldBalance=document.getElementById('balance-total');
const oldBalanceAmount=getCurrentBalance();
 if(isAdd==true){
   oldBalance.innerText=oldBalanceAmount+ amount;
 }
 else{
   oldBalance.innerText=oldBalanceAmount- amount;
 }
}

document.getElementById('deposit-btn').addEventListener('click',function(){
 const depositAmount=getInputValue('deposit-input');//getting the value from input field
 if(depositAmount>0){
   updateTotalField('deposit-total', depositAmount);
   updateBalance(depositAmount,true);
 }
 
})

document.getElementById('withdraw-btn').addEventListener('click',function(){
 const withdrawAmount=getInputValue('withdraw-input');//getting the value from input field
 const currentBalance=getCurrentBalance();

  if(withdrawAmount>0&&withdrawAmount<currentBalance){
   updateTotalField('withdraw-total',withdrawAmount)
   updateBalance(withdrawAmount,false)
 }
 if(withdrawAmount>currentBalance){
   window.location.href='./error.html'
 }
 
})

