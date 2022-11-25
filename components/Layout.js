import Navbar from "./Navbar"

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="layout-container container p-4">
        {props.children}
      </div>
    </>
  )
}

export default Layout