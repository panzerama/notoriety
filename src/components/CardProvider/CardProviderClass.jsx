import React from 'react'
import Card from '../Card/Card'
import cardData from '../../data/cards.json'

export default class CardProvider extends React.Component {

  // Lifecycle Components
  // First Render

  constructor(props) { // called before anything else
    super(props)
    this.state = { cards: cardData, index: 0 }
  }

  // getDerivedStateFromProps()

  render() { // render here based on the state we have
    return <Card cardContent={{ cardAdvanceHandler: this.nextCardHandler.bind(this), ...this.cards[this.state.index] }}></Card>
  }

  // componentDidMount()
  // Make our fetch calls here and then update state, triggering a component
  // update

  // After Update

  // getDerivedStateFromProps()
  // shouldComponentUpdate()
  // render()
  // getSnapshotBeforeUpdate()
  // componentDidUpdate()

  nextCardHandler() {
    if (this.state.index < this.state.cards.length - 1) {
      this.setState((state, props) => {
        index: this.state.index+1
      })
    } else {
      this.setState({
        index: 0
      })
    }
  }

  
}