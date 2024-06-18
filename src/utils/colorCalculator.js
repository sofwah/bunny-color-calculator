import { DOMINANCE_ORDER } from '../constants/constants.js';
import { GENE_TO_COLOR_DICT } from '../constants/geneColorDict.js';

//TODO: replace for-loops with foreach or map

/**
 * Used to get the color from the gene list used in the gene pair dropdowns.
 *
 * @param {Object} geneList A dictionary with locus (a, b, c, d, g) as keys and a list with
 *                          a gene pair as value, {a -> ['A', 'a'], ...}.
 * @returns {String} Color corresponding to gene code if available, otherwise default.
 */

export function getColorFromCode(geneList) {
  const simplifiedGeneList = [];
  for (const genePair of Object.values(geneList)) {
    simplifiedGeneList.push(genePair[0])
  }
  return GENE_TO_COLOR_DICT[simplifiedGeneList];
}

/**
 * Gives all possible colors as a list with the probabilities in descending order.
 *
 * @param {Object} geneList1 A dictionary with locus (a, b, c, d, g) as keys and a list with a
 *                           gene pair as value, {a -> ['A', 'a'], ...}.
 * @param {Object} geneList2 A dictionary with locus (a, b, c, d, g) as keys and a list with a
 *                           gene pair as value, {a -> ['A', 'a'], ...}.
 * @param {Function} setResultList Function to set the value of the resultList state.
 * @returns {String[]} List of strings where each element is a color if available (otherwise gene
 *                     code) and it's probability (e.g. "Viltgrå 7%""), ordered with the highest
 *                     probability first.
 */
export function findPossibleCombinations(geneList1, geneList2, setResultList) {
  const genePairCombinations = getPairCombinations(geneList1, geneList2);
  const offspringCombinations = getCombinations(genePairCombinations);
  const colorStringList = countColorVariations(offspringCombinations);

  setResultList(colorStringList);
}


// ## Helper functions ##

/**
 * A dictionary with all possible pair combination for each loci
 *
 * @param {Object} geneList1 A dictionary with locus (a, b, c, d, g) as keys and a list with a
 *                           gene pair as value, {a -> ['A', 'a'], ...}.
 * @param {Object} geneList2 A dictionary with locus (a, b, c, d, g) as keys and a list with a
 *                           gene pair as value, {a -> ['A', 'a'], ...}.
 * @returns {Object} Dictionary with all possible pair combinations for each loci (pairs sorted in
 *                   dominance order), {a -> [['A', 'A'], ['A', 'achi'], ...], ...}.
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
      return [gene1, gene2].sort(
        (a, b) => locusDominanceOrder.indexOf(a) - locusDominanceOrder.indexOf(b)
      );
    });

    genePairCombinations[locus] = combinations;
  }

  return genePairCombinations;
}

/**
 * Returns a list of gene combinations for all possible offsprings
 *
 * @param {Object} geneDict Dictionary with all possible pair combinations for each loci,
 *                          {a -> [['A', 'A'], ['A', 'achi'], ...], ...}.
 * @returns {String[][][]} List of all gene combinations for all possible offspring,
 *                         [[["A","A"],["B","B"],["C","C"],["D","D"],["G","G"]],
 *                          [["A","A"],["B","B"],["C","C"],["D","D"],["G","_"]], ...]
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
 * Removes the hidden gene in the gene pair in a list of gene pairs
 *
 * @param {String[][]} geneList List of gene pairs, for example
 *                              [["A","_"],["B","_"],["C","_"],["D","_"],["G","_"]]
 * @returns {String[]} Input param with gene pair list replaced with only the first gene.
 */
function simplifyGeneList(geneList) {
  const simplifiedGeneList = [];
  for (const genePair of geneList) {
    simplifiedGeneList.push(genePair[0])
  }
  return simplifiedGeneList;
}

/**
 * Returns the list of possible colors and their percentage to be displayed in the result.
 *
 * @param {String[][][]} geneCombinations List of all gene combinations for all possible offspring,
 *                                        [[["A","A"],["B","B"],["C","C"],["D","D"],["G","G"]],
 *                                         [["A","A"],["B","B"],["C","C"],["D","D"],["G","_"]], ...]
 * @returns {String[]} List of strings with each color or gene combination followed by its
 *                     probability in percentage.
 */
function countColorVariations(geneCombinations) {
  // Count the occurrence of each color
  const combinationCounts = {};

  for (const geneList of geneCombinations) {
    const color = getColorFromCode(geneList) || geneList.map(pair => pair.join('')).join(' ') //simplifyGeneList(geneList).join(' ');//
    combinationCounts[color] = (combinationCounts[color] || 0) + 1;
  }

  // Sort so largest occurence is first
  const sortedCombinationCounts = Object.fromEntries(
    Object.entries(combinationCounts).sort((a, b) => b[1] - a[1])
  );

  // Get total amount of colors to be used when calcualting percentage
  const counts = Object.values(sortedCombinationCounts);
  let sum = 0;
  counts.forEach( num => {
    sum += num;
  })

  const resultStringList = [];

  for (const key in sortedCombinationCounts) {
    // Adds a line like "Viltgrå 4%"
    resultStringList.push(
      `${GENE_TO_COLOR_DICT[key] || key} ${
        Math.round((sortedCombinationCounts[key] / sum) * 1000) / 10
      }%`
    );
  }

  return resultStringList;
}
