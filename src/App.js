
import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const darkMode = useSelector(state => state.theme.darkMode)
 
  const appClassName = darkMode 
    ? "min-h-screen  bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900"
    : "min-h-screen  bg-gradient-to-tr from-gray-600 via-blue-500 to-cyan-400";
  return (
    <div className={appClassName} >
      <Navbar/>

    </div>
  );
}

export default App;
