import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className='navbar'>
            {/* <Link to='/' className="logo">
                <div className="logo">
                    {/* <img src='/public/fondonav.jpg' alt="logoelaguila" /> */}
                {/* </div> */}
            {/* </Link> */}
            <nav>
                <div className="logo">
                <img src="/public/fondonav.jpg" alt="" />
                </div>
                {/* <div class="menu fw-bold"> */}
                    <NavLink to='/category/nosotros' className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Nosotros</NavLink>
                    <NavLink to='/category/panificacion'className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Panificacion</NavLink>
                    <NavLink to='/category/pasteleria'className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Pasteleria</NavLink>
                {/* </div> */}
            </nav>
            <CartWidget />
        </div>
    )
}


export default NavBar