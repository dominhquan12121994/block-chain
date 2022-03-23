const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('d9faded863f98a57a3980473d6e5c45bc043a39d9add69743ecca8613da07781');
const myWalletAddress = myKey.getPublic('hex');
console.log(myKey);
console.log(myWalletAddress);

let quandoCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key goes here', 20);
tx1.signTransaction(myKey);
console.log(tx1);
quandoCoin.addTransaction(tx1);
console.log(`Start mining...`);
quandoCoin.minePendingTransactions(myWalletAddress);
console.log(`Balance is ${quandoCoin.getBalanceOfAddress(myWalletAddress)}`);




// let quandoCoin = new Blockchain();
// quandoCoin.addTransaction(new Transaction('address1', 'address2', 100));
// quandoCoin.addTransaction(new Transaction('address2', 'address1', 50));
// console.log(`Start mining`);
// quandoCoin.minePendingTransactions('quando-address');
// quandoCoin.minePendingTransactions('quando-address');
// quandoCoin.minePendingTransactions('quando-address');
// console.log(`Balance of quando-address is ${quandoCoin.getBalanceOfAddress('quando-address')}`);
// console.log(`Mining block 1...`);
// quandoCoin.addBlock(new Block(1, "01/01/2021", { amount: 1 }));
//
// console.log(`Mining block 2...`);
// quandoCoin.addBlock(new Block(2, "02/02/2022", { amount: 4 }));
// console.log(`is blockchain valid? ${quandoCoin.isChainValid()}`);
// quandoCoin.chain[1].data = { amount: 1000 };
// quandoCoin.chain[1].hash = quandoCoin.chain[1].calculateHash();
// console.log(`is blockchain valid? ${quandoCoin.isChainValid()}`);

// console.log(JSON.stringify(quandoCoin, null, 4));