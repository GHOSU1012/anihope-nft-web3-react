import React from 'react';
import styled from 'styled-components'
import Footer from "./views/Footer"
import Righter from './views/Righter';
import NoticeAlert from './views/NoticeAlert';
import ConnectWallet from './views/ConnectWallet'

const Stddiv = styled.div`
  display: flex;
  flex-direction: row;
`
const StdImg = styled.img`
  width: 100%;
  height: 100%;
`
class App extends React.Component {
  render() {
    return (
      <>
        <Stddiv >
          <div style={{ width: '48%' }}>
            <div style={{ padding: '80px', color: 'white', fontSize: '30px', fontWeight: 'bold' }}>ANYHOPE</div>
            {/* <Leftdiv> */}
              <ConnectWallet />
            {/* </Leftdiv> */}
          </div>
          <div style={{ width: '52%' }}>
            <StdImg src="images/main.jpg" />
          </div>
        </Stddiv>
        <Righter />
        <Footer />
        <NoticeAlert />
      </>
    )
  }
};

export default App;