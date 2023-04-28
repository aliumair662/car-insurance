import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    return (
        <div className='mb-5'>
            <form className='input-group'>
                <input type="text" style={{ outline: 'none', borderRight: '1px solid black'}} className='border-0 px-5 py-3 w-25' placeholder="Search..."/>
                    <select className='border-0 px-5 py-3 w-25' style={{ outline: 'none', appearance: 'none'}}>
                        <option value="all">All</option>
                        <option value="books">Books</option>
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                    </select>
                    <button type="button" className='border-0 px-2 bg-danger'><SearchIcon sx={{color: 'white', fontSize: '40px'}}/></button>
            </form>
        </div>
    )
}

export default SearchBar