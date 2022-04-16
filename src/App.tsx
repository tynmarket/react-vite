import { useState } from 'react'
import { Outlet, Link } from "react-router-dom";
import logo from './logo.svg'
import './App.css'

import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hello Tailwind!
        </h1>
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <button class="btn btn-primary no-animation">Button</button>
        <Layout />
        <Link to="/expenses">Expenses</Link>
      </header>
      <Outlet />
    </div>
    */
    <>
      <Layout/>
      <Link to="/expenses">Expenses</Link>
      <Outlet />
    </>
  )
}

export default App
