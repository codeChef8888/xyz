/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react'

interface PopupProps {
    handleClick: Function
    connectMeta: Function
}

const Popup = ({ handleClick}: { handleClick? : React.MouseEventHandler}): JSX.Element => {
    return (
        <div className='backdrop' onClick={handleClick}>
            <div className='pop'>
                <h1>CONNECT WALLET</h1>
                <br />
                <div>
                    {/* Metamask */}    
                    <div className='walletContainer'>
                        <img src="assets/images/icons/meta-mask.png" alt="MetaMask" />
                        <p>Metamask</p>
                    </div>  
                    {/* Coinbase */}
                    <div className='walletContainer'>
                        <img src="assets/images/icons/coinbase.png" alt="Coinbase" />
                        <p>Coinbase</p>
                    </div>  
                    {/* Binance */}
                    <div className='walletContainer'>
                        <img src="assets/images/icons/binance.png" alt="Binance" />
                        <p>Binance</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Popup