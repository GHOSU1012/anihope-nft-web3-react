import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { width } from '@mui/system';

const Mybtn = (props) => {
    return (
        <Button style={{
            background: 'white',
            color: 'black',
            minWidth: '30px',
            width: '30px',
            borderRadius: '15px',
            height: '30px'
        }}>
            {props.type == 'add' ? <AddIcon /> : <RemoveIcon />}
        </Button>
    )
}

export default Mybtn;
// background: white;
//     color: black;
//     min-width: 30px;
//     border-radius: 15px;
//     height: 30px;
//     width: 30px;