import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <>
      <Navbar  navbar={props.navbar} />
      <div className="layout-container container">
        {props.children}
      </div>
    </>
  )
}

export default Layout