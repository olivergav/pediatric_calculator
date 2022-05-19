import {Link} from "react-router-dom";
import {useState} from "react";

function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    return (
        <div>
            <h1>Zaloguj się</h1>
            <input type="text" placeholder='Email'
                   value={email}
                   onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder='Hasło'
                   value={password}
                   onChange={(event) => setPassword(event.target.value)}/>
            <p>Nie masz konta? <Link to="/">Zaloguj się</Link></p>
            <button>Zaloguj się</button>
        </div>
    )
}

export default Login;