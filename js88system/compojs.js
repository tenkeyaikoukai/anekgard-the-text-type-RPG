
window.onload=(function(){
var i,j;
for(i=0;i<=24;i++){
for(j=0;j<=39;j++){
VRAMJS88[i*40+j]=0;
}
}

JS88Init();
VSetJS88(63);curMoveJS88();
threadJS88=setInterval("procTimerJS88();",500);
});
function procTimerJS88(){
JS88Routine();
curFlagJS88=-curFlagJS88;
drawScrJS88();
}
function exCharEncode(cc){
if(cc>32 && cc<160){cc.charCodeAt(0);}
}
function JS88Sys(cmd,arg1,arg2){
var chflag;
switch(cmd){

case "print":
var i,j;
var stg=arg1;

for(i=0;i<=stg.length-1;i++){
chflag=0;
for(j=0;j<=63;j++){
if(stg.substr(i,1)==ichrsJS88[j]){var tempnum=161+j;VSetJS88(tempnum);chflag=1;}
}
for(j=0;j<=19;j++){
if(stg.substr(i,1)==chrgaJS88[j]){
var tempnum=161+chrganumJS88[j];VSetJS88(tempnum);VSetJS88(222);chflag=1;
}
}
for(j=0;j<=4;j++){
if(stg.substr(i,1)==chrpaJS88[j]){
var tempnum=161+chrpanumJS88[j];VSetJS88(tempnum);VSetJS88(223);chflag=1;
}
}
if(stg.substr(i,1)=="@"){VSetJS88(32);chflag=1;}
if(chflag==0){VSetJS88(stg.charCodeAt(i));}

}
//curXJS88=0;curYJS88++;
crlfJS88();
drawScrJS88();
break;

case "input":

break;

case "inp":
return curKeyCodeJS88;
break;

case "getc":
return VRAMJS88[arg2*40+arg1];
break;

case "console":
scrollTopJS88=arg1;
scrHeightJS88=arg2;
break;

case "locate":
txtPointerX=arg1;
txtPointerY=arg2;
break;
case "image":
document.images[0].src=arg1;
break;

default:
debug.innerHTML="Error : undefined function"; 
break;
}
}
function JS88LDA(op){
}
function VSetJS88(arg){
VRAMJS88[curXJS88+curYJS88*40]=arg;
curMoveJS88();
}
function exCharDecode(cc){
var rc;
if(cc>32 && cc<160){rc=String.fromCharCode(cc);}
return rc;
}
function curMoveJS88(){
curXJS88++;
if(curXJS88>=40){curXJS88=0;curYJS88++;}
if(curYJS88>=scrHeightJS88){scrollJS88();curYJS88=scrHeightJS88-1;}
}
function keyInJS88(ev){
if(!ev){ev=event.keyCode;}
if(ev>32 && ev<120){
VSetJS88(ev+32);
inpstgJS88+=String.fromCharCode(ev+32);
curKeyCodeJS88=ev;}
if(ev==32){VSetJS88(32);}
if(ev==8){curXJS88--;VSetJS88(0);curXJS88--;}
if(ev==13){returnJS88();VSetJS88(63);curMoveJS88();}else{curMoveJS88();}
drawScrJS88();
//debug.innerHTML=event.keyCode;
}
function crlfJS88(){
curXJS88=0;curYJS88++;
if(curYJS88>=scrHeightJS88){scrollJS88();curYJS88=scrHeightJS88-1;}
}
function returnJS88(){
crlfJS88();
commandInputJS88(inpstgJS88);
drawScrJS88();
inpstgJS88="";
}
function scrollJS88(){
var i,j;
for(i=0;i<=scrHeightJS88-2;i++){
for(j=0;j<=39;j++){
VRAMJS88[i*40+j]=VRAMJS88[(i+1)*40+j];
}
}
for(i=0;i<=39;i++){
VRAMJS88[(scrHeightJS88-1)*40+i]=0;
}
}
function drawScrJS88(){
var i,j;
if(txtModeJS88==2){
ctxJS88.font="16px 'monospace'";
ctxJS88.fillStyle="rgb(0,55,0)";
ctxJS88.fillRect(0,0,640,400);
ctxJS88.fillStyle="rgb(0,255,0)";
//ctxJS88.strokeStyle="rgb(255,255,255)";
/*
ctxJS88.beginPath();
ctxJS88.moveTo(0,0);
ctxJS88.lineTo(100,100);
ctxJS88.stroke();
*/
}
var mtx="";
for(i=0;i<=scrHeightJS88-1;i++){
for(j=0;j<=39;j++){
if(i==curYJS88 && j==curXJS88 && curFlagJS88==1){
mtx+="_";}else{
var cd=VRAMJS88[j+i*40];
if(txtModeJS88==1){
if(cd>32 && cd<150){mtx+=exCharDecode(cd);}
if(cd>=161 && cd<230){var cdd=cd-161;mtx+=pchrsJS88[cdd];}
if(cd==32){mtx+=" ";}

}
if(txtModeJS88==2){
//ctxJS88.fillText("Hello World!",50,300);
if(cd>32 && cd<160){var cc=exCharDecode(cd);ctxJS88.fillText(cc+"",j*8,i*14+20);}
if(cd==32){ctxJS88.fillText(" ",j*8,i*14);}
}
//mtx+=VRAMJS88[i*40+j];
}
}
mtx+="<br />";
}
document.getElementById("scr").innerHTML=mtx;
}
