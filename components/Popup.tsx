/* eslint-disable @next/next/no-img-element */
import { useWeb3React } from '@web3-react/core';
import React, { FC, useEffect } from 'react';
import config from "../widgets/WalletModal/config";
import { connectorLocalStorageKey } from "../widgets/WalletModal/config";
import useAuth from '../hooks/useAuth';
import Icon from '../widgets/WalletModal/icons/MathWallet';

interface PopUpProps {
    popOff: Function

}

const Popup = ({ popOff }: PopUpProps): JSX.Element => {

    let isAccountActive: boolean;
    let activeAccount: string | null | undefined;
    // const { title, icon: Icon } = walletConfig;
    // const walletConfigf = config[0]; // MetaMask Wallet Configuration
    // console.log(walletConfig)


    const { login, logout } = useAuth();

    const { active, account, library, connector, activate, deactivate } = useWeb3React();

    isAccountActive = active;
    activeAccount = account;


    // async function connect(): Promise<void> {
    //     try {
    //         await activate(injected);
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    //     popOff(false);
    // }

    // async function disconnect(): Promise<void> {
    //     try {
    //         deactivate();
    //     } catch (ex) {
    //         console.log(ex);
    //     }
    // }

    return (
        <div className='backdrop'>

            {/* Checking if the User Logged in Account is Retrived =>  */}
            {/* {isAccountActive ? <button onClick={disconnect}><span>Connected with <b> {activeAccount} </b></span> </button> : <span>Not connected</span>} */}

            <div className='pop' >
                <h1>CONNECT WALLET</h1>
                <br />

                <div>
                {config.map((entry, index) => (
                    <div key={index} className='walletContainer' onClick={() => {

                        console.log(entry, "ma ya connected ma xu hai");

                        login(entry.connectorId);
                        window.localStorage.setItem(
                            connectorLocalStorageKey,
                            entry.connectorId
                        );
                        localStorage.setItem('isWalletConnected', 'true');

                        popOff();
                    }}>
                        <entry.icon width="40px"/>
                        <p>{entry.title}</p>
                    </div>
     )
     )}

                    {/* Coinbase */}
                    {/* <div className='walletContainer'>
                        <img src="assets/images/icons/coinbase_2.png" alt="Coinbase" />
                        <p>Coinbase</p>
                    </div> */}
                    {/* Binance */}
                    {/* <div className='walletContainer'>
                        <img src="assets/images/icons/binance.png" alt="Binance" />
                        <p>Binance</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Popup