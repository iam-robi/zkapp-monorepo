export interface AccountState {
  chains: any;
  evmAddress: string;
  loading: Boolean;
  walletType?: SupportedWalletType | null;
  connected: any;
  provider: any;
  balance: any;
  session: any;
  transaction: any;
  minaAccounts: any;
  minaAddress: string | null;
  minaInstalled: Boolean;
  minaLoggedIn: Boolean;
}

export enum SupportedWalletType {
  Torus,
  Metamask,
}
