import { createContext, useState, useEffect } from 'react';

export const Contexto_Data = createContext();

export function Contexto_DataProvider(props) {
  const [usuarios, setUsuario] = useState([]);
  const [tweets, setTweet] = useState([]);

  function LeerMensajes() {
    let Mensaje = JSON.parse(localStorage.getItem('Mensajes'));
    setTweet(Mensaje);
  }

  function CreateTweet(usuario, texto, icono, correo) {
    let data = new Date();
    let id = JSON.parse(localStorage.getItem('Mensajes'));
    let tiempo = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()} a las ${data.getHours()}:${data.getMinutes()}`;
    let Object = {
      usuario,
      texto,
      icono,
      time: tiempo,
      like: false,
      correo,
      id: id.length,
    };
    if (localStorage.getItem('Mensajes') === null) {
      let Mensajes = [];
      Mensajes.push(Object);
      localStorage.setItem('Mensajes', JSON.stringify(Mensajes));
    } else {
      let Mensaje = JSON.parse(localStorage.getItem('Mensajes'));
      Mensaje.push(Object);
      localStorage.setItem('Mensajes', JSON.stringify(Mensaje));
    }
    LeerMensajes();
  }

  function CrearUsuario(usuario, clave, icono, correo) {
    let usuarios_actuales = JSON.parse(localStorage.getItem('Usuarios'));
    let a = usuarios_actuales.filter((e) => e.usuario === usuario);
    var userData = {
      usuario,
      clave,
      icono,
      correo,
    };
    if (localStorage.getItem('Usuarios') === null) {
      if (a.length == 1) {
        alert('Nombre de usuario no disponible');
      } else {
        let UsersData = [];
        UsersData.push(userData);
        localStorage.setItem('Usuarios', JSON.stringify(UsersData));
      }
    } else {
      if (a.length == 1) {
        alert('Nombre de usuario no disponible');
      } else {
        let UsersData = JSON.parse(localStorage.getItem('Usuarios'));
        UsersData.push(userData);
        localStorage.setItem('Usuarios', JSON.stringify(UsersData));
      }
    }
  }

  function CrearSesion(nombre, icono, correo) {
    let Sesion = {
      nombre,
      icono,
      sesion: true,
      correo,
    };
    if (localStorage.getItem('SesionActiva') === null) {
      localStorage.setItem('SesionActiva', JSON.stringify(Sesion));
    } else {
      let data = JSON.parse(localStorage.getItem('SesionActiva'));
      data = Sesion;
      localStorage.setItem('SesionActiva', JSON.stringify(data));
    }
    window.location.href = '/Descubrir';
  }

  function CerrarSesion() {
    localStorage.removeItem('SesionActiva');
    window.location.href = '/';
    return;
  }

  function Eliminar(id) {
    let Mensaje = JSON.parse(localStorage.getItem('Mensajes'));
    Mensaje.forEach((i, index) => {
      if (i.id === id) {
        Mensaje.splice(index, 1);
        localStorage.setItem('Mensajes', JSON.stringify(Mensaje));
      }
    });
    LeerMensajes();
  }

  function Like(id) {
    let Mensaje = JSON.parse(localStorage.getItem('Mensajes'));
    Mensaje.forEach((i, index) => {
      if (i.id === id) {
        if (Mensaje[index].like === false) {
          Mensaje[index].like = true;
          localStorage.setItem('Mensajes', JSON.stringify(Mensaje));
        } else if (Mensaje[index].like === true) {
          Mensaje[index].like = false;
          localStorage.setItem('Mensajes', JSON.stringify(Mensaje));
        }
      }
    });
    LeerMensajes();
  }

  function Autentify(usuario, clave) {
    let datos = JSON.parse(localStorage.getItem('Usuarios'));
    let a = datos.filter((e) => e.usuario === usuario && e.clave === clave);
    console.log(a);
    if (a.length == 1) {
      CrearSesion(usuario, a[0].icono, a[0].correo);
      alert('Iniciaste Sesion');
    } else {
      alert('No iniciaste');
    }
  }

  function LeerUsuarios() {
    if (localStorage.getItem('Usuarios') === null) {
      return;
    } else {
      let UsuarioData = JSON.parse(localStorage.getItem('Usuarios'));
      setUsuario(UsuarioData);
    }
  }

  //Renderizados

  function Render_de_Favoritos() {
    let favoritos = JSON.parse(localStorage.getItem('Mensajes'));
    setTweet(favoritos);
    if (localStorage.getItem('Mensajes') === null) {
      setTweet(favoritos.filter((e) => e.like === true));
    } else {
      setTweet(favoritos.filter((e) => e.like === true).reverse());
    }
  }

  function Publicaciones_Personales() {
    let Personal = JSON.parse(localStorage.getItem('Mensajes'));
    setTweet(Personal);
    if (localStorage.getItem('Mensajes') === null) {
      let Usuario = JSON.parse(localStorage.getItem('SesionActiva'));
      setTweet(Personal.filter((e) => e.usuario === Usuario.nombre));
    } else {
      let Usuario = JSON.parse(localStorage.getItem('SesionActiva'));
      setTweet(Personal.filter((e) => e.usuario === Usuario.nombre).reverse());
    }
  }

  function AllRead() {
    let All = JSON.parse(localStorage.getItem('Mensajes'));
    setTweet(All);
  }

  useEffect(() => {
    LeerUsuarios();
    LeerMensajes();
  }, []);

  return (
    <Contexto_Data.Provider
      value={{
        CrearUsuario,
        Eliminar,
        usuarios,
        tweets,
        Autentify,
        CerrarSesion,
        CrearSesion,
        CreateTweet,
        Like,
        Render_de_Favoritos,
        Publicaciones_Personales,
        AllRead,
      }}
    >
      {props.children}
    </Contexto_Data.Provider>
  );
}
