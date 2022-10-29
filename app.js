let moneyBox = 22000; //ATM MACHINE MONEY BOX
let cardDailyLimit = 20000;
let accountBalance = 50000;

document.querySelector(".monyBox").textContent = moneyBox;
document.querySelector(".dailyLimit").textContent = cardDailyLimit;
document.querySelector(".aBalance").textContent = accountBalance;

function checkPin() {
  let userInputPin = document.querySelector("#userInputPin").value;

  if (userInputPin.length > 4) {
    document.querySelector(".errorMessage").innerHTML =
      "<p>You Must Enter 4 Digit Pin Number</p>";
    return;
  }

  if (userInputPin.length < 4) {
    document.querySelector(".errorMessage").innerHTML =
      "<p>You Must Enter 4 Digit Pin Number</p>";
    return;
  }

  if (userInputPin === "5112") {
    document.querySelector(".errorMessage").innerHTML =
      "<p>Correct Pin Number 🙂</p>";

    document.querySelector(".withdraw").innerHTML = `
    <div class="withdraw_heading">
    <h3>Withdraw</h3>
    </div>

    <form onsubmit="withdraw(); return false">
    <label for="">Enter your amount to withdraw:</label>
    <input type="number" id="userInputAmount"/>

    <div class="note">
    <h4>
      <span style="color: red">Note:</span> Please Enter Amount Such
      like That: 500, 1000, 1500, 2000 etc
    </h4>
    </div>

    <button>withdraw</button>
    </form>`;
    return;
  }

  if (userInputPin !== "5112") {
    document.querySelector(".errorMessage").innerHTML =
      "<p>inCorrect Pin Number 😌</p>";
    return;
  }
}

function withdraw() {
  let amount = +document.querySelector("#userInputAmount").value;

  if (amount < 500) {
    document.querySelector(".errorMessage1").innerHTML =
      "<p>Please Enter Amount Greater Than 500</p>";
    document.querySelector(".withdraw_successfully_part").innerHTML = "";
  } else if (amount % 500) {
    document.querySelector(".errorMessage1").innerHTML =
      "<p>Please Enter Amount Such like That: 500, 1000, 1500, 2000 etc.</p>";
    document.querySelector(".withdraw_successfully_part").innerHTML = "";
  } else if (accountBalance < amount) {
    document.querySelector(".errorMessage1").innerHTML =
      "<p>Account Balance limit is over</p>";
    document.querySelector(".withdraw_successfully_part").innerHTML = "";
  } else if (moneyBox < amount) {
    document.querySelector(".errorMessage1").innerHTML =
      "<p>MoneyBox Limit is over</p>";
    document.querySelector(".withdraw_successfully_part").innerHTML = "";
  } else if (cardDailyLimit < amount) {
    document.querySelector(".errorMessage1").innerHTML =
      "<p>cardDailyLimit Limit is over</p>";
    document.querySelector(".withdraw_successfully_part").innerHTML = "";
  } else {
    document.querySelector(".errorMessage1").innerHTML = "";

    moneyBox = moneyBox - amount;
    cardDailyLimit = cardDailyLimit - amount;
    accountBalance = accountBalance - amount;

    let with12 = document.querySelector(".withdraw_successfully_part");
    with12.innerHTML = `
    <div class="heading">
    <h1>Withdraw successfully</h1>
    </div>

    <ul>
      <li>
        <p>Remain Money Box Amount is:</p>
        <h1>${moneyBox}</h1>
      </li>
      <li>
        <p>Remain Card Daily Limit is:</p>
        <h1>${cardDailyLimit}</h1>
      </li>
      <li>
        <p>Remain Account Balance is:</p>
        <h1>${accountBalance}</h1>
      </li>
    </ul>`;
  }
}
