import React from 'react';
import '../styles/input-file.css'

function InputFile ({ handleFile }) {
  return (
    <div className="file-drop-area mb-3">
      <span className="file-msg">Drag 'n' drop some files here, or click to select files</span>
      <input className="file-input" type="file" onChange={handleFile} />
    </div>
  )
}

export default InputFile
