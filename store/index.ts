import { ethers, ContractTransaction } from 'ethers'
import config from '@/config.json'
import MadParrotCrewABI from '@/contract/out/MadParrotCrew.sol/MadParrotCrew.json'
import { MadParrotCrew } from '@/contract/types'

export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}

export interface IMintTimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
export interface IContractState {
  isMintActive: boolean;
  priceInWei: number;
  maxSupply: number;
  numberMinted: number;
  supplyLeft: number;
  user: {
    maxMintPerWallet: number;
    alreadyMinted: number;
    allowedLeftToMint: number
  }
}
export interface IState {
  socialLinks: ISocialLink[];
  showTandCsModal: boolean;
  mintEndDateTime: Date,
  mintTimeLeft: IMintTimeLeft;
  mintTimeEnded: boolean;
  contractAddress: string;
  account: null | string;
  isAWalletInstalled: boolean;
  isConnectingToWallet: boolean;
  walletIsConnected: boolean;
  isCorrectNetwork: boolean,
  error: null | string;
  contractState: null | IContractState;
  isClaimingNFT: boolean;
  successfulMint: null | number;
}

export const state = () => ({
  socialLinks: [
    {
      text: 'Twitter',
      url: config.SOCIAL.TWITTER,
      icon: 'twitter'
    },
    {
      text: 'Discord',
      url: config.SOCIAL.DISCORD,
      icon: 'discord'
    },
    {
      text: 'OpenSea',
      url: config.OPENSEA_LINK,
      icon: 'opensea'
    },
    {
      text: 'Etherscan',
      url: config.SCAN_LINK,
      icon: 'etherscan'
    }
  ],
  showTandCsModal: false,
  mintEndDateTime: new Date(Date.UTC(2021, 6, 23, 21, 0, 0, 0)), // Month is 0-11
  mintTimeLeft: {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  mintTimeEnded: false,
  contractAddress: config.CONTRACT_ADDRESS,
  account: null,
  isAWalletInstalled: false,
  isConnectingToWallet: false,
  walletIsConnected: false,
  isCorrectNetwork: false,
  error: null,
  contractState: null,
  isClaimingNFT: false,
  successfulMint: null
} as IState)

export const mutations = {
  setShowTandCsModal(state: IState, value: boolean): void {
    state.showTandCsModal = value
  },
  setMintTimeLeft(state: IState, value: IMintTimeLeft): void {
    state.mintTimeLeft = value
  },
  setMintTimeEnded(state: IState, value: boolean): void {
    state.mintTimeEnded = value
  },
  setAccount(state: IState, account: null | string): void {
    state.account = account
  },
  setIsAWalletInstalled(state: IState, value: boolean): void {
    state.isAWalletInstalled = value
  },
  setIsConnectingToWallet(state: IState, value: boolean): void {
    state.isConnectingToWallet = value
  },
  setWalletIsConnected(state: IState, value: boolean): void {
    state.walletIsConnected = value
  },
  setIsCorrectNetwork(state: IState, value: boolean): void {
    state.isCorrectNetwork = value
  },
  setError(state: IState, error: string | null): void {
    state.error = error
  },
  setContractState(state: IState, contractState: IContractState | null): void {
    state.contractState = contractState
  },
  setIsClaimingNFT(state: IState, value: boolean): void {
    state.isClaimingNFT = value
  },
  setSuccessfulMint(state: IState, value: number | null): void {
    state.successfulMint = value
  }
}

export const actions = {
  isAWalletInstalled ({ commit }: { commit: (mutation: string, value: any) => void }): void {
    const { ethereum } = window
    if (!ethereum) {
      commit("setError", "A wallet is not installed.")
      commit("setIsAWalletInstalled", false)
    }
    else commit("setIsAWalletInstalled", true)
  },
  async connect({ commit, dispatch, state }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any, state: IState }): Promise<void> {
    commit("setIsConnectingToWallet", true)

    try {
      await dispatch("isAWalletInstalled")
      if (!state.isAWalletInstalled) return

      await dispatch("checkIfWalletConnected")
      if (!state.walletIsConnected) {
        await dispatch("requestAccess")
      }

      commit("setError", null)

      await dispatch("isCorrectNetwork")
      if (!state.isCorrectNetwork) await dispatch("switchNetwork")

      await dispatch('getContractState')
    } catch (error) {
      console.error(error)
      commit("setError", "Wallet account request refused.")
    }
    commit("setIsConnectingToWallet", false)
  },
  async checkIfWalletConnected({ commit, dispatch, state }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any, state: IState }): Promise<void> {
    await dispatch("isAWalletInstalled")
    if (!state.isAWalletInstalled) {
      commit("setWalletIsConnected", false)
      return
    }
    const { ethereum } = window
    window.web3Provider = new ethers.providers.Web3Provider(ethereum)
    const accounts = await ethereum.request({ method: "eth_accounts" })
    if (accounts.length !== 0) {
      commit("setAccount", accounts[0])
      commit("setWalletIsConnected", true)
    } else {
      commit("setWalletIsConnected", false)
    }
  },
  async requestAccess({ commit }: { commit: (mutation: string, value: any) => void }): Promise<void> {
    const { ethereum } = window
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    commit("setAccount", accounts[0])
  },
  async isCorrectNetwork({ commit, dispatch, state }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any, state: IState }): Promise<void> {
    await dispatch("checkIfWalletConnected")
    if (state.walletIsConnected) {
      const { ethereum } = window
      let chainId = await ethereum.request({ method: "eth_chainId" })
      const requiredChainId = `0x${config.NETWORK.ID}`
      const isCorrect = chainId === requiredChainId
      if (isCorrect) commit("setError", null)
      else commit("setError", `Connect to the ${config.NETWORK.NAME} network to proceed.`)
      commit("setIsCorrectNetwork", isCorrect)
    }
    else commit("setIsCorrectNetwork", false)
  },
  async switchNetwork({ commit }: { commit: (mutation: string, value: any) => void }): Promise<void> {
    try {
      const { ethereum } = window
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${config.NETWORK.ID}` }],
      })
      // You may have to recreate your provider here, but I'm not entirely sure
      commit("setError", null)
    } catch (err) {
      console.error(err)
      commit("setError", `Connect to the ${config.NETWORK.NAME} network to proceed.`)
    }
  },
  async getContractState({ commit, state }: { commit: (mutation: string, value: any) => void, state: IState }): Promise <void> {
    try {
      const contract = new ethers.Contract(state.contractAddress, MadParrotCrewABI.abi, window.web3Provider) as MadParrotCrew
      const maxSupply = parseInt(await(await contract.functions.MAX_SUPPLY())[0]._hex, 16)
      const numberMinted = parseInt(await (await contract.totalSupply())._hex, 16)
      const isMintActive = config.MINTING_LIVE && await (await contract.functions.isSaleActive())[0]
      const maxMintPerWallet = parseInt(await (await contract.maxPerWallet())._hex, 16)
      const alreadyMinted = parseInt(await (await contract.balanceOf(state.account!))._hex, 16)

      const contractState: IContractState = {
        isMintActive,
        priceInWei: parseInt(await (await contract.mintPrice())._hex, 16),
        maxSupply,
        numberMinted,
        supplyLeft: maxSupply - numberMinted,
        user: {
          maxMintPerWallet,
          alreadyMinted,
          allowedLeftToMint: maxMintPerWallet - alreadyMinted
        }
      }
      commit("setContractState", contractState)
    } catch (err) {
      console.error(err)
      commit("setError", "Sorry, something went wrong. Please try again later.")
    }
  },
  async mintParrots({ commit, dispatch, state }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any, state: IState }, numberOfParrots: number): Promise <void> {
    commit("setIsClaimingNFT", true)

    await dispatch("isCorrectNetwork")
    if (!state.isCorrectNetwork) {
      commit("setIsClaimingNFT", false)
      commit("setError", `Connectt to the ${config.NETWORK.NAME} network to proceed.`)
      return
    }

    if (!state.contractState) {
      await dispatch("getContractState")

      if (!state.contractState) {
        commit("setIsClaimingNFT", false)
        commit("setError", "Sorry, something went wrong. Please try again later.")
        return
      }
    }

    if (state.contractState.user.allowedLeftToMint === 0) {
      commit("setIsClaimingNFT", false)
      commit("setError", "You have already minted the maximum of 10 parrots.")
      return
    }

    try {
      numberOfParrots = numberOfParrots > state.contractState.user.allowedLeftToMint ? state.contractState.user.allowedLeftToMint : numberOfParrots
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(state.contractAddress, MadParrotCrewABI.abi, signer) as MadParrotCrew
      const isMintActive = state.contractState!.isMintActive
      let tx: ContractTransaction | undefined = undefined

      if (isMintActive) {
        tx = await contract.mint(numberOfParrots, state.account!)
      } else {
        // If the user got here, something has gone wrong 🤔
        commit("setError", "Minting is not available yet.")
      }

      // Refresh contract state
      if (tx) {
        const receipt = await provider.waitForTransaction(tx.hash)
        if (receipt.status === 1) commit("setSuccessfulMint", numberOfParrots)
        else commit("setSuccessfulMint", null)
      }

      dispatch("getContractState")

      commit("setIsClaimingNFT", false)
    } catch (err) {
      console.error(err)
      // @ts-ignore
      console.log(err.reason)
      commit("setSuccessfulMint", null)
      // @ts-ignore
      if (err.reason.includes('insufficient funds')) commit("setError", "Error: insufficient funds")
      else commit("setError", "Sorry, something went wrong. Please try again later.")
      commit("setIsClaimingNFT", false)
    }
  }
}
