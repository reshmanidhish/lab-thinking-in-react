import React from 'react'
function Search({handleChange}){
    // const [searchInput, setSearchInput] = useState("")
    
    return(
<input
        type="text"
        placeholder="Search"
        // value={searchTerm}
        onChange={handleChange}
      />
    )
}
export default Search