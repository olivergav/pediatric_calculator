import {Link} from "react-router-dom";
import {useState, useRef} from "react";
import "./Register.css"

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const nameRef = useRef(null)
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    function validate() {
        if (name === ""){
            nameRef.current.classList.add("validation-error")
        } else {
            nameRef.current.classList.remove("validation-error")
        }

        if (email === ""){
            emailRef.current.classList.add("validation-error")
        } else {
            emailRef.current.classList.remove("validation-error")
        }

        if (password === ""){
            passwordRef.current.classList.add("validation-error")
        } else {
            passwordRef.current.classList.remove("validation-error")
        }

    }

    return (
        <div className="register-box">
            <h1>Zarejestruj się</h1>
            <input type="text" placeholder='Imię' value={name} onChange={(event) => setName(event.target.value)}/>
            <input type="text" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)}/>
            <input type="password" placeholder='Hasło' value={password} onChange={(event) => setPassword(event.target.value)}/>
            <p>Masz konto? <Link to="/login">Zaloguj się</Link></p>
            <button onClick={validate}>Zarejestruj się</button>
            <p><Link to="/">Kontynuuj bez rejestracji</Link></p>
        </div>
    )
}

export default Register;