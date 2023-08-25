import { useState,useEffect } from "react"
import { useRef } from "react"
import axios from "axios";
import '../Styles/list.css'
// import { useNavigate } from "react-router-dom";


const TodoList = () => {
    let List = useRef(null)
    // let navigate = useNavigate()

    let upload = (e) => {
        e.preventDefault()

        let data = {
            List: List.current.value,
        }
        axios.post(' http://localhost:5000/todos',data)
        .then(()=>{ 
        //   navigate('/')
        })
      
        alert('todo added successfully')

    }


    let [todo, setTodo] = useState([])

    useEffect(() => {
        let fetchdata = async () => {
            let reponse = await fetch(' http://localhost:5000/todos')
            let data = await reponse.json()
            setTodo(data)
        }
        fetchdata()
    })

    let remove = (id) => {
              
        axios.delete(` http://localhost:5000/todos/${id}`)
       
    }
    let removeAll = (id) => {
        todo.map((x) => {
            fetch(` http://localhost:5000/todos/${x.id}`, {
                method: "DELETE"
            })


        })

    }



    return (

        <div className="mock">
            <div className="head">
                <h1>TODO LIST</h1>
            </div>
            <div className="content">
                <div className="header">
                    <form action="" onSubmit={upload}>
                        <center>
                            <input type="text" ref={List} placeholder="What would you like to do?" /><br />
                            {/* <input type="text" ref={id} placeholder="number" /><br /> */} <br />
                            <button>ADD</button>
                        </center>
                    </form>
                </div>
                <div className="details">
                    <h1> Todo Lists :</h1>
                    {todo.map((e) => {
                        return (
                            <div className="detail">
                                <h1>{e.List}</h1>
                                {/* <h2>id : {e.id}</h2> */}
                                <button onClick={() => remove(e.id)}>Completed</button>
                            </div>
                        )
                    })}
                    <button className="btn1" onClick={() => removeAll(todo.id)}>DeleteAll</button>
                </div>
            </div>
        </div>
    );
}
 
export default TodoList;