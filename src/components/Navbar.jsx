import {Link} from 'react-router-dom'
function Navbar(){
  const navStles={
    color: "#fff",
    listStyle: "none",
    textDecoration: "none",
  }
  return(
    <div>
      <nav className="flex justify-between w-full h-24 px-10 bg-slate-500" >
              {/* Boton que nos redirige al home */}
        <Link to={"/"}  className="my-auto text-2xl font-bold text-white">
          <h2>
            Store Logo
          </h2>
        </Link>
        

        <ul className="my-auto text-lg text-white">
          <Link to = {"/cart"}>
            <li>
              Cart items: 
              <span className="cart-count mx-3">
                0
              </span> 
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
export default Navbar;