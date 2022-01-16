import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './components/Container/Container'
import TopBar from './components/TopBar/TopBar'
import CardProvider from './components/CardProvider/CardProvider'
import Landing from './components/Landing/Landing'
import './App.css'

// TODO add theme elements for color and font

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <TopBar />
        <Container>
          <Routes>
            <Route path="" element={<Landing />} />
            <Route path="cards" element={<CardProvider />} />
            <Route path="decks" element={<></>} />
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
