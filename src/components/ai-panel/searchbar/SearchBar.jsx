import React, { useEffect, useRef, useState } from 'react'
import './search.css'
import { useDebounce } from '../../../hooks/useDebounce'
import useCookbookStore from '../../../store/useCookbookStore'

const SearchBar = () => {

    const [value, setValue] = useState('')

    const inputRef = useRef()

    const { name, chats, activeChatId, activeReq, fetchRecipe, isLoading } = useCookbookStore();


    const handleInput = () => {
        const el = inputRef.current;
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
    };

    const handleFetchRecipe = () =>{
        fetchRecipe(value);
        setValue('')
    }

    return (
        <div className='searchbar-wrapper'>
            <div className="input-div">
                <textarea
                    name="input"
                    id="input"
                    placeholder='Provide ingredients, dietary preference, or mood...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    ref={inputRef}
                    onInput={handleInput}
                    rows={1}
                >
                </textarea>
                <button onClick={handleFetchRecipe}>Generate My Recipe</button>
            </div>
        </div>
    )
}

export default SearchBar