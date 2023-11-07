export function GenePairSelect({ locus, optionList, selectedGeneList, handleSelectorChange }) {
  const genePair = selectedGeneList[locus];

  return (
    <div className="gene-pair mx-0.5">
        <select onChange={(e) => handleSelectorChange(locus, 0, e.target.value)} className="gene-select mx-px rounded-sm">
          {optionList.map(optionStr => {
            if (optionStr === genePair[0]) {
              return (
                <option value={optionStr} selected>{optionStr}</option>
              );
            }
            return (
              <option value={optionStr}>{optionStr}</option>
            );
          })}
        </select>

        <select onChange={(e) => handleSelectorChange(locus, 1, e.target.value)} className="gene-select mx-px rounded-sm">
          {optionList.map(optionStr => {
            if (optionStr === genePair[1]) {
              return (
                <option value={optionStr} selected>{optionStr}</option>
              );
            }
            return (
              <option value={optionStr}>{optionStr}</option>
            );
          })}
        </select>
      </div>
  );
}