import {useEffect, useState} from "react";
import boy_avatar from "./../../images/boy_avatar.png"
import girl_avatar from "./../../images/girl_avatar.png"
import './AddChild.css'
import NavBar from "../navBar/NavBar";

function AddChild({activeChild, setActiveChild, children}) {
    const [childName, setChildName] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState("");

    useEffect(() => {
        if (height > 0 && weight > 0) {
            setBMI(Math.round(weight / ((height / 100) ** 2)))
        }
    }, [height, weight])


    function validateChildName(e) {
        setChildName(e.target.value);
    }

    function handleGender(e) {
        setGender(e.target.value);
    }

    function handleWeight(e) {
        setWeight(Math.abs(e.target.value))
    }

    function handleHeight(e) {
        setHeight(Math.abs(e.target.value))
    }

    return (
        <>
            <NavBar/>
            <div className="child-card">
                <form>
                    <div className="child-container">
                        <img className="child-avatar" src={gender === "male" ? boy_avatar : girl_avatar} alt="Child"/>
                        <input type="text" placeholder="Imię" value={childName} onChange={validateChildName}/>
                    </div>

                    <div className="child-layout">
                        <label htmlFor="birthday">Data urodzenia:</label>
                        <input type="date" id="birthday"/>
                    </div>

                    <div className="child-layout">
                        <label htmlFor="weight">Waga:</label>
                        <input type="number" id="weight" value={weight} min={0}
                               onChange={handleWeight} placeholder={'Waga'}/>
                    </div>

                    <div className="child-layout">
                        <label htmlFor="height">Wzrost:</label>
                        <input type="number" id="height" value={height} min={0}
                               onChange={handleHeight} placeholder={'Wzrost'}/>
                    </div>

                    <div className="child-layout">
                        <label htmlFor="gender">Płeć:</label>

                        <div className="child-layout">
                            <div>
                                <label htmlFor="female">Kobieta</label>
                                <input type="radio" name="gender" id="female" value="female" onChange={handleGender}/>
                            </div>
                            <div>
                                <label htmlFor="male">Mężczyzna</label>
                                <input type="radio" name="gender" id="male" value="male" onChange={handleGender}/>
                            </div>
                        </div>

                    </div>

                    <div className="child-layout">
                        <label htmlFor="bmi">BMI</label>
                        <input type="text" id="bmi" value={bmi} disabled/>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddChild;