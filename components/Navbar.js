import Link from "next/link";

const Navbar = () => {

  return (
    <nav className="navbar navbar-dark navbar-expand-lg p-4">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">LOGO</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" aria-current="page" href="/">Inicio</Link>
            <Link className="nav-link" aria-current="page" href="/about">Sobre mí</Link>
            <Link className="nav-link" href="/projects">Proyectos</Link>
            <Link className="nav-link" href="/contact">Contacto</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar