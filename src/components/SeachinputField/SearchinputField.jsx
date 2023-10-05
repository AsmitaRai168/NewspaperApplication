import React from 'react'
import { FaSearch } from "react-icons/fa";


import './searchfield.css'
const SearchinputField=({ inputType, onChangeInput,setPlaceholder })=> {
  return (
    <div>
    <div className="input-container">
            <div className="input-main-container">
              <input
                type={inputType}
                onChange={onChangeInput}
                className="input-field"
                placeholder='search...'
              />            </div>

              <div className='search-icon'>              
              <FaSearch/>

              </div>
            
          </div>
        </div>
  )
}

export default SearchinputField;
