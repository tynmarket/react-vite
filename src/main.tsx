import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css'
import App from './App'
import Expenses from "./expenses";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="expenses" element={<Expenses />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
