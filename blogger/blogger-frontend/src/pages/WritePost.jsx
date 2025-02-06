import { useState } from "react";
import MDEditor, { commands } from "@uiw/react-md-editor"
import './WritePost.css'

export default function WritePost(){
    const [value,setValue]=useState("")
    const handleImageUpload=(event)=>{
        const file=event.target.files[0]
        if(file){
            const imageurl=URL.createObjectURL(file);
            const markdownImg=`![Uploaded Image](${imageurl})`
            setValue((prev)=>`${prev}<br/><br/>${markdownImg}<br/>`)
        }
    }
    const handleVideoUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
          const videoUrl = URL.createObjectURL(file);
          const markdownVideo = `<div style="display: flex; justify-content: center;">
          <video width="500" height="360" controls>
      <source src="${videoUrl}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    </div>`;
          setValue((prev) => `${prev}<br/>${markdownVideo}<br/>`);
        }
    };

    const handleYouTubeEmbed = () => {
        const videoId = prompt("Enter YouTube Video ID:");
        if (videoId) {
          const embedCode = `<div style="display: flex; justify-content: center;"><iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
          setValue((prev) => `${prev}<br/>${embedCode}<br/>`);
        }
      };
    return(
        <>
            <div className="container">
                <h1>Start writing your blog</h1>

                <div style={{ marginBottom: "10px" }}>
                    
                    <button className="options" style={{ marginBottom: "10px" }}>
                        <label htmlFor="image-upload" style={{ cursor: "pointer", marginRight: "10px" }}>
                        Upload Image
                        </label>
                        <input
                        type="file"
                        accept="image/*"
                        id="image-upload"
                        style={{ display: "none" }}
                        onChange={handleImageUpload}
                        />
                    </button>

                    <button className="options">
                        <label htmlFor="video-upload" style={{ cursor: "pointer", marginRight: "10px" }}>
                        Upload Video
                        </label>
                        <input
                        type="file"
                        accept="video/*"
                        id="video-upload"
                        style={{ display: "none" }}
                        onChange={handleVideoUpload}
                        />
                    </button>
                    <button className="options" onClick={handleYouTubeEmbed} style={{ marginLeft: "10px" }}>
                    Embed YouTube Video
                    </button>
                </div>

                <MDEditor value={value} 
                    textareaProps={{placeholder:'Start writing your blog in markdown',}}  
                    onChange={(val)=>setValue(val || "")}
                    visibleDragbar={true}
                    height={600}
                    commands={
                        commands.getCommands().filter(cmd=>cmd.name!=='image')
                    }
                    />
                <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                    <button className="options" >Post blog</button>
                </div>                
            </div>
        </>
    )
}