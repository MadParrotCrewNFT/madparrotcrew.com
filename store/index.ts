import { ethers } from 'ethers'
import axios, { AxiosResponse } from 'axios'
import config from '@/config.json'
import MadParrotCrewABI from '@/contract/abi/MadParrotCrew.json'
import { MadParrotCrew } from '@/contract/types'

export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}
export interface IContractState {
  isPublicMintActive: boolean;
  isWhitelistMintActive: boolean;
  isAnyMintActive: boolean;
  priceInWei: ethers.BigNumber;
  maxSupply: number;
  numberMinted: number;
  supplyLeft: number;
  maxMintPerWallet: number;
}
interface IUserContractState {
  isWhitelisted: boolean;
  merkleProof: string[];
  alreadyMinted: number;
  maxAllowedToMint: number;
}
export interface IState {
  socialLinks: ISocialLink[];
  contractAddress: string;
  account: null | string;
  isConnectingToWallet: boolean;
  connectionError: null | string;
  contractState: null | IContractState;
  userContractState: null | IUserContractState;
  isClaimingNFT: boolean;
  successfulMint: null | number;
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
          url: config.OPENSEA_LINK,
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
  successfulMint: null
} as IState)

export const mutations = {
  setAccount(state: IState, account: null | string): void {
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
  setSuccessfulMint(state: IState, value: number): void {
    state.successfulMint = value
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
      await dispatch('getContractState')
      await dispatch('getUserContractState')
    } catch (error) {
      console.error(error)
      commit("setConnectionError", "Wallet account request refused.")
    }
    commit("setIsConnectingToWallet", false)
  },
  async checkIfConnected({ commit, dispatch }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any }) {
    if (!(await dispatch("isAWalletInstalled"))) return false
    const { ethereum } = window
    window.web3Provider = new ethers.providers.Web3Provider(ethereum)
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
  async getContractState({ commit, state }: { commit: (mutation: string, value: any) => void, state: IState }): Promise <void> {
    try {
      const contract = new ethers.Contract(state.contractAddress, MadParrotCrewABI, window.web3Provider) as MadParrotCrew
      const maxSupply = parseInt(await(await contract.functions.maxSupply())[0]._hex, 16)
      const numberMinted = parseInt(await (await contract.totalSupply())._hex, 16)
      const isPublicMintActive = config.MINTING_LIVE && await (await contract.functions.publicSaleActive())[0]
      const isWhitelistMintActive = config.MINTING_LIVE && await (await contract.functions.whitelistSaleActive())[0]
      const maxMintPerWallet = parseInt(await (await contract.MAX_PER_TX())._hex, 16) - 1 // The contract sets this value to 1 higher than the actual max mint allowance since this results in a cheaper gas cost
      const contractState: IContractState = {
        isPublicMintActive,
        isWhitelistMintActive,
        isAnyMintActive: isPublicMintActive || isWhitelistMintActive,
        priceInWei: await contract.priceInWei(),
        maxSupply, // Max supply will only be 10000 at the end of stage 4 since they are releasing the parrots in stages
        numberMinted,
        supplyLeft: maxSupply - numberMinted,
        maxMintPerWallet
      }
      commit("setContractState", contractState)
    } catch (err) {
      console.error(err)
      commit("setConnectionError", "Sorry, something went wrong. Please try again later.")
    }
  },
  async getUserContractState({ commit, state }: { commit: (mutation: string, value: any) => void, state: IState }): Promise <void> {
    try {
      const contract = new ethers.Contract(state.contractAddress, MadParrotCrewABI, window.web3Provider) as MadParrotCrew
      const maxMintPerWallet = parseInt(await (await contract.MAX_PER_TX())._hex, 16) - 1 // The contract sets this value to 1 higher than the actual max mint allowance since this results in a cheaper gas cost
      const alreadyMinted = parseInt(await (await contract.functions.addressToMinted(state.account!))[0]._hex, 16)

      // Go get the merkle proof from the backend so you can show them ahead of time if they're whitelisted
      const response = await axios.get<any, AxiosResponse<string[], any>, any>(`https://ab6jo7e1v4.execute-api.us-east-2.amazonaws.com/MPCproof/${state.account}`)
      const merkleProof = response.data // If this array is empty, they are not a whitelisted user
      const userContractState: IUserContractState = {
        isWhitelisted: merkleProof.length > 0,
        merkleProof,
        alreadyMinted,
        maxAllowedToMint: maxMintPerWallet - alreadyMinted
      }
      commit("setUserContractState", userContractState)
    } catch (err) {
      console.error(err)
      commit("setConnectionError", "Sorry, something went wrong checking if you're a whitelisted user.")
    }
  },
  async mintParrots({ commit, dispatch, state }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any, state: IState }, numberOfParrots: number): Promise <void> {
    if (!(await dispatch("isCorrectNetwork"))) return
    if (!state.contractState) await dispatch("getContractState")
    if (!state.userContractState) await dispatch("getUserContractState")
    try {
      numberOfParrots = numberOfParrots > state.userContractState!.maxAllowedToMint ? state.userContractState!.maxAllowedToMint : numberOfParrots
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(state.contractAddress, MadParrotCrewABI, signer) as MadParrotCrew
      const isPublicMintActive = state.contractState!.isPublicMintActive
      const isWhitelistMintActive = state.contractState!.isWhitelistMintActive && !isPublicMintActive // Public mint supersedes all
      if (isWhitelistMintActive && state.userContractState!.isWhitelisted) {
        await contract.whitelistMint(numberOfParrots, state.userContractState!.merkleProof, {
          value: state.contractState!.priceInWei.mul(numberOfParrots),
        }) 
      } else if (isPublicMintActive) {
        await contract.publicMint(numberOfParrots, {
          value: state.contractState!.priceInWei.mul(numberOfParrots),
        })
      } else {
        // If the user got here, something has gone wrong 🤔
      }

      // Refresh contract state
      commit("setSuccessfulMint", numberOfParrots)
      dispatch("getContractState")
      dispatch("getUserContractState")
    } catch (err) {
      console.error(err)
      // @ts-ignore
      console.log(err.reason)
      // @ts-ignore
      if (err.reason.includes('insufficient funds')) commit("setConnectionError", "Error: insufficient funds")
      else commit("setConnectionError", "Sorry, something went wrong. Please try again later.")
    }
  }
}
