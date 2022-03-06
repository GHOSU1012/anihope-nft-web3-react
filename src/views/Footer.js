import React from 'react';
import styled from 'styled-components'

const StdDiv = styled.div`
    background: #000;
    width: 100%;
    min-height: 20px;
    color: white;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: 12;

    @media (orientation: portrait) {
        display: none;
    }
`
const RowDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding-right: 60px;
    // jsutify-content: between;
`
const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 10px;
    padding: 20px;
    padding-left: 40px;
`
const Button = styled.button`
    background-image: ${props => props.img};
    width: 30px;
    height: 30px;
    background-size: contain;
    background-color: transparent;
    border: none;
`
const StyledA = styled.a`
    transition: transform 0.3s;
    :hover{
        transform: translateY(-7px);
    }
`

class Footer extends React.Component {
    render() {
        return (
            <StdDiv>
                <ColumnDiv>
                    TERMS & CONTIDIONS <br /> PRIVACY POLICY <br /> © 2022 ANIHOPE
                </ColumnDiv>
                <RowDiv>
                    <StyledA href="#">
                        <img src="/images/icons/discord.svg" alt="Discord" />
                    </StyledA>
                    <StyledA href="#">
                        <img src="/images/icons/twitter.svg" alt="Twitter" />
                    </StyledA>
                    <StyledA href="#">
                        <img src="/images/icons/instagram.svg" alt="Instagram" />
                    </StyledA>
                </RowDiv>
            </StdDiv>
        )
    }
};

export default Footer;