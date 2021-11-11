import React, {useEffect, useState} from 'react'
import beers from './data/beers'

import ExploreBeers from "./container/ExploreBeers/ExploreBeers"

import "./App.scss";

import CardList from "./components/CardList/CardList"

const App = () => {
  // console.log(beers);

  const [beer, setBeer] = useState(false);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers/')
    .then(res => res.json())
    .then(beerList => setBeer(beerList))
    .catch(err => console.log(err))
  },[]);


  return(
    <>
    {/* <section className="beerlist">
    {beer && <CardList beerList = {beer} />}
    </section> */}

    <section className="searchBeer">
    <h2>Search</h2>
    {beer && <ExploreBeers beerList = {beer} /> }
    </section>
  </>
  )
  

}

//***************code with data file*************  
//   const filteredBeers = beers.filter(beer => beer.image_url)
//   // console.log(filteredBeers);
//   return (
//     <section className="beerlist">
//       <div className="beerlist_filter">
//     <CardList beersArr={filteredBeers}/>
//     </div>
//     </section>
//     )
// }

export default App
