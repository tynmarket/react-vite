import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import './index.css'

import App from './App'
import Pages from "./Pages";
import Page from "./Page";
import NewPage from "./NewPage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="/" element={<Pages />} />
          <Route path="page" element={<Page />} />
          <Route path="new" element={<NewPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
