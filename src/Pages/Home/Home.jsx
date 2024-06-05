
import AllPublisher from "../AllPublisher/AllPublisher";
import TrendingArticles from "../Articles/TrendingArticles";
import Featuresplan from "../FeaturesPlan/Featuresplan";




const Home = () => {
    return (
        <div>
            <TrendingArticles/>
            <AllPublisher/>
            <Featuresplan></Featuresplan>
           
        </div>
    );
};

export default Home;