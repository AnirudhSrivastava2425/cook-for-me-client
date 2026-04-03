import React, { useEffect, useRef, useState } from 'react'
import './search.css'
import { useDebounce } from '../../../hooks/useDebounce'

const SearchBar = ({ val, changeMethod }) => {

    const [value, setValue] = useState(val)

    const inputRef = useRef()


    const handleInput = () => {
        const el = inputRef.current;
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    };

    return (
        <div className='searchbar-wrapper'>
            <div className="input-div">
                <textarea
                    name="input"
                    id="input"
                    placeholder='Provide ingredients, cuisine style, mood etc.'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    ref={inputRef}
                    onInput={handleInput}
                >
                </textarea>
                <button onClick={()=>changeMethod(value)}>Go</button>
            </div>
        </div>
    )
}

export default SearchBar