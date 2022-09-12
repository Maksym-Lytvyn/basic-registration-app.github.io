import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styling.scss';
import { useState } from "react";
import reportWebVitals from './reportWebVitals';



function Register() {
const [name, setName] = useState("");
const [surname, setsurName] = useState("");
const [email, setEmail] = useState("");

function refresh () {
  window.location.reload();
}

function submit () {
 alert(`Ваше ім'я: ${name} , ваше прізвище: ${surname}, ваша електронна скринька: ${email}`)
 const myElement = (
  <ul className='result'>
    <h1>Ласкаво просимо, {name}</h1>
    <br />
    <p>Ваші данні:</p>
    <li>Ваше ім'я: {name}</li>
    <li>Ваше прізвище: {surname}</li>
    <li>Ваша електронна скринька: {email}</li>
    <button className='logout-btn' onClick={refresh}>Вийти з облікового запису</button>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
}





return (
  <form action="">   
    <input type="text" className='valueN' value={name} onChange={(e) => setName(e.target.value)}/>
    <br />
    <input type="text" className='valueSr' value={surname} onChange={(e) => setsurName(e.target.value)}/>
    <br />
    <input type="text" className='valueEm' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <br />
    <button type="submit" onClick={submit}>Зареєструватися</button>
    <submit/>
  </form>
  
  
)
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Register/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
