import { dominanceOrder, geneCodeDictionary } from './constants.js';

//TODO: replace for-loops with foreach or map

function findPossibleCombinations(geneList1, geneList2, setResultList) {
  const genePairCombinations = getPairCombinations(geneList1, geneList2);
  const offspringCombinations = getCombinations(genePairCombinations);
  const simplifiedCombinations = simplifyCombinations(offspringCombinations);
  const colorStrings = countColorVariations(simplifiedCombinations);

  setResultList(colorStrings);
}

// Returns a dictionary with all possible pair combination for each locus
function getPairCombinations(geneList1, geneList2) {
  const genePairCombinations = {};

  for (const locus in geneList1) {
    const genes1 = geneList1[locus];
    const genes2 = geneList2[locus];
    let combinations = [];

    for (const gene1 of genes1) {
      for (const gene2 of genes2) {
        combinations.push([gene1, gene2]);
      }
    }

    // Re-arrange gene pairs by dominance
    combinations = combinations.map(([gene1, gene2]) => {
      let locusDominanceOrder = dominanceOrder[locus];
      // Sort the gene pair based on the dominance order
      return [gene1, gene2].sort((a, b) => locusDominanceOrder.indexOf(a) - locusDominanceOrder.indexOf(b));
    });

    genePairCombinations[locus] = combinations;
  }

  return genePairCombinations;
}

// Returns a list of gene combinations for all possible offsprings
// Example: [[["A","A"],["B","B"],["C","C"],["D","D"],["G","G"]], [["A","A"],["B","B"],["C","C"],["D","D"],["G","_"]], ...]
function getCombinations(geneDict) {
  const loci = Object.values(geneDict);
  const allGeneCombinations = [];

  function combineGenes(index, currentCombination) {
    if (index === loci.length) {
      allGeneCombinations.push(currentCombination);
      return;
    }

    for (const genePair of loci[index]) {
      combineGenes(index + 1, [...currentCombination, genePair]);
    }
  }

  combineGenes(0, []);

  return allGeneCombinations;
}

// Maybe remove this and use complete gene pairs to map to colors?
// Removes the hidden gene in the gene pair
function simplifyCombinations(combinations) {
  const simplifiedCombinations = [];

  for (const offspring of combinations) {
    const simplifiedOffspring = [];
    for (const genePair of offspring) {
      simplifiedOffspring.push(genePair[0])
    }
    simplifiedCombinations.push(simplifiedOffspring)
  }

  return simplifiedCombinations;
}

// Returns a list of strings with each simplified gene combination followed by its probability in percentage
function countColorVariations(geneCombinations) {
  // Count the occurrence of each combination
  const combinationCounts = {};

  for (const combination of geneCombinations) {
    combinationCounts[combination] = (combinationCounts[combination] || 0) + 1;
  }

  const counts = Object.values(combinationCounts);
  let sum = 0;
  counts.forEach( num => {
    sum += num;
  })

  const resultStrings = [];

  for (const key in combinationCounts) {
    resultStrings.push(`${geneCodeDictionary[key] || key} ${Math.round((combinationCounts[key]/sum) * 100*10)/10}%`);
  }

  return resultStrings;
}

export { findPossibleCombinations };
