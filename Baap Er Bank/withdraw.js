document.getElementById("withdraw").addEventListener("click", function() {
    const withdrawField = document.getElementById("withdrawInput");
    const withdrawAmount = withdrawField.value;
    withdrawField.value = "";

    if (isNaN(withdrawAmount)) {
        alert("Please enter a valid number.");
        return;
    }

    const withdrawTotalElement = document.getElementById("withdrawTotal");
    let withdrawTotal = withdrawTotalElement.innerText;

    const balanceTotalElement = document.getElementById("balance");
    let balanceTotal = balanceTotalElement.innerText;
    
    if (withdrawAmount > balanceTotal) {
        alert("Tmr baper ato taka nai!!!");
        return;
    }
    
    let newWithdrawTotal = parseFloat(withdrawTotal) + parseFloat(withdrawAmount);
    withdrawTotalElement.innerText = newWithdrawTotal;

    let newBalanceTotal = parseFloat(balanceTotal) - parseFloat(withdrawAmount);

    balanceTotalElement.innerText = newBalanceTotal;
})