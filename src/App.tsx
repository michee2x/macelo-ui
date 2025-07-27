import Nav from './Components/Navbar';
import './index.css'
import HomePage from './pages/home-page';

function App() {

  return (
    <h1 className="text-3xl relative max-w-[100vw] flex flex-col items-center justify-center w-screen min-h-screen bg-black text-white font-batman font-bold">
      <Nav />
      <HomePage />
    </h1>
  );
}

export default App
