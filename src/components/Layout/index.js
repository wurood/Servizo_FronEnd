import Header  from '../Header/index'
import Footer from '../Footer/index'
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout