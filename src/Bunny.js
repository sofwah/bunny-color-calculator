import bunny_silhouette from './rabbit_silhouette.png';
import { useState, useEffect } from 'react';
import { GenePairSelect } from './GenePairSelect.js';
import { defaultGeneSelectValues, lociList } from './constants.js';
import { colorDict, colorList } from './geneColorDict.js';
import { getColorFromCode } from './colorCalculator.js';

export function Bunny({ selectedGeneList, setGeneList, selectedColor, setSelectedColor }) {
  // TODO: Change for useCallback or useMemo? Need selectedColor and selectedGeneList to listen to eachother but avoid infinite loop.
  let selectedColorCopy;
  let selectedGeneListCopy;

  useEffect(() => {
    if (selectedColorCopy !== selectedColor && selectedColor !== 'default') {
      setGeneList(() => {
        const geneCodeList = colorDict[selectedColor];
        if (!geneCodeList) return defaultGeneSelectValues; //selected color value is default
        const geneCodeSublists = [];
        for (let i = 0; i < geneCodeList.length; i += 2) {
          geneCodeSublists.push([geneCodeList[i], geneCodeList[i + 1]]);
        }
        const dict = {};
        for (let i = 0; i < lociList.length; i += 1) {
          dict[lociList[i]] = geneCodeSublists[i];
        }
        return dict;
      });
      selectedColorCopy = selectedColor
    }
  }, [selectedColor]);

  useEffect(() => {
    if (selectedGeneListCopy !== selectedGeneList) {
      setSelectedColor(getColorFromCode(selectedGeneList));
      selectedGeneListCopy = selectedGeneList;
    }
  }, [selectedGeneList]);

  function handleSelectorChange(key, listIdx, selectedValue) {
    setGeneList((currentGeneList) => {
      return {
        ...currentGeneList,
        [key]: (listIdx === 0) ? [selectedValue, currentGeneList[key][1]] : [currentGeneList[key][0], selectedValue]
      }
    });
  }

  return (
    <div className="max-w-fit h-fit mx-3">
      <div className="grid grid-cols-1 place-items-center">
        <img src={bunny_silhouette} className="w-[200px]" alt="Bunny silhouette" />
      </div>

      <div className="grid grid-cols-1 mx-[3px] mb-3 place-items-start">
        <select value={selectedColor} onChange={e => setSelectedColor(e.target.value)} className="gene-select rounded-sm">
          <option value="default" disabled>Välj färg</option>

          {colorList.map(color => {
            return (
              <option key={crypto.randomUUID()} value={color}>{color}</option>
            )
          })}
        </select>
      </div>

      {lociList.map(locus => {
        return (
          <GenePairSelect key={crypto.randomUUID()} locus={locus} selectedGeneList={selectedGeneList} handleSelectorChange={handleSelectorChange}/>
        )
      })}

    </div>
  );
}
