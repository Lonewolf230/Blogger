import './EditProfile.css'
import { RiAccountCircleFill } from 'react-icons/ri'
export default function EditProfile(){

    return(
        <>
            <main className='edit-main'>
                <h1>Your Profile</h1>
                <div>
                    <div>
                        <RiAccountCircleFill size={50}/>
                    </div>
                    <div>
                        <strong>Username</strong>
                        <br />
                        <strong>Created time</strong>
                    </div>
                    <div className='edit-stats'>
                        <div className='edit-stat'>
                            <strong>29</strong>
                            <br />
                            <strong>Followers</strong>
                        </div>
                        <div className='edit-stat'>
                            <strong>50</strong>
                            <br />
                            <strong>Following</strong>
                        </div>
                        <div className='edit-stat'>
                            <strong>100</strong>
                            <br />
                            <strong>No of Posts</strong>
                        </div>
                        <div className='edit-stat'>
                            <strong>29</strong>
                            <br />
                            <strong>Most Likes</strong>
                        </div>                                                
                    </div>
                </div>
            </main>
        </> 
    )
}
