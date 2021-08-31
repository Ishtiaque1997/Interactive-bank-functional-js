document.getElementById('deposit-btn').addEventListener('click',function(){
 const depositInput=document.getElementById('deposit-input');
 const depositAmount=depositInput.value;
 //get current deposit
 const depositTotal=document.getElementById('deposit-total');
 const depositTotalText=depositTotal.innerText;
 depositTotal.innerText=depositAmount;
 console.log(depositTotalText)
 //clear input
 depositInput.value='';
})