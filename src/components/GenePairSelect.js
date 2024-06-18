import { DOMINANCE_ORDER } from '../constants/constants.js';

export function GenePairSelect({ locus, selectedGeneList, handleSelectorChange }) {
  const genePair = selectedGeneList[locus];
  const optionList = DOMINANCE_ORDER[locus];

  function createGeneSelect(idx) {
    return (
      <select
        value={genePair[idx]}
        onChange={(e) => handleSelectorChange(locus, idx, e.target.value)}
        className="gene-select mx-px rounded-sm"
      >
        {optionList.map(optionStr => {
          return (
            <option key={crypto.randomUUID()} value={optionStr}>{optionStr}</option>
          );
        })}
      </select>
    )
  }

  return (
    <div className="gene-pair mx-[2px]">
        {createGeneSelect(0)}
        {createGeneSelect(1)}
    </div>
  );
}
