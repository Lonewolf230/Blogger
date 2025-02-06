import React from 'react'
import './Auth.css'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react'

export default function AuthPage(){
    const [login,setLogin]=useState(false);
    const [creds,setCreds]=useState({email:"",uname:"",pwd:""})
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target
        setCreds((prev)=>({
            ...prev,
            [name]:value
        }))
        console.log(creds)
    }

    const handleSubmit=()=>{

        
        navigate('/home')
    }
    
    return(
        <>
            <main id="auth-main" className={login? 'reverse':''}>
                <section className='form-section'>
                    <form action="" id='auth-form' onSubmit={handleSubmit}>
                        {login?<input 
                            type="text" name="email" id="email" placeholder='Enter email' onChange={handleChange} value={creds.email} required/>:""}
                        {/* <p>{login?"(or)":""}</p> */}
                        <input type="text" name='uname' id='uname' placeholder='Enter username' onChange={handleChange} value={creds.uname} minLength={6} required/>
                        <input type="password" name="pwd" id="pwd" placeholder='Enter password' onChange={handleChange} value={creds.pwd} minLength={6} required/>
                        <button className='login pointer' >
                            <p>{login?"Sign Up":"Login"}</p>
                        </button>
                        <p style={{"color":"blue","margin":"2px"}} className='pointer' onClick={()=>setLogin(!login)}>{!login?"Are you new? Sign Up":"Already an user? Login"}</p>
                        <div className='socials'>
                            <button className='pointer'><img src='https://imagepng.org/wp-content/uploads/2019/08/google-icon.png' alt="" height={20} width={20}/><p>{login?"Sign Up with Google":"Login with Google"}</p></button>
                            <button className='pointer'><img src='https://th.bing.com/th/id/OIP.9g4dkKVAUyciOuDI9_vEYQHaHa?rs=1&pid=ImgDetMain' alt="" height={20} width={20}/><p>{login?"Sign Up with Apple":"Login with Apple"}</p></button>
                        </div>
                    </form>
                </section>
                <section id='auth-content'>
                    <div>
                        <h1 style={{"color":"blue","fontSize":"4rem"}} className='heading'>Blogger</h1>
                        <h4>Your one place stop to collab and share knowledge</h4>
                    </div>
                </section>
            </main>
        </>
    )
}