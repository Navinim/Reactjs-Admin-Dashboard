import React from 'react'
import "./user.css"
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from '@mui/icons-material';
import {Link} from "react-router-dom"

export const User = () => {
    return (
        <div className='user'>
            <div className='userTitleConatiner'>
                <h1 className='userTitle'>Edit User</h1>
                <Link to="/newUser">
                <button className='userAddButton'>Create</button>
                </Link>
            </div>
            {/* start of user info section */}
            <div className='userConatiner'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='userShowImg' />
                        <div className='userShowTopTitle'>
                            <span className='userShowUsername'>Navin Paudel</span>
                            <span className='userShowUserTitle'>Software Engineer</span>
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                            <PermIdentity className="userShowIcon" />
                            <span className='userShowInfoTitle'>navinpaul234</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className="userShowIcon" />
                            <span className='userShowInfoTitle'>11.11.2011</span>
                        </div>
                        <div className='userShowInfo'>
                            <PhoneAndroid className="userShowIcon" />
                            <span className='userShowInfoTitle'>+97712354890</span>
                        </div>
                        <div className='userShowInfo'>
                            <MailOutline className="userShowIcon" />
                            <span className='userShowInfoTitle'>pnavin607@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className="userShowIcon" />
                            <span className='userShowInfoTitle'>Tulsipur-17 Dang, Nepal</span>
                        </div>
                    </div>
                </div>
                {/* end of user info */}
                {/* start of user edit section */}
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type="text" placeholder="navinp1234" className="userUpdateInput" />
                            </div>
                            
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type="text" placeholder="Jhon Paul" className="userUpdateInput" />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type="text" placeholder="email@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Phone</label>
                                <input type="text" placeholder="+977 9801236489" className="userUpdateInput" />
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type="text" placeholder="KTM 29,Nepal" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img src='https://cdn.pixabay.com/photo/2019/09/03/06/15/girl-4448689_960_720.jpg' alt='' className='userUpdateImg' />
                                <label htmlFor='file'><Publish className='userUpdateIcon' /></label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className='userAddButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
