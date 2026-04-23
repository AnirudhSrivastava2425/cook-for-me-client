import React, { useEffect, useState } from 'react'
import './panel.css'
import SearchBar from './searchbar/SearchBar'
import ChatUI from './chat/ChatUI'
import useCookbookStore from '../../store/useCookbookStore'

const AIPanel = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(null)
    const [conversation, setConversation] = useState([])

    const { name, chats, activeChatId, fetchRecipe, isLoading } = useCookbookStore();

    // const getRecipe = async (val) => {
    //     let result = await fetch('https://cook-for-me-server.onrender.com/api/generate-recipe', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             message: val
    //         })
    //     })
    //     let recipe = await result.json();
    //     return recipe
    // }

    // const handleChange = async (value) => {
    //     fetchRecipe(value)

    //     let uniqueKey = Date.now();

    //     if (value.length === 0) {
    //         return
    //     }
    //     setSearch(value)
    //     setLoading(true)

    //     let aiResponse = await getRecipe(value)


    //     setLoading(false)


    //     const newConversation = {
    //         id: uniqueKey,
    //         userRequest: value,
    //         aiResponse: aiResponse.recipe
    //     }

    //     setConversation((prev) => ([...prev, newConversation]))
    //     setSearch('')
    //     // console.log(conversation)
    // }
    const handleChange = (value) => {
        fetchRecipe(value)
    }

    return (
        <div className='panel-wrapper'>
            <div className="intro-text">
                <h1>Your Perfect Recipe, Every Time</h1>
                <h3>Turn the ingredients you already have into delicious, personalized recipes based on your taste, mood, and time.</h3>

            </div>
            {
                isLoading && <ChatUI input={search} />
            }
            {
                conversation.length > 0 && <div className="conversations">
                    {
                        conversation.map((items) => (
                            <ChatUI key={items.id} input={items.userRequest} output={items.aiResponse} />
                        ))
                    }
                </div>
            }

            <SearchBar val={search} changeMethod={handleChange} />
        </div>
    )
}

export default AIPanel
