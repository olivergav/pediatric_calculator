import Navbar from "../navBar/NavBar";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";
import "./HomePage.css"

function HomePage() {
    return (
        <>
            <Navbar/>
            <div className="home-card">
                <ChildrenNav/>
                <DrugsFinder/>
            </div>
        </>
    )
}

export default HomePage;