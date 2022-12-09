import { SignedOwnershipData } from "~/types/oracle/graphql";

export interface AccountState {
  evmAddress: string;
  loading: Boolean;
  walletType?: SupportedWalletType | null;
  connected: any;
  provider: any;
  userInfo: any;
  balance: any;
  ownershipData: SignedOwnershipData | null;
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
