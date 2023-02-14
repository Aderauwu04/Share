import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contexto_Data } from '../context/Context';
import { useState, useContext } from 'react';

export function LogIn() {
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [icono, setIcono] = useState('');
  const { CrearUsuario } = useContext(Contexto_Data);

  const Manejador = (e) => {
    e.preventDefault();
    CrearUsuario(usuario, clave, icono, correo);
    setUsuario('');
    setClave('');
    setIcono('');
    setCorreo('');
  };

  return (
    <>
      <form onSubmit={Manejador}>
        <div className='form-log bg-color-terciario shadow-pop-terciario'>
          <h1 className='color-secundario text-center'>Crear Cuenta</h1>
          <div className='input-group-secundario my-3'>
            <input type='text' value={usuario} id='user' onChange={(e) => setUsuario(e.target.value)} />
            <label htmlFor='user' className='bold px-1'>
              Usuario
            </label>
          </div>
          <div className='input-group-secundario my-3'>
            <input required type='email' value={correo} id='email' onChange={(e) => setCorreo(e.target.value)} />
            <label htmlFor='email' className='bold px-1'>
              Correo electrónico
            </label>
          </div>
          <div className='input-group-secundario my-3'>
            <input required type='text' value={icono} id='user' onChange={(e) => setIcono(e.target.value)} />
            <label htmlFor='user' className='bold px-1'>
              Icono URL
            </label>
          </div>
          <div className='input-group-secundario my-3'>
            <input required type='password' value={clave} id='password' onChange={(e) => setClave(e.target.value)} />
            <label htmlFor='password' className='bold px-1'>
              Contraseña
            </label>
          </div>
          <p
            className='btn text-link-secundario text-center'
            onClick={() => {
              window.location.href = '/';
            }}
          >
            Inicia sesión
          </p>
          <button className='btn primary form-summit'>¡listo!</button>
        </div>
      </form>
    </>
  );
}

export function SingIn() {
  const [usuario2, setUsuario2] = useState('');
  const [clave2, setClave2] = useState('');
  const { Autentify } = useContext(Contexto_Data);

  const Manejador2 = (e) => {
    e.preventDefault();
    Autentify(usuario2, clave2);
    setUsuario2('');
    setClave2('');
  };

  return (
    <>
      <form onSubmit={Manejador2}>
        <div className='form-log bg-color-secundario shadow-pop-secundario'>
          <h1 className='color-terciario text-center'>Inicia sesión</h1>
          <div className='input-group-terciario my-3'>
            <input
              required
              type='text'
              value={usuario2}
              onChange={(e) => {
                setUsuario2(e.target.value);
              }}
              id='user'
            />
            <label htmlFor='user' className='bold px-1'>
              Usuario
            </label>
          </div>
          <div className='input-group-terciario my-3'>
            <input
              required
              type='password'
              value={clave2}
              onChange={(e) => {
                setClave2(e.target.value);
              }}
              id='password'
            />
            <label htmlFor='password' className='bold px-1'>
              Contraseña
            </label>
          </div>
          <p
            className='btn text-link-primario text-center'
            onClick={() => {
              window.location.href = '/Crear';
            }}
          >
            No tengo cuenta
          </p>
          <button className='btn primary form-summit'>¡listo!</button>
        </div>
      </form>
    </>
  );
}
