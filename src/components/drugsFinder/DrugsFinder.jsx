import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import "./DrugsFinder.css"

const drugs = [
    {
        id: 1,
        activeIngridient: "Ibuprofen",
        drugs: [
            {
                id: 1,
                name: "Ibufen",
                dose: 3200,
                unit: "mg",
            },
            {
                id: 1,
                name: "Ibum",
                dose: 3200,
                unit: "mg",
            }
        ]
    },
    {
        id: 2,
        activeIngridient: "Paracetamol",
        drugs: [
            {
                id: 1,
                name: "Apap",
                dose: 1500,
                unit: "mg",
            },
            {
                id: 1,
                name: "Etopiryna",
                dose: 3200,
                unit: "mg",
            }
        ]
    },
    {
        id: 3,
        activeIngridient: "Cetamol",
        drugs: [
            {
                id: 1,
                name: "Apap2",
                dose: 1500,
                unit: "mg",
            },
            {
                id: 1,
                name: "Etopiryna2",
                dose: 3200,
                unit: "mg",
            }
        ]
    }
]

function DrugsFinder() {
    const [ingredientResult, setIngredientResult] = useState([]);
    const [ingredient, setIngredient] = useState('');

    useEffect(() => {
        if (ingredient.length >= 2){
        setIngredientResult(drugs.filter((drug) => drug.activeIngridient.toLowerCase().includes(ingredient)).map((drug) => drug.activeIngridient))
        }
    }, [ingredient])

    function handleIngredient(e) {
        setIngredient(e.target.value)
    }

    return (
        <>
            <h2>Wyszukaj lek</h2>

            <div className="control-group">
                <label htmlFor="substance">Substancja czynna</label>
                <input type="text" id="substance" value={ingredient} onChange={handleIngredient}/>
                <ul className="autocomplete-suggestions">
                    {ingredientResult.map((item) => (
                        <li key={item} onClick={() => setIngredient(item)}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="control-group">
                <label htmlFor="drugName">Nazwa leku</label>
                <select id="drugName">
                    <option value=""></option>
                    {drugs
                        .filter((drug) => drug.activeIngridient.includes(ingredient))
                        .flatMap(drug => drug.drugs)
                        .map(drug => (
                        <option key={drug.name} value={drug.name}>
                            {drug.name}
                        </option>
                    ))
                }</select>
            </div>

            <h2>Zalecana dawka</h2>
            <div>
                <Link to="/" className="btn btn-icon">Rozpocznij podawanie lekarstw <span>+</span></Link>
            </div>
        </>
    );
}

export default DrugsFinder;