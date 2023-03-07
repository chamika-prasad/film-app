import React,{useEffect} from 'react'
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./MovieList.css";

const MovieList = (props) => {
  const Movie_id = props.item.movie_id
  return (

    <Card bg='dark' border="primary" style={{opacity:0.8,color:"white"}}>
    <Link to={`/Movie/${Movie_id}`}><Card.Img 
        variant="top" 
        src={props.item.movie_image}
        height="200px"
        style={{objectFit:"cover"}}
        /></Link>
        <Card.Body className="d-flex flex-column ">
            <Card.Title className="  align-items-baseline ">
                <span className="movieName">{props.item.movie_name}</span>
                {/* <span className="ms-2 text-muted">{props.item.movie_year}</span> */}
            </Card.Title>
            <Card.Text className="row">
              <span className="col">{props.item.movie_language}</span>  
              <span className="col year"> {props.item.movie_year}</span>
                </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default MovieList
