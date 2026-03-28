// Syllable prompts - grouped by difficulty
// Easy: common, appear in many words
// Medium: less common
// Hard: tricky to think of quickly

const SYLLABLES = {
  easy: [
    "ing", "tion", "ment", "ness", "able", "ful", "ous", "ive",
    "est", "ght", "and", "for", "the", "all", "out", "ore",
    "ate", "ine", "ant", "ent", "ist", "ure", "age", "ard",
    "air", "ear", "art", "ark", "arm", "ail", "ain", "ake",
    "ame", "ane", "ape", "are", "ase", "ave", "awn", "aze",
    "ead", "eal", "eam", "ean", "eat", "eed", "eel", "een",
    "eer", "ell", "end", "ent", "ess", "ice", "ide", "ife",
    "ike", "ile", "ill", "ime", "ind", "ine", "ire", "ise",
    "ite", "ive", "ock", "oil", "old", "ole", "one", "ood",
    "ook", "ool", "oom", "oon", "oor", "ope", "orn", "ose",
    "own", "uck", "ule", "ump", "ung", "unk", "urn", "use"
  ],
  medium: [
    "ough", "ance", "ence", "ible", "ular", "ular", "ious",
    "eous", "ther", "ough", "atch", "ight", "ound", "ange",
    "oint", "ould", "outh", "orth", "east", "west", "over",
    "under", "ower", "oper", "ober", "amp", "umb", "alf",
    "olk", "omb", "psy", "gn", "kn", "wr", "ph", "wh",
    "sch", "thr", "spr", "str", "scr", "spl", "squ"
  ],
  hard: [
    "ough", "xio", "ziu", "phy", "phr", "rhy", "thy",
    "wkw", "ynx", "ymph", "yst", "psych", "aque", "ique",
    "eux", "ieux", "oi", "xi", "zu", "quo", "qua"
  ]
};

module.exports = SYLLABLES;
