import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';
import MyBtn from '../components/MyBtn';


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
    const [state, setOpen] = useState(1);
    const [nftNum, setNftNum] = useState(1);
    const { connect, disconnect, isActive, account } = useMetaMask();

    useEffect(() => {
        if (isActive)
            setOpen(2);
        else
            setOpen(1);
    });

    const ReduceFunc = () => {
        setNftNum(nftNum > 1 ? nftNum - 1 : nftNum);
    }
    const AddFunc = () => {
        setNftNum(nftNum < 3 ? nftNum + 1 : nftNum);
    }

    return (
        <WalletDiv>
            <div style={{ fontSize: '22px', marginBottom: '16px' }}>
                {isActive ? title.connected : title.notconnected}
            </div>

            {isActive ?
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
            <Button variant="contained" onClick={connect}
                style={{
                    background: 'white', color: 'black', width: '260px',
                    height: '60px', display: state == 4 ? 'none' : 'block',
                    marginBottom: '50px'
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
        </WalletDiv >
    );
};

export default ConnectWallet;