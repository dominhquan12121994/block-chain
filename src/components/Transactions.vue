<template>
  <div>
    <v-container
      p-10
    >
      <v-row
        align="center"
        justify="center"
      >
        <h1>Transfer crypto around the world with Ropsten testnet</h1>
      </v-row>
    </v-container>
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          v-if="!currentAccount"
          depressed
          color="primary"
          @click="connectWallet"
        >
          Connect Your Metamask Wallet (Ropsten testnet)
        </v-btn>
      </v-row>
    </v-container>
    <v-form>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Address to"
              v-model="formData.addressTo"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Amount"
              type="number"
              step="0.0001"
              min="0"
              max="0.001"
              v-model="formData.amount"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Keyword"
              v-model="formData.keyword"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
          >
            <v-text-field
              label="Message"
              v-model="formData.message"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-container>
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          v-if="!isTransactionLoading"
          depressed
          color="primary"
          @click="sendTransactions"
        >
          Process Transaction
        </v-btn>
        <v-progress-circular
          v-if="isTransactionLoading"
          indeterminate
          color="success"
        ></v-progress-circular>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <h1 v-show="isSuccess" style="color: red">Transaction success!!!</h1>
      </v-row>
    </v-container>
    <v-container
      p-10
    >
      <h1 v-show="currentAccount">Current account transaction</h1>
      <div >
        <div >
          <p>{{ transaction }}</p>
        </div>
        <v-row v-if="transactions.length > 0">
          <v-col
            cols="12"
            sm="6"
            v-for="(transaction, index) in transactions" :key="index"
          >
            <v-card
              class="mx-auto my-12"
            >
              <v-card-title>Transaction {{ ++index }}</v-card-title>
              <v-divider class="mx-4"></v-divider>
              <v-card-text>
                <p>Address from: {{ transaction.addressFrom }}</p>
                <p>Address to: {{ transaction.addressTo }}</p>
                <p>Keyword: {{ transaction.keyword }}</p>
                <p>Message: {{ transaction.message }}</p>
                <p>Timestamp: {{ transaction.timestamp }}</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
    <v-divider></v-divider>
    <v-container
      mt-10
      p-10
    >
      <v-row
        align="center"
        justify="center"
      >
        <h1>Blockchain</h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <h4>Look behind-the-scenes of a blockchain</h4>
      </v-row>
      <v-row>
        <v-col
          cols="12"
        >
          <h2>Create transaction</h2>
          <h4>Transfer some money to someone!</h4>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            label="From address (This is your wallet address. You cannot change it because you can only spend your own coins.)"
            v-model="newTransaction.addressFrom"
            disabled
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            label="To address (The address of the wallet where you want to send the money to. You can type random text here)"
            v-model="newTransaction.addressTo"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-text-field
            label="Amount (You can transfer any amount. Account balance is not checked in this demo. Have at it!)"
            v-model="newTransaction.amount"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
        >
          <v-btn
            color="success"
            @click="createNewTransaction"
          >
            Sign and create new transaction
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          v-show="quandoCoin.pendingTransactions.length > 0"
        >
          <h2>See pending transaction and preparing to create a new block!</h2>
        </v-col>
        <v-col
          cols="12"
        >
          <v-card
            class="mx-auto my-12"
            v-for="(pendingTransaction, index) in quandoCoin.pendingTransactions"
            :key="index"
          >
            <v-card-title>Pending transaction {{ ++index }}</v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>From address: {{ pendingTransaction.fromAddress }}</p>
              <p>To address: {{ pendingTransaction.toAddress }}</p>
              <p>Amount: {{ pendingTransaction.amount }}</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          v-show="quandoCoin.pendingTransactions.length > 0"
        >
          <v-text-field
            label="Set difficulty (number of 0 start of hash, set 1-3 to speedup)"
            type="number"
            step="1"
            min="1"
            max="3"
            v-model="quandoCoin.difficulty"
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          v-show="quandoCoin.pendingTransactions.length > 0"
        >
          <v-btn
            v-show="!isMining"
            color="success"
            @click="minePendingTransactions"
          >
            Start mining
          </v-btn>
          <v-progress-circular
            v-show="isMining"
            indeterminate
            color="success"
          ></v-progress-circular>
        </v-col>
        <v-col
          cols="12"
          v-show="quandoCoin.pendingTransactions.length > 0"
        >
          <p>Set difficulty and start mine pending transactions to create a new block</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row v-if="quandoCoin.chain.length > 0">
        <v-col
          cols="12"
        >
          <h2>Current blocks on chain</h2>
        </v-col>
        <v-col
          cols="12"
          v-for="(block, index) in quandoCoin.chain" :key="index"
        >
          <v-card
            class="mx-auto"
          >
            <v-card-title>Block {{ ++index }} <span v-show="block.previousHash == '0'">(Genesis block)</span> </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
              <p>Hash: {{ block.hash }}</p>
              <p>Hash of previous block: {{ block.previousHash }}</p>
              <p>Nonce: {{ block.nonce }}</p>
              <p>Timestamp: {{ new Date(block.timestamp).toLocaleString() }}</p>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <div v-if="block.previousHash != '0'">
              <v-card-text
                v-for="(transaction, indexTransaction) in block.transactions"
                :key="indexTransaction"
              >
                <p>Transaction {{ ++indexTransaction }}</p>
                <p>Address from: {{ transaction.fromAddress ? transaction.fromAddress : 'System' }}</p>
                <p>Address to: {{ transaction.toAddress }} {{ transaction.toAddress == newTransaction.addressFrom ? `(I got mining reward)` : '' }}</p>
                <p>Amount: {{ transaction.amount }}</p>
                <v-divider class="mx-4"></v-divider>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ethers } from 'ethers';

