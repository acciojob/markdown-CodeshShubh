import React, { useState } from 'react';
import MarkdownEditor from './MarkdownEditor';

const App =  ()=>{
    const [markdownInput , setmarkdownInput] = useState('#Enter your Mark Down text here')
      return(
        <div style={{display:'flex'}} className='app'>
            <textarea style={{width:'50%',  height:'50vw' , resize:'none'}}
            value={markdownInput}
            onChange={(e)=>setmarkdownInput(e.target.value)}
            >{markdownInput}</textarea>
            
            <MarkdownEditor markdownInput={markdownInput}/>
        </div>
      )
}

export default App