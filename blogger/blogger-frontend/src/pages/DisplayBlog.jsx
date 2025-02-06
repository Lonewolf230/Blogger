import Markdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import rehypeSanitize from "rehype-sanitize"
import rehypeHighlight from "rehype-highlight"
import remarkBreaks from "remark-breaks"
import './Display.css'
import CommentThread from "../components/BlogViewComponents.jsx"
import { AiOutlineLike } from "react-icons/ai";

export default function DisplayBlog(){

    
    const escapeMarkdownCodeBlocks = (markdown) => {
        // Regular expression to match code blocks (both with and without language specification)
        // This regex looks for:
        // 1. Start of line or newline
        // 2. Three backticks optionally followed by a language name
        // 3. Any content (non-greedy) until three backticks
        const codeBlockRegex = /^```[\w]*\n([\s\S]*?)^```$/gm;
        
        // Process the markdown content
        return markdown.replace(codeBlockRegex, (match, codeContent) => {
            // Escape any backticks within the code content
            const escapedCode = codeContent.replace(/`/g, '\\`');
            
            const languageMatch = match.match(/^```([\w]*)/);
            const language = languageMatch ? languageMatch[1] : '';
            
            return '```' + language + '\n' + escapedCode + '\n```';
        });
    };

    const content=`# Hello and Welcome to Blog Number 1

| Header | Header |
|--------|--------|
| Cell | Cell |
| Cell | Cell |
| Cell | Cell |

\`\`\`
import React from 'react'
export default function SampleBlock(){

    return(
        <>
            <h1>Hello World</h1>
        </>
    )
}
\`\`\`

\`\`\`
public class Main{
    public static void main(String[] args){
        System.out.println("Hello world");
    }
}
\`\`\`


> Manish said hello

Hello and bye

1. **Manish**
2. **Hello**

- *Good*
- *Bye*

> *Hello and bye how are you jdiefjeifjeifjeifefjeifj*

`

    return(
        <>
            <div>
                <div className="markdown-container">
                    <Markdown 
                        
                        children={content}
                        remarkPlugins={[remarkGfm,remarkBreaks]} 
                        rehypePlugins={[rehypeRaw,rehypeSanitize,rehypeHighlight]}
                        />
                </div>
                <CommentThread/>
            </div>
        </>
    )
}