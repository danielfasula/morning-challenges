// --------------- 2/9/21 ---------------
let myObj = {
    name: 'Straw',
    color: 'red',
    width: 1,
    height: 100,
    otherName: 'liquid teleportation device',
    usage: 'drink liquids in an upright position',
    defiance: 'gravity',
}

let str = `
This is a ${myObj.name}, also known as a ${myObj.otherName}. It is known as that because it allows you to ${myObj.usage}, which defies ${myObj.defiance}. I enjoy this ${myObj.name} in particular becuase it is ${myObj.color}, and that is my favorite color.
`

// --------------- 2/10/21 ---------------

// write a function that takes in a number and returns 'even' if the number is even or 'odd' if it is odd.

function evenOrOdd(num) {
    num % 2 == 0 ? console.log('even') : console.log('odd');
}



// --------------- 2/16/21 ---------------


// Write a function that will take in a single argument, a string.The string will be a sentence and your function will return the longest word in that sentence.If there are multiple words tied for longest word, then return the word that appears in the sentence first.


// ONE LINER, YEAHHHH BOIIIIII
function longestWord(str) {
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
}


longestWord("What is the longgest word in this sentence")


//Write a function that will take in one argument, a string. Determine if the given string is a palindrome, and return either true or false. (A palindrome is a word that's spelled the same both forward and backward.

// another one liner boiiiiiii
function isPalindrome(str) {
    return str.split("").reverse().join('') == str ? true : false
}

isPalindrome('tacocat')
//returns true
isPalindrome('hello')
// returns false
isPalindrome('aibohphobia')
//returns true


// Write a function that takes in a single str and return the most frequently occurring letter within that string

function mostCommonLetter(str) {

    //iterate through the array after alphabetized, and find the letter that has the most occurences
    let characters = str.split('')
    let dict = {}
    let greatest = {
        letter: '',
        value: 0
    }
    characters.forEach(c => {
        if (!dict[c]) {
            dict[c] = 0
        }
        dict[c]++
        if (dict[c] > greatest.value) {
            greatest.value = dict[c]
            greatest.letter = c
        }
    })
    console.log(greatest)
}

mostCommonLetter("hello")


//  Create a function that takes a number as its argument and returns an array of all its factors.

function factorize(n) {
    let factors = []
    for (let i = 0; i <= n; i++) n % i == 0 ? factors.push(i) : ''; console.log(factors);
}
//     for (let i = 0; i <= n; i++) {
//         if (n % i == 0) {
//             factors.push(i)
//         }
//     } console.log(factors);
//     if (factors.length == 2) {
//         console.log("Prime number");
//     }
// }

factorize(30)


// Write a function called timeConvert(min) that takes the min parameter being passed and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. If it is less than an hour you can return a 0 for hours

// divide min by 60, assign to hours, whatever is left over, assign to minutes

// one liner
function timeConvert(min) {
    console.log(Math.floor(min / 60) + ':' + min % 60)
    // let hours = 0, mins = 0
    // hours = Math.floor((min / 60))
    // mins = min % 60
    // console.log(hours + ':' + mins);
}

timeConvert(63)
timeConvert(55)
timeConvert(120)
timeConvert(255)


// Hobbits - 1, Men - 2, Elves - 3, Dwarves - 3, Eagles - 4, Wizards - 10
// Orcs - 1, Men - 2,    Wargs - 2,  Goblins - 2, Uruk Hai - 3, Trolls - 5, Wizards - 10
// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.   
// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
var goodValues = [1, 2, 3, 3, 4, 10]
var evilValues = [1, 2, 2, 2, 3, 5, 10]

var testGood = '1 1 1 2 1 0'
var testEvil = '2 0 1 0 1 0 1'

function battleForMiddleEarth(good, bad) {

    let getWorth = function (side, worth) {
        return side.split(' ').reduce((result, value, index) => {
            return result + worth[index] * value
        }, 0)
    }
    let result = getWorth(good, goodValues) - getWorth(bad, evilValues)

    return result > 0 ? console.log("Battle Result: Good triumphs over Evil") : result < 0 ? console.log("Battle Result: Evil eradicates all trace of Good") : console.log("Battle Result: No victor on this battle field")

    // let goodArmy = 0
    // let badArmy = 0

    // good.split(',')
    // goodArmy += (good[0] * 1) + (good[1] * 2) + (good[2] * 3) + (good[3] * 3) + (good[4] * 4) + (good[5] * 10)
    // bad.split(',')
    // badArmy += (bad[0] * 1) + (bad[1] * 2) + (bad[2] * 2) + (bad[3] * 2) + (bad[4] * 3) + (bad[5] * 5) + (bad[6] * 10)


    // goodArmy > badArmy ? console.log("Battle Result: Good triumphs over Evil") : badArmy > goodArmy ? console.log("Battle Result: Evil eradicates all trace of Good") : console.log("Battle Result: No victor on this battle field")
}

