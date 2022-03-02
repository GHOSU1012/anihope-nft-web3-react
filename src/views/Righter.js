import React from 'react';
import styled from 'styled-components'

const StdDiv = styled.div`
    position: fixed;    
    display: flex;
    top: 0;

    @media (orientation: landscape) {
        flex-direction: column;
        height: calc(100% - 70px);
        right: 0;
    }
    
    @media (orientation: portrait) {
        flex-direction: row;
        width: 100%;
        left: 0;
    }
    align-items: center;
    justify-content: space-between;
`
const RowDiv = styled.div`
    display: flex;
    flex-direction: column;
    @media (orientation: portrait) {
        flex-direction: row !important;
        // justify-content: center;
    }
    gap: 20px;
    padding-top: 20px;
`
const RowDiv2 = styled.div`
    display: flex;
    padding: 20px;
    gap: 28px;
    
    // flex-direction: column;
    
    @media (orientation: landscape) {
        flex-direction: column;
        // justify-content: center;
    }
    @media (orientation: portrait) {
        flex-direction: row;
        // justify-content: center;
    }
    justify-content: center;
    flex: 1;
`

const Shadow = styled.div`
    background: #000;
    position: fixed;
    @media (orientation: landscape) {
        width: 70px;
        height: 100%;
    }
    @media (orientation: portrait) {
        height: 70px;
        width: 100%;
    }
    z-index: -1;
    opacity: 0.1;
`

const Button = styled.button`
    background-image: ${props => props.img};
    width: 30px;
    height: 30px;
    background-size: contain;
    background-color: transparent;
    border: none;
`

// const Responsive = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
// `

class Righter extends React.Component {
    render() {
        return (
            <StdDiv>
                <Shadow />
                <RowDiv>
                    <Button img="url('images/twitter.png')"></Button>
                    <Button img="url('images/instagram.png')"></Button>
                </RowDiv>
                <RowDiv2>
                    <Button img="url('images/discord.png')"></Button>
                    <Button img="url('images/twitter.png')"></Button>
                    <Button img="url('images/instagram.png')"></Button>
                </RowDiv2>
            </StdDiv>
        )
    }
};

export default Righter;