
// import AllPublisher from "../AllPublisher/AllPublisher";
import TrendingArticles from "../Articles/TrendingArticles";
// import Featuresplan from "../FeaturesPlan/Featuresplan";

import LeftSide from "../../Shared/LeftSide/LeftSide";
import RightSide from "../../Shared/RightSide/RightSide";




const Home = () => {
    return (
        <div>
            {/* <TrendingArticles/>
            <AllPublisher/>
            <Featuresplan></Featuresplan> */}

            <div className="grid lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="lg:col-span-2 border">
                    <TrendingArticles/>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>
            </div>

        </div>
    );
};

export default Home;