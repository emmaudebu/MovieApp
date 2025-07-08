import React from 'react'

const Search = ({searchTerm, setSearchTerm} ) => {
    return (
        <div className='search'>
            <div>
                <img src="search.svg" alt="search-icon" />
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="You can search through thousands of movies..."
                />
            </div>

        </div>
    )
}
export default Search
