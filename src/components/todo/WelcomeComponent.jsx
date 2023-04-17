import { Link, useParams } from "react-router-dom";

export default function WelcomeComponent() {
    const { username } = useParams();
    // console.log(username);
    return (
        <div className="welcome">
            <h1>Welcome {username}</h1>
            <div>Manage your todos-  <Link to="/todos">Go here</Link></div>
        </div>
    )
}