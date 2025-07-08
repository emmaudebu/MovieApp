import React from 'react'

const Search = ({searchTerm, setSearchTerm} ) => {
    return (
        <div className='search'>
            <div>
                <img src="search.svg" alt="search-icon"/>
                <input type="text"
                       value={setSearchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                       placeholder="You can Search through thousands of movies..."/>

            </div>

        </div>
    )
}
export default Search
