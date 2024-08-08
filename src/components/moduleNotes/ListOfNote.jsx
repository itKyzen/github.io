import React, { useState} from 'react';
import NoteList from "./NoteList.jsx";

function ListOfNote({name}) {

    const [list] = useState([])
    const [but, setBut] = useState(false)

    const addArray = ()=> {
        list.push(name)
        setBut(prevBut => !prevBut)
    }




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

