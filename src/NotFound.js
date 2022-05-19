import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <p>cannot find that page, sorry.</p>
            <Link to='/'>Go back home</Link>
        </div>
     );
}
 
export default NotFound;