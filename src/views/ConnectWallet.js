import React from 'react';
import styled from 'styled-components'
import Button from '@mui/material/Button';

const WalletDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  justify-content: center;
`

class ConnectWallet extends React.Component {
    render() {
        return (
            <WalletDiv>
                <div style={{ fontSize: '22px', marginBottom: '16px' }}>
                    Connecte your wallet
                </div>
                <Button variant="contained" style={{ background: 'white', color: 'black', width: '260px', height: '60px' }}>
                    Connect
                </Button>
            </WalletDiv>
        )
    }
};

export default ConnectWallet;