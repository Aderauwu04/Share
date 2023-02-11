import shareLogo from "./assets/share.svg";
import Navbar from "./components/Navbar"
import TweetCard from "./components/TweetCard"
import Log from "./components/Log"
import './fontawesome';

let sesion = true;
function Logo() {
  return (
    <div className="logo-fixed">
      <img src={shareLogo} className="logo" alt="Share logo" />
      <p className="text-center bold">Share</p>
    </div>
  )
}

export default function App() {
  return (
    sesion
    ? <>
      { Logo() }
      <div className="container">
        { Log(sesion) }
      </div>
    </>
    : <>
      { Logo() }
      <Navbar/>
      <div className="d-flex">
        <TweetCard />
      </div>
    </>
  )
}
