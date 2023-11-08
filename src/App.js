import './styles.css';
import { Bunny } from './Bunny.js';
import { useState } from "react";

function App() {
  const colorCalculator = require('./ColorCalculator.js');

  const defaultGeneSelectValues = { "a": ["A", "_"], "b": ["B", "_"], "c": ["C", "_"], "d": ["D", "_"], "g": ["G", "_"] };
  const [geneList1, setGeneList1] = useState(defaultGeneSelectValues);
  const [geneList2, setGeneList2] = useState(defaultGeneSelectValues);
  const [resultList, setResultList] = useState([]);

  const dominanceOrder = {
    "a": ["A", "achi", "am", "an", "a", "_"],
    "b": ["Be", "B", "bj", "b", "_"],
    "c": ["C", "c", "_"],
    "d": ["D", "d", "_"],
    "g": ["G", "go", "g", "_"],
  };


  function handleSelectorChange1(key, listIdx, selectedValue) {
    setGeneList1((currentGeneList) => {
      if (listIdx === 0) {
        return {
          ...currentGeneList,
          [key]: [selectedValue, currentGeneList[key][1]]
        };
      } else {
        return {
          ...currentGeneList,
          [key]: [currentGeneList[key][0], selectedValue]
        };
      }
    });
  }

  function handleSelectorChange2(key, listIdx, selectedValue) {
    setGeneList2((currentGeneList) => {
      if (listIdx === 0) {
        return {
          ...currentGeneList,
          [key]: [selectedValue, currentGeneList[key][1]]
        };
      } else {
        return {
          ...currentGeneList,
          [key]: [currentGeneList[key][0], selectedValue]
        };
      }
    });
  }

  return (
    <div className="cont relative">
      <div className="grid grid-cols-1 py-8">
        <p className="font-semibold text-3xl text-center">Välj färg eller fyll i genkoderna för föräldrarna</p>
      </div>

      <div className="grid grid-cols-2 place-items-center my-5">
        <Bunny selectedGeneList={geneList1} handleSelectorChange={handleSelectorChange1} dominanceOrder={dominanceOrder}/>
        <Bunny selectedGeneList={geneList2} handleSelectorChange={handleSelectorChange2} dominanceOrder={dominanceOrder}/>
      </div>

      <div className="grid grid-cols-1 py-6 place-items-center">
        <button onClick={() => colorCalculator.findPossibleCombinations(geneList1, geneList2, dominanceOrder, setResultList)} className="w-fit bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded shadow">Resultat</button>
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
