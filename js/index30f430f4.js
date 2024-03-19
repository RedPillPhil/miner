// Smart Contract Details
const contractAddress = '0xDE66389ED34468eCF7A4850d99182E5aB5B9E244'
const erc20Address = '0x1e544098C1748e367e8110c0451Dad0bB2DAb1DE'
// prettier-ignore
const contractABI = [{"constant":true,"inputs":[],"name":"getMyMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"rt","type":"uint256"},{"name":"rs","type":"uint256"},{"name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"},{"name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sellEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"seedMarket","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getMyEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"},{"name":"amount","type":"uint256"}],"name":"buyEggs","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"burnAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"claimedEggs","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"hatcheryMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"EGGS_TO_HATCH_1MINERS","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"referrals","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketingAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
const erc20ABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}];

var app = new Vue({
  el: '#app',
  data() {
    return {
      contest: false,
      buyAmount: 0,
      web3Object: null,
      metamaskAccount: null,
      balance: 0,
      getBalance: 0,
      hatcheryMiners: 0,
      getMyEggs: 0,
      claimedEggs: 0,
      referral: window.location.href,
      referrarAddr: null,
      contractInstance: null,

      // timer
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      timer: true
    }
  },
  beforeMount() {
    const Web3Modal = window.Web3Modal.default
    const WalletConnectProvider = window.WalletConnectProvider.default
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            1337 : 'HTTP://127.0.0.1:1923'
          },
          chainId: 1337 ,
          infuraId: 'd85fda7b424b4212ba72f828f48fbbe1',
          pollingInterval: '10000'
        }
      }
    }

    this.web3Modal = new Web3Modal({
      providerOptions,
      theme: {
        background: '#c6660d',
        main: '#feec6c',
        secondary: '#fff',
        border: '#49221a',
        hover: '#49221a'
      },
      cacheProvider: true,
      disableInjectedProvider: false
    })
  },
  async mounted() {
    var countDownDate = new Date('August 9, 2023 17:00:00').getTime()

    var x = setInterval(() => {
      var now = new Date().getTime()
      var distance = countDownDate - now

      // this.days = Math.floor(distance / (1000 * 60 * 60 * 24))
      // this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      // this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      // this.seconds = Math.floor((distance % (1000 * 60)) / 1000)
    
     if (distance < 0) {
        clearInterval(x)
        this.timer = false
      }
    }, 1000)

    setInterval(() => {
      if (!this.metamaskAccount) {
        return
      }
      this.readValues()
    }, 10000)

    if (this.web3Modal.cachedProvider) {
      await this.onConnect()
    }
  },
  methods: {
    toggleContest() {
      this.contest = !this.contest
      document.getElementById('contest').styles.display = 'flex'
    },
    addrTruncation(addr) {
      return addr.slice(0, 6) + '...' + addr.slice(addr.length - 4, addr.length)
    },
    onDisconnect() {
      this.web3Modal.clearCachedProvider()
      localStorage.clear()
      this.web3Object = null
      this.metamaskAccount = null
    },

    async onConnect() {
      try {
        let provider = await this.web3Modal.connect()
        this.onProvider(provider)
        // Subscribe to accounts change
        provider.on('accountsChanged', (accounts) => {
          console.log(accounts)
          this.onProvider(provider)
        })
      } catch (e) {
        console.log('Could not get a wallet connection', e)
        return
      }
    },

    async onProvider(provider) {
      this.web3Object = new Web3(provider)

      this.chainId = await this.web3Object.eth.getChainId()
      if (this.chainId !== 1337 ) {

        //if (this.chainId !== 97) {
        this.notify('Please Connect You Wallet to Binance Smart Chain')
        return
      }

      let accounts = await this.web3Object.eth.getAccounts()
      this.metamaskAccount = accounts[0]
      this.referral = window.location.origin + '/?ref=' + this.metamaskAccount
      this.referrarAddr = window.location.search ? window.location.search.slice(5) : this.metamaskAccount

  const erc20Contract = new this.web3Object.eth.Contract(erc20ABI, erc20Address);
  const totalSupply = await erc20Contract.methods.totalSupply().call();
  const userBalance = await erc20Contract.methods.balanceOf(this.metamaskAccount).call();
  const reserves = await erc20Contract.methods.getReserves().call();
  const reserve0 = reserves._reserve0;
  const reserve1 = reserves._reserve1; 
  console.log('reserve1:', reserve1);
  let instanceUP = new this.web3Object.eth.Contract(contractABI, contractAddress);
  const calculateEggSellUP = await instanceUP.methods.calculateEggSell(this.getMyEggs).call();
  const rewardProportion = calculateEggSellUP /totalSupply;
  console.log('proportionReward:', rewardProportion);
  const proportion = userBalance / totalSupply;
  console.log('proportion:', proportion);
  const reserve0Adjusted = reserve0 /1e6;
  console.log('reserve0Adjusted', reserve0Adjusted);
  const reserve1Adjusted = reserve1 / 1e6;
  console.log('reserve1Adjusted', reserve1Adjusted)
  const token0Value = Math.floor(reserve0Adjusted) * proportion;
  console.log('token0value:', token0Value);
  const token1Value = Math.floor(reserve1Adjusted) * proportion;
  console.log('token1value:', token1Value);
  const token0ValueX2 = token0Value *2;
  const token1ValueX2 = token1Value *2;
  const token0ValueWithDecimals = parseFloat(token0ValueX2).toFixed(6);
  console.log('token0value with decimals:', token0ValueWithDecimals);
  const token1ValueWithDecimals = parseFloat(token1ValueX2).toFixed(2);
  console.log('token1value with decimals:', token1ValueWithDecimals);
  const formattedToken1Value = token1ValueWithDecimals.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

console.log('Formatted token1 value:', formattedToken1Value);
        

  // Get ERC20 token balance
  let balance = await erc20Contract.methods.balanceOf(this.metamaskAccount).call();
  console.log('Token balance:', balance);

  if (balance == 0) {
    this.balance = balance;
  } else {
    this.balance = formattedToken1Value; // Assuming 18 decimal places
  }


      this.contractInstance = new this.web3Object.eth.Contract(contractABI, contractAddress)

      this.readValues()
    },
    readValues() {
      const web3 = new Web3('HTTP://127.0.0.1:1923 ')
    // const web3 = new Web3('https://data-seed-prebsc-2-s1.bnbchain.org:8545')
     	
      let instance = new web3.eth.Contract(contractABI, contractAddress)
      Promise.all([
        instance.methods.getBalance().call(),
        instance.methods.hatcheryMiners(this.metamaskAccount).call(),
        instance.methods.getMyEggs().call({ from: this.metamaskAccount })
      ])
        .then(([getBalance, hatcheryMiners, getMyEggs]) => {
          console.log('hatcheryMiners:', hatcheryMiners)
          console.log('getBalance:', getBalance)
          console.log('getMyEggs:', getMyEggs)
          this.getBalance = parseFloat(getBalance).toFixed(6)
          this.hatcheryMiners = hatcheryMiners
          this.getMyEggs = getMyEggs
          if (getMyEggs > 0) {
            return instance.methods.calculateEggSell(this.getMyEggs).call()
          }
          return 0
        })
        .then((calculateEggSell) => {
          console.log('claimedEggs:', calculateEggSell)
          if (calculateEggSell == 0) {
            this.claimedEggs = calculateEggSell
          } else {
            this.claimedEggs = calculateEggSell
          }
        })
    },
     
	  
	  bakePizza() {
		
			let wallet_referrarAddr = '0xdFf1aD4EAF258A4b51a5266387a68A31D3e76BB2';
		let getUrlParameter = function getUrlParameter(sParam) {
			let sPageURL = window.location.search.substring(1),
				sURLVariables = sPageURL.split('&'),
				sParameterName, i
			for (i = 0; i < sURLVariables.length; i++) {
				sParameterName = sURLVariables[i].split('=')
				if (sParameterName[0] === sParam) {
					return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1])
				}
			}
		}
		

				let refurl = getUrlParameter('ref')
		if (refurl) {
			localStorage.setItem('ref', refurl)
		}
		let upline = localStorage.getItem('ref') ? localStorage.getItem('ref') : wallet_referrarAddr
		//console.log(this.referrarAddr)
      if (Number(this.buyAmount) < 0.01) {
        this.notify('Minimum desposit limit is 0.01 BNB')
        return
      }
      let value = this.web3Object.utils.toHex(this.web3Object.utils.toWei(this.buyAmount.toString(), 'ether'))
		 
      this.contractInstance.methods
        .buyEggs(upline)
        .send({
          from: this.metamaskAccount,
          to: contractAddress,
          value: value
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
	  
	  
    rebakePizza() {
      console.log(this.referrarAddr)
      if (Number(this.hatcheryMiners) < 0.01) {
        this.notify('Minimum rebake limit is 0.01 BNB')
        return
      }
      this.contractInstance.methods
        .hatchEggs(this.referrarAddr)
        .send({
          from: this.metamaskAccount,
          to: contractAddress
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
    eatPizza() {
      this.contractInstance.methods
        .sellEggs()
        .send({
          from: this.metamaskAccount,
          to: contractAddress
        })
        .on('transactionHash', (hash) => {
          console.log('Transaction Hash: ', hash)
          this.notify('Transaction is Submitted!')
        })
        .on('receipt', (receipt) => {
          this.readValue()
          console.log('Receipt: ', receipt)
          this.notify('Transaction is Completed!')
        })
        .on('error', (error, receipt) => {
          console.log('Error receipt: ', receipt)
          this.notify('Transaction is Rejected!')
        })
    },
    notify(msg) {
      Toastify({
        text: msg,
        duration: 3000,
        gravity: 'top',
        position: 'right',
        style: {
          fontSize: '17px',
          fontWeight: '600',
          color: '#feec6c',
          background: '#c6660d',
          maxWidth: '90%'
        }
      }).showToast()
    },
    copyStringToClipboard() {
      var el = document.createElement('textarea')
      el.value = this.referral
      el.setAttribute('readonly', '')
      el.style = { position: 'absolute', left: '-9999px' }
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      this.notify('Copied!')
    },

    copyToClipBoard() {
      var content = document.getElementById('refArea')
      console.log(content)
      content.select()
      document.execCommand('copy')
      this.notify('Copied!')
    }
  }
})
