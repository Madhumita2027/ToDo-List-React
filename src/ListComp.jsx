import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

function ListComp(props) {

    const [line, setLine] = useState(false);

    const cutIt = () => {
        setLine(true);
    }

    return (
        <div className="todo_style">
            <span onClick={cutIt}> <DeleteIcon className='deleteicon'/> </span>
            <li style={{textDecoration: line ? 'line-through' : 'none'}}> {props.text} </li>
        </div>
    )
}

export default ListComp