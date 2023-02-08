import React from 'react'

import './Filter.css'

const Filter = (props) => {

    const handleSelectedOption = (event) =>{
        props.onSelectedOption(event.target.value)
    }

    return(
        <div className="filter">
            <div className="filter__title">Filter by:</div>
            <select value={props.selected} onChange={handleSelectedOption} className="filter__select">
                <option value="0">All Todos</option>
                <option value="1">Harvesting the crop</option>
                <option value="2">Animal care</option>
                <option value="3">Farm work</option>
            </select>
        </div>
    )
}

export default Filter
