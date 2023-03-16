import { data1, data_productos, data_ventas } from '../data/Data';
import Box from '../components/Box';

import { title_class, icon_class, icon_box, tr_class, td_class, th_class, trH_class } from '../styles';

import { AiOutlineDollar, AiOutlineRise, AiOutlineFall, AiOutlineFundView, AiOutlineShoppingCart, AiOutlineTag } from 'react-icons/ai';
const icons = {
  'AiOutlineDollar': <AiOutlineDollar className={icon_class} />,
  'AiOutlineFundView': <AiOutlineFundView className={icon_class} />,
  'AiOutlineTag': <AiOutlineTag className={icon_class} />,
  'AiOutlineShoppingCart': <AiOutlineShoppingCart className={icon_class} />
}

const Home = () => {
  return (<>
    <h2 className={title_class}>Dashboard</h2>

    <div className="flex max-sm:flex-col">
      {data1.map(e=>
        <div key={e.nombre} className="sm:basis-1/3">
          <Box
            addClass='mt-0'
            icon={icons[e.icon]}
            title={e.nombre}
            cont1={(`${(e.isMoney)?"$ ":''}${(e.count).toLocaleString('es', {minimumIntegerDigits: 2, useGrouping:true})}`)}
            foot={<span className={`flex items-center ${(e.n1>e.n2)?"text-lime-500":"text-red-500"}`}>
              {(e.n1>e.n2) ? (<><AiOutlineRise className={icon_box} /> +{e.n1+e.n2}% semana anterior</>)
              : (<><AiOutlineFall className={icon_box} /> -{e.n1+e.n2}% semana anterior</>)}
            </span>}
           />
        </div>
      )}
    </div>
    
    <Box
      icon={icons['AiOutlineShoppingCart']}
      title='Ventas'
      cont2={<div className="overflow-auto"><table className="table-auto w-full mt-3">
        <thead className="text-left">
          <tr className={trH_class}>
            <th className={th_class}>Producto</th>
            <th className={th_class}>Cantidad</th>
            <th className={th_class}>Precio</th>
            <th className={th_class}>Total</th>
          </tr>
        </thead>
        <tbody>
          {data_productos.map(p=>
            <tr key={p.id} className={tr_class}>
              <td className={td_class}>{p.nombre}</td>
              <td className={td_class}>{data_ventas.filter(v=>v.idProd===p.id)[0].cant}</td>
              <td className={td_class}>{p.precio}</td>
              <td className={td_class}>{data_ventas.filter(v=>v.idProd===p.id)[0].cant*p.precio}</td>
            </tr>
          )}
        </tbody>
      </table></div>}
     />
  </>)
}

export default Home