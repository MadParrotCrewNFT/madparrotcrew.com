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
  setConnectionError(state: IState, error: string | null): void {
    state.connectionError = error
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
      commit("setConnectionError", null)
    } catch (err) {
      console.error(err)
      commit("setConnectionError", `Connect to the ${config.NETWORK.NAME} network to proceed.`)
    }
  }
}
