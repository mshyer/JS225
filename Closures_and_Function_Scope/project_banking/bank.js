function nextID(ids) {
  let next = ids.length === 0 ? 101 : Math.max(ids) + 1;
  ids.push(next);
  return next;
}

function makeBank() {
  let accounts = [];
  return {
    IDs: [],
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

function makeAccount(number) {
  let transactions = [];
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      transactions.push({type: 'deposit', amount});
      return amount;
    },

    balance() {
      return balance;
    },

    number() {
      return number;
    },

    transactions() {
      console.log(transactions);
    },

    withdraw(amount) {
      let maxWithdrawal = balance;
      if (amount > maxWithdrawal) {
        return this.withdraw(maxWithdrawal);
      }
      balance -= amount;
      transactions.push({type: 'withdrawal', amount});
      return amount;
    },
  };
}
let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]
