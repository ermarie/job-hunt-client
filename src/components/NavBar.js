import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => 
        <div>
            <NavLink 
                to="/"
                exact 
                >Home     </NavLink>

            <NavLink 
                to="/companies"
                exact 
                >  Companies     </NavLink>
            
        </div>


export default NavBar