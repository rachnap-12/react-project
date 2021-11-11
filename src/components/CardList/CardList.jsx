import React from 'react'
import "./CardList.scss";

const CardList = (props) => {

    const {beerList} = props;
//     const { beersArr } = props;
//     console.log(beersArr);

const beerDisplay = beerList.map((beer,index) => (
    <img className="card-list_img" key={index} src={beer.image_url} alt={beer.name} /> 

))
// console.log(BeerList);
    return (
        <>
        <div className="card-list">
            {beerDisplay}
        </div>
          {/* <h2>alt</h2>
          <div class="card-list">
          {BeerList}       
        </div> */}
        </>
    )
}

export default CardList
