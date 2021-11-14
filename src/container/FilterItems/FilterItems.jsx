import React from 'react'
import FilterList from "../../components/FilterList/FilterList";

const FilterItems = (props) => {

    const [showItem, setShowItem] = useState(false);
    const { beerList } = props;

    // const handleClick = () => {
    //     setShowItem(!showItem);
    // }

    const filteredAbv = beerList.filter(beer => {
        const beerAbv = beer.abv > 6.0;
        console.log("In Filter Item");
        console.log(beerAbv);
        return filteredAbv.includes(showItem) && beerList.image_url;
    } );

    
    return (
        <nav>
        {
            showItem && <FilterList list={filteredAbv} />
        }
        {/* // <FilterList list ={filteredAbv}  /> */}
        </nav>
    )
}

export default FilterItems
