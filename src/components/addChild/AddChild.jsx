import {useState} from "react";

function AddChild(){
    const [childName, setChildName] = useState("");

    function validateChildName(e) {
        setChildName(e.target.value)
    }

    return (
        <div>
            <form>
                <div>
                    <img src="" alt="Child"/>
                    <input type="text" placeholder="Imię" value={childName} onChange={validateChildName}/>
                </div>

                <label htmlFor="birthday">Data urodzenia:</label>
                <input type="date" id="birthday"/>

                <label htmlFor="weight">Waga:</label>
                <input type="text" id="weight"/>

                <label htmlFor="height">Wzrost:</label>
                <input type="text" id="height"/>

                <div>
                    <label htmlFor="sex">Płeć:</label>

                    <div>
                        <label htmlFor="female">Kobieta</label>
                        <input type="radio" id="female" value="female"/>
                    </div>

                    <div>
                        <label htmlFor="male">Mężczyzna</label>
                        <input type="radio" id="male" value="male"/>
                    </div>
                </div>

                <label htmlFor="bmi">BMI</label>
                <input type="text"/>
            </form>
        </div>
    )
}

export default AddChild;