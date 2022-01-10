import React from 'react'
import { Link } from 'react-router-dom'
import './Tile.css'

const Tile = ({ title, link }) => {
  return <div className="tile">
    <Link to={link}>{title}</Link>
  </div>
}

export default Tile