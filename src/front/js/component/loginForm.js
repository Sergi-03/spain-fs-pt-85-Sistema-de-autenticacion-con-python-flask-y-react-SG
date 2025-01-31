import React, {useState} from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(email,password);
        
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-50">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)} value={email} />
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} value={password} />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
};