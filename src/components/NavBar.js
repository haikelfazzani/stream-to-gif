import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function NavBar () {

  const [hideDrop, sethideDrop] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">SreamGif</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation"
        onClick={() => { sethideDrop(!hideDrop)}}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent"
        style={{ display: hideDrop ? 'none' : 'block' }}>
        <ul className="navbar-nav mr-auto"></ul>

        <Link className="btn btn-light" to="/doc">DOC</Link>

      </div>
    </nav>
  )
}

export default NavBar
