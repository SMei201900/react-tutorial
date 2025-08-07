import React from 'react'

const SearchBar = ({ searchTitle, setSearchTitle }) => {
    // This function updates searchTitle when user types into text input
    const handleChange = (e) => {
        setSearchTitle(e.target.value);
    }

  return (
    <div>
        {/* Added a label and text input as UI elements a user can enter text into */}
        <label htmlFor="searchTitle">
            <p>Search for Book by title</p>
            <input type="text" name="searchTitle" id="searchTitle" className="form-input" 
              placeholder="Ex: Tom Sawyer" value={searchTitle} onChange={handleChange} />
        </label>
    </div>
    
  )
}

export default SearchBar

