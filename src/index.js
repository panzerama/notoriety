import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import reportWebVitals from './reportWebVitals'
// import './index.css'
import App from './App'
import CardProvider from './components/CardProvider/CardProvider'
import Landing from './components/Landing/Landing'
import MultiCard from './components/Flashcard/MultiCard'
import Flashcard from './components/Flashcard/Flashcard'
import DeckProvider from './components/DeckProvider/DeckProvider'
import MultiDeck from './components/Deck/MultiDeck'
import Deck from './components/Deck/Deck'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} />
          <Route path="cards" element={<CardProvider />}>
            <Route index element={<MultiCard />} />
            <Route path=":cardIdx" element={<Flashcard />} />
          </Route>
          <Route path="decks" element={<DeckProvider />}>
            <Route index element={<MultiDeck />} />
            <Route path=":deckId" element={<Deck />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
