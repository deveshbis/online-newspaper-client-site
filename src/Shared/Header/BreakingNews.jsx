import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-error">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                Bank accounts of Abdul Awal Mintoo unfrozen after 17 years The accounts of Mintoo, his wife and son were blocked on August 1 in 2007
            </Marquee>

        </div>
    );
};

export default BreakingNews;