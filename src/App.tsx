import { Outlet } from "react-router-dom";
import './App.css'

import Layout from './Layout'

function App() {
  return (
    <>
      <Layout/>
      <Outlet />
    </>
  )
}

export default App
