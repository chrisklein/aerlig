/*
 *  Script:		Sitewise.js
 *  Instance:		1
 *  version:		1.2
 *  created_by:		furmana 
 *  date_created:	Fri Dec 12 12:00:00 EDT 2002 
 *  Description:	Assigns content group variable based on URL.
 *			Includes Akamai Sitewise JavaScript to populate
 *			usage reporting engine.
 */

function wtl_Tag6_94033() {
        var ORDER= "";
        var SERVER= "";
        var CONTENTGROUP = "MorganStanley.com";
        var INVOICE= "";
        var CARTVIEW= "";
        var CARTADD= "";
        var CARTREMOVE= "";
        var CHECKOUT= "";
        var CARTBUY= "";
        var ADCAMPAIGN= "";
 
        var wtl_URL= document.URL;
        var wtl_Title= document.title;
 
        function D8 (d)
        {
                var fwd=0, seed= new Date('01/01/2000'), key= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var s= key.charAt( d.getFullYear()-2000)+key.charAt( d.getMonth()+1)+key.charAt( d.getDate());
                s+= key.charAt( d.getHours())+key.charAt( d.getMinutes())+key.charAt( d.getSeconds());
                while( seed.getDay()!=fwd) seed= new Date(seed.getTime() + 86400000);
                var w= Math.floor( (d.getTime()-(seed.getTime()+86400000)) / 604800000 );
                s+= key.charAt( (w-(w%16))/16 );
                s+= key.charAt( w%16);
                return s;
        }
 
        function A( B, C)
        {
                W+="&"+B+"="+escape(C);
        }
	var t = new Date();
        var W="http"+(document.URL.indexOf('https:')==0?'s':'')+"://statse.webtrendslive.com/S005-01-8-2-233860-94033/button6.asp?tagver=6&si=94033&fw=0";
        A( "server", typeof(SERVER)== "string" ? SERVER : "");
        A( "order", typeof(ORDER)== "string" ? ORDER : "");
        A( "Group", typeof(CONTENTGROUP)== "string" ? CONTENTGROUP : "");
        A( "invoice", typeof(INVOICE)== "string" ? INVOICE : "");
        A( "cartview", typeof(CARTVIEW)== "string" ? CARTVIEW : "");
        A( "cartadd", typeof(CARTADD)== "string" ? CARTADD : "");
        A( "cartremove", typeof(CARTREMOVE)== "string" ? CARTREMOVE : "");
        A( "checkout", typeof(CHECKOUT)== "string" ? CHECKOUT : "");
        A( "cartbuy", typeof(CARTBUY)== "string" ? CARTBUY : "");
        A( "adcampaign", typeof(ADCAMPAIGN)== "string" ? ADCAMPAIGN : "");
        A( "tz", t.getTimezoneOffset());
        A( "ch", t.getHours());
        A( "cl", D8(t));
        A( "ti", typeof(wtl_Title)== "string" ? wtl_Title : document.title);
        A( "url", typeof(wtl_URL)== "string" ? wtl_URL : document.URL);
        A( "rf", window.document.referrer);
        A( "js", "Yes");
        A( "ul", navigator.appName=="Netscape" ? navigator.language : navigator.userLanguage);
        if(typeof(screen)=="object")
        {
        A( "sr", screen.width+"x"+screen.height);
        A( "cd", screen.colorDepth);
        A( "jo", navigator.javaEnabled() ? "Yes" : "No");
        }
        if( W.length>2048 && navigator.userAgent.indexOf('MSIE')>=0)
                W= W.substring( 0, 2043)+"&tu=1";
 
        document.write('<IMG ID="WTL_TAG" BORDER="0" WIDTH="1" HEIGHT="1" SRC="'+W+'">');
}

