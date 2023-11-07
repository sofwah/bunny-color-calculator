import './styles.css';
import { Bunny } from './Bunny.js';

function App() {
  return (
    <div className="cont">
      <div className="grid grid-cols-1 py-8">
        <p className="font-semibold text-3xl text-center">Fyll i genkoderna för föräldrarna</p>
      </div>
      <div className="grid grid-cols-2 place-items-center my-5">
        <Bunny/>
        <Bunny/>
      </div>
      <div className="grid grid-cols-1 py-6 place-items-center">
        <button className="w-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">Resultat</button>
      </div>
      <div className="grid grid-cols-1 place-items-center">
        <div className="result-container rounded-lg py-3 px-4 w-60 h-fit">
          <ul className="list-none">
            <li>A_ B_ C_ D_ G_&nbsp;&nbsp;&nbsp;50%</li>
            <li>A_ B_ C_ D_ G_&nbsp;&nbsp;&nbsp;25%</li>
            <li>A_ B_ C_ D_ G_&nbsp;&nbsp;&nbsp;25%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
