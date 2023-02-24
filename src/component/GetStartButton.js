import React from 'react'
import "./GetStartButton.css";
import { useNavigate } from 'react-router-dom'

const GetStartButton = () => {

  const navigate = useNavigate()

  const handleClick = (e) => {
    e.preventDefault()
    navigate('/FilmList')
  }

  return (
    
    <div>
      <button class="button" onClick={(e) => handleClick(e)}><span>Get Start </span></button>
    </div>
  )
}

export default GetStartButton
