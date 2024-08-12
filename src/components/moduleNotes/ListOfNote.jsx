import  { useState} from 'react';
import NoteList from "./NoteList.jsx";

// eslint-disable-next-line react/prop-types
function ListOfNote({name}) {

    const [list, setList] = useState([])

    const addArray = ()=> {
        setList([...list, name ])
    }

    localStorage.setItem('array', JSON.stringify(list))




    return (
        <div>
            <input  type="button" value="Add item" onClick={addArray}/>
            <div>
                {list.length === 0 ?
                       <p>Нотаток немає</p>
                    : <NoteList list={list}/>}
            </div>
        </div>
    );
}

export default ListOfNote;

