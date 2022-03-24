(function(e){function t(t){for(var a,o,i=t[0],c=t[1],u=t[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},s=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/block-chain/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},3:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",[n("transactions")],1)],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-container",{attrs:{"p-10":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[e._v("Transfer crypto around the world with Ropsten testnet")])])],1),n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[e.currentAccount?e._e():n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:e.connectWallet}},[e._v(" Connect Your Metamask Wallet (Ropsten testnet) ")])],1)],1),n("v-form",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Address to"},model:{value:e.formData.addressTo,callback:function(t){e.$set(e.formData,"addressTo",t)},expression:"formData.addressTo"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Amount",type:"number",step:"0.0001",min:"0",max:"0.001"},model:{value:e.formData.amount,callback:function(t){e.$set(e.formData,"amount",t)},expression:"formData.amount"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Keyword"},model:{value:e.formData.keyword,callback:function(t){e.$set(e.formData,"keyword",t)},expression:"formData.keyword"}})],1),n("v-col",{attrs:{cols:"12",sm:"6"}},[n("v-text-field",{attrs:{label:"Message"},model:{value:e.formData.message,callback:function(t){e.$set(e.formData,"message",t)},expression:"formData.message"}})],1)],1)],1)],1),n("v-container",[n("v-row",{attrs:{align:"center",justify:"center"}},[e.isTransactionLoading?e._e():n("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:e.sendTransactions}},[e._v(" Process Transaction ")]),e.isTransactionLoading?n("v-progress-circular",{attrs:{indeterminate:"",color:"success"}}):e._e()],1),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",{directives:[{name:"show",rawName:"v-show",value:e.isSuccess,expression:"isSuccess"}],staticStyle:{color:"red"}},[e._v("Transaction success!!!")])])],1),n("v-container",{attrs:{"p-10":""}},[n("h1",{directives:[{name:"show",rawName:"v-show",value:e.currentAccount,expression:"currentAccount"}]},[e._v("Current account transaction")]),n("div",[n("div",[n("p",[e._v(e._s(e.transaction))])]),e.transactions.length>0?n("v-row",e._l(e.transactions,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12",sm:"6"}},[n("v-card",{staticClass:"mx-auto my-12"},[n("v-card-title",[e._v("Transaction "+e._s(++a))]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("p",[e._v("Address from: "+e._s(t.addressFrom))]),n("p",[e._v("Address to: "+e._s(t.addressTo))]),n("p",[e._v("Keyword: "+e._s(t.keyword))]),n("p",[e._v("Message: "+e._s(t.message))]),n("p",[e._v("Timestamp: "+e._s(t.timestamp))])])],1)],1)})),1):e._e()],1)]),n("v-divider"),n("v-container",{attrs:{"mt-10":"","p-10":""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("h1",[e._v("Blockchain")])]),n("v-row",{attrs:{align:"center",justify:"center"}},[n("h4",[e._v("Look behind-the-scenes of a blockchain")])]),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",[e._v("Create transaction")]),n("h4",[e._v("Transfer some money to someone!")])]),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"From address (This is your wallet address. You cannot change it because you can only spend your own coins.)",disabled:""},model:{value:e.newTransaction.addressFrom,callback:function(t){e.$set(e.newTransaction,"addressFrom",t)},expression:"newTransaction.addressFrom"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"To address (The address of the wallet where you want to send the money to. You can type random text here)"},model:{value:e.newTransaction.addressTo,callback:function(t){e.$set(e.newTransaction,"addressTo",t)},expression:"newTransaction.addressTo"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Amount (You can transfer any amount. Account balance is not checked in this demo. Have at it!)"},model:{value:e.newTransaction.amount,callback:function(t){e.$set(e.newTransaction,"amount",t)},expression:"newTransaction.amount"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-btn",{attrs:{color:"success"},on:{click:e.createNewTransaction}},[e._v(" Sign and create new transaction ")])],1),n("v-col",{directives:[{name:"show",rawName:"v-show",value:e.quandoCoin.pendingTransactions.length>0,expression:"quandoCoin.pendingTransactions.length > 0"}],attrs:{cols:"12"}},[n("h2",[e._v("See pending transaction and preparing to create a new block!")])]),n("v-col",{attrs:{cols:"12"}},e._l(e.quandoCoin.pendingTransactions,(function(t,a){return n("v-card",{key:a,staticClass:"mx-auto my-12"},[n("v-card-title",[e._v("Pending transaction "+e._s(++a))]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("p",[e._v("From address: "+e._s(t.fromAddress))]),n("p",[e._v("To address: "+e._s(t.toAddress))]),n("p",[e._v("Amount: "+e._s(t.amount))])])],1)})),1),n("v-col",{directives:[{name:"show",rawName:"v-show",value:e.quandoCoin.pendingTransactions.length>0,expression:"quandoCoin.pendingTransactions.length > 0"}],attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Set difficulty (number of 0 start of hash, set 1-3 to speedup)",type:"number",step:"1",min:"1",max:"3"},model:{value:e.quandoCoin.difficulty,callback:function(t){e.$set(e.quandoCoin,"difficulty",t)},expression:"quandoCoin.difficulty"}})],1),n("v-col",{directives:[{name:"show",rawName:"v-show",value:e.quandoCoin.pendingTransactions.length>0,expression:"quandoCoin.pendingTransactions.length > 0"}],attrs:{cols:"12"}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.isMining,expression:"!isMining"}],attrs:{color:"success"},on:{click:e.minePendingTransactions}},[e._v(" Start mining ")]),n("v-progress-circular",{directives:[{name:"show",rawName:"v-show",value:e.isMining,expression:"isMining"}],attrs:{indeterminate:"",color:"success"}})],1),n("v-col",{directives:[{name:"show",rawName:"v-show",value:e.quandoCoin.pendingTransactions.length>0,expression:"quandoCoin.pendingTransactions.length > 0"}],attrs:{cols:"12"}},[n("p",[e._v("Set difficulty and start mine pending transactions to create a new block")])])],1)],1),n("v-container",[e.quandoCoin.chain.length>0?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("h2",[e._v("Current blocks on chain")])]),e._l(e.quandoCoin.chain,(function(t,a){return n("v-col",{key:a,attrs:{cols:"12"}},[n("v-card",{staticClass:"mx-auto"},[n("v-card-title",[e._v("Block "+e._s(++a)+" "),n("span",{directives:[{name:"show",rawName:"v-show",value:"0"==t.previousHash,expression:"block.previousHash == '0'"}]},[e._v("(Genesis block)")])]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("p",[e._v("Hash: "+e._s(t.hash))]),n("p",[e._v("Hash of previous block: "+e._s(t.previousHash))]),n("p",[e._v("Nonce: "+e._s(t.nonce))]),n("p",[e._v("Timestamp: "+e._s(new Date(t.timestamp).toLocaleString()))])]),n("v-divider",{staticClass:"mx-4"}),"0"!=t.previousHash?n("div",e._l(t.transactions,(function(t,a){return n("v-card-text",{key:a},[n("p",[e._v("Transaction "+e._s(++a))]),n("p",[e._v("Address from: "+e._s(t.fromAddress?t.fromAddress:"System"))]),n("p",[e._v("Address to: "+e._s(t.toAddress)+" "+e._s(t.toAddress==e.newTransaction.addressFrom?"(I got mining reward)":""))]),n("p",[e._v("Amount: "+e._s(t.amount))]),n("v-divider",{staticClass:"mx-4"})],1)})),1):e._e()],1)],1)}))],2):e._e()],1)],1)},i=[],c=n("1da1"),u=(n("d9e2"),n("d81d"),n("a9e3"),n("96cf"),n("c030")),l=n("cd57"),d=l.Blockchain,m=l.Transaction,h=n("3337").ec,v=new h("secp256k1"),p=v.keyFromPrivate("d9faded863f98a57a3980473d6e5c45bc043a39d9add69743ecca8613da07781"),f=p.getPublic("hex"),g={name:"Transactions",props:[],data:function(){return{newTransaction:{addressFrom:f,addressTo:"",amount:""},quandoCoin:new d,ethereum:null,contractABI:[{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"address",name:"receiver",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"string",name:"message",type:"string"},{indexed:!1,internalType:"uint256",name:"timestamp",type:"uint256"},{indexed:!1,internalType:"string",name:"keyword",type:"string"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address payable",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"string",name:"keyword",type:"string"}],name:"addToBlockChain",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAllTransactions",outputs:[{components:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"receiver",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"string",name:"message",type:"string"},{internalType:"uint256",name:"timestamp",type:"uint256"},{internalType:"string",name:"keyword",type:"string"}],internalType:"struct Transactions.TransferStruct[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTransactionCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}],contractAddress:"0x85a5F97786b22a70ecb81835b335081993DE20C5",currentAccount:null,formData:{addressTo:"",amount:"",keyword:"",message:""},isLoading:!1,transactionCount:localStorage.getItem("transactionCount"),transactions:[],isTransactionLoading:!1,isSuccess:!1,isMining:!1}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ethereum=window.ethereum,e.ethereum){t.next=3;break}return t.abrupt("return",alert("Please install metamask"));case 3:return t.next=5,e.checkIfTransactionExist();case 5:return console.log(e.transactionCount),t.next=8,e.checkIfWalletIsConnected();case 8:case"end":return t.stop()}}),t)})))()},methods:{checkIfTransactionExist:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=e.getEthereumContract(),t.next=4,n.getTransactionCount();case 4:a=t.sent,window.localStorage.setItem("transactionCount",a),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},connectWallet:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.ethereum){t.next=3;break}return t.abrupt("return",alert("Please install metamask"));case 3:return t.next=5,e.ethereum.request({method:"eth_requestAccounts"});case 5:return n=t.sent,e.currentAccount=n[0],t.next=9,e.getAllTransactions();case 9:t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](0),console.log(t.t0),new Error("No window ethereum object");case 15:case"end":return t.stop()}}),t,null,[[0,11]])})))()},checkIfWalletIsConnected:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ethereum){t.next=2;break}return t.abrupt("return",alert("Please install metamask"));case 2:return t.next=4,e.ethereum.request({method:"eth_accounts"});case 4:if(n=t.sent,!(n.length>0)){t.next=11;break}return e.currentAccount=n[0],t.next=9,e.getAllTransactions();case 9:t.next=12;break;case 11:console.log("No accounts found");case 12:case"end":return t.stop()}}),t)})))()},getAllTransactions:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ethereum){t.next=2;break}return t.abrupt("return",alert("Please install metamask"));case 2:return n=e.getEthereumContract(),t.next=5,n.getAllTransactions();case 5:a=t.sent,console.log(a),e.transactions=a.map((function(e){return{addressTo:e.receiver,addressFrom:e.sender,timestamp:new Date(1e3*e.timestamp.toNumber()).toLocaleString(),message:e.message,keyword:e.keyword,amount:parseInt(e.amount._hex)/Math.pow(10,10)}}));case 8:case"end":return t.stop()}}),t)})))()},getEthereumContract:function(){var e=new u["a"].providers.Web3Provider(this.ethereum),t=e.getSigner();return new u["a"].Contract(this.contractAddress,this.contractABI,t)},sendTransactions:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.isTransactionLoading=!0,e.ethereum){t.next=4;break}return t.abrupt("return",alert("Please install metamask"));case 4:return n=e.getEthereumContract(),t.next=7,e.ethereum.request({method:"eth_sendTransaction",params:[{from:e.currentAccount,to:e.formData.addressTo,gas:"0x5208",value:e.parseAmount(e.formData.amount)}]});case 7:return t.next=9,n.addToBlockChain(e.formData.addressTo,e.parseAmount(e.formData.amount),e.formData.message,e.formData.keyword);case 9:return a=t.sent,console.log("Loading - ".concat(a.hash)),t.next=13,a.wait();case 13:return e.isTransactionLoading=!1,console.log("Success - ".concat(a.hash)),t.next=17,n.getTransactionCount();case 17:e.transactionCount=t.sent,window.localStorage.setItem("transactionCount",e.transactionCount.toNumber()),e.isSuccess=!0,setTimeout(window.location.reload(),3e3),t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](0),console.log(t.t0);case 26:case"end":return t.stop()}}),t,null,[[0,23]])})))()},parseAmount:function(e){return u["a"].utils.parseEther(e)._hex},createNewTransaction:function(){var e=new m(this.newTransaction.addressFrom,this.newTransaction.addressTo,this.newTransaction.amount);e.signTransaction(p),this.quandoCoin.addTransaction(e),this.newTransaction.addressTo="",this.newTransaction.amount=""},minePendingTransactions:function(){this.quandoCoin.difficulty=Number(this.quandoCoin.difficulty),this.isMining=!0,this.quandoCoin.minePendingTransactions(f),this.quandoCoin.pendingTransactions=[],this.isMining=!1}}},w=g,y=n("2877"),T=Object(y["a"])(w,o,i,!1,null,"5be26fe3",null),b=T.exports,k={name:"App",components:{Transactions:b},data:function(){return{}},methods:{}},x=k,_=(n("034f"),Object(y["a"])(x,r,s,!1,null,null,null)),C=_.exports,A=n("ce5b"),S=n.n(A);n("bf40");a["default"].use(S.a),a["default"].config.productionTip=!1,new a["default"]({vuetify:new S.a,render:function(e){return e(C)}}).$mount("#app")},"85ec":function(e,t,n){},cd57:function(e,t,n){var a=n("6374").default,r=n("970b").default,s=n("5bc3").default;n("d3b7"),n("25f0"),n("d9e2"),n("e9c4"),n("a15b");var o=n("94f8"),i=n("3337").ec,c=new i("secp256k1"),u=function(){"use strict";function e(t,n,a){r(this,e),this.fromAddress=t,this.toAddress=n,this.amount=a,this.signature=""}return s(e,[{key:"calculateHash",value:function(){return o(this.fromAddress+this.toAddress+this.amount).toString()}},{key:"signTransaction",value:function(e){if(e.getPublic("hex")!==this.fromAddress)throw new Error("You can not sign transaction for other address");var t=this.calculateHash(),n=e.sign(t,"base64");this.signature=n.toDER("hex")}},{key:"isValid",value:function(){if(null===this.fromAddress)return!0;if(!this.signature||0===this.signature.length)throw new Error("No signature in this transaction");var e=c.keyFromPublic(this.fromAddress,"hex");return e.verify(this.calculateHash(),this.signature)}}]),e}(),l=function(){"use strict";function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";r(this,e),this.timestamp=t,this.transactions=n,this.previousHash=a,this.hash=this.calculateHash(),this.nonce=0}return s(e,[{key:"calculateHash",value:function(){return o(this.index+this.previousHash+this.timestamp+JSON.stringify(this.transactions)+this.nonce).toString()}},{key:"mineBlock",value:function(e){while(this.hash.substring(0,e)!=Array(e+1).join("0"))this.nonce++,this.hash=this.calculateHash();console.log("Block mined: ".concat(this.hash))}},{key:"hasValidTransactions",value:function(){var e,t=a(this.transactions);try{for(t.s();!(e=t.n()).done;){var n=e.value;if(!n.isValid())return!1}}catch(r){t.e(r)}finally{t.f()}return!0}}]),e}(),d=function(){"use strict";function e(){r(this,e),this.chain=[this.createGenesisBlock()],this.difficulty=2,this.pendingTransactions=[],this.miningReward=100}return s(e,[{key:"createGenesisBlock",value:function(){return new l("02/02/2022","Genesis block","0")}},{key:"getLatestBlock",value:function(){return this.chain[this.chain.length-1]}},{key:"minePendingTransactions",value:function(e){var t=new u(null,e,this.miningReward);this.pendingTransactions.push(t);var n=new l(Date.now(),this.pendingTransactions,this.getLatestBlock().hash);n.mineBlock(this.difficulty),this.chain.push(n),this.pendingTransactions=[]}},{key:"addTransaction",value:function(e){if(!e.fromAddress||!e.toAddress)throw new Error("Transaction must be include from and to address");if(!e.isValid())throw new Error("Can not add invalid transaction to chain");this.pendingTransactions.push(e)}},{key:"getBalanceOfAddress",value:function(e){var t,n=0,r=a(this.chain);try{for(r.s();!(t=r.n()).done;){var s,o=t.value,i=a(o.transactions);try{for(i.s();!(s=i.n()).done;){var c=s.value;c.fromAddress===e&&(n-=c.amount),c.toAddress===e&&(n+=c.amount)}}catch(u){i.e(u)}finally{i.f()}}}catch(u){r.e(u)}finally{r.f()}return n}},{key:"isChainValid",value:function(){for(var e=1;e<this.chain.length;e++){var t=this.chain[e],n=this.chain[e-1];if(!t.hasValidTransactions())return!1;if(t.hash!==t.calculateHash())return!1;if(t.previousHash!==n.hash)return!1}return!0}}]),e}();e.exports.Blockchain=d,e.exports.Transaction=u}});
//# sourceMappingURL=app.330678ca.js.map