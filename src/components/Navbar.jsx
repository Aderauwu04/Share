import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contexto_Data } from '../context/Context';
import { useContext, useState } from 'react';

export function Navbar() {
  const [Index, setIndex] = useState(1)

  const { CerrarSesion, AllRead, Render_de_Favoritos, Publicaciones_Personales } = useContext(Contexto_Data);
  let SesionData = JSON.parse(localStorage.getItem('SesionActiva'));

  return (
    <>
      <nav className='navbar pt-2 pt-md-8'>
        <ul className='sections col-sm-8 col-md-6 col-lg-7'>
          <li
            onClick={() => {
              AllRead();
              setIndex(1);
            }}
            className={Index == 1 ? 'active z-index-3' : 'z-index-1'}
          >
            Descubrir
          </li>
          <li
            onClick={() => {
              Render_de_Favoritos();
              setIndex(2);
            }}
            className={Index == 2 ? 'active z-index-3' : 'z-index-2'}
          >
            Favoritos
          </li>
          <li
            onClick={() => {
              Publicaciones_Personales();
              setIndex(3);
            }}
            className={Index == 3 ? 'active z-index-3' : 'z-index-1'}
          >
            Míos
          </li>
        </ul>
      </nav>
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
    </>
  );
}
