const tipcalculator = () => {
let amount = document.getElementById('billamt').value;
let percnt = document.getElementById('serviceQual').value;
let persons = document.getElementById('peopleamt').value;
let tipamount = amount * (percnt);
alert(tipamount);
let totalbill = tipamount + Number(amount);
alert(totalbill);
document.getElementById('tipamt').value = tipamount;
document.getElementById('totalbillamt').value = totalbill;
let tip=(tipamount)/persons;
tip=tip.toFixed(2);
document.getElementById("total").innerHTML=tip;
}



