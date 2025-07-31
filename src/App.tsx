import Nav from './Components/Navbar';
import './index.css'
import HomePage from './pages/home-page';
import {FaDiscord, FaGithub, FaTwitter} from "react-icons/fa"

function App() {

  return (
    <h1 className="text-3xl relative max-w-[100vw] flex flex-col items-center justify-center w-screen min-h-screen text-white bg-black font-batman font-bold">
      <Nav />
      <div className="w-full relative h-auto bg-white">
        <HomePage />
        <div className="w-auto h-auto text-2xl gap-3 p-4 flex flex-col items-end z-10 text-black absolute bottom-0 right-0">
          <div className="w-full h-auto justify-end min-w-fit flex items-center gap-4">
            <FaDiscord />
            <FaGithub />
            <FaTwitter />
          </div>
          <p className="text-[16px]">
            built by <a className='underline' href="https://github.com/michee2x">michee2x</a>
          </p>
        </div>
      </div>
    </h1>
  );
}

export default App
