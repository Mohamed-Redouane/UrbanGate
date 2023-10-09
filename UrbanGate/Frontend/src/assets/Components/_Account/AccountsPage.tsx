import React from 'react'; 
import { useState } from 'react';
import "./SignIn.css"
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AccountsPage(){
    return(
      <div className="accountsDiv">
        <SignIn/>
        <SignUp/>
      </div>
);
}

function SignIn(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName]=useState('');


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  //const [ ,setCookies]=useCookies(["tokenFromJwt"]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {email: email, password: password};
    const responseFromAPI = axios.post("http://localhost:3000/signIn", data)
    .then(()=> console.log("SUCCESS"))
    .catch((res)=> console.log(res));
   //setCookies("tokenFromJwt", responseFromAPI); //going to store the user_id being sent back, this proves authentication and allows user to be verifed
   //Note going to use cookie to validate whether to re-route sign in page to managing accounts page once authentication token exists
    //navigate("/"); //sends user to home page and the accounts page will not route to account management
  }

  return(
<div className="container">
  <form>
    <h2>Sign In</h2>
    <div className="fields-container">
      <label htmlFor = "email">Email </label>
      <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange = {handleEmailChange}
            required
            placeholder="Enter email"
          />
    </div>
    <div className="fields-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter password"
          />
        </div>

        <div className="fields-container">
          <label htmlFor="password">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Enter Name"
          />
        </div>
        <button type="submit">Sign In</button>
  </form>
</div>
  );
}

function SignUp(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const success = () => {
    alert("SUCCESS");
  }
const navigate = useNavigate();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleRoleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    setRole(e.target.value);
  }


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {email: email, name: name, password: password, role: role};
    axios.post("http://localhost:3000/createUser", data)
    .then(()=> console.log("SUCCESS"))
    .catch((res)=> console.log(res));
    //console.log(email +  "" + password +"" + name+""   + role);
    navigate("/")
  }

return(
<div className="container">
  <form onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <div className="fields-container">
      <label htmlFor = "email">Email </label>
      <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange = {handleEmailChange}
            required
            placeholder="Enter email"
          />
    </div>
    <div className="fields-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder="Enter password"
          />
        </div>
        <div className="fields-container">
          <label htmlFor="password">Name</label>
          <input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Enter Name"
          />
        </div>
         <br/>
        <span> Homebuyer </span> <input type="radio" value="homebuyer" onChange={handleRoleChange}/> 
        <span> Broker </span><input type="radio"value="broker" onChange={handleRoleChange}/>
        <button type="submit">Sign Up</button>
        
  </form>
</div>
  );
}



export default AccountsPage;