import React, { useState } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';

import { useState, useEffect } from 'react';
import { injected } from '../components/wallet/connectors';
import useMetaMask from '../hooks/metamask';

// const opensea = () => {
//     <img src='images/digitalocean.png'></img>
// }
const WalletDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;
`
const Addressdiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    gap: 12px;
    margin-bottom: 30px;
`

const title = {
    'connected': 'Conncted with Address',
    'notconnected': 'Connect your wallet'
}
const title2 = {
    'state2': 'Choose the amount of NFTs you want to mint (Max 3)',
    'state3': 'You already minted your AniHOPE NFTs',
    'state4': 'You are not on the ANILIST. Please wait for the public mint.'
}
const btntitle = {
    'state1': 'Connect',
    'state2': 'Mint',
    'state3': 'View on Opensesa'
}

// const walletInfo = {
//     'metamask':'',
//     'coinbase':'',
//     'walletcore':''
// }

const ConnectWallet = () => {
    const { connect, disconnect, isActive, account } = useMetaMask();
    const [state, setOpen] = useState(3);

    // const buttonClickF = async () => {
    //     console.log(state);

    //     // const connectWallet = async () => {
    //     // Check if MetaMask is installed on user's browser
    //     if (window.ethereum) {
    //         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    //         const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    //         console.log('success');

    //         if (chainId != '0x1') {
    //             alert("Please connect to Mainnet");
    //         } else {
    //             let wallet = accounts[0];
    //             // setWalletAddress(wallet);
    //             console.log(wallet);
    //         }
    //     } else {
    //         console.log('fail');
    //         // Show alert if Ethereum provider is not detected
    //         alert("Please install Mask");
    //     }
    //     // }
    //     // history.pushState('/home');
    // }

    return (
        <WalletDiv>
            <div style={{ fontSize: '22px', marginBottom: '16px' }}>
                {state == 1 ? title.notconnected : title.connected}
            </div>

            {state > 1 ?
                <Addressdiv>
                    <img src="images/metamask.png" width='30px' />
                    <div>{account}</div>
                </Addressdiv> : <></>
            }

            <div style={{ fontSize: '14px', marginBottom: '16px' }}>
                {state == 2 ? title2.state2 :
                    state == 3 ? title2.state3 :
                        state == 4 ? title2.state4 : ''}
            </div>

            <Button variant="contained" onClick={connect} style={{
                background: 'white', color: 'black', width: '260px',
                height: '60px', display: state == 4 ? 'none' : 'block'
            }}>
                {state == 1 ?
                    btntitle.state1 :
                    state == 2 ?
                        btntitle.state2 :
                        <>
                            {btntitle.state3}
                            < img src='images/digitalocean.png' width='20px' height='20px' style={{ marginLeft: '10px' }}></img>
                        </>
                }
            </Button>
        </WalletDiv >
    );
};

export default ConnectWallet;