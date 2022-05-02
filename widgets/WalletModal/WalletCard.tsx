import React from "react";
import { connectorLocalStorageKey } from "./config";

const WalletCard = ({ login, walletConfig, onDismiss } : {login: Function,walletConfig: any, onDismiss: Function}) => {
  const { title, icon: Icon} = walletConfig;

  return (
    <div>
      <button
        onClick={() => {
          login(walletConfig.connectorId);
          window.localStorage.setItem(
            connectorLocalStorageKey,
            walletConfig.connectorId
          );
          onDismiss();
        }}
        className="walletcard-button"
        id={`wallet-connect-${title.toLocaleLowerCase()}`}
      >
        <Icon width="40px"/>
        <span className="walletcard-name">{title}</span>
      </button>
    </div>
  );
};

export default WalletCard;