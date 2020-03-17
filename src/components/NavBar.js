import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function NavBar () {

  const [hideDrop, sethideDrop] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"><i className="fab fa-steam"></i> SreamGif</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"
        onClick={() => { sethideDrop(!hideDrop) }}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent"
        style={{ display: hideDrop ? 'none' : 'block' }}>
        <ul className="navbar-nav mr-auto"></ul>

        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/"><i className="fas fa-home"></i> home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/videos-converter">video</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/images-converter">images</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/capture-image">capture</Link></li>
        </ul>

      </div>
    </nav>
  )
}

export default NavBar
