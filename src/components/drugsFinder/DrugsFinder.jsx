import React from 'react';
import "./DrugsFinder.css"

function DrugsFinder() {
    return (
        <>
            <h2>Wyszukaj lek</h2>

            <div className="control-group">
                <label htmlFor="substance">Substancja czynna</label>
                <input type="text" id="substance"/>
            </div>
            <div className="control-group">
                <label htmlFor="drugName">Nazwa leku</label>
                <input type="text" id="drugName"/>
            </div>

            <h2>Zalecana dawka</h2>
        </>
    );
}

export default DrugsFinder;