// import React, { useState, useEffect } from 'react';
// import SectionTitle from '../../component/SectionTitle/SectionTitle';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import { useQuery } from '@tanstack/react-query';
// import CountUp from 'react-countup';
// import useAdmin from '../../Hooks/useAdmin';
// import useAuth from '../../Hooks/useAuth';

// const CountUsers = () => {
//     const {user} = useAuth()
//     const [isAdmin] = useAdmin()
//     const axiosSecure = useAxiosSecure();
//     const { data: countUsers = [], refetch } = useQuery({
//         queryKey: ['countUsers'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users');
//             return res.data;
//         }
//     });

//     const [startCount, setStartCount] = useState(0);
//     const [endCount, setEndCount] = useState(0);

//     useEffect(() => {
//         setEndCount(countUsers.length);
//     }, [countUsers]);

//     const normalUser = countUsers.filter(norUser => norUser.role === 'admin');

//     console.log(normalUser);

//     return (
//         <div className='mt-5'>
//             <SectionTitle
//                 subHeading="Statistic normal user and premium users"
//                 heading={'Count User'}
//             ></SectionTitle>

//             <div className="stats shadow flex justify-center">

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <div className="avatar online">
//                             <div className="w-16 rounded-full">
//                                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="stat-value">
//                         <CountUp start={startCount} end={endCount} duration={10} separator="," />
//                     </div>
//                     <div className="stat-title">Normal User</div>
                    
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <div className="avatar online">
//                             <div className="w-16 rounded-full">
//                                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="stat-value">
//                         <CountUp start={startCount} end={endCount} duration={10} separator="," />
//                     </div>
//                     <div className="stat-title">Premium User</div>
//                 </div>

//                 <div className="stat">
//                     <div className="stat-figure text-secondary">
//                         <div className="avatar online">
//                             <div className="w-16 rounded-full">
//                                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="stat-value">
//                         <CountUp start={startCount} end={endCount} duration={10} separator="," />
//                     </div>
//                     <div className="stat-title">All User</div>
                    
//                 </div>

//             </div>


//         </div>
//     );
// };

// export default CountUsers;













import React, { useState, useEffect } from 'react';
import SectionTitle from '../../component/SectionTitle/SectionTitle';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import CountUp from 'react-countup';
import useAdmin from '../../Hooks/useAdmin';
import useAuth from '../../Hooks/useAuth';

const CountUsers = () => {
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const axiosSecure = useAxiosSecure();
    const { data: countUsers = [], refetch } = useQuery({
        queryKey: ['countUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [startCount, setStartCount] = useState(0);
    const [endCount, setEndCount] = useState(0);

    useEffect(() => {
        setEndCount(countUsers.length);
    }, [countUsers]);

    const normalUser = countUsers.filter(norUser => norUser.role !== 'admin');

    const { data: premiumUser = [] } = useQuery({
        queryKey: ['premiumUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premiumUser');
            // Filter out duplicate emails
            const uniquePremiumUsers = res.data.filter((user, index, self) =>
                index === self.findIndex((u) => (
                    u.email === user.email
                ))
            );
            return uniquePremiumUsers;
        }
    });

    return (
        <div className='mt-5'>
            <SectionTitle
                subHeading="Statistic normal user and premium users"
                heading={'Count User'}
            ></SectionTitle>

            <div className="stats shadow flex justify-center">

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">
                        <CountUp start={startCount} end={normalUser.length} duration={10} separator="," />
                    </div>
                    <div className="stat-title text-blue-600 text-2xl font-bold" >Normal User</div>
                    
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">
                        <CountUp start={startCount} end={premiumUser.length} duration={10} separator="," />
                    </div>
                    <div className="stat-title text-green-600 text-2xl font-bold">Premium User</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">
                        <CountUp start={startCount} end={endCount} duration={10} separator="," />
                    </div>
                    <div className="stat-title text-orange-600 text-2xl font-bold">All User</div>
                    
                </div>

            </div>


        </div>
    );
};

export default CountUsers;


