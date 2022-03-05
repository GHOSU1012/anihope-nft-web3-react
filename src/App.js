import React from 'react';
import styled from 'styled-components'
import Footer from "./views/Footer"
import Righter from './views/Righter';
import NoticeAlert from './views/NoticeAlert';
import ConnectWallet from './views/ConnectWallet'
import Try from './views/Try';
// import Grid from '@material-ui/core/Grid';

const Stddiv = styled.div`
  display: flex;

  @media (orientation: landscape) {
    flex-direction: row;
  }
  @media (orientation: portrait) {
    flex-direction: column-reverse;
    align-items: center;
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
    max-width: 500px;
    width: 80%;
    // height: calc(100vw * 0.88);
    // order: 1;
  }
`
const Branddiv = styled.div`
  color: white;
  font-weight: bold;
  
  @media (orientation: landscape) {
    position: fixed;
    font-size: 30px;
    top: 70px;
    left: 50px;
  }
  @media (orientation: portrait) {
    font-size: 30px;
    // top: calc(100vw * 0.88 - 50px);
    margin-top: 100px;
    margin-bottom: 30px;
    order: 1;
    // right: 20px;
    // text-align: center;
  }
`

const StdImg = styled.img`
  width: 100%;
  height: 100%;
  alt: mainImage;

  @media (orientation: portrait) {
    border-radius: 20px;
  }
`

class App extends React.Component {
  render() {
    return (
      <>
        <Stddiv >
          <Branddiv>ANIHOPE</Branddiv>
          <CWdiv>
            <ConnectWallet />
          </CWdiv>
          <MImgdiv>
            <StdImg src="images/main.jpg" />
          </MImgdiv>
        </Stddiv>
        {/* <Try /> */}
        {/* <Footer /> */}
        <NoticeAlert />
      </>
    )
  }
};

export default App;