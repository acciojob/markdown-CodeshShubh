import React, { useEffect, useState } from 'react';
import {marked} from 'marked';

const MarkdownEditor = ({markdownInput}) => {
    const [input, setinput] = useState(markdownInput);
    const [isLoading , setisLoading] = useState(false)
    useEffect(()=>{
        setisLoading(true);
       const vaule=  setTimeout(()=>{
            setinput(markdownInput)
            setisLoading(false)
         },500)
         return ()=>clearInterval(vaule)
         
    },[markdownInput])

  
  return (
    <div style={{border:'1px solid red', width:'50%'}} className='preview'>
 {
    isLoading ? ( <p>Loading.....</p> ) : <div dangerouslySetInnerHTML={{ __html: marked(input) }} />)
 }
    </div>
  )
}

export default MarkdownEditor