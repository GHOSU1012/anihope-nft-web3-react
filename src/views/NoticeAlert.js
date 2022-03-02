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
  padding: 4px;
  font-size: 14px;

  @media (orientation: landscape) {
    display: block;
  }

  @media (orientation: portrait) {
    display: none !important;
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
`

export default function NoticeAlert() {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%', position: 'fixed', top: '0' }}>
      <Collapse in={open}>
        <StdDiv>
          <div style={{ paddingLeft: '50px' }}>
            <StdNotice> Notice </StdNotice>
          </div>
          <div>We do <span style={{ fontWeight: 'bold' }}>NOT</span> have a scheduled mint date yet, Always make sure you are on the right link to avoid fake websites and scams.</div>
          <IconButton aria-label="close" color="inherit" size="small" onClick={() => { setOpen(false); }} sx={{ paddingRight: '20px' }} >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        </StdDiv>
      </Collapse>
    </Box >
  );
}
// sx={{ right: '0', top: '10px', position: 'fixed' }}