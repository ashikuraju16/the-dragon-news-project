import { ResponsiveIndicator } from "@sohanemon/utils/components";
import { Outlet } from "react-router-dom";

const Root = () => {
	return <div >
        <Outlet />
        <ResponsiveIndicator/>
    </div>;
};

export default Root;
