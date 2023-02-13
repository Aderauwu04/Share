import { createContext, useState, useEffect } from 'react';

export const Contexto_Data = createContext();

export function Contexto_DataProvider(props) {
  const [usuarios, setUsuario] = useState([]);
  const [tweets, setTweet] = useState([]);

  function CrearUsuario(usuario, clave, icono, correo) {
    var userData = {
      usuario,
      clave,
      icono,
      correo,
    };
    if (localStorage.getItem('Usuarios') === null) {
      let UsersData = [];
      UsersData.push(userData);
      localStorage.setItem('Usuarios', JSON.stringify(UsersData));
    } else {
      let UsersData = JSON.parse(localStorage.getItem('Usuarios'));
      UsersData.push(userData);
      localStorage.setItem('Usuarios', JSON.stringify(UsersData));
    }
  }

  function CrearSesion(nombre, icono) {
    let Sesion = {
      nombre,
      icono,
      sesion: true,
    };
    if (localStorage.getItem('SesionActiva') === null) {
      localStorage.setItem('SesionActiva', JSON.stringify(Sesion));
    } else {
      let data = JSON.parse(localStorage.getItem('SesionActiva'));
      data = Sesion;
      localStorage.setItem('SesionActiva', JSON.stringify(data));
    }
    window.location.href = '/Descubrir'
  }

  function CerrarSesion() {
    localStorage.removeItem('SesionActiva');
    window.location.href = '/';
  }

  function Autentify(usuario, clave) {
    let datos = JSON.parse(localStorage.getItem('Usuarios'));
    datos.forEach((e) => {
      if (e.usuario === usuario && e.clave === clave) {
        CrearSesion(e.usuario, e.icono);
        alert('Iniciaste Sesion');
      } else {
        alert('No iniciaste')
      }
    });
  }

  function LeerUsuarios() {
    if (localStorage.getItem('Usuarios') === null) {
      return;
    } else {
      let UsuarioData = JSON.parse(localStorage.getItem('Usuarios'));
      setUsuario(UsuarioData);
    }
  }

  useEffect(() => {
    LeerUsuarios();
  }, []);

  return (
    <Contexto_Data.Provider value={{ CrearUsuario, usuarios, tweets, Autentify, CerrarSesion, CrearSesion }}>{props.children}</Contexto_Data.Provider>
  );
}
