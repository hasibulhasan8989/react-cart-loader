import { useState } from "react";
import List from "./List";
import { IoIosMenu } from "react-icons/io";
import { FaWindowClose } from "react-icons/fa";



const Nav = () => {

    const [open,setOpen]=useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/login', name: 'Login' }
      ];


      
    return (
        <div>
            <button  onClick={()=>setOpen(!open)} className="btn md:hidden">{open?<FaWindowClose></FaWindowClose>:<IoIosMenu></IoIosMenu>}</button>
            <p></p>   
               
          <ul className={`md:flex ${open?'top-10':'-top-70'} absolute md:static sm:ml-10 lg:ml-1 duration-1000 bg-[#547792]
          p-6 rounded-xl`}>
           {
            routes.map(route=><List key={route.id} route={route}></List>)
           }
          </ul>
            
        </div>
    );
};

export default Nav;