import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Navbar() {
  const items = [
    {
      name: 'Descubrir',
      state: true,
      index: 2
    },
    {
      name: 'Favoritos',
      state: false,
      index: 1
    },
    {
      name: 'Míos',
      state: false,
      index: 0
    }
  ]
  return (
    <>
      <nav className="navbar">
        <ul className="sections col-5">
          { items.map((item, key) => {
            return (
              <li
                className={ item.state ? 'active': 'z-index-'+item.index }
                key={key}
              >
                  {item.name}
              </li>
            )
          }) }
        </ul>
        <div className="user-log py-2">
          <i className="user-icon">
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
          </i>
          <div className="d-inline-block p-2">
            <p>Gloria</p>
            <button
              className="btn outline"
            >
              <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
              <small className="px-1"> Cerrar sesión</small>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
