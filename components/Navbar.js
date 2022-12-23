import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ navbar }) => {
  const router = useRouter();

  return (
    <nav className="navbar navbar-dark navbar-expand-lg container">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">TY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link p-3" aria-current="page" href="/about" locale={router.locale} >{navbar.navLinks.about}</Link>
            <Link className="nav-link p-3" href="/projects" locale={router.locale} >{navbar.navLinks.projects}</Link>
            <Link className="nav-link p-3" href="/contact" locale={router.locale} >{navbar.navLinks.contact}</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar