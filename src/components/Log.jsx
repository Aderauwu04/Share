import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function LogIn() {
  return (
    <>
      <form action="">
        <div className="form-log bg-color-terciario shadow-pop-terciario">
          <h1 className="color-secundario text-center">Inicia sesión</h1>
          <div className="input-group-secundario my-3">
            <input
              type="text"
              name=""
              id="user"
            />
            <label
              for="user"
              className="bold px-1"
            >
              Usuario
            </label>
          </div>
          <div className="input-group-secundario my-3">
            <input
              type="email"
              name=""
              id="email"
            />
            <label
              for="email"
              className="bold px-1"
            >
              Correo electrónico
            </label>
          </div>
          <div className="input-group-secundario my-3">
            <input
              type="password"
              name=""
              id="password"
            />
            <label
              for="password"
              className="bold px-1"
            >
              Contraseña
            </label>
          </div>
          <p className="btn text-link">No tengo cuenta</p>
          <button
            className="btn primary form-summit"
          >
            ¡listo!
          </button>
        </div>
      </form>
    </>
  )
}
function SingIn() {
  return (
    <>
      <form action="">
        <div className="form-log bg-color-secundario shadow-pop-secundario">
          <h1 className="color-terciario text-center">Crea tu cuenta</h1>
          <div className="input-group-terciario my-3">
            <input
              type="text"
              name=""
              id="user"
            />
            <label
              for="user"
              className="bold px-1"
            >
              Usuario
            </label>
          </div>
          <div className="input-group-terciario my-3">
            <input
              type="password"
              name=""
              id="password"
            />
            <label
              for="password"
              className="bold px-1"
            >
              Contraseña
            </label>
          </div>
          <p className="btn text-link">Ya tengo cuenta</p>
          <button
            className="btn primary form-summit"
          >
            ¡listo!
          </button>
        </div>
      </form>
    </>
  )
}
export default function Log() {
  return (
    (1+1 == 2)
    ?<>
      <LogIn />
    </>
    :<>
      <SingIn />
    </>
  );
}
