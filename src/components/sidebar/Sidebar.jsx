import React, { useState } from 'react'
import CloseImg from '../../assets/icon/menu-close.svg'
import CloseOpen from '../../assets/icon/menu.svg'
import './sidebar.css'

const Sidebar = () => {
    const [sidebarActive, setSidebarActive] = useState(false)
    return (
        <div className='sidebar-wrapper'>
            <img src={CloseImg} alt="" className="closebtn" />
        </div>
    )
}

export default Sidebar