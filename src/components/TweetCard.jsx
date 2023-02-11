import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function NewTweet() {
  return (
    <>
      <div className="tweet-card create py-2">
        <header>
          <i className="user-icon">
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
          </i>
          <p className="p-2 mx-1">
            name
            <small className="d-block gris-muted">hace 1m</small>
          </p>
        </header>
        <div className="col-available p-2">
          <form action="" className="d-flex aling-items-center">
            <textarea
              className="post-textarea col-available"
              name="newTweet"
              id="newTweet"
              cols="30"
              rows="10"
              placeholder="Comparte que piensas... 🖋️"
            ></textarea>
            <button className="btn primary">¡Publicar!</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default function TweetCard() {
  return (
    <div className="tweet-list col-8 mx-auto">
      <NewTweet />
      <div className="tweet-card">
        <header>
          <i className="user-icon">
            <FontAwesomeIcon icon="fa-solid fa-circle-user" />
          </i>
          <p className="p-2 mx-1">
            name
            <small className="d-block gris-muted">hace 1m</small>
          </p>
        </header>
        <div className="d-flex flex-column flex-end">
          <p className="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore quaerat velit eveniet dignissimos placeat facilis nulla hic ipsum possimus minima, harum asperiores voluptatum suscipit. Perferendis laborum vitae quod dignissimos!</p>
          <button
            className="btn like"
          >
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
          </button>
        </div>
      </div>
    </div>
  )
}