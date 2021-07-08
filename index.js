import { accounts } from './accounts';

console.log(accounts)

const dropdown = document.querySelector('#dropdown');

document.addEventListener('DOMContentLoaded', () => {
  accounts.map(account => dropdown.innerHTML += `
    <li><a id="${account.id}" class="dropdown-item" href="#">${account.name} - ${account.balance} $</a></li>
  `);
});

let userBalance = document.querySelector('#balance');

dropdown.addEventListener('click', (e) => {
  userBalance.innerHTML = `Account Name: ${accounts[e.target.id].name} - Balance: ${accounts[e.target.id].balance}$`;

});