import "./index.css";
import Page from "../../component/page";
import Back from "./back.svg";
import Title from "../../component/title";
import Description from "../../component/description";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function SignUpPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
 const navigate = useNavigate()

const onChange = (event) => {
    console.log(event.target.value)
}

const handleSubmit = () => {
    console.log('form is submitted');
  }

    return (
        <Page>
            <div className="back-button" onClick= {() => navigate(-1)}>
<img src = {Back} alt="Back"/>
            </div>
<Title>Sign up</Title>
<Description>Choose a registration method</Description>

<div className="form">
<div className="form_content">
<label className="name">Email</label>
<input  
onChange={onChange}
email={email}
setEmail={setEmail}
className ="name1" name = "Email" placeholder="Введіть ваш email" />
</div>

<div className="form_content">
    <label className="name">Password</label> 
<input 
onChange={onChange}
password={password}
setPassword={setPassword}
className ="name1" name = "Password" type = "Password" placeholder="Введіть ваш password" />
</div>
   </div>
   
<div className="account">
<div>Already have an account?</div>
<Link className ="link" to ="/SignInPage">Sign in</Link>
</div>
<button type="submit" className="App-link1" onClick={() => handleSubmit()}>Sign Up</button>
<div className="alert--error">
    <span>A user with the same name is already exist</span>
</div>
        </Page>
    )
}