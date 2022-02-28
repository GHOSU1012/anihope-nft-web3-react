import React from 'react';
import styled from 'styled-components'
import Footer from "./views/Footer"

const Stddiv = styled.div`
  display: flex;
  flex-direction: row;
`
const Leftdiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: 48%;
  justify-content: center;
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
          <Leftdiv>
            Connected with address
          </Leftdiv>
          <div style={{ width: '52%' }}>
            <StdImg src="images/main.jpg" />
          </div>
        </Stddiv>
        <Footer />
      </>
    )
  }
};

export default App;