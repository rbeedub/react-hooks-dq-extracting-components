import React from "react";
import { messages, contacts } from "../data";
import SideNav from "./SideNav";
import MainContent from "./MainContent";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
  return (

    <div className="app">

       <SideNav />

      <MainContent
      messages={messages}
      />


    </div>
  );
}

export default App;
