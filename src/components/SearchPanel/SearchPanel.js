import React from 'react'
import './SearchPanel.css'

const searchText = "Type here to write"

const SearchPanel = () => {
    return <input className = "search-input" placeholder={searchText}/>
}

export default SearchPanel