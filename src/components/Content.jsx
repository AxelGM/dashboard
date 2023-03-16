import { useEffect, useState } from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

const Content = ({children}) => {
  const [stateBuscar, setStateBuscar] = useState(false);

  useEffect(()=>{if(stateBuscar) document.getElementById('inpBuscar').focus();},[stateBuscar]);

  return (
    <div className="sm:w-4/5 max-sm:w-full bg-slate-900 text-white">
      <div className="max-sm:pl-14 max-sm:fixed max-sm:w-screen max-sm:z-30 max-sm:bg-slate-900 sm:w-auto border-b border-slate-800 p-5 flex flex-wrap items-center text-gray-400 drop-shadow-sm">
        <div className="flex flex-auto items-center mr-3" onClick={()=>(!stateBuscar)?setStateBuscar(true):null}>
          <AiOutlineSearch className="w-6 h-6 mr-3" />
          {(stateBuscar === false)
          ?<span className="p-1">Buscar</span>
          :<input id="inpBuscar" className="text-sm max-sm:w-40" type="text" placeholder="Buscar" onBlur={()=>setStateBuscar(false)} />}
        </div>
        <div className="flex items-center">
          <AiOutlineBell className="w-6 h-6 mr-3 cursor-pointer" />
          <div className="h-8 w-8 bg-gray-200 cursor-pointer rounded-full"></div>
        </div>
      </div>

      <div className="max-sm:mt-16 p-8 pt-5">{children}</div>
    </div>
  )
}

export default Content