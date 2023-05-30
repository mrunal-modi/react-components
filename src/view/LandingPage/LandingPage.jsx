import { Link } from "react-router-dom";


const LandingPage = () => {
    return (
        <div>
            <h1>this is landing page</h1>
            <Link to="/edit">edit</Link>
        </div>
    )
}

export default LandingPage;