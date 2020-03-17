import React from 'react';
import '../styles/ImgModal.css';

export default function ImgModal ({ url, show, setShow }) {

  const closeModal = () => { setShow(false); }

  return (<div className="img-modal" 
  onClick={closeModal}
  style={{ display: show ? 'flex' : 'none' }}>
    <img src={url} alt="preview" />
  </div>);
}