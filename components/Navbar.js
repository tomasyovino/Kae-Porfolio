import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg p-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">LOGO</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">Inicio</a>
            <a className="nav-link" aria-current="page" href="#">Sobre mí</a>
            <a className="nav-link" href="#">Proyectos</a>
            <a className="nav-link" href="#">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar