import { useEffect, useState } from "react";
import {deleteTodoApi, retreiveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./Security/AuthContext";
import {useNavigate } from "react-router-dom";

function ListTodosComponent() {

    const authContext= useAuth();
    const username = authContext.username
    const navigate = useNavigate()

    const today = new Date();
    const targetDate = new Date(today.getFullYear() + 12, today.getMonth(), today.getDay());
    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)
    // const todos = [
    //     // { id: 1, description: "Learn AWS", done: false, targetDate: targetDate },
    //     // { id: 2, description: "Learn Google Cloud", done: false, targetDate: targetDate },
    //     // { id: 3, description: "Learn Cisco ", done: false, targetDate: targetDate }
    // ]

    useEffect(
        () => refreshTodos, []
    )
    function refreshTodos() {
        retreiveAllTodosForUsernameApi(username)
            .then((response) => {
                // console.log(response.data)
                setTodos(response.data)
            })
            .catch((error) => console.log(error))

    }

    function deleteTodo(id) {
        console.log("Delete Successfully" + id)
        deleteTodoApi(username,id)
        .then(
            ()=>{
                setMessage(`Delete of todo with id= ${id} successful`)
                refreshTodos()
            }
        )
        .catch((error)=>console.log(error))
    }
    function updateTodo(id){
        console.log("clicked"+id)
        navigate(`/todo/${id}`)
    }
    function addNewTodo(){
       
        navigate(`/todo/-1`)
    }



    return (
        <div className="container">
            <h1>Things you wants to do</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Decription</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>

                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/* <td>{todo.targetDate.toDateString()}</td> */}
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning"
                                            onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                        <td><button className="btn btn-info"
                                            onClick={()=>updateTodo(todo.id)}>Update</button></td>
                                    </tr>
                                )
                            )}


                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-3" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )
}

export default ListTodosComponent;