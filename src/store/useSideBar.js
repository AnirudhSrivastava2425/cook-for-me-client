import {create} from 'zustand';

const useSidebar = create((set,get)=>({
    isSidebarActive:true,

    setSidebar: ()=>{
        set((state)=>({
            isSidebarActive: !state.isSidebarActive
        }))
    }
}))

export default useSidebar;