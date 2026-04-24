import React, { useState } from 'react'
import CloseImg from '../../assets/icon/menu-close.svg'
import CloseOpen from '../../assets/icon/menu.svg'
import './sidebar.css'
import useSidebar from '../../store/useSideBar'

const Sidebar = () => {
    const {isSidebarActive,setSidebar} = useSidebar();
    return (
        <div className={isSidebarActive ? 'sidebar-wrapper':'sidebar-wrapper sidebar-closed'}>
            <img src={isSidebarActive ? CloseImg : CloseOpen} onClick={setSidebar} alt="" className="closebtn" />
           
        </div>
    )
}

export default Sidebar