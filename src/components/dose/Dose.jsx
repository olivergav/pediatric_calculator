import React, {useState} from 'react';
import {useLocation} from "react-router-dom";

import TimeLine from "../timeLine/TimeLine";
import Navbar from "../navBar/NavBar";
import ChildrenNav from "../childrenNav/ChildrenNav";
import CalendarButton from "../calendarButton/CalendarButton";
import DrugsFilter from "../drugsFilter/DrugsFilter";

import "./Dose.css"

const timeLineData = [
    {
        time: new Date(),
        drugName: 'ibum',
        dosage: "5ml",
        temperature: undefined,
        symptoms: [],
        checked: false,
        id: 1,
    },
    {
        time: new Date(),
        drugName: 'paracetamol',
        dosage: "10mg",
        temperature: undefined,
        symptoms: [],
        checked: false,
        id: 2,
    },
    {
        time: new Date(),
        drugName: 'apap',
        dosage: "1500mg",
        temperature: undefined,
        symptoms: [],
        checked: false,
        id: 3,
    },
    {
        time: new Date(),
        drugName: 'etopiryna',
        dosage: "5ml",
        temperature: undefined,
        symptoms: [],
        checked: false,
        id: 4,
    },
]

function Dose({activeChild, setActiveChild, children}) {
    const [calendar, setCalendar] = useState([...Array(7)].map((item, idx) => new Date((new Date()).setDate(new Date().getDate() + idx))));
    const [currentActiveDay, setCurrentActiveDay] = useState(new Date());
    const location = useLocation();
    // const [drugs, setDrugs] = useState([location.state.drug]);
    const [drugs, setDrugs] = useState(["ibum", "paracetamol", "apap", "etopiryna"]);
    const [activeDrugs, setActiveDrugs] = useState(drugs)

    return (
        <>
            <Navbar/>
            <div className="home-card">
                <ChildrenNav children={children.filter((child) => child.id === activeChild)} activeChild={activeChild}
                             setActiveChild={setActiveChild}/>

                <div className="calendar-mask">
                    <div className="calendar-map">
                        {calendar.map((date) =>
                            <CalendarButton key={date.getDay()}
                                            active={currentActiveDay.getDate() === date.getDate()}
                                            date={date}
                                            setCurrentActiveDay={setCurrentActiveDay}
                            />)}
                    </div>
                    <DrugsFilter drugs={drugs} activeDrugs={activeDrugs} setActiveDrugs={setActiveDrugs}/>
                </div>
                <TimeLine timeLineData={timeLineData} activeDrugs={activeDrugs}/>
            </div>
        </>
    )
}

export default Dose;