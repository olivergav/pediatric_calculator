import Navbar from "../navBar/NavBar";
import ChildrenNav from "../childrenNav/ChildrenNav";
import DrugsFinder from "../drugsFinder/DrugsFinder";

function HomePage(){
    return (
        <>
            <Navbar/>
            <ChildrenNav/>
            <DrugsFinder/>
        </>
    )
}

export default HomePage;