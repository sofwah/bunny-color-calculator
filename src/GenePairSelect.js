export function GenePairSelect({ locus, optionList, selectedGeneList, handleSelectorChange }) {
  const genePair = selectedGeneList[locus];

  function createGeneSelect(idx) {
    return (
      <select onChange={(e) => handleSelectorChange(locus, idx, e.target.value)} className="gene-select mx-px rounded-sm">
        {optionList.map(optionStr => {
          if (optionStr === genePair[idx]) {
            return (
              <option value={optionStr} selected>{optionStr}</option>
            );
          }
          return (
            <option value={optionStr}>{optionStr}</option>
          );
        })}
      </select>
    )
  }

  return (
    <div className="gene-pair mx-0.5">
        {createGeneSelect(0)}
        {createGeneSelect(1)}
    </div>
  );
}