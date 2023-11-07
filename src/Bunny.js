import bunny_silhouette from './rabbit_silhouette.png';

export function Bunny() {
  return (
    <div className="w-fit h-fit mx-3 <!--border border-lime-300-->">
      <div className="img-container grid grid-cols-1 place-items-center">
        <img src={bunny_silhouette} className="bunny-img" alt="Bunny silhouette" />
      </div>

      <div className="gene-pair mx-0.5">
        <select name="a-locus" id="gene-select-a1" className="gene-select mx-px rounded-sm">
          <option value="A" selected>A</option>
          <option value="a">a</option>
          <option value="_">_</option>
        </select>
        <select name="a-locus" id="gene-select-a2" className="gene-select mx-px rounded-sm">
          <option value="A">A</option>
          <option value="a">a</option>
          <option value="_" selected>_</option>
        </select>
      </div>

      <div className="gene-pair mx-0.5">
        <select name="b-locus" id="gene-select-b1" className="gene-select mx-px rounded-sm">
          <option value="B" selected>B</option>
          <option value="b">b</option>
          <option value="_">_</option>
        </select>
        <select name="b-locus" id="gene-select-b2" className="gene-select mx-px rounded-sm">
          <option value="B">B</option>
          <option value="b">b</option>
          <option value="_" selected>_</option>
        </select>
      </div>

      <div className="gene-pair mx-0.5">
        <select name="c-locus" id="gene-select-c1" className="gene-select mx-px rounded-sm">
          <option value="C" selected>C</option>
          <option value="c">c</option>
          <option value="_">_</option>
        </select>
        <select name="c-locus" id="gene-select-c2" className="gene-select mx-px rounded-sm">
          <option value="C">C</option>
          <option value="c">c</option>
          <option value="_" selected>_</option>
        </select>
      </div>

      <div className="gene-pair mx-0.5">
        <select name="d-locus" id="gene-select-d1" className="gene-select mx-px rounded-sm">
          <option value="D" selected>D</option>
          <option value="d">d</option>
          <option value="_">_</option>
        </select>
        <select name="d-locus" id="gene-select-d2" className="gene-select mx-px rounded-sm">
          <option value="D">D</option>
          <option value="d">d</option>
          <option value="_" selected>_</option>
        </select>
      </div>

      <div className="gene-pair mx-0.5">
        <select name="g-locus" id="gene-select-g1" className="gene-select mx-px rounded-sm">
          <option value="G" selected>G</option>
          <option value="g">g</option>
          <option value="_">_</option>
        </select>
        <select name="g-locus" id="gene-select-g2" className="gene-select mx-px rounded-sm">
          <option value="G">G</option>
          <option value="g">g</option>
          <option value="_" selected>_</option>
        </select>
      </div>
    </div>
  );
}