import { NavLink, Link } from "react-router-dom";
// navlink: active 











const Navbar = () => {
    return(

        <nav>
            {/* <a href=""> About </a>
            <a href=""> Contact </a> */}

<div className="logo">
    <Link to="/About">
        <h1> Logo</h1> 
        </Link>
</div>

<ul > 
<li> 
         <NavLink to="/" > 
             Home 
         </NavLink>
</li>

<li>
<NavLink to="/" > 
             Services 
         </NavLink>
</li>
</ul>

        </nav>
    )
}

export default Navbar