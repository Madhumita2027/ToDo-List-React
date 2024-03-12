import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

function ListComp(props) {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(prev => !prev);
  };


  return (
    <div className="todo_style">
      <div className="linecut">
        <Tooltip title="Done" placement="left">
          <span onClick={cutIt}>
            <DeleteIcon className="deleteicon" />
          </span>
        </Tooltip>
        <li style={{ textDecoration: line ? "line-through" : "none" }}>
          {props.text}
        </li>
      </div>

      <Tooltip title="Remove Task" placement="right">
        <CloseIcon
            className="removetask"
            onClick={() => {
            props.onSelect(props.id);
          }}
        />
      </Tooltip>
    </div>
  );
}

export default ListComp;
