import { Outlet } from 'react-router-dom'
import HeaderNav from '../Navigation/HeaderNav'
import Footer from '../Navigation/Footer'

const Layout = () => {
  return (
    <div>
      <HeaderNav />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
