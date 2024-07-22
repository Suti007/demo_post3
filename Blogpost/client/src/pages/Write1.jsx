import React from 'react'
import ReactQuill from 'react-quill';
import { useState, state } from 'react'
const Write1 = () => {
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");
  
  console.log(value)
  return (
    <div className='add'>
      <div className='content'>
        <input type='text' placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className='menu'>
        <div className='item'>i1</div>
        <div className='item'>i2</div>
      </div>
    </div>
  )
}

export default Write
