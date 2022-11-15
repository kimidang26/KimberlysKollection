import React from 'react';
import tiffany from "../../images/4.png";
import lily from "../../images/3.png";
import frenemies from "../../images/2.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ClothingStore from "../../images/ClothingStore.mp4"
import NavBar from "../nav-bar.js";


const home = () => {
  return (

    <div className="hello">
      <iframe width="800" height="1000" src="https://www.youtube.com/embed/YKaiXY7zHxk?controls=0&amp;start=16" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* <NavBar /> */}
    </div>


    //   <Carousel>
    //     <div>
    //         <img src={tiffany} alt="tiffany"  />
    //         <p className="legend">Tiffany</p>
    //     </div>
    //     <div>
    //         <img src={lily} alt="lily" />
    //         <p className="legend">Jordan and Lily</p>
    //     </div>
    //     <div>
    //         <img src={frenemies} alt="frenimies" />
    //         <p className="legend">frenemies</p>
    //     </div>
    // </Carousel>
   )
}

export default home
