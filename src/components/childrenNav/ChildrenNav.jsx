import avatar from "./../../images/boy_avatar.png"
import addIcon from "./../../images/add_icon.svg"
import {Link} from "react-router-dom";

import "./ChildrenNav.css"

function ChildrenNav({activeChild, setActiveChild, children, showUI}) {
    return (
        <>
            <div className="child-wrapper">
                {children.map(({id, name}) => (
                    <div key={id} className="child-avatar-box" onClick={() => setActiveChild(id)}>
                        <img className={`${activeChild === id ? "child-avatar child-active" : "child-avatar"}`}
                             src={avatar} alt="Child"/>
                        <p className="child-name-paragraph">{name}</p>
                    </div>
                ))}
                {showUI && (<Link to="/addchild"><img src={addIcon} alt="add icon" className="add_icon"/></Link>)}
            </div>
            {showUI && (
                <div>
                    <Link to="addChild" className="btn">Edytuj</Link>
                    <Link to="" className="btn">Historia dawkowania</Link>
                </div>
            )}
        </>
    )
}

export default ChildrenNav;