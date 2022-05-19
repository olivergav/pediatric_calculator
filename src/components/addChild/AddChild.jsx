import {useEffect, useState} from "react";
import boy_avatar from "./../../images/boy_avatar.png"
import girl_avatar from "./../../images/girl_avatar.png"

function AddChild(){
    const [childName, setChildName] = useState("");
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBMI] = useState("");

    useEffect(() => {
        if (height > 0 && weight > 0){
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
        <div>
            <form>
                <div>
                    <img src={gender === "male" ? boy_avatar : girl_avatar} alt="Child"/>
                    <input type="text" placeholder="Imię" value={childName} onChange={validateChildName}/>
                </div>

                <label htmlFor="birthday">Data urodzenia:</label>
                <input type="date" id="birthday"/>

                <label htmlFor="weight">Waga:</label>
                <input type="number" id="weight" value={weight} min={0}
                       onChange={handleWeight} placeholder={'Waga'}/>

                <label htmlFor="height">Wzrost:</label>
                <input type="number" id="height" value={height} min={0}
                       onChange={handleHeight} placeholder={'Wzrost'}/>

                <div>
                    <label htmlFor="gender">Płeć:</label>

                    <div>
                        <label htmlFor="female">Kobieta</label>
                        <input type="radio" name="gender" id="female" value="female" onChange={handleGender}/>
                    </div>
                    <div>
                        <label htmlFor="male">Mężczyzna</label>
                        <input type="radio" name="gender" id="male" value="male" onChange={handleGender}/>
                    </div>
                </div>

                <label htmlFor="bmi">BMI</label>
                <input type="text" id="bmi" value={bmi} disabled/>
            </form>
        </div>
    )
}

export default AddChild;