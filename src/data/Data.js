// 3 primeras cajas
export const data1 = [
  {nombre:'Ventas totales', icon:'AiOutlineDollar', type:'', count:32156487, isMoney:true, n1:Math.floor(Math.random()*5), n2:Math.floor(Math.random()*5)},
  {nombre:'Visitas', icon:'AiOutlineFundView', count:321487, isMoney:false, n1:Math.floor(Math.random()*5), n2:Math.floor(Math.random()*5)},
  {nombre:'Pedidos', icon:'AiOutlineTag', count:3217, isMoney:false, n1:Math.floor(Math.random()*5), n2:Math.floor(Math.random()*5)}
];

// Ventas
export const data_ventas = [
  {idProd:1, cant:4},
  {idProd:2, cant:9},
  {idProd:3, cant:4}
];

// Clientes
export const data_clientes = [
  {id:1, nombre:'Cliente 1', tel:'+54 11 15123456', contacto:'IG: usuario'},
  {id:2, nombre:'Cliente 2', tel:'+54 11 65432115', contacto:''},
  {id:3, nombre:'Cliente 3', tel:'+54 11 45615321', contacto:'Av. Luro 1234'}
];

// Pedidos
export const data_pedidos = [
  {id:1, idProductos:[1,2], idCliente:1},
  {id:2, idProductos:[1,3], idCliente:2}
];

// Productos
export const data_productos = [
  {id:1, nombre:'Producto 1', cat:1, precio:100},
  {id:2, nombre:'Producto 2', cat:2, precio:50},
  {id:3, nombre:'Producto 3', cat:3, precio:250}
];