import React, { useEffect, useState } from 'react'

const MarkdownEditor = ({markdownInput}) => {
    const [input, setinput] = useState()
    useEffect(()=>{
       setinput(markdownInput)
    })
  return (
    <div style={{border:'1px solid red', width:'50%'}} className='preview'>
        {input}
    </div>
  )
}

export default MarkdownEditor