
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { retreiveHelloWorldPathVariable } from "./api/HelloWorldApiService";
import { retreiveAllTodosForUsername } from "./api/TodoApiService";
import { useAuth } from "./Security/AuthContext";


export default function WelcomeComponent() {

    const authContext=useAuth()
    const { username } = useParams();
    const [message, setMessage] = useState(null)

    function CallHelloWolrdRestAPi() {
        // axios.get('http://localhost:8080/hello-world')
        //     .then((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('Cleanup'))

        // retreiveHelloWorldBean()
        //     .then((response) => successfulResponse(response))
        //     .catch((error) => errorResponse(error))
        //     .finally(() => console.log('Cleanup'))

        retreiveHelloWorldPathVariable("hafiz", authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('Cleanup'))


    }

    function successfulResponse(response) {
        // setMessage(response.data)
        setMessage(response.data.message)
    }
    function errorResponse(error) {
        console.log(error)
    }
    // console.log(username);
    return (
        <div className="welcome">
            <h1>Welcome {username}</h1>
            <div>Manage your todos-  <Link to="/todos">Go here</Link></div>
            <button className="btn btn-success m-5" onClick={CallHelloWolrdRestAPi}>Call Hello World</button>
            <div className="text-info">{message}</div>
        </div>
    )
}