import '../styles/styles.css';
import { Bunny } from './Bunny.js';
import { ColorDropdown } from './ColorDropdown.js';
import { useState } from 'react';
import { findPossibleCombinations } from '../utils/colorCalculator.js';
import { DEFAULT_GENE_SELECT_VALUES } from '../constants/constants.js';
import { InfoSymbol } from './InfoSymbol.js';
import { InfoPopup } from './InfoPopup.js';

function App() {
  const [geneList1, setGeneList1] = useState(DEFAULT_GENE_SELECT_VALUES);
  const [geneList2, setGeneList2] = useState(DEFAULT_GENE_SELECT_VALUES);
  const [selectedColor1, setSelectedColor1] = useState("default");
  const [selectedColor2, setSelectedColor2] = useState("default");
  const [resultDict, setResultDict] = useState({});
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  function resetPage() {
    setGeneList1(() => DEFAULT_GENE_SELECT_VALUES);
    setGeneList2(() => DEFAULT_GENE_SELECT_VALUES);
    setSelectedColor1(() => "default");
    setSelectedColor2(() => "default");
    setResultDict(() => {});
  }

  return (
    <div className="cont relative">
      <InfoSymbol setInfoIsOpen={setInfoIsOpen}/>
      <div className="grid grid-cols-1 py-8">
        <p className="font-semibold text-3xl text-center max-w-[90%] mx-auto">
          Välj färg eller fyll i genkoderna för föräldrarna
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center my-5">
        <div className="w-full grid grid-cols-1 place-items-center md:place-items-end">
          <Bunny
            selectedGeneList={geneList1}
            setGeneList={setGeneList1}
            selectedColor={selectedColor1}
            setSelectedColor={setSelectedColor1}
          />
        </div>
        <div className="w-full grid grid-cols-1 place-items-center md:place-items-start">
          <Bunny
            selectedGeneList={geneList2}
            setGeneList={setGeneList2}
            selectedColor={selectedColor2}
            setSelectedColor={setSelectedColor2}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 place-items-center py-6">
        <div className="w-full grid grid-cols-1 place-items-end">
          <button
            onClick={() => findPossibleCombinations(
              geneList1, geneList2, setResultDict
            )}
            className="w-fit bg-white hover:bg-gray-100 text-gray-800
            font-semibold py-2 px-4 rounded shadow"
          >
            Resultat
          </button>
        </div>
        <div className="w-full grid grid-cols-1 place-items-start">
          <button
            onClick={() => resetPage()}
            className="w-fit bg-white hover:bg-gray-100 text-gray-800
            font-semibold py-2 px-4 rounded shadow"
          >
            Återställ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 place-items-center pb-12">
        {
          resultDict && Object.keys(resultDict).length !== 0 ?
            <div className="result-container rounded-lg py-3 px-4 h-fit w-fit sm:w-[400px]">
              <ul className='mr-1'>
                {Object.entries(resultDict).map(([key, value]) => (
                  <ColorDropdown key={crypto.randomUUID()} label={key} content={value} />
                ))}
              </ul>
            </div> : null
        }
      </div>

      <div className="absolute bottom-0 w-full pb-2">
        <p className="copyright-text text-center italic text-sm">
          © Sofia Wahlmark 2024. All rights reserved.
        </p>
      </div>

      { infoIsOpen ? <InfoPopup setInfoIsOpen={setInfoIsOpen}/> : null }

    </div>
  );
}

export default App;