const { Blockchain, Transaction } = require('../../block-chain/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');
const myKey = ec.keyFromPrivate('d9faded863f98a57a3980473d6e5c45bc043a39d9add69743ecca8613da07781');
const myWalletAddress = myKey.getPublic('hex');

export default {
  name: 'Transactions',
  props: [],
  data() {
    return {
      newTransaction: {
        addressFrom: myWalletAddress,
        addressTo: '',
        amount: '',
      },
      quandoCoin: new Blockchain(),
      ethereum: null,
      contractABI: [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "address",
              "name": "receiver",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "timestamp",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "keyword",
              "type": "string"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "receiver",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "message",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "keyword",
              "type": "string"
            }
          ],
          "name": "addToBlockChain",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getAllTransactions",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "sender",
                  "type": "address"
                },
                {
                  "internalType": "address",
                  "name": "receiver",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "message",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "keyword",
                  "type": "string"
                }
              ],
              "internalType": "struct Transactions.TransferStruct[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getTransactionCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],
      contractAddress: '0x85a5F97786b22a70ecb81835b335081993DE20C5',
      currentAccount: null,
      formData: {
        addressTo: '',
        amount: '',
        keyword: '',
        message: ''
      },
      isLoading: false,
      transactionCount: localStorage.getItem('transactionCount'),
      transactions: [],
      isTransactionLoading: false,
      isSuccess: false,
      isMining: false
    }
  },
  async mounted() {
    this.ethereum = window.ethereum;
    if (!this.ethereum) return alert('Please install metamask');
    await this.checkIfTransactionExist();
    console.log(this.transactionCount);
    await this.checkIfWalletIsConnected();
    
    // console.log('Begin blockchain');
    //
    // const tx1 = new Transaction(myWalletAddress, 'public key goes here', 20);
    // tx1.signTransaction(myKey);
    // console.log(tx1);
    // this.quandoCoin.addTransaction(tx1);
    // this.quandoCoin.addTransaction(tx1);
    // console.log(`Start mining...`);
    // this.quandoCoin.minePendingTransactions(myWalletAddress);
    // console.log(`Balance is ${this.quandoCoin.getBalanceOfAddress(myWalletAddress)}`);
    // console.log(this.quandoCoin.chain);
  },
  methods: {
    async checkIfTransactionExist() {
      try {
        const transactionContract = this.getEthereumContract();
        const transactionCount = await transactionContract.getTransactionCount();
        window.localStorage.setItem('transactionCount', transactionCount);
      } catch (error) {
        console.log(error);
      }
    },
    async connectWallet() {
      try {
        if (!this.ethereum) return alert('Please install metamask');
        const accounts = await this.ethereum.request({method: 'eth_requestAccounts'});
        this.currentAccount = accounts[0];
        await this.getAllTransactions();
      } catch (error) {
        console.log(error);
        throw new Error('No window ethereum object');
      }
    },
    async checkIfWalletIsConnected() {
      if (!this.ethereum) return alert('Please install metamask');
      const accounts = await this.ethereum.request({method: 'eth_accounts'});
      if (accounts.length > 0) {
        this.currentAccount = accounts[0];
        await this.getAllTransactions();
      } else {
        console.log('No accounts found');
      }
    },
    async getAllTransactions() {
      if (!this.ethereum) return alert('Please install metamask');
      const transactionContract = this.getEthereumContract();
      const availableTransactions = await transactionContract.getAllTransactions();
      console.log(availableTransactions);
      this.transactions = availableTransactions.map(transaction => ({
        addressTo: transaction.receiver,
        addressFrom: transaction.sender,
        timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
        message: transaction.message,
        keyword: transaction.keyword,
        amount: parseInt(transaction.amount._hex) / (10 ** 10)
      }));
    },
    getEthereumContract() {
      const provider = new ethers.providers.Web3Provider(this.ethereum);
      const signer = provider.getSigner();
      return new ethers.Contract(this.contractAddress, this.contractABI, signer);
    },
    async sendTransactions() {
      try {
        this.isTransactionLoading = true;
        if (!this.ethereum) return alert('Please install metamask');
        const transactionContract = this.getEthereumContract();
        await this.ethereum.request({
          method: 'eth_sendTransaction',
          params: [{
            from: this.currentAccount,
            to: this.formData.addressTo,
            gas: '0x5208',
            value: this.parseAmount(this.formData.amount),
          }],
        });
        const transactionHash = await transactionContract.addToBlockChain(this.formData.addressTo, this.parseAmount(this.formData.amount), this.formData.message, this.formData.keyword);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        this.isTransactionLoading = false;
        console.log(`Success - ${transactionHash.hash}`);
        this.transactionCount = await transactionContract.getTransactionCount();
        window.localStorage.setItem('transactionCount', this.transactionCount.toNumber());
        this.isSuccess = true;
        setTimeout( window.location.reload(),3000);
      } catch (error) {
        console.log(error);
      }
    },
    parseAmount(amount) {
      return ethers.utils.parseEther(amount)._hex;
    },
    createNewTransaction() {
      let newTransaction = new Transaction(this.newTransaction.addressFrom, this.newTransaction.addressTo, this.newTransaction.amount);
      newTransaction.signTransaction(myKey);
      this.quandoCoin.addTransaction(newTransaction);
      this.newTransaction.addressTo = '';
      this.newTransaction.amount = '';
    },
    minePendingTransactions() {
      this.isMining = true;
      this.quandoCoin.minePendingTransactions(myWalletAddress);
      this.quandoCoin.pendingTransactions = [];
      this.isMining = false;
    }
  }
}
</script>

<style scoped>

</style>