function wtl_Tag6_93722(cgroup)
{
        var ORDER= "";
        var SERVER= "";
        var CONTENTGROUP= cgroup;
        var INVOICE= "";
        var CARTVIEW= "";
        var CARTADD= "";
        var CARTREMOVE= "";
        var CHECKOUT= "";
        var CARTBUY= "";
        var ADCAMPAIGN= "";
 
        var wtl_URL= document.URL;
        var wtl_Title= document.title;
 
        function D8( d)
        {
                var fwd=0, seed= new Date('01/01/2000'), key= "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                var s= key.charAt( d.getFullYear()-2000)+key.charAt( d.getMonth()+1)+key.charAt( d.getDate());
                s+= key.charAt( d.getHours())+key.charAt( d.getMinutes())+key.charAt( d.getSeconds());
                while( seed.getDay()!=fwd) seed= new Date(seed.getTime() + 86400000);
                var w= Math.floor( (d.getTime()-(seed.getTime()+86400000)) / 604800000 );
                s+= key.charAt( (w-(w%16))/16 );
                s+= key.charAt( w%16);
                return s;
        }
 
        function A( B, C)
        {
                W+="&"+B+"="+escape(C);
        }
        var t = new Date();
        var W="http"+(document.URL.indexOf('https:')==0?'s':'')+"://statse.webtrendslive.com/S005-01-8-1-233860-93722/button6.asp?tagver=6&si=93722&fw=0";
        A( "server", typeof(SERVER)== "string" ? SERVER : "");
        A( "order", typeof(ORDER)== "string" ? ORDER : "");
        A( "Group", typeof(CONTENTGROUP)== "string" ? CONTENTGROUP : "");
        A( "invoice", typeof(INVOICE)== "string" ? INVOICE : "");
        A( "cartview", typeof(CARTVIEW)== "string" ? CARTVIEW : "");
        A( "cartadd", typeof(CARTADD)== "string" ? CARTADD : "");
        A( "cartremove", typeof(CARTREMOVE)== "string" ? CARTREMOVE : "");
        A( "checkout", typeof(CHECKOUT)== "string" ? CHECKOUT : "");
        A( "cartbuy", typeof(CARTBUY)== "string" ? CARTBUY : "");
        A( "adcampaign", typeof(ADCAMPAIGN)== "string" ? ADCAMPAIGN : "");
        A( "tz", t.getTimezoneOffset());
        A( "ch", t.getHours());
        A( "cl", D8(t));
        A( "ti", typeof(wtl_Title)== "string" ? wtl_Title : document.title);
        A( "url", typeof(wtl_URL)== "string" ? wtl_URL : document.URL);
        A( "rf", window.document.referrer);
        A( "js", "Yes");
        A( "ul", navigator.appName=="Netscape" ? navigator.language : navigator.userLanguage);
        if(typeof(screen)=="object")
        {
        A( "sr", screen.width+"x"+screen.height);
        A( "cd", screen.colorDepth);
        A( "jo", navigator.javaEnabled() ? "Yes" : "No");
        }
        if( W.length>2048 && navigator.userAgent.indexOf('MSIE')>=0)
                W= W.substring( 0, 2043)+"&tu=1";
 
        document.write('<IMG ID="WTL_TAG" BORDER="0" WIDTH="1" HEIGHT="1" SRC="'+W+'">');
}
 
var group = '';
var url = /(\w+):\/\/([\w\-.]+)\/(\S*)/;
//var url = /(\w+):\/\/([\w.]+)\/(\S*)/;
var text = document.URL;
var result = text.match(url);
if (result != null) {
   var fullurl = result[0];
   var protocol = result[1];
   var host = result[2];
   var path = result[3];
   var path_ns = result[3];
   var filePath = /html?$/;
   var result2 = path.match(filePath);
   if (result2 == null) {
      path += "index.html";
   }
   if (path.indexOf("?") > -1) {
        var path_array = path.split("?");
        path_ns = path_array[0];
   }
}
//alert("RESULT: " + result + " HOST: " + host + " PATH: " + path_ns);

var a = new Array();
var b = new Array();

