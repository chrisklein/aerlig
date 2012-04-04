var blnDOMSUPPORT = (document.getElementById) ? true : false;
window.onload = init;

function init(){
	if ( blnDOMSUPPORT )
	{
	}
   else
	{
	}
}

var imgpref = '';

if (window.curlevel) { 
	if (curlevel == -1){imgpref = '/';}
	else if (curlevel == 0){imgpref = '';}
	else if (curlevel == 1){imgpref = '';}
	else if (curlevel == 2){imgpref = '../../';}
	else if (curlevel == 3){imgpref = '../../../';}
	else if (curlevel == 4){imgpref = '../../../../';}
	else { imgpref = ''; }
}
else {
	imgpref='';
}

var activeImgName = '';
var activeNavNode = '';
var activeTopNav = '';
var activeTNleft = '';
var activeTNright = '';
var activeSubNav = '';
var activeDD = '';

function getImageNode(fn) {
	iObj = fn.firstChild;
	if (iObj.nodeName != 'IMG'){
		for( var x = 0; fn.childNodes[x]; x++ ){
			if (fn.childNodes[x].nodeName == 'IMG'){
				iObj = fn.childNodes[x];
			}
		}
	}
	return iObj;
}

function getAdjacentElement(el, nt, str)
{
	var sib = eval("el." + str + "Sibling");
	if (sib)
	{
		if (sib.nodeType != nt)
		{
			return getAdjacentElement(sib, nt, str);
		}
	}
	return sib;
}

function mouseOverTopMenu(tm){
	imgObj = getImageNode(tm);
	activeTopNav = imgObj.getAttribute("src");
	re = /(topnav-\w+)-\w+.gif/;
	re.exec(activeTopNav);
	//alert(RegExp.$1);
	iname = RegExp.$1
	imgObj.setAttribute("src", imgpref+"img/"+iname+"-hover.gif");
	
	td = tm;
	td.className = "";
	td.leftRule = getAdjacentElement(td, td.nodeType, "previous");
	td.rightRule = getAdjacentElement(td, td.nodeType, "next");
	//alert(td.rightRule.className);
	
	if (td.leftRule) activeTNleft = td.leftRule.className;
	if (td.rightRule) activeTNright = td.rightRule.className;
	
	if ((td.leftRule) && (td.leftRule.className == "divider"))
	{
		td.leftRule.className = "dividerOn";
	}
	else
	{
		td.leftRule = null;
	}

	if ((td.rightRule) && (td.rightRule.className == "divider"))
	{
		td.rightRule.className = "dividerOn";
	}	
	else
	{
		td.rightRule = null;
	}
	
	document.body.style.cursor='hand';
	activeImgName = iname;
	activeNavNode = tm;
}

function mouseOutTopMenu(tm){
	// see inside topnav.js
}

function mouseOverSubMenu(subm){
	document.body.style.cursor='hand';
	//tm.className = 'subNavButtonHover';
	subImgObj = getImageNode(subm);
	activeSubNav = subImgObj.getAttribute("src");
	subre = /(subnav-\w+)-\w+.jpg/;
	subre.exec(activeSubNav);
	subIname = RegExp.$1
	subImgObj.setAttribute("src", imgpref+"img/"+subIname+"-hover.jpg");
}

function mouseOutSubMenu(subm){
	document.body.style.cursor='default';
	//tm.className = 'subNavButton';
	subImgObj = getImageNode(subm);
	subImgObj.setAttribute("src", activeSubNav);
}

function mouseOverDD(ddm){
	document.body.style.cursor='hand';
	ddImgObj = getImageNode(ddm);
	activeDD = ddImgObj.getAttribute("src");
	ddre = /(dropdown-\w+)-\w+.gif/;
	ddre.exec(activeDD);
	ddIname = RegExp.$1
	ddImgObj.setAttribute("src", imgpref+"img/"+ddIname+"-on.gif");
}

function mouseOutDD(ddm){
	document.body.style.cursor='default';
	ddImgObj = getImageNode(ddm);
	ddImgObj.setAttribute("src", activeDD);
}

function mouseOverUtility(ddm){
	document.body.style.cursor='hand';
	ddImgObj = getImageNode(ddm);
	activeDD = ddImgObj.getAttribute("src");
	ddre = /(utility-\w+)-\w+.gif/;
	ddre.exec(activeDD);
	ddIname = RegExp.$1
	ddImgObj.setAttribute("src", imgpref+"img/"+ddIname+"-on.gif");
}

function mouseOutUtility(ddm){
	document.body.style.cursor='default';
	ddImgObj = getImageNode(ddm);
	ddImgObj.setAttribute("src", activeDD);
}

function subChangeClassOver(rf){
	document.body.style.cursor='hand';
	rf.className = 'hover';
}
function subChangeClassOut(rf){
	document.body.style.cursor='default';
	rf.className = '';
}

function goToUrl(dest){
	window.location = dest;
}

function go()
{
	choice = document.quickMenu.login;
	destination = choice.options[choice.selectedIndex].value;
	if (destination == '0') return;
	top.document.location.href = destination;
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapActiveRestore() { //v1.0
  var i,x,a; if(a=document.MM_cl!=null) for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.bSrc;
}
	
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_swapTr(a,b,c) { //v3.0
  document.getElementById(a).className = b+c;
}

function MM_swapActive() { //v1.0
  var i,j=0,x,a=MM_swapActive.arguments,b=document.MM_p; document.MM_cl=new Array; 
  //for (i=0;i<b.length;i++) { b.src = b.bSrc; }
  for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_cl[j++]=x; x.src=a[i+2];  x.oSrc=x.src;}
}

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

function mailto () {
	var email = window.prompt("Please enter an e-mail address to which you would like to send information from aerlig.com:\n", "") || "";
	var subject = "Information from aerlig.com";
	var message = "Please read the article below from aerlig.com:";
	var newline = escape("\n\n");
	var link = document.location.href;
	
	var mymsg = "mailto:" + email + "?subject=" + subject + "&body=" + message + newline + link;
	document.location.href = mymsg;
	//alert (mymsg);
}