battleForMiddleEarth('1 1 1 1 1 1', '5 5 5 5 5 5 5')

//EX: 10, 20, 29 --> true
//EX: 10, 20, 31 --> false
//EX: 31, 10, 20 --> false
function isTriangle(num1, num2, num3) {
    return num1 + num2 > num3 && num1 + num3 > num2 && num2 + num3 > num1 ? true : false
}

console.log(isTriangle(10, 20, 29))
console.log(isTriangle(10, 20, 31))
console.log(isTriangle(31, 10, 20))
console.log(isTriangle(100, 15, 16))



//compare each letter in same row
//find most common letter in each position.
//push most common letter into separate array and return array joined together.
function repeaterCode(arr) {
    let secret = ''
    for (let col = 0; col < arr[0].length; col++) {
        let dict = {}
        let largest = ''
        let largestCount = 0
        arr.forEach(str => {
            let char = str[col]
            dict[char] = dict[char] || 0
            dict[char]++
            if (dict[char] > largestCount) {
                largest = char
                largestCount = dict[char]
            }
        })
        secret += largest
    }
    return secret
}

var testData = [
    "wrqhvxvz",
    "fyzrlmet",
    "mnoqzwlx",
    "nckjlmjq",
    "ppgpwuhw",
    "gwmlkpsf",
    "mraribhd",
    "eexeibet",
    "phnkfnoj",
    "huvgfryn",
    "cctfbymg",
    "vuzqijfv",
    "csxkasak",
    "thdtpgsv",
    "qtvawqyd",
    "sbrzqyjv",
    "tsgeceoo",
    "iersjjvv",
    "kkaftivi",
    "cohpqdsa",
    "jqntmweh",
    "ggwfrfij",
    "etgdxkpm",
    "chpiqqnk",
    "mmubsxma",
    "bjbuxerx",
    "ppikxcba",
    "argnznvv",
    "upxrvrws",
    "cnutkqpc",
    "sjxwbjgd",
    "qydjtzwt",
    "fosmuary",
    "kbegfawt",
    "qrhczgxr",
    "xveyfklu",
    "fpijdoxk",
    "efwixzzt",
    "pohwstgq",
    "vlacdfij",
    "idyukbzr",
    "fomngohx",
    "byfhtiqm",
    "nygeoydz",
    "zzindnsu",
    "cqpxyvpx",
    "urbwswjx",
    "bcrsfufk",
    "ogprzbbb",
    "ecqadcfs",
    "djtpcvzf",
    "omxatkmv",
    "qwjmrgiy",
    "vmlqsjki",
    "eacklrro",
    "afvmajbo",
    "yyfzlgqj",
    "mnddmztj",
    "hgcuzdvz",
    "dcdlgcqa",
    "ruellrxp",
    "stgcbypg",
    "cyincneb",
    "gfivdkac",
    "imszlrkh",
    "aurxrsak",
    "upmpveme",
    "ooufhdxg",
    "gbovipin",
    "oekqjihp",
    "ffpzbgim",
    "wmyllpok",
    "jlxdcsfw",
    "rdfbeprc",
    "viuyhnso",
    "qswyjhtr",
    "zqxprsxb",
    "mugvrogu",
    "swgbpgyl",
    "sjxykzhq",
    "bknjvylv",
    "sjroofyl",
    "aclottku",
    "lwzomawr",
    "hmnxauei",
    "eryjulgk",
    "auqbkmsq",
    "wjpyinlb",
    "tycjmlzf",
    "juhepezh",
    "vnhmglwy",
    "wflziftq",
    "yikhdblb",
    "nhzxxdzq",
    "dxrthhic",
    "uvzqbnol",
    "mcctvnwr",
    "npwyyxnd",
    "bbnyzojh",
    "xgfuoirw",
    "jfgjszne",
    "rjopxfcm",
    "efgfmumj",
    "nntsuprr",
    "wxepxebk",
    "ekqnppky",
    "ceuhjapp",
    "xoiukhdz",
    "yyqatdub",
    "bhbsuewa",
    "fgbquatv",
    "yaboswth",
    "snbukjjk",
    "pynjdknt",
    "vvxsotzy",
    "yewjntol",
    "zziajcor",
    "idzqcqdn",
    "snomhhsq",
    "taleymgw",
    "oaofkdgh",
    "uykbobee",
    "qgphfpys",
    "epmdwvie",
    "rswvihev",
    "qtsqhqsa",
    "onypxjqu",
    "lbehiurm",
    "yrqhldki",
    "wntmkpxg",
    "hvhoqjfm",
    "imfrfzzc",
    "hlkrbedu",
    "eltodvxl",
    "fmjbjlzo",
    "uudrfilp",
    "nuordysj",
    "wxmaadsr",
    "zucvyxer",
    "yzgztram",
    "dvpenypi",
    "iugxqkyy",
    "tjwuhzom",
    "rqvviujh",
    "mvwtwcqf",
    "rzzlgbor",
    "ldvgepup",
    "gxkwrgls",
    "pxzmtxes",
    "ydnyqvjd",
    "ctmbtmpn",
    "vzvbnvoh",
    "ogjvwzmi",
    "hkutstvd",
    "wtkbgjxc",
    "zwvdtndc",
    "xoewgwrf",
    "vuywuoyy",
    "tmvgsowx",
    "drpazgpc",
    "hdpktjre",
    "xhujdiuf",
    "usidqmiu",
    "paisyipg",
    "udgpwuyr",
    "xyqujvyl",
    "yzymvngz",
    "bjsfhkho",
    "kleeufzg",
    "boxtwvqp",
    "eirtmgdq",
    "uyatzfjp",
    "eiwaglki",
    "zmfdosar",
    "kqjhffzw",
    "xphspwfi",
    "lkspqenw",
    "snostusw",
    "pwomwuxx",
    "tuwdkyof",
    "jafayips",
    "fwajafvu",
    "hbsdgbcd",
    "hqabjeak",
    "azauvrcz",
    "yhsyyfht",
    "ncfluumb",
    "tkyddact",
    "absnaesw",
    "nwwgysfc",
    "tvkoeoak",
    "jrkivysc",
    "vnbxmqmg",
    "yxyfjqec",
    "fbpxjxoq",
    "pwfwufud",
    "srschjcz",
    "iemyfvyk",
    "jpsozquz",
    "xxkbhqfx",
    "ctzdlqim",
    "ecvuennt",
    "ntsymmce",
    "cfammoxo",
    "qdeuphqg",
    "shhihavx",
    "raxifsjs",
    "rffimsfe",
    "keoiclfo",
    "tonhtkka",
    "qvifltqb",
    "dxgzlvvt",
    "wjolvrqy",
    "rxrojpfe",
    "zjfegcjb",
    "ionhbxlk",
    "uttntfbn",
    "elkltgyr",
    "zxtgfoyp",
    "zgrlkobm",
    "udynqgcr",
    "pwxnwfri",
    "wslxkqms",
    "lzdhoala",
    "cccvdbva",
    "sgdusmtl",
    "kluxyiti",
    "wfekkxph",
    "obdeuglc",
    "vsizhxgd",
    "txldyjzb",
    "ytwdfalx",
    "wgdwnlmh",
    "nbfwcuec",
    "cphqneqh",
    "ykmiwxci",
    "diqmosuf",
    "ycxbayxd",
    "uozhqaha",
    "foaebowb",
    "whsvmuqm",
    "uqycszbo",
    "caatmkxj",
    "pmrllxgj",
    "rpjtthix",
    "nkabrxoe",
    "dyjavdch",
    "bvfwapob",
    "gxdagoag",
    "ygsigzqg",
    "tojebkhg",
    "maywseuz",
    "fzycswkp",
    "gxuhflnn",
    "xdrlwkzt",
    "qzdueidt",
    "xrhcqpcx",
    "anmlyixt",
    "igkeehdq",
    "rbbfewws",
    "ybzityqu",
    "xrsnibvq",
    "kiitlldy",
    "dnnxpbgg",
    "vghhgbay",
    "lttzpsfu",
    "mzurjkii",
    "tyjyhtbg",
    "ymvdocyu",
    "errkxbjz",
    "kdhdhckp",
    "siqzydiw",
    "gaxwpwtf",
    "jgsgmbxa",
    "meyjbgaj",
    "nxdgwanj",
    "irypqcfl",
    "kwzsqbtn",
    "vqbwffro",
    "gbhjoydl",
    "mtjeaybv",
    "vkejxfui",
    "xkrlzagc",
    "rvckysna",
    "qttzpaob",
    "faejrisy",
    "oenhtrjt",
    "zpajldwd",
    "hdlfphtw",
    "uuuztawz",
    "priivfke",
    "ltqlgmcy",
    "wekrahkz",
    "arvgglws",
    "gmfrdeec",
    "bslrhbcq",
    "dwredpeh",
    "ripdkqay",
    "bkajataw",
    "rfwccavd",
    "vrcnadbn",
    "mxjayvar",
    "xppvhrfq",
    "rnbkpicv",
    "xlcoaixn",
    "ypfgypwn",
    "aucydvqh",
    "gfmivoiw",
    "tdrrgvae",
    "nvatvqbd",
    "uqnkdtci",
    "yvvkoljz",
    "nrvayuna",
    "kyjspqke",
    "idfgxyxa",
    "whhnbvzj",
    "untvohwp",
    "nbowzeok",
    "fojmdmwt",
    "hicfolns",
    "nvjmitnz",
    "dixbuczb",
    "oozreove",
    "aogeaoij",
    "swqdsqur",
    "kuircnkc",
    "jommqnij",
    "jeoccbrl",
    "srncrgac",
    "bflzsoxz",
    "crqrvnux",
    "aehtnnrc",
    "pjfpvctd",
    "ooudwhnj",
    "oajsxzfy",
    "zgocdfqi",
    "skezvrmd",
    "hphnrmdo",
    "mntkzcex",
    "dcezrbsc",
    "cwvnaeky",
    "zazjhuho",
    "hjsicgvu",
    "bblytdbn",
    "kuioocro",
    "wdmsbnph",
    "pglvxlat",
    "lfivjfyl",
    "tfhuxole",
    "axtnimum",
    "avbexhov",
    "wuwtxwli",
    "ovqriwps",
    "kpzzawgo",
    "zzrnrxfc",
    "erbhfcuz",
    "srikwbhj",
    "ihkseool",
    "ihnzciwn",
    "drvqkldw",
    "qjjmhdiq",
    "zthvplsb",
    "cvzajngd",
    "aztvfmpc",
    "osvxkdfu",
    "hujqnbej",
    "qlailyvd",
    "aldnonen",
    "mlwgljdh",
    "ljegteof",
    "hmydlwte",
    "dxcbelhq",
    "ikxejooi",
    "rxfqniee",
    "qzfxpqrw",
    "qcletmfv",
    "rlnllmwt",
    "ldgcvuaq",
    "oijbcwzp",
    "nsfanzbx",
    "zqtxrhlw",
    "vruxpbdr",
    "zovauywl",
    "vfqsnrkg",
    "jseiugwx",
    "gplkhkbv",
    "vgxaikyq",
    "fxuwawnt",
    "txpwlven",
    "lhdukmwm",
    "vqohfdux",
    "pwwkcyuy",
    "siyuwkdf",
    "ijeceqqv",
    "rcafsasu",
    "dwmzwajz",
    "hpwanjtr",
    "aqcumwlo",
    "nblfdzch",
    "xjmgbuai",
    "dbcmcucf",
    "ulqoaslo",
    "dilljkcb",
    "qzbuzkuj",
    "kqaovbws",
    "ggaoqcge",
    "dkafdhok",
    "kiwmtsle",
    "pmosnoov",
    "bqzwbyff",
    "jzbkupuq",
    "loruoeuj",
    "znxhxcbq",
    "zuiojajs",
    "nkzxcjnb",
    "byfmovta",
    "lexozwii",
    "mmiirvzo",
    "wxdmazhu",
    "tvakysqv",
    "fcclondf",
    "laovojik",
    "liwlmxma",
    "fhfyuwhu",
    "dhnbftia",
    "hhjgkstn",
    "xievywrd",
    "ytggugmi",
    "fueqzuxp",
    "cntcbskl",
    "moevqzch",
    "rkvngfzu",
    "vyoyrmnz",
    "fsmfxqux",
    "kjrcqres",
    "wbwgstkj",
    "bbpkbyfv",
    "odlwmtdm",
    "yvwxzpkp",
    "tglceron",
    "pfqhznpf",
    "cjvguvna",
    "awatckgf",
    "jjuedfcr",
    "xsmzexyx",
    "zolugtkn",
    "equadjbw",
    "yzuwbeip",
    "juokhxyh",
    "blbzigrg",
    "xiiqmrfr",
    "wpklubhl",
    "dnklxihu",
    "dvypukjj",
    "gezdwsyq",
    "ijpsmlhy",
    "haybyxgt",
    "ttrpwsia",
    "xsmuumcy",
    "zjcjcfgn",
    "qcyfmzxn",
    "jbpiesjd",
    "imsgjvbe",
    "bluqigdj",
    "pkjtbwrz",
    "ghdqwhof",
    "qqcyrcmt",
    "nwqbpohw",
    "wtdmhjpz",
    "kysorzis",
    "beybysab",
    "wzotkcsl",
    "rkxcjtxw",
    "kxdovhby",
    "nwbmwfvw",
    "ldgnxdzg",
    "fvkssaql",
    "gwnpsneo",
    "kzdageby",
    "tvalcxyg",
    "vudemgvl",
    "nhsqjdry",
    "ihbwfzmq",
    "ulzxzqpr",
    "ulyisqeh",
    "gibzsqab",
    "qlbvivbk",
    "zfjbeimz",
    "uwwkbmad",
    "jysiepul",
    "pcttcpfb",
    "ikigjtum",
    "ebnjregv",
    "wlnojjdl",
    "jseorxzw",
    "jadngcyb",
    "chblsorv",
    "atsykhzy",
    "llmwiiue",
    "lncwmxbm",
    "uaprvgtu",
    "fsfbhhna",
    "qekriahp",
    "cprovrro",
    "arkzaotx",
    "cqkmiisd",
    "byasehtp",
    "mquxvaus",
    "yqdboakk",
    "fcbmnmas",
    "ndgancyd",
    "mqbhpwky",
    "bqqnrysa",
    "heevqgpx",
    "wenamdlt",
    "geqpvmvy",
    "awohkyss",
    "csauzidz",
    "rzbxnqxo",
    "lijyetnn",
    "szhywdzw",
    "bvspeaot",
    "cassrzgo",
    "ebniprcj",
    "jkgqnrmt",
    "kanfkldg",
    "tatiqhyp",
    "kjrnsxxf",
    "tigsmyql",
    "dpiwuvgd",
    "mysstyqk",
    "ggmceolm",
    "uykudpjq",
    "lqcfbupx",
    "bspqglas",
    "adlikxti",
    "ytkklkgs",
    "hagxejlb",
    "qawjetxs",
    "mfozming",
    "mijryfrm",
    "aiqisdzo",
    "oizwdmba",
    "fmwhxvyn",
    "nbpvnnqu",
    "uucpiqnr",
    "derohmtm",
    "mtvvlkwb",
    "odofsftu",
    "otdpquza",
    "ieuqarfj",
    "efbllxnl",
    "piyhprln",
    "zzhuyevt",
    "xggfukpg",
    "oagdqlte",
    "jcaknznq",
    "bmqvzzpm",
    "gqccntfm",
    "kejcxspk",
    "eghjfubo",
    "jpesccrp",
    "lptxbsjp",
    "lkqdahjg",
    "gllipbpw",
    "gmtpkpbh",
    "vskklchk",
    "hkujjpqf",
    "onqsydhq",
    "abymijve",
    "setxngek",
    "pylgwuhu",
    "rvmcnudu",
    "zkoigkmp",
    "jhufctqm",
    "rjlebecw",
    "kfrcyvsg",
    "gdvswlmx",
    "ddneodvc",
    "eleaatkz",
    "xdrrnsmo",
    "eavdleuh",
    "snuapqlh",
    "qfprvzlf",
    "jwtxoteb",
    "xhmeonrl",
    "oomepucp",
    "voldiamz",
    "pgctnnvi",
    "zxctfwmu",
    "ssvzhjjc",
    "iszyacdg",
    "kwhtrkug",
    "tsfcxlah",
    "jhnpuzwv",
    "vgvytgdv",
    "xppvelhv",
    "lczyglmi",
    "mzyncyji",
    "fktibrns",
    "tnpbpekf",
    "htcfrtea",
    "iehqohtx",
    "ofhqjvsk",
    "etoxthqk",
    "lcpnurbf",
    "pquperie",
    "icdggxtv",
    "gebpbjje",
    "hrtqhskf",
    "plxtfopc",
    "smtpxpvf",
    "tcihqpmd",
    "tmprzzjw",
    "hnjkwcvm",
    "qzmofpgs",
    "ssmfzilr",
    "glxqqwis",
    "umeygdrp",
    "qhqgfocl",
    "rmxlqigp",
    "vcxozjsn",
    "mviznnhr",
    "islgcrgm"
]

console.log(repeaterCode(testData))

function diffArray(arr1, arr2) {

    return arr1.concat(arr2).filter(num => !arr1.includes(num) || !arr2.includes(num))

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])