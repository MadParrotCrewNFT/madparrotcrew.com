import Web3 from "web3"
import config from '@/config.json'

export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}

interface IState {
  socialLinks: ISocialLink[];
  contractAddress: string;
  account: null | Record<string, any>;
  isConnectingToWallet: boolean;
  connectionError: null | string;
  
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
  connectionError: null
} as IState)

export const mutations = {
  setAccount(state: IState, account: null | Record<string, any>): void {
    state.account = account
  },
  setIsConnectingToWallet(state: IState, value: boolean): void {
    state.isConnectingToWallet = value
  },
  setConnectionError(state: IState, error: string): void {
    state.connectionError = error
  }
}

export const actions = {
  async connect({ commit, dispatch }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any }): Promise<void> {
    commit("setIsConnectingToWallet", true)
    try {
      const { ethereum } = window
      if (!ethereum) { // Is a wallet installed?
        commit("setConnectionError", "Wallet not installed.")
        return
      }
      if (!(await dispatch("checkIfConnected"))) { // User has granted access to wallet?
        await dispatch("requestAccess")
      }
    } catch (error) {
      console.error(error)
      commit("setConnectionError", "Wallet account request refused.")
    }
    commit("setIsConnectingToWallet", false)
  },
  async checkIfConnected({ commit }: { commit: (mutation: string, value: any) => void }) {
    const { ethereum } = window
    window.web3 = new Web3(ethereum)
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
  }
}
