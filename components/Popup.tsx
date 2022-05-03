/* eslint-disable @next/next/no-img-element */
import { useWeb3React } from '@web3-react/core';
import React, { FC, useEffect } from 'react';
import config from "../widgets/WalletModal/config";
import { connectorLocalStorageKey } from "../widgets/WalletModal/config";
import useAuth from '../hooks/useAuth';

interface PopUpProps {
    popOff: Function

}

const Popup = ({ popOff }: PopUpProps): JSX.Element => {

    // const { title, icon: Icon } = walletConfig;
    // const walletConfigf = config[0]; // MetaMask Wallet Configuration
    // console.log(walletConfig)

    const { login, logout } = useAuth();
    const { active, account, library, connector, activate, deactivate } = useWeb3React();


    return (
        <div className='backdrop'>
            <div className='pop' >
                <h1>CONNECT WALLET</h1>
                <br />
                <div>
                    {config.map((walletConfig, index) => (

                        <div key={index} className='walletContainer' onClick={() => {

                            console.log(walletConfig, "ma ya connected ma xu hai");

                            login(walletConfig.connectorId);
                            window.localStorage.setItem(
                                connectorLocalStorageKey,
                                walletConfig.connectorId
                            );
                            localStorage.setItem('isWalletConnected', 'true');

                            popOff();
                        }}>

                            <walletConfig.icon width="40px" />
                            <p>{walletConfig.title}</p>

                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Popup