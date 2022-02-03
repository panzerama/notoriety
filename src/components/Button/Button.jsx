import React from "react"
import PropTypes from "prop-types"
import "./Button.css"

const Button = ({ buttonStyle, children, onClickHandler }) => {
  return (
    <div className="button-container">
      <button
        className={`button-common ${buttonStyle}`}
        onClick={onClickHandler}
      >
        {children}
      </button>
    </div>
  )
}

Button.propTypes = {
  buttonStyle: PropTypes.oneOf(["primary", "secondary", "hide"]).isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default Button
