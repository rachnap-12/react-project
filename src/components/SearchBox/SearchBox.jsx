import React from 'react'

import "./SearchBox.scss"

const SearchBox = (props) => {

    const {searchBeer, handleInput} = props;

    return (
        <form className="searchDiv">
        <input type="text" placeholder="Search..."
        value={searchBeer}
        onInput = {handleInput}
        />
        </form>
    )
}

export default SearchBox
