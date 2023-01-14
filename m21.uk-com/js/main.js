//  My image swap code ns and ie
//
//
function M21_ImageSwap(id,o)
{
  if (typeof(iens6)!='undefined')
  {
    document.getElementById(id).src="./images/"+o+id+".gif";
  }
  else if (typeof(ns4)!='undefined')
  {
    document.eval(id).src="./images/"+o+id+".gif";
  }
}

//
//
// Popup window for discussion group ie and ns
//
//
var win = null;
function popwind(mypage,myname,w,h,scroll)
{
  LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
  TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
  settings = 'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
  win = window.open(mypage,myname,settings);
  setTimeout('win.focus()',10);
}
//
//
// cookie code ie and ns
//
//
rnd.today=new Date();
rnd.seed=rnd.today.getTime();
function rnd()
{
  rnd.seed = (rnd.seed*9301+49297) % 233280;
  return rnd.seed/(233280.0);
};
function rand(number) 
{
  return Math.ceil(rnd()*number);
};
if (document.cookie == "")
{
  now=new Date
  time=now.getTime();
  value=rand(10000);
  Cookie=time+"-"+value;
  document.cookie="ORDNO="+Cookie+";";
}