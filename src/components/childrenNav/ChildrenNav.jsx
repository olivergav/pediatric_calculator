import avatar from "./../../images/boy_avatar.png"
import girl_avatar from "./../../images/girl_avatar.png"
import addIcon from "./../../images/add_icon.svg"
import {Link} from "react-router-dom";

import "./ChildrenNav.css"
import {useState} from "react";

const children = [
    {
        "id": 1,
        "name": "Janusz"
    },
    {
        "id": 2,
        "name": "Karyna"
    },
    {
        "id": 3,
        "name": "Grażyna"
    }
]

function ChildrenNav() {
    const [activeChild, setActiveChild] = useState()

    return (
        <>
            <div className="child-wrapper">
                {children.map(({id, name}) => (
                    <div key={id} className="child-avatar-box" onClick={() => setActiveChild(id)}>
                        <img className={`${activeChild === id ? "child-avatar child-active" : "child-avatar"}`} src={avatar} alt="Child"/>
                        <p className="child-name-paragraph">{name}</p>
                    </div>
                ))}
                <Link to="/addchild"><img src={addIcon} alt="add icon" className="add_icon"/></Link>
            </div>
            <div>
                <Link to="addChild" className="btn">Edytuj</Link>
                <Link to="" className="btn">Historia dawkowania</Link>
            </div>
        </>
    )
}

export default ChildrenNav;