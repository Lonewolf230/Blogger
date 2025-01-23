import './Home.css'
import Searchbar from '../components/Searchbar.jsx';
import Post from '../components/Post.jsx';
import { NavLink } from 'react-router-dom';
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import AuthProfSumm from '../components/AuthorProfSumm.jsx';
export default function Home(){
    return(
        <>
            <nav id="navbar-home">
                <div className='navbar-left'>
                    <NavLink style={{"textDecoration":"none","paddingRight":"10px"}}><p>Blogger</p></NavLink>
                    <Searchbar/>
                </div>
                <div className='navbar-right'>
                    <NavLink style={{"textDecoration":"none"}} ><IoIosNotifications size={30}/></NavLink>
                    <NavLink style={{"textDecoration":"none"}}>
                        <MdEditSquare size={30}/>
                    </NavLink>
                    <NavLink style={{"textDecoration":"none"}}>
                        <RiAccountCircleFill size={30}/>
                    </NavLink>
                        
                </div>
            </nav>
            <main id='home-main'>
                <section className='main-posts'>
                    <div className='main-post-scroll'>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                        <Post/>
                    </div>
                    <div>
                        <AuthProfSumm/>
                    </div>
                </section>
            </main>
        </>
    )
}