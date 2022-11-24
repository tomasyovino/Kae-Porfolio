import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="layout-container container">
        {props.children}
      </div>
    </>
  )
}

export default Layout