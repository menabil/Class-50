import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Rootlayouts = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Rootlayouts