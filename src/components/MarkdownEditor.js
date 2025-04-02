import React from 'react'

const MarkdownEditor = ({markdownInput}) => {
  return (
    <div style={{border:'1px solid red', width:'50%'}}>
        {markdownInput}
    </div>
  )
}

export default MarkdownEditor