import React from "react";

import Sidebar from "./app/sidebar/sidebar";
import Main from "./app/main/main";
import Footer from "./app/footer/footer";

import './App.css';


function App() {
    return (
        <div className="wrapper">
            <h1 className="title">Чтобы просматривать документ, вам нужно зарегистрироваться в Figma</h1>
            <div className="wrapper__inner">
                <Sidebar/>
                <Main/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
