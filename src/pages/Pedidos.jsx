import { AiOutlineSearch } from "react-icons/ai"
import Box from "../components/Box"
import { data_clientes, data_pedidos, data_productos } from "../data/Data"
import { icon_class, td_class, th_class, title_class, trH_class, tr_class } from "../styles"

const Pedidos = () => {
  return (<>
    <h2 className={title_class}>Pedidos</h2>

    <Box
      title={<div className="flex flex-auto max-sm:flex-col">
      <div className="flex flex-auto max-sm:mb-2">Lista</div>
      <div className="flex items-center text-base">
        <AiOutlineSearch className={icon_class} /> <input placeholder="Buscar" />
      </div>
      </div>}
      cont2={<table className="table-auto w-full mt-3">
      <thead className="text-left">
        <tr className={trH_class}>
          <th className={th_class}>Cliente</th>
          <th className={th_class}>Productos</th>
          <th className={th_class}>ASD</th>
          <th className={th_class}>Total</th>
        </tr>
      </thead>
      <tbody>
        {data_pedidos.map(ped=>
          <tr key={ped.id} className={tr_class}>
            <td className={td_class}>{data_clientes.filter(c=>c.id===ped.idCliente)[0].nombre}</td>
            <td className={td_class}>{data_productos.filter(prod=>ped.idProductos.includes(prod.id)).map((prod,i)=><span key={i}>{prod.nombre}<br/></span>)}</td>
            <td className={td_class}>3</td>
            <td className={td_class}>4</td>{/*.reduce((a, b) => a + b, 0)*/}
          </tr>
        )}
      </tbody>
    </table>}
    />
  </>)
}

export default Pedidos