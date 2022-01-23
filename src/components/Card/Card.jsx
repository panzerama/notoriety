import React, { useState } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button"
import "./Card.css"
import ButtonGroup from "../ButtonGroup/ButtonGroup"

const Card = (props) => {
  const { front_text, front_image, back_text, back_image, cardAdvanceHandler, cardPreviousHandler, showBack
  , showFront} =
    props.cardContent

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

  return (
    <div className="flashcard-wrapper">
      <div className="card-surface">
        <div className="card-content-wrapper">
          {isFront ? frontContent() : backContent()}
        </div>
      </div>
      <br />
      <ButtonGroup>
        <Button buttonStyle="primary" onClickHandler={flipHandler}>
          Flip
        </Button>
        {showBack &&
        <Button buttonStyle="secondary" onClickHandler={() => {
          cardPreviousHandler()
          }}
        >
          Back
        </Button>
        }
        {showFront && 
        <Button
          buttonStyle="secondary"
          onClickHandler={() => {
            cardAdvanceHandler()
          }}
        >
          Next
        </Button>
        }
      </ButtonGroup>
    </div>
  )
}

Card.propTypes = {
  cardContent: PropTypes.exact({
    card_id: PropTypes.string,
    front_text: PropTypes.string,
    front_image: PropTypes.string,
    back_text: PropTypes.string,
    back_image: PropTypes.string,
    cardAdvanceHandler: PropTypes.func.isRequired,
  }),
}

export default Card
