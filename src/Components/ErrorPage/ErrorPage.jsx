import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h3>Oops!</h3>
            <h4 className="btn"><Link to={"/"}>Go Back to Home</Link></h4>
        </div>
    );
};

export default ErrorPage;