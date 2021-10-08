export interface ISocialLink {
  text: string;
  url: string;
  icon: string;
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
  ] as ISocialLink[]
})
