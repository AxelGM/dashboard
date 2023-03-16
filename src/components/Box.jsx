const Box = ({ icon='', title='', cont1='', cont2='', foot='', addClass='' }) => {
  return (
    <div className={`bg-slate-800 rounded-md drop-shadow-sm p-3 m-3 ${addClass}`}>
      {(icon !== '' || title !== '')?<div className="flex items-center text-xl">{icon} {title}</div>:null}
      {(cont1 !== '')?<div className="text-3xl ml-3">{cont1}</div>:null}
      {(cont2 !== '')?<div>{cont2}</div>:null}
      {(foot !== '')?<div className="flex items-center">{foot}</div>:null}
    </div>
  )
}

export default Box