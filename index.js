import { accounts } from './accounts';

console.log(accounts)

const dropdown = document.querySelector('#dropdown');
const iban = document.querySelector('#iban');
const sendMoney = document.querySelector('#sendMoney');
const sendBtn = document.querySelector('#sendBtn');
const timer = document.querySelector('#timer');
const passwordBox = document.querySelector('#password');
const passwordAlert= document.querySelector('#pass-alert');
// let currentUserBalance;

document.addEventListener('DOMContentLoaded', () => {
  accounts.map(account => dropdown.innerHTML += `
    <li><a id="${account.id}" class="dropdown-item" href="#">${account.name} - ${account.balance} $</a></li>
  `);
});

let userBalance = document.querySelector('#balance');


dropdown.addEventListener('click', (e) => {
  userBalance.innerHTML = `
  Account Name: ${accounts[e.target.id].name} - Balance: ${accounts[e.target.id].balance}$
  `;
  // let currentUserBalance = accounts[e.target.id].balance;
});
  

// Timer Fonksiyonu
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer === 0) {
          alert("2 dakikalık işlem süresi sona erdi, sayfa yeniden yüklenecek!")
          location.reload();
      }
  }, 1000);
}

window.onload = function () {
  var twoMinutes = 60 * 2,
      display = timer;
  startTimer(twoMinutes, display);
};


 sendBtn.disabled = true;
 sendMoney.disabled = true;

 // Check IBAN Input Function
function checkIbanValue() {
  if (iban.value.length < 26) {
    alert("IBAN numarası eksik görünüyor, lütfen kontrol ediniz.")
    sendMoney.disabled = true;
  } else {
    sendMoney.disabled = false;
  }
}

// Check IBAN Input Eventi
iban.addEventListener('change', checkIbanValue);
sendMoney.addEventListener('change', checkIbanValue); // Iban yazıldıktan sonra yeniden silinme ihtimaline karşı bir daha kontrol ediyoruz.

// // Yeterli Para Kontrolü Fonksiyonu - Eventi // Henüz Çalışmıyor
// function checkRequiredMoney(e) {
//   if(sendMoney > currentUserBalance) {
//     alert("Bakiyeniz bu işlem için yetersiz!");
//   }
// };
// sendMoney.addEventListener('change', checkRequiredMoney);

// Check Password > 500 Function
function checkMoney() {
  if(sendMoney.value >= 500) {
    function passBtn(buttonText) {
      return (
        `<button id="passBtn" class="btn btn-dark mt-3">${buttonText}</button>`
      );
    }
    passwordBox.innerHTML = `
    <div class="card text-dark bg-warning mb-3" style="max-width: 18rem;">
      <div class="card-header">Telefon Onayı</div>
      <div class="card-body">
        <h5 class="card-title">Telefonuna gelen şifreyi gir:</h5>
        <input id="passwordCheck" class="card-text" type="number">
        ${passBtn("Onayla")}
      </div>
    </div>
    `;
  } else {
    sendBtn.disabled = false;
    // alert("Para transfer işleminiz başarılı!");
  }
};

sendMoney.addEventListener('blur', checkMoney);


// const passwordValue = document.querySelector('#passwordCheck');
// const passBtn = document.querySelector('.passBtn');

// document.addEventListener('click', approvePassword);
document.addEventListener('change', checkPasswordValue);

function checkPasswordValue(e) {
  if(e.target.id === "passwordCheck") {
    if(e.target.value == 1234) {

      const passwordInfo = document.createElement("div");
      passwordInfo.textContent = "-Şifre Doğru-";
      passwordInfo.className = "p-2 bg-success text-light"
      passwordAlert.appendChild(passwordInfo);

      sendBtn.disabled = false;
      e.target.value == "";
    } else {
      alert("Şifre yanlış, lütfen tekrar giriniz!");
      e.target.value == "";
    }
  }
}; 

// function approvePassword(e) {
//   if(e.target.id ==  "passBtn") {
//     sendMoney.value ="";
//     alert("Para transfer işleminiz başarılı!")
//   }
// };
// const passwordValue = document.querySelector('#passwordCheck');
// // const password = prompt("Lütfen telefonunuza gelen 4 haneli şifreyi giriniz.", "Şifre");
// if (passwordValue === "1234") {
//   sendBtn.disabled = false;
// }