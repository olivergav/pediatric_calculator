import React, {useState} from 'react';
import Navbar from "../navBar/NavBar";
import ChildrenNav from "../childrenNav/ChildrenNav";
import CalendarButton from "../calendarButton/CalendarButton";

import "./Dose.css"

function Dose({activeChild, setActiveChild, children}) {
    const [calendar, setCalendar] = useState([...Array(7)].map((item, idx) => new Date((new Date()).setDate(new Date().getDate() + idx))));
    const [currentActiveDay, setCurrentActiveDay] = useState(new Date())

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
                </div>
            </div>
        </>
    )
}

export default Dose;