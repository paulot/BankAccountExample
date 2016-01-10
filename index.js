// This is the entrypoint for our product
var Account = require('./lib/Account');
var repl = require('repl')

var johnAccount = new Account();

console.log('John\'s balance is:');
console.log(johnAccount.balance);


repl = repl.start('Bank > ');
repl.context.Account = Account;
