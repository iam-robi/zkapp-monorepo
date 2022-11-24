export interface AccountState {
    address: string
    email: string
    loading: Boolean
    walletType?: SupportedWalletType | null
    connected: any
    provider: any
    userInfo: any
    balance: any
    nfts: []
}

export enum SupportedWalletType {
    Torus,
    Metamask
}