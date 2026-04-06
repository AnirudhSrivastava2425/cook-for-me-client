import React, { useEffect, useState } from 'react'
import './panel.css'
import SearchBar from './searchbar/SearchBar'
import ChatUI from './chat/ChatUI'

const AIPanel = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [conversation, setConversation] = useState([])

    const getRecipe = async (val) => {
        let result = await fetch('https://cook-for-me-server.onrender.com/api/generate-recipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: val
            })
        })
        let recipe = await result.json();
        return recipe
    }

    const handleChange = async (value) => {

        let uniqueKey = Date.now();

        if (value.length === 0) {
            return
        }
        setSearch(value)
        setLoading(true)

        let aiResponse = await getRecipe(value)


        setLoading(false)


        const newConversation = {
            id: uniqueKey,
            userRequest: value,
            aiResponse: aiResponse.recipe
        }

        setConversation((prev) => ([...prev, newConversation]))
        setSearch('')
        // console.log(conversation)
    }

    return (
        <div className='panel-wrapper'>
            <h1>Feeling Hungry?</h1>
            <h3>Not to worry, chef is here to cook for you.</h3>
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
