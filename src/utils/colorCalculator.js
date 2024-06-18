import { DOMINANCE_ORDER, HTML_GENE_DICT } from '../constants/constants.js';
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
  const colorStringDict = countColorVariations(offspringCombinations);

  setResultList(colorStringDict);
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
 *                         [[['A','A'],['B','B'],['C','C'],['D','D'],['G','G']],
 *                          [['A','A'],['B','B'],['C','C'],['D','D'],['G','_']], ...]
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
 *                              [['A','_'],['B','_'],['C','_'],['D','_'],['G','_']]
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
 * Turns gene lists into properly formatted strings. Can handle both complete lists with gene pairs
 * and simplified gene lists.
 *
 * @param {String[][]} geneList List of gene pairs or simplified gene lists, for example
 *                              [['A','_'],['B','_'], ...] or ['A', 'B', ...]
 * @returns {String[]} String version of the list, 'A_ B_ ...'
 */
function geneListToString(geneList) {
  var replacedList = null

  if (Array.isArray(geneList[0])) {
    replacedList = geneList.map(([first, second]) => [
      HTML_GENE_DICT[first] || first,
      HTML_GENE_DICT[second] || second,
    ]);
  } else {
    replacedList = geneList.map(el => HTML_GENE_DICT[el] || el);
  }

  return replacedList.map(maybePair => Array.isArray(maybePair) ? maybePair.join('') : maybePair ).join('&ensp;')
}

/**
 * Creates a dictionary of possible colors and their percentage to be displayed in the result along
 * with their corresponding gene codes.
 *
 * @param {String[][][]} geneCombinations List of all gene combinations for all possible offspring,
 *                                        [[['A','A'],['B','B'],['C','C'],['D','D'],['G','G']],
 *                                         [['A','A'],['B','B'],['C','C'],['D','D'],['G','_']], ...]
 * @returns {Object} Object of strings with each color or gene combination followed by its
 *                     probability in percentage as key and the corresponding gene codes as value.
 */
function countColorVariations(geneCombinations) {
  const nbrGeneCombinations = geneCombinations.length;
  const unknownColorStr = '<i>Okända genkoder</i>';
  const combinationCounts = {}; // { Viltgrå: 16 }
  const colorDict = {}; // { Viltgrå: ['A_ B_ C_ D_ G_', 'AA B_ C_ D_ G_', ...] }

  for (const geneList of geneCombinations) {
    // Retrieves color from gene code if available, otherwise put in unlabeled category
    const color = getColorFromCode(geneList) || unknownColorStr;
    // Counts the occurence of each color
    combinationCounts[color] = (combinationCounts[color] || 0) + 1;
    // Saves the gene code to the color
    colorDict[color] = (colorDict[color] || new Set()).add(geneListToString(geneList));
  }

  // Sort so largest occurence is first
  const sortedCombinationList = Object.entries(combinationCounts)
    .sort((a, b) => {
      // Category for unknown colors should come after all other
      if (a[0] === unknownColorStr) return 1;
      if (b[0] === unknownColorStr) return -1;
      // Otherwise do normal comparison based on occurence
      return b[1] - a[1];
    }).map(([key, _]) => key);

  const resultStringDict = {};

  for (const color of sortedCombinationList) {
    // Key is like "Viltgrå 4%"
    const key =
      `${color} ${Math.round((combinationCounts[color] / nbrGeneCombinations) * 1000) / 10}%`;
    resultStringDict[key] = Array.from(colorDict[color]);
  }

  return resultStringDict;
}
