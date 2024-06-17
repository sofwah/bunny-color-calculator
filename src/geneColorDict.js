// TODO: add KwoKk (vitörad, brokad/mantlad), Xx (vit blåögd/wienertecknad), Yy1y2y3 (rödförstärkning), s1s2s3 (holländarteckning), p1p2p3 (silver)
// hotot = Kk s1 s2 s3

// A dictionary mapping every color to its gene code
const COLOR_TO_GENE_DICT = {
  /*
  BeB och BeBe är inte samma...
  "Järngrå": ["A", "_", "Be", "_", "C", "_", "D", "_", "G", "_"],
  "Järnotter svart": ["A", "_", "Be", "_", "C", "_", "D", "_", "go", "_"],
  "Järnsvart": ["A", "_", "Be", "_", "C", "_", "D", "_", "g", "g"],
  "Järnviltblå": ["A", "_", "Be", "_", "C", "_", "d", "d", "G", "_"],
  "Järnotter blå": ["A", "_", "Be", "_", "C", "_", "d", "d", "go", "_"],
  "Järnblå": ["A", "_", "Be", "_", "C", "_", "d", "d", "g", "g"],
  "Järnviltbrun": ["A", "_", "Be", "_", "c", "c", "D", "_", "G", "_"],
  "Järnotter brun": ["A", "_", "Be", "_", "c", "c", "D", "_", "go", "_"],
  "Järnhavana": ["A", "_", "Be", "_", "c", "c", "D", "_", "g", "g"],
  "Järnlux": ["A", "_", "Be", "_", "c", "c", "d", "d", "G", "_"],
  "Järnotter egern": ["A", "_", "Be", "_", "c", "c", "d", "d", "go", "_"],
  "Järnegern": ["A", "_", "Be", "_", "c", "c", "d", "d", "g", "g"],*/

  "Viltgrå": ["A", "_", "B", "_", "C", "_", "D", "_", "G", "_"],
  "Otter svart": ["A", "_", "B", "_", "C", "_", "D", "_", "go", "_"],
  "Svart": ["A", "_", "B", "_", "C", "_", "D", "_", "g", "g"],
  "Viltblå": ["A", "_", "B", "_", "C", "_", "d", "d", "G", "_"],
  "Otter blå": ["A", "_", "B", "_", "C", "_", "d", "d", "go", "_"],
  "Blå": ["A", "_", "B", "_", "C", "_", "d", "d", "g", "g"],
  "Viltbrun": ["A", "_", "B", "_", "c", "c", "D", "_", "G", "_"],
  "Otter brun": ["A", "_", "B", "_", "c", "c", "D", "_", "go", "_"],
  "Havana": ["A", "_", "B", "_", "c", "c", "D", "_", "g", "g"],
  "Lux (egern med viltanlag)": ["A", "_", "B", "_", "c", "c", "d", "d", "G", "_"],
  "Otter egern": ["A", "_", "B", "_", "c", "c", "d", "d", "go", "_"],
  "Egern": ["A", "_", "B", "_", "c", "c", "d", "d", "g", "g"],

  "Japantecknad gul/svart med viltanlag": ["A", "_", "bj", "_", "C", "_", "D", "_", "G", "_"],
  "Japantecknad gul/svart med otteranlag": ["A", "_", "bj", "_", "C", "_", "D", "_", "go", "_"],
  "Japantecknad gul/svart": ["A", "_", "bj", "_", "C", "_", "D", "_", "g", "g"],
  "Japantecknad gul/blå med viltanlag": ["A", "_", "bj", "_", "C", "_", "d", "d", "G", "_"],
  "Japantecknad gul/blå med otteranlag": ["A", "_", "bj", "_", "C", "_", "d", "d", "go", "_"],
  "Japantecknad gul/blå": ["A", "_", "bj", "_", "C", "_", "d", "d", "g", "g"],
  "Japantecknad gul/brun med viltanlag": ["A", "_", "bj", "_", "c", "c", "D", "_", "G", "_"],
  "Japantecknad gul/brun med otteranlag": ["A", "_", "bj", "_", "c", "c", "D", "_", "go", "_"],
  "Japantecknad gul/brun": ["A", "_", "bj", "_", "c", "c", "D", "_", "g", "g"],
  "Japantecknad gul/egern med viltanlag": ["A", "_", "bj", "_", "c", "c", "d", "d", "G", "_"],
  "Japantecknad gul/egern med otteranlag": ["A", "_", "bj", "_", "c", "c", "d", "d", "go", "_"],
  "Japantecknad gul/egern": ["A", "_", "bj", "_", "c", "c", "d", "d", "g", "g"],

  "Viltgul": ["A", "_", "b", "b", "C", "_", "D", "_", "G", "_"],
  "Otter madagaskar": ["A", "_", "b", "b", "C", "_", "D", "_", "go", "_"],
  "Madagaskar": ["A", "_", "b", "b", "C", "_", "D", "_", "g", "g"],
  "Viltisabella": ["A", "_", "b", "b", "C", "_", "d", "d", "G", "_"],
  "Otter isabella": ["A", "_", "b", "b", "C", "_", "d", "d", "go", "_"],
  "Isabella": ["A", "_", "b", "b", "C", "_", "d", "d", "g", "g"],
  "Viltkanel": ["A", "_", "b", "b", "c", "c", "D", "_", "G", "_"],
  "Otter kanel": ["A", "_", "b", "b", "c", "c", "D", "_", "go", "_"],
  "Kanel": ["A", "_", "b", "b", "c", "c", "D", "_", "g", "g"],
  "Viltbeige": ["A", "_", "b", "b", "c", "c", "d", "d", "G", "_"],
  "Otter beige": ["A", "_", "b", "b", "c", "c", "d", "d", "go", "_"],
  "Beige": ["A", "_", "b", "b", "c", "c", "d", "d", "g", "g"],

  /*
  Korrekt??
  "Järnchinchilla": ["achi", "_", "Be", "_", "C", "_", "D", "_", "G", "_"],
  "Järn white svart": ["achi", "_", "Be", "_", "C", "_", "D", "_", "go", "_"],
  "Järnchinchilla med enfärgsanlag": ["achi", "_", "Be", "_", "C", "_", "D", "_", "g", "g"],
  "Järnchinchilla blå": ["achi", "_", "Be", "_", "C", "_", "d", "d", "G", "_"],
  "Järn white blå": ["achi", "_", "Be", "_", "C", "_", "d", "d", "go", "_"],
  "Järnchinchilla blå med enfärgsanlag": ["achi", "_", "Be", "_", "C", "_", "d", "d", "g", "g"],
  "Järnchinchilla havana": ["achi", "_", "Be", "_", "c", "c", "D", "_", "G", "_"],
  "Järn white havana": ["achi", "_", "Be", "_", "c", "c", "D", "_", "go", "_"],
  "Järnchinchilla havana med enfärgsanlag": ["achi", "_", "Be", "_", "c", "c", "D", "_", "g", "g"],
  "Järnchinchilla egern": ["achi", "_", "Be", "_", "c", "c", "d", "d", "G", "_"],
  "Järn white egern": ["achi", "_", "Be", "_", "c", "c", "d", "d", "go", "_"],
  "Järnchinchilla egern med enfärgsanlag": ["achi", "_", "Be", "_", "c", "c", "d", "d", "g", "g"],*/

  "Chinchilla": ["achi", "_", "B", "_", "C", "_", "D", "_", "G", "_"],
  "White svart": ["achi", "_", "B", "_", "C", "_", "D", "_", "go", "_"],
  "Chinchilla med enfärgsanlag": ["achi", "_", "B", "_", "C", "_", "D", "_", "g", "g"],
  "Chinchilla blå": ["achi", "_", "B", "_", "C", "_", "d", "d", "G", "_"],
  "White blå": ["achi", "_", "B", "_", "C", "_", "d", "d", "go", "_"],
  "Chinchilla blå med enfärgsanlag": ["achi", "_", "B", "_", "C", "_", "d", "d", "g", "g"],
  "Chinchilla havana": ["achi", "_", "B", "_", "c", "c", "D", "_", "G", "_"],
  "White havana": ["achi", "_", "B", "_", "c", "c", "D", "_", "go", "_"],
  "Chinchilla havana med enfärgsanlag": ["achi", "_", "B", "_", "c", "c", "D", "_", "g", "g"],
  "Chinchilla Egern": ["achi", "_", "B", "_", "c", "c", "d", "d", "G", "_"],
  "White egern": ["achi", "_", "B", "_", "c", "c", "d", "d", "go", "_"],
  "Chinchilla Egern med enfärgsanlag": ["achi", "_", "B", "_", "c", "c", "d", "d", "g", "g"],

  "Japantecknad vit/svart med viltanlag": ["achi", "_", "bj", "_", "C", "_", "D", "_", "G", "_"],
  "Japantecknad vit/svart med otteranlag": ["achi", "_", "bj", "_", "C", "_", "D", "_", "go", "_"],
  "Japantecknad vit/svart": ["achi", "_", "bj", "_", "C", "_", "D", "_", "g", "g"],
  "Japantecknad vit/blå med viltanlag": ["achi", "_", "bj", "_", "C", "_", "d", "d", "G", "_"],
  "Japantecknad vit/blå med otteranlag": ["achi", "_", "bj", "_", "C", "_", "d", "d", "go", "_"],
  "Japantecknad vit/blå": ["achi", "_", "bj", "_", "C", "_", "d", "d", "g", "g"],
  "Japantecknad vit/brun med viltanlag": ["achi", "_", "bj", "_", "c", "c", "D", "_", "G", "_"],
  "Japantecknad vit/brun med otteranlag": ["achi", "_", "bj", "_", "c", "c", "D", "_", "go", "_"],
  "Japantecknad vit/brun": ["achi", "_", "bj", "_", "c", "c", "D", "_", "g", "g"],
  "Japantecknad vit/egern med viltanlag": ["achi", "_", "bj", "_", "c", "c", "d", "d", "G", "_"],
  "Japantecknad vit/egern med otteranlag": ["achi", "_", "bj", "_", "c", "c", "d", "d", "go", "_"],
  "Japantecknad vit/egern": ["achi", "_", "bj", "_", "c", "c", "d", "d", "g", "g"],

  "Schwarzgrannen": ["achi", "_", "b", "b", "C", "_", "D", "_", "G", "_"],
  "White sallander": ["achi", "_", "b", "b", "C", "_", "D", "_", "go", "_"],
  "Sallander": ["achi", "_", "b", "b", "C", "_", "D", "_", "g", "g"],
  "Schwarzgrannen blå": ["achi", "_", "b", "b", "C", "_", "d", "d", "G", "_"],
  "White sallander blå": ["achi", "_", "b", "b", "C", "_", "d", "d", "go", "_"],
  "Sallander blå": ["achi", "_", "b", "b", "C", "_", "d", "d", "g", "g"],
  "Schwarzgrannen havana": ["achi", "_", "b", "b", "c", "c", "D", "_", "G", "_"],
  "White sallander havana": ["achi", "_", "b", "b", "c", "c", "D", "_", "go", "_"],
  "Sallander havana": ["achi", "_", "b", "b", "c", "c", "D", "_", "g", "g"],
  "Schwarzgrannen egern": ["achi", "_", "b", "b", "c", "c", "d", "d", "G", "_"],
  "White sallander egern": ["achi", "_", "b", "b", "c", "c", "d", "d", "go", "_"],
  "Sallander egern": ["achi", "_", "b", "b", "c", "c", "d", "d", "g", "g"],

  /*
  Zobel + järn?
  ["am", "_", "Be", "_", "C", "_", "D", "_", "G", "_"],
  ["am", "_", "Be", "_", "C", "_", "D", "_", "go", "_"],
  ["am", "_", "Be", "_", "C", "_", "D", "_", "g", "g"],
  ["am", "_", "Be", "_", "C", "_", "d", "d", "G", "_"],
  ["am", "_", "Be", "_", "C", "_", "d", "d", "go", "_"],
  ["am", "_", "Be", "_", "C", "_", "d", "d", "g", "g"],
  ["am", "_", "Be", "_", "c", "c", "D", "_", "G", "_"],
  ["am", "_", "Be", "_", "c", "c", "D", "_", "go", "_"],
  ["am", "_", "Be", "_", "c", "c", "D", "_", "g", "g"],
  ["am", "_", "Be", "_", "c", "c", "d", "d", "G", "_"],
  ["am", "_", "Be", "_", "c", "c", "d", "d", "go", "_"],
  ["am", "_", "Be", "_", "c", "c", "d", "d", "g", "g"],*/

  "Viltzobel": ["am", "_", "B", "_", "C", "_", "D", "_", "G", "_"],
  "White zobel brun": ["am", "_", "B", "_", "C", "_", "D", "_", "go", "_"],
  "Zobel brun": ["am", "_", "B", "_", "C", "_", "D", "_", "g", "g"],
  "Viltzobel blå":["am", "_", "B", "_", "C", "_", "d", "d", "G", "_"],
  "White zobel blå": ["am", "_", "B", "_", "C", "_", "d", "d", "go", "_"],
  "Zobel blå": ["am", "_", "B", "_", "C", "_", "d", "d", "g", "g"],
  "Viltzobel havana": ["am", "_", "B", "_", "c", "c", "D", "_", "G", "_"],
  "White zobel havana": ["am", "_", "B", "_", "c", "c", "D", "_", "go", "_"],
  "Zobel havana": ["am", "_", "B", "_", "c", "c", "D", "_", "g", "g"],
  "Viltzobel egern": ["am", "_", "B", "_", "c", "c", "d", "d", "G", "_"],
  "White zobel egern": ["am", "_", "B", "_", "c", "c", "d", "d", "go", "_"],
  "Zobel egern": ["am", "_", "B", "_", "c", "c", "d", "d", "g", "g"],

  "Japantecknad siames/svart med viltanlag": ["am", "_", "bj", "_", "C", "_", "D", "_", "G", "_"],
  "Japantecknad siames/svart med otteranlag": ["am", "_", "bj", "_", "C", "_", "D", "_", "go", "_"],
  "Japantecknad siames/svart": ["am", "_", "bj", "_", "C", "_", "D", "_", "g", "g"],
  "Japantecknad siames/blå med viltanlag": ["am", "_", "bj", "_", "C", "_", "d", "d", "G", "_"],
  "Japantecknad siames/blå med otteranlag": ["am", "_", "bj", "_", "C", "_", "d", "d", "go", "_"],
  "Japantecknad siames/blå": ["am", "_", "bj", "_", "C", "_", "d", "d", "g", "g"],
  "Japantecknad siames/brun med viltanlag": ["am", "_", "bj", "_", "c", "c", "D", "_", "G", "_"],
  "Japantecknad siames/brun med otteranlag": ["am", "_", "bj", "_", "c", "c", "D", "_", "go", "_"],
  "Japantecknad siames/brun": ["am", "_", "bj", "_", "c", "c", "D", "_", "g", "g"],
  "Japantecknad siames/egern med viltanlag": ["am", "_", "bj", "_", "c", "c", "d", "d", "G", "_"],
  "Japantecknad siames/egern med otteranlag": ["am", "_", "bj", "_", "c", "c", "d", "d", "go", "_"],
  "Japantecknad siames/egern": ["am", "_", "bj", "_", "c", "c", "d", "d", "g", "g"],

  "Viltisames": ["am", "_", "b", "b", "C", "_", "D", "_", "G", "_"],
  "White zobelsiames brun": ["am", "_", "b", "b", "C", "_", "D", "_", "go", "_"],
  "Zobelsiames brun": ["am", "_", "b", "b", "C", "_", "D", "_", "g", "g"],
  "Viltsiames blå": ["am", "_", "b", "b", "C", "_", "d", "d", "G", "_"],
  "White zobelsiames blå": ["am", "_", "b", "b", "C", "_", "d", "d", "go", "_"],
  "Zobelsiames blå": ["am", "_", "b", "b", "C", "_", "d", "d", "g", "g"],
  "Viltsiames havana": ["am", "_", "b", "b", "c", "c", "D", "_", "G", "_"],
  "White zobelsiames havana": ["am", "_", "b", "b", "c", "c", "D", "_", "go", "_"],
  "Zobelsiames havana": ["am", "_", "b", "b", "c", "c", "D", "_", "g", "g"],
  "Viltsiames egern": ["am", "_", "b", "b", "c", "c", "d", "d", "G", "_"],
  "White zobelsiames egern": ["am", "_", "b", "b", "c", "c", "d", "d", "go", "_"],
  "Zobelsiames egern": ["am", "_", "b", "b", "c", "c", "d", "d", "g", "g"],

  /*
  Ryss + järn?
  ["an", "_", "Be", "_", "C", "_", "D", "_", "G", "_"],
  ["an", "_", "Be", "_", "C", "_", "D", "_", "go", "_"],
  ["an", "_", "Be", "_", "C", "_", "D", "_", "g", "g"],
  ["an", "_", "Be", "_", "C", "_", "d", "d", "G", "_"],
  ["an", "_", "Be", "_", "C", "_", "d", "d", "go", "_"],
  ["an", "_", "Be", "_", "C", "_", "d", "d", "g", "g"],
  ["an", "_", "Be", "_", "c", "c", "D", "_", "G", "_"],
  ["an", "_", "Be", "_", "c", "c", "D", "_", "go", "_"],
  ["an", "_", "Be", "_", "c", "c", "D", "_", "g", "g"],
  ["an", "_", "Be", "_", "c", "c", "d", "d", "G", "_"],
  ["an", "_", "Be", "_", "c", "c", "d", "d", "go", "_"],
  ["an", "_", "Be", "_", "c", "c", "d", "d", "g", "g"],*/

  "Viltryss": ["an", "_", "B", "_", "C", "_", "D", "_", "G", "_"],
  "White rysstecknad svart": ["an", "_", "B", "_", "C", "_", "D", "_", "go", "_"],
  "Rysstecknad svart": ["an", "_", "B", "_", "C", "_", "D", "_", "g", "g"],
  "Viltryss blå": ["an", "_", "B", "_", "C", "_", "d", "d", "G", "_"],
  "White rysstecknad blå": ["an", "_", "B", "_", "C", "_", "d", "d", "go", "_"],
  "Rysstecknad blå": ["an", "_", "B", "_", "C", "_", "d", "d", "g", "g"],
  "Viltryss brun": ["an", "_", "B", "_", "c", "c", "D", "_", "G", "_"],
  "White rysstecknad brun": ["an", "_", "B", "_", "c", "c", "D", "_", "go", "_"],
  "Rysstecknad brun": ["an", "_", "B", "_", "c", "c", "D", "_", "g", "g"],
  "Viltryss egern": ["an", "_", "B", "_", "c", "c", "d", "d", "G", "_"],
  "White rysstecknad egern": ["an", "_", "B", "_", "c", "c", "d", "d", "go", "_"],
  "Rysstecknad egern": ["an", "_", "B", "_", "c", "c", "d", "d", "g", "g"],

  /*
  ???
  Ryss + japantecknad gul/svart
  ["an", "_", "bj", "_", "C", "_", "D", "_", "G", "_"],
  ["an", "_", "bj", "_", "C", "_", "D", "_", "go", "_"],
  ["an", "_", "bj", "_", "C", "_", "D", "_", "g", "g"],
  Ryss + japantecknad gul/blå
  ["an", "_", "bj", "_", "C", "_", "d", "d", "G", "_"],
  ["an", "_", "bj", "_", "C", "_", "d", "d", "go", "_"],
  ["an", "_", "bj", "_", "C", "_", "d", "d", "g", "g"],
  Ryss + japantecknad gul/brun
  ["an", "_", "bj", "_", "c", "c", "D", "_", "G", "_"],
  ["an", "_", "bj", "_", "c", "c", "D", "_", "go", "_"],
  ["an", "_", "bj", "_", "c", "c", "D", "_", "g", "g"],
  Ryss + japantecknad gul/egern
  ["an", "_", "bj", "_", "c", "c", "d", "d", "G", "_"],
  ["an", "_", "bj", "_", "c", "c", "d", "d", "go", "_"],
  ["an", "_", "bj", "_", "c", "c", "d", "d", "g", "g"],*/

  "Viltryss gul": ["an", "_", "b", "b", "C", "_", "D", "_", "G", "_"],
  "White rysstecknad gul": ["an", "_", "b", "b", "C", "_", "D", "_", "go", "_"],
  "Rysstecknad gul": ["an", "_", "b", "b", "C", "_", "D", "_", "g", "g"],

  /*
  ???
  Ryss + gul + blå (ryss + isabella):
  ["an", "_", "b", "b", "C", "_", "d", "d", "G", "_"],
  ["an", "_", "b", "b", "C", "_", "d", "d", "go", "_"],
  ["an", "_", "b", "b", "C", "_", "d", "d", "g", "g"],
  Ryss + gul + brun (ryss + kanel):
  ["an", "_", "b", "b", "c", "c", "D", "_", "G", "_"],
  ["an", "_", "b", "b", "c", "c", "D", "_", "go", "_"],
  ["an", "_", "b", "b", "c", "c", "D", "_", "g", "g"],
  Ryss + gul + brun + blå (ryss + beige)
  ["an", "_", "b", "b", "c", "c", "d", "d", "G", "_"],
  ["an", "_", "b", "b", "c", "c", "d", "d", "go", "_"],
  ["an", "_", "b", "b", "c", "c", "d", "d", "g", "g"],*/

  //Look over how "_" are handled when retrieving color from GENE_TO_COLOR_DICT
  /*"Vit rödögd": ["a", "a", "_", "_", "_", "_", "_", "_", "_", "_"],*/

  //Flytta till egen dict som inkluderas i GENE_TO_COLOR_DICT så att de inte finns i listan men presenteras som resultatfärg
  //Namnge med dold färg inom parantes
  /*["a", "a", "Be", "_", "C", "_", "D", "_", "G", "_"],
  ["a", "a", "Be", "_", "C", "_", "D", "_", "go", "_"],
  ["a", "a", "Be", "_", "C", "_", "D", "_", "g", "g"],
  ["a", "a", "Be", "_", "C", "_", "d", "d", "G", "_"],
  ["a", "a", "Be", "_", "C", "_", "d", "d", "go", "_"],
  ["a", "a", "Be", "_", "C", "_", "d", "d", "g", "g"],
  ["a", "a", "Be", "_", "c", "c", "D", "_", "G", "_"],
  ["a", "a", "Be", "_", "c", "c", "D", "_", "go", "_"],
  ["a", "a", "Be", "_", "c", "c", "D", "_", "g", "g"],
  ["a", "a", "Be", "_", "c", "c", "d", "d", "G", "_"],
  ["a", "a", "Be", "_", "c", "c", "d", "d", "go", "_"],
  ["a", "a", "Be", "_", "c", "c", "d", "d", "g", "g"],*/

  /*"Vit rödögd (\"dolt\" viltgrå)": ["a", "a", "B", "_", "C", "_", "D", "_", "G", "_"],
  "Vit rödögd (\"dolt\" otter svart)": ["a", "a", "B", "_", "C", "_", "D", "_", "go", "_"],
  "Vit rödögd (\"dolt\" svart)": ["a", "a", "B", "_", "C", "_", "D", "_", "g", "g"],
  "Vit rödögd (\"dolt\" viltblå)": ["a", "a", "B", "_", "C", "_", "d", "d", "G", "_"],
  "Vit rödögd (\"dolt\" otter blå)": ["a", "a", "B", "_", "C", "_", "d", "d", "go", "_"],
  "Vit rödögd (\"dolt\" blå)": ["a", "a", "B", "_", "C", "_", "d", "d", "g", "g"],
  "Vit rödögd (\"dolt\" viltbrun)": ["a", "a", "B", "_", "c", "c", "D", "_", "G", "_"],
  "Vit rödögd (\"dolt\" otter brun)": ["a", "a", "B", "_", "c", "c", "D", "_", "go", "_"],
  "Vit rödögd (\"dolt\" havana)": ["a", "a", "B", "_", "c", "c", "D", "_", "g", "g"],
  "Vit rödögd (\"dolt\" lux)": ["a", "a", "B", "_", "c", "c", "d", "d", "G", "_"],
  "Vit rödögd (\"dolt\" otter egern)": ["a", "a", "B", "_", "c", "c", "d", "d", "go", "_"],
  "Vit rödögd (\"dolt\" egern)": ["a", "a", "B", "_", "c", "c", "d", "d", "g", "g"],

  "Vit rödögd (\"dolt\" japantecknad gul/svart med viltanlag)": ["a", "a", "bj", "_", "C", "_", "D", "_", "G", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/svart med otteranlag)": ["a", "a", "bj", "_", "C", "_", "D", "_", "go", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/svart)": ["a", "a", "bj", "_", "C", "_", "D", "_", "g", "g"],
  "Vit rödögd (\"dolt\" japantecknad gul/blå med viltanlag)": ["a", "a", "bj", "_", "C", "_", "d", "d", "G", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/blå med otteranlag)": ["a", "a", "bj", "_", "C", "_", "d", "d", "go", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/blå)": ["a", "a", "bj", "_", "C", "_", "d", "d", "g", "g"],
  "Vit rödögd (\"dolt\" japantecknad gul/brun med viltanlag)": ["a", "a", "bj", "_", "c", "c", "D", "_", "G", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/brun med otteranlag)": ["a", "a", "bj", "_", "c", "c", "D", "_", "go", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/brun)": ["a", "a", "bj", "_", "c", "c", "D", "_", "g", "g"],
  "Vit rödögd (\"dolt\" japantecknad gul/egern med viltanlag)": ["a", "a", "bj", "_", "c", "c", "d", "d", "G", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/egern med otteranlag)": ["a", "a", "bj", "_", "c", "c", "d", "d", "go", "_"],
  "Vit rödögd (\"dolt\" japantecknad gul/egern)": ["a", "a", "bj", "_", "c", "c", "d", "d", "g", "g"],

  "Vit rödögd (\"dolt\" viltgul)": ["a", "a", "b", "b", "C", "_", "D", "_", "G", "_"],
  "Vit rödögd (\"dolt\" otter madagaskar)": ["a", "a", "b", "b", "C", "_", "D", "_", "go", "_"],
  "Vit rödögd (\"dolt\" madagaskar)": ["a", "a", "b", "b", "C", "_", "D", "_", "g", "g"],
  "Vit rödögd (\"dolt\" viltisabella)": ["a", "a", "b", "b", "C", "_", "d", "d", "G", "_"],
  "Vit rödögd (\"dolt\" otter isabella)": ["a", "a", "b", "b", "C", "_", "d", "d", "go", "_"],
  "Vit rödögd (\"dolt\" isabella)": ["a", "a", "b", "b", "C", "_", "d", "d", "g", "g"],
  "Vit rödögd (\"dolt\" viltkanel)": ["a", "a", "b", "b", "c", "c", "D", "_", "G", "_"],
  "Vit rödögd (\"dolt\" otter kanel)": ["a", "a", "b", "b", "c", "c", "D", "_", "go", "_"],
  "Vit rödögd (\"dolt\" kanel)": ["a", "a", "b", "b", "c", "c", "D", "_", "g", "g"],
  "Vit rödögd (\"dolt\" viltbeige)": ["a", "a", "b", "b", "c", "c", "d", "d", "G", "_"],
  "Vit rödögd (\"dolt\" otter beige)": ["a", "a", "b", "b", "c", "c", "d", "d", "go", "_"],
  "Vit rödögd (\"dolt\" beige)": ["a", "a", "b", "b", "c", "c", "d", "d", "g", "g"]*/
}

// A list of all available colors to be shown in the color drop-down
const COLOR_LIST = Object.keys(COLOR_TO_GENE_DICT).sort();

// A reversed version of COLOR_TO_GENE_DICT, where the gene codes are shortened.
// E.g. { A,B,C,D,G: "Viltgrå", ... }
const GENE_TO_COLOR_DICT = {};
for (const color in COLOR_TO_GENE_DICT) {
  if (COLOR_TO_GENE_DICT.hasOwnProperty(color)) {
    const geneCode = COLOR_TO_GENE_DICT[color];
    const simplifiedGeneCode = [];
    for (let i = 0; i < geneCode.length; i += 2) {
      simplifiedGeneCode.push(geneCode[i]);
    }
    GENE_TO_COLOR_DICT[simplifiedGeneCode] = color;
  }
}

export {
  COLOR_TO_GENE_DICT,
  GENE_TO_COLOR_DICT,
  COLOR_LIST
}