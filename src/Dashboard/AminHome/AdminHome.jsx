
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

import { useQuery } from '@tanstack/react-query';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: publications = [] } = useQuery({
        queryKey: ['publications'],
        queryFn: async () => {
            const res = await axiosSecure.get('/publication');
            return res.data;
        }
    });

   
    const publisherCounts = publications.reduce((counts, publication) => {
        counts[publication.publisher] = (counts[publication.publisher] || 0) + 1;
        return counts;
    }, {});

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        // eslint-disable-next-line react/prop-types
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div>
            <h2 className="text-3xl">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
            <p>Total Articles: {publications.length}</p>
            <BarChart
                width={500}
                height={300}
                data={publications}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="publisher" />
                <YAxis />
                <Bar dataKey={publisherCounts}fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {publications.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                    ))}
                </Bar>
            </BarChart>

            {/* Display the count for each publisher */}
            <div>
                {/* {Object.entries(publisherCounts).map(([publisher, count]) => (
                    <p key={publisher}>{`${publisher}: ${count}`}</p>
                ))} */}
            </div>
        </div>
    );
};

export default AdminHome;
