export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}

interface IState {
  socialLinks: ISocialLink[];
  account: null | Record<string, any>;
  connectionError: null | string
  
}

export const state = () => ({
  socialLinks: [
    {
      text: 'Discord',
      url: 'https://discord.com',
      icon: 'discord'
    },
    {
      text: 'Twitter',
      url: 'https://twitter.com',
      icon: 'twitter'
    },
    {
      text: 'OpenSea',
      url: 'https://opensea.io',
      icon: 'opensea'
    },
    {
      text: 'Etherscan',
      url: 'https://etherscan.io',
      icon: 'etherscan'
    },
    {
      text: 'Instagram',
      url: 'https://www.instagram.com',
      icon: 'instagram'
    }
  ],
  account: null,
  connectionError: null
} as IState)

export const mutations = {
  setAccount(state: IState, account: null | Record<string, any>): void {
    state.account = account
  },
  setConnectionError(state: IState, error: string): void {
    state.connectionError = error
  }
}

export const actions = {
  async connect({ commit, dispatch }: { commit: (mutation: string, value: any) => void, dispatch: (action: string) => any }): Promise<void> {
    try {
      const { ethereum } = window
      if (!ethereum) { // Is Metamask installed?
        commit("setConnectionError", "Metamask is not installed.")
        return
      }
      if (!(await dispatch("checkIfConnected"))) { // User has granted access to Metamask?
        await dispatch("requestAccess")
      }
      await dispatch("checkNetwork")
    } catch (error) {
      console.error(error)
      commit("setConnectionError", "Metamask account request refused.")
    }
  },
  async checkIfConnected({ commit }: { commit: (mutation: string, value: any) => void }) {
    const { ethereum } = window
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
