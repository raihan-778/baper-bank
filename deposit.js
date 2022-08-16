// code for calculation

const depositStatus = document.getElementById("deposit-status");
const withdrawStatus = document.getElementById("withdrawn-status");
const balanceStatus = document.getElementById("balance-status");
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdrawn-input");
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdrawn-btn");

//deposit calculation
depositBtn.addEventListener("click", function () {
  prevDepositTotal = parseFloat(depositStatus.innerText);
  newDepositValue = parseFloat(depositInput.value);
  const currentDepostiTotal = prevDepositTotal + newDepositValue;
  depositStatus.innerText = currentDepostiTotal;
  const prevBalance = parseFloat(balanceStatus.innerText);

  const currentBalanceTotal = prevBalance + currentDepostiTotal;
  balanceStatus.innerText = currentBalanceTotal;
  // step 7
  depositInput.value = "";
});

// withdrawn calculation

withdrawBtn.addEventListener("click", function () {
  const withdrawnAmountString = withdrawInput.value;
  const withdrawnAmount = parseFloat(withdrawnAmountString);

  const prevWithdrawnTotal = parseFloat(withdrawStatus.innerText);
  const newWithdrawnTotal = prevWithdrawnTotal + withdrawnAmount;
  withdrawStatus.innerText = newWithdrawnTotal;
  withdrawInput.value = "";

  // balance calculation
  const prevBalance = parseFloat(balanceStatus.innerText);
  if (withdrawnAmount > prevBalance) {
    alert("baper bank a ato taka nai");
  }

  const newBalanceTotal = prevBalance - withdrawnAmount;
  balanceStatus.innerText = newBalanceTotal;
});
