import React from "react";
import "../App.css";
import {Link, useNavigate}from 'react-router-dom';
export default function LandingPage(){

    const router=useNavigate();


    return(
        <div className="landingPageContainer">
            <nav>
                <div className="navHeader">
                    <h2> Video call</h2>
                 </div>
                <div className="navList"> 
                    <p onClick={()=>{
                        router("/743iuy")
                    }} >Join As guest</p>
                    <p onClick={()=>{
                        router("/auth")
                    }}>Register</p>
                    <div role="button" onClick={()=>{
                        router("/auth")
                    }}>
                        <p>Login</p>
                    </div>
                </div>
            </nav>
            <div className="landingMainContainer">
                    <div>
                        <h1> <span style={{color:"#FF9839"}}>Connect</span>  with your Loves ones</h1>
                        <p>Cover a distance by apna video call</p>
                        <div>
                            <Link to={"/auth"} >Get started</Link>
                        </div>
                    </div>
                    <div>
                        <img src="/Photo1.png"></img>
                    </div>
            </div>
        </div>
        

    )
}
