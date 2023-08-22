import React, { Component } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import "./Login.css";

export default function Login() {
   
    let signupBtn = document.getElementById("signupBtn");
    let signinBtn = document.getElementById("signinBtn");
    let nameField = document.getElementById("nameField");
    let title = document.getElementById("title");

    signinBtn.onclick = function(){
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add("disable");
        signinBtn.classList.remove("disable");
    }

    signupBtn.onclick = function(){
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove("disable");
        signinBtn.classList.add("disable");
    }

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const [message, setMessage] = useState("");

    function validateForm() {

        return email.length > 0 && password.length > 0;

    }
    //test login
    const users = [{ username: "aaa", password: "bbb" }];

    const handleSubmit = async event => {

        event.preventDefault();
        // ---------------authenticate user log in from server ---------------------------
        //const user = { email, password };
        // const url = ""; // server url need to create later
        // const response = await fetch(url,user);
        // setUser(response.data);
        // store the user in localStorage

        // localStorage.setItem('user', response.data);

        const account = users.find((user) => user.username === email);

        if (account && account.password === password) {
            localStorage.setItem("authenticated", true);
            navigate("/Home");
        } else {
            setMessage("Incorrect Login details.Try again. or create account");
        }


    }
    if (user) {
        return <div>{user.name} is loggged in</div>;
    }
    return (
        <div>
            <div class="container">
            <div class="form-box">
                <h1 id="title">Sign Up</h1>
                <form>
                    <div class="input-group">
                        <div class="input-field" id="nameField">
                            <i class="fa-solid fa-user"></i>
                            <input type="text" placeholder="Name"/>
                        </div>

                        <div class="input-field">
                            <i class="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Email"/>
                        </div>

                        <div class="input-field">
                            <i class="fa-solid fa-lock"></i>
                            <input type="password" placeholder="Password"/>
                        </div>
                        <p>Forgot password? <a href="#"> Click Here</a></p>
                    </div>
                    <div class="btn-field">
                        <button type="button" id="signupBtn">Sign Up</button>
                        <button type="button" id="signinBtn" class="disable">Sign In</button>
                    </div>
                </form>
            </div>
        </div>


        </div>
    );
}
