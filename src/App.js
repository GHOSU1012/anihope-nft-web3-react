import React from 'react';
import styled from 'styled-components'
import Footer from "./views/Footer"
import Righter from './views/Righter';
import NoticeAlert from './views/NoticeAlert';
import ConnectWallet from './views/ConnectWallet'
// import Grid from '@material-ui/core/Grid';

const Stddiv = styled.div`
  display: flex;

  @media (orientation: landscape) {
    flex-direction: row;
  }
  @media (orientation: portrait) {
    flex-direction: column-reverse;
  }
}
`
const CWdiv = styled.div`
padding-top: 18%;
  @media (orientation: landscape) {
    width: 48%;
    // order: 1;
  }
  @media (orientation: portrait) {
    width: 100%;
    height: 58%;
    // order: 2;
  }
`
const MImgdiv = styled.div`
  @media (orientation: landscape) {
    width: 52%;
    height: 100vh;
    // order: 2;
  }
  @media (orientation: portrait) {
    width: 100%;
    height: calc(100vw * 0.88);
    // order: 1;
  }
`
const Branddiv = styled.div`
  color: white;
  font-weight: bold;
  position: fixed;
  
  @media (orientation: landscape) {
    font-size: 30px;
    top: 70px;
    left: 50px;
  }
  @media (orientation: portrait) {
    font-size: 30px;
    top: calc(100vw * 0.88 - 50px);
    right: 20px;
  }
`

const StdImg = styled.img`
  width: 100%;
  height: 100%;
  alt: mainImage;
`

class App extends React.Component {
  render() {
    return (
      <>
        <Stddiv >
          <Branddiv>ANYHOPE</Branddiv>
          <CWdiv>
            <ConnectWallet />
          </CWdiv>
          <MImgdiv>
            <StdImg src="images/main.jpg" />
          </MImgdiv>
        </Stddiv>
        <Righter />
        <Footer />
        <NoticeAlert />
      </>
    )
  }
};

export default App;