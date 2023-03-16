import { AiFillDelete, AiFillEdit, AiOutlineSearch, AiOutlineUserAdd } from "react-icons/ai";
import Box from "../components/Box";
import { data_clientes, data_pedidos } from "../data/Data";
import { defBtn, icon_class, okBtn, redBtn, td_class, th_class, title_class, trH_class, tr_class } from "../styles";

const Clientes = () => {
  return (<>
    <h2 className={title_class}>Clientes</h2>

    <Box
      icon={<AiOutlineUserAdd className={icon_class} />}
      title="Nuevo cliente"
      cont2={
        <>
        <div className="sm:flex">
          <div className="sm:basis-1/3 p-2">
            <label>
              <span className="block pb-1">Nombre completo</span>
              <input type="text" placeholder="Nombre completo" />
            </label>
          </div>
          <div className="sm:basis-1/3 p-2">
            <label>
              <span className="block pb-1">Tel&eacute;fono</span>
              <input type="text" placeholder="Tel&eacute;fono" />
            </label>
          </div>
          <div className="sm:basis-1/3 p-2">
            <label>
              <span className="block pb-1">Contacto</span>
              <input type="text" placeholder="Contacto" />
            </label>
          </div>
        </div>
        <div className="text-center w-full mt-1">
          <button className={okBtn}>Crear</button> <div className="inline-block w-2"></div> <button className={redBtn}>Limpiar</button>
        </div>
        </>
      
      }
    />

    <Box
      title={<div className="flex flex-auto max-sm:flex-col">
      <div className="flex flex-auto max-sm:mb-2">Lista</div>
      <div className="flex items-center text-base">
        <AiOutlineSearch className={icon_class} /> <input placeholder="Buscar" />
      </div>
      </div>}
      cont2={<div className="overflow-auto"><table className="table-auto w-full mt-3">
        <thead className="text-left">
          <tr className={trH_class}>
            <th className={th_class}>Nombre</th>
            <th className={th_class}>Tel&eacute;fono</th>
            <th className={th_class}>Contacto</th>
            <th className={th_class}>Compras</th>
            <th className={th_class}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data_clientes.map(c=>
            <tr key={c.id} className={tr_class}>
              <td className={td_class+" w-1/4"}>{c.nombre}</td>
              <td className={td_class+" w-1/5"}>{c.tel}</td>
              <td className={td_class+" w-1/5"}>{(c.contacto === '')?'- - -':c.contacto}</td>
              <td className={td_class+" w-1/12"}>{data_pedidos.filter(p=>p.idCliente===c.id).length}</td>
              <td className={td_class+" w-1/5"}>
                <span className="flex gap-2">
                  <button className={defBtn+" items-center text-sm inline-flex"}><AiFillEdit className="mr-1" /> Editar</button>
                  <button className={redBtn+" items-center text-sm inline-flex"}><AiFillDelete className="mr-1" /> Eliminar</button>
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table></div>}
     />
  </>)
}

export default Clientes