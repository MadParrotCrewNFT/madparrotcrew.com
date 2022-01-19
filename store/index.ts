import ethers from 'ethers';
import config from '@/config.json'
import MadParrotCrewABI from '@/contract/abi/MadParrotCrew.json';
import { MadParrotCrew } from '@/contract/types';

export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}
interface IContractState {
  isSaleActive: boolean; // can use these params to drive your UI instead of a config value
  isWhitelistActive: boolean;
  mintPrice: ethers.BigNumber; //These are 256 bit numbers
  numberMinted: ethers.BigNumber;
}
interface IUserContractState {
  isWhitelisted: boolean;
  merkleProof: string[];
  numberMinted: ethers.BigNumber; 
}
interface IState {
  socialLinks: ISocialLink[];
  contractAddress: string;
  account: null | Record<string, any>;
  isConnectingToWallet: boolean;
  connectionError: null | string;
  contractState: null | IContractState;
  userContractState: null | IUserContractState;
  isClaimingNFT: boolean; //could maybe move into UserContractState
  mintTx: null | string;  //could maybe move into UserContractState
  mintingError: null | string;
}

export const state = () => ({
  socialLinks: [
    {
      text: 'Discord',
      url: config.SOCIAL.DISCORD,
      icon: 'discord'
    },
    {
      text: 'Twitter',
      url: config.SOCIAL.TWITTER,
      icon: 'twitter'
    },
    ...(config.MINTING_LIVE
      ? [
        {
          text: 'OpenSea',
          url: config.MARKETPLACE_LINK,
          icon: 'opensea'
        },
        {
          text: 'Etherscan',
          url: config.SCAN_LINK,
          icon: 'etherscan'
        }
      ]
      : []
    ),
    {
      text: 'Instagram',
      url: config.SOCIAL.INSTAGRAM,
      icon: 'instagram'
    }
  ],
  contractAddress: config.CONTRACT_ADDRESS,
  account: null,
  isConnectingToWallet: false,
  connectionError: null,
  contractState: null,
  userContractState: null,
  isClaimingNFT: false,
  mintTx: null
} as IState)

export const mutations = {
  setAccount(state: IState, account: null | Record<string, any>): void {
    state.account = account
  },
  setIsConnectingToWallet(state: IState, value: boolean): void {
    state.isConnectingToWallet = value
  },
  setConnectionError(state: IState, error: string | null): void {
    state.connectionError = error
  },
  setContractState(state: IState, contractState: IContractState | null): void {
    state.contractState = contractState
  },
  setUserContractState(state: IState, userContractState: IUserContractState | null): void {
    state.userContractState = userContractState
  },
  setIsClaimingNFT(state: IState, value: boolean): void {
    state.isClaimingNFT = value
  },
  setMintingError(state: IState, error: string | null): void {
    state.mintingError = error
  }
}

