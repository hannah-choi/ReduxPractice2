import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    // function addPerson(name) {
    //     console.log(name);
    //     setGuestList([...guestList, name]);
    // }

    return (
        <div className="App">
            <Form />
            <List />
            <Footer />
        </div>
    );
}

export default App;
