import config from '@/config.json'

export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
}
export interface IState {
  socialLinks: ISocialLink[];
  showTandCsModal: boolean;
}

export const state = () => ({
  socialLinks: [
    {
      text: 'Twitter',
      url: config.SOCIAL.TWITTER,
      icon: 'twitter'
    },
    // {
    //   text: 'OpenSea',
    //   url: config.OPENSEA_LINK,
    //   icon: 'opensea'
    // },
    // {
    //   text: 'Etherscan',
    //   url: config.SCAN_LINK,
    //   icon: 'etherscan'
    // }
  ],
  showTandCsModal: false
} as IState)

export const mutations = {
  setShowTandCsModal(state: IState, value: boolean): void {
    state.showTandCsModal = value
  }
}
