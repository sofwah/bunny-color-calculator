import { DOMINANCE_ORDER } from './constants.js';
import { GENE_TO_COLOR_DICT } from './geneColorDict.js';

//TODO: replace for-loops with foreach or map

/**
 * Used to get the color from the gene list used in the gene pair dropdowns.
 *
 * @param {Object} geneList A dictionary with locus (a, b, c, d, g) as keys and a list with a gene pair as value, {a -> ['A', 'a'], ...}.
 * @returns {String} Color corresponding to gene code if available, otherwise default.
 */
function getColorFromCode(geneList) {
  const simplifiedGeneList = [];
  for (const genePair of Object.values(geneList)) {
    simplifiedGeneList.push(genePair[0])
  }
  return GENE_TO_COLOR_DICT[simplifiedGeneList] || 'default';
}

/**
 * Gives all possible color combinations as a list with the probabilities in descending order.
 *
 * @param {Object} geneList1 A dictionary with locus (a, b, c, d, g) as keys and a list with a gene pair as value, {a -> ['A', 'a'], ...}.
 * @param {Object} geneList2 A dictionary with locus (a, b, c, d, g) as keys and a list with a gene pair as value, {a -> ['A', 'a'], ...}.
 * @param {Function} setResultList Function to set the value of the resultList state.
 * @returns {String[]} List of strings where each element is a color if available (otherwise gene code) and it's probability, ordered with the highest probability first.
 */
function findPossibleCombinations(geneList1, geneList2, setResultList) {
  const genePairCombinations = getPairCombinations(geneList1, geneList2);
  const offspringCombinations = getCombinations(genePairCombinations);
  const simplifiedCombinations = simplifyCombinations(offspringCombinations);
  const colorStrings = countColorVariations(simplifiedCombinations);

  setResultList(colorStrings);
}

/**
 * A dictionary with all possible pair combination for each loci
 *
 * @param {Object} geneList1 A dictionary with locus (a, b, c, d, g) as keys and a list with a gene pair as value, {a -> ['A', 'a'], ...}.
 * @param {Object} geneList2 A dictionary with locus (a, b, c, d, g) as keys and a list with a gene pair as value, {a -> ['A', 'a'], ...}.
 * @returns {Object} Dictionary with all possible pair combinations for each loci (pairs sorted in dominance order), {a -> [['A', 'A'], ['A', 'achi'], ...], ...}.
 */
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
      let locusDominanceOrder = DOMINANCE_ORDER[locus];
      // Sort the gene pair based on the dominance order
      return [gene1, gene2].sort((a, b) => locusDominanceOrder.indexOf(a) - locusDominanceOrder.indexOf(b));
    });

    genePairCombinations[locus] = combinations;
  }

  return genePairCombinations;
}

/**
 * Returns a list of gene combinations for all possible offsprings
 *
 * @param {Object} geneDict Dictionary with all possible pair combinations for each loci, {a -> [['A', 'A'], ['A', 'achi'], ...], ...}.
 * @returns {String[][][]} List of all gene combinations for all possible offspring,
 *                         [[["A","A"],["B","B"],["C","C"],["D","D"],["G","G"]], [["A","A"],["B","B"],["C","C"],["D","D"],["G","_"]], ...]
 */
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

/**
 * Removes the hidden gene in the gene pair in a list of all gene combinations for all possible offspring.
 * TODO: In the future potentially remove this and use complete gene pairs to map to colors
 *
 * @param {String[][][]} combinations List of all gene combinations for all possible offspring,
 *                         [[["A","A"],["B","B"],["C","C"],["D","D"],["G","G"]], [["A","A"],["B","B"],["C","C"],["D","D"],["G","_"]], ...]
 * @returns {String[][]} Input param with gene pair list replaced with only the first gene.
 */
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

/**
 * Returns the list of possible colors and their percentage to be displayed in the result.
 *
 * @param {String[][]} geneCombinations [["A","B","C","D","G"], ["A","B","C","D","g"], ...], duplicates included.
 * @returns {String[]} List of strings with each simplified gene combination followed by its probability in percentage.
 */
function countColorVariations(geneCombinations) {
  // Count the occurrence of each combination
  const combinationCounts = {};

  for (const combination of geneCombinations) {
    combinationCounts[combination] = (combinationCounts[combination] || 0) + 1;
  }

  // Sort so largest occurence is first
  const sortedCombinationCounts = Object.fromEntries(
    Object.entries(combinationCounts).sort((a, b) => b[1] - a[1])
  );

  const counts = Object.values(sortedCombinationCounts);
  let sum = 0;
  counts.forEach( num => {
    sum += num;
  })

  const resultStrings = [];

  for (const key in sortedCombinationCounts) {
    resultStrings.push(`${GENE_TO_COLOR_DICT[key] || key} ${Math.round((sortedCombinationCounts[key]/sum) * 100*10)/10}%`);
  }

  return resultStrings;
}

export { findPossibleCombinations, getColorFromCode };
