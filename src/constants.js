const dominanceOrder = {
  "a": ["A", "achi", "am", "an", "a", "_"],
  "b": ["Be", "B", "bj", "b", "_"],
  "c": ["C", "c", "_"],
  "d": ["D", "d", "_"],
  "g": ["G", "go", "g", "_"],
};

const lociList = Object.keys(dominanceOrder);

const colorDictionary = {
  "Beige": ["A", "_", "b", "b", "c", "c", "d", "d", "g", "g"],
  "Blå": ["A", "_", "B", "_", "C", "_", "d", "d", "g", "g"],
  //"Bourgogne":

  //"Castor":
  "Chinchilla":           ["achi", "_", "B", "_", "C", "_", "D", "_", "G", "_"],
  "Chinchilla blå":       ["achi", "_", "B", "_", "C", "_", "d", "d", "G", "_"],
  "Chinchilla havana":    ["achi", "_", "B", "_", "c", "c", "D", "_", "G", "_"],
  "Chinchilla egern":     ["achi", "_", "B", "_", "c", "c", "d", "d", "G", "_"],
  "Chinchilla, enfärgad": ["achi", "_", "B", "_", "C", "_", "D", "_", "g", "g"],

  "Egern": ["A", "_", "B", "_", "c", "c", "d", "d", "g", "g"],
  "​Havana": ["A", "_", "B", "_", "c", "c", "D", "_", "g", "g"],
  "Isabella": ["A", "_", "b", "b", "_", "C", "_", "d", "d", "_", "g", "g"],

  "Japantecknad gul/blå": ["A", "_", "bj", "_", "C", "C", "d", "d", "_", "_"],
  "Japantecknad gul/brun": ["A", "_", "bj", "_", "c", "c", "D", "_", "_", "_"],
  "Japantecknad gul/egern": ["A", "_", "bj", "_", "c", "c", "d", "d", "_", "_"],
  "Japantecknad gul/svart": ["A", "_", "bj", "_", "C", "_", "D", "_", "G", "_"],
  "Japantecknad zobel/svart": ["am", "_", "bj", "_", "C", "_", "D", "_", "g", "g"],
  //"Japantecknad zobel/blå":
  //"Japantecknad zobel/havana":
  //"Japantecknad zobel/egern":
  "Japantecknad vit/blå": ["achi", "_", "bj", "_", "C", "_", "d", "d", "_", "_"],
  //"Japantecknad vit/havana":
  //"Japantecknad vit/egern":
  "Japantecknad vit/svart": ["achi", "_", "bj", "_", "C", "_", "D", "_", "_", "_"],

  "Järnblå med viltanlag":   ["A", "_", "Be", "_", "C", "_", "d", "d", "G", "_"],
  "Järnbrun med viltanlag":  ["A", "_", "Be", "_", "c", "c", "D", "_", "G", "_"],
  "Järngrå":                 ["A", "_", "Be", "_", "C", "_", "D", "_", "G", "_"],
  //"​Järnegern med viltanlag":
  //"Järnotter blå":
  //"Järnotter havana":
  //"Järnotter egern":
  "Järnblå, enfärgad":    ["A", "_", "Be", "_", "C", "_", "d", "d", "g", "g"],
  "Järnhavana, enfärgad": ["A", "_", "Be", "_", "c", "c", "D", "_", "g", "g"],
  //"Järnegern, enfärgad":
  //"​Järnsvart, enfärgad":  ["A", "_", "Be", "_", "C", "_", "D", "_", "g", "g"],?
  //"Järnchinchilla": ["achi", "_", "Be", "_", "C", "_", "D", "_", "G", "_"],?
  //"Järnzobel"

  // TODO: add remaining colors
}

const colorList = Object.keys(colorDictionary);


export {
  dominanceOrder,
  lociList,
  colorDictionary,
  colorList
}
