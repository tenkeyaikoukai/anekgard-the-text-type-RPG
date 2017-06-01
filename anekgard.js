var scene=1;
var inp,ptn,i,v,n,mes;
var njp=new Array("","Mark(merchant)","Precious Metal","George(knight)","Old Gem","Map","Gem of Man","Maria(Princess)","Herb","Mineral","Robin(thief)","Gem of Forest","Dragon","Dragon's Nail","Gem of Dragon","Gem of God","Gem of Sky","Gem of Earth","Coin","Vulture","Antique Merchant","Farmer","Priest","","");
var plname=new Array("","Entrance of The Town","Public Square","Antique Market","Inn","Highway","Highway","Entarnce of the Village","Vegitable Field","Farm House","Wilderness","Wilderness","Ruin","Wilderness","Cave","Highway","Entrance of the Mountain","Forest Path","Mountain Path","Pass","Shrine","Home of Vulture","Cliff Path","Top of the Mountain","Forest","Forest","Forest","Forest","Forest","Forest","","");
//pos 99=hidden 50=players possesion
var pos=new Array(0,15,99,4,99,99,99,18,99,99,29,99,14,99,99,99,99,99,99,21,3,9,20,0);
var mapfw=new Array(0,5,0,0,2,6,15,0,0,0,0,13,11,14,0,24,17,18,0,22,0,0,23,0,25,29,28,0,0,0,0,0);
var maprt=new Array(0,2,3,0,0,0,7,8,9,0,6,10,0,0,0,16,0,0,19,20,0,22,0,0,0,0,25,26,0,0,0,0);
var maplt=new Array(0,0,1,2,0,0,10,6,7,8,11,0,0,0,0,0,15,0,0,18,19,0,21,0,0,26,27,0,0,0,0);
var mapbk=new Array(0,0,4,0,0,1,5,0,0,0,0,12,0,11,13,6,0,16,17,0,0,0,19,22,15,24,0,0,26,25,0,0);
var person=new Array(0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0);
pl=1;
gold=0;
mes="";

function init(){
conds();
}


function input(stginp){
if(stginp=="n"){north();}
if(stginp=="s"){south();}
if(stginp=="e"){east();}
if(stginp=="w"){west();}
if(stginp=="a"){fight();}
if(stginp=="r"){search();}
if(stginp=="t"){talk();}
if(stginp=="c"){report();}



}
function routine(){
}

function conds(){
print("You are at " + plname[pl]);
for(i=1;i<=21;i++){
if(pos[i]==pl ){ print("There is "+njp[i] + "");}
}
mes="You can go ";
if(mapfw[pl]>0){mes+= "north, ";}
if(maprt[pl]>0){mes+= "east, ";}
if(maplt[pl]>0){mes+= "west, ";}
if(mapbk[pl]>0){mes+= "south, ";}
print(mes);
print("Command[NSEW R)esearch A)ttack T)alk C)ondition]")
}
function north(){
if(mapfw[pl]>0){print("You go north.");pl=mapfw[pl];}
else{print("You can not go this direction.");}
conds();
}
function south(){
if(mapbk[pl]>0){print("You go south.");pl=mapbk[pl];}
else{print("You can not go this direction.");}
conds();
}
function east(){
if(maprt[pl]>0){print("You go east.");pl=maprt[pl];}
else{print("You can not go this direction.");}
conds();
}
function west(){
if(maplt[pl]>0){print("You go west.");pl=maplt[pl];}
else{print("You can not go this direction.");}
conds();
}
function search(){
cmflg=0;
if(pl==28 & pos[1]==50 & pos[11]==99){ print("Robin find a (Gem of forest).");pos[11]=50;cmflg=1;}
if( pl==27 & pos[7]==50 & pos[8]==99 ){print("Maria find a (Herb).");pos[8]=50;cmflg=1;}
if( pl==22 & pos[9]==99 ){print("You find a piece of (Mineral).");pos[9]=50;cmflg=1;}
if (pl==12 & pos[1]==50 & pos[4]==99 ){print("Robin find a (Old gem).");pos[4]=50;cmflg=1;}
if (pl==12 & pos[1]==50 & pos[4]==50 & pos[2]==99 ){print("Robin find a piece of (Precious matal).");pos[11]=50;cmflg=1;}
if(cmflg==0 ){print("You can find nothing special.");}
if (pos[4]==50 & pos[6]==50 & pos[11]==50 & pos[14]==50 & pos[15]==50 & pos[16]==50 & pos[17]==50 ){ print("You solve a game Anekgard!");gameflag=0;}
conds();
}
function report(){
mes="Fellow:";
for(i=1;i<=22;i++){
if(pos[i]==50 & person[i]==1 ){mes=mes+ njp[i]+" ";}
}
print(mes);
mes="Inventory:";
for(i=1;i<=22;i++){
if(pos[i]==50 & person[i]==0 ){ mes=mes+njp[i]+" ";}
}
print(mes);
mes="Coin  " + gold;
print(mes);
conds();
}
function fight(){
if (pl==14 & pos[3]==50 & pos[12]==14 ){ print("Dragon flee from your attack,");print("You get a Nail of dragon and Gem of dragon.");pos[12]=99;pos[13]=50;pos[14]=50;}
if (pl==14 & pos[3]!=50){print("Enemy defences!");}
if (pl==21){ print("Enemy defencesI");}
if (pl==3 | pl==9 | pl==10 | pl==4 & pos[3]==4 | pl==15 & pos[1]==15 | pl==29 & pos[10]==29 | pl==18 & pos[7]==18 ){ print("You don't permitted to attack a innocent people.");}
if (pos[4]==50 & pos[6]==50 & pos[11]==50 & pos[14]==50 & pos[15]==50 & pos[16]==50 & pos[17]==50 ){ print("You solve a game Anekgard!");gameflag=0;}
conds();
}

function talk(){
mes="";
if (pl==3 & pos[2]==50 ){ print("You sell Precious metal.");pos[2]=0;gold=gold+1;}
if (pl==3 & pos[8]==50 ){ print("You sell a Herb.");pos[8]=0;gold=gold+1;}
if (pl==3 & pos[9]==50 ){print("You sell a Mineral.");pos[9]=0;gold=gold+1;}
if (pl==3 & pos[13]==50 ){ print("You sell a Nail of dragon.");pos[13]=0;gold=gold+1;}
if (pl==3 & pos[1]==50 & pos[6]==99 & gold>0 & pos[1]==50 ){ print("You get a Gem of man with Mark's negotiation.");pos[6]=50;gold=gold-1;}
if (pl==4 & pos[3]==4 ){ print("George join you.");pos[3]=50;}
if (pl==9 & pos[17]==99 & gold>0 & pos[1]==50 ){ print("You get a Gem of earth with Mark's negotiation.");pos[17]=50;gold=gold-1;}
if (pl==15 & pos[1]==15 ){ print("Mark join you");pos[1]=50;}
if (pl==18 & pos[7]==18 ){ print("Maria join you.");pos[7]=50;}
if (pl==20 & pos[15]==99 & pos[7]==50 ){ print("You get a Gem of god with Maria's negotiation.");pos[15]=50;}
if (pl==21 & pos[16]==99 & pos[7]==50 ){ print("You get a Gem of sky with Maria's negotiation.");pos[16]=50;}
if (pl==29 & pos[10]==29 ){ print("Robin join you.");pos[10]=50;}
if (pos[4]==50 & pos[6]==50 & pos[11]==50 & pos[14]==50 & pos[15]==50 & pos[16]==50 & pos[17]==50 ){ print("You solve Game Anekgard !");gameflag=0;}
conds();
}
