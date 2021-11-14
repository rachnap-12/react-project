import React, { useState } from 'react'

const FilterList = () => {
    const {list} = props;
    const [showList, setShowList] = useState(false);


    const handleClick = () => {
        setShowList(!showList);
    }
    return (
        <div>
        <input type="checkbox" id="abv" value="High ABV" onClick={handleClick}/>
        <label for="abv"> High ABV (greater than 6.0%)</label><br></br>
         </div>   
    )
}

export default FilterList
