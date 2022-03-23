<template>
  <div class="transactions">
    <h1>vuejs vuetify</h1>
    <button @click="connectWallet">connect wallet</button>
    <hr>
    <label>Address to:</label>
    <input type="text" v-model="formData.addressTo"><br>
    <label>Amount:</label>
    <input type="text" v-model="formData.amount"><br>
    <label>Keyword:</label>
    <input type="text" v-model="formData.keyword"><br>
    <label>Message:</label>
    <input type="text" v-model="formData.message"><br>
    <button v-if="!isTransactionLoading" @click="sendTransactions">Process transaction</button>
    <button v-else>Loading...</button>
    <h1 style="color: red" v-show="isSuccess">Transaction success!!!</h1>
    <hr>
    <div v-if="transactions.length > 0">
      <div v-for="(transaction, index) in transactions" :key="index">
        <p>{{ transaction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ethers } from 'ethers';

export default {
  name: 'Transactions',
  props: [],
  data() {
    return {
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
      currentAccount: '',
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
      isSuccess: false
    }
  },
  async mounted() {
    this.ethereum = window.ethereum;
    if (!this.ethereum) return alert('Please install metamask');
    await this.checkIfTransactionExist();
    console.log(this.transactionCount);
    await this.checkIfWalletIsConnected();
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
    }
  }
}
</script>

<style scoped>
.transactions {
  border: 2px solid green;
}
</style>
