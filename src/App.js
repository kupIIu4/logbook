import './App.css';
import Sidebar from "./component/sidebar/sidebar";
import Main from "./component/main/main";
import Footer from "./component/footer/footer";
import React from "react";

function App() {
  return (
      <div className="wrapper">
          <h1 className="title">Чтобы просматривать документ, вам нужно зарегистрироваться в Figma</h1>
          <div className="wrapper__inner">
              <Sidebar title="Sidebar"></Sidebar>
              <Main title='Main'></Main>
          </div>
          <Footer/>
      </div>

  );
}

export default App;
