import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const Mybtn = (props) => {
    return (
        <Button style={{
            background: 'white',
            color: 'black',
            minWidth: '30px',
            width: '30px',
            borderRadius: '15px',
            height: '30px'
        }} onClick={props.onClick}>
            {props.type == 'add' ? <AddIcon style={{ fontSize: '20px' }} />
                : <RemoveIcon style={{ fontSize: '20px' }} />}
        </Button>
    )
}

export default Mybtn;