import React from 'react';
import styled from 'styled-components'

const StdDiv = styled.div`
    // background: #000;
    // background-opacity: 0.2;
    height: calc(100% - 70px);
    // min-height: 20px;
    // color: white;
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    align-items: center;
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
    background: #000;
    position: fixed;
    width: 70px;
    height: 100%;
    z-index: -1;
    opacity: 0.1;
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