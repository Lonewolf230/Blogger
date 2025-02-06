import './Home.css'
import Searchbar from '../components/Searchbar.jsx';
import Post from '../components/Post.jsx';
import { NavLink, Outlet } from 'react-router-dom';
import { RiAccountCircleFill } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { MdEditSquare } from "react-icons/md";
import AuthProfSumm from '../components/AuthorProfSumm.jsx';
export default function Home(){
    return(
        <>
            
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