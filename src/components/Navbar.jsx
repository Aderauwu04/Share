import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contexto_Data } from '../context/Context';
import { useContext } from 'react';

export function Navbar() {
  const {
    CerrarSesion,
    AllRead,
    Render_de_Favoritos,
    Publicaciones_Personales
  } = useContext(Contexto_Data);
  let SesionData = JSON.parse(localStorage.getItem('SesionActiva'));

  return (
    <>
      <nav className='navbar'>
        <ul className='sections col-md-5'>
          <li onClick={AllRead} className='active z-index-3'>
            Descubrir
          </li>
          <li onClick={Render_de_Favoritos} className='z-index-2'>
            Favoritos
          </li>
          <li onClick={Publicaciones_Personales} className='z-index-1'>
            Míos
          </li>
        </ul>
        <div className='user-log d-flex align-items-center py-2'>
          <div className='user-icon'>
            <img src={SesionData.icono} />
          </div>
          <div>
            <p className='d-inline-block px-2'>{SesionData.nombre}</p>
            <button className='btn outline d-block' onClick={CerrarSesion}>
              <FontAwesomeIcon icon='fa-solid fa-right-from-bracket' />
              <small className='px-1'> Cerrar sesión</small>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
