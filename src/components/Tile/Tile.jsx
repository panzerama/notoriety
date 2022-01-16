import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

const Tile = ({ title, link }) => {
  return (
    <Card variant="outlined" sx={{ minWidth: '20vw' }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }}>{title}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={link}>{title}</Button> 
      </CardActions>
    </Card>
  )
}

export default Tile
