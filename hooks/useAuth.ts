import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoBscProviderError } from "@binance-chain/bsc-connector";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { toast } from "react-toastify";
import { connectorLocalStorageKey } from "../widgets/WalletModal/config";
import { connectorsByName } from "../libs/web3React";
import { setupNetwork } from "../libs/wallet";

const useAuth = () => {

  const { chainId, account, activate, deactivate, setError } = useWeb3React();


  const notifyError = useCallback((message: any) =>
    toast.error(message, {
      position: "top-left",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    }), [])

  const login = useCallback(
    (connectorID): void => {
      console.log("ma login ma pasey hai");
      const connector = connectorsByName[connectorID];
      if (connector) {
        activate(connector, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              console.log("ma activated bhaisakeyhai!!!")
              activate(connector,(err) => console.log(err));
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError ||
              error instanceof NoBscProviderError
            ) {
              notifyError("No provider was found");
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector;
                walletConnector.walletConnectProvider = undefined;
              }
              notifyError("Please authorize to access your account");
            } else {
              notifyError(error.message);
            }
          }
        });
      } else {
        notifyError("The connector config is wrong");
      }
    },
    [activate, notifyError]
  );

  const logout = useCallback(() => {
    deactivate();
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem("walletconnect")) {
      connectorsByName.walletconnect.deactivate();
      var walletConnectionProvider = connectorsByName.walletconnect.getProvider();
      walletConnectionProvider.then((walletConnectionProvider) => walletConnectionProvider = null).catch((err) => { console.log(err) })
    }
    window.localStorage.removeItem(connectorLocalStorageKey);
  }, [deactivate]);

  return { login, logout };
};


export default useAuth;