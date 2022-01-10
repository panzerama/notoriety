import React from "react"
import { Link, Outlet } from 'react-router-dom'
// import CardProvider from './components/CardProvider/CardProvider'
import Container from "./components/Container/Container"
import TopBar from "./components/TopBar/TopBar"
import "./App.css"

const App = () => {
  return (
    <div className="wrapper">
        <TopBar />
        <nav style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}>
          <Link to='/cards'>Cards</Link>
          <Link to='/decks'>Decks</Link>
        </nav>
      <Container>
          <Outlet />
      </Container>
    </div>
  )
}

export default App
