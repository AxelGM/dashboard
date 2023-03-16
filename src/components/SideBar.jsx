import { NavLink } from "react-router-dom";
import { AiOutlineTag, AiOutlineHome, AiOutlineShopping, AiOutlineMenu } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { icon_class } from "../styles";
import { useState } from "react";

const links = [
  {icon:<AiOutlineHome className={icon_class} />, cont:'Inicio', url: '/'},
  {icon:<FiUsers className={icon_class} />, cont:'Clientes', url: '/Clientes'},
  {icon:<AiOutlineTag className={icon_class} />, cont:'Pedidos', url: '/Pedidos'},
  {icon:<AiOutlineShopping className={icon_class} />, cont:'Productos', url: '/Productos'}
];

const SideBar = () => {
  const [menu,setMenu] = useState(false);

  return (
    <>
    <div className="sm:hidden fixed m-6 ml-4 z-50 text-center">
      <AiOutlineMenu className="text-2xl" onClick={()=>setMenu(!menu)} />
    </div>
    <div className={`${(menu)?null:'max-sm:hidden'} max-sm:fixed max-sm:z-40 max-sm:w-full max-sm:h-screen sm:w-1/5 bg-slate-800`}>
      <nav>
          {/* Logo */}
        <div className="p-5 text-center">
          <NavLink onClick={()=>setMenu(false)} to="/" className="text-xl flex items-center w-max mr-auto ml-auto"><MdDashboard className="text-3xl mr-1" /> Dashboard</NavLink>
          <div className="text-xs text-slate-400 mt-1">integrar con una API</div>
        </div>
        
        {/* Links */}
        <ul className="p-2 w-full">
          {links.map(ele=><NavLink onClick={()=>setMenu(false)} key={ele.url} to={ele.url}>{({ isActive }) => <li className={`flex p-2 mb-2 rounded-md items-center ${(isActive)?"bg-slate-900":"hover:bg-slate-900"}`}>{ele.icon} {ele.cont}</li>}</NavLink>)}
        </ul>
      </nav>
    </div>
    </>
  )
}

export default SideBar