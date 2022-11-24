const networkConfig = {
    chainId1: {
        currencyName: 'ETH',
        networkName: 'Ethereum Mainnet',
        rpcUrls: {
            Main: {
                name: 'Main',
                url: 'https://rpc.ankr.com/eth',
            },
            Figment: {
                name: 'Figment',
                url: 'https://avalanche--mainnet--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc'
            },
        }
    },
    chainId43114: {
        currencyName: 'AVAX',
        networkName: 'Cchain',
        rpcUrls: {
            Main: {
                name: 'Main',
                url: 'https://api.avax.network/ext/bc/C/rpc',
            },
            Figment: {
                name: 'Figment',
                url: 'https://avalanche--mainnet--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc'
            },
        }
    },
    chainId137: {
        currencyName: 'MATIC',
        networkName: 'Polygon Mainnet',
        rpcUrls: {
            Main: {
                name: 'Main',
                url: 'https://polygon-rpc.com',
            },
            Figment: {
                name: 'Figment',
                url: 'https://avalanche--fuji--rpc.datahub.figment.io/apikey/edb2682adf9c3befbc6ad1ddc18bed45/ext/bc/C/rpc'
            },
        }
    },
}

export default networkConfig