if (location.hostname.indexOf("pubtest") == -1 && location.hostname.indexOf("dev.morganstanley") == -1 && location.hostname.indexOf("hqiinww16") == -1) { 	//ignore stag
   if ((location.hostname.indexOf("msvp.com")) > -1) {
      group = "Venture Partners";
   }
   else if ((location.hostname.indexOf("msdwvp.com")) > -1) {
      group = "Venture Partners";
   }
   else if ((location.hostname.indexOf("msdw-privateequity.com")) > -1) {
      group = "Private Equity";
   }
   else if ((location.hostname.indexOf("morganstanley.de")) > -1) {
      group = "IPCG_Germany";
   }
   else {

/* Array a contains URL regular expression 
 * Array b contains corresponding content group
 * if a sub-directory has a different content group
 * than its parent, you must list the sub-directory
 * first in Array a or its parent's content group
 * will override it.
 */

 a[0] = new RegExp("^index\.html");	b[0] = "Corporate,Main Page"; 
 a[1] = new RegExp("^contact_us\.html");	b[1] = "Corporate,Contact Us"; 
 a[2] = new RegExp("^global_presence\.html"); 	b[2] = "Corporate,International"; 
 a[3] = new RegExp("^privacy_pledge\.html"); 	b[3] = "Corporate,Disclaimers"; 
 a[4] = new RegExp("^site_map\.html"); 	b[4] = "Corporate,Site Map"; 
 a[5] = new RegExp("^terms\.html"); 	b[5] = "Corporate,Disclaimers"; 
 a[6] = new RegExp("^GEFdata\/"); 	b[6] = "Research,GEF";
 a[7] = new RegExp("^ITS\/"); 		b[7] = "Surveys,ITS";
 a[8] = new RegExp("^RetireView"); 	b[8] = "Individual,Retire View";
 a[9] = new RegExp("^WAP");	 	b[9] = "Institutional,WAP";
 a[10] = new RegExp("^about\/diversity\/");	b[10] = "Corporate,Diversity";
 a[11] = new RegExp("^about\/gsb\/");	b[11] = "Research,GSB";
 a[12] = new RegExp("^about\/inside\/ar2000\/"); b[12] = "Corporate,2000 Annual Report"; 
 a[13] = new RegExp("^about\/inside\/awards\/");	b[13] = "Corporate,Awards";
 a[14] = new RegExp("^about\/inside\/factbook\/");	b[14] = "Corporate,Factbook";
 a[15] = new RegExp("^about\/inside\/governance\/");	b[15] = "Corporate,Governance";
 a[16] = new RegExp("^ar2001\/");	b[16] = "Corporate,2001 Annual Report";
 a[17] = new RegExp("^about\/ir\/shareholder\/MorganStanleyDWInc\.html");	b[17] = "Financial Statements";
 a[18] = new RegExp("^about\/ir\/"); 	b[18] = "Investor Relations";
 a[19] = new RegExp("^about\/pressroom\/billofrights\.html"); 	b[19] = "Mutual Fund Disclosure";
 a[20] = new RegExp("^about\/pressroom\/mscommitment\.html"); 	b[20] = "Mutual Fund Disclosure";
 a[21] = new RegExp("^activeassets\/"); 	b[21] = "Individual,ActiveAssets";
 a[22] = new RegExp("^advice\/"); 	b[22] = "Individual,Advice";
 a[23] = new RegExp("^boxes\/"); 	b[23] = "Indices,Boxes";
 a[24] = new RegExp("^businesscape\/"); 	b[24] = "Individual,Businesscape";
 a[25] = new RegExp("^cards\/"); 	b[25] = "Credit Card";
 a[26] = new RegExp("^career\/"); 	b[26] = "Career";
 a[27] = new RegExp("^careers\/"); 	b[27] = "Career";
 a[28] = new RegExp("^choice\/"); 	b[28] = "Individual,Choice";
 a[29] = new RegExp("^clientlink\/"); 	b[29] = "Institutional,ClientLink";
 a[30] = new RegExp("^clientserv\/"); 	b[30] = "Individual,ClientServ";
 a[31] = new RegExp("^companycharts\/"); 	b[31] = "Company Charts";
 a[32] = new RegExp("^conferences\/"); 	b[32] = "Conferences";
 a[33] = new RegExp("^corporatebonds\/");b[33] = "Surveys,Corporate Bonds";
 a[34] = new RegExp("^creditcorp\/"); 	b[34] = "Credit Card,CreditCorp";
 a[35] = new RegExp("^creditsource\/"); 	b[35] = "Credit Card,CreditSource";
 a[36] = new RegExp("^de\/pb\/"); 	b[36] = "IPCG_Germany";
 a[37] = new RegExp("^equityconferences\/"); 	b[37] = "Conferences,Equity";
 a[38] = new RegExp("^euconferences\/"); 	b[38] = "Conferences,Europe";
 a[39] = new RegExp("^electricity\/"); 	b[39] = "Institutional,Electricity Trading";
 a[40] = new RegExp("^eqrmail\/"); 	b[40] = "Mailings,Equity Research";
 a[41] = new RegExp("^funds\/"); 	b[41] = "Individual,Funds";
 a[42] = new RegExp("^fxmail\/"); 	b[42] = "Mailings,FX";
 a[43] = new RegExp("^hkcompetition\/"); b[43] = "Surveys,HK Musicians";
 a[44] = new RegExp("^ideas2003\/"); 	b[44] = "Surveys,Ideas 2003";
 a[45] = new RegExp("^imsdw\/"); 	b[45] = "Individual,Imsdw";
 a[46] = new RegExp("^indices\/"); 	b[46] = "Indices";
 a[47] = new RegExp("^individual\/"); 	b[47] = "Individual";
 a[48] = new RegExp("^institutional\/asset_mgmt\.html");	b[48] = "Institutional,Asset Management";
 a[49] = new RegExp("^institutional\/alumni_network\/xmas2003\/");	b[49] = "Holiday Cards";
 a[50] = new RegExp("^institutional\/capitalpartners\/");	b[50] = "Institutional,Capital Partners";
 a[51] = new RegExp("^institutional\/passport\/"); 	b[51] = "Institutional,Passport";
 a[52] = new RegExp("^institutional\/events\/"); 	b[52] = "Events";
 a[53] = new RegExp("^institutional\/invest_bank\/"); 	b[53] = "Institutional,IBD";
 a[54] = new RegExp("^ourviews\/"); 			b[54] = "Advertorials,Our Views";
 a[55] = new RegExp("^institutional\/primebrokerage\/"); b[55] = "Institutional,Prime Brokerage";
 a[56] = new RegExp("^institutional\/qs\/");	b[56] = "Institutional,Quantitative Strategies";
 a[57] = new RegExp("^institutional\/research\/"); 	b[57] = "Institutional,Research";
 a[58] = new RegExp("^institutional\/securities\/"); 	b[58] = "Institutional,Securities";
 a[59] = new RegExp("^institutional\/small_business\.html"); 	b[59] = "Institutional,Small Business";
 a[60] = new RegExp("^institutional\/techresearch\/"); 	b[60] = "Technology Research/News";
 a[61] = new RegExp("^institutional\/venturepartners\/"); b[61] = "Venture Partners";
 a[62] = new RegExp("^institutional\/"); 		b[62] = "Institutional";
 a[63] = new RegExp("^ioi\/"); 		b[63] = "Surveys,IOI";
 a[64] = new RegExp("^mgo\/"); 		b[64] = "Indices,MGO";
 a[65] = new RegExp("^mortgage_survey\/");	b[65] = "Surveys,Mortgage";
 a[66] = new RegExp("^mox\/"); 		b[66] = "Indices,MOX";
 a[67] = new RegExp("^msh\/"); 		b[67] = "Indices,MSH";
 a[68] = new RegExp("^mvb\/"); 		b[68] = "Indices,MVB";
 a[69] = new RegExp("^mvr\/"); 		b[69] = "Indices,MVR";
 a[70] = new RegExp("^myretirement\/"); 	b[70] = "Individual,MyRetirement";
 a[71] = new RegExp("^networth\/"); 	b[71] = "Individual,Networth";
 a[72] = new RegExp("^nextgeneration\/");b[72] = "Individual,Next Generation";
 a[73] = new RegExp("^online\/"); 	b[73] = "Individual,Online";
 a[74] = new RegExp("^opt_in_form\.html\/"); 	b[74] = "Mailings,Interest Rate Products";
 a[75] = new RegExp("^power\/"); 	b[75] = "Power";
 a[76] = new RegExp("^ppm\/"); 		b[76] = "Asset Management,PPM";
 a[77] = new RegExp("^privateequity\/"); b[77] = "Private Equity";
 a[78] = new RegExp("^benefitsprogram\/"); 		b[78] = "Individual";
 a[79] = new RegExp("^realestate\/banking\/"); 	b[79] = "Institutional,EU RealEstate";
 a[80] = new RegExp("^realestate\/"); 	b[80] = "Institutional,NA RealEstate";
 a[81] = new RegExp("^retireview-info\/"); 	b[81] = "Individual,Retire View";
 a[82] = new RegExp("^retireview-sponsor\/"); 	b[82] = "Individual,Retire View";
 a[83] = new RegExp("^retireview\/"); 	b[83] = "Individual,Retire View";
 a[84] = new RegExp("^search\/"); 	b[84] = "Corporate,Search";
 a[85] = new RegExp("^sicav\/eurofunds\/"); 	b[85] = "Asset Management,Sicav EuroFunds";
 a[86] = new RegExp("^sicav\/"); 	b[86] = "Asset Management,Sicav";
 a[87] = new RegExp("^sicavawards\/"); 	b[87] = "Asset Management,Sicav Awards";
 a[88] = new RegExp("^survey_CIO_2\/");	b[88] = "Surveys,CIO";
 a[89] = new RegExp("^taxlaws\/"); 	b[89] = "Individual,Tax Laws";
 a[90] = new RegExp("^travel\/"); 	b[90] = "Individual,Travel";
 a[91] = new RegExp("^trust\/"); 	b[91] = "Individual,Trust";
 a[92] = new RegExp("^balancedportfolio\/"); 	b[92] = "IIM,BalancedPortfolio";
 a[93] = new RegExp("^xbrl\/"); 		b[93] = "Research,XBRL";
 a[94] = new RegExp("^welcome\.html");	b[94] = "Corporate,Main Page";
 a[95] = new RegExp("^holidaycard\/");	b[95] = "Holiday Cards";
 a[96] = new RegExp("^nadasurvey\/");	b[96] = "NadaSurvey";
 a[97] = new RegExp("^nadareports\/");	b[97] = "NadaSurvey";
 a[98] = new RegExp("^drma\/");	        b[98] = "DRMA";
 a[99] = new RegExp("^ar2002\/");	b[99] = "Corporate,2002 Annual Report";
 a[100] = new RegExp("^ira\/");	b[100] = "Individual, IRA";
 a[101] = new RegExp("^gift\/");	b[101] = "Individual, Gift";
 a[102] = new RegExp("^rollover\/");	b[102] = "Individual, Rollover";
 a[103] = new RegExp("^estatements\/");	b[103] = "Individual, Estatements";
 a[104] = new RegExp("^edelivery\/");	b[104] = "Individual, Delivery";
 a[105] = new RegExp("^bondratings\/");	b[105] = "Individual, BondRatings";
 a[106] = new RegExp("^individualkplan\/");	b[106] = "Individual, Individualkplan";
 a[107] = new RegExp("^liquidity\/");	b[107] = "IIM, Liquidity";
 a[108] = new RegExp("^aproadshows\/");	b[108] = "Corporate,APRoadshows";
 a[109] = new RegExp("uid\=303index\.html$");	b[109] = "Mutual Fund Disclosure";
 a[110] = new RegExp("^cgi\-bin\/morganstanley\.com\/pressroom\.cgi"); 	b[110] = "Corporate,Press Room";
 a[111] = new RegExp("^cgi\-bin\/morganstanley\.com\/awards\.cgi"); 	b[111] = "Corporate,Awards";
 a[112] = new RegExp("^about\/"); 	b[112] = "Corporate,About Morgan Stanley";
 a[113] = new RegExp("^aktienprotekt\/"); 	b[113] = "Aktienprotekt";
 a[114] = new RegExp("^bulkemail\/"); 	b[114] = "Bulkemail";
 a[115] = new RegExp("^advantageservices\/"); 	b[115] = "Advantage Services";
 a[116] = new RegExp("^amps\/"); 	b[116] = "Amps";
 a[117] = new RegExp("^clientone\/"); 	b[117] = "Client One";

      for (var element in a) {
         if (a[element].test(path_ns)) { 
            group = b[element]; 
            break; 
         }
         else if (a[element].test(path)) { 
            group = b[element]; 
            break; 
         }
         else { group = "Miscellaneous," + path_ns; }
      }
   }
   if (group.indexOf(",") == -1) {
      group = group + "," + path_ns; 
   }
   wtl_Tag6_94033();
   wtl_Tag6_93722(group);
}
//alert(path);
//alert(group);
