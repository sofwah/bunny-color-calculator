// This is used to reset the gene pair drop-downs
const defaultGeneSelectValues = {
  "a": ["_", "_"],
  "b": ["_", "_"],
  "c": ["_", "_"],
  "d": ["_", "_"],
  "g": ["_", "_"]
};

// This describes the order of dominance within each locus.
// E.g. A covers achi, achi covers am, and so on.
const dominanceOrder = {
  "a": ["A", "achi", "am", "an", "a", "_"],
  "b": ["Be", "B", "bj", "b", "_"],
  "c": ["C", "c", "_"],
  "d": ["D", "d", "_"],
  "g": ["G", "go", "g", "_"],
};

// A list of the available loci
const lociList = Object.keys(dominanceOrder);

export {
  defaultGeneSelectValues,
  dominanceOrder,
  lociList
}
