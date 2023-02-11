import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function LogIn() {
  return (
    <>
      <form action="">
        <h1>Inicia sesión</h1>
        <div className="input-group">
          <input type="text" name="" id="user" />
          <label for="user">Usuario</label>
        </div>
        <div className="input-group">
          <input type="email" name="" id="email" />
          <label for="email">Correo electrónico</label>
        </div>
        <div className="input-group">
          <input type="password" name="" id="password" />
          <label for="password">Contraseña</label>
        </div>
        <button
          className="btn primary"
        >
          ¡listo!
        </button>
      </form>
    </>
  )
}
function SingIn() {
  return (
    <>
      <form action="">
        <h1>Crea tu cuenta</h1>
        <div className="input-group">
          <input type="text" name="" id="user" />
          <label for="user">Usuario</label>
        </div>
        <div className="input-group">
          <input type="password" name="" id="password" />
          <label for="password">Contraseña</label>
        </div>
        <button
          className="btn primary"
        >
          ¡listo!
        </button>
      </form>
    </>
  )
}
export default function Log(sesion) {
  return (
    sesion
    ?
      <>
        <SingIn />
      </>
    :
      <>
        <LogIn />
      </>
  );
}
