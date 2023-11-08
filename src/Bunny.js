import bunny_silhouette from './rabbit_silhouette.png';
import { GenePairSelect } from './GenePairSelect.js';

export function Bunny({ selectedGeneList, handleSelectorChange, dominanceOrder }) {
  return (
    <div className="w-fit h-fit mx-3">
      <div className="grid grid-cols-1 place-items-center">
        <img src={bunny_silhouette} className="w-[200px]" alt="Bunny silhouette" />
      </div>

      <div className="grid grid-cols-1 mx-[3px] mb-3 place-items-start">
        <select className="gene-select rounded-sm">
          <option selected disabled>Välj färg</option>
          <option value="Svart">Svart</option>
          <option value="Viltgrå">Viltgrå</option>
        </select>
      </div>

      <GenePairSelect locus={"a"} optionList={dominanceOrder["a"]} selectedGeneList={selectedGeneList} handleSelectorChange={handleSelectorChange}/>
      <GenePairSelect locus={"b"} optionList={dominanceOrder["b"]} selectedGeneList={selectedGeneList} handleSelectorChange={handleSelectorChange}/>
      <GenePairSelect locus={"c"} optionList={dominanceOrder["c"]} selectedGeneList={selectedGeneList} handleSelectorChange={handleSelectorChange}/>
      <GenePairSelect locus={"d"} optionList={dominanceOrder["d"]} selectedGeneList={selectedGeneList} handleSelectorChange={handleSelectorChange}/>
      <GenePairSelect locus={"g"} optionList={dominanceOrder["g"]} selectedGeneList={selectedGeneList} handleSelectorChange={handleSelectorChange}/>

    </div>
  );
}