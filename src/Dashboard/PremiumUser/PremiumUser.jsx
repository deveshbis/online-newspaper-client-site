// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';

// const PremiumUser = () => {

//     const axiosSecure = useAxiosSecure()

//     const { data: premiumUser = [] } = useQuery({
//         queryKey: ['premiumUser'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/premiumUser');
//             return res.data
//         }

//     })

    
//     return (
//         <div>
//             <div className="overflow-x-auto">
//                 <table className="table">

//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Email</th>
//                             <th>Price</th>
//                             <th>Transaction ID</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             premiumUser.map((premUser, index) => (<tr key={premUser._id}>
//                                 <th>{index + 1}</th>
//                                 <td>{premUser.email}</td>
//                                 <td>$ {premUser.price}$</td>
//                                 <td>{premUser.transactionId}</td>

//                             </tr>))
//                         }
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PremiumUser;








import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const PremiumUser = () => {
    const axiosSecure = useAxiosSecure();

    const { data: premiumUser = [] } = useQuery({
        queryKey: ['premiumUser'],
        queryFn: async () => {
            const res = await axiosSecure.get('/premiumUser');
            return res.data;
        }
    });

    const groupedPremiumUsers = premiumUser.reduce((acc, user) => {
        const existingUser = acc.find(item => item.email === user.email);
        if (existingUser) {
            existingUser.price += user.price;
            existingUser.transactionIds.push(user.transactionId);
        } else {
            acc.push({
                email: user.email,
                price: user.price,
                transactionIds: [user.transactionId]
            });
        }
        return acc;
    }, []);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Transaction ID(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            groupedPremiumUsers.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{user.email}</td>
                                    <td>$ {user.price.toFixed(2)}</td>
                                    <td>{user.transactionIds.join(', ')}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PremiumUser;
