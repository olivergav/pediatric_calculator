import React from 'react';
import "./DrugsFilter.css"

function DrugsFilter({drugs, activeDrugs, setActiveDrugs}) {
    function handleDrugFilter(drug) {
        setActiveDrugs((prevState) => (
            prevState.includes(drug) ? (prevState.filter((item) => item !== drug)) : ([...prevState, drug])
        ))
    }

    return (
        <div>
            {drugs.map((drug) => (
                <button className={activeDrugs.includes(drug) ? "filter-drug-active" : ""} key={drug} onClick={() => handleDrugFilter(drug)}>
                    {drug}
                </button>
            ))}
        </div>
    );
}

export default DrugsFilter;