import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function NewTweet() {
  function textareaHeight(textarea) {
    if (textarea) {
      console.log(`${textarea.scrollHeight}px`);
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }
  // const textarea = document.querySelector('.post-textarea')
  // window.addEventListener("DOMContentLoaded", () => {
  //   textarea.style.height = `${textarea.scrollHeight}px`
  // })
  return (
    <>
      <div className='tweet-card create py-2'>
        <header>
          <i className='user-icon'>
            <FontAwesomeIcon icon='fa-solid fa-circle-user' />
          </i>
          <p className='p-2 mx-1'>
            name
            <small className='d-block gris-muted'>hace 1m</small>
          </p>
        </header>
        <div className='col-available p-2'>
          <form action='' className='d-flex align-items-center col-available'>
            <textarea
              className='post-textarea'
              name='newTweet'
              id='newTweet'
              cols='30'
              rows='10'
              onFocus={textareaHeight(document.querySelector('textarea'))}
              placeholder='Comparte que piensas... 🖋️'
            ></textarea>
            <button className='btn primary'>¡Comparte!</button>
          </form>
        </div>
      </div>
    </>
  );
}

export function TweetCard() {
  return (
    <div className='tweet-list col-8 mx-auto'>
      <NewTweet />
      <div className='tweet-card'>
        <header>
          <i className='user-icon'>
            <FontAwesomeIcon icon='fa-solid fa-circle-user' />
          </i>
          <p className='p-2 mx-1'>
            name
            <small className='d-block gris-muted'>hace 1m</small>
          </p>
        </header>
        <div className='d-flex flex-column flex-end'>
          <p className='py-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore quaerat velit eveniet dignissimos placeat facilis nulla hic
            ipsum possimus minima, harum asperiores voluptatum suscipit. Perferendis laborum vitae quod dignissimos!
          </p>
          <button className='btn like'>
            <FontAwesomeIcon icon='fa-solid fa-thumbs-up' />
          </button>
        </div>
      </div>
    </div>
  );
}
