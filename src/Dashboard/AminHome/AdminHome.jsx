
import useAuth from '../../Hooks/useAuth';
// import CountUsers from '../../Pages/CountUser/CountUsers';

const AdminHome = () => {
    const { user } = useAuth();

    return (
        <div>
            <div>
                <h2 className="text-3xl">
                    <span>Hi, Welcome </span>
                    {
                        user?.displayName ? user.displayName : 'Back'
                    }
                </h2>

            </div>
            <div>
                {/* <CountUsers></CountUsers> */}
                
            </div>
        </div>
    );
};

export default AdminHome;
