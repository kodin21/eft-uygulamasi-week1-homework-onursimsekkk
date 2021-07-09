import { accounts } from './accounts';

console.log(accounts)

const dropdown = document.querySelector('#dropdown');
const iban = document.querySelector('#iban');
const sendMoney = document.querySelector('#sendMoney');
const sendBtn = document.querySelector('#sendBtn');
const timer = document.querySelector('#timer');

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
function  checkValue() {
  if (iban.value.length < 26) {
    alert("IBAN numarası eksik görünüyor, lütfen kontrol ediniz.")
    sendMoney.disabled = true;
  } else {
    sendMoney.disabled = false;
  }
}

// Check IBAN Input Eventi
iban.addEventListener('change', checkValue);
sendMoney.addEventListener('change', checkValue); // Iban yazıldıktan sonra yeniden silinme ihtimaline karşı bir daha kontrol ediyoruz.

// Gönder Fonksiyonu
// sendBtn.addEventListener('click', () => {
  
// });