/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faCopy } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import { useWeb3React } from "@web3-react/core";
import { Modal } from "react-responsive-modal";
import formatAddress from "../libs/formatAddress";
import "react-responsive-modal/styles.css";

const CONNECT_MSG = "Connect";
interface PopupProps {
  popOn: React.MouseEventHandler<HTMLButtonElement>;
}

const ConnectWalletButton = ({ popOn }: PopupProps) => {
  const { login, logout } = useAuth();
  const { active, account } = useWeb3React();

  const [accountModalIsOpen, setAccountModalIsOpen] = useState(false);

  function openAccountModal() {
    setAccountModalIsOpen(true);
  }

  function closeAccountModal() {
    setAccountModalIsOpen(false);
  }

  const logoutWithClose = (e: any): void => {
    e.preventDefault();

    // logout after 1 secs
    setTimeout((): void => logout(), 500);
    localStorage.setItem("isWalletConnected", "false");
    closeAccountModal();
  };

  const notifyCopied = (): React.ReactText =>
    toast.success("Copied to clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
    });

  const copyAddress = (e: any, address: string): void => {
    e.preventDefault();
    navigator.clipboard.writeText(address);
    notifyCopied();
  };

  return (
    <div>
      <button
        type="button"
        className="readon white-btn hover-shape"
        // data-bs-toggle="modal"
        // data-bs-target="#exampleModal"
        onClick={account ? openAccountModal : popOn}
      >
        <img src="assets/images/icons/connect_white.png" alt="Icon" />
        <span className="btn-text">
          {" "}
          {active ? (
            <span>{formatAddress(account as string)}</span>
          ) : (
            CONNECT_MSG
          )}{" "}
        </span>
        <span className="hover-shape1"></span>
        <span className="hover-shape2"></span>
        <span className="hover-shape3"></span>
      </button>

      {/* After Account is Connected Modal*/}

      <Modal
        open={accountModalIsOpen}
        onClose={closeAccountModal}
        showCloseIcon={false}
        blockScroll={true}
        classNames={{
          overlay: "accountModalOverlay",
          modal: "accountModal",
        }}
        center
      >
        <div className="wallet-header">
          <span className="text">Your Wallet</span>
          <button className="close-button" onClick={closeAccountModal}>
            <img src="/assets/images/cross.png" alt="cross image" />
          </button>
        </div>

        <div className="accountWalletCardDiv">
          <span className="account">{account}</span>
          <div className="account-detail">
            <a
              target="_blank"
              rel="noreferrer noopener"
              href={`https://bscscan.com/address/${account}`}
              className="viewbsc"
            >
              <span>View on BSC</span>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
            <div
              className="copyAddress"
              onClick={(e) => copyAddress(e, account as string)}
            >
              <span>Copy Address</span>
              <FontAwesomeIcon icon={faCopy} />
            </div>
          </div>
          <div className="logoutwallet">
            <button className="logout-button" onClick={logoutWithClose}>
              Logout
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ConnectWalletButton;
