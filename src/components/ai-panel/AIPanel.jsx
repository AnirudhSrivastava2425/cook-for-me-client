import React, { useEffect, useState } from 'react'
import './panel.css'
import SearchBar from './searchbar/SearchBar'
import ChatUI from './chat/ChatUI'
import useCookbookStore from '../../store/useCookbookStore'
import useSidebar from '../../store/useSideBar'

const AIPanel = () => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(null)
    const [conversation, setConversation] = useState([])

    const { name, chats, activeChatId, activeReq, fetchRecipe, isLoading } = useCookbookStore();
    const {isSidebarActive} = useSidebar();
    // const handleChange = (value) => {
    //     fetchRecipe(value)
    // }
    useEffect(() => {
        let currChat = chats.map((chat)=>{
            if (chat.id === activeChatId) {
                setConversation(prev=>chat.conversation)
            }
        })    
    },[isLoading])
    // using isLoading for dependency: for reference, right now flow is working because setLoading is happening before and after.

    return (
        // <div className='panel-wrapper'>
        <div className={isSidebarActive ? 'panel-wrapper':'panel-wrapper full-view'}>
            <div className="intro-text">
                <h1>Your Perfect Recipe, Every Time</h1>
                <h3>Turn the ingredients you already have into delicious, personalized recipes based on your taste, mood, and time.</h3>

            </div>
            {
                conversation.length > 0 && <div className="conversations">
                    {
                        conversation.map((items) => (
                            <ChatUI key={items.id} input={items.userRequest} output={items.aiResponse} />
                        ))
                    }
                </div>
            }
            {
                isLoading && <ChatUI input={activeReq} />
            }

            <SearchBar val={search} 
            // changeMethod={handleChange} 
            />
        </div>
    )
}

export default AIPanel
