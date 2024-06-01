import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
        </>
    );
};

export default Home;