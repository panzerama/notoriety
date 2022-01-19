import React from 'react'
import './App.css'
// import CardProvider from './components/CardProvider/CardProvider'
import CardProviderClass from './components/CardProvider/CardProviderClass'
import Container from './components/Container/Container'
import TopBar from './components/TopBar/TopBar'

const App = () => {
  return (
    <div className="wrapper">
      <TopBar />
      <Container>
        <CardProviderClass />
      </Container>
    </div>
  )
}

export default App