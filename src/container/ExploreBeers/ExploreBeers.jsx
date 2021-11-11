import React, { useState } from 'react'
import CardList from '../../components/CardList/CardList';

import SearchBox from "../../components/SearchBox/SearchBox"

const ExploreBeers = (props) => {
    const [searchBeer, setSearchBeer] = useState('');
    const { beerList } = props;


    const handleInput = event => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchBeer(cleanInput);
    }

    const filteredBeers = beerList.filter(beer => {
        const beerNameLower = beer.name.toLowerCase();
        return beerNameLower.includes(searchBeer) && beer.image_url;
      })


    return (
        <>
        <SearchBox searchBeer={searchBeer} handleInput={handleInput} />
        <CardList beerList = {filteredBeers} />
        </>
    )
}

export default ExploreBeers
