import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: '24',
    p: '20px',
    // textAlign: 'center'
};

const BtnStyle = {
    color: 'black',
    fontSize: '16px',
    padding: '16px',
    width: '260px',
    borderRadius: '10px',
    justifyContent: 'left',
    paddingLeft: '30px',
    gap: '20px'
}

const SelectWalletModal = (props) => {
    const { mOpen, setModalOpen, connectMetamask } = props;
    return (
        <Modal open={mOpen} onClose={setModalOpen}>
            <Box sx={ModalStyle}>
                <Button variant="text" sx={BtnStyle} onClick={connectMetamask}>
                    <img src='images/metamask.png' width='50px' />
                    <div>Metamask</div>
                </Button>
                <Divider />
                <Button variant="text" sx={BtnStyle}>
                    <img src='images/walletconnect.png' width='50px' />
                    <div>WalletConnect</div>
                </Button>
                <Divider />
                <Button variant="text" sx={BtnStyle}>
                    <img src='images/coinbase.png' width='50px' />
                    <div>Coinbase</div>
                </Button>
            </Box>
        </Modal>
    );
}

export default SelectWalletModal;