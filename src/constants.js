const defaultGeneSelectValues = { "a": ["_", "_"], "b": ["_", "_"], "c": ["_", "_"], "d": ["_", "_"], "g": ["_", "_"] };

const dominanceOrder = {
  "a": ["A", "achi", "am", "an", "a", "_"],
  "b": ["Be", "B", "bj", "b", "_"],
  "c": ["C", "c", "_"],
  "d": ["D", "d", "_"],
  "g": ["G", "go", "g", "_"],
};

const lociList = Object.keys(dominanceOrder);

export {
  defaultGeneSelectValues,
  dominanceOrder,
  lociList
}
