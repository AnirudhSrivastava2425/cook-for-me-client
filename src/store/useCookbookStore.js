import { create } from "zustand";
import axios from "axios";

const useCookBookStore = create((set, get) => ({
    name: 'Anirudh',
    chats: [],
    activeChatId: null,
    isLoading: false,

    // Method to create new chat
    createChat: () => {
        const newChat = {
            id: crypto.randomUUID(),
            title: null,
            timeStamp: Date.now(),
            conversation: [],
        };
        set((state) => ({
            chats: [newChat, ...state.chats],
            activeChatId: newChat.id
        }));
    },

    // Method to get a new recipe
    fetchRecipe: async (inp) => {

        set({ isLoading: true })
        try {
            let result = await axios.post('https://cook-for-me-server.onrender.com/api/generate-recipe', {
                message: inp
            })
            let newRecipe = result.data.recipe

            let newConversation = {
                id: crypto.randomUUID(),
                userRequest: inp,
                aiResponse: newRecipe
            }

            let { activeChatId } = get();

            if (!activeChatId) {
                const newChat = {
                    id: crypto.randomUUID(),
                    title: null,
                    timeStamp: Date.now(),
                    conversation: [],
                };
                set((state) => ({
                    chats: [newChat, ...state.chats],
                    activeChatId: newChat.id
                }));
                activeChatId = get().activeChatId;
            }
            set((state) => ({
                chats: state.chats.map((chat) =>
                    chat.id === activeChatId ? {
                        ...chat,
                        conversation: [...chat.conversation, newConversation]
                    } : chat
                ),
                isLoading: false
            }))
            console.log(newConversation)
        } catch (error) {
            set({isLoading: false})
            console.log(error)
        }
    }
}))

export default useCookBookStore;