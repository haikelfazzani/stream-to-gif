import React from 'react';
import '../styles/input-file.css'

function InputFile ({ handleFile, multiple=false }) {
  return (
    <div className="file-drop-area mb-3">
      <span><i className="fas fa-cloud-download-alt"></i></span>
      <span className="file-msg">Drag 'n' drop some files here, or click to select files</span>
      <input className="file-input" type="file" onChange={handleFile} multiple={multiple} />
    </div>
  )
}

export default InputFile
