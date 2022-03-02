import React from 'react';
import styled from 'styled-components'

const StdDiv = styled.div`
    position: fixed;    
    display: flex;
    top: 0;

    @media (orientation: landscape) {
        flex-direction: column;
        height: calc(100% - 70px);
        width: 100%;
        right: 0;
        align-items: center;
    }

    @media (orientation: portrait) {
        flex-direction: row;
        height: 70px;
        width: 100%;
        left: 0;
        justify-content: space-between;
    }
`
const RowDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 20px;
    // padding: 20px;
    // jsutify-content: between;
`
const Shadow = styled.div`
    background: red;
    position: fixed;
    width: 70px;
    height: 100%;
    z-index: -1;
    opacity: 0.5;
`
const RowDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 28px;
    justify-content: center;
    // align-items: center;
    flex: 1;
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