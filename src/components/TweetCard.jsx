import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Contexto_Data } from '../context/Context';
import { useState, useContext } from 'react';

export function NewTweet() {
  const { CreateTweet } = useContext(Contexto_Data);

  let SesionActiva = JSON.parse(localStorage.getItem('SesionActiva'));

  const [texto, setTexto] = useState('');

  function textareaHeight(textarea) {
    if (textarea) {
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }

  const form_main = (e) => {
    e.preventDefault();
    CreateTweet(SesionActiva.nombre, texto, SesionActiva.icono, SesionActiva.correo);
    setTexto('');
  };

  let SesionData = JSON.parse(localStorage.getItem('SesionActiva'));

  return (
    <>
      <div className='tweet-card create py-2'>
        <header>
          <div className='user-icon'>
            <img src={SesionData.icono} />
          </div>
          <p className='p-2 mx-1'>
            {SesionData.nombre}
            <small className='d-block gris-muted'>hace 1m</small>
          </p>
        </header>
        <div className='col-available p-2'>
          <form onSubmit={form_main} className='d-flex align-items-center col-available'>
            <textarea
              required
              className='post-textarea'
              name='newTweet'
              id='newTweet'
              cols='30'
              rows='10'
              value={texto}
              onChange={(e) => {
                textareaHeight(document.querySelector('textarea'));
                setTexto(e.target.value);
              }}
              placeholder='Comparte que piensas... 🖋️'
            ></textarea>
            <button className='btn primary'>¡Comparte!</button>
          </form>
        </div>
      </div>
    </>
  );
}

export function TweetCard({ objeto }) {
  const { Like, Eliminar } = useContext(Contexto_Data);
  let data = JSON.parse(localStorage.getItem('SesionActiva'));

  if (objeto.usuario === data.nombre) {
    return (
      <div className='tweet-list col-8 mx-auto'>
        <div className='tweet-card'>
          <header>
            <img src={objeto.icono} />
            <p className='p-2 mx-1'>
              {objeto.usuario}
              <small className='d-block gris-muted'>{objeto.time}</small>
            </p>
          </header>
          <div className='d-flex flex-column flex-end'>
            <p className='py-4'>{objeto.texto}</p>
            <button
              className='btn like'
              onClick={() => {
                Like(objeto.id);
              }}
            >
              <FontAwesomeIcon icon='fa-solid fa-thumbs-up' />
            </button>
            <button
              className='btn like'
              onClick={() => {
                Eliminar(objeto.id);
              }}
            >
              <FontAwesomeIcon icon='fa-solid fa-trash' />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='tweet-list col-8 mx-auto'>
      <div className='tweet-card'>
        <header>
          <img src={objeto.icono} />
          <p className='p-2 mx-1'>
            {objeto.usuario}
            <small className='d-block gris-muted'>{objeto.time}</small>
          </p>
        </header>
        <div className='d-flex flex-column flex-end'>
          <p className='py-4'>{objeto.texto}</p>
          <button
            className='btn like'
            onClick={() => {
              Like(objeto.id);
            }}
          >
            <FontAwesomeIcon icon='fa-solid fa-thumbs-up' />
          </button>
        </div>
      </div>
    </div>
  );
}
