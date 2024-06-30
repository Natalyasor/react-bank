import Page from "../../component/page";
import Back from "./back.svg";
import Title from "../../component/title";
import Description from "../../component/description";
import { useState } from "react";
import { Link  } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
const onChange = (event) => {
    console.log(event.target.value)
}

const navigate = useNavigate()
    return (
        <Page>
           <div className="back-button" onClick= {() => navigate(-1)}>
<img src = {Back} alt="Back"/>
            </div>
            <Title>Sign in</Title>
<Description>Select login method</Description>

<div className="form">

<div className="form_content">
<label className="name">Email</label>
<input  onChange={onChange} 
email={email}
setEmail={setEmail}
className ="name1" name = "Email" placeholder="Введіть ваш email" minlength="8" required/>
</div>
<div className="form_content">
    <label className="name">Password</label>
<input onChange={onChange}
password={password}
setPassword={setPassword}
 className ="name1" name = "Password" type = "Password" placeholder="Введіть ваш password" minlength="8" required/>
</div>

        </div>

<div className="account">
<div>Forgot your password?</div>
<Link className ="link" to ="/RecoverPage">Restore</Link>
</div>
<Link className="App-link1" to="/SignupConfirmPage">Continue</Link>
        </Page>
    )
}
