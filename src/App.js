import { useSelector } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <div className="relative min-h-screen overflow-hidden transition-all duration-700 ease-in-out">
      <div
        className={`absolute inset-0 bg-gradient-to-tr from-gray-600 via-blue-500 to-cyan-400 transition-opacity duration-700 ease-in-out 
          ${darkMode ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-r from-zinc-500 via-stone-600 to-zinc-900 transition-opacity duration-700 ease-in-out 
          ${darkMode ? 'opacity-100' : 'opacity-0'}`}
      />
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
