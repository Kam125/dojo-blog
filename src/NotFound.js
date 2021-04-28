import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h3>Sorry</h3>
            <p>Page Not Found</p>
            <Link to = "/">Back to Home</Link>
        </div>
    );
}
 
export default NotFound;