import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import DisplayModelsDetails from './DisplayModelsDetails';
import OneCar from "./OneCar"
import "../carCardsStyling.css"

const CarModels =()=>{
    const [data, setData] = useState([]);
    const test=[1,2,3,4,5,6]
    useEffect(()=>{
        axios.get('http://localhost:5000/api/cars/')
          .then((res) => {
            setData(res.data);
          })
          .catch(err => console.log(err));
      },[])
    return(
      <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="font-palanquin py-8 text-4xl uppercase font-bold text-gray-600 lg:max-w-lg">
          <span className='text-normal text-yellow-400'>&#9679;</span> Discover Our Car Fleet
        </h2>
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="theFilter">
  <div className="theTitle PP">
    <div className="Tit">Car Catalogue</div>
    <div className="DesTit">Explore our cars you might like!</div>
  </div>
  <div className="theChamp PP">
    <select id="cars">
      <option value="volvo">Price</option>
      <option value="saab">Under 100dt</option>
      <option value="opel">Under 150dt</option>
      <option value="audi">Under 200dt</option>
    </select>
    <select id="cars">
      <option value="volvo">
        Manufacture
        <div id="theLL">(3)</div>
      </option>
      <option value="saab">Volkswagen</option>
      <option value="opel">BMW</option>
      <option value="audi">Mercedes</option>
    </select>
    <select id="cars">
      <option value="volvo">
        Type
        <div id="theLL">(5)</div>
      </option>
      <option value="saab">Sedan</option>
      <option value="opel">Pick up</option>
      <option value="audi">SUV</option>
      <option value="audi">Off Road</option>
      <option value="audi">Hatchback</option>
    </select>
  </div>
</div>

{/* end of the filltre */}
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --> */}
      
        {test.map((car, i) => (
         /*    <DisplayModelsDetails
              car={car}
              key={i}
            /> */
              <OneCar/>
              
        
            
          ))}


        </div>
       
      </div>
    </>
    )
}
export default CarModels