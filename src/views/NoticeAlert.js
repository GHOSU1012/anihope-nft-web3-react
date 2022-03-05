import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'

const StdDiv = styled.div`
  color: white;
  background: #8ab273;
  padding: 0;
  width: 100%;
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 12;
  
  @media (orientation: landscape) {
    font-size: 14px;
    padding: 4px;
    top: 0;
    display: block;
  }
  
  @media (orientation: portrait) {
    font-size: 12px;
    padding: 8px;
    bottom: 0;
    padding-left: 30px;
    // padding-right: 30px;
    // display: none !important;
  }
`
const StdNotice = styled.div`
  border-radius: 3px;
  width: 56px;
  height: 20px;
  background: #b95455;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 10px;

  @media (orientation: portrait) {
    // bottom: 0;
    display: none !important;
  }
`
const StdIconBtn = styled(IconButton)`
  @media (orientation: landscape) {
  }

  @media (orientation: portrait) {
  }
`

export default function NoticeAlert() {
  const [open, setOpen] = React.useState(true);

  return (
    <div>
      <Collapse in={open}>
        <StdDiv>
          {/* <div style={{ paddingLeft: '50px' }}> */}
          <StdNotice>
            Notice
          </StdNotice>
          {/* </div> */}
          <div style={{ textAlign: 'center' }}>
            We do <span style={{ fontWeight: 'bold' }}>NOT</span> have a scheduled mint date yet, Always make sure you are on the right link to avoid fake websites and scams.
          </div>
          <StdIconBtn aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }}>
            <CloseIcon fontSize="inherit" />
          </StdIconBtn>
        </StdDiv>
      </Collapse>
    </div >
  );
}
// sx={{ right: '0', top: '10px', position: 'fixed' }}