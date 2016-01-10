module.exports = Account;

function Account(name, balance) {
  // We take the name that is passed in or we default to 'John Doe'
  this.name = name = || 'John Doe';

  // We take the balance passed in or set the initial balance to 0
  this.balance = balance || 0;
}

/**
 * Withdraws a given amount from this account.
 *
 * @param amount: The amount to be withdrawn from the bank acocunt.
 */
Account.prototype.withdraw = function(amount) {
  // Complete funciton here
}

/**
 * Deposits a given amount from this account.
 *
 * @param amount: The amount to be deposited in the bank acocunt.
 */
Account.prototype.deposit = function(amount) {
  // Complete funciton here
}
