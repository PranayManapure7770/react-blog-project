import "./App.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Footer from "./components/footer/Footer";
function App() {
  const {loading,setloading} = useState(true);
  const dispatch = useDispatch();
    return (
        <>
            <p>hello world</p>
        </>
    );
}

export default App;
