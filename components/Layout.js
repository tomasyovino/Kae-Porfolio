import Navbar from "./Navbar"
import { useState, useEffect } from "react";
import Loading from "./Loader";

const Layout = (props) => {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, []);

  return (
    <>
      <Navbar  navbar={props.navbar} />
      <div className="layout-container container">
        {
          isLoading
            ? <Loading />
            : props.children
        }
      </div>
    </>
  )
}

export default Layout