import React from 'react';

function TimeLine({timeLineData, activeDrugs}) {
    return (
        <div>
            <div className="timeline-header">
                <span>Godzina </span>
                <span>Nazwa leku </span>
                <span>Dawka </span>
                <span>Temperatura </span>
                <span>Objawy </span>
            </div>
            <div>
                {timeLineData.map(({time, drugName, dosage, temperature, symptoms, checked, id}) => (
                    <div key={id}>
                        <span>{time.getHours()}:{time.getMinutes()} </span>
                        <span>{drugName} </span>
                        <span>{dosage} </span>
                        <span>{temperature} </span>
                        <span>{symptoms} </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TimeLine;