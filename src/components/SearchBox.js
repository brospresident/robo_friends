import React  from 'react'

function SearchBox({ change }) {
    return (
        <div className = 'pa2'>
            <input onChange = {change} className = 'pa3 ba b--green bg-lightest-blue' type = 'search' placeholder = 'search robots' />
        </div>
    )
}

export default SearchBox;
