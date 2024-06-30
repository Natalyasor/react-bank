import "./index.css";
import Fon from "./fon.svg"
import { Link } from "react-router-dom";
import Page from "../../component/page"

export default function WellcomePage() {
    return (
        <Page>
<img className ="image" src = {Fon} alt = {Fon} width={425} />
<div className="btn">
<Link className="App-link" to="/SignUpPage">Sign Up</Link>
<Link className="App-link1" to="/SignInPage">Sign In</Link>
</div>
</Page>
    )
}