import Navbar from "../navBar/NavBar";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";
import "./HomePage.css"

function HomePage(){
    return (
        <div className="home-card">
            <Navbar/>
            <ChildrenNav/>
            <DrugsFinder/>
        </div>
    )
}

export default HomePage;