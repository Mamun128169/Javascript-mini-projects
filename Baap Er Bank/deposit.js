document.getElementById("deposit").addEventListener('click', function() {
    const depositField = document.getElementById("depositInput");
    const depositAmount = depositField.value;
    depositField.value = "";

    if (isNaN(depositAmount)) {
        alert("Please enter a valid number!");
        return;
    }

    const depositTotalElement = document.getElementById("depositTotal");
    const depositTotal = depositTotalElement.textContent;
    
    let newDepositTotal = parseFloat(depositTotal) + parseFloat(depositAmount);

    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById("balance");
    const balanceTotal = balanceTotalElement.innerText;
    console.log(balanceTotal);

    const newBalanceTotal = parseFloat(balanceTotal) + parseFloat(depositAmount);
    balanceTotalElement.innerText = newBalanceTotal;
})