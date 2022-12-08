import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from "@mui/icons-material"

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className='topbarWraper'>
                <div className='topleft'>
                    <span className='logo'>EverestPasal</span>
                </div>
                <div className='topRight'>
                    <div className='topbarIconContainer'>
                        <NotificationsNone />
                        <span className='topIconBadge'>2</span>
                    </div>
                    <div className='topbarIconContainer'>
                        <Language />
                    </div>
                    <div className='topbarIconContainer'>
                        <Settings />
                    </div>
                    <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='topAvatar'/>
                </div>
            </div>
        </div>
    )
}

export default Topbar