export const actions = {
  isAWalletInstalled ({ commit }: { commit: (mutation: string, value: any) => void }): boolean {
    const { ethereum } = window
    if (!ethereum) {
      commit("setConnectionError", "A wallet is not installed.")
      return false
    }
    else return true
  },
  async connect({ commit, dispatch }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any }): Promise<void> {
    commit("setIsConnectingToWallet", true)
    try {
      if (!(await dispatch("isAWalletInstalled"))) return
      if (!(await dispatch("checkIfConnected"))) { // User has granted access to wallet?
        await dispatch("requestAccess")
      }
      commit("setConnectionError", null)
      if (!(await dispatch("isCorrectNetwork"))) await dispatch("switchNetwork")
    } catch (error) {
      console.error(error)
      commit("setConnectionError", "Wallet account request refused.")
    }
    commit("setIsConnectingToWallet", false)
  },
  async checkIfConnected({ commit, dispatch }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any }) {
    if (!(await dispatch("isAWalletInstalled"))) return false
    const { ethereum } = window
    window.web3Provider = new ethers.providers.Web3Provider(ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" })
    if (accounts.length !== 0) {
      commit("setAccount", accounts[0])
      return true
    } else {
      return false
    }
  },
  async requestAccess({ commit }: { commit: (mutation: string, value: any) => void }) {
    const { ethereum } = window
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    commit("setAccount", accounts[0])
  },
  async isCorrectNetwork({ commit, dispatch }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any }): Promise<boolean> {
    if ((await dispatch("checkIfConnected"))) {
      const { ethereum } = window
      let chainId = await ethereum.request({ method: "eth_chainId" })
      const requiredChainId = `0x${config.NETWORK.ID}`
      const isCorrect = chainId === requiredChainId
      if (isCorrect) commit("setConnectionError", null)
      else commit("setConnectionError", `Connect to the ${config.NETWORK.NAME} network to proceed.`)
      return isCorrect
    }
    else return false
  },
  async switchNetwork({ commit }: { commit: (mutation: string, value: any) => void }): Promise<void> {
    try {
      const { ethereum } = window
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${config.NETWORK.ID}` }],
      })
      // You may have to recreate your provider here, but I'm not entirely sure
      commit("setConnectionError", null)
    } catch (err) {
      console.error(err)
      commit("setConnectionError", `Connect to the ${config.NETWORK.NAME} network to proceed.`)
    }
  },
  async getContractState({ commit }: { commit: (mutation: string, value: any) => void }): Promise <void> {
    try {
      // Sorry, not familiar with this version of flux/redux so I'm pretending like I'm getting the state properly
      const contract = new ethers.Contract(this.$store.state.contractAddress, MadParrotCrewABI, window.web3Provider) as MadParrotCrew;  
      const contractState: IContractState = {
        isSaleActive: await contract.isSaleActive(), // Iac hasn't added these yet, but assuming he does, you just import the ABI and run `npm run typechain` to get new types
        isWhitelistActive: await contract.isWhitelistActive(),
        mintPrice: await contract.mintPrice(),
        numberMinted: await contract.totalSupply(),
        //... and anything else you want to grab from the contract once it exists
      }
      commit("setContractState", contractState);
    } catch (err) {
      console.log(err);
      commit("setConnectionError", "Sorry, something went wrong. Please try again later."); // or something
    }
  },
  async getUserContractState({ commit }: { commit: (mutation: string, value: any) => void }): Promise <void> {
    try {
      // Go get the merkle proof from the backend so you can show them ahead of time if they're whitelisted
      // axios.get(....)
      const merkleProof = ["0xblahblahblah", "0xblahblahblah"];
      // Sorry, not familiar with this version of flux/redux so I'm pretending like I'm getting the state properly
      const contract = new ethers.Contract(this.$store.state.contractAddress, MadParrotCrewABI, window.web3Provider) as MadParrotCrew;  
      const numberMinted = await contract.numberMinted(this.$store.state.account); // pass in the address
      const userContractState: IUserContractState = {
        isWhitelisted: merkleProof.length > 0,
        merkleProof,
        numberMinted
      }
      commit("setUserContractState", userContractState);
    } catch (err) {
      console.error(err)
      commit("setConnectionError", `Sorry, you aren't on our whitelist.`); //or something. 
    }
  },
  async mintParrots({ commit }: { commit: (mutation: string, value: any) => void }): Promise <void> {
    try {
      // perhaps there is a more global way to hang on to this contract ref but I don't know it in this context
      const numberOfParrots = 1; //I have no clue how to grab it from the dispatch param, sorry.
      const contract = new ethers.Contract(this.$store.state.contractAddress, MadParrotCrewABI, window.web3Provider) as MadParrotCrew;  
      const isSaleActive = store.contractState.isSaleActive;
      const isWhitelistMint = store.contractState.isWhitelistActive && !isSaleActive; //sale supersedes all
      if (isWhitelistMint) {
        // they probably shouldn't have got here if there is no merkleproof, so act accordingly
        const tx = await contract.whitelistMint(numberOfParrots, store.userContractState.merkleProof, {
          value: store.contractState.mintPrice.mul(numberOfParrots), // this is in wei
        }); 
        commit('setMintTx', tx);
      } else if (isSaleActive) {
        const tx = await contract.publicMint(numberOfParrots, {
          value: store.contractState.mintPrice.mul(numberOfParrots), // this is in wei
        }); 
        commit('setMintTx', tx);
      } else {
        // nothing is active so deal with it, though we shouldn't have had the chance to get here.
      }
    } catch (err) {
      console.log(err);
      commit("setMintingError", "Sorry, something went wrong. Please try again later."); // or something
    }
  },
  
}
