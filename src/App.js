import './styles.css';
import { Bunny } from './Bunny.js';
import { useState } from 'react';
import { findPossibleCombinations } from './colorCalculator.js';

function App() {
  const defaultGeneSelectValues = { "a": ["A", "_"], "b": ["B", "_"], "c": ["C", "_"], "d": ["D", "_"], "g": ["G", "_"] };
  const [geneList1, setGeneList1] = useState(defaultGeneSelectValues);
  const [geneList2, setGeneList2] = useState(defaultGeneSelectValues);
  const [resultList, setResultList] = useState([]);

  return (
    <div className="cont relative">
      <div className="grid grid-cols-1 py-8">
        <p className="font-semibold text-3xl text-center">Välj färg eller fyll i genkoderna för föräldrarna</p>
      </div>

      <div className="grid grid-cols-2 place-items-center my-5">
        <Bunny selectedGeneList={geneList1} setGeneList={setGeneList1} />
        <Bunny selectedGeneList={geneList2} setGeneList={setGeneList2} />
      </div>

      <div className="grid grid-cols-1 py-6 place-items-center">
        <button onClick={() => findPossibleCombinations(geneList1, geneList2, setResultList)} className="w-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">Resultat</button>
      </div>

      <div className="grid grid-cols-1 place-items-center pb-12">
        {
          resultList && resultList.length > 0 ?
            <div className="result-container rounded-lg py-3 px-4 w-60 h-fit">
              <ul>
                {resultList.map(resultStr => {
                  return (
                    <li>{resultStr}</li>
                  );
                })}
              </ul>
            </div> : null
        }
      </div>

      <div className="absolute bottom-0 w-full pb-2">
        <p className="copyright-text text-center italic">© Sofia Wahlmark 2023. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
