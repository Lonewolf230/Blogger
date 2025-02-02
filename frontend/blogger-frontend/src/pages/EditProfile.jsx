import { Outlet,NavLink } from 'react-router-dom'
import PerMonthFollowers from '../components/Charts.jsx'
import Follower from '../components/Follower.jsx'
import FollowersList from '../components/FollowersList.jsx'
import './EditProfile.css'
import { RiAccountCircleFill } from 'react-icons/ri'
import Bio from '../components/Bio.jsx'
export default function EditProfile(){

    return(
        <>
            <main>
                <div className='edit-main'>
                    <div className='edit-profile'>
                        <div className='user-profile-pic-data'>
                            <RiAccountCircleFill size={50}/>
                            <div className='username-date'>
                                <strong>Username</strong>
                                <br />
                                <p>from April 2024</p>
                            </div>
                        </div>
                        
                        <div className='edit-stats'>
                            <NavLink style={{"textDecoration":"none",'color':"black"}} to={'followers'}>
                                <div className='edit-stat'>
                                    <strong>50</strong>
                                    <br />
                                    <strong>Following</strong>
                                </div>
                            </NavLink>
                            
                            <NavLink style={{"textDecoration":"none",'color':"black"}} to={'following'}>
                                <div className='edit-stat'>
                                    <strong>29</strong>
                                    <br />
                                    <strong>Following</strong>
                                </div>   
                            </NavLink>

                            <NavLink style={{"textDecoration":"none",'color':"black"}} to={'posts'}>
                                <div className='edit-stat'>
                                    <strong>100</strong>
                                    <br />
                                    <strong>Blog Posts</strong>
                                </div>   
                            </NavLink>

                            <NavLink style={{"textDecoration":"none",'color':"black"}} to={''}>
                                <div className='edit-stat'>
                                    <strong>29</strong>
                                    <br />
                                    <strong>Most Likes</strong>
                                </div>   
                            </NavLink>
                                                                         
                        </div>
                        <Bio/>
                    </div>

                    <div className='edit-charts'>
                        <Outlet/>
                    </div>


                </div>
            </main>
        </> 
    )
}
