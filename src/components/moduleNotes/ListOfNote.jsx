import {useEffect, useState} from 'react';
import NoteList from "./NoteList.jsx";

// eslint-disable-next-line react/prop-types
function ListOfNote({name, title}) {

    const [list, setList] = useState(()=>{
        const saveNote = localStorage.getItem('note')
        return saveNote ? JSON.parse(saveNote) : []
    })
    const addArray = ()=> {
        setList([...list, name ])
    }

    useEffect(() => {
        localStorage.setItem('note', JSON.stringify(list))
    }, [list]);

    console.log(title, '2 file')
    return (
        <div>
            <input  type="button" value="Add item" onClick={addArray}/>
            <div>
                {list.length === 0  ?
                       <p>Нотаток немає</p>
                    : <NoteList list={list}
                                title={title}
                    />}
            </div>
        </div>
    );
}

export default ListOfNote;

