import React from 'react';
import tiffany from "../../images/4.png";
import lily from "../../images/3.png";
import frenemies from "../../images/2.png";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const home = () => {
  return ( 
  <Carousel>
    <div>
        <img src={tiffany} alt="tiffany"  />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={lily} alt="lily" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={frenemies} alt="frenimies" />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>


    
  )
}

export default home
