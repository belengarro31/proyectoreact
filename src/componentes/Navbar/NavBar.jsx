import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <div className='navbar'>
            
            <nav>
                <NavLink to='/category/nosotros' className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Nosotros</NavLink>
                <NavLink to='/category/panificacion'className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Panificacion</NavLink>
                <NavLink to='/category/pasteleria'className={ ({isActive})=> isActive ? 'isActive' : 'isNotActive'}>Pasteleria</NavLink>
            </nav>
            <CartWidget />
        </div>
    )
}

/*const NavBar = () => {
    return(
        <nav>
            <h3>Ecommerce Panificacion</h3>
            <div>
                <button>Home</button>
                <button>Nosotros</button>
                <button>Panificacion</button>
                <button>Pasteleria</button>
            </div>
              
        </nav>

 )
}*/

export default NavBar