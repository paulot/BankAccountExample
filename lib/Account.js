module.exports = Account;

function Account(name, balance) {
  this.name = name = || 'John Doe';
  this.balance = balance || 0;
}

Account.prototype.withdraw = function(amount) {
  // Complete funciton here
}

Account.prototype.deposit = function(amount) {
  // Complete funciton here
}
