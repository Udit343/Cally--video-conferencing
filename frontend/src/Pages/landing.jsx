import React from "react";
import "../App.css";
import {Link}from 'react-router-dom';
export default function LandingPage(){
    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2>Apna Video call</h2>
                 </div>
                <div className="navList"> 
                    <p>Join As guest</p>
                    <p>Register</p>
                    <div role="button">
                        <p>Login</p>
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                    <div>
                        <h1> <span style={{color:"#FF9839"}}>Connect</span>  with your Loves ones</h1>
                        <p>Cover a distance by apna video call</p>
                        <div>
                            <Link to={"/home"} >Get started</Link>
                        </div>
                    </div>
                    <div>
                        <img src="/Photo1.png"></img>
                    </div>
            </div>
        </div>
        

    )
}
