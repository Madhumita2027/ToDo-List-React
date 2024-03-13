import { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import ListComp from './ListComp';

function App() {
  
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const inputEvent = (event) => {
      setItem(event.target.value);
  }


  const addItems = () => {
    setNewItem((olditems) => {
      return [...olditems, item];
    })

    setItem("");
  }


  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>Todo List</h1>
          <br />
          <div className='text_button'>
            <Tooltip title="Enter a task" placement='bottom'>
              <input type='text'
              placeholder='Add items'
              onChange={inputEvent}
              value={item}
            />
            </Tooltip>
            {item ? <Tooltip title="Add" placement='right-start'>
            <Button className='newbtn'
              onClick={addItems}> <AddIcon /> </Button>
            </Tooltip> : null}
          </div>

          <br />
          <ol>
            {newitem.map((currval, index) => {
              return <ListComp 
              key={index} 
              text={currval} 
              id={index} 
              setNewItem={setNewItem}
              />
            })}
          </ol>
          <br />

        </div>
      </div>
    </>
  )
}

export default App
