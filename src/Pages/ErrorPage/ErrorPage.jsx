import { Link } from "react-router-dom";
import errorImage from "../../assets/errorPages.webp"


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${errorImage})` }}>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg flex flex-col justify-start items-start">
                <h2 className="text-3xl sm:text-5xl font-bold text-gray-800">Oops! Something went wrong.</h2>
                <p className="text-lg text-gray-600 mt-4 mb-5">The page you are looking for may have been moved or does not exist.</p>
                <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;