import { AiFillDelete, AiFillEdit, AiOutlineSearch } from "react-icons/ai";
import { BsBagPlus } from "react-icons/bs";
import Box from "../components/Box";
import { data_productos } from "../data/Data";
import { defBtn, icon_class, okBtn, redBtn, td_class, th_class, title_class, trH_class, tr_class } from "../styles";

const Productos = () => {
  return (<>
    <h2 className={title_class}>Productos</h2>

    <Box
      icon={<BsBagPlus className={icon_class} />}
      title="Nuevo producto"
      cont2={
        <>
        <div className="sm:flex">
          <div className="sm:basis-1/3 p-2">
            <label>
              <span className="block pb-1">Nombre</span>
              <input type="text" placeholder="Nombre" />
            </label>
          </div>
          <div className="sm:basis-1/3 p-2">
            <label>
              <span className="block pb-1">Categor&iacute;a</span>
              <select>
                <option value="0">Elegir</option>
                <option value="1">Cat 1</option>
                <option value="2">Cat 2</option>
              </select>
            </label>
          </div>
          <div className="sm:basis-1/3 p-2">
            <label>
              <span className="block pb-1">Precio</span>
              <input type="number" placeholder="Precio" />
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
            <th className={th_class}>Categor&iacute;a</th>
            <th className={th_class}>Precio</th>
            <th className={th_class}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data_productos.map(p=>
            <tr key={p.id} className={tr_class}>
              <td className={td_class+" w-1/4"}>{p.nombre}</td>
              <td className={td_class+" w-1/5"}>{p.cat}</td>
              <td className={td_class+" w-1/5"}>${p.precio}</td>
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

export default Productos