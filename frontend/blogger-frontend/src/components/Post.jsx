import './Post.css'
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlinePublic } from "react-icons/md";
import { MdOutlineReport } from "react-icons/md";
import { LuBookmark } from "react-icons/lu";
export default function Post(){
    return(
        <>
            <main id='post'>
                <span style={{"display":"flex","gap":"20px"}}><img src="" alt="" height={20} width={20}/><p>Author Name</p></span>
                <section className='post-main'>
                    <div className='post-left'>
                        <h2>This is the heading of the first post you're seeing</h2>
                        <p>Express.js has been the backbone of Node.js web development for years,but are you truly harnessing its power blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
                            blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah Manish dumb ass</p>
                        <div className='post-foot-left'>
                            <p><MdOutlinePublic/></p>
                            <p>Jan 23,2025</p>
                            <p><AiOutlineLike/> 8</p>
                            <p><FaRegComments/> 10</p>
                        </div>
                    </div>
                    <div className='post-right'>
                        <img src='https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg' alt="" height={150} width={200} />
                        <div className='post-foot-right'>
                            <p><MdOutlineReport/></p>
                            <p><LuBookmark/></p>
                        </div>
                    </div>
                </section>
                <hr />
            </main>
        </>
    )
}