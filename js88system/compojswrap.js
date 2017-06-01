
//pseudo BASIC

function commandInputJS88(stg){
input(stg);
}
function procset(stg){
if(stg=="input" || stg=="timer"){
procModeJS88=stg;
}else{debug.innerHTML="Error:illeagal proc mode";}
}
function print(stg){
JS88Sys("print",stg,0);
}
function JS88Init(){
init();
}
function JS88Routine(){
routine();
}
function inp(){
return JS88Sys("inp",0,0);
}

function getc(x,y){
var c;
c=JS88Sys("getc",x,y);
return c;
}

function locate(x,y){
JS88Sys("locate",x,y);
}

function console(y1,y2){
JS88Sys("console",y1,y2);
}

function cls(){
JS88Sys("cls",0,0);
}

function line(x1,y1,x2,y2){
}

//pseudo Machine Language

function lda(op){
}
function push(){
}
function pop(){
}
function ldbc(op){
}
function ldde(op){
}
function ldhl(op){
}
function sthl(){
}
function djnz(){
}
function blockinc(){
}
function blockdec(){
}

function JS88Init(){
init();
}
function JS88Routine(){
routine();
}
function inp(){
return JS88Sys("inp",0,0);
}
