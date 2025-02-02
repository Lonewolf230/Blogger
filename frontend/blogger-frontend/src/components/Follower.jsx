

import { RiAccountCircleFill } from "react-icons/ri"
export default function Follower(){

    return(
        <>
            <div style={{"display":"flex",
                        "justifyContent":"space-between"}}>
                <RiAccountCircleFill size={40}/>
                <p>Username</p>
                <p style={{"fontWeight":"200","fontSize":"0.5rem","position":"relative","top":"40px"}}>2 months ago</p>
            </div>
            <hr />
        </>
    )
}