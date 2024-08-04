import './App.css'
import React, {useState} from "react";
import UserName from "./UserName.jsx";



function App() {
    const [name, setName] = useState('')
    const [submittedName, setSubmittedName] = useState('');


    const handleChange = (e)=> {
        setName(e.target.value)
    }

    const changeButton = () => {
        setSubmittedName(name)
    }
  return (
    <div>
      <input
            value={name}
            onChange={handleChange}
            placeholder={'введите текст'}
      />
       <button
       onClick={changeButton}>
           press me
       </button>
      <UserName name={submittedName}/>
    </div>
  )
}

export default App
