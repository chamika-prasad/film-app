import React,{useEffect, useState} from "react";
import { SideBarMenu } from "../data/sidebarmenu";
import "./SideBar.css";
import SideBarMenuData from "./SideBarMenuData";
import { SideBarData } from "../data/sidebardata";
import { FilmData } from "../data/filmdata";

const SideBar = (props) => {
  const setSideBar = () => {
    props.setSlideBar(false);
  };

  //setYear={props.setYear} SetChange={props.SetChange} change={props.change}

//   const [years,setYears] = useState([])

//   const set = (x) => {
//     setYears(...years,x)
//     // setYears(years => [...years, x])
//   }

// useEffect(() => {
  
//   // {/* setcartProductList([...cartProductList,item.id]) */}

//   // if (searchTerm != null) {
     
//     //console.log( "test" + filteredProducts);
//     //setDataSet(filteredProducts);
  

//   //console.log( filteredProducts)
//   if(FilmData.length != 0){
//     FilmData.map((film) =>
    
//     // setYears(...years,film.movie_year)
//    // years.includes(film.movie_year) ? null : set(film.movie_year)
//     // set(film.movie_year)
//     //console.log(years.includes(film.movie_year))
//     //console.log(film.movie_year)

//     years.length == 0 ? 

//     set(film.movie_year) :
//     //console.log('false'):

//      years.includes(film.movie_year) == true ? null : set(film.movie_year)
//     //console.log('true')
    
//     );

//     // console.log(years)
//   }
  

//   // if(years.length == 0){
//   //   console.log('null');
//   // }else{
//   //   console.log('value');
//   // }

//   // FilmData.filter((film) =>


//   // years.length == 0 ? 
//   // setYears([...years,film.movie_year]) :
  
//   // years.includes(film.movie_year) ? null:

//   // setYears([...years,film.movie_year])
//   // );

  
//   //console.log(years)
// }, [])


  return (
    <div className="closeButton">
      <div className="d-flex justify-content-between align-items-baseline">
      <img
        className="px-2 close"
        src="images/nav/close.png"
        alt=""
        onClick={(e) => {
          setSideBar();
        }}
      />
      <div className="sidebarSiteName">
        <h1>filmSEE.com</h1>
      </div>
      </div>
      <div className="py-3 Main">
        {SideBarMenu.map((item, index) => {
          return <SideBarMenuData item={item} setFlag={props.setFlag} flag={props.flag} index={index} key={index} setYear={props.setYear} SetChange={props.SetChange} setLanguage={props.setLanguage} setGener={props.setGener}/>;
        })}
      </div>
    </div>
  );
};

export default SideBar;
