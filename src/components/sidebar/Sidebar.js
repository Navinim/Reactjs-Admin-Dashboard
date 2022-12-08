import React from 'react'
import "./sidebar.css"
import { LineStyle, TrendingUp, Timeline, GroupOutlined, Inventory2Outlined, PaidOutlined, AssessmentOutlined, ReportOutlined, WorkOutlineOutlined, EmailOutlined, DynamicFeedOutlined, ChatBubbleOutlineOutlined } from "@mui/icons-material"
import {Link} from "react-router-dom"
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebarWraper'>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                    <Link  to="/" className="link">
                        <li className='sidebarListItem active'>
                            <LineStyle className='sidebarIcon' />
                            Home
                        </li>
                        </Link>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Quick Menu</h3>
                    <ul className='sidebarList'>
                        <Link  to="/users" className="link">
                        <li className='sidebarListItem '>
                            <GroupOutlined className='sidebarIcon' />
                             Users
                        </li>
                        </Link>
                        <Link  to="/products" className="link">
                        <li className='sidebarListItem'>
                            <Inventory2Outlined className='sidebarIcon' />
                            Products
                        </li>
                        </Link>
                        
                        <li className='sidebarListItem'>
                            <PaidOutlined className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className='sidebarListItem'>
                            <AssessmentOutlined className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Notification</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem '>
                            <EmailOutlined className='sidebarIcon' />
                            Mail
                        </li>
                        <li className='sidebarListItem'>
                            <DynamicFeedOutlined className='sidebarIcon' />
                            Feedback
                        </li>
                        <li className='sidebarListItem'>
                            <ChatBubbleOutlineOutlined className='sidebarIcon' />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className='sidebarMenu'>
                    <h3 className='sidebarTitle'>Staff</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListItem '>
                            <WorkOutlineOutlined className='sidebarIcon' />
                            Manager
                        </li>
                        <li className='sidebarListItem'>
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className='sidebarListItem'>
                            <ReportOutlined className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar