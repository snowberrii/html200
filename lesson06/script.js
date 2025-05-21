let balance = 1000;
let isRunning = true;

function updateBalanceDisplay() {
  document.querySelector(".balance-display").textContent = `$${balance.toFixed(
    2
  )}`;
}

function withdraw() {
  let amount = parseFloat(prompt(`Enter withdrawal amount: `));
  if (!isNaN(amount) && amount > 0) {
    if (amount <= balance) {
      let newBalance = balance - amount;

      if (newBalance < 300) {
        let confirmLowBalance = confirm(
          `⚠️Warning: This withdrawal will leave your balance below $300. Do you wish to proceed?`
        );

        if (!confirmLowBalance) {
          alert(`withdrawal canceled.`);
          return; // exit the function
        }
      }

      balance = newBalance;
      alert(
        `Withdraw $${amount.toFixed(2)} - New balance: $${balance.toFixed(2)}`
      );
      updateBalanceDisplay();
    } else {
      alert(`Insufficient funds.`);
    }
  } else {
    alert(`Invalid withdrawal amount. Please try again.`);
    withdraw();
  }
}

function deposit() {
  let amount = parseFloat(prompt(`Enter deposit amount: `));
  if (!isNaN(amount) && amount > 0) {
    if (amount <= 50000) {
      balance += amount;
      alert(
        `Deposit $${amount.toFixed(2)} - New Balance: $${balance.toFixed(2)}`
      );
      updateBalanceDisplay();
    } else {
      alert(`The maximum deposit allowed is $50,000.`);
      deposit();
    }
  } else {
    alert(`Invalid deposit amount. Please try again.`);
    deposit();
  }
}

function viewBalance() {
  alert(`Your current balace: $${balance.toFixed(2)}`);
}

while (isRunning) {
  let menuOptions = prompt(
    `Please choose one of the following options:\nW - Withdraw\nD - Deposit\nB - View Balance\nQ - Quit\n\nEnter your choice:`
  ).toUpperCase();

  switch (menuOptions) {
    case "W":
      withdraw();
      break;
    case "D":
      deposit();
      break;
    case "B":
      viewBalance();
      break;
    case "Q":
      isRunning = false;
      alert(`Thank you for using our banking app! Goodbye👋🏻`);
      break;
    default:
      alert(`❌ Invalid option. Please enter "W", "D", "B", or "Q".`);
  }
}

window.onload = function () {
  document.getElementById("withdraw").addEventListener("click", withdraw);
  document.getElementById("deposit").addEventListener("click", deposit);
  document.getElementById("balance").addEventListener("click", viewBalance);
  updateBalanceDisplay();
};
