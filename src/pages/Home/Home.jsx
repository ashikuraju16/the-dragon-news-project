import Headers from "./Header/Headers";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import Login from "./Login/Login";
import MiddleBarNews from "./MiddleBarNews/MiddleBarNews";
import News from "./News/News";
import RightSideNav from "./RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div >
           <Headers />
           <News />
           <Login />
           <div className=" grid lg:grid-cols-4 mx-16">
            <div className=" col-span-1">
                <LeftSideNav />
            </div>
            <div className=" col-span-2">
                <MiddleBarNews />
            </div>
            <div className=" col-span-1">
                <RightSideNav />
            </div>
           </div>
        </div>
    );
};

export default Home;