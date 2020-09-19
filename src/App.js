import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";

function App() {
  return (
    <div className="App">
      <NameList />
      {/*  <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}

      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="priya" heroName="bat" />
      <p>This is childern props</p>
  <Greet /> 
  <Greet name="sush" heroname="super" /> */}
      {/* <Greet name="mahak" heroName="cat" /> */}
      {/* <Welcome name="priya" heroName="bat" /> */}
      {/* <Welcome name="priya" heroName="bat" />
  <Welcome name="priya" heroName="bat" /> */}
      {/*<Hello /> */}
    </div>
  );
}

export default App;
