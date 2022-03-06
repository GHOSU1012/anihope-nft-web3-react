import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import MyBtn from '../components/MyBtn';
import SelectWalletModal from '../components/SelectWalletModal'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import useMetaMask from '../hooks/metamask';

// const opensea = () => {
//     <img src='images/digitalocean.png'></img>
// }
const WalletDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
//   justify-content: center;
//   margin-bottom: 80px;
`
const Addressdiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    gap: 12px;
    margin-bottom: 30px;
`
const Ntfcount = styled.input`
    width: 36px;
    height: 36px;
    border: 0;
    border-radius: 3px;
    background: #4a4a4a;
    align-items: center;
    text-align: center;
    font-size: 20px;
    color: white;
    outline: 0;
    margin: 20px;
`



// const ControlBtn = styled.button`
//     background: white;
//     color: black;
//     min-width: 30px;
//     border-radius: 15px;
//     height: 30px;
//     width: 30px;
// `

const title = {
    'connected': 'Conncted with Address',
    'notconnected': 'Connect your wallet'
}
const title2 = ['', '',
    'Choose the amount of NFTs you want to mint (Max 3)',
    'You already minted your AniHOPE NFTs',
    'You are not on the ANILIST. Please wait for the public mint.'
]

const btntitle = {
    'state1': 'Connect',
    'state2': 'Mint',
    'state3': 'View on Opensea'
}


// const walletInfo = {
//     'metamask':'',
//     'coinbase':'',
//     'walletcore':''
// }

const ConnectWallet = () => {
    const [state, setStateVal] = useState(1);
    const [nftNum, setNftNum] = useState(1);
    // const { connect, disconnect, isActive, account } = useMetaMask();
    const [modalOpen, setModalOpen] = useState(false);
    const [account, setAccount] = useState('');

    const connectMetamask = async () => {
        // handleClose();
        // Check if MetaMask is installed on user's browser
        if (window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
            const chainId = await window.ethereum.request({ method: 'eth_chainId' });

            console.log(accounts);
            console.log(chainId);
            // Check if user is connected to Mainnet
            if (chainId != '0x1') {
                alert("Please connect to Mainnet");
            }
            else {
                let wallet = accounts[0];
                console.log(wallet);
                setStateVal(2);
                setAccount(wallet);
                // setWalletAddress(wallet);
            }
        } else {
            alert("Please install Mask");
        }
    }

    const mainBtnClick = () => {
        if (state == 1) {
            console.log("connect wallet modal");
            setModalOpen(true);
        }
        else {

        }
    };

    const ReduceFunc = () => {
        setNftNum(nftNum > 1 ? nftNum - 1 : nftNum);
    }
    const AddFunc = () => {
        setNftNum(nftNum < 3 ? nftNum + 1 : nftNum);
    }

    return (
        <WalletDiv>
            <div style={{ fontSize: '22px', marginBottom: '16px' }}>
                {state != 1 ? title.connected : title.notconnected}
            </div>

            {state != 1 ?
                <Addressdiv>
                    <img src="images/metamask.png" width='30px' />
                    <div>{account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : ''}</div>
                </Addressdiv> : <></>
            }

            <div style={{ fontSize: '14px', marginBottom: '16px' }}>
                {title2[state]}
            </div>

            {state == 2 ?
                <div className="d-flex flex-row align-items-center" style={{ gap: '10px' }}>
                    <MyBtn type='reduce' onClick={ReduceFunc} />
                    <Ntfcount value={nftNum} readOnly />
                    <MyBtn type='add' onClick={AddFunc} ></MyBtn>
                </div> : <></>
            }
            <Button variant="contained" onClick={mainBtnClick}
                style={{
                    background: 'white', color: 'black', width: '260px',
                    height: '60px', display: state == 4 ? 'none' : 'block'
                }}>
                {state == 1 ?
                    btntitle.state1 :
                    state == 2 ?
                        btntitle.state2 :
                        <>
                            {btntitle.state3}
                            < img src='images/digitalocean.png' width='20px' height='20px' style={{ marginLeft: '10px' }} />
                        </>
                }
            </Button>

            <SelectWalletModal mOpen={modalOpen}
                setModalOpen={() => { setModalOpen(false) }}
                connectMetamask={connectMetamask} />
        </WalletDiv >
    );
};

export default ConnectWallet;