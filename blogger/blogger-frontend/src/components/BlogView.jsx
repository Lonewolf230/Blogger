import { NavLink } from "react-router-dom"
import './BlogView.css'

function BlogList(){
    return(
        <>
            <h2>My Recent Blogs</h2>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
            <BlogTile/>
        </>
    )

}

function BlogTile(){

    return(
        <>
            <NavLink style={{"textDecoration":"none"}}>
                <div style={{"color":"black"}} className="blog-tile">
                    <div style={{"display":"flex",
                        "justifyContent":"space-between",
                        "alignItems":"center",}}>
                        <h4>1. Blog Name</h4>
                        <p style={{"fontWeight":"200"}}>Posted on 21 Oct 2025</p>
                    </div>
                </div>

            </NavLink>
        </>
    )
}

export {BlogList,BlogTile}