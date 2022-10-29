import React, { useState, useEffect } from "react";


const Lognin = ({ Name, Pass }) => {
const [newName, setNewName] = useState("");
const [password, setpassword] = useState("");

useEffect(() => {
    const GetName = () => {
    Name(newName);
    };

    const getPass = () => {
    Pass(password);
    };
    GetName();
    getPass();
});

return (
    <div className="form">
    <form>
        <h1 className="title">Start Now</h1>
        <input
        placeholder="Name"
        type="text"
        onChange={(event) => {
            setNewName(event.target.value);
        }}
        />
        <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
            setpassword(event.target.value);
        }}
        />
        <div className="btns">
        <button type="submit" className="submit-button">
            <a href="../Join/MainPage.js">Submit</a>
        </button>
        </div>
    </form>
    </div>
);
};

export default Lognin;
