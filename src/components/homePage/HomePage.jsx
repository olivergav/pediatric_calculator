import Navbar from "../navBar/NavBar";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";
import "./HomePage.css"

function HomePage({activeChild, setActiveChild, children}) {

    return (
        <>
            <Navbar/>
            <div className="home-card">
                <ChildrenNav children={children} activeChild={activeChild} setActiveChild={setActiveChild} showUI={true}/>
                <DrugsFinder activeChild={activeChild}/>
            </div>
        </>
    )
}

export default HomePage;