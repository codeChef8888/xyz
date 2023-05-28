import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { ConnectorNames } from "../widgets/WalletModal/types";
import { ethers } from "ethers";
import getRpcUrl from "./getRpcUrl";

const rpcUrl: string = getRpcUrl();
const chainId = parseInt(process.env.NEXT_PUBLIC_CHAIN_ID as string, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
});

const bscConnector = new BscConnector({ supportedChainIds: [chainId] });

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  [ConnectorNames.BSC]: bscConnector,
};

//Getting The Library Provider To Connect To A Wallet...
const POLLING_INTERVAL = 12000;

export const getLibrary = (provider: any) => {
  // const library = new Web3(provider);
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};


/**
 * BSC Wallet requires a different sign method
 * @see https://docs.binance.org/smart-chain/wallet/wallet_api.html#binancechainbnbsignaddress-string-message-string-promisepublickey-string-signature-string
 */
export const signMessage = async (
  provider: any,
  account: string,
  message: any
) => {
  if (window.BinanceChain) {
    const binanceChain: any = window.BinanceChain;
    const { signature } = await binanceChain.bnbSign(account, message);
    return signature;
  }

  /**
   * Wallet Connect does not sign the message correctly unless you use their method
   * @see https://github.com/WalletConnect/walletconnect-monorepo/issues/462
   */
  if (provider.provider?.wc) {
    const wcMessage = ethers.utils.hexlify(ethers.utils.toUtf8Bytes(message));
    const signature = await provider.provider?.wc.signPersonalMessage([
      wcMessage,
      account,
    ]);
    return signature;
  }

  return provider.getSigner(account).signMessage(message);
};
