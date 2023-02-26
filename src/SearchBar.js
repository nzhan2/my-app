import React, { useState } from 'react'
import './SearchBar.css'
import history from './history';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    function handle(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            console.log(e.target.value);
            history.push('/Results')
        }
    }

return <div>
    <div onKeyDown={handle}>
        <input 
            id="search_bar"
            type="text"
            size="100"
            placeholder="Enter Unknown Object Here..."
            onChange={handleChange}
            onKeyDown={handle}
            value={searchInput} />
    </div>
</div>
};

export default SearchBar;

