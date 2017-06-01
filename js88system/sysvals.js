var curXJS88=0;
var curYJS88=0;
var colorJS88=7;
var curFlagJS88=1;
var threadJS88;
var notifyJS88=0;
var inpstgJS88="";
var VRAMJS88=new Array();
var regAJS88=0;
var regBCJS88=0;
var regDEJS88=0;
var regHLJS88=0;
var memoryJS88=new Array();
var stackJS88=new Array();
var PCJS88=0;
var curKeyCodeJS88=0;
var inputStateJS88=true;
var txtPointerX=0;
var txtPointerY=0;
var scrollTopJS88=0;
//var ctxJS88=document.getElementById('c3').getContext('2d');
var txtModeJS88=1;
var vadrJS88=0xF300;
//input or timer
var procModeJS88="input";
var ichrsJS88=new Array(
"。","「","」","、","・","ヲ","ァ","ィ","ゥ","ェ",
"ォ","ャ","ュ","ョ","ッ","ー","ア","イ","ウ","エ",
"オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ",
"ソ","タ","チ","ツ","テ","ト","ナ","ニ","ヌ","ネ",
"ノ","ハ","ヒ","フ","ヘ","ホ","マ","ミ","ム","メ",
"モ","ヤ","ユ","ヨ","ラ","リ","ル","レ","ロ","ワ",
"ン","゛","゜"
);
var pchrsJS88=new Array(
"｡","｢","｣","､","･","ｦ","ｧ","ｨ","ｩ","ｪ",
"ｫ","ｬ","ｭ","ｮ","ｯ","ｰ","ｱ","ｲ","ｳ","ｴ",
"ｵ","ｶ","ｷ","ｸ","ｹ","ｺ","ｻ","ｼ","ｽ","ｾ",
"ｿ","ﾀ","ﾁ","ﾂ","ﾃ","ﾄ","ﾅ","ﾆ","ﾇ","ﾈ",
"ﾉ","ﾊ","ﾋ","ﾌ","ﾍ","ﾎ","ﾏ","ﾐ","ﾑ","ﾒ",
"ﾓ","ﾔ","ﾕ","ﾖ","ﾗ","ﾘ","ﾙ","ﾚ","ﾛ","ﾜ",
"ﾝ","ﾞ","ﾟ"
);
var chrgaJS88=new Array(
"ガ","ギ","グ","ゲ","ゴ",
"ザ","ジ","ズ","ゼ","ゾ",
"ダ","ヂ","ヅ","デ","ド",
"バ","ビ","ブ","ベ","ボ"
);
var chrganumJS88=new Array(
21,22,23,24,25,26,27,28,29,30,
31,32,33,34,35,41,42,43,44,45
);
var chrpaJS88=new Array(
"パ","ピ","プ","ペ","ポ"
);
var chrpanumJS88=new Array(
41,42,43,44,45
);
