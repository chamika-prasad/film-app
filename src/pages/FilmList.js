import React, { useState, useEffect } from "react";
import ParticlesBackground from "../component/ParticlesBackground";
import "./FilmList.css";
import NavBar from "../component/NavBar";
import MovieList from "../component/MovieList";
import { FilmData } from "../data/filmdata";
import { Row, Col } from "react-bootstrap";

const FilmList = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  const [change,SetChange] = useState(false);
  const [year,setYear] = useState(null)
  const [language,setLanguage] = useState(null)
  const [gener,setGener] = useState(null)
  const [dataSet, setDataSet] = useState(FilmData);


  useEffect(() => {
    if (searchTerm != null) {
      const filteredProducts = FilmData.filter((film) =>
        film.movie_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  
      setDataSet(filteredProducts);
    }else if(year != null){
      const filteredProducts = FilmData.filter((film) =>
        //film.movie_year.includes(year)
        film.movie_year === year
      );
       setDataSet(filteredProducts);
      // console.log(filteredProducts);
    }else if(language != null){
      const filteredProducts = FilmData.filter((film) =>
        film.movie_language.toLowerCase().includes(language.toLowerCase())
      );
  
      setDataSet(filteredProducts);
    }
    else if(gener != null){
      const filteredProducts = FilmData.filter((film) =>
        // film.movie_type.toLowerCase().includes(language.toLowerCase())
        ( film.movie_type.filter((item) =>
        item.toLowerCase().includes(gener.toLowerCase())
        
        )).length !== 0
      );
  
      setDataSet(filteredProducts);
    }
  
  }, [change]);

  return (
    <div className="entire">
      <div className="particle">
        <ParticlesBackground />
      </div>
      <div className="content">
        <NavBar setSearchTerm={setSearchTerm} SetChange={SetChange} change={change} setYear={setYear} setLanguage={setLanguage} setGener={setGener}/>
      </div>

      {/* <div className="siteName">
        <h1>filmSEE.com</h1>
      </div> */}

      {/* <div>
        <row xs={1} md={2} lg={4}>

          {FilmData.map((item,index) => {
           <col key={index}>
               <MovieList item={item}/>
            </col>
          })}
        </row>
      </div> */}
      <div className="movieList">
        <Row xs={1} md={2} lg={4} className="g-3">
          {dataSet.map((item) => (
            <Col key={item.movie_id} className="movieItem">
              <MovieList item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default FilmList;
