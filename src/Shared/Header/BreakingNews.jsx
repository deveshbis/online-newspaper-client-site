import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex">
            {/* <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text...... I can be a React component, multiple React components, or just some text....
                </Marquee> */}
            <button className="btn btn-error">Breaking News</button>
            <Marquee pauseOnHover={true} speed={100}>
                Bank accounts of Abdul Awal Mintoo unfrozen after 17 years The accounts of Mintoo, his wife and son were blocked on August 1 in 2007
            </Marquee>

        </div>
    );
};

export default BreakingNews;