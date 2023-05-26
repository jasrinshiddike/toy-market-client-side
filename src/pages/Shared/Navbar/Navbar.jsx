import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, auth } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => { console.log(error) })
  }

  const navItems = <>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/alltoys">All Toys</Link> </li>
    <li><Link to="/blogs">Blogs</Link></li>
    {
      user?.email ? 
      <>
        <li><Link to="/mytoys">My Toys</Link></li>
        <li><Link to="/addtoys">Add a Toys</Link></li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </> 
        
        : <li><Link to="/login">Login</Link></li>

    }
    {user &&
      <li className="text-3xl"><tooltip title={auth?.currentUser?.displayName} ><FaUserCircle /></tooltip></li>
    }



  </>

  return (
    <div className="navbar h-24 bg-base-100 mt-6 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost no-underline normal-case text-xl">
          <img className="w-12 h-12" src={logo} alt="" />
          <h3 className="font-bold">The Kids Zone</h3>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;