import { Outlet } from 'react-router-dom'
import Header from '../pages/Header'
import Footer from '../pages/Footer'

const First = () => {


  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default First