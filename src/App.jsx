import './App.css'
import {useEffect, useRef, useState} from "react";
import UserName from "./components/moduleUser/UserName.jsx";
import ListOfNote from "./components/moduleNotes/ListOfNote.jsx";
import axios from "axios";


const src = "https://jsonplaceholder.typicode.com/users/1"


function App() {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [submittedTitle, setSubmittedTitle] = useState('');
    const [submittedName, setSubmittedName] = useState('');
    const [user, setUser] = useState(null)
    const inputRef = useRef(null)
    const inputRefTitle = useRef(null)

    useEffect(() => {
        const handleError = (error) => {
            throw new Error(error)
        }
        axios
            .get(src)
            .then((res) => setUser(res.data.name))
            .catch(handleError)
    }, []);






    const handleChange = ()=> {
        setName(inputRef.current.value)
    }

    const handleChangeTitle = () => {
        setTitle(inputRefTitle.current.value)
    }

    const changeButton = () => {
        setSubmittedName(name)
        setSubmittedTitle(title)
    }
  return (
      <div>
          <div>
              {user ? user : <p>Loading</p>}
          </div>
          <input
              ref={inputRef}
              value={name}
              onChange={handleChange}
              placeholder={'введите текст'}
          />
          <input
              ref={inputRefTitle}
              value={title}
              onChange={handleChangeTitle}
              placeholder={'введите title'}
          />
          <button
              onClick={changeButton}>
              press me
          </button>
          <UserName name={submittedName}/>
          <div>
              <ListOfNote name={submittedName}
                          title={submittedTitle}
              />
          </div>
      </div>
  )
}

export default App
