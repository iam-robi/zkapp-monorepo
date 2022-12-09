const networkConfig = {
  chainId1: {
    currencyName: 'ETH',
    networkName: 'Ethereum Mainnet',
    explorer: 'https://etherscan.io/',
    rpcUrls: {
      Main: {
        name: 'Main',
        // removed for privacy concerns url: 'https://rpc.ankr.com/eth',
        url: 'https://eth-rpc.gateway.pokt.network',
      },
      Figment: {
        name: 'Figment',
        url: 'https://avalanche--mainnet--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc',
      },
    },
  },
  chainId43114: {
    currencyName: 'AVAX',
    networkName: 'Cchain',
    explorer: 'https://snowtrace.io/',
    rpcUrls: {
      Main: {
        name: 'Main',
        url: 'https://api.avax.network/ext/bc/C/rpc',
      },
      Figment: {
        name: 'Figment',
        url: 'https://avalanche--mainnet--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc',
      },
    },
  },
  chainId137: {
    currencyName: 'MATIC',
    networkName: 'Polygon Mainnet',
    explorer: 'https://polygonscan.com/',
    rpcUrls: {
      Main: {
        name: 'Main',
        url: 'https://polygon-rpc.com',
      },
      Figment: {
        name: 'Figment',
        url: 'https://avalanche--fuji--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc',
      },
    },
  },
};

export default networkConfig;
