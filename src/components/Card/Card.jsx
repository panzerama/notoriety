import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import "./Card.css"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

// we could also destructure the props parameter
const Card = (props) => {

  // WORKITEM image alt text from data
  const {
    front_text, front_image,
    back_text, back_image,
    show_prev_button, show_next_button,
    cardAdvanceHandler, cardRetreatHandler
  } = props.cardContent

  const frontContent = () => {
    if (front_image && !front_text) {
      return <img src={front_image} alt="replace with dynamic value" />
    } else if (!front_image && front_text) {
      return <p>{front_text}</p>
    } else if (front_image && front_text) {
      return (
        <>
          <img src={front_image} alt="replace with dynamic value" />
          <p>{front_text}</p>
        </>
      )
    } else {
      throw new Error("We shouldn't get to this state")
    }
  }
  // WORKITEM Intermittently bad back card formatting.
  const backContent = () => {
    if (back_image && !back_text) {
      return <img src={back_image} alt="replace with dynamic value" />
    } else if (!back_image && back_text) {
      return <p>{back_text}</p>
    } else if (back_image && back_text) {
      return (
        <>
          <img src={back_image} alt="replace with dynamic value" />
          <p>{back_text}</p>
        </>
      )
    } else {
      throw new Error("We shouldn't get to this state")
    }
  }

  const [isFront, setIsFront] = useState(true)

  const flipHandler = () => {
    setIsFront(!isFront)
  }

  const prevButton = () => {
    <Button
      buttonStyle="secondary"
      onClickHandler={() => {
        cardRetreatHandler()
      }}
    >
      Back
    </Button>
  }

  const nextButton = () => {
    <Button
      buttonStyle="secondary"
      onClickHandler={() => {
        cardAdvanceHandler()
      }}
    >
      Next
    </Button>
  }

  return (
    <div className="flashcard-wrapper">
      <div className="card-surface">
        <div className="card-content-wrapper">
          {isFront ? frontContent() : backContent()}
        </div>
      </div>
      <br />
      <ButtonGroup>

        {show_prev_button ? prevButton() : null}
        <Button buttonStyle="primary" onClickHandler={flipHandler}>
          Flip
        </Button>
        {show_next_button ? nextButton() : null}
      </ButtonGroup>
    </div >
  )
}

Card.propTypes = {
  cardContent: PropTypes.exact({
    card_id: PropTypes.string,
    front_text: PropTypes.string,
    front_image: PropTypes.string,
    back_text: PropTypes.string,
    back_image: PropTypes.string,
    show_prev_button: PropTypes.bool,
    show_next_button: PropTypes.bool,
    cardAdvanceHandler: PropTypes.func.isRequired,
    cardRetreatHandler: PropTypes.func.isRequired
  }),
}

export default Card
