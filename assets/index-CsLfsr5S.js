(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();function pd(i,e,t){const n=document.createElement("aside");n.className="sidebar";const r=document.createElement("div");r.className="sidebar-brand",r.innerHTML=`
    <h1>Europa Dashboard</h1>
    <div class="subtitle">AST320 Research Platform</div>
  `,n.appendChild(r);const a=document.createElement("div");a.className="sidebar-section",a.innerHTML='<div class="sidebar-section-label">Icy World Physics</div>';const s=document.createElement("nav");s.className="sidebar-nav",Object.entries(i).forEach(([u,f])=>{if(f.section!=="icy")return;const h=k0(u,f,e);s.appendChild(h)}),a.appendChild(s),n.appendChild(a);const o=document.createElement("div");o.className="sidebar-section",o.innerHTML='<div class="sidebar-section-label">Europa Case Study</div>';const l=document.createElement("nav");l.className="sidebar-nav",Object.entries(i).forEach(([u,f])=>{if(f.section!=="europa")return;const h=k0(u,f,e);l.appendChild(h)}),o.appendChild(l),n.appendChild(o);const c=document.createElement("div");return c.className="sidebar-footer",c.innerHTML=`
    <button class="glossary-btn" onclick="window.__openGlossary()">
      <span class="nav-icon">📖</span>
      AST320 Glossary
    </button>
  `,n.appendChild(c),n}function k0(i,e,t){const n=document.createElement("div");return n.className=`nav-item${i===t?" active":""}`,n.dataset.tab=i,n.innerHTML=`
    <span class="nav-icon">${e.icon}</span>
    <span>${e.label}</span>
  `,n.addEventListener("click",()=>window.__switchTab(i)),n}class ce extends Error{constructor(e,t){var n="KaTeX parse error: "+e,r,a,s=t&&t.loc;if(s&&s.start<=s.end){var o=s.lexer.input;r=s.start,a=s.end,r===o.length?n+=" at end of input: ":n+=" at position "+(r+1)+": ";var l=o.slice(r,a).replace(/[^]/g,"$&̲"),c;r>15?c="…"+o.slice(r-15,r):c=o.slice(0,r);var u;a+15<o.length?u=o.slice(a,a+15)+"…":u=o.slice(a),n+=c+l+u}super(n),this.name="ParseError",Object.setPrototypeOf(this,ce.prototype),this.position=r,r!=null&&a!=null&&(this.length=a-r),this.rawMessage=e}}var md=/([A-Z])/g,Xl=i=>i.replace(md,"-$1").toLowerCase(),gd={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},vd=/[&><"']/g,rn=i=>String(i).replace(vd,e=>gd[e]),is=i=>i.type==="ordgroup"||i.type==="color"?i.body.length===1?is(i.body[0]):i:i.type==="font"?is(i.body):i,xd=new Set(["mathord","textord","atom"]),xi=i=>xd.has(is(i).type),yd=i=>{var e=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(i);return e?e[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1])?null:e[1].toLowerCase():"_relative"},Bo={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:i=>"#"+i},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(i,e)=>(e.push(i),e)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:i=>Math.max(0,i),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:i=>Math.max(0,i),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:i=>Math.max(0,i),cli:"-e, --max-expand <n>",cliProcessor:i=>i==="Infinity"?1/0:parseInt(i)},globalGroup:{type:"boolean",cli:!1}};function bd(i){if("default"in i)return i.default;var e=i.type,t=Array.isArray(e)?e[0]:e;if(typeof t!="string")return t.enum[0];switch(t){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class Yl{constructor(e){e===void 0&&(e={}),e=e||{};for(var t of Object.keys(Bo)){var n=Bo[t],r=e[t];this[t]=r!==void 0?n.processor?n.processor(r):r:bd(n)}}reportNonstrict(e,t,n){var r=this.strict;if(typeof r=="function"&&(r=r(e,t,n)),!(!r||r==="ignore")){if(r===!0||r==="error")throw new ce("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+e+"]"),n);r==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]"))}}useStrictBehavior(e,t,n){var r=this.strict;if(typeof r=="function")try{r=r(e,t,n)}catch{r="error"}return!r||r==="ignore"?!1:r===!0||r==="error"?!0:r==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+e+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+r+"': "+t+" ["+e+"]")),!1)}isTrusted(e){if("url"in e&&e.url&&!e.protocol){var t=yd(e.url);if(t==null)return!1;e.protocol=t}var n=typeof this.trust=="function"?this.trust(e):this.trust;return!!n}}class Si{constructor(e,t,n){this.id=e,this.size=t,this.cramped=n}sup(){return Gn[_d[this.id]]}sub(){return Gn[Md[this.id]]}fracNum(){return Gn[Sd[this.id]]}fracDen(){return Gn[wd[this.id]]}cramp(){return Gn[Td[this.id]]}text(){return Gn[Ed[this.id]]}isTight(){return this.size>=2}}var $l=0,ds=1,Er=2,hi=3,na=4,Rn=5,Pr=6,hn=7,Gn=[new Si($l,0,!1),new Si(ds,0,!0),new Si(Er,1,!1),new Si(hi,1,!0),new Si(na,2,!1),new Si(Rn,2,!0),new Si(Pr,3,!1),new Si(hn,3,!0)],_d=[na,Rn,na,Rn,Pr,hn,Pr,hn],Md=[Rn,Rn,Rn,Rn,hn,hn,hn,hn],Sd=[Er,hi,na,Rn,Pr,hn,Pr,hn],wd=[hi,hi,Rn,Rn,hn,hn,hn,hn],Td=[ds,ds,hi,hi,Rn,Rn,hn,hn],Ed=[$l,ds,Er,hi,Er,hi,Er,hi],$e={DISPLAY:Gn[$l],TEXT:Gn[Er],SCRIPT:Gn[na],SCRIPTSCRIPT:Gn[Pr]},zo=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function Ad(i){for(var e=0;e<zo.length;e++)for(var t=zo[e],n=0;n<t.blocks.length;n++){var r=t.blocks[n];if(i>=r[0]&&i<=r[1])return t.name}return null}var rs=[];zo.forEach(i=>i.blocks.forEach(e=>rs.push(...e)));function Eu(i){for(var e=0;e<rs.length;e+=2)if(i>=rs[e]&&i<=rs[e+1])return!0;return!1}var cr=80,Cd=function(e,t){return"M95,"+(622+e+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+e/2.075+" -"+e+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+e)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Rd=function(e,t){return"M263,"+(601+e+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+e/2.084+" -"+e+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+e)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Pd=function(e,t){return"M983 "+(10+e+t)+`
l`+e/3.13+" -"+e+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+e)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+e)+" "+t+"h400000v"+(40+e)+"h-400000z"},Dd=function(e,t){return"M424,"+(2398+e+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+e/4.223+" -"+e+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+e)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+e)+" "+t+`
h400000v`+(40+e)+"h-400000z"},Id=function(e,t){return"M473,"+(2713+e+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+e/5.298+" -"+e+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+e)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+e)+" "+t+"h400000v"+(40+e)+"H1017.7z"},Ld=function(e){var t=e/2;return"M400000 "+e+" H0 L"+t+" 0 l65 45 L145 "+(e-80)+" H400000z"},Nd=function(e,t,n){var r=n-54-t-e;return"M702 "+(e+t)+"H400000"+(40+e)+`
H742v`+r+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+e)+"H742z"},Ud=function(e,t,n){t=1e3*t;var r="";switch(e){case"sqrtMain":r=Cd(t,cr);break;case"sqrtSize1":r=Rd(t,cr);break;case"sqrtSize2":r=Pd(t,cr);break;case"sqrtSize3":r=Dd(t,cr);break;case"sqrtSize4":r=Id(t,cr);break;case"sqrtTall":r=Nd(t,cr,n)}return r},Fd=function(e,t){switch(e){case"⎜":return"M291 0 H417 V"+t+" H291z M291 0 H417 V"+t+" H291z";case"∣":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z";case"∥":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z"+("M367 0 H410 V"+t+" H367z M367 0 H410 V"+t+" H367z");case"⎟":return"M457 0 H583 V"+t+" H457z M457 0 H583 V"+t+" H457z";case"⎢":return"M319 0 H403 V"+t+" H319z M319 0 H403 V"+t+" H319z";case"⎥":return"M263 0 H347 V"+t+" H263z M263 0 H347 V"+t+" H263z";case"⎪":return"M384 0 H504 V"+t+" H384z M384 0 H504 V"+t+" H384z";case"⏐":return"M312 0 H355 V"+t+" H312z M312 0 H355 V"+t+" H312z";case"‖":return"M257 0 H300 V"+t+" H257z M257 0 H300 V"+t+" H257z"+("M478 0 H521 V"+t+" H478z M478 0 H521 V"+t+" H478z");default:return""}},O0={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},kd=function(e,t){switch(e){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Or{constructor(e){this.children=e,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(e){return this.classes.includes(e)}toNode(){for(var e=document.createDocumentFragment(),t=0;t<this.children.length;t++)e.appendChild(this.children[t].toNode());return e}toMarkup(){for(var e="",t=0;t<this.children.length;t++)e+=this.children[t].toMarkup();return e}toText(){var e=t=>t.toText();return this.children.map(e).join("")}}var Ho={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},Od={ex:!0,em:!0,mu:!0},Au=function(e){return typeof e!="string"&&(e=e.unit),e in Ho||e in Od||e==="ex"},It=function(e,t){var n;if(e.unit in Ho)n=Ho[e.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(e.unit==="mu")n=t.fontMetrics().cssEmPerMu;else{var r;if(t.style.isTight()?r=t.havingStyle(t.style.text()):r=t,e.unit==="ex")n=r.fontMetrics().xHeight;else if(e.unit==="em")n=r.fontMetrics().quad;else throw new ce("Invalid unit: '"+e.unit+"'");r!==t&&(n*=r.sizeMultiplier/t.sizeMultiplier)}return Math.min(e.number*n,t.maxSize)},me=function(e){return+e.toFixed(4)+"em"},Ui=function(e){return e.filter(t=>t).join(" ")},Cu=function(e,t,n){if(this.classes=e||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=n||{},t){t.style.isTight()&&this.classes.push("mtight");var r=t.getColor();r&&(this.style.color=r)}},Ru=function(e){var t=document.createElement(e);t.className=Ui(this.classes);for(var n of Object.keys(this.style))t.style[n]=this.style[n];for(var r of Object.keys(this.attributes))t.setAttribute(r,this.attributes[r]);for(var a=0;a<this.children.length;a++)t.appendChild(this.children[a].toNode());return t},Bd=/[\s"'>/=\x00-\x1f]/,Pu=function(e){var t="<"+e;this.classes.length&&(t+=' class="'+rn(Ui(this.classes))+'"');var n="";for(var r of Object.keys(this.style))n+=Xl(r)+":"+this.style[r]+";";n&&(t+=' style="'+rn(n)+'"');for(var a of Object.keys(this.attributes)){if(Bd.test(a))throw new ce("Invalid attribute name '"+a+"'");t+=" "+a+'="'+rn(this.attributes[a])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+e+">",t};class Br{constructor(e,t,n,r){Cu.call(this,e,n,r),this.children=t||[]}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Ru.call(this,"span")}toMarkup(){return Pu.call(this,"span")}}class Ms{constructor(e,t,n,r){Cu.call(this,t,r),this.children=n||[],this.setAttribute("href",e)}setAttribute(e,t){this.attributes[e]=t}hasClass(e){return this.classes.includes(e)}toNode(){return Ru.call(this,"a")}toMarkup(){return Pu.call(this,"a")}}class zd{constructor(e,t,n){this.alt=t,this.src=e,this.classes=["mord"],this.height=0,this.depth=0,this.maxFontSize=0,this.style=n}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createElement("img");e.src=this.src,e.alt=this.alt,e.className="mord";for(var t of Object.keys(this.style))e.style[t]=this.style[t];return e}toMarkup(){var e='<img src="'+rn(this.src)+'"'+(' alt="'+rn(this.alt)+'"'),t="";for(var n of Object.keys(this.style))t+=Xl(n)+":"+this.style[n]+";";return t&&(e+=' style="'+rn(t)+'"'),e+="'/>",e}}var Hd={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class wn{constructor(e,t,n,r,a,s,o,l){this.text=e,this.height=t||0,this.depth=n||0,this.italic=r||0,this.skew=a||0,this.width=s||0,this.classes=o||[],this.style=l||{},this.maxFontSize=0;var c=Ad(this.text.charCodeAt(0));c&&this.classes.push(c+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=Hd[this.text])}hasClass(e){return this.classes.includes(e)}toNode(){var e=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=me(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Ui(this.classes));for(var n of Object.keys(this.style))t=t||document.createElement("span"),t.style[n]=this.style[n];return t?(t.appendChild(e),t):e}toMarkup(){var e=!1,t="<span";this.classes.length&&(e=!0,t+=' class="',t+=rn(Ui(this.classes)),t+='"');var n="";this.italic>0&&(n+="margin-right:"+this.italic+"em;");for(var r of Object.keys(this.style))n+=Xl(r)+":"+this.style[r]+";";n&&(e=!0,t+=' style="'+rn(n)+'"');var a=rn(this.text);return e?(t+=">",t+=a,t+="</span>",t):a}}class pi{constructor(e,t){this.children=e||[],this.attributes=t||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);for(var r=0;r<this.children.length;r++)t.appendChild(this.children[r].toNode());return t}toMarkup(){var e='<svg xmlns="http://www.w3.org/2000/svg"';for(var t of Object.keys(this.attributes))e+=" "+t+'="'+rn(this.attributes[t])+'"';e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</svg>",e}}class Fi{constructor(e,t){this.pathName=e,this.alternate=t}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",O0[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+rn(this.alternate)+'"/>':'<path d="'+rn(O0[this.pathName])+'"/>'}}class Go{constructor(e){this.attributes=e||{}}toNode(){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"line");for(var n of Object.keys(this.attributes))t.setAttribute(n,this.attributes[n]);return t}toMarkup(){var e="<line";for(var t of Object.keys(this.attributes))e+=" "+t+'="'+rn(this.attributes[t])+'"';return e+="/>",e}}function Gd(i){if(i instanceof wn)return i;throw new Error("Expected symbolNode but got "+String(i)+".")}function Vd(i){if(i instanceof Br)return i;throw new Error("Expected span<HtmlDomNode> but got "+String(i)+".")}var Wd=i=>i instanceof Br||i instanceof Ms||i instanceof Or,Wn={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},va={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},B0={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function qd(i,e){Wn[i]=e}function jl(i,e,t){if(!Wn[e])throw new Error("Font metrics not found for font: "+e+".");var n=i.charCodeAt(0),r=Wn[e][n];if(!r&&i[0]in B0&&(n=B0[i[0]].charCodeAt(0),r=Wn[e][n]),!r&&t==="text"&&Eu(n)&&(r=Wn[e][77]),r)return{depth:r[0],height:r[1],italic:r[2],skew:r[3],width:r[4]}}var Hs={};function Xd(i){var e;if(i>=5?e=0:i>=3?e=1:e=2,!Hs[e]){var t=Hs[e]={cssEmPerMu:va.quad[e]/18};for(var n in va)va.hasOwnProperty(n)&&(t[n]=va[n][e])}return Hs[e]}var Yd={bin:1,close:1,inner:1,open:1,punct:1,rel:1},$d={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Et={math:{},text:{}};function d(i,e,t,n,r,a){Et[i][r]={font:e,group:t,replace:n},a&&n&&(Et[i][n]=Et[i][r])}var v="math",ie="text",_="main",I="ams",Ct="accent-token",Te="bin",dn="close",zr="inner",Ge="mathord",Ht="op-token",Tn="open",ca="punct",N="rel",yi="spacing",k="textord";d(v,_,N,"≡","\\equiv",!0);d(v,_,N,"≺","\\prec",!0);d(v,_,N,"≻","\\succ",!0);d(v,_,N,"∼","\\sim",!0);d(v,_,N,"⊥","\\perp");d(v,_,N,"⪯","\\preceq",!0);d(v,_,N,"⪰","\\succeq",!0);d(v,_,N,"≃","\\simeq",!0);d(v,_,N,"∣","\\mid",!0);d(v,_,N,"≪","\\ll",!0);d(v,_,N,"≫","\\gg",!0);d(v,_,N,"≍","\\asymp",!0);d(v,_,N,"∥","\\parallel");d(v,_,N,"⋈","\\bowtie",!0);d(v,_,N,"⌣","\\smile",!0);d(v,_,N,"⊑","\\sqsubseteq",!0);d(v,_,N,"⊒","\\sqsupseteq",!0);d(v,_,N,"≐","\\doteq",!0);d(v,_,N,"⌢","\\frown",!0);d(v,_,N,"∋","\\ni",!0);d(v,_,N,"∝","\\propto",!0);d(v,_,N,"⊢","\\vdash",!0);d(v,_,N,"⊣","\\dashv",!0);d(v,_,N,"∋","\\owns");d(v,_,ca,".","\\ldotp");d(v,_,ca,"⋅","\\cdotp");d(v,_,ca,"⋅","·");d(ie,_,k,"⋅","·");d(v,_,k,"#","\\#");d(ie,_,k,"#","\\#");d(v,_,k,"&","\\&");d(ie,_,k,"&","\\&");d(v,_,k,"ℵ","\\aleph",!0);d(v,_,k,"∀","\\forall",!0);d(v,_,k,"ℏ","\\hbar",!0);d(v,_,k,"∃","\\exists",!0);d(v,_,k,"∇","\\nabla",!0);d(v,_,k,"♭","\\flat",!0);d(v,_,k,"ℓ","\\ell",!0);d(v,_,k,"♮","\\natural",!0);d(v,_,k,"♣","\\clubsuit",!0);d(v,_,k,"℘","\\wp",!0);d(v,_,k,"♯","\\sharp",!0);d(v,_,k,"♢","\\diamondsuit",!0);d(v,_,k,"ℜ","\\Re",!0);d(v,_,k,"♡","\\heartsuit",!0);d(v,_,k,"ℑ","\\Im",!0);d(v,_,k,"♠","\\spadesuit",!0);d(v,_,k,"§","\\S",!0);d(ie,_,k,"§","\\S");d(v,_,k,"¶","\\P",!0);d(ie,_,k,"¶","\\P");d(v,_,k,"†","\\dag");d(ie,_,k,"†","\\dag");d(ie,_,k,"†","\\textdagger");d(v,_,k,"‡","\\ddag");d(ie,_,k,"‡","\\ddag");d(ie,_,k,"‡","\\textdaggerdbl");d(v,_,dn,"⎱","\\rmoustache",!0);d(v,_,Tn,"⎰","\\lmoustache",!0);d(v,_,dn,"⟯","\\rgroup",!0);d(v,_,Tn,"⟮","\\lgroup",!0);d(v,_,Te,"∓","\\mp",!0);d(v,_,Te,"⊖","\\ominus",!0);d(v,_,Te,"⊎","\\uplus",!0);d(v,_,Te,"⊓","\\sqcap",!0);d(v,_,Te,"∗","\\ast");d(v,_,Te,"⊔","\\sqcup",!0);d(v,_,Te,"◯","\\bigcirc",!0);d(v,_,Te,"∙","\\bullet",!0);d(v,_,Te,"‡","\\ddagger");d(v,_,Te,"≀","\\wr",!0);d(v,_,Te,"⨿","\\amalg");d(v,_,Te,"&","\\And");d(v,_,N,"⟵","\\longleftarrow",!0);d(v,_,N,"⇐","\\Leftarrow",!0);d(v,_,N,"⟸","\\Longleftarrow",!0);d(v,_,N,"⟶","\\longrightarrow",!0);d(v,_,N,"⇒","\\Rightarrow",!0);d(v,_,N,"⟹","\\Longrightarrow",!0);d(v,_,N,"↔","\\leftrightarrow",!0);d(v,_,N,"⟷","\\longleftrightarrow",!0);d(v,_,N,"⇔","\\Leftrightarrow",!0);d(v,_,N,"⟺","\\Longleftrightarrow",!0);d(v,_,N,"↦","\\mapsto",!0);d(v,_,N,"⟼","\\longmapsto",!0);d(v,_,N,"↗","\\nearrow",!0);d(v,_,N,"↩","\\hookleftarrow",!0);d(v,_,N,"↪","\\hookrightarrow",!0);d(v,_,N,"↘","\\searrow",!0);d(v,_,N,"↼","\\leftharpoonup",!0);d(v,_,N,"⇀","\\rightharpoonup",!0);d(v,_,N,"↙","\\swarrow",!0);d(v,_,N,"↽","\\leftharpoondown",!0);d(v,_,N,"⇁","\\rightharpoondown",!0);d(v,_,N,"↖","\\nwarrow",!0);d(v,_,N,"⇌","\\rightleftharpoons",!0);d(v,I,N,"≮","\\nless",!0);d(v,I,N,"","\\@nleqslant");d(v,I,N,"","\\@nleqq");d(v,I,N,"⪇","\\lneq",!0);d(v,I,N,"≨","\\lneqq",!0);d(v,I,N,"","\\@lvertneqq");d(v,I,N,"⋦","\\lnsim",!0);d(v,I,N,"⪉","\\lnapprox",!0);d(v,I,N,"⊀","\\nprec",!0);d(v,I,N,"⋠","\\npreceq",!0);d(v,I,N,"⋨","\\precnsim",!0);d(v,I,N,"⪹","\\precnapprox",!0);d(v,I,N,"≁","\\nsim",!0);d(v,I,N,"","\\@nshortmid");d(v,I,N,"∤","\\nmid",!0);d(v,I,N,"⊬","\\nvdash",!0);d(v,I,N,"⊭","\\nvDash",!0);d(v,I,N,"⋪","\\ntriangleleft");d(v,I,N,"⋬","\\ntrianglelefteq",!0);d(v,I,N,"⊊","\\subsetneq",!0);d(v,I,N,"","\\@varsubsetneq");d(v,I,N,"⫋","\\subsetneqq",!0);d(v,I,N,"","\\@varsubsetneqq");d(v,I,N,"≯","\\ngtr",!0);d(v,I,N,"","\\@ngeqslant");d(v,I,N,"","\\@ngeqq");d(v,I,N,"⪈","\\gneq",!0);d(v,I,N,"≩","\\gneqq",!0);d(v,I,N,"","\\@gvertneqq");d(v,I,N,"⋧","\\gnsim",!0);d(v,I,N,"⪊","\\gnapprox",!0);d(v,I,N,"⊁","\\nsucc",!0);d(v,I,N,"⋡","\\nsucceq",!0);d(v,I,N,"⋩","\\succnsim",!0);d(v,I,N,"⪺","\\succnapprox",!0);d(v,I,N,"≆","\\ncong",!0);d(v,I,N,"","\\@nshortparallel");d(v,I,N,"∦","\\nparallel",!0);d(v,I,N,"⊯","\\nVDash",!0);d(v,I,N,"⋫","\\ntriangleright");d(v,I,N,"⋭","\\ntrianglerighteq",!0);d(v,I,N,"","\\@nsupseteqq");d(v,I,N,"⊋","\\supsetneq",!0);d(v,I,N,"","\\@varsupsetneq");d(v,I,N,"⫌","\\supsetneqq",!0);d(v,I,N,"","\\@varsupsetneqq");d(v,I,N,"⊮","\\nVdash",!0);d(v,I,N,"⪵","\\precneqq",!0);d(v,I,N,"⪶","\\succneqq",!0);d(v,I,N,"","\\@nsubseteqq");d(v,I,Te,"⊴","\\unlhd");d(v,I,Te,"⊵","\\unrhd");d(v,I,N,"↚","\\nleftarrow",!0);d(v,I,N,"↛","\\nrightarrow",!0);d(v,I,N,"⇍","\\nLeftarrow",!0);d(v,I,N,"⇏","\\nRightarrow",!0);d(v,I,N,"↮","\\nleftrightarrow",!0);d(v,I,N,"⇎","\\nLeftrightarrow",!0);d(v,I,N,"△","\\vartriangle");d(v,I,k,"ℏ","\\hslash");d(v,I,k,"▽","\\triangledown");d(v,I,k,"◊","\\lozenge");d(v,I,k,"Ⓢ","\\circledS");d(v,I,k,"®","\\circledR");d(ie,I,k,"®","\\circledR");d(v,I,k,"∡","\\measuredangle",!0);d(v,I,k,"∄","\\nexists");d(v,I,k,"℧","\\mho");d(v,I,k,"Ⅎ","\\Finv",!0);d(v,I,k,"⅁","\\Game",!0);d(v,I,k,"‵","\\backprime");d(v,I,k,"▲","\\blacktriangle");d(v,I,k,"▼","\\blacktriangledown");d(v,I,k,"■","\\blacksquare");d(v,I,k,"⧫","\\blacklozenge");d(v,I,k,"★","\\bigstar");d(v,I,k,"∢","\\sphericalangle",!0);d(v,I,k,"∁","\\complement",!0);d(v,I,k,"ð","\\eth",!0);d(ie,_,k,"ð","ð");d(v,I,k,"╱","\\diagup");d(v,I,k,"╲","\\diagdown");d(v,I,k,"□","\\square");d(v,I,k,"□","\\Box");d(v,I,k,"◊","\\Diamond");d(v,I,k,"¥","\\yen",!0);d(ie,I,k,"¥","\\yen",!0);d(v,I,k,"✓","\\checkmark",!0);d(ie,I,k,"✓","\\checkmark");d(v,I,k,"ℶ","\\beth",!0);d(v,I,k,"ℸ","\\daleth",!0);d(v,I,k,"ℷ","\\gimel",!0);d(v,I,k,"ϝ","\\digamma",!0);d(v,I,k,"ϰ","\\varkappa");d(v,I,Tn,"┌","\\@ulcorner",!0);d(v,I,dn,"┐","\\@urcorner",!0);d(v,I,Tn,"└","\\@llcorner",!0);d(v,I,dn,"┘","\\@lrcorner",!0);d(v,I,N,"≦","\\leqq",!0);d(v,I,N,"⩽","\\leqslant",!0);d(v,I,N,"⪕","\\eqslantless",!0);d(v,I,N,"≲","\\lesssim",!0);d(v,I,N,"⪅","\\lessapprox",!0);d(v,I,N,"≊","\\approxeq",!0);d(v,I,Te,"⋖","\\lessdot");d(v,I,N,"⋘","\\lll",!0);d(v,I,N,"≶","\\lessgtr",!0);d(v,I,N,"⋚","\\lesseqgtr",!0);d(v,I,N,"⪋","\\lesseqqgtr",!0);d(v,I,N,"≑","\\doteqdot");d(v,I,N,"≓","\\risingdotseq",!0);d(v,I,N,"≒","\\fallingdotseq",!0);d(v,I,N,"∽","\\backsim",!0);d(v,I,N,"⋍","\\backsimeq",!0);d(v,I,N,"⫅","\\subseteqq",!0);d(v,I,N,"⋐","\\Subset",!0);d(v,I,N,"⊏","\\sqsubset",!0);d(v,I,N,"≼","\\preccurlyeq",!0);d(v,I,N,"⋞","\\curlyeqprec",!0);d(v,I,N,"≾","\\precsim",!0);d(v,I,N,"⪷","\\precapprox",!0);d(v,I,N,"⊲","\\vartriangleleft");d(v,I,N,"⊴","\\trianglelefteq");d(v,I,N,"⊨","\\vDash",!0);d(v,I,N,"⊪","\\Vvdash",!0);d(v,I,N,"⌣","\\smallsmile");d(v,I,N,"⌢","\\smallfrown");d(v,I,N,"≏","\\bumpeq",!0);d(v,I,N,"≎","\\Bumpeq",!0);d(v,I,N,"≧","\\geqq",!0);d(v,I,N,"⩾","\\geqslant",!0);d(v,I,N,"⪖","\\eqslantgtr",!0);d(v,I,N,"≳","\\gtrsim",!0);d(v,I,N,"⪆","\\gtrapprox",!0);d(v,I,Te,"⋗","\\gtrdot");d(v,I,N,"⋙","\\ggg",!0);d(v,I,N,"≷","\\gtrless",!0);d(v,I,N,"⋛","\\gtreqless",!0);d(v,I,N,"⪌","\\gtreqqless",!0);d(v,I,N,"≖","\\eqcirc",!0);d(v,I,N,"≗","\\circeq",!0);d(v,I,N,"≜","\\triangleq",!0);d(v,I,N,"∼","\\thicksim");d(v,I,N,"≈","\\thickapprox");d(v,I,N,"⫆","\\supseteqq",!0);d(v,I,N,"⋑","\\Supset",!0);d(v,I,N,"⊐","\\sqsupset",!0);d(v,I,N,"≽","\\succcurlyeq",!0);d(v,I,N,"⋟","\\curlyeqsucc",!0);d(v,I,N,"≿","\\succsim",!0);d(v,I,N,"⪸","\\succapprox",!0);d(v,I,N,"⊳","\\vartriangleright");d(v,I,N,"⊵","\\trianglerighteq");d(v,I,N,"⊩","\\Vdash",!0);d(v,I,N,"∣","\\shortmid");d(v,I,N,"∥","\\shortparallel");d(v,I,N,"≬","\\between",!0);d(v,I,N,"⋔","\\pitchfork",!0);d(v,I,N,"∝","\\varpropto");d(v,I,N,"◀","\\blacktriangleleft");d(v,I,N,"∴","\\therefore",!0);d(v,I,N,"∍","\\backepsilon");d(v,I,N,"▶","\\blacktriangleright");d(v,I,N,"∵","\\because",!0);d(v,I,N,"⋘","\\llless");d(v,I,N,"⋙","\\gggtr");d(v,I,Te,"⊲","\\lhd");d(v,I,Te,"⊳","\\rhd");d(v,I,N,"≂","\\eqsim",!0);d(v,_,N,"⋈","\\Join");d(v,I,N,"≑","\\Doteq",!0);d(v,I,Te,"∔","\\dotplus",!0);d(v,I,Te,"∖","\\smallsetminus");d(v,I,Te,"⋒","\\Cap",!0);d(v,I,Te,"⋓","\\Cup",!0);d(v,I,Te,"⩞","\\doublebarwedge",!0);d(v,I,Te,"⊟","\\boxminus",!0);d(v,I,Te,"⊞","\\boxplus",!0);d(v,I,Te,"⋇","\\divideontimes",!0);d(v,I,Te,"⋉","\\ltimes",!0);d(v,I,Te,"⋊","\\rtimes",!0);d(v,I,Te,"⋋","\\leftthreetimes",!0);d(v,I,Te,"⋌","\\rightthreetimes",!0);d(v,I,Te,"⋏","\\curlywedge",!0);d(v,I,Te,"⋎","\\curlyvee",!0);d(v,I,Te,"⊝","\\circleddash",!0);d(v,I,Te,"⊛","\\circledast",!0);d(v,I,Te,"⋅","\\centerdot");d(v,I,Te,"⊺","\\intercal",!0);d(v,I,Te,"⋒","\\doublecap");d(v,I,Te,"⋓","\\doublecup");d(v,I,Te,"⊠","\\boxtimes",!0);d(v,I,N,"⇢","\\dashrightarrow",!0);d(v,I,N,"⇠","\\dashleftarrow",!0);d(v,I,N,"⇇","\\leftleftarrows",!0);d(v,I,N,"⇆","\\leftrightarrows",!0);d(v,I,N,"⇚","\\Lleftarrow",!0);d(v,I,N,"↞","\\twoheadleftarrow",!0);d(v,I,N,"↢","\\leftarrowtail",!0);d(v,I,N,"↫","\\looparrowleft",!0);d(v,I,N,"⇋","\\leftrightharpoons",!0);d(v,I,N,"↶","\\curvearrowleft",!0);d(v,I,N,"↺","\\circlearrowleft",!0);d(v,I,N,"↰","\\Lsh",!0);d(v,I,N,"⇈","\\upuparrows",!0);d(v,I,N,"↿","\\upharpoonleft",!0);d(v,I,N,"⇃","\\downharpoonleft",!0);d(v,_,N,"⊶","\\origof",!0);d(v,_,N,"⊷","\\imageof",!0);d(v,I,N,"⊸","\\multimap",!0);d(v,I,N,"↭","\\leftrightsquigarrow",!0);d(v,I,N,"⇉","\\rightrightarrows",!0);d(v,I,N,"⇄","\\rightleftarrows",!0);d(v,I,N,"↠","\\twoheadrightarrow",!0);d(v,I,N,"↣","\\rightarrowtail",!0);d(v,I,N,"↬","\\looparrowright",!0);d(v,I,N,"↷","\\curvearrowright",!0);d(v,I,N,"↻","\\circlearrowright",!0);d(v,I,N,"↱","\\Rsh",!0);d(v,I,N,"⇊","\\downdownarrows",!0);d(v,I,N,"↾","\\upharpoonright",!0);d(v,I,N,"⇂","\\downharpoonright",!0);d(v,I,N,"⇝","\\rightsquigarrow",!0);d(v,I,N,"⇝","\\leadsto");d(v,I,N,"⇛","\\Rrightarrow",!0);d(v,I,N,"↾","\\restriction");d(v,_,k,"‘","`");d(v,_,k,"$","\\$");d(ie,_,k,"$","\\$");d(ie,_,k,"$","\\textdollar");d(v,_,k,"%","\\%");d(ie,_,k,"%","\\%");d(v,_,k,"_","\\_");d(ie,_,k,"_","\\_");d(ie,_,k,"_","\\textunderscore");d(v,_,k,"∠","\\angle",!0);d(v,_,k,"∞","\\infty",!0);d(v,_,k,"′","\\prime");d(v,_,k,"△","\\triangle");d(v,_,k,"Γ","\\Gamma",!0);d(v,_,k,"Δ","\\Delta",!0);d(v,_,k,"Θ","\\Theta",!0);d(v,_,k,"Λ","\\Lambda",!0);d(v,_,k,"Ξ","\\Xi",!0);d(v,_,k,"Π","\\Pi",!0);d(v,_,k,"Σ","\\Sigma",!0);d(v,_,k,"Υ","\\Upsilon",!0);d(v,_,k,"Φ","\\Phi",!0);d(v,_,k,"Ψ","\\Psi",!0);d(v,_,k,"Ω","\\Omega",!0);d(v,_,k,"A","Α");d(v,_,k,"B","Β");d(v,_,k,"E","Ε");d(v,_,k,"Z","Ζ");d(v,_,k,"H","Η");d(v,_,k,"I","Ι");d(v,_,k,"K","Κ");d(v,_,k,"M","Μ");d(v,_,k,"N","Ν");d(v,_,k,"O","Ο");d(v,_,k,"P","Ρ");d(v,_,k,"T","Τ");d(v,_,k,"X","Χ");d(v,_,k,"¬","\\neg",!0);d(v,_,k,"¬","\\lnot");d(v,_,k,"⊤","\\top");d(v,_,k,"⊥","\\bot");d(v,_,k,"∅","\\emptyset");d(v,I,k,"∅","\\varnothing");d(v,_,Ge,"α","\\alpha",!0);d(v,_,Ge,"β","\\beta",!0);d(v,_,Ge,"γ","\\gamma",!0);d(v,_,Ge,"δ","\\delta",!0);d(v,_,Ge,"ϵ","\\epsilon",!0);d(v,_,Ge,"ζ","\\zeta",!0);d(v,_,Ge,"η","\\eta",!0);d(v,_,Ge,"θ","\\theta",!0);d(v,_,Ge,"ι","\\iota",!0);d(v,_,Ge,"κ","\\kappa",!0);d(v,_,Ge,"λ","\\lambda",!0);d(v,_,Ge,"μ","\\mu",!0);d(v,_,Ge,"ν","\\nu",!0);d(v,_,Ge,"ξ","\\xi",!0);d(v,_,Ge,"ο","\\omicron",!0);d(v,_,Ge,"π","\\pi",!0);d(v,_,Ge,"ρ","\\rho",!0);d(v,_,Ge,"σ","\\sigma",!0);d(v,_,Ge,"τ","\\tau",!0);d(v,_,Ge,"υ","\\upsilon",!0);d(v,_,Ge,"ϕ","\\phi",!0);d(v,_,Ge,"χ","\\chi",!0);d(v,_,Ge,"ψ","\\psi",!0);d(v,_,Ge,"ω","\\omega",!0);d(v,_,Ge,"ε","\\varepsilon",!0);d(v,_,Ge,"ϑ","\\vartheta",!0);d(v,_,Ge,"ϖ","\\varpi",!0);d(v,_,Ge,"ϱ","\\varrho",!0);d(v,_,Ge,"ς","\\varsigma",!0);d(v,_,Ge,"φ","\\varphi",!0);d(v,_,Te,"∗","*",!0);d(v,_,Te,"+","+");d(v,_,Te,"−","-",!0);d(v,_,Te,"⋅","\\cdot",!0);d(v,_,Te,"∘","\\circ",!0);d(v,_,Te,"÷","\\div",!0);d(v,_,Te,"±","\\pm",!0);d(v,_,Te,"×","\\times",!0);d(v,_,Te,"∩","\\cap",!0);d(v,_,Te,"∪","\\cup",!0);d(v,_,Te,"∖","\\setminus",!0);d(v,_,Te,"∧","\\land");d(v,_,Te,"∨","\\lor");d(v,_,Te,"∧","\\wedge",!0);d(v,_,Te,"∨","\\vee",!0);d(v,_,k,"√","\\surd");d(v,_,Tn,"⟨","\\langle",!0);d(v,_,Tn,"∣","\\lvert");d(v,_,Tn,"∥","\\lVert");d(v,_,dn,"?","?");d(v,_,dn,"!","!");d(v,_,dn,"⟩","\\rangle",!0);d(v,_,dn,"∣","\\rvert");d(v,_,dn,"∥","\\rVert");d(v,_,N,"=","=");d(v,_,N,":",":");d(v,_,N,"≈","\\approx",!0);d(v,_,N,"≅","\\cong",!0);d(v,_,N,"≥","\\ge");d(v,_,N,"≥","\\geq",!0);d(v,_,N,"←","\\gets");d(v,_,N,">","\\gt",!0);d(v,_,N,"∈","\\in",!0);d(v,_,N,"","\\@not");d(v,_,N,"⊂","\\subset",!0);d(v,_,N,"⊃","\\supset",!0);d(v,_,N,"⊆","\\subseteq",!0);d(v,_,N,"⊇","\\supseteq",!0);d(v,I,N,"⊈","\\nsubseteq",!0);d(v,I,N,"⊉","\\nsupseteq",!0);d(v,_,N,"⊨","\\models");d(v,_,N,"←","\\leftarrow",!0);d(v,_,N,"≤","\\le");d(v,_,N,"≤","\\leq",!0);d(v,_,N,"<","\\lt",!0);d(v,_,N,"→","\\rightarrow",!0);d(v,_,N,"→","\\to");d(v,I,N,"≱","\\ngeq",!0);d(v,I,N,"≰","\\nleq",!0);d(v,_,yi," ","\\ ");d(v,_,yi," ","\\space");d(v,_,yi," ","\\nobreakspace");d(ie,_,yi," ","\\ ");d(ie,_,yi," "," ");d(ie,_,yi," ","\\space");d(ie,_,yi," ","\\nobreakspace");d(v,_,yi,null,"\\nobreak");d(v,_,yi,null,"\\allowbreak");d(v,_,ca,",",",");d(v,_,ca,";",";");d(v,I,Te,"⊼","\\barwedge",!0);d(v,I,Te,"⊻","\\veebar",!0);d(v,_,Te,"⊙","\\odot",!0);d(v,_,Te,"⊕","\\oplus",!0);d(v,_,Te,"⊗","\\otimes",!0);d(v,_,k,"∂","\\partial",!0);d(v,_,Te,"⊘","\\oslash",!0);d(v,I,Te,"⊚","\\circledcirc",!0);d(v,I,Te,"⊡","\\boxdot",!0);d(v,_,Te,"△","\\bigtriangleup");d(v,_,Te,"▽","\\bigtriangledown");d(v,_,Te,"†","\\dagger");d(v,_,Te,"⋄","\\diamond");d(v,_,Te,"⋆","\\star");d(v,_,Te,"◃","\\triangleleft");d(v,_,Te,"▹","\\triangleright");d(v,_,Tn,"{","\\{");d(ie,_,k,"{","\\{");d(ie,_,k,"{","\\textbraceleft");d(v,_,dn,"}","\\}");d(ie,_,k,"}","\\}");d(ie,_,k,"}","\\textbraceright");d(v,_,Tn,"{","\\lbrace");d(v,_,dn,"}","\\rbrace");d(v,_,Tn,"[","\\lbrack",!0);d(ie,_,k,"[","\\lbrack",!0);d(v,_,dn,"]","\\rbrack",!0);d(ie,_,k,"]","\\rbrack",!0);d(v,_,Tn,"(","\\lparen",!0);d(v,_,dn,")","\\rparen",!0);d(ie,_,k,"<","\\textless",!0);d(ie,_,k,">","\\textgreater",!0);d(v,_,Tn,"⌊","\\lfloor",!0);d(v,_,dn,"⌋","\\rfloor",!0);d(v,_,Tn,"⌈","\\lceil",!0);d(v,_,dn,"⌉","\\rceil",!0);d(v,_,k,"\\","\\backslash");d(v,_,k,"∣","|");d(v,_,k,"∣","\\vert");d(ie,_,k,"|","\\textbar",!0);d(v,_,k,"∥","\\|");d(v,_,k,"∥","\\Vert");d(ie,_,k,"∥","\\textbardbl");d(ie,_,k,"~","\\textasciitilde");d(ie,_,k,"\\","\\textbackslash");d(ie,_,k,"^","\\textasciicircum");d(v,_,N,"↑","\\uparrow",!0);d(v,_,N,"⇑","\\Uparrow",!0);d(v,_,N,"↓","\\downarrow",!0);d(v,_,N,"⇓","\\Downarrow",!0);d(v,_,N,"↕","\\updownarrow",!0);d(v,_,N,"⇕","\\Updownarrow",!0);d(v,_,Ht,"∐","\\coprod");d(v,_,Ht,"⋁","\\bigvee");d(v,_,Ht,"⋀","\\bigwedge");d(v,_,Ht,"⨄","\\biguplus");d(v,_,Ht,"⋂","\\bigcap");d(v,_,Ht,"⋃","\\bigcup");d(v,_,Ht,"∫","\\int");d(v,_,Ht,"∫","\\intop");d(v,_,Ht,"∬","\\iint");d(v,_,Ht,"∭","\\iiint");d(v,_,Ht,"∏","\\prod");d(v,_,Ht,"∑","\\sum");d(v,_,Ht,"⨂","\\bigotimes");d(v,_,Ht,"⨁","\\bigoplus");d(v,_,Ht,"⨀","\\bigodot");d(v,_,Ht,"∮","\\oint");d(v,_,Ht,"∯","\\oiint");d(v,_,Ht,"∰","\\oiiint");d(v,_,Ht,"⨆","\\bigsqcup");d(v,_,Ht,"∫","\\smallint");d(ie,_,zr,"…","\\textellipsis");d(v,_,zr,"…","\\mathellipsis");d(ie,_,zr,"…","\\ldots",!0);d(v,_,zr,"…","\\ldots",!0);d(v,_,zr,"⋯","\\@cdots",!0);d(v,_,zr,"⋱","\\ddots",!0);d(v,_,k,"⋮","\\varvdots");d(ie,_,k,"⋮","\\varvdots");d(v,_,Ct,"ˊ","\\acute");d(v,_,Ct,"ˋ","\\grave");d(v,_,Ct,"¨","\\ddot");d(v,_,Ct,"~","\\tilde");d(v,_,Ct,"ˉ","\\bar");d(v,_,Ct,"˘","\\breve");d(v,_,Ct,"ˇ","\\check");d(v,_,Ct,"^","\\hat");d(v,_,Ct,"⃗","\\vec");d(v,_,Ct,"˙","\\dot");d(v,_,Ct,"˚","\\mathring");d(v,_,Ge,"","\\@imath");d(v,_,Ge,"","\\@jmath");d(v,_,k,"ı","ı");d(v,_,k,"ȷ","ȷ");d(ie,_,k,"ı","\\i",!0);d(ie,_,k,"ȷ","\\j",!0);d(ie,_,k,"ß","\\ss",!0);d(ie,_,k,"æ","\\ae",!0);d(ie,_,k,"œ","\\oe",!0);d(ie,_,k,"ø","\\o",!0);d(ie,_,k,"Æ","\\AE",!0);d(ie,_,k,"Œ","\\OE",!0);d(ie,_,k,"Ø","\\O",!0);d(ie,_,Ct,"ˊ","\\'");d(ie,_,Ct,"ˋ","\\`");d(ie,_,Ct,"ˆ","\\^");d(ie,_,Ct,"˜","\\~");d(ie,_,Ct,"ˉ","\\=");d(ie,_,Ct,"˘","\\u");d(ie,_,Ct,"˙","\\.");d(ie,_,Ct,"¸","\\c");d(ie,_,Ct,"˚","\\r");d(ie,_,Ct,"ˇ","\\v");d(ie,_,Ct,"¨",'\\"');d(ie,_,Ct,"˝","\\H");d(ie,_,Ct,"◯","\\textcircled");var Du={"--":!0,"---":!0,"``":!0,"''":!0};d(ie,_,k,"–","--",!0);d(ie,_,k,"–","\\textendash");d(ie,_,k,"—","---",!0);d(ie,_,k,"—","\\textemdash");d(ie,_,k,"‘","`",!0);d(ie,_,k,"‘","\\textquoteleft");d(ie,_,k,"’","'",!0);d(ie,_,k,"’","\\textquoteright");d(ie,_,k,"“","``",!0);d(ie,_,k,"“","\\textquotedblleft");d(ie,_,k,"”","''",!0);d(ie,_,k,"”","\\textquotedblright");d(v,_,k,"°","\\degree",!0);d(ie,_,k,"°","\\degree");d(ie,_,k,"°","\\textdegree",!0);d(v,_,k,"£","\\pounds");d(v,_,k,"£","\\mathsterling",!0);d(ie,_,k,"£","\\pounds");d(ie,_,k,"£","\\textsterling",!0);d(v,I,k,"✠","\\maltese");d(ie,I,k,"✠","\\maltese");var z0='0123456789/@."';for(var Gs=0;Gs<z0.length;Gs++){var H0=z0.charAt(Gs);d(v,_,k,H0,H0)}var G0='0123456789!@*()-=+";:?/.,';for(var Vs=0;Vs<G0.length;Vs++){var V0=G0.charAt(Vs);d(ie,_,k,V0,V0)}var fs="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Ws=0;Ws<fs.length;Ws++){var xa=fs.charAt(Ws);d(v,_,Ge,xa,xa),d(ie,_,k,xa,xa)}d(v,I,k,"C","ℂ");d(ie,I,k,"C","ℂ");d(v,I,k,"H","ℍ");d(ie,I,k,"H","ℍ");d(v,I,k,"N","ℕ");d(ie,I,k,"N","ℕ");d(v,I,k,"P","ℙ");d(ie,I,k,"P","ℙ");d(v,I,k,"Q","ℚ");d(ie,I,k,"Q","ℚ");d(v,I,k,"R","ℝ");d(ie,I,k,"R","ℝ");d(v,I,k,"Z","ℤ");d(ie,I,k,"Z","ℤ");d(v,_,Ge,"h","ℎ");d(ie,_,Ge,"h","ℎ");var Xe="";for(var ln=0;ln<fs.length;ln++){var Nt=fs.charAt(ln);Xe=String.fromCharCode(55349,56320+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56372+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56424+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56580+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56684+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56736+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56788+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56840+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56944+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),ln<26&&(Xe=String.fromCharCode(55349,56632+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe),Xe=String.fromCharCode(55349,56476+ln),d(v,_,Ge,Nt,Xe),d(ie,_,k,Nt,Xe))}Xe="𝕜";d(v,_,Ge,"k",Xe);d(ie,_,k,"k",Xe);for(var Vi=0;Vi<10;Vi++){var wi=Vi.toString();Xe=String.fromCharCode(55349,57294+Vi),d(v,_,Ge,wi,Xe),d(ie,_,k,wi,Xe),Xe=String.fromCharCode(55349,57314+Vi),d(v,_,Ge,wi,Xe),d(ie,_,k,wi,Xe),Xe=String.fromCharCode(55349,57324+Vi),d(v,_,Ge,wi,Xe),d(ie,_,k,wi,Xe),Xe=String.fromCharCode(55349,57334+Vi),d(v,_,Ge,wi,Xe),d(ie,_,k,wi,Xe)}var Vo="ÐÞþ";for(var qs=0;qs<Vo.length;qs++){var ya=Vo.charAt(qs);d(v,_,Ge,ya,ya),d(ie,_,k,ya,ya)}var ba=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],W0=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],jd=(i,e)=>{var t=i.charCodeAt(0),n=i.charCodeAt(1),r=(t-55296)*1024+(n-56320)+65536,a=e==="math"?0:1;if(119808<=r&&r<120484){var s=Math.floor((r-119808)/26);return[ba[s][2],ba[s][a]]}else if(120782<=r&&r<=120831){var o=Math.floor((r-120782)/10);return[W0[o][2],W0[o][a]]}else{if(r===120485||r===120486)return[ba[0][2],ba[0][a]];if(120486<r&&r<120782)return["",""];throw new ce("Unsupported character: "+i)}},Ss=function(e,t,n){if(Et[n][e]){var r=Et[n][e].replace;r&&(e=r)}return{value:e,metrics:jl(e,t,n)}},un=function(e,t,n,r,a){var s=Ss(e,t,n),o=s.metrics;e=s.value;var l;if(o){var c=o.italic;(n==="text"||r&&r.font==="mathit")&&(c=0),l=new wn(e,o.height,o.depth,c,o.skew,o.width,a)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+e+"' in style '"+t+"' and mode '"+n+"'")),l=new wn(e,0,0,0,0,0,a);if(r){l.maxFontSize=r.sizeMultiplier,r.style.isTight()&&l.classes.push("mtight");var u=r.getColor();u&&(l.style.color=u)}return l},Kl=function(e,t,n,r){return r===void 0&&(r=[]),n.font==="boldsymbol"&&Ss(e,"Main-Bold",t).metrics?un(e,"Main-Bold",t,n,r.concat(["mathbf"])):e==="\\"||Et[t][e].font==="main"?un(e,"Main-Regular",t,n,r):un(e,"AMS-Regular",t,n,r.concat(["amsrm"]))},Kd=function(e,t,n,r,a){return a!=="textord"&&Ss(e,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},ws=function(e,t,n){var r=e.mode,a=e.text,s=["mord"],o=r==="math"||r==="text"&&t.font,l=o?t.font:t.fontFamily,c="",u="";if(a.charCodeAt(0)===55349&&([c,u]=jd(a,r)),c.length>0)return un(a,c,r,t,s.concat(u));if(l){var f,h;if(l==="boldsymbol"){var p=Kd(a,r,t,s,n);f=p.fontName,h=[p.fontClass]}else o?(f=Wo[l].fontName,h=[l]):(f=_a(l,t.fontWeight,t.fontShape),h=[l,t.fontWeight,t.fontShape]);if(Ss(a,f,r).metrics)return un(a,f,r,t,s.concat(h));if(Du.hasOwnProperty(a)&&f.slice(0,10)==="Typewriter"){for(var x=[],y=0;y<a.length;y++)x.push(un(a[y],f,r,t,s.concat(h)));return bi(x)}}if(n==="mathord")return un(a,"Math-Italic",r,t,s.concat(["mathnormal"]));if(n==="textord"){var m=Et[r][a]&&Et[r][a].font;if(m==="ams"){var g=_a("amsrm",t.fontWeight,t.fontShape);return un(a,g,r,t,s.concat("amsrm",t.fontWeight,t.fontShape))}else if(m==="main"||!m){var S=_a("textrm",t.fontWeight,t.fontShape);return un(a,S,r,t,s.concat(t.fontWeight,t.fontShape))}else{var C=_a(m,t.fontWeight,t.fontShape);return un(a,C,r,t,s.concat(C,t.fontWeight,t.fontShape))}}else throw new Error("unexpected type: "+n+" in makeOrd")},Zd=(i,e)=>{if(Ui(i.classes)!==Ui(e.classes)||i.skew!==e.skew||i.maxFontSize!==e.maxFontSize||i.italic!==0&&i.hasClass("mathnormal"))return!1;if(i.classes.length===1){var t=i.classes[0];if(t==="mbin"||t==="mord")return!1}for(var n of Object.keys(i.style))if(i.style[n]!==e.style[n])return!1;for(var r of Object.keys(e.style))if(i.style[r]!==e.style[r])return!1;return!0},Iu=i=>{for(var e=0;e<i.length-1;e++){var t=i[e],n=i[e+1];t instanceof wn&&n instanceof wn&&Zd(t,n)&&(t.text+=n.text,t.height=Math.max(t.height,n.height),t.depth=Math.max(t.depth,n.depth),t.italic=n.italic,i.splice(e+1,1),e--)}return i},Zl=function(e){for(var t=0,n=0,r=0,a=0;a<e.children.length;a++){var s=e.children[a];s.height>t&&(t=s.height),s.depth>n&&(n=s.depth),s.maxFontSize>r&&(r=s.maxFontSize)}e.height=t,e.depth=n,e.maxFontSize=r},oe=function(e,t,n,r){var a=new Br(e,t,n,r);return Zl(a),a},ki=(i,e,t,n)=>new Br(i,e,t,n),Dr=function(e,t,n){var r=oe([e],[],t);return r.height=Math.max(n||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),r.style.borderBottomWidth=me(r.height),r.maxFontSize=1,r},Jd=function(e,t,n,r){var a=new Ms(e,t,n,r);return Zl(a),a},bi=function(e){var t=new Or(e);return Zl(t),t},Ir=function(e,t){return e instanceof Or?oe([],[e],t):e},Qd=function(e){if(e.positionType==="individualShift"){for(var t=e.children,n=[t[0]],r=-t[0].shift-t[0].elem.depth,a=r,s=1;s<t.length;s++){var o=-t[s].shift-a-t[s].elem.depth,l=o-(t[s-1].elem.height+t[s-1].elem.depth);a=a+o,n.push({type:"kern",size:l}),n.push(t[s])}return{children:n,depth:r}}var c;if(e.positionType==="top"){for(var u=e.positionData,f=0;f<e.children.length;f++){var h=e.children[f];u-=h.type==="kern"?h.size:h.elem.height+h.elem.depth}c=u}else if(e.positionType==="bottom")c=-e.positionData;else{var p=e.children[0];if(p.type!=="elem")throw new Error('First child must have type "elem".');if(e.positionType==="shift")c=-p.elem.depth-e.positionData;else if(e.positionType==="firstBaseline")c=-p.elem.depth;else throw new Error("Invalid positionType "+e.positionType+".")}return{children:e.children,depth:c}},ft=function(e,t){for(var{children:n,depth:r}=Qd(e),a=0,s=0;s<n.length;s++){var o=n[s];if(o.type==="elem"){var l=o.elem;a=Math.max(a,l.maxFontSize,l.height)}}a+=2;var c=oe(["pstrut"],[]);c.style.height=me(a);for(var u=[],f=r,h=r,p=r,x=0;x<n.length;x++){var y=n[x];if(y.type==="kern")p+=y.size;else{var m=y.elem,g=y.wrapperClasses||[],S=y.wrapperStyle||{},C=oe(g,[c,m],void 0,S);C.style.top=me(-a-p-m.depth),y.marginLeft&&(C.style.marginLeft=y.marginLeft),y.marginRight&&(C.style.marginRight=y.marginRight),u.push(C),p+=m.height+m.depth}f=Math.min(f,p),h=Math.max(h,p)}var E=oe(["vlist"],u);E.style.height=me(h);var D;if(f<0){var P=oe([],[]),L=oe(["vlist"],[P]);L.style.height=me(-f);var M=oe(["vlist-s"],[new wn("​")]);D=[oe(["vlist-r"],[E,M]),oe(["vlist-r"],[L])]}else D=[oe(["vlist-r"],[E])];var A=oe(["vlist-t"],D);return D.length===2&&A.classes.push("vlist-t2"),A.height=h,A.depth=-f,A},Lu=(i,e)=>{var t=oe(["mspace"],[],e),n=It(i,e);return t.style.marginRight=me(n),t},_a=function(e,t,n){var r="";switch(e){case"amsrm":r="AMS";break;case"textrm":r="Main";break;case"textsf":r="SansSerif";break;case"texttt":r="Typewriter";break;default:r=e}var a;return t==="textbf"&&n==="textit"?a="BoldItalic":t==="textbf"?a="Bold":t==="textit"?a="Italic":a="Regular",r+"-"+a},Wo={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},Nu={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},Uu=function(e,t){var[n,r,a]=Nu[e],s=new Fi(n),o=new pi([s],{width:me(r),height:me(a),style:"width:"+me(r),viewBox:"0 0 "+1e3*r+" "+1e3*a,preserveAspectRatio:"xMinYMin"}),l=ki(["overlay"],[o],t);return l.height=a,l.style.height=me(a),l.style.width=me(r),l},Dt={number:3,unit:"mu"},Wi={number:4,unit:"mu"},ii={number:5,unit:"mu"},ef={mord:{mop:Dt,mbin:Wi,mrel:ii,minner:Dt},mop:{mord:Dt,mop:Dt,mrel:ii,minner:Dt},mbin:{mord:Wi,mop:Wi,mopen:Wi,minner:Wi},mrel:{mord:ii,mop:ii,mopen:ii,minner:ii},mopen:{},mclose:{mop:Dt,mbin:Wi,mrel:ii,minner:Dt},mpunct:{mord:Dt,mop:Dt,mrel:ii,mopen:Dt,mclose:Dt,mpunct:Dt,minner:Dt},minner:{mord:Dt,mop:Dt,mbin:Wi,mrel:ii,mopen:Dt,mpunct:Dt,minner:Dt}},tf={mord:{mop:Dt},mop:{mord:Dt,mop:Dt},mbin:{},mrel:{},mopen:{},mclose:{mop:Dt},mpunct:{},minner:{mop:Dt}},Fu={},ps={},ms={};function we(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs,argTypes:n.argTypes,allowedInArgument:!!n.allowedInArgument,allowedInText:!!n.allowedInText,allowedInMath:n.allowedInMath===void 0?!0:n.allowedInMath,numOptionalArgs:n.numOptionalArgs||0,infix:!!n.infix,primitive:!!n.primitive,handler:r},l=0;l<t.length;++l)Fu[t[l]]=o;e&&(a&&(ps[e]=a),s&&(ms[e]=s))}function rr(i){var{type:e,htmlBuilder:t,mathmlBuilder:n}=i;we({type:e,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:n})}var gs=function(e){return e.type==="ordgroup"&&e.body.length===1?e.body[0]:e},Bt=function(e){return e.type==="ordgroup"?e.body:[e]},nf=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),rf=new Set(["rightmost","mrel","mclose","mpunct"]),af={display:$e.DISPLAY,text:$e.TEXT,script:$e.SCRIPT,scriptscript:$e.SCRIPTSCRIPT},sf={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},qt=function(e,t,n,r){r===void 0&&(r=[null,null]);for(var a=[],s=0;s<e.length;s++){var o=pt(e[s],t);if(o instanceof Or){var l=o.children;a.push(...l)}else a.push(o)}if(Iu(a),!n)return a;var c=t;if(e.length===1){var u=e[0];u.type==="sizing"?c=t.havingSize(u.size):u.type==="styling"&&(c=t.havingStyle(af[u.style]))}var f=oe([r[0]||"leftmost"],[],t),h=oe([r[1]||"rightmost"],[],t),p=n==="root";return qo(a,(x,y)=>{var m=y.classes[0],g=x.classes[0];m==="mbin"&&rf.has(g)?y.classes[0]="mord":g==="mbin"&&nf.has(m)&&(x.classes[0]="mord")},{node:f},h,p),qo(a,(x,y)=>{var m,g,S=Yo(y),C=Yo(x),E=S&&C?x.hasClass("mtight")?(m=tf[S])==null?void 0:m[C]:(g=ef[S])==null?void 0:g[C]:null;if(E)return Lu(E,c)},{node:f},h,p),a},qo=function(e,t,n,r,a){r&&e.push(r);for(var s=0;s<e.length;s++){var o=e[s],l=ku(o);if(l){qo(l.children,t,n,null,a);continue}var c=!o.hasClass("mspace");if(c){var u=t(o,n.node);u&&(n.insertAfter?n.insertAfter(u):(e.unshift(u),s++))}c?n.node=o:a&&o.hasClass("newline")&&(n.node=oe(["leftmost"])),n.insertAfter=(f=>h=>{e.splice(f+1,0,h),s++})(s)}r&&e.pop()},ku=function(e){return e instanceof Or||e instanceof Ms||e instanceof Br&&e.hasClass("enclosing")?e:null},Xo=function(e,t){var n=ku(e);if(n){var r=n.children;if(r.length){if(t==="right")return Xo(r[r.length-1],"right");if(t==="left")return Xo(r[0],"left")}}return e},Yo=function(e,t){if(!e)return null;t&&(e=Xo(e,t));var n=e.classes[0];return sf[n]||null},ia=function(e,t){var n=["nulldelimiter"].concat(e.baseSizingClasses());return oe(t.concat(n))},pt=function(e,t,n){if(!e)return oe();if(ps[e.type]){var r=ps[e.type](e,t);if(n&&t.size!==n.size){r=oe(t.sizingClasses(n),[r],t);var a=t.sizeMultiplier/n.sizeMultiplier;r.height*=a,r.depth*=a}return r}else throw new ce("Got group of unknown type: '"+e.type+"'")};function Ma(i,e){var t=oe(["base"],i,e),n=oe(["strut"]);return n.style.height=me(t.height+t.depth),t.depth&&(n.style.verticalAlign=me(-t.depth)),t.children.unshift(n),t}function $o(i,e){var t=null;i.length===1&&i[0].type==="tag"&&(t=i[0].tag,i=i[0].body);var n=qt(i,e,"root"),r;n.length===2&&n[1].hasClass("tag")&&(r=n.pop());for(var a=[],s=[],o=0;o<n.length;o++)if(s.push(n[o]),n[o].hasClass("mbin")||n[o].hasClass("mrel")||n[o].hasClass("allowbreak")){for(var l=!1;o<n.length-1&&n[o+1].hasClass("mspace")&&!n[o+1].hasClass("newline");)o++,s.push(n[o]),n[o].hasClass("nobreak")&&(l=!0);l||(a.push(Ma(s,e)),s=[])}else n[o].hasClass("newline")&&(s.pop(),s.length>0&&(a.push(Ma(s,e)),s=[]),a.push(n[o]));s.length>0&&a.push(Ma(s,e));var c;t?(c=Ma(qt(t,e,!0),e),c.classes=["tag"],a.push(c)):r&&a.push(r);var u=oe(["katex-html"],a);if(u.setAttribute("aria-hidden","true"),c){var f=c.children[0];f.style.height=me(u.height+u.depth),u.depth&&(f.style.verticalAlign=me(-u.depth))}return u}function Ou(i){return new Or(i)}class he{constructor(e,t,n){this.type=e,this.attributes={},this.children=t||[],this.classes=n||[]}setAttribute(e,t){this.attributes[e]=t}getAttribute(e){return this.attributes[e]}toNode(){var e=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&e.setAttribute(t,this.attributes[t]);this.classes.length>0&&(e.className=Ui(this.classes));for(var n=0;n<this.children.length;n++)if(this.children[n]instanceof zt&&this.children[n+1]instanceof zt){for(var r=this.children[n].toText()+this.children[++n].toText();this.children[n+1]instanceof zt;)r+=this.children[++n].toText();e.appendChild(new zt(r).toNode())}else e.appendChild(this.children[n].toNode());return e}toMarkup(){var e="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(e+=" "+t+'="',e+=rn(this.attributes[t]),e+='"');this.classes.length>0&&(e+=' class ="'+rn(Ui(this.classes))+'"'),e+=">";for(var n=0;n<this.children.length;n++)e+=this.children[n].toMarkup();return e+="</"+this.type+">",e}toText(){return this.children.map(e=>e.toText()).join("")}}class zt{constructor(e){this.text=e}toNode(){return document.createTextNode(this.text)}toMarkup(){return rn(this.toText())}toText(){return this.text}}class Bu{constructor(e){this.width=e,e>=.05555&&e<=.05556?this.character=" ":e>=.1666&&e<=.1667?this.character=" ":e>=.2222&&e<=.2223?this.character=" ":e>=.2777&&e<=.2778?this.character="  ":e>=-.05556&&e<=-.05555?this.character=" ⁣":e>=-.1667&&e<=-.1666?this.character=" ⁣":e>=-.2223&&e<=-.2222?this.character=" ⁣":e>=-.2778&&e<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var e=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return e.setAttribute("width",me(this.width)),e}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+me(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var of=new Set(["\\imath","\\jmath"]),lf=new Set(["mrow","mtable"]),Pn=function(e,t,n){return Et[t][e]&&Et[t][e].replace&&e.charCodeAt(0)!==55349&&!(Du.hasOwnProperty(e)&&n&&(n.fontFamily&&n.fontFamily.slice(4,6)==="tt"||n.font&&n.font.slice(4,6)==="tt"))&&(e=Et[t][e].replace),new zt(e)},Jl=function(e){return e.length===1?e[0]:new he("mrow",e)},Ql=function(e,t){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold";var n=t.font;if(!n||n==="mathnormal")return null;var r=e.mode;if(n==="mathit")return"italic";if(n==="boldsymbol")return e.type==="textord"?"bold":"bold-italic";if(n==="mathbf")return"bold";if(n==="mathbb")return"double-struck";if(n==="mathsfit")return"sans-serif-italic";if(n==="mathfrak")return"fraktur";if(n==="mathscr"||n==="mathcal")return"script";if(n==="mathsf")return"sans-serif";if(n==="mathtt")return"monospace";var a=e.text;if(of.has(a))return null;if(Et[r][a]){var s=Et[r][a].replace;s&&(a=s)}var o=Wo[n].fontName;return jl(a,o,r)?Wo[n].variant:null};function Xs(i){if(!i)return!1;if(i.type==="mi"&&i.children.length===1){var e=i.children[0];return e instanceof zt&&e.text==="."}else if(i.type==="mo"&&i.children.length===1&&i.getAttribute("separator")==="true"&&i.getAttribute("lspace")==="0em"&&i.getAttribute("rspace")==="0em"){var t=i.children[0];return t instanceof zt&&t.text===","}else return!1}var En=function(e,t,n){if(e.length===1){var r=St(e[0],t);return n&&r instanceof he&&r.type==="mo"&&(r.setAttribute("lspace","0em"),r.setAttribute("rspace","0em")),[r]}for(var a=[],s,o=0;o<e.length;o++){var l=St(e[o],t);if(l instanceof he&&s instanceof he){if(l.type==="mtext"&&s.type==="mtext"&&l.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...l.children);continue}else if(l.type==="mn"&&s.type==="mn"){s.children.push(...l.children);continue}else if(Xs(l)&&s.type==="mn"){s.children.push(...l.children);continue}else if(l.type==="mn"&&Xs(s))l.children=[...s.children,...l.children],a.pop();else if((l.type==="msup"||l.type==="msub")&&l.children.length>=1&&(s.type==="mn"||Xs(s))){var c=l.children[0];c instanceof he&&c.type==="mn"&&(c.children=[...s.children,...c.children],a.pop())}else if(s.type==="mi"&&s.children.length===1){var u=s.children[0];if(u instanceof zt&&u.text==="̸"&&(l.type==="mo"||l.type==="mi"||l.type==="mn")){var f=l.children[0];f instanceof zt&&f.text.length>0&&(f.text=f.text.slice(0,1)+"̸"+f.text.slice(1),a.pop())}}}a.push(l),s=l}return a},Oi=function(e,t,n){return Jl(En(e,t,n))},St=function(e,t){if(!e)return new he("mrow");if(ms[e.type]){var n=ms[e.type](e,t);return n}else throw new ce("Got group of unknown type: '"+e.type+"'")};function q0(i,e,t,n,r){var a=En(i,t),s;a.length===1&&a[0]instanceof he&&lf.has(a[0].type)?s=a[0]:s=new he("mrow",a);var o=new he("annotation",[new zt(e)]);o.setAttribute("encoding","application/x-tex");var l=new he("semantics",[s,o]),c=new he("math",[l]);c.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),n&&c.setAttribute("display","block");var u=r?"katex":"katex-mathml";return oe([u],[c])}var cf=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],X0=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],Y0=function(e,t){return t.size<2?e:cf[e-1][t.size-1]};class ci{constructor(e){this.style=e.style,this.color=e.color,this.size=e.size||ci.BASESIZE,this.textSize=e.textSize||this.size,this.phantom=!!e.phantom,this.font=e.font||"",this.fontFamily=e.fontFamily||"",this.fontWeight=e.fontWeight||"",this.fontShape=e.fontShape||"",this.sizeMultiplier=X0[this.size-1],this.maxSize=e.maxSize,this.minRuleThickness=e.minRuleThickness,this._fontMetrics=void 0}extend(e){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};return Object.assign(t,e),new ci(t)}havingStyle(e){return this.style===e?this:this.extend({style:e,size:Y0(this.textSize,e)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(e){return this.size===e&&this.textSize===e?this:this.extend({style:this.style.text(),size:e,textSize:e,sizeMultiplier:X0[e-1]})}havingBaseStyle(e){e=e||this.style.text();var t=Y0(ci.BASESIZE,e);return this.size===t&&this.textSize===ci.BASESIZE&&this.style===e?this:this.extend({style:e,size:t})}havingBaseSizing(){var e;switch(this.style.id){case 4:case 5:e=3;break;case 6:case 7:e=1;break;default:e=6}return this.extend({style:this.style.text(),size:e})}withColor(e){return this.extend({color:e})}withPhantom(){return this.extend({phantom:!0})}withFont(e){return this.extend({font:e})}withTextFontFamily(e){return this.extend({fontFamily:e,font:""})}withTextFontWeight(e){return this.extend({fontWeight:e,font:""})}withTextFontShape(e){return this.extend({fontShape:e,font:""})}sizingClasses(e){return e.size!==this.size?["sizing","reset-size"+e.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==ci.BASESIZE?["sizing","reset-size"+this.size,"size"+ci.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=Xd(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}ci.BASESIZE=6;var zu=function(e){return new ci({style:e.displayMode?$e.DISPLAY:$e.TEXT,maxSize:e.maxSize,minRuleThickness:e.minRuleThickness})},Hu=function(e,t){if(t.displayMode){var n=["katex-display"];t.leqno&&n.push("leqno"),t.fleqn&&n.push("fleqn"),e=oe(n,[e])}return e},uf=function(e,t,n){var r=zu(n),a;if(n.output==="mathml")return q0(e,t,r,n.displayMode,!0);if(n.output==="html"){var s=$o(e,r);a=oe(["katex"],[s])}else{var o=q0(e,t,r,n.displayMode,!1),l=$o(e,r);a=oe(["katex"],[o,l])}return Hu(a,n)},hf=function(e,t,n){var r=zu(n),a=$o(e,r),s=oe(["katex"],[a]);return Hu(s,n)},df={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},Ts=function(e){var t=new he("mo",[new zt(df[e.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},ff={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},pf=new Set(["widehat","widecheck","widetilde","utilde"]),Es=function(e,t){function n(){var o=4e5,l=e.label.slice(1);if(pf.has(l)){var c=e,u=c.base.type==="ordgroup"?c.base.body.length:1,f,h,p;if(u>5)l==="widehat"||l==="widecheck"?(f=420,o=2364,p=.42,h=l+"4"):(f=312,o=2340,p=.34,h="tilde4");else{var x=[1,1,2,2,3,3][u];l==="widehat"||l==="widecheck"?(o=[0,1062,2364,2364,2364][x],f=[0,239,300,360,420][x],p=[0,.24,.3,.3,.36,.42][x],h=l+x):(o=[0,600,1033,2339,2340][x],f=[0,260,286,306,312][x],p=[0,.26,.286,.3,.306,.34][x],h="tilde"+x)}var y=new Fi(h),m=new pi([y],{width:"100%",height:me(p),viewBox:"0 0 "+o+" "+f,preserveAspectRatio:"none"});return{span:ki([],[m],t),minWidth:0,height:p}}else{var g=[],S=ff[l],[C,E,D]=S,P=D/1e3,L=C.length,M,A;if(L===1){var K=S[3];M=["hide-tail"],A=[K]}else if(L===2)M=["halfarrow-left","halfarrow-right"],A=["xMinYMin","xMaxYMin"];else if(L===3)M=["brace-left","brace-center","brace-right"],A=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+L+" children.");for(var U=0;U<L;U++){var B=new Fi(C[U]),q=new pi([B],{width:"400em",height:me(P),viewBox:"0 0 "+o+" "+D,preserveAspectRatio:A[U]+" slice"}),X=ki([M[U]],[q],t);if(L===1)return{span:X,minWidth:E,height:P};X.style.height=me(P),g.push(X)}return{span:oe(["stretchy"],g,t),minWidth:E,height:P}}}var{span:r,minWidth:a,height:s}=n();return r.height=s,r.style.height=me(s),a>0&&(r.style.minWidth=me(a)),r},mf=function(e,t,n,r,a){var s,o=e.height+e.depth+n+r;if(/fbox|color|angl/.test(t)){if(s=oe(["stretchy",t],[],a),t==="fbox"){var l=a.color&&a.getColor();l&&(s.style.borderColor=l)}}else{var c=[];/^[bx]cancel$/.test(t)&&c.push(new Go({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&c.push(new Go({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var u=new pi(c,{width:"100%",height:me(o)});s=ki([],[u],a)}return s.height=o,s.style.height=me(o),s};function et(i,e){if(!i||i.type!==e)throw new Error("Expected node of type "+e+", but got "+(i?"node of type "+i.type:String(i)));return i}function As(i){var e=Cs(i);if(!e)throw new Error("Expected node of symbol group type, but got "+(i?"node of type "+i.type:String(i)));return e}function Cs(i){return i&&(i.type==="atom"||$d.hasOwnProperty(i.type))?i:null}var Gu=i=>{if(i instanceof wn)return i;if(Wd(i)&&i.children.length===1)return Gu(i.children[0])},e0=(i,e)=>{var t,n,r;i&&i.type==="supsub"?(n=et(i.base,"accent"),t=n.base,i.base=t,r=Vd(pt(i,e)),i.base=n):(n=et(i,"accent"),t=n.base);var a=pt(t,e.havingCrampedStyle()),s=n.isShifty&&xi(t),o=0;if(s){var l,c;o=(l=(c=Gu(a))==null?void 0:c.skew)!=null?l:0}var u=n.label==="\\c",f=u?a.height+a.depth:Math.min(a.height,e.fontMetrics().xHeight),h;if(n.isStretchy)h=Es(n,e),h=ft({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"elem",elem:h,wrapperClasses:["svg-align"],wrapperStyle:o>0?{width:"calc(100% - "+me(2*o)+")",marginLeft:me(2*o)}:void 0}]});else{var p,x;n.label==="\\vec"?(p=Uu("vec",e),x=Nu.vec[1]):(p=ws({mode:n.mode,text:n.label},e,"textord"),p=Gd(p),p.italic=0,x=p.width,u&&(f+=p.depth)),h=oe(["accent-body"],[p]);var y=n.label==="\\textcircled";y&&(h.classes.push("accent-full"),f=a.height);var m=o;y||(m-=x/2),h.style.left=me(m),n.label==="\\textcircled"&&(h.style.top=".2em"),h=ft({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:-f},{type:"elem",elem:h}]})}var g=oe(["mord","accent"],[h],e);return r?(r.children[0]=g,r.height=Math.max(g.height,r.height),r.classes[0]="mord",r):g},Vu=(i,e)=>{var t=i.isStretchy?Ts(i.label):new he("mo",[Pn(i.label,i.mode)]),n=new he("mover",[St(i.base,e),t]);return n.setAttribute("accent","true"),n},gf=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(i=>"\\"+i).join("|"));we({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(i,e)=>{var t=gs(e[0]),n=!gf.test(i.funcName),r=!n||i.funcName==="\\widehat"||i.funcName==="\\widetilde"||i.funcName==="\\widecheck";return{type:"accent",mode:i.parser.mode,label:i.funcName,isStretchy:n,isShifty:r,base:t}},htmlBuilder:e0,mathmlBuilder:Vu});we({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(i,e)=>{var t=e[0],n=i.parser.mode;return n==="math"&&(i.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+i.funcName+" works only in text mode"),n="text"),{type:"accent",mode:n,label:i.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:e0,mathmlBuilder:Vu});we({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"accentUnder",mode:t.mode,label:n,base:r}},htmlBuilder:(i,e)=>{var t=pt(i.base,e),n=Es(i,e),r=i.label==="\\utilde"?.12:0,a=ft({positionType:"top",positionData:t.height,children:[{type:"elem",elem:n,wrapperClasses:["svg-align"]},{type:"kern",size:r},{type:"elem",elem:t}]});return oe(["mord","accentunder"],[a],e)},mathmlBuilder:(i,e)=>{var t=Ts(i.label),n=new he("munder",[St(i.base,e),t]);return n.setAttribute("accentunder","true"),n}});var Sa=i=>{var e=new he("mpadded",i?[i]:[]);return e.setAttribute("width","+0.6em"),e.setAttribute("lspace","0.3em"),e};we({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n,funcName:r}=i;return{type:"xArrow",mode:n.mode,label:r,body:e[0],below:t[0]}},htmlBuilder(i,e){var t=e.style,n=e.havingStyle(t.sup()),r=Ir(pt(i.body,n,e),e),a=i.label.slice(0,2)==="\\x"?"x":"cd";r.classes.push(a+"-arrow-pad");var s;i.below&&(n=e.havingStyle(t.sub()),s=Ir(pt(i.below,n,e),e),s.classes.push(a+"-arrow-pad"));var o=Es(i,e),l=-e.fontMetrics().axisHeight+.5*o.height,c=-e.fontMetrics().axisHeight-.5*o.height-.111;(r.depth>.25||i.label==="\\xleftequilibrium")&&(c-=r.depth);var u;if(s){var f=-e.fontMetrics().axisHeight+s.height+.5*o.height+.111;u=ft({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l},{type:"elem",elem:s,shift:f}]})}else u=ft({positionType:"individualShift",children:[{type:"elem",elem:r,shift:c},{type:"elem",elem:o,shift:l}]});return u.children[0].children[0].children[1].classes.push("svg-align"),oe(["mrel","x-arrow"],[u],e)},mathmlBuilder(i,e){var t=Ts(i.label);t.setAttribute("minsize",i.label.charAt(0)==="x"?"1.75em":"3.0em");var n;if(i.body){var r=Sa(St(i.body,e));if(i.below){var a=Sa(St(i.below,e));n=new he("munderover",[t,a,r])}else n=new he("mover",[t,r])}else if(i.below){var s=Sa(St(i.below,e));n=new he("munder",[t,s])}else n=Sa(),n=new he("mover",[t,n]);return n}});function Wu(i,e){var t=qt(i.body,e,!0);return oe([i.mclass],t,e)}function qu(i,e){var t,n=En(i.body,e);return i.mclass==="minner"?t=new he("mpadded",n):i.mclass==="mord"?i.isCharacterBox?(t=n[0],t.type="mi"):t=new he("mi",n):(i.isCharacterBox?(t=n[0],t.type="mo"):t=new he("mo",n),i.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):i.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):i.mclass==="mopen"||i.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):i.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}we({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"mclass",mode:t.mode,mclass:"m"+n.slice(5),body:Bt(r),isCharacterBox:xi(r)}},htmlBuilder:Wu,mathmlBuilder:qu});var Rs=i=>{var e=i.type==="ordgroup"&&i.body.length?i.body[0]:i;return e.type==="atom"&&(e.family==="bin"||e.family==="rel")?"m"+e.family:"mord"};we({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(i,e){var{parser:t}=i;return{type:"mclass",mode:t.mode,mclass:Rs(e[0]),body:Bt(e[1]),isCharacterBox:xi(e[1])}}});we({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(i,e){var{parser:t,funcName:n}=i,r=e[1],a=e[0],s;n!=="\\stackrel"?s=Rs(r):s="mrel";var o={type:"op",mode:r.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:n!=="\\stackrel",body:Bt(r)},l={type:"supsub",mode:a.mode,base:o,sup:n==="\\underset"?null:a,sub:n==="\\underset"?a:null};return{type:"mclass",mode:t.mode,mclass:s,body:[l],isCharacterBox:xi(l)}},htmlBuilder:Wu,mathmlBuilder:qu});we({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"pmb",mode:t.mode,mclass:Rs(e[0]),body:Bt(e[0])}},htmlBuilder(i,e){var t=qt(i.body,e,!0),n=oe([i.mclass],t,e);return n.style.textShadow="0.02em 0.01em 0.04px",n},mathmlBuilder(i,e){var t=En(i.body,e),n=new he("mstyle",t);return n.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),n}});var vf={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},$0=()=>({type:"styling",body:[],mode:"math",style:"display"}),j0=i=>i.type==="textord"&&i.text==="@",xf=(i,e)=>(i.type==="mathord"||i.type==="atom")&&i.text===e;function yf(i,e,t){var n=vf[i];switch(n){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(n,[e[0]],[e[1]]);case"\\uparrow":case"\\downarrow":{var r=t.callFunction("\\\\cdleft",[e[0]],[]),a={type:"atom",text:n,mode:"math",family:"rel"},s=t.callFunction("\\Big",[a],[]),o=t.callFunction("\\\\cdright",[e[1]],[]),l={type:"ordgroup",mode:"math",body:[r,s,o]};return t.callFunction("\\\\cdparent",[l],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var c={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[c],[])}default:return{type:"textord",text:" ",mode:"math"}}}function bf(i){var e=[];for(i.gullet.beginGroup(),i.gullet.macros.set("\\cr","\\\\\\relax"),i.gullet.beginGroup();;){e.push(i.parseExpression(!1,"\\\\")),i.gullet.endGroup(),i.gullet.beginGroup();var t=i.fetch().text;if(t==="&"||t==="\\\\")i.consume();else if(t==="\\end"){e[e.length-1].length===0&&e.pop();break}else throw new ce("Expected \\\\ or \\cr or \\end",i.nextToken)}for(var n=[],r=[n],a=0;a<e.length;a++){for(var s=e[a],o=$0(),l=0;l<s.length;l++)if(!j0(s[l]))o.body.push(s[l]);else{n.push(o),l+=1;var c=As(s[l]).text,u=new Array(2);if(u[0]={type:"ordgroup",mode:"math",body:[]},u[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(c))if("<>AV".includes(c))for(var f=0;f<2;f++){for(var h=!0,p=l+1;p<s.length;p++){if(xf(s[p],c)){h=!1,l=p;break}if(j0(s[p]))throw new ce("Missing a "+c+" character to complete a CD arrow.",s[p]);u[f].body.push(s[p])}if(h)throw new ce("Missing a "+c+" character to complete a CD arrow.",s[l])}else throw new ce('Expected one of "<>AV=|." after @',s[l]);var x=yf(c,u,i),y={type:"styling",body:[x],mode:"math",style:"display"};n.push(y),o=$0()}a%2===0?n.push(o):n.shift(),n=[],r.push(n)}i.gullet.endGroup(),i.gullet.endGroup();var m=new Array(r[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:r,arraystretch:1,addJot:!0,rowGaps:[null],cols:m,colSeparationType:"CD",hLinesBeforeRow:new Array(r.length+1).fill([])}}we({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"cdlabel",mode:t.mode,side:n.slice(4),label:e[0]}},htmlBuilder(i,e){var t=e.havingStyle(e.style.sup()),n=Ir(pt(i.label,t,e),e);return n.classes.push("cd-label-"+i.side),n.style.bottom=me(.8-n.depth),n.height=0,n.depth=0,n},mathmlBuilder(i,e){var t=new he("mrow",[St(i.label,e)]);return t=new he("mpadded",[t]),t.setAttribute("width","0"),i.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new he("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});we({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(i,e){var{parser:t}=i;return{type:"cdlabelparent",mode:t.mode,fragment:e[0]}},htmlBuilder(i,e){var t=Ir(pt(i.fragment,e),e);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(i,e){return new he("mrow",[St(i.fragment,e)])}});we({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(i,e){for(var{parser:t}=i,n=et(e[0],"ordgroup"),r=n.body,a="",s=0;s<r.length;s++){var o=et(r[s],"textord");a+=o.text}var l=parseInt(a),c;if(isNaN(l))throw new ce("\\@char has non-numeric argument "+a);if(l<0||l>=1114111)throw new ce("\\@char with invalid code point "+a);return l<=65535?c=String.fromCharCode(l):(l-=65536,c=String.fromCharCode((l>>10)+55296,(l&1023)+56320)),{type:"textord",mode:t.mode,text:c}}});var Xu=(i,e)=>{var t=qt(i.body,e.withColor(i.color),!1);return bi(t)},Yu=(i,e)=>{var t=En(i.body,e.withColor(i.color)),n=new he("mstyle",t);return n.setAttribute("mathcolor",i.color),n};we({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(i,e){var{parser:t}=i,n=et(e[0],"color-token").color,r=e[1];return{type:"color",mode:t.mode,color:n,body:Bt(r)}},htmlBuilder:Xu,mathmlBuilder:Yu});we({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(i,e){var{parser:t,breakOnTokenText:n}=i,r=et(e[0],"color-token").color;t.gullet.macros.set("\\current@color",r);var a=t.parseExpression(!0,n);return{type:"color",mode:t.mode,color:r,body:a}},htmlBuilder:Xu,mathmlBuilder:Yu});we({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(i,e,t){var{parser:n}=i,r=n.gullet.future().text==="["?n.parseSizeGroup(!0):null,a=!n.settings.displayMode||!n.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:n.mode,newLine:a,size:r&&et(r,"size").value}},htmlBuilder(i,e){var t=oe(["mspace"],[],e);return i.newLine&&(t.classes.push("newline"),i.size&&(t.style.marginTop=me(It(i.size,e)))),t},mathmlBuilder(i,e){var t=new he("mspace");return i.newLine&&(t.setAttribute("linebreak","newline"),i.size&&t.setAttribute("height",me(It(i.size,e)))),t}});var jo={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},$u=i=>{var e=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(e))throw new ce("Expected a control sequence",i);return e},_f=i=>{var e=i.gullet.popToken();return e.text==="="&&(e=i.gullet.popToken(),e.text===" "&&(e=i.gullet.popToken())),e},ju=(i,e,t,n)=>{var r=i.gullet.macros.get(t.text);r==null&&(t.noexpand=!0,r={tokens:[t],numArgs:0,unexpandable:!i.gullet.isExpandable(t.text)}),i.gullet.macros.set(e,r,n)};we({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(i){var{parser:e,funcName:t}=i;e.consumeSpaces();var n=e.fetch();if(jo[n.text])return(t==="\\global"||t==="\\\\globallong")&&(n.text=jo[n.text]),et(e.parseFunction(),"internal");throw new ce("Invalid token after macro prefix",n)}});we({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=e.gullet.popToken(),r=n.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(r))throw new ce("Expected a control sequence",n);for(var a=0,s,o=[[]];e.gullet.future().text!=="{";)if(n=e.gullet.popToken(),n.text==="#"){if(e.gullet.future().text==="{"){s=e.gullet.future(),o[a].push("{");break}if(n=e.gullet.popToken(),!/^[1-9]$/.test(n.text))throw new ce('Invalid argument number "'+n.text+'"');if(parseInt(n.text)!==a+1)throw new ce('Argument number "'+n.text+'" out of order');a++,o.push([])}else{if(n.text==="EOF")throw new ce("Expected a macro definition");o[a].push(n.text)}var{tokens:l}=e.gullet.consumeArg();return s&&l.unshift(s),(t==="\\edef"||t==="\\xdef")&&(l=e.gullet.expandTokens(l),l.reverse()),e.gullet.macros.set(r,{tokens:l,numArgs:a,delimiters:o},t===jo[t]),{type:"internal",mode:e.mode}}});we({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=$u(e.gullet.popToken());e.gullet.consumeSpaces();var r=_f(e);return ju(e,n,r,t==="\\\\globallet"),{type:"internal",mode:e.mode}}});we({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i){var{parser:e,funcName:t}=i,n=$u(e.gullet.popToken()),r=e.gullet.popToken(),a=e.gullet.popToken();return ju(e,n,a,t==="\\\\globalfuture"),e.gullet.pushToken(a),e.gullet.pushToken(r),{type:"internal",mode:e.mode}}});var Zr=function(e,t,n){var r=Et.math[e]&&Et.math[e].replace,a=jl(r||e,t,n);if(!a)throw new Error("Unsupported symbol "+e+" and font size "+t+".");return a},t0=function(e,t,n,r){var a=n.havingBaseStyle(t),s=oe(r.concat(a.sizingClasses(n)),[e],n),o=a.sizeMultiplier/n.sizeMultiplier;return s.height*=o,s.depth*=o,s.maxFontSize=a.sizeMultiplier,s},Ku=function(e,t,n){var r=t.havingBaseStyle(n),a=(1-t.sizeMultiplier/r.sizeMultiplier)*t.fontMetrics().axisHeight;e.classes.push("delimcenter"),e.style.top=me(a),e.height-=a,e.depth+=a},Mf=function(e,t,n,r,a,s){var o=un(e,"Main-Regular",a,r),l=t0(o,t,r,s);return Ku(l,r,t),l},Sf=function(e,t,n,r){return un(e,"Size"+t+"-Regular",n,r)},Zu=function(e,t,n,r,a,s){var o=Sf(e,t,a,r),l=t0(oe(["delimsizing","size"+t],[o],r),$e.TEXT,r,s);return n&&Ku(l,r,$e.TEXT),l},Ys=function(e,t,n){var r;t==="Size1-Regular"?r="delim-size1":r="delim-size4";var a=oe(["delimsizinginner",r],[oe([],[un(e,t,n)])]);return{type:"elem",elem:a}},$s=function(e,t,n){var r=Wn["Size4-Regular"][e.charCodeAt(0)]?Wn["Size4-Regular"][e.charCodeAt(0)][4]:Wn["Size1-Regular"][e.charCodeAt(0)][4],a=new Fi("inner",Fd(e,Math.round(1e3*t))),s=new pi([a],{width:me(r),height:me(t),style:"width:"+me(r),viewBox:"0 0 "+1e3*r+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),o=ki([],[s],n);return o.height=t,o.style.height=me(t),o.style.width=me(r),{type:"elem",elem:o}},Ko=.008,wa={type:"kern",size:-1*Ko},wf=new Set(["|","\\lvert","\\rvert","\\vert"]),Tf=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),Ju=function(e,t,n,r,a,s){var o,l,c,u,f="",h=0;o=c=u=e,l=null;var p="Size1-Regular";e==="\\uparrow"?c=u="⏐":e==="\\Uparrow"?c=u="‖":e==="\\downarrow"?o=c="⏐":e==="\\Downarrow"?o=c="‖":e==="\\updownarrow"?(o="\\uparrow",c="⏐",u="\\downarrow"):e==="\\Updownarrow"?(o="\\Uparrow",c="‖",u="\\Downarrow"):wf.has(e)?(c="∣",f="vert",h=333):Tf.has(e)?(c="∥",f="doublevert",h=556):e==="["||e==="\\lbrack"?(o="⎡",c="⎢",u="⎣",p="Size4-Regular",f="lbrack",h=667):e==="]"||e==="\\rbrack"?(o="⎤",c="⎥",u="⎦",p="Size4-Regular",f="rbrack",h=667):e==="\\lfloor"||e==="⌊"?(c=o="⎢",u="⎣",p="Size4-Regular",f="lfloor",h=667):e==="\\lceil"||e==="⌈"?(o="⎡",c=u="⎢",p="Size4-Regular",f="lceil",h=667):e==="\\rfloor"||e==="⌋"?(c=o="⎥",u="⎦",p="Size4-Regular",f="rfloor",h=667):e==="\\rceil"||e==="⌉"?(o="⎤",c=u="⎥",p="Size4-Regular",f="rceil",h=667):e==="("||e==="\\lparen"?(o="⎛",c="⎜",u="⎝",p="Size4-Regular",f="lparen",h=875):e===")"||e==="\\rparen"?(o="⎞",c="⎟",u="⎠",p="Size4-Regular",f="rparen",h=875):e==="\\{"||e==="\\lbrace"?(o="⎧",l="⎨",u="⎩",c="⎪",p="Size4-Regular"):e==="\\}"||e==="\\rbrace"?(o="⎫",l="⎬",u="⎭",c="⎪",p="Size4-Regular"):e==="\\lgroup"||e==="⟮"?(o="⎧",u="⎩",c="⎪",p="Size4-Regular"):e==="\\rgroup"||e==="⟯"?(o="⎫",u="⎭",c="⎪",p="Size4-Regular"):e==="\\lmoustache"||e==="⎰"?(o="⎧",u="⎭",c="⎪",p="Size4-Regular"):(e==="\\rmoustache"||e==="⎱")&&(o="⎫",u="⎩",c="⎪",p="Size4-Regular");var x=Zr(o,p,a),y=x.height+x.depth,m=Zr(c,p,a),g=m.height+m.depth,S=Zr(u,p,a),C=S.height+S.depth,E=0,D=1;if(l!==null){var P=Zr(l,p,a);E=P.height+P.depth,D=2}var L=y+C+E,M=Math.max(0,Math.ceil((t-L)/(D*g))),A=L+M*D*g,K=r.fontMetrics().axisHeight;n&&(K*=r.sizeMultiplier);var U=A/2-K,B=[];if(f.length>0){var q=A-y-C,X=Math.round(A*1e3),W=kd(f,Math.round(q*1e3)),Y=new Fi(f,W),V=(h/1e3).toFixed(3)+"em",se=(X/1e3).toFixed(3)+"em",re=new pi([Y],{width:V,height:se,viewBox:"0 0 "+h+" "+X}),xe=ki([],[re],r);xe.height=X/1e3,xe.style.width=V,xe.style.height=se,B.push({type:"elem",elem:xe})}else{if(B.push(Ys(u,p,a)),B.push(wa),l===null){var _e=A-y-C+2*Ko;B.push($s(c,_e,r))}else{var ye=(A-y-C-E)/2+2*Ko;B.push($s(c,ye,r)),B.push(wa),B.push(Ys(l,p,a)),B.push(wa),B.push($s(c,ye,r))}B.push(wa),B.push(Ys(o,p,a))}var Oe=r.havingBaseStyle($e.TEXT),ut=ft({positionType:"bottom",positionData:U,children:B});return t0(oe(["delimsizing","mult"],[ut],Oe),$e.TEXT,r,s)},js=80,Ks=.08,Zs=function(e,t,n,r,a){var s=Ud(e,r,n),o=new Fi(e,s),l=new pi([o],{width:"400em",height:me(t),viewBox:"0 0 400000 "+n,preserveAspectRatio:"xMinYMin slice"});return ki(["hide-tail"],[l],a)},Ef=function(e,t){var n=t.havingBaseSizing(),r=ih("\\surd",e*n.sizeMultiplier,nh,n),a=n.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),o,l=0,c=0,u=0,f;return r.type==="small"?(u=1e3+1e3*s+js,e<1?a=1:e<1.4&&(a=.7),l=(1+s+Ks)/a,c=(1+s)/a,o=Zs("sqrtMain",l,u,s,t),o.style.minWidth="0.853em",f=.833/a):r.type==="large"?(u=(1e3+js)*ta[r.size],c=(ta[r.size]+s)/a,l=(ta[r.size]+s+Ks)/a,o=Zs("sqrtSize"+r.size,l,u,s,t),o.style.minWidth="1.02em",f=1/a):(l=e+s+Ks,c=e+s,u=Math.floor(1e3*e+s)+js,o=Zs("sqrtTall",l,u,s,t),o.style.minWidth="0.742em",f=1.056),o.height=c,o.style.height=me(l),{span:o,advanceWidth:f,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*a}},Qu=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),Af=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),eh=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),ta=[0,1.2,1.8,2.4,3],th=function(e,t,n,r,a){if(e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle"),Qu.has(e)||eh.has(e))return Zu(e,t,!1,n,r,a);if(Af.has(e))return Ju(e,ta[t],!1,n,r,a);throw new ce("Illegal delimiter: '"+e+"'")},Cf=[{type:"small",style:$e.SCRIPTSCRIPT},{type:"small",style:$e.SCRIPT},{type:"small",style:$e.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],Rf=[{type:"small",style:$e.SCRIPTSCRIPT},{type:"small",style:$e.SCRIPT},{type:"small",style:$e.TEXT},{type:"stack"}],nh=[{type:"small",style:$e.SCRIPTSCRIPT},{type:"small",style:$e.SCRIPT},{type:"small",style:$e.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],Pf=function(e){if(e.type==="small")return"Main-Regular";if(e.type==="large")return"Size"+e.size+"-Regular";if(e.type==="stack")return"Size4-Regular";var t=e.type;throw new Error("Add support for delim type '"+t+"' here.")},ih=function(e,t,n,r){for(var a=Math.min(2,3-r.style.size),s=a;s<n.length;s++){var o=n[s];if(o.type==="stack")break;var l=Zr(e,Pf(o),"math"),c=l.height+l.depth;if(o.type==="small"){var u=r.havingBaseStyle(o.style);c*=u.sizeMultiplier}if(c>t)return o}return n[n.length-1]},Zo=function(e,t,n,r,a,s){e==="<"||e==="\\lt"||e==="⟨"?e="\\langle":(e===">"||e==="\\gt"||e==="⟩")&&(e="\\rangle");var o;eh.has(e)?o=Cf:Qu.has(e)?o=nh:o=Rf;var l=ih(e,t,o,r);return l.type==="small"?Mf(e,l.style,n,r,a,s):l.type==="large"?Zu(e,l.size,n,r,a,s):Ju(e,t,n,r,a,s)},Js=function(e,t,n,r,a,s){var o=r.fontMetrics().axisHeight*r.sizeMultiplier,l=901,c=5/r.fontMetrics().ptPerEm,u=Math.max(t-o,n+o),f=Math.max(u/500*l,2*u-c);return Zo(e,f,!0,r,a,s)},K0={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},Df=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function Ps(i,e){var t=Cs(i);if(t&&Df.has(t.text))return t;throw t?new ce("Invalid delimiter '"+t.text+"' after '"+e.funcName+"'",i):new ce("Invalid delimiter type '"+i.type+"'",i)}we({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(i,e)=>{var t=Ps(e[0],i);return{type:"delimsizing",mode:i.parser.mode,size:K0[i.funcName].size,mclass:K0[i.funcName].mclass,delim:t.text}},htmlBuilder:(i,e)=>i.delim==="."?oe([i.mclass]):th(i.delim,i.size,e,i.mode,[i.mclass]),mathmlBuilder:i=>{var e=[];i.delim!=="."&&e.push(Pn(i.delim,i.mode));var t=new he("mo",e);i.mclass==="mopen"||i.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var n=me(ta[i.size]);return t.setAttribute("minsize",n),t.setAttribute("maxsize",n),t}});function Z0(i){if(!i.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}we({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=i.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new ce("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:i.parser.mode,delim:Ps(e[0],i).text,color:t}}});we({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Ps(e[0],i),n=i.parser;++n.leftrightDepth;var r=n.parseExpression(!1);--n.leftrightDepth,n.expect("\\right",!1);var a=et(n.parseFunction(),"leftright-right");return{type:"leftright",mode:n.mode,body:r,left:t.text,right:a.delim,rightColor:a.color}},htmlBuilder:(i,e)=>{Z0(i);for(var t=qt(i.body,e,!0,["mopen","mclose"]),n=0,r=0,a=!1,s=0;s<t.length;s++)t[s].isMiddle?a=!0:(n=Math.max(t[s].height,n),r=Math.max(t[s].depth,r));n*=e.sizeMultiplier,r*=e.sizeMultiplier;var o;if(i.left==="."?o=ia(e,["mopen"]):o=Js(i.left,n,r,e,i.mode,["mopen"]),t.unshift(o),a)for(var l=1;l<t.length;l++){var c=t[l],u=c.isMiddle;u&&(t[l]=Js(u.delim,n,r,u.options,i.mode,[]))}var f;if(i.right===".")f=ia(e,["mclose"]);else{var h=i.rightColor?e.withColor(i.rightColor):e;f=Js(i.right,n,r,h,i.mode,["mclose"])}return t.push(f),oe(["minner"],t,e)},mathmlBuilder:(i,e)=>{Z0(i);var t=En(i.body,e);if(i.left!=="."){var n=new he("mo",[Pn(i.left,i.mode)]);n.setAttribute("fence","true"),t.unshift(n)}if(i.right!=="."){var r=new he("mo",[Pn(i.right,i.mode)]);r.setAttribute("fence","true"),i.rightColor&&r.setAttribute("mathcolor",i.rightColor),t.push(r)}return Jl(t)}});we({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var t=Ps(e[0],i);if(!i.parser.leftrightDepth)throw new ce("\\middle without preceding \\left",t);return{type:"middle",mode:i.parser.mode,delim:t.text}},htmlBuilder:(i,e)=>{var t;if(i.delim===".")t=ia(e,[]);else{t=th(i.delim,1,e,i.mode,[]);var n={delim:i.delim,options:e};t.isMiddle=n}return t},mathmlBuilder:(i,e)=>{var t=i.delim==="\\vert"||i.delim==="|"?Pn("|","text"):Pn(i.delim,i.mode),n=new he("mo",[t]);return n.setAttribute("fence","true"),n.setAttribute("lspace","0.05em"),n.setAttribute("rspace","0.05em"),n}});var n0=(i,e)=>{var t=Ir(pt(i.body,e),e),n=i.label.slice(1),r=e.sizeMultiplier,a,s=0,o=xi(i.body);if(n==="sout")a=oe(["stretchy","sout"]),a.height=e.fontMetrics().defaultRuleThickness/r,s=-.5*e.fontMetrics().xHeight;else if(n==="phase"){var l=It({number:.6,unit:"pt"},e),c=It({number:.35,unit:"ex"},e),u=e.havingBaseSizing();r=r/u.sizeMultiplier;var f=t.height+t.depth+l+c;t.style.paddingLeft=me(f/2+l);var h=Math.floor(1e3*f*r),p=Ld(h),x=new pi([new Fi("phase",p)],{width:"400em",height:me(h/1e3),viewBox:"0 0 400000 "+h,preserveAspectRatio:"xMinYMin slice"});a=ki(["hide-tail"],[x],e),a.style.height=me(f),s=t.depth+l+c}else{/cancel/.test(n)?o||t.classes.push("cancel-pad"):n==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var y=0,m=0,g=0;/box/.test(n)?(g=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness),y=e.fontMetrics().fboxsep+(n==="colorbox"?0:g),m=y):n==="angl"?(g=Math.max(e.fontMetrics().defaultRuleThickness,e.minRuleThickness),y=4*g,m=Math.max(0,.25-t.depth)):(y=o?.2:0,m=y),a=mf(t,n,y,m,e),/fbox|boxed|fcolorbox/.test(n)?(a.style.borderStyle="solid",a.style.borderWidth=me(g)):n==="angl"&&g!==.049&&(a.style.borderTopWidth=me(g),a.style.borderRightWidth=me(g)),s=t.depth+m,i.backgroundColor&&(a.style.backgroundColor=i.backgroundColor,i.borderColor&&(a.style.borderColor=i.borderColor))}var S;if(i.backgroundColor)S=ft({positionType:"individualShift",children:[{type:"elem",elem:a,shift:s},{type:"elem",elem:t,shift:0}]});else{var C=/cancel|phase/.test(n)?["svg-align"]:[];S=ft({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:a,shift:s,wrapperClasses:C}]})}return/cancel/.test(n)&&(S.height=t.height,S.depth=t.depth),/cancel/.test(n)&&!o?oe(["mord","cancel-lap"],[S],e):oe(["mord"],[S],e)},i0=(i,e)=>{var t=0,n=new he(i.label.includes("colorbox")?"mpadded":"menclose",[St(i.body,e)]);switch(i.label){case"\\cancel":n.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":n.setAttribute("notation","downdiagonalstrike");break;case"\\phase":n.setAttribute("notation","phasorangle");break;case"\\sout":n.setAttribute("notation","horizontalstrike");break;case"\\fbox":n.setAttribute("notation","box");break;case"\\angl":n.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=e.fontMetrics().fboxsep*e.fontMetrics().ptPerEm,n.setAttribute("width","+"+2*t+"pt"),n.setAttribute("height","+"+2*t+"pt"),n.setAttribute("lspace",t+"pt"),n.setAttribute("voffset",t+"pt"),i.label==="\\fcolorbox"){var r=Math.max(e.fontMetrics().fboxrule,e.minRuleThickness);n.setAttribute("style","border: "+r+"em solid "+String(i.borderColor))}break;case"\\xcancel":n.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return i.backgroundColor&&n.setAttribute("mathbackground",i.backgroundColor),n};we({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=et(e[0],"color-token").color,s=e[1];return{type:"enclose",mode:n.mode,label:r,backgroundColor:a,body:s}},htmlBuilder:n0,mathmlBuilder:i0});we({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(i,e,t){var{parser:n,funcName:r}=i,a=et(e[0],"color-token").color,s=et(e[1],"color-token").color,o=e[2];return{type:"enclose",mode:n.mode,label:r,backgroundColor:s,borderColor:a,body:o}},htmlBuilder:n0,mathmlBuilder:i0});we({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\fbox",body:e[0]}}});we({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"enclose",mode:t.mode,label:n,body:r}},htmlBuilder:n0,mathmlBuilder:i0});we({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"enclose",mode:t.mode,label:"\\angl",body:e[0]}}});var rh={};function Jn(i){for(var{type:e,names:t,props:n,handler:r,htmlBuilder:a,mathmlBuilder:s}=i,o={type:e,numArgs:n.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:r},l=0;l<t.length;++l)rh[t[l]]=o;a&&(ps[e]=a),s&&(ms[e]=s)}var ah={};function w(i,e){ah[i]=e}class mn{constructor(e,t,n){this.lexer=e,this.start=t,this.end=n}static range(e,t){return t?!e||!e.loc||!t.loc||e.loc.lexer!==t.loc.lexer?null:new mn(e.loc.lexer,e.loc.start,t.loc.end):e&&e.loc}}class Mn{constructor(e,t){this.text=e,this.loc=t}range(e,t){return new Mn(t,mn.range(this,e))}}function J0(i){var e=[];i.consumeSpaces();var t=i.fetch().text;for(t==="\\relax"&&(i.consume(),i.consumeSpaces(),t=i.fetch().text);t==="\\hline"||t==="\\hdashline";)i.consume(),e.push(t==="\\hdashline"),i.consumeSpaces(),t=i.fetch().text;return e}var Ds=i=>{var e=i.parser.settings;if(!e.displayMode)throw new ce("{"+i.envName+"} can be used only in display mode.")},If=new Set(["gather","gather*"]);function r0(i){if(!i.includes("ed"))return!i.includes("*")}function zi(i,e,t){var{hskipBeforeAndAfter:n,addJot:r,cols:a,arraystretch:s,colSeparationType:o,autoTag:l,singleRow:c,emptySingleRow:u,maxNumCols:f,leqno:h}=e;if(i.gullet.beginGroup(),c||i.gullet.macros.set("\\cr","\\\\\\relax"),!s){var p=i.gullet.expandMacroAsText("\\arraystretch");if(p==null)s=1;else if(s=parseFloat(p),!s||s<0)throw new ce("Invalid \\arraystretch: "+p)}i.gullet.beginGroup();var x=[],y=[x],m=[],g=[],S=l!=null?[]:void 0;function C(){l&&i.gullet.macros.set("\\@eqnsw","1",!0)}function E(){S&&(i.gullet.macros.get("\\df@tag")?(S.push(i.subparse([new Mn("\\df@tag")])),i.gullet.macros.set("\\df@tag",void 0,!0)):S.push(!!l&&i.gullet.macros.get("\\@eqnsw")==="1"))}for(C(),g.push(J0(i));;){var D=i.parseExpression(!1,c?"\\end":"\\\\");i.gullet.endGroup(),i.gullet.beginGroup();var P={type:"ordgroup",mode:i.mode,body:D};t&&(P={type:"styling",mode:i.mode,style:t,body:[P]}),x.push(P);var L=i.fetch().text;if(L==="&"){if(f&&x.length===f){if(c||o)throw new ce("Too many tab characters: &",i.nextToken);i.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}i.consume()}else if(L==="\\end"){E(),x.length===1&&P.type==="styling"&&P.body.length===1&&P.body[0].type==="ordgroup"&&P.body[0].body.length===0&&(y.length>1||!u)&&y.pop(),g.length<y.length+1&&g.push([]);break}else if(L==="\\\\"){i.consume();var M=void 0;i.gullet.future().text!==" "&&(M=i.parseSizeGroup(!0)),m.push(M?M.value:null),E(),g.push(J0(i)),x=[],y.push(x),C()}else throw new ce("Expected & or \\\\ or \\cr or \\end",i.nextToken)}return i.gullet.endGroup(),i.gullet.endGroup(),{type:"array",mode:i.mode,addJot:r,arraystretch:s,body:y,cols:a,rowGaps:m,hskipBeforeAndAfter:n,hLinesBeforeRow:g,colSeparationType:o,tags:S,leqno:h}}function a0(i){return i.slice(0,1)==="d"?"display":"text"}var Qn=function(e,t){var n,r,a=e.body.length,s=e.hLinesBeforeRow,o=0,l=new Array(a),c=[],u=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),f=1/t.fontMetrics().ptPerEm,h=5*f;if(e.colSeparationType&&e.colSeparationType==="small"){var p=t.havingStyle($e.SCRIPT).sizeMultiplier;h=.2778*(p/t.sizeMultiplier)}var x=e.colSeparationType==="CD"?It({number:3,unit:"ex"},t):12*f,y=3*f,m=e.arraystretch*x,g=.7*m,S=.3*m,C=0;function E(Q){for(var Ae=0;Ae<Q.length;++Ae)Ae>0&&(C+=.25),c.push({pos:C,isDashed:Q[Ae]})}for(E(s[0]),n=0;n<e.body.length;++n){var D=e.body[n],P=g,L=S;o<D.length&&(o=D.length);var M=new Array(D.length);for(r=0;r<D.length;++r){var A=pt(D[r],t);L<A.depth&&(L=A.depth),P<A.height&&(P=A.height),M[r]=A}var K=e.rowGaps[n],U=0;K&&(U=It(K,t),U>0&&(U+=S,L<U&&(L=U),U=0)),e.addJot&&(L+=y),M.height=P,M.depth=L,C+=P,M.pos=C,C+=L+U,l[n]=M,E(s[n+1])}var B=C/2+t.fontMetrics().axisHeight,q=e.cols||[],X=[],W,Y,V=[];if(e.tags&&e.tags.some(Q=>Q))for(n=0;n<a;++n){var se=l[n],re=se.pos-B,xe=e.tags[n],_e=void 0;xe===!0?_e=oe(["eqn-num"],[],t):xe===!1?_e=oe([],[],t):_e=oe([],qt(xe,t,!0),t),_e.depth=se.depth,_e.height=se.height,V.push({type:"elem",elem:_e,shift:re})}for(r=0,Y=0;r<o||Y<q.length;++r,++Y){for(var ye,Oe=q[Y],ut=!0;((Ve=Oe)==null?void 0:Ve.type)==="separator";){var Ve;if(ut||(W=oe(["arraycolsep"],[]),W.style.width=me(t.fontMetrics().doubleRuleSep),X.push(W)),Oe.separator==="|"||Oe.separator===":"){var J=Oe.separator==="|"?"solid":"dashed",ae=oe(["vertical-separator"],[],t);ae.style.height=me(C),ae.style.borderRightWidth=me(u),ae.style.borderRightStyle=J,ae.style.margin="0 "+me(-u/2);var de=C-B;de&&(ae.style.verticalAlign=me(-de)),X.push(ae)}else throw new ce("Invalid separator type: "+Oe.separator);Y++,Oe=q[Y],ut=!1}if(!(r>=o)){var He=void 0;if(r>0||e.hskipBeforeAndAfter){var Be,We;He=(Be=(We=Oe)==null?void 0:We.pregap)!=null?Be:h,He!==0&&(W=oe(["arraycolsep"],[]),W.style.width=me(He),X.push(W))}var Ft=[];for(n=0;n<a;++n){var rt=l[n],ot=rt[r];if(ot){var mt=rt.pos-B;ot.depth=rt.depth,ot.height=rt.height,Ft.push({type:"elem",elem:ot,shift:mt})}}var Je=ft({positionType:"individualShift",children:Ft}),Rt=oe(["col-align-"+(((ye=Oe)==null?void 0:ye.align)||"c")],[Je]);if(X.push(Rt),r<o-1||e.hskipBeforeAndAfter){var F,Pt;He=(F=(Pt=Oe)==null?void 0:Pt.postgap)!=null?F:h,He!==0&&(W=oe(["arraycolsep"],[]),W.style.width=me(He),X.push(W))}}}var st=oe(["mtable"],X);if(c.length>0){for(var xt=Dr("hline",t,u),Pe=Dr("hdashline",t,u),R=[{type:"elem",elem:st,shift:0}];c.length>0;){var b=c.pop(),z=b.pos-B;b.isDashed?R.push({type:"elem",elem:Pe,shift:z}):R.push({type:"elem",elem:xt,shift:z})}st=ft({positionType:"individualShift",children:R})}if(V.length===0)return oe(["mord"],[st],t);var te=ft({positionType:"individualShift",children:V}),ne=oe(["tag"],[te],t);return bi([st,ne])},Lf={c:"center ",l:"left ",r:"right "},ei=function(e,t){for(var n=[],r=new he("mtd",[],["mtr-glue"]),a=new he("mtd",[],["mml-eqn-num"]),s=0;s<e.body.length;s++){for(var o=e.body[s],l=[],c=0;c<o.length;c++)l.push(new he("mtd",[St(o[c],t)]));e.tags&&e.tags[s]&&(l.unshift(r),l.push(r),e.leqno?l.unshift(a):l.push(a)),n.push(new he("mtr",l))}var u=new he("mtable",n),f=e.arraystretch===.5?.1:.16+e.arraystretch-1+(e.addJot?.09:0);u.setAttribute("rowspacing",me(f));var h="",p="";if(e.cols&&e.cols.length>0){var x=e.cols,y="",m=!1,g=0,S=x.length;x[0].type==="separator"&&(h+="top ",g=1),x[x.length-1].type==="separator"&&(h+="bottom ",S-=1);for(var C=g;C<S;C++){var E=x[C];E.type==="align"?(p+=Lf[E.align],m&&(y+="none "),m=!0):E.type==="separator"&&m&&(y+=E.separator==="|"?"solid ":"dashed ",m=!1)}u.setAttribute("columnalign",p.trim()),/[sd]/.test(y)&&u.setAttribute("columnlines",y.trim())}if(e.colSeparationType==="align"){for(var D=e.cols||[],P="",L=1;L<D.length;L++)P+=L%2?"0em ":"1em ";u.setAttribute("columnspacing",P.trim())}else e.colSeparationType==="alignat"||e.colSeparationType==="gather"?u.setAttribute("columnspacing","0em"):e.colSeparationType==="small"?u.setAttribute("columnspacing","0.2778em"):e.colSeparationType==="CD"?u.setAttribute("columnspacing","0.5em"):u.setAttribute("columnspacing","1em");var M="",A=e.hLinesBeforeRow;h+=A[0].length>0?"left ":"",h+=A[A.length-1].length>0?"right ":"";for(var K=1;K<A.length-1;K++)M+=A[K].length===0?"none ":A[K][0]?"dashed ":"solid ";return/[sd]/.test(M)&&u.setAttribute("rowlines",M.trim()),h!==""&&(u=new he("menclose",[u]),u.setAttribute("notation",h.trim())),e.arraystretch&&e.arraystretch<1&&(u=new he("mstyle",[u]),u.setAttribute("scriptlevel","1")),u},sh=function(e,t){e.envName.includes("ed")||Ds(e);var n=[],r=e.envName.includes("at")?"alignat":"align",a=e.envName==="split",s=zi(e.parser,{cols:n,addJot:!0,autoTag:a?void 0:r0(e.envName),emptySingleRow:!0,colSeparationType:r,maxNumCols:a?2:void 0,leqno:e.parser.settings.leqno},"display"),o=0,l=0,c={type:"ordgroup",mode:e.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var u="",f=0;f<t[0].body.length;f++){var h=et(t[0].body[f],"textord");u+=h.text}o=Number(u),l=o*2}var p=!l;s.body.forEach(function(g){for(var S=1;S<g.length;S+=2){var C=et(g[S],"styling"),E=et(C.body[0],"ordgroup");E.body.unshift(c)}if(p)l<g.length&&(l=g.length);else{var D=g.length/2;if(o<D)throw new ce("Too many math in a row: "+("expected "+o+", but got "+D),g[0])}});for(var x=0;x<l;++x){var y="r",m=0;x%2===1?y="l":x>0&&p&&(m=1),n[x]={type:"align",align:y,pregap:m,postgap:0}}return s.colSeparationType=p?"align":"alignat",s};Jn({type:"array",names:["array","darray"],props:{numArgs:1},handler(i,e){var t=Cs(e[0]),n=t?[e[0]]:et(e[0],"ordgroup").body,r=n.map(function(s){var o=As(s),l=o.text;if("lcr".includes(l))return{type:"align",align:l};if(l==="|")return{type:"separator",separator:"|"};if(l===":")return{type:"separator",separator:":"};throw new ce("Unknown column alignment: "+l,s)}),a={cols:r,hskipBeforeAndAfter:!0,maxNumCols:r.length};return zi(i.parser,a,a0(i.envName))},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(i){var e={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[i.envName.replace("*","")],t="c",n={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(i.envName.charAt(i.envName.length-1)==="*"){var r=i.parser;if(r.consumeSpaces(),r.fetch().text==="["){if(r.consume(),r.consumeSpaces(),t=r.fetch().text,!"lcr".includes(t))throw new ce("Expected l or c or r",r.nextToken);r.consume(),r.consumeSpaces(),r.expect("]"),r.consume(),n.cols=[{type:"align",align:t}]}}var a=zi(i.parser,n,a0(i.envName)),s=Math.max(0,...a.body.map(o=>o.length));return a.cols=new Array(s).fill({type:"align",align:t}),e?{type:"leftright",mode:i.mode,body:[a],left:e[0],right:e[1],rightColor:void 0}:a},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(i){var e={arraystretch:.5},t=zi(i.parser,e,"script");return t.colSeparationType="small",t},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["subarray"],props:{numArgs:1},handler(i,e){var t=Cs(e[0]),n=t?[e[0]]:et(e[0],"ordgroup").body,r=n.map(function(o){var l=As(o),c=l.text;if("lc".includes(c))return{type:"align",align:c};throw new ce("Unknown column alignment: "+c,o)});if(r.length>1)throw new ce("{subarray} can contain only one column");var a={cols:r,hskipBeforeAndAfter:!1,arraystretch:.5},s=zi(i.parser,a,"script");if(s.body.length>0&&s.body[0].length>1)throw new ce("{subarray} can contain only one column");return s},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(i){var e={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=zi(i.parser,e,a0(i.envName));return{type:"leftright",mode:i.mode,body:[t],left:i.envName.includes("r")?".":"\\{",right:i.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:sh,htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(i){If.has(i.envName)&&Ds(i);var e={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:r0(i.envName),emptySingleRow:!0,leqno:i.parser.settings.leqno};return zi(i.parser,e,"display")},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:sh,htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(i){Ds(i);var e={autoTag:r0(i.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:i.parser.settings.leqno};return zi(i.parser,e,"display")},htmlBuilder:Qn,mathmlBuilder:ei});Jn({type:"array",names:["CD"],props:{numArgs:0},handler(i){return Ds(i),bf(i.parser)},htmlBuilder:Qn,mathmlBuilder:ei});w("\\nonumber","\\gdef\\@eqnsw{0}");w("\\notag","\\nonumber");we({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(i,e){throw new ce(i.funcName+" valid only within array environment")}});var Q0=rh;we({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];if(r.type!=="ordgroup")throw new ce("Invalid environment name",r);for(var a="",s=0;s<r.body.length;++s)a+=et(r.body[s],"textord").text;if(n==="\\begin"){if(!Q0.hasOwnProperty(a))throw new ce("No such environment: "+a,r);var o=Q0[a],{args:l,optArgs:c}=t.parseArguments("\\begin{"+a+"}",o),u={mode:t.mode,envName:a,parser:t},f=o.handler(u,l,c);t.expect("\\end",!1);var h=t.nextToken,p=et(t.parseFunction(),"environment");if(p.name!==a)throw new ce("Mismatch: \\begin{"+a+"} matched by \\end{"+p.name+"}",h);return f}return{type:"environment",mode:t.mode,name:a,nameGroup:r}}});var oh=(i,e)=>{var t=i.font,n=e.withFont(t);return pt(i.body,n)},lh=(i,e)=>{var t=i.font,n=e.withFont(t);return St(i.body,n)},ec={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};we({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=gs(e[0]),a=n;return a in ec&&(a=ec[a]),{type:"font",mode:t.mode,font:a.slice(1),body:r}},htmlBuilder:oh,mathmlBuilder:lh});we({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"mclass",mode:t.mode,mclass:Rs(n),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:n}],isCharacterBox:xi(n)}}});we({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,breakOnTokenText:r}=i,{mode:a}=t,s=t.parseExpression(!0,r),o="math"+n.slice(1);return{type:"font",mode:a,font:o,body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:oh,mathmlBuilder:lh});var Nf=(i,e)=>{var t=e.style,n=t.fracNum(),r=t.fracDen(),a;a=e.havingStyle(n);var s=pt(i.numer,a,e);if(i.continued){var o=8.5/e.fontMetrics().ptPerEm,l=3.5/e.fontMetrics().ptPerEm;s.height=s.height<o?o:s.height,s.depth=s.depth<l?l:s.depth}a=e.havingStyle(r);var c=pt(i.denom,a,e),u,f,h;i.hasBarLine?(i.barSize?(f=It(i.barSize,e),u=Dr("frac-line",e,f)):u=Dr("frac-line",e),f=u.height,h=u.height):(u=null,f=0,h=e.fontMetrics().defaultRuleThickness);var p,x,y;t.size===$e.DISPLAY.size?(p=e.fontMetrics().num1,f>0?x=3*h:x=7*h,y=e.fontMetrics().denom1):(f>0?(p=e.fontMetrics().num2,x=h):(p=e.fontMetrics().num3,x=3*h),y=e.fontMetrics().denom2);var m;if(u){var S=e.fontMetrics().axisHeight;p-s.depth-(S+.5*f)<x&&(p+=x-(p-s.depth-(S+.5*f))),S-.5*f-(c.height-y)<x&&(y+=x-(S-.5*f-(c.height-y)));var C=-(S-.5*f);m=ft({positionType:"individualShift",children:[{type:"elem",elem:c,shift:y},{type:"elem",elem:u,shift:C},{type:"elem",elem:s,shift:-p}]})}else{var g=p-s.depth-(c.height-y);g<x&&(p+=.5*(x-g),y+=.5*(x-g)),m=ft({positionType:"individualShift",children:[{type:"elem",elem:c,shift:y},{type:"elem",elem:s,shift:-p}]})}a=e.havingStyle(t),m.height*=a.sizeMultiplier/e.sizeMultiplier,m.depth*=a.sizeMultiplier/e.sizeMultiplier;var E;t.size===$e.DISPLAY.size?E=e.fontMetrics().delim1:t.size===$e.SCRIPTSCRIPT.size?E=e.havingStyle($e.SCRIPT).fontMetrics().delim2:E=e.fontMetrics().delim2;var D,P;return i.leftDelim==null?D=ia(e,["mopen"]):D=Zo(i.leftDelim,E,!0,e.havingStyle(t),i.mode,["mopen"]),i.continued?P=oe([]):i.rightDelim==null?P=ia(e,["mclose"]):P=Zo(i.rightDelim,E,!0,e.havingStyle(t),i.mode,["mclose"]),oe(["mord"].concat(a.sizingClasses(e)),[D,oe(["mfrac"],[m]),P],e)},Uf=(i,e)=>{var t=new he("mfrac",[St(i.numer,e),St(i.denom,e)]);if(!i.hasBarLine)t.setAttribute("linethickness","0px");else if(i.barSize){var n=It(i.barSize,e);t.setAttribute("linethickness",me(n))}if(i.leftDelim!=null||i.rightDelim!=null){var r=[];if(i.leftDelim!=null){var a=new he("mo",[new zt(i.leftDelim.replace("\\",""))]);a.setAttribute("fence","true"),r.push(a)}if(r.push(t),i.rightDelim!=null){var s=new he("mo",[new zt(i.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),r.push(s)}return Jl(r)}return t},ch=(i,e)=>{if(!e)return i;var t={type:"styling",mode:i.mode,style:e,body:[i]};return t};we({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=e[1],s,o=null,l=null;switch(n){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,o="(",l=")";break;case"\\\\bracefrac":s=!1,o="\\{",l="\\}";break;case"\\\\brackfrac":s=!1,o="[",l="]";break;default:throw new Error("Unrecognized genfrac command")}var c=n==="\\cfrac",u=null;return c||n.startsWith("\\d")?u="display":n.startsWith("\\t")&&(u="text"),ch({type:"genfrac",mode:t.mode,numer:r,denom:a,continued:c,hasBarLine:s,leftDelim:o,rightDelim:l,barSize:null},u)},htmlBuilder:Nf,mathmlBuilder:Uf});we({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(i){var{parser:e,funcName:t,token:n}=i,r;switch(t){case"\\over":r="\\frac";break;case"\\choose":r="\\binom";break;case"\\atop":r="\\\\atopfrac";break;case"\\brace":r="\\\\bracefrac";break;case"\\brack":r="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:e.mode,replaceWith:r,token:n}}});var tc=["display","text","script","scriptscript"],nc=function(e){var t=null;return e.length>0&&(t=e,t=t==="."?null:t),t};we({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(i,e){var{parser:t}=i,n=e[4],r=e[5],a=gs(e[0]),s=a.type==="atom"&&a.family==="open"?nc(a.text):null,o=gs(e[1]),l=o.type==="atom"&&o.family==="close"?nc(o.text):null,c=et(e[2],"size"),u,f=null;c.isBlank?u=!0:(f=c.value,u=f.number>0);var h=null,p=e[3];if(p.type==="ordgroup"){if(p.body.length>0){var x=et(p.body[0],"textord");h=tc[Number(x.text)]}}else p=et(p,"textord"),h=tc[Number(p.text)];return ch({type:"genfrac",mode:t.mode,numer:n,denom:r,continued:!1,hasBarLine:u,barSize:f,leftDelim:s,rightDelim:l},h)}});we({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(i,e){var{parser:t,funcName:n,token:r}=i;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:et(e[0],"size").value,token:r}}});we({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0],a=et(e[1],"infix").size;if(!a)throw new Error("\\\\abovefrac expected size, but got "+String(a));var s=e[2],o=a.number>0;return{type:"genfrac",mode:t.mode,numer:r,denom:s,continued:!1,hasBarLine:o,barSize:a,leftDelim:null,rightDelim:null}}});var uh=(i,e)=>{var t=e.style,n,r;i.type==="supsub"?(n=i.sup?pt(i.sup,e.havingStyle(t.sup()),e):pt(i.sub,e.havingStyle(t.sub()),e),r=et(i.base,"horizBrace")):r=et(i,"horizBrace");var a=pt(r.base,e.havingBaseStyle($e.DISPLAY)),s=Es(r,e),o;if(r.isOver?(o=ft({positionType:"firstBaseline",children:[{type:"elem",elem:a},{type:"kern",size:.1},{type:"elem",elem:s}]}),o.children[0].children[0].children[1].classes.push("svg-align")):(o=ft({positionType:"bottom",positionData:a.depth+.1+s.height,children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:a}]}),o.children[0].children[0].children[0].classes.push("svg-align")),n){var l=oe(["mord",r.isOver?"mover":"munder"],[o],e);r.isOver?o=ft({positionType:"firstBaseline",children:[{type:"elem",elem:l},{type:"kern",size:.2},{type:"elem",elem:n}]}):o=ft({positionType:"bottom",positionData:l.depth+.2+n.height+n.depth,children:[{type:"elem",elem:n},{type:"kern",size:.2},{type:"elem",elem:l}]})}return oe(["mord",r.isOver?"mover":"munder"],[o],e)},Ff=(i,e)=>{var t=Ts(i.label);return new he(i.isOver?"mover":"munder",[St(i.base,e),t])};we({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(i,e){var{parser:t,funcName:n}=i;return{type:"horizBrace",mode:t.mode,label:n,isOver:/^\\over/.test(n),base:e[0]}},htmlBuilder:uh,mathmlBuilder:Ff});we({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[1],r=et(e[0],"url").url;return t.settings.isTrusted({command:"\\href",url:r})?{type:"href",mode:t.mode,href:r,body:Bt(n)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(i,e)=>{var t=qt(i.body,e,!1);return Jd(i.href,[],t,e)},mathmlBuilder:(i,e)=>{var t=Oi(i.body,e);return t instanceof he||(t=new he("mrow",[t])),t.setAttribute("href",i.href),t}});we({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=et(e[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:n}))return t.formatUnsupportedCmd("\\url");for(var r=[],a=0;a<n.length;a++){var s=n[a];s==="~"&&(s="\\textasciitilde"),r.push({type:"textord",mode:"text",text:s})}var o={type:"text",mode:t.mode,font:"\\texttt",body:r};return{type:"href",mode:t.mode,href:n,body:Bt(o)}}});we({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(i,e){var{parser:t}=i;return{type:"hbox",mode:t.mode,body:Bt(e[0])}},htmlBuilder(i,e){var t=qt(i.body,e,!1);return bi(t)},mathmlBuilder(i,e){return new he("mrow",En(i.body,e))}});we({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n,token:r}=i,a=et(e[0],"raw").string,s=e[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var o,l={};switch(n){case"\\htmlClass":l.class=a,o={command:"\\htmlClass",class:a};break;case"\\htmlId":l.id=a,o={command:"\\htmlId",id:a};break;case"\\htmlStyle":l.style=a,o={command:"\\htmlStyle",style:a};break;case"\\htmlData":{for(var c=a.split(","),u=0;u<c.length;u++){var f=c[u],h=f.indexOf("=");if(h<0)throw new ce("\\htmlData key/value '"+f+"' missing equals sign");var p=f.slice(0,h),x=f.slice(h+1);l["data-"+p.trim()]=x}o={command:"\\htmlData",attributes:l};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(o)?{type:"html",mode:t.mode,attributes:l,body:Bt(s)}:t.formatUnsupportedCmd(n)},htmlBuilder:(i,e)=>{var t=qt(i.body,e,!1),n=["enclosing"];i.attributes.class&&n.push(...i.attributes.class.trim().split(/\s+/));var r=oe(n,t,e);for(var a in i.attributes)a!=="class"&&i.attributes.hasOwnProperty(a)&&r.setAttribute(a,i.attributes[a]);return r},mathmlBuilder:(i,e)=>Oi(i.body,e)});we({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"htmlmathml",mode:t.mode,html:Bt(e[0]),mathml:Bt(e[1])}},htmlBuilder:(i,e)=>{var t=qt(i.html,e,!1);return bi(t)},mathmlBuilder:(i,e)=>Oi(i.mathml,e)});var Qs=function(e){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))return{number:+e,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);if(!t)throw new ce("Invalid size: '"+e+"' in \\includegraphics");var n={number:+(t[1]+t[2]),unit:t[3]};if(!Au(n))throw new ce("Invalid unit: '"+n.unit+"' in \\includegraphics.");return n};we({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(i,e,t)=>{var{parser:n}=i,r={number:0,unit:"em"},a={number:.9,unit:"em"},s={number:0,unit:"em"},o="";if(t[0])for(var l=et(t[0],"raw").string,c=l.split(","),u=0;u<c.length;u++){var f=c[u].split("=");if(f.length===2){var h=f[1].trim();switch(f[0].trim()){case"alt":o=h;break;case"width":r=Qs(h);break;case"height":a=Qs(h);break;case"totalheight":s=Qs(h);break;default:throw new ce("Invalid key: '"+f[0]+"' in \\includegraphics.")}}}var p=et(e[0],"url").url;return o===""&&(o=p,o=o.replace(/^.*[\\/]/,""),o=o.substring(0,o.lastIndexOf("."))),n.settings.isTrusted({command:"\\includegraphics",url:p})?{type:"includegraphics",mode:n.mode,alt:o,width:r,height:a,totalheight:s,src:p}:n.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(i,e)=>{var t=It(i.height,e),n=0;i.totalheight.number>0&&(n=It(i.totalheight,e)-t);var r=0;i.width.number>0&&(r=It(i.width,e));var a={height:me(t+n)};r>0&&(a.width=me(r)),n>0&&(a.verticalAlign=me(-n));var s=new zd(i.src,i.alt,a);return s.height=t,s.depth=n,s},mathmlBuilder:(i,e)=>{var t=new he("mglyph",[]);t.setAttribute("alt",i.alt);var n=It(i.height,e),r=0;if(i.totalheight.number>0&&(r=It(i.totalheight,e)-n,t.setAttribute("valign",me(-r))),t.setAttribute("height",me(n+r)),i.width.number>0){var a=It(i.width,e);t.setAttribute("width",me(a))}return t.setAttribute("src",i.src),t}});we({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=et(e[0],"size");if(t.settings.strict){var a=n[1]==="m",s=r.value.unit==="mu";a?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" supports only mu units, "+("not "+r.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+n+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:r.value}},htmlBuilder(i,e){return Lu(i.dimension,e)},mathmlBuilder(i,e){var t=It(i.dimension,e);return new Bu(t)}});we({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"lap",mode:t.mode,alignment:n.slice(5),body:r}},htmlBuilder:(i,e)=>{var t;i.alignment==="clap"?(t=oe([],[pt(i.body,e)]),t=oe(["inner"],[t],e)):t=oe(["inner"],[pt(i.body,e)]);var n=oe(["fix"],[]),r=oe([i.alignment],[t,n],e),a=oe(["strut"]);return a.style.height=me(r.height+r.depth),r.depth&&(a.style.verticalAlign=me(-r.depth)),r.children.unshift(a),r=oe(["thinbox"],[r],e),oe(["mord","vbox"],[r],e)},mathmlBuilder:(i,e)=>{var t=new he("mpadded",[St(i.body,e)]);if(i.alignment!=="rlap"){var n=i.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",n+"width")}return t.setAttribute("width","0px"),t}});we({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){var{funcName:t,parser:n}=i,r=n.mode;n.switchMode("math");var a=t==="\\("?"\\)":"$",s=n.parseExpression(!1,a);return n.expect(a),n.switchMode(r),{type:"styling",mode:n.mode,style:"text",body:s}}});we({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(i,e){throw new ce("Mismatched "+i.funcName)}});var ic=(i,e)=>{switch(e.style.size){case $e.DISPLAY.size:return i.display;case $e.TEXT.size:return i.text;case $e.SCRIPT.size:return i.script;case $e.SCRIPTSCRIPT.size:return i.scriptscript;default:return i.text}};we({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(i,e)=>{var{parser:t}=i;return{type:"mathchoice",mode:t.mode,display:Bt(e[0]),text:Bt(e[1]),script:Bt(e[2]),scriptscript:Bt(e[3])}},htmlBuilder:(i,e)=>{var t=ic(i,e),n=qt(t,e,!1);return bi(n)},mathmlBuilder:(i,e)=>{var t=ic(i,e);return Oi(t,e)}});var hh=(i,e,t,n,r,a,s)=>{i=oe([],[i]);var o=t&&xi(t),l,c;if(e){var u=pt(e,n.havingStyle(r.sup()),n);c={elem:u,kern:Math.max(n.fontMetrics().bigOpSpacing1,n.fontMetrics().bigOpSpacing3-u.depth)}}if(t){var f=pt(t,n.havingStyle(r.sub()),n);l={elem:f,kern:Math.max(n.fontMetrics().bigOpSpacing2,n.fontMetrics().bigOpSpacing4-f.height)}}var h;if(c&&l){var p=n.fontMetrics().bigOpSpacing5+l.elem.height+l.elem.depth+l.kern+i.depth+s;h=ft({positionType:"bottom",positionData:p,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:me(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:me(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else if(l){var x=i.height-s;h=ft({positionType:"top",positionData:x,children:[{type:"kern",size:n.fontMetrics().bigOpSpacing5},{type:"elem",elem:l.elem,marginLeft:me(-a)},{type:"kern",size:l.kern},{type:"elem",elem:i}]})}else if(c){var y=i.depth+s;h=ft({positionType:"bottom",positionData:y,children:[{type:"elem",elem:i},{type:"kern",size:c.kern},{type:"elem",elem:c.elem,marginLeft:me(a)},{type:"kern",size:n.fontMetrics().bigOpSpacing5}]})}else return i;var m=[h];if(l&&a!==0&&!o){var g=oe(["mspace"],[],n);g.style.marginRight=me(a),m.unshift(g)}return oe(["mop","op-limits"],m,n)},dh=new Set(["\\smallint"]),Hr=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=et(i.base,"op"),r=!0):a=et(i,"op");var s=e.style,o=!1;s.size===$e.DISPLAY.size&&a.symbol&&!dh.has(a.name)&&(o=!0);var l;if(a.symbol){var c=o?"Size2-Regular":"Size1-Regular",u="";if((a.name==="\\oiint"||a.name==="\\oiiint")&&(u=a.name.slice(1),a.name=u==="oiint"?"\\iint":"\\iiint"),l=un(a.name,c,"math",e,["mop","op-symbol",o?"large-op":"small-op"]),u.length>0){var f=l.italic,h=Uu(u+"Size"+(o?"2":"1"),e);l=ft({positionType:"individualShift",children:[{type:"elem",elem:l,shift:0},{type:"elem",elem:h,shift:o?.08:0}]}),a.name="\\"+u,l.classes.unshift("mop"),l.italic=f}}else if(a.body){var p=qt(a.body,e,!0);p.length===1&&p[0]instanceof wn?(l=p[0],l.classes[0]="mop"):l=oe(["mop"],p,e)}else{for(var x=[],y=1;y<a.name.length;y++)x.push(Kl(a.name[y],a.mode,e));l=oe(["mop"],x,e)}var m=0,g=0;return(l instanceof wn||a.name==="\\oiint"||a.name==="\\oiiint")&&!a.suppressBaseShift&&(m=(l.height-l.depth)/2-e.fontMetrics().axisHeight,g=l.italic||0),r?hh(l,t,n,e,s,g,m):(m&&(l.style.position="relative",l.style.top=me(m)),l)},ua=(i,e)=>{var t;if(i.symbol)t=new he("mo",[Pn(i.name,i.mode)]),dh.has(i.name)&&t.setAttribute("largeop","false");else if(i.body)t=new he("mo",En(i.body,e));else{t=new he("mi",[new zt(i.name.slice(1))]);var n=new he("mo",[Pn("⁡","text")]);i.parentIsSupSub?t=new he("mrow",[t,n]):t=Ou([t,n])}return t},kf={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};we({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=n;return r.length===1&&(r=kf[r]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:r}},htmlBuilder:Hr,mathmlBuilder:ua});we({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Bt(n)}},htmlBuilder:Hr,mathmlBuilder:ua});var Of={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};we({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Hr,mathmlBuilder:ua});we({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(i){var{parser:e,funcName:t}=i;return{type:"op",mode:e.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:Hr,mathmlBuilder:ua});we({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(i){var{parser:e,funcName:t}=i,n=t;return n.length===1&&(n=Of[n]),{type:"op",mode:e.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:n}},htmlBuilder:Hr,mathmlBuilder:ua});var fh=(i,e)=>{var t,n,r=!1,a;i.type==="supsub"?(t=i.sup,n=i.sub,a=et(i.base,"operatorname"),r=!0):a=et(i,"operatorname");var s;if(a.body.length>0){for(var o=a.body.map(f=>{var h="text"in f?f.text:void 0;return typeof h=="string"?{type:"textord",mode:f.mode,text:h}:f}),l=qt(o,e.withFont("mathrm"),!0),c=0;c<l.length;c++){var u=l[c];u instanceof wn&&(u.text=u.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=oe(["mop"],l,e)}else s=oe(["mop"],[],e);return r?hh(s,t,n,e,e.style,0,0):s},Bf=(i,e)=>{for(var t=En(i.body,e.withFont("mathrm")),n=!0,r=0;r<t.length;r++){var a=t[r];if(!(a instanceof Bu))if(a instanceof he)switch(a.type){case"mi":case"mn":case"mspace":case"mtext":break;case"mo":{var s=a.children[0];a.children.length===1&&s instanceof zt?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):n=!1;break}default:n=!1}else n=!1}if(n){var o=t.map(u=>u.toText()).join("");t=[new zt(o)]}var l=new he("mi",t);l.setAttribute("mathvariant","normal");var c=new he("mo",[Pn("⁡","text")]);return i.parentIsSupSub?new he("mrow",[l,c]):Ou([l,c])};we({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(i,e)=>{var{parser:t,funcName:n}=i,r=e[0];return{type:"operatorname",mode:t.mode,body:Bt(r),alwaysHandleSupSub:n==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:fh,mathmlBuilder:Bf});w("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");rr({type:"ordgroup",htmlBuilder(i,e){return i.semisimple?bi(qt(i.body,e,!1)):oe(["mord"],qt(i.body,e,!0),e)},mathmlBuilder(i,e){return Oi(i.body,e,!0)}});we({type:"overline",names:["\\overline"],props:{numArgs:1},handler(i,e){var{parser:t}=i,n=e[0];return{type:"overline",mode:t.mode,body:n}},htmlBuilder(i,e){var t=pt(i.body,e.havingCrampedStyle()),n=Dr("overline-line",e),r=e.fontMetrics().defaultRuleThickness,a=ft({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*r},{type:"elem",elem:n},{type:"kern",size:r}]});return oe(["mord","overline"],[a],e)},mathmlBuilder(i,e){var t=new he("mo",[new zt("‾")]);t.setAttribute("stretchy","true");var n=new he("mover",[St(i.body,e),t]);return n.setAttribute("accent","true"),n}});we({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"phantom",mode:t.mode,body:Bt(n)}},htmlBuilder:(i,e)=>{var t=qt(i.body,e.withPhantom(),!1);return bi(t)},mathmlBuilder:(i,e)=>{var t=En(i.body,e);return new he("mphantom",t)}});w("\\hphantom","\\smash{\\phantom{#1}}");we({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(i,e)=>{var{parser:t}=i,n=e[0];return{type:"vphantom",mode:t.mode,body:n}},htmlBuilder:(i,e)=>{var t=oe(["inner"],[pt(i.body,e.withPhantom())]),n=oe(["fix"],[]);return oe(["mord","rlap"],[t,n],e)},mathmlBuilder:(i,e)=>{var t=En(Bt(i.body),e),n=new he("mphantom",t),r=new he("mpadded",[n]);return r.setAttribute("width","0px"),r}});we({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(i,e){var{parser:t}=i,n=et(e[0],"size").value,r=e[1];return{type:"raisebox",mode:t.mode,dy:n,body:r}},htmlBuilder(i,e){var t=pt(i.body,e),n=It(i.dy,e);return ft({positionType:"shift",positionData:-n,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){var t=new he("mpadded",[St(i.body,e)]),n=i.dy.number+i.dy.unit;return t.setAttribute("voffset",n),t}});we({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(i){var{parser:e}=i;return{type:"internal",mode:e.mode}}});we({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(i,e,t){var{parser:n}=i,r=t[0],a=et(e[0],"size"),s=et(e[1],"size");return{type:"rule",mode:n.mode,shift:r&&et(r,"size").value,width:a.value,height:s.value}},htmlBuilder(i,e){var t=oe(["mord","rule"],[],e),n=It(i.width,e),r=It(i.height,e),a=i.shift?It(i.shift,e):0;return t.style.borderRightWidth=me(n),t.style.borderTopWidth=me(r),t.style.bottom=me(a),t.width=n,t.height=r+a,t.depth=-a,t.maxFontSize=r*1.125*e.sizeMultiplier,t},mathmlBuilder(i,e){var t=It(i.width,e),n=It(i.height,e),r=i.shift?It(i.shift,e):0,a=e.color&&e.getColor()||"black",s=new he("mspace");s.setAttribute("mathbackground",a),s.setAttribute("width",me(t)),s.setAttribute("height",me(n));var o=new he("mpadded",[s]);return r>=0?o.setAttribute("height",me(r)):(o.setAttribute("height",me(r)),o.setAttribute("depth",me(-r))),o.setAttribute("voffset",me(r)),o}});function ph(i,e,t){for(var n=qt(i,e,!1),r=e.sizeMultiplier/t.sizeMultiplier,a=0;a<n.length;a++){var s=n[a].classes.indexOf("sizing");s<0?Array.prototype.push.apply(n[a].classes,e.sizingClasses(t)):n[a].classes[s+1]==="reset-size"+e.size&&(n[a].classes[s+1]="reset-size"+t.size),n[a].height*=r,n[a].depth*=r}return bi(n)}var rc=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],zf=(i,e)=>{var t=e.havingSize(i.size);return ph(i.body,t,e)};we({type:"sizing",names:rc,props:{numArgs:0,allowedInText:!0},handler:(i,e)=>{var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!1,t);return{type:"sizing",mode:r.mode,size:rc.indexOf(n)+1,body:a}},htmlBuilder:zf,mathmlBuilder:(i,e)=>{var t=e.havingSize(i.size),n=En(i.body,t),r=new he("mstyle",n);return r.setAttribute("mathsize",me(t.sizeMultiplier)),r}});we({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(i,e,t)=>{var{parser:n}=i,r=!1,a=!1,s=t[0]&&et(t[0],"ordgroup");if(s)for(var o="",l=0;l<s.body.length;++l){var c=s.body[l];if(o=As(c).text,o==="t")r=!0;else if(o==="b")a=!0;else{r=!1,a=!1;break}}else r=!0,a=!0;var u=e[0];return{type:"smash",mode:n.mode,body:u,smashHeight:r,smashDepth:a}},htmlBuilder:(i,e)=>{var t=oe([],[pt(i.body,e)]);if(!i.smashHeight&&!i.smashDepth)return t;if(i.smashHeight&&(t.height=0),i.smashDepth&&(t.depth=0),i.smashHeight&&i.smashDepth)return oe(["mord","smash"],[t],e);if(t.children)for(var n=0;n<t.children.length;n++)i.smashHeight&&(t.children[n].height=0),i.smashDepth&&(t.children[n].depth=0);var r=ft({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return oe(["mord"],[r],e)},mathmlBuilder:(i,e)=>{var t=new he("mpadded",[St(i.body,e)]);return i.smashHeight&&t.setAttribute("height","0px"),i.smashDepth&&t.setAttribute("depth","0px"),t}});we({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(i,e,t){var{parser:n}=i,r=t[0],a=e[0];return{type:"sqrt",mode:n.mode,body:a,index:r}},htmlBuilder(i,e){var t=pt(i.body,e.havingCrampedStyle());t.height===0&&(t.height=e.fontMetrics().xHeight),t=Ir(t,e);var n=e.fontMetrics(),r=n.defaultRuleThickness,a=r;e.style.id<$e.TEXT.id&&(a=e.fontMetrics().xHeight);var s=r+a/4,o=t.height+t.depth+s+r,{span:l,ruleWidth:c,advanceWidth:u}=Ef(o,e),f=l.height-c;f>t.height+t.depth+s&&(s=(s+f-t.height-t.depth)/2);var h=l.height-t.height-s-c;t.style.paddingLeft=me(u);var p=ft({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+h)},{type:"elem",elem:l},{type:"kern",size:c}]});if(i.index){var x=e.havingStyle($e.SCRIPTSCRIPT),y=pt(i.index,x,e),m=.6*(p.height-p.depth),g=ft({positionType:"shift",positionData:-m,children:[{type:"elem",elem:y}]}),S=oe(["root"],[g]);return oe(["mord","sqrt"],[S,p],e)}else return oe(["mord","sqrt"],[p],e)},mathmlBuilder(i,e){var{body:t,index:n}=i;return n?new he("mroot",[St(t,e),St(n,e)]):new he("msqrt",[St(t,e)])}});var ac={display:$e.DISPLAY,text:$e.TEXT,script:$e.SCRIPT,scriptscript:$e.SCRIPTSCRIPT};we({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(i,e){var{breakOnTokenText:t,funcName:n,parser:r}=i,a=r.parseExpression(!0,t),s=n.slice(1,n.length-5);return{type:"styling",mode:r.mode,style:s,body:a}},htmlBuilder(i,e){var t=ac[i.style],n=e.havingStyle(t).withFont("");return ph(i.body,n,e)},mathmlBuilder(i,e){var t=ac[i.style],n=e.havingStyle(t),r=En(i.body,n),a=new he("mstyle",r),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},o=s[i.style];return a.setAttribute("scriptlevel",o[0]),a.setAttribute("displaystyle",o[1]),a}});var Hf=function(e,t){var n=e.base;if(n)if(n.type==="op"){var r=n.limits&&(t.style.size===$e.DISPLAY.size||n.alwaysHandleSupSub);return r?Hr:null}else if(n.type==="operatorname"){var a=n.alwaysHandleSupSub&&(t.style.size===$e.DISPLAY.size||n.limits);return a?fh:null}else{if(n.type==="accent")return xi(n.base)?e0:null;if(n.type==="horizBrace"){var s=!e.sub;return s===n.isOver?uh:null}else return null}else return null};rr({type:"supsub",htmlBuilder(i,e){var t=Hf(i,e);if(t)return t(i,e);var{base:n,sup:r,sub:a}=i,s=pt(n,e),o,l,c=e.fontMetrics(),u=0,f=0,h=n&&xi(n);if(r){var p=e.havingStyle(e.style.sup());o=pt(r,p,e),h||(u=s.height-p.fontMetrics().supDrop*p.sizeMultiplier/e.sizeMultiplier)}if(a){var x=e.havingStyle(e.style.sub());l=pt(a,x,e),h||(f=s.depth+x.fontMetrics().subDrop*x.sizeMultiplier/e.sizeMultiplier)}var y;e.style===$e.DISPLAY?y=c.sup1:e.style.cramped?y=c.sup3:y=c.sup2;var m=e.sizeMultiplier,g=me(.5/c.ptPerEm/m),S=null;if(l){var C=i.base&&i.base.type==="op"&&i.base.name&&(i.base.name==="\\oiint"||i.base.name==="\\oiiint");(s instanceof wn||C)&&(S=me(-s.italic))}var E;if(o&&l){u=Math.max(u,y,o.depth+.25*c.xHeight),f=Math.max(f,c.sub2);var D=c.defaultRuleThickness,P=4*D;if(u-o.depth-(l.height-f)<P){f=P-(u-o.depth)+l.height;var L=.8*c.xHeight-(u-o.depth);L>0&&(u+=L,f-=L)}var M=[{type:"elem",elem:l,shift:f,marginRight:g,marginLeft:S},{type:"elem",elem:o,shift:-u,marginRight:g}];E=ft({positionType:"individualShift",children:M})}else if(l){f=Math.max(f,c.sub1,l.height-.8*c.xHeight);var A=[{type:"elem",elem:l,marginLeft:S,marginRight:g}];E=ft({positionType:"shift",positionData:f,children:A})}else if(o)u=Math.max(u,y,o.depth+.25*c.xHeight),E=ft({positionType:"shift",positionData:-u,children:[{type:"elem",elem:o,marginRight:g}]});else throw new Error("supsub must have either sup or sub.");var K=Yo(s,"right")||"mord";return oe([K],[s,oe(["msupsub"],[E])],e)},mathmlBuilder(i,e){var t=!1,n,r;i.base&&i.base.type==="horizBrace"&&(r=!!i.sup,r===i.base.isOver&&(t=!0,n=i.base.isOver)),i.base&&(i.base.type==="op"||i.base.type==="operatorname")&&(i.base.parentIsSupSub=!0);var a=[St(i.base,e)];i.sub&&a.push(St(i.sub,e)),i.sup&&a.push(St(i.sup,e));var s;if(t)s=n?"mover":"munder";else if(i.sub)if(i.sup){var c=i.base;c&&c.type==="op"&&c.limits&&e.style===$e.DISPLAY||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(e.style===$e.DISPLAY||c.limits)?s="munderover":s="msubsup"}else{var l=i.base;l&&l.type==="op"&&l.limits&&(e.style===$e.DISPLAY||l.alwaysHandleSupSub)||l&&l.type==="operatorname"&&l.alwaysHandleSupSub&&(l.limits||e.style===$e.DISPLAY)?s="munder":s="msub"}else{var o=i.base;o&&o.type==="op"&&o.limits&&(e.style===$e.DISPLAY||o.alwaysHandleSupSub)||o&&o.type==="operatorname"&&o.alwaysHandleSupSub&&(o.limits||e.style===$e.DISPLAY)?s="mover":s="msup"}return new he(s,a)}});rr({type:"atom",htmlBuilder(i,e){return Kl(i.text,i.mode,e,["m"+i.family])},mathmlBuilder(i,e){var t=new he("mo",[Pn(i.text,i.mode)]);if(i.family==="bin"){var n=Ql(i,e);n==="bold-italic"&&t.setAttribute("mathvariant",n)}else i.family==="punct"?t.setAttribute("separator","true"):(i.family==="open"||i.family==="close")&&t.setAttribute("stretchy","false");return t}});var mh={mi:"italic",mn:"normal",mtext:"normal"};rr({type:"mathord",htmlBuilder(i,e){return ws(i,e,"mathord")},mathmlBuilder(i,e){var t=new he("mi",[Pn(i.text,i.mode,e)]),n=Ql(i,e)||"italic";return n!==mh[t.type]&&t.setAttribute("mathvariant",n),t}});rr({type:"textord",htmlBuilder(i,e){return ws(i,e,"textord")},mathmlBuilder(i,e){var t=Pn(i.text,i.mode,e),n=Ql(i,e)||"normal",r;return i.mode==="text"?r=new he("mtext",[t]):/[0-9]/.test(i.text)?r=new he("mn",[t]):i.text==="\\prime"?r=new he("mo",[t]):r=new he("mi",[t]),n!==mh[r.type]&&r.setAttribute("mathvariant",n),r}});var eo={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},to={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};rr({type:"spacing",htmlBuilder(i,e){if(to.hasOwnProperty(i.text)){var t=to[i.text].className||"";if(i.mode==="text"){var n=ws(i,e,"textord");return n.classes.push(t),n}else return oe(["mspace",t],[Kl(i.text,i.mode,e)],e)}else{if(eo.hasOwnProperty(i.text))return oe(["mspace",eo[i.text]],[],e);throw new ce('Unknown type of space "'+i.text+'"')}},mathmlBuilder(i,e){var t;if(to.hasOwnProperty(i.text))t=new he("mtext",[new zt(" ")]);else{if(eo.hasOwnProperty(i.text))return new he("mspace");throw new ce('Unknown type of space "'+i.text+'"')}return t}});var sc=()=>{var i=new he("mtd",[]);return i.setAttribute("width","50%"),i};rr({type:"tag",mathmlBuilder(i,e){var t=new he("mtable",[new he("mtr",[sc(),new he("mtd",[Oi(i.body,e)]),sc(),new he("mtd",[Oi(i.tag,e)])])]);return t.setAttribute("width","100%"),t}});var oc={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},lc={"\\textbf":"textbf","\\textmd":"textmd"},Gf={"\\textit":"textit","\\textup":"textup"},cc=(i,e)=>{var t=i.font;if(t){if(oc[t])return e.withTextFontFamily(oc[t]);if(lc[t])return e.withTextFontWeight(lc[t]);if(t==="\\emph")return e.fontShape==="textit"?e.withTextFontShape("textup"):e.withTextFontShape("textit")}else return e;return e.withTextFontShape(Gf[t])};we({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(i,e){var{parser:t,funcName:n}=i,r=e[0];return{type:"text",mode:t.mode,body:Bt(r),font:n}},htmlBuilder(i,e){var t=cc(i,e),n=qt(i.body,t,!0);return oe(["mord","text"],n,t)},mathmlBuilder(i,e){var t=cc(i,e);return Oi(i.body,t)}});we({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(i,e){var{parser:t}=i;return{type:"underline",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=pt(i.body,e),n=Dr("underline-line",e),r=e.fontMetrics().defaultRuleThickness,a=ft({positionType:"top",positionData:t.height,children:[{type:"kern",size:r},{type:"elem",elem:n},{type:"kern",size:3*r},{type:"elem",elem:t}]});return oe(["mord","underline"],[a],e)},mathmlBuilder(i,e){var t=new he("mo",[new zt("‾")]);t.setAttribute("stretchy","true");var n=new he("munder",[St(i.body,e),t]);return n.setAttribute("accentunder","true"),n}});we({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(i,e){var{parser:t}=i;return{type:"vcenter",mode:t.mode,body:e[0]}},htmlBuilder(i,e){var t=pt(i.body,e),n=e.fontMetrics().axisHeight,r=.5*(t.height-n-(t.depth+n));return ft({positionType:"shift",positionData:r,children:[{type:"elem",elem:t}]})},mathmlBuilder(i,e){return new he("mpadded",[St(i.body,e)],["vcenter"])}});we({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(i,e,t){throw new ce("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(i,e){for(var t=uc(i),n=[],r=e.havingStyle(e.style.text()),a=0;a<t.length;a++){var s=t[a];s==="~"&&(s="\\textasciitilde"),n.push(un(s,"Typewriter-Regular",i.mode,r,["mord","texttt"]))}return oe(["mord","text"].concat(r.sizingClasses(e)),Iu(n),r)},mathmlBuilder(i,e){var t=new zt(uc(i)),n=new he("mtext",[t]);return n.setAttribute("mathvariant","monospace"),n}});var uc=i=>i.body.replace(/ /g,i.star?"␣":" "),Ii=Fu,gh=`[ \r
	]`,Vf="\\\\[a-zA-Z@]+",Wf="\\\\[^\uD800-\uDFFF]",qf="("+Vf+")"+gh+"*",Xf=`\\\\(
|[ \r	]+
?)[ \r	]*`,Jo="[̀-ͯ]",Yf=new RegExp(Jo+"+$"),$f="("+gh+"+)|"+(Xf+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(Jo+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(Jo+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+qf)+("|"+Wf+")");class hc{constructor(e,t){this.input=e,this.settings=t,this.tokenRegex=new RegExp($f,"g"),this.catcodes={"%":14,"~":13}}setCatcode(e,t){this.catcodes[e]=t}lex(){var e=this.input,t=this.tokenRegex.lastIndex;if(t===e.length)return new Mn("EOF",new mn(this,t,t));var n=this.tokenRegex.exec(e);if(n===null||n.index!==t)throw new ce("Unexpected character: '"+e[t]+"'",new Mn(e[t],new mn(this,t,t+1)));var r=n[6]||n[3]||(n[2]?"\\ ":" ");if(this.catcodes[r]===14){var a=e.indexOf(`
`,this.tokenRegex.lastIndex);return a===-1?(this.tokenRegex.lastIndex=e.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=a+1,this.lex()}return new Mn(r,new mn(this,t,this.tokenRegex.lastIndex))}}class jf{constructor(e,t){e===void 0&&(e={}),t===void 0&&(t={}),this.current=t,this.builtins=e,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new ce("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var e=this.undefStack.pop();for(var t in e)e.hasOwnProperty(t)&&(e[t]==null?delete this.current[t]:this.current[t]=e[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(e){return this.current.hasOwnProperty(e)||this.builtins.hasOwnProperty(e)}get(e){return this.current.hasOwnProperty(e)?this.current[e]:this.builtins[e]}set(e,t,n){if(n===void 0&&(n=!1),n){for(var r=0;r<this.undefStack.length;r++)delete this.undefStack[r][e];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][e]=t)}else{var a=this.undefStack[this.undefStack.length-1];a&&!a.hasOwnProperty(e)&&(a[e]=this.current[e])}t==null?delete this.current[e]:this.current[e]=t}}var Kf=ah;w("\\noexpand",function(i){var e=i.popToken();return i.isExpandable(e.text)&&(e.noexpand=!0,e.treatAsRelax=!0),{tokens:[e],numArgs:0}});w("\\expandafter",function(i){var e=i.popToken();return i.expandOnce(!0),{tokens:[e],numArgs:0}});w("\\@firstoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[0],numArgs:0}});w("\\@secondoftwo",function(i){var e=i.consumeArgs(2);return{tokens:e[1],numArgs:0}});w("\\@ifnextchar",function(i){var e=i.consumeArgs(3);i.consumeSpaces();var t=i.future();return e[0].length===1&&e[0][0].text===t.text?{tokens:e[1],numArgs:0}:{tokens:e[2],numArgs:0}});w("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");w("\\TextOrMath",function(i){var e=i.consumeArgs(2);return i.mode==="text"?{tokens:e[0],numArgs:0}:{tokens:e[1],numArgs:0}});var dc={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};w("\\char",function(i){var e=i.popToken(),t,n=0;if(e.text==="'")t=8,e=i.popToken();else if(e.text==='"')t=16,e=i.popToken();else if(e.text==="`")if(e=i.popToken(),e.text[0]==="\\")n=e.text.charCodeAt(1);else{if(e.text==="EOF")throw new ce("\\char` missing argument");n=e.text.charCodeAt(0)}else t=10;if(t){if(n=dc[e.text],n==null||n>=t)throw new ce("Invalid base-"+t+" digit "+e.text);for(var r;(r=dc[i.future().text])!=null&&r<t;)n*=t,n+=r,i.popToken()}return"\\@char{"+n+"}"});var s0=(i,e,t,n)=>{var r=i.consumeArg().tokens;if(r.length!==1)throw new ce("\\newcommand's first argument must be a macro name");var a=r[0].text,s=i.isDefined(a);if(s&&!e)throw new ce("\\newcommand{"+a+"} attempting to redefine "+(a+"; use \\renewcommand"));if(!s&&!t)throw new ce("\\renewcommand{"+a+"} when command "+a+" does not yet exist; use \\newcommand");var o=0;if(r=i.consumeArg().tokens,r.length===1&&r[0].text==="["){for(var l="",c=i.expandNextToken();c.text!=="]"&&c.text!=="EOF";)l+=c.text,c=i.expandNextToken();if(!l.match(/^\s*[0-9]+\s*$/))throw new ce("Invalid number of arguments: "+l);o=parseInt(l),r=i.consumeArg().tokens}return s&&n||i.macros.set(a,{tokens:r,numArgs:o}),""};w("\\newcommand",i=>s0(i,!1,!0,!1));w("\\renewcommand",i=>s0(i,!0,!1,!1));w("\\providecommand",i=>s0(i,!0,!0,!0));w("\\message",i=>{var e=i.consumeArgs(1)[0];return console.log(e.reverse().map(t=>t.text).join("")),""});w("\\errmessage",i=>{var e=i.consumeArgs(1)[0];return console.error(e.reverse().map(t=>t.text).join("")),""});w("\\show",i=>{var e=i.popToken(),t=e.text;return console.log(e,i.macros.get(t),Ii[t],Et.math[t],Et.text[t]),""});w("\\bgroup","{");w("\\egroup","}");w("~","\\nobreakspace");w("\\lq","`");w("\\rq","'");w("\\aa","\\r a");w("\\AA","\\r A");w("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");w("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");w("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");w("ℬ","\\mathscr{B}");w("ℰ","\\mathscr{E}");w("ℱ","\\mathscr{F}");w("ℋ","\\mathscr{H}");w("ℐ","\\mathscr{I}");w("ℒ","\\mathscr{L}");w("ℳ","\\mathscr{M}");w("ℛ","\\mathscr{R}");w("ℭ","\\mathfrak{C}");w("ℌ","\\mathfrak{H}");w("ℨ","\\mathfrak{Z}");w("\\Bbbk","\\Bbb{k}");w("\\llap","\\mathllap{\\textrm{#1}}");w("\\rlap","\\mathrlap{\\textrm{#1}}");w("\\clap","\\mathclap{\\textrm{#1}}");w("\\mathstrut","\\vphantom{(}");w("\\underbar","\\underline{\\text{#1}}");w("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');w("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");w("\\ne","\\neq");w("≠","\\neq");w("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");w("∉","\\notin");w("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");w("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");w("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");w("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");w("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");w("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");w("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");w("⟂","\\perp");w("‼","\\mathclose{!\\mkern-0.8mu!}");w("∌","\\notni");w("⌜","\\ulcorner");w("⌝","\\urcorner");w("⌞","\\llcorner");w("⌟","\\lrcorner");w("©","\\copyright");w("®","\\textregistered");w("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');w("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');w("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');w("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');w("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");w("⋮","\\vdots");w("\\varGamma","\\mathit{\\Gamma}");w("\\varDelta","\\mathit{\\Delta}");w("\\varTheta","\\mathit{\\Theta}");w("\\varLambda","\\mathit{\\Lambda}");w("\\varXi","\\mathit{\\Xi}");w("\\varPi","\\mathit{\\Pi}");w("\\varSigma","\\mathit{\\Sigma}");w("\\varUpsilon","\\mathit{\\Upsilon}");w("\\varPhi","\\mathit{\\Phi}");w("\\varPsi","\\mathit{\\Psi}");w("\\varOmega","\\mathit{\\Omega}");w("\\substack","\\begin{subarray}{c}#1\\end{subarray}");w("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");w("\\boxed","\\fbox{$\\displaystyle{#1}$}");w("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");w("\\implies","\\DOTSB\\;\\Longrightarrow\\;");w("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");w("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");w("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var fc={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},Zf=new Set(["bin","rel"]);w("\\dots",function(i){var e="\\dotso",t=i.expandAfterFuture().text;return t in fc?e=fc[t]:(t.slice(0,4)==="\\not"||t in Et.math&&Zf.has(Et.math[t].group))&&(e="\\dotsb"),e});var o0={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};w("\\dotso",function(i){var e=i.future().text;return e in o0?"\\ldots\\,":"\\ldots"});w("\\dotsc",function(i){var e=i.future().text;return e in o0&&e!==","?"\\ldots\\,":"\\ldots"});w("\\cdots",function(i){var e=i.future().text;return e in o0?"\\@cdots\\,":"\\@cdots"});w("\\dotsb","\\cdots");w("\\dotsm","\\cdots");w("\\dotsi","\\!\\cdots");w("\\dotsx","\\ldots\\,");w("\\DOTSI","\\relax");w("\\DOTSB","\\relax");w("\\DOTSX","\\relax");w("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");w("\\,","\\tmspace+{3mu}{.1667em}");w("\\thinspace","\\,");w("\\>","\\mskip{4mu}");w("\\:","\\tmspace+{4mu}{.2222em}");w("\\medspace","\\:");w("\\;","\\tmspace+{5mu}{.2777em}");w("\\thickspace","\\;");w("\\!","\\tmspace-{3mu}{.1667em}");w("\\negthinspace","\\!");w("\\negmedspace","\\tmspace-{4mu}{.2222em}");w("\\negthickspace","\\tmspace-{5mu}{.277em}");w("\\enspace","\\kern.5em ");w("\\enskip","\\hskip.5em\\relax");w("\\quad","\\hskip1em\\relax");w("\\qquad","\\hskip2em\\relax");w("\\tag","\\@ifstar\\tag@literal\\tag@paren");w("\\tag@paren","\\tag@literal{({#1})}");w("\\tag@literal",i=>{if(i.macros.get("\\df@tag"))throw new ce("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});w("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");w("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");w("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");w("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");w("\\newline","\\\\\\relax");w("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var vh=me(Wn["Main-Regular"][84][1]-.7*Wn["Main-Regular"][65][1]);w("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+vh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");w("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+vh+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");w("\\hspace","\\@ifstar\\@hspacer\\@hspace");w("\\@hspace","\\hskip #1\\relax");w("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");w("\\ordinarycolon",":");w("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");w("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');w("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');w("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');w("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');w("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');w("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');w("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');w("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');w("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');w("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');w("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');w("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');w("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');w("∷","\\dblcolon");w("∹","\\eqcolon");w("≔","\\coloneqq");w("≕","\\eqqcolon");w("⩴","\\Coloneqq");w("\\ratio","\\vcentcolon");w("\\coloncolon","\\dblcolon");w("\\colonequals","\\coloneqq");w("\\coloncolonequals","\\Coloneqq");w("\\equalscolon","\\eqqcolon");w("\\equalscoloncolon","\\Eqqcolon");w("\\colonminus","\\coloneq");w("\\coloncolonminus","\\Coloneq");w("\\minuscolon","\\eqcolon");w("\\minuscoloncolon","\\Eqcolon");w("\\coloncolonapprox","\\Colonapprox");w("\\coloncolonsim","\\Colonsim");w("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");w("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");w("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");w("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");w("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");w("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");w("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");w("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");w("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");w("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");w("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");w("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");w("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");w("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");w("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");w("\\nleqq","\\html@mathml{\\@nleqq}{≰}");w("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");w("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");w("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");w("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");w("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");w("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");w("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");w("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");w("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");w("\\imath","\\html@mathml{\\@imath}{ı}");w("\\jmath","\\html@mathml{\\@jmath}{ȷ}");w("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");w("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");w("⟦","\\llbracket");w("⟧","\\rrbracket");w("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");w("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");w("⦃","\\lBrace");w("⦄","\\rBrace");w("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");w("⦵","\\minuso");w("\\darr","\\downarrow");w("\\dArr","\\Downarrow");w("\\Darr","\\Downarrow");w("\\lang","\\langle");w("\\rang","\\rangle");w("\\uarr","\\uparrow");w("\\uArr","\\Uparrow");w("\\Uarr","\\Uparrow");w("\\N","\\mathbb{N}");w("\\R","\\mathbb{R}");w("\\Z","\\mathbb{Z}");w("\\alef","\\aleph");w("\\alefsym","\\aleph");w("\\Alpha","\\mathrm{A}");w("\\Beta","\\mathrm{B}");w("\\bull","\\bullet");w("\\Chi","\\mathrm{X}");w("\\clubs","\\clubsuit");w("\\cnums","\\mathbb{C}");w("\\Complex","\\mathbb{C}");w("\\Dagger","\\ddagger");w("\\diamonds","\\diamondsuit");w("\\empty","\\emptyset");w("\\Epsilon","\\mathrm{E}");w("\\Eta","\\mathrm{H}");w("\\exist","\\exists");w("\\harr","\\leftrightarrow");w("\\hArr","\\Leftrightarrow");w("\\Harr","\\Leftrightarrow");w("\\hearts","\\heartsuit");w("\\image","\\Im");w("\\infin","\\infty");w("\\Iota","\\mathrm{I}");w("\\isin","\\in");w("\\Kappa","\\mathrm{K}");w("\\larr","\\leftarrow");w("\\lArr","\\Leftarrow");w("\\Larr","\\Leftarrow");w("\\lrarr","\\leftrightarrow");w("\\lrArr","\\Leftrightarrow");w("\\Lrarr","\\Leftrightarrow");w("\\Mu","\\mathrm{M}");w("\\natnums","\\mathbb{N}");w("\\Nu","\\mathrm{N}");w("\\Omicron","\\mathrm{O}");w("\\plusmn","\\pm");w("\\rarr","\\rightarrow");w("\\rArr","\\Rightarrow");w("\\Rarr","\\Rightarrow");w("\\real","\\Re");w("\\reals","\\mathbb{R}");w("\\Reals","\\mathbb{R}");w("\\Rho","\\mathrm{P}");w("\\sdot","\\cdot");w("\\sect","\\S");w("\\spades","\\spadesuit");w("\\sub","\\subset");w("\\sube","\\subseteq");w("\\supe","\\supseteq");w("\\Tau","\\mathrm{T}");w("\\thetasym","\\vartheta");w("\\weierp","\\wp");w("\\Zeta","\\mathrm{Z}");w("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");w("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");w("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");w("\\bra","\\mathinner{\\langle{#1}|}");w("\\ket","\\mathinner{|{#1}\\rangle}");w("\\braket","\\mathinner{\\langle{#1}\\rangle}");w("\\Bra","\\left\\langle#1\\right|");w("\\Ket","\\left|#1\\right\\rangle");var xh=i=>e=>{var t=e.consumeArg().tokens,n=e.consumeArg().tokens,r=e.consumeArg().tokens,a=e.consumeArg().tokens,s=e.macros.get("|"),o=e.macros.get("\\|");e.macros.beginGroup();var l=f=>h=>{i&&(h.macros.set("|",s),r.length&&h.macros.set("\\|",o));var p=f;if(!f&&r.length){var x=h.future();x.text==="|"&&(h.popToken(),p=!0)}return{tokens:p?r:n,numArgs:0}};e.macros.set("|",l(!1)),r.length&&e.macros.set("\\|",l(!0));var c=e.consumeArg().tokens,u=e.expandTokens([...a,...c,...t]);return e.macros.endGroup(),{tokens:u.reverse(),numArgs:0}};w("\\bra@ket",xh(!1));w("\\bra@set",xh(!0));w("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");w("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");w("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");w("\\angln","{\\angl n}");w("\\blue","\\textcolor{##6495ed}{#1}");w("\\orange","\\textcolor{##ffa500}{#1}");w("\\pink","\\textcolor{##ff00af}{#1}");w("\\red","\\textcolor{##df0030}{#1}");w("\\green","\\textcolor{##28ae7b}{#1}");w("\\gray","\\textcolor{gray}{#1}");w("\\purple","\\textcolor{##9d38bd}{#1}");w("\\blueA","\\textcolor{##ccfaff}{#1}");w("\\blueB","\\textcolor{##80f6ff}{#1}");w("\\blueC","\\textcolor{##63d9ea}{#1}");w("\\blueD","\\textcolor{##11accd}{#1}");w("\\blueE","\\textcolor{##0c7f99}{#1}");w("\\tealA","\\textcolor{##94fff5}{#1}");w("\\tealB","\\textcolor{##26edd5}{#1}");w("\\tealC","\\textcolor{##01d1c1}{#1}");w("\\tealD","\\textcolor{##01a995}{#1}");w("\\tealE","\\textcolor{##208170}{#1}");w("\\greenA","\\textcolor{##b6ffb0}{#1}");w("\\greenB","\\textcolor{##8af281}{#1}");w("\\greenC","\\textcolor{##74cf70}{#1}");w("\\greenD","\\textcolor{##1fab54}{#1}");w("\\greenE","\\textcolor{##0d923f}{#1}");w("\\goldA","\\textcolor{##ffd0a9}{#1}");w("\\goldB","\\textcolor{##ffbb71}{#1}");w("\\goldC","\\textcolor{##ff9c39}{#1}");w("\\goldD","\\textcolor{##e07d10}{#1}");w("\\goldE","\\textcolor{##a75a05}{#1}");w("\\redA","\\textcolor{##fca9a9}{#1}");w("\\redB","\\textcolor{##ff8482}{#1}");w("\\redC","\\textcolor{##f9685d}{#1}");w("\\redD","\\textcolor{##e84d39}{#1}");w("\\redE","\\textcolor{##bc2612}{#1}");w("\\maroonA","\\textcolor{##ffbde0}{#1}");w("\\maroonB","\\textcolor{##ff92c6}{#1}");w("\\maroonC","\\textcolor{##ed5fa6}{#1}");w("\\maroonD","\\textcolor{##ca337c}{#1}");w("\\maroonE","\\textcolor{##9e034e}{#1}");w("\\purpleA","\\textcolor{##ddd7ff}{#1}");w("\\purpleB","\\textcolor{##c6b9fc}{#1}");w("\\purpleC","\\textcolor{##aa87ff}{#1}");w("\\purpleD","\\textcolor{##7854ab}{#1}");w("\\purpleE","\\textcolor{##543b78}{#1}");w("\\mintA","\\textcolor{##f5f9e8}{#1}");w("\\mintB","\\textcolor{##edf2df}{#1}");w("\\mintC","\\textcolor{##e0e5cc}{#1}");w("\\grayA","\\textcolor{##f6f7f7}{#1}");w("\\grayB","\\textcolor{##f0f1f2}{#1}");w("\\grayC","\\textcolor{##e3e5e6}{#1}");w("\\grayD","\\textcolor{##d6d8da}{#1}");w("\\grayE","\\textcolor{##babec2}{#1}");w("\\grayF","\\textcolor{##888d93}{#1}");w("\\grayG","\\textcolor{##626569}{#1}");w("\\grayH","\\textcolor{##3b3e40}{#1}");w("\\grayI","\\textcolor{##21242c}{#1}");w("\\kaBlue","\\textcolor{##314453}{#1}");w("\\kaGreen","\\textcolor{##71B307}{#1}");var yh={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class Jf{constructor(e,t,n){this.settings=t,this.expansionCount=0,this.feed(e),this.macros=new jf(Kf,t.macros),this.mode=n,this.stack=[]}feed(e){this.lexer=new hc(e,this.settings)}switchMode(e){this.mode=e}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(e){this.stack.push(e)}pushTokens(e){this.stack.push(...e)}scanArgument(e){var t,n,r;if(e){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:r,end:n}=this.consumeArg(["]"])}else({tokens:r,start:t,end:n}=this.consumeArg());return this.pushToken(new Mn("EOF",n.loc)),this.pushTokens(r),new Mn("",mn.range(t,n))}consumeSpaces(){for(;;){var e=this.future();if(e.text===" ")this.stack.pop();else break}}consumeArg(e){var t=[],n=e&&e.length>0;n||this.consumeSpaces();var r=this.future(),a,s=0,o=0;do{if(a=this.popToken(),t.push(a),a.text==="{")++s;else if(a.text==="}"){if(--s,s===-1)throw new ce("Extra }",a)}else if(a.text==="EOF")throw new ce("Unexpected end of input in a macro argument, expected '"+(e&&n?e[o]:"}")+"'",a);if(e&&n)if((s===0||s===1&&e[o]==="{")&&a.text===e[o]){if(++o,o===e.length){t.splice(-o,o);break}}else o=0}while(s!==0||n);return r.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:r,end:a}}consumeArgs(e,t){if(t){if(t.length!==e+1)throw new ce("The length of delimiters doesn't match the number of args!");for(var n=t[0],r=0;r<n.length;r++){var a=this.popToken();if(n[r]!==a.text)throw new ce("Use of the macro doesn't match its definition",a)}}for(var s=[],o=0;o<e;o++)s.push(this.consumeArg(t&&t[o+1]).tokens);return s}countExpansion(e){if(this.expansionCount+=e,this.expansionCount>this.settings.maxExpand)throw new ce("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(e){var t=this.popToken(),n=t.text,r=t.noexpand?null:this._getExpansion(n);if(r==null||e&&r.unexpandable){if(e&&r==null&&n[0]==="\\"&&!this.isDefined(n))throw new ce("Undefined control sequence: "+n);return this.pushToken(t),!1}this.countExpansion(1);var a=r.tokens,s=this.consumeArgs(r.numArgs,r.delimiters);if(r.numArgs){a=a.slice();for(var o=a.length-1;o>=0;--o){var l=a[o];if(l.text==="#"){if(o===0)throw new ce("Incomplete placeholder at end of macro body",l);if(l=a[--o],l.text==="#")a.splice(o+1,1);else if(/^[1-9]$/.test(l.text))a.splice(o,2,...s[+l.text-1]);else throw new ce("Not a valid argument number",l)}}}return this.pushTokens(a),a.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var e=this.stack.pop();return e.treatAsRelax&&(e.text="\\relax"),e}}expandMacro(e){return this.macros.has(e)?this.expandTokens([new Mn(e)]):void 0}expandTokens(e){var t=[],n=this.stack.length;for(this.pushTokens(e);this.stack.length>n;)if(this.expandOnce(!0)===!1){var r=this.stack.pop();r.treatAsRelax&&(r.noexpand=!1,r.treatAsRelax=!1),t.push(r)}return this.countExpansion(t.length),t}expandMacroAsText(e){var t=this.expandMacro(e);return t&&t.map(n=>n.text).join("")}_getExpansion(e){var t=this.macros.get(e);if(t==null)return t;if(e.length===1){var n=this.lexer.catcodes[e];if(n!=null&&n!==13)return}var r=typeof t=="function"?t(this):t;if(typeof r=="string"){var a=0;if(r.includes("#"))for(var s=r.replace(/##/g,"");s.includes("#"+(a+1));)++a;for(var o=new hc(r,this.settings),l=[],c=o.lex();c.text!=="EOF";)l.push(c),c=o.lex();l.reverse();var u={tokens:l,numArgs:a};return u}return r}isDefined(e){return this.macros.has(e)||Ii.hasOwnProperty(e)||Et.math.hasOwnProperty(e)||Et.text.hasOwnProperty(e)||yh.hasOwnProperty(e)}isExpandable(e){var t=this.macros.get(e);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Ii.hasOwnProperty(e)&&!Ii[e].primitive}}var pc=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Ta=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),no={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},mc={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class Is{constructor(e,t){this.mode="math",this.gullet=new Jf(e,t,this.mode),this.settings=t,this.leftrightDepth=0,this.nextToken=null}expect(e,t){if(t===void 0&&(t=!0),this.fetch().text!==e)throw new ce("Expected '"+e+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(e){this.mode=e,this.gullet.switchMode(e)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var e=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),e}finally{this.gullet.endGroups()}}subparse(e){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Mn("}")),this.gullet.pushTokens(e);var n=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,n}parseExpression(e,t){for(var n=[];;){this.mode==="math"&&this.consumeSpaces();var r=this.fetch();if(Is.endOfExpression.has(r.text)||t&&r.text===t||e&&Ii[r.text]&&Ii[r.text].infix)break;var a=this.parseAtom(t);if(a){if(a.type==="internal")continue}else break;n.push(a)}return this.mode==="text"&&this.formLigatures(n),this.handleInfixNodes(n)}handleInfixNodes(e){for(var t=-1,n,r=0;r<e.length;r++){var a=e[r];if(a.type==="infix"){if(t!==-1)throw new ce("only one infix operator per group",a.token);t=r,n=a.replaceWith}}if(t!==-1&&n){var s,o,l=e.slice(0,t),c=e.slice(t+1);l.length===1&&l[0].type==="ordgroup"?s=l[0]:s={type:"ordgroup",mode:this.mode,body:l},c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c};var u;return n==="\\\\abovefrac"?u=this.callFunction(n,[s,e[t],o],[]):u=this.callFunction(n,[s,o],[]),[u]}else return e}handleSupSubscript(e){var t=this.fetch(),n=t.text;this.consume(),this.consumeSpaces();var r;do{var a;r=this.parseGroup(e)}while(((a=r)==null?void 0:a.type)==="internal");if(!r)throw new ce("Expected group after '"+n+"'",t);return r}formatUnsupportedCmd(e){for(var t=[],n=0;n<e.length;n++)t.push({type:"textord",mode:"text",text:e[n]});var r={type:"text",mode:this.mode,body:t},a={type:"color",mode:this.mode,color:this.settings.errorColor,body:[r]};return a}parseAtom(e){var t=this.parseGroup("atom",e);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var n,r;;){this.consumeSpaces();var a=this.fetch();if(a.text==="\\limits"||a.text==="\\nolimits"){if(t&&t.type==="op"){var s=a.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=a.text==="\\limits");else throw new ce("Limit controls must follow a math operator",a);this.consume()}else if(a.text==="^"){if(n)throw new ce("Double superscript",a);n=this.handleSupSubscript("superscript")}else if(a.text==="_"){if(r)throw new ce("Double subscript",a);r=this.handleSupSubscript("subscript")}else if(a.text==="'"){if(n)throw new ce("Double superscript",a);var o={type:"textord",mode:this.mode,text:"\\prime"},l=[o];for(this.consume();this.fetch().text==="'";)l.push(o),this.consume();this.fetch().text==="^"&&l.push(this.handleSupSubscript("superscript")),n={type:"ordgroup",mode:this.mode,body:l}}else if(Ta[a.text]){var c=pc.test(a.text),u=[];for(u.push(new Mn(Ta[a.text])),this.consume();;){var f=this.fetch().text;if(!Ta[f]||pc.test(f)!==c)break;u.unshift(new Mn(Ta[f])),this.consume()}var h=this.subparse(u);c?r={type:"ordgroup",mode:"math",body:h}:n={type:"ordgroup",mode:"math",body:h}}else break}return n||r?{type:"supsub",mode:this.mode,base:t,sup:n,sub:r}:t}parseFunction(e,t){var n=this.fetch(),r=n.text,a=Ii[r];if(!a)return null;if(this.consume(),t&&t!=="atom"&&!a.allowedInArgument)throw new ce("Got function '"+r+"' with no arguments"+(t?" as "+t:""),n);if(this.mode==="text"&&!a.allowedInText)throw new ce("Can't use function '"+r+"' in text mode",n);if(this.mode==="math"&&a.allowedInMath===!1)throw new ce("Can't use function '"+r+"' in math mode",n);var{args:s,optArgs:o}=this.parseArguments(r,a);return this.callFunction(r,s,o,n,e)}callFunction(e,t,n,r,a){var s={funcName:e,parser:this,token:r,breakOnTokenText:a},o=Ii[e];if(o&&o.handler)return o.handler(s,t,n);throw new ce("No function handler for "+e)}parseArguments(e,t){var n=t.numArgs+t.numOptionalArgs;if(n===0)return{args:[],optArgs:[]};for(var r=[],a=[],s=0;s<n;s++){var o=t.argTypes&&t.argTypes[s],l=s<t.numOptionalArgs;("primitive"in t&&t.primitive&&o==null||t.type==="sqrt"&&s===1&&a[0]==null)&&(o="primitive");var c=this.parseGroupOfType("argument to '"+e+"'",o,l);if(l)a.push(c);else if(c!=null)r.push(c);else throw new ce("Null argument, please report this as a bug")}return{args:r,optArgs:a}}parseGroupOfType(e,t,n){switch(t){case"color":return this.parseColorGroup(n);case"size":return this.parseSizeGroup(n);case"url":return this.parseUrlGroup(n);case"math":case"text":return this.parseArgumentGroup(n,t);case"hbox":{var r=this.parseArgumentGroup(n,"text");return r!=null?{type:"styling",mode:r.mode,body:[r],style:"text"}:null}case"raw":{var a=this.parseStringGroup("raw",n);return a!=null?{type:"raw",mode:"text",string:a.text}:null}case"primitive":{if(n)throw new ce("A primitive argument cannot be optional");var s=this.parseGroup(e);if(s==null)throw new ce("Expected group as "+e,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(n);default:throw new ce("Unknown group type as "+e,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(e,t){var n=this.gullet.scanArgument(t);if(n==null)return null;for(var r="",a;(a=this.fetch()).text!=="EOF";)r+=a.text,this.consume();return this.consume(),n.text=r,n}parseRegexGroup(e,t){for(var n=this.fetch(),r=n,a="",s;(s=this.fetch()).text!=="EOF"&&e.test(a+s.text);)r=s,a+=r.text,this.consume();if(a==="")throw new ce("Invalid "+t+": '"+n.text+"'",n);return n.range(r,a)}parseColorGroup(e){var t=this.parseStringGroup("color",e);if(t==null)return null;var n=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!n)throw new ce("Invalid color: '"+t.text+"'",t);var r=n[0];return/^[0-9a-f]{6}$/i.test(r)&&(r="#"+r),{type:"color-token",mode:this.mode,color:r}}parseSizeGroup(e){var t,n=!1;if(this.gullet.consumeSpaces(),!e&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",e),!t)return null;!e&&t.text.length===0&&(t.text="0pt",n=!0);var r=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!r)throw new ce("Invalid size: '"+t.text+"'",t);var a={number:+(r[1]+r[2]),unit:r[3]};if(!Au(a))throw new ce("Invalid unit: '"+a.unit+"'",t);return{type:"size",mode:this.mode,value:a,isBlank:n}}parseUrlGroup(e){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",e);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var n=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:n}}parseArgumentGroup(e,t){var n=this.gullet.scanArgument(e);if(n==null)return null;var r=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var a=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:n.loc,body:a};return t&&this.switchMode(r),s}parseGroup(e,t){var n=this.fetch(),r=n.text,a;if(r==="{"||r==="\\begingroup"){this.consume();var s=r==="{"?"}":"\\endgroup";this.gullet.beginGroup();var o=this.parseExpression(!1,s),l=this.fetch();this.expect(s),this.gullet.endGroup(),a={type:"ordgroup",mode:this.mode,loc:mn.range(n,l),body:o,semisimple:r==="\\begingroup"||void 0}}else if(a=this.parseFunction(t,e)||this.parseSymbol(),a==null&&r[0]==="\\"&&!yh.hasOwnProperty(r)){if(this.settings.throwOnError)throw new ce("Undefined control sequence: "+r,n);a=this.formatUnsupportedCmd(r),this.consume()}return a}formLigatures(e){for(var t=e.length-1,n=0;n<t;++n){var r=e[n];if(r.type==="textord"){var a=r.text,s=e[n+1];if(!(!s||s.type!=="textord")){if(a==="-"&&s.text==="-"){var o=e[n+2];n+1<t&&o&&o.type==="textord"&&o.text==="-"?(e.splice(n,3,{type:"textord",mode:"text",loc:mn.range(r,o),text:"---"}),t-=2):(e.splice(n,2,{type:"textord",mode:"text",loc:mn.range(r,s),text:"--"}),t-=1)}(a==="'"||a==="`")&&s.text===a&&(e.splice(n,2,{type:"textord",mode:"text",loc:mn.range(r,s),text:a+a}),t-=1)}}}}parseSymbol(){var e=this.fetch(),t=e.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var n=t.slice(5),r=n.charAt(0)==="*";if(r&&(n=n.slice(1)),n.length<2||n.charAt(0)!==n.slice(-1))throw new ce(`\\verb assertion failed --
                    please report what input caused this bug`);return n=n.slice(1,-1),{type:"verb",mode:"text",body:n,star:r}}mc.hasOwnProperty(t[0])&&!Et[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',e),t=mc[t[0]]+t.slice(1));var a=Yf.exec(t);a&&(t=t.substring(0,a.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Et[this.mode][t]){this.settings.strict&&this.mode==="math"&&Vo.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',e);var o=Et[this.mode][t].group,l=mn.range(e),c;if(Yd.hasOwnProperty(o)){var u=o;c={type:"atom",mode:this.mode,family:u,loc:l,text:t}}else c={type:o,mode:this.mode,loc:l,text:t};s=c}else if(t.charCodeAt(0)>=128)this.settings.strict&&(Eu(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',e):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),e)),s={type:"textord",mode:"text",loc:mn.range(e),text:t};else return null;if(this.consume(),a)for(var f=0;f<a[0].length;f++){var h=a[0][f];if(!no[h])throw new ce("Unknown accent ' "+h+"'",e);var p=no[h][this.mode]||no[h].text;if(!p)throw new ce("Accent "+h+" unsupported in "+this.mode+" mode",e);s={type:"accent",mode:this.mode,loc:mn.range(e),label:p,isStretchy:!1,isShifty:!0,base:s}}return s}}Is.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var l0=function(e,t){if(!(typeof e=="string"||e instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var n=new Is(e,t);delete n.gullet.macros.current["\\df@tag"];var r=n.parse();if(delete n.gullet.macros.current["\\current@color"],delete n.gullet.macros.current["\\color"],n.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new ce("\\tag works only in display equations");r=[{type:"tag",mode:"text",body:r,tag:n.subparse([new Mn("\\df@tag")])}]}return r},bh=function(e,t,n){t.textContent="";var r=c0(e,n).toNode();t.appendChild(r)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),bh=function(){throw new ce("KaTeX doesn't work in quirks mode.")});var Qf=function(e,t){var n=c0(e,t).toMarkup();return n},ep=function(e,t){var n=new Yl(t);return l0(e,n)},_h=function(e,t,n){if(n.throwOnError||!(e instanceof ce))throw e;var r=oe(["katex-error"],[new wn(t)]);return r.setAttribute("title",e.toString()),r.setAttribute("style","color:"+n.errorColor),r},c0=function(e,t){var n=new Yl(t);try{var r=l0(e,n);return uf(r,e,n)}catch(a){return _h(a,e,n)}},tp=function(e,t){var n=new Yl(t);try{var r=l0(e,n);return hf(r,e,n)}catch(a){return _h(a,e,n)}},np="0.16.40",ip={Span:Br,Anchor:Ms,SymbolNode:wn,SvgNode:pi,PathNode:Fi,LineNode:Go},Tt={version:np,render:bh,renderToString:Qf,ParseError:ce,SETTINGS_SCHEMA:Bo,__parse:ep,__renderToDomTree:c0,__renderToHTMLTree:tp,__setFontMetrics:qd,__defineSymbol:d,__defineFunction:we,__defineMacro:w,__domTree:ip};function rp(){const i=document.createElement("div");i.className="modal-overlay",i.id="glossary-modal",i.addEventListener("click",n=>{n.target===i&&i.classList.remove("open")});let t=[{term:"Hydrostatic Equilibrium",equation:"\\frac{dP}{dr} = -g(r)\\,\\rho(r)",desc:"The balance between the inward pull of gravity and the outward pressure gradient. In an icy moon, each layer — ice shell, ocean, mantle, core — satisfies this relation, determining the pressure profile with depth. This is directly applied in modelling Europa's internal density structure."},{term:"Schwarzschild Criterion",equation:"\\left|\\frac{dT}{dr}\\right|_{\\text{actual}} > \\left|\\frac{dT}{dr}\\right|_{\\text{adiabat}}",desc:"A layer becomes convectively unstable when the actual temperature gradient exceeds the adiabatic gradient. In Europa's ice shell, this criterion governs whether heat is transported conductively (thin shell) or convectively (thick shell), creating the bistability explored by Pagnoscin et al. (2026)."},{term:"Virial Theorem",equation:"2K + U_{\\text{grav}} = 0",desc:"For a self-gravitating system in equilibrium, twice the total kinetic (thermal) energy equals the magnitude of the gravitational potential energy. Applied to icy moons, it constrains the global energy budget linking tidal heating, radiogenic heating, and the thermal state of the interior."},{term:"Rayleigh Number (Ra)",equation:"Ra = \\frac{g\\,\\alpha\\,\\Delta T\\,d^3}{\\nu\\,\\kappa}",desc:"A dimensionless number measuring the vigour of thermal convection. Europa's subsurface ocean has Ra ~ 10²⁰–10²⁶, meaning convection is extremely turbulent. Pagnoscin et al. (2026) use Ra as the key control parameter for their convective fluid simulations."},{term:"Ekman Number (Ek)",equation:"Ek = \\frac{\\nu}{\\Omega\\,d^2}",desc:"The ratio of viscous forces to Coriolis forces. Europa's small Ek (≈ 10⁻¹²–10⁻¹¹) indicates strong rotational influence on ocean currents, organizing flow into Taylor columns aligned with the rotation axis."},{term:"Taylor-Proudman Theorem",equation:"(2\\vec{\\Omega} \\cdot \\nabla)\\vec{u} = 0",desc:`In rapidly rotating fluids (low Ek), flows tend to be invariant along the rotation axis, forming "Taylor columns". These columnar flows are expected to dominate Europa's ocean circulation and control the spatial pattern of heat delivery to the ice-ocean boundary.`},{term:"Tidal Love Number (k₂)",equation:"k_2 = \\frac{\\text{induced gravity field}}{\\text{tidal potential}}",desc:"A dimensionless parameter characterising a body's deformation response to tidal forcing. Steinbrügge et al. (2026) describe how Europa Clipper will measure k₂ to constrain the ice shell thickness and confirm the ocean's existence — a decoupled ice shell yields k₂ ≈ 0.25."},{term:"Nusselt Number (Nu)",equation:"Nu = \\frac{\\text{total heat flux}}{\\text{conductive heat flux}}",desc:"The ratio of total (convective + conductive) heat transport to purely conductive transport. Nu > 1 indicates active convection. In Pagnoscin et al. (2026), the Nusselt number at the ice-ocean boundary quantifies how convective plumes enhance local melting and freezing rates."},{term:"Stefan Condition (Phase Interface)",equation:"\\rho L_V \\frac{dh}{dt} = k\\frac{\\partial T}{\\partial z}\\Big|_{\\text{ice}} - k\\frac{\\partial T}{\\partial z}\\Big|_{\\text{ocean}}",desc:"Governs the advance or retreat of an ice-ocean boundary. The difference in heat flux on either side of the interface determines the rate of freezing or melting. This is the key equation for ice shell thickness evolution."}].map(n=>{const r=Tt.renderToString(n.equation,{throwOnError:!1,displayMode:!0});return`
      <div class="glossary-entry">
        <h4>${n.term}</h4>
        <div class="equation-block" style="margin: 10px 0;">${r}</div>
        <p>${n.desc}</p>
      </div>
    `}).join("");return i.innerHTML=`
    <div class="modal">
      <button class="modal-close" onclick="document.getElementById('glossary-modal').classList.remove('open')">✕</button>
      <h3 style="font-family: var(--font-display); font-size: 22px; margin-bottom: 4px;">AST320 Glossary</h3>
      <p style="font-size: 13px; color: var(--text-secondary); margin-bottom: 20px;">Key concepts linking planetary dynamics to introductory astrophysics.</p>
      ${t}
    </div>
  `,i}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const u0="183",Ar={ROTATE:0,DOLLY:1,PAN:2},wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ap=0,gc=1,sp=2,as=1,op=2,Jr=3,mi=0,an=1,Un=2,di=0,Cr=1,vc=2,xc=3,yc=4,lp=5,Zi=100,cp=101,up=102,hp=103,dp=104,fp=200,pp=201,mp=202,gp=203,Qo=204,el=205,vp=206,xp=207,yp=208,bp=209,_p=210,Mp=211,Sp=212,wp=213,Tp=214,tl=0,nl=1,il=2,Lr=3,rl=4,al=5,sl=6,ol=7,Mh=0,Ep=1,Ap=2,Yn=0,Sh=1,wh=2,Th=3,h0=4,Eh=5,Ah=6,Ch=7,Rh=300,nr=301,Nr=302,io=303,ro=304,Ls=306,ir=1e3,_n=1001,ll=1002,Jt=1003,Cp=1004,Ea=1005,nn=1006,ao=1007,Qi=1008,bn=1009,Ph=1010,Dh=1011,ra=1012,d0=1013,jn=1014,qn=1015,gi=1016,f0=1017,p0=1018,aa=1020,Ih=35902,Lh=35899,Nh=1021,Uh=1022,kn=1023,vi=1026,er=1027,Fh=1028,m0=1029,Ur=1030,g0=1031,v0=1033,ss=33776,os=33777,ls=33778,cs=33779,cl=35840,ul=35841,hl=35842,dl=35843,fl=36196,pl=37492,ml=37496,gl=37488,vl=37489,xl=37490,yl=37491,bl=37808,_l=37809,Ml=37810,Sl=37811,wl=37812,Tl=37813,El=37814,Al=37815,Cl=37816,Rl=37817,Pl=37818,Dl=37819,Il=37820,Ll=37821,Nl=36492,Ul=36494,Fl=36495,kl=36283,Ol=36284,Bl=36285,zl=36286,Rp=3200,kh=0,Pp=1,Di="",Cn="srgb",Fr="srgb-linear",vs="linear",vt="srgb",ur=7680,bc=519,Dp=512,Ip=513,Lp=514,x0=515,Np=516,Up=517,y0=518,Fp=519,_c=35044,Mc="300 es",Xn=2e3,sa=2001;function kp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Op(){const i=xs("canvas");return i.style.display="block",i}const Sc={};function wc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Oh(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ye(...i){i=Oh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function dt(...i){i=Oh(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ys(...i){const e=i.join(" ");e in Sc||(Sc[e]=!0,Ye(...i))}function Bp(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const zp={[tl]:nl,[il]:sl,[rl]:ol,[Lr]:al,[nl]:tl,[sl]:il,[ol]:rl,[al]:Lr};class ar{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],us=Math.PI/180,Hl=180/Math.PI;function ha(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Hp(i,e){return(i%e+e)%e}function so(i,e,t){return(1-t)*i+t*e}function Vr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Gp={DEG2RAD:us};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3],h=a[s+0],p=a[s+1],x=a[s+2],y=a[s+3];if(f!==y||l!==h||c!==p||u!==x){let m=l*h+c*p+u*x+f*y;m<0&&(h=-h,p=-p,x=-x,y=-y,m=-m);let g=1-o;if(m<.9995){const S=Math.acos(m),C=Math.sin(S);g=Math.sin(g*S)/C,o=Math.sin(o*S)/C,l=l*g+h*o,c=c*g+p*o,u=u*g+x*o,f=f*g+y*o}else{l=l*g+h*o,c=c*g+p*o,u=u*g+x*o,f=f*g+y*o;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=a[s],h=a[s+1],p=a[s+2],x=a[s+3];return e[t]=o*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-o*p,e[t+2]=c*x+u*p+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(a/2),h=l(n/2),p=l(r/2),x=l(a/2);switch(s){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:Ye("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(a-c)*p,this._z=(s-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(a-c)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(s-r)/p,this._x=(a+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-n*c,this._z=a*u+s*c+n*l-r*o,this._w=s*u-n*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,a=e._z,s=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,a=-a,s=-s,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+a*t,this._w=this._w*l+s*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,n=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*n),u=2*(o*t-a*r),f=2*(a*n-s*t);return this.x=t+l*c+s*f-o*u,this.y=n+l*u+o*c-a*f,this.z=r+l*f+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-n*l,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return oo.copy(this).projectOnVector(e),this.sub(oo)}reflect(e){return this.sub(oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oo=new G,Tc=new Bi;class Qe{constructor(e,t,n,r,a,s,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c)}set(e,t,n,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],x=n[8],y=r[0],m=r[3],g=r[6],S=r[1],C=r[4],E=r[7],D=r[2],P=r[5],L=r[8];return a[0]=s*y+o*S+l*D,a[3]=s*m+o*C+l*P,a[6]=s*g+o*E+l*L,a[1]=c*y+u*S+f*D,a[4]=c*m+u*C+f*P,a[7]=c*g+u*E+f*L,a[2]=h*y+p*S+x*D,a[5]=h*m+p*C+x*P,a[8]=h*g+p*E+x*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-n*a*u+n*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*s-o*c,h=o*l-u*a,p=c*a-s*l,x=t*f+n*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=f*y,e[1]=(r*c-u*n)*y,e[2]=(o*n-r*s)*y,e[3]=h*y,e[4]=(u*t-r*l)*y,e[5]=(r*a-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(s*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(n*l,n*c,-n*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lo.makeScale(e,t)),this}rotate(e){return this.premultiply(lo.makeRotation(-e)),this}translate(e,t){return this.premultiply(lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const lo=new Qe,Ec=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vp(){const i={enabled:!0,workingColorSpace:Fr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===vt&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===vt&&(r.r=Rr(r.r),r.g=Rr(r.g),r.b=Rr(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Di?vs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Fr]:{primaries:e,whitePoint:n,transfer:vs,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Cn},outputColorSpaceConfig:{drawingBufferColorSpace:Cn}},[Cn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Ec,fromXYZ:Ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Cn}}}),i}const ct=Vp();function fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hr;class Wp{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hr===void 0&&(hr=xs("canvas")),hr.width=e.width,hr.height=e.height;const r=hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=fi(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(fi(t[n]/255)*255):t[n]=fi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ye("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qp=0;class b0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ha(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(co(r[s].image)):a.push(co(r[s]))}else a=co(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ye("Texture: Unable to serialize Texture."),{})}let Xp=0;const uo=new G;class sn extends ar{constructor(e=sn.DEFAULT_IMAGE,t=sn.DEFAULT_MAPPING,n=_n,r=_n,a=nn,s=Qi,o=kn,l=bn,c=sn.DEFAULT_ANISOTROPY,u=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=ha(),this.name="",this.source=new b0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uo).x}get height(){return this.source.getSize(uo).y}get depth(){return this.source.getSize(uo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ye(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ir:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case ll:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ir:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case ll:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Rh;sn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],y=l[2],m=l[6],g=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-y)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+y)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,E=(p+1)/2,D=(g+1)/2,P=(u+h)/4,L=(f+y)/4,M=(x+m)/4;return C>E&&C>D?C<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(C),r=P/n,a=L/n):E>D?E<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),n=P/r,a=M/r):D<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(D),n=L/a,r=M/a),this.set(n,r,a,t),this}let S=Math.sqrt((m-x)*(m-x)+(f-y)*(f-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-x)/S,this.y=(f-y)/S,this.z=(h-u)/S,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yp extends ar{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},a=new sn(r),s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new b0(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Yp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Bh extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $p extends sn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e,t,n,r,a,s,o,l,c,u,f,h,p,x,y,m){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,l,c,u,f,h,p,x,y,m)}set(e,t,n,r,a,s,o,l,c,u,f,h,p,x,y,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=a,g[5]=s,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=f,g[14]=h,g[3]=p,g[7]=x,g[11]=y,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/dr.setFromMatrixColumn(e,0).length(),a=1/dr.setFromMatrixColumn(e,1).length(),s=1/dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),f=Math.sin(a);if(e.order==="XYZ"){const h=s*u,p=s*f,x=o*u,y=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-y*c,t[9]=-o*l,t[2]=y-h*c,t[6]=x+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,x=c*u,y=c*f;t[0]=h+y*o,t[4]=x*o-p,t[8]=s*c,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=p*o-x,t[6]=y+h*o,t[10]=s*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,x=c*u,y=c*f;t[0]=h-y*o,t[4]=-s*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=s*u,t[9]=y-h*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const h=s*u,p=s*f,x=o*u,y=o*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+y,t[1]=l*f,t[5]=y*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,x=o*l,y=o*c;t[0]=l*u,t[4]=y-h*f,t[8]=x*f+p,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-y*f}else if(e.order==="XZY"){const h=s*l,p=s*c,x=o*l,y=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+y,t[5]=s*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=y*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jp,e,Kp)}lookAt(e,t,n){const r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ti.crossVectors(n,vn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ti.crossVectors(n,vn)),Ti.normalize(),Aa.crossVectors(vn,Ti),r[0]=Ti.x,r[4]=Aa.x,r[8]=vn.x,r[1]=Ti.y,r[5]=Aa.y,r[9]=vn.y,r[2]=Ti.z,r[6]=Aa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],x=n[2],y=n[6],m=n[10],g=n[14],S=n[3],C=n[7],E=n[11],D=n[15],P=r[0],L=r[4],M=r[8],A=r[12],K=r[1],U=r[5],B=r[9],q=r[13],X=r[2],W=r[6],Y=r[10],V=r[14],se=r[3],re=r[7],xe=r[11],_e=r[15];return a[0]=s*P+o*K+l*X+c*se,a[4]=s*L+o*U+l*W+c*re,a[8]=s*M+o*B+l*Y+c*xe,a[12]=s*A+o*q+l*V+c*_e,a[1]=u*P+f*K+h*X+p*se,a[5]=u*L+f*U+h*W+p*re,a[9]=u*M+f*B+h*Y+p*xe,a[13]=u*A+f*q+h*V+p*_e,a[2]=x*P+y*K+m*X+g*se,a[6]=x*L+y*U+m*W+g*re,a[10]=x*M+y*B+m*Y+g*xe,a[14]=x*A+y*q+m*V+g*_e,a[3]=S*P+C*K+E*X+D*se,a[7]=S*L+C*U+E*W+D*re,a[11]=S*M+C*B+E*Y+D*xe,a[15]=S*A+C*q+E*V+D*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],y=e[7],m=e[11],g=e[15],S=l*p-c*h,C=o*p-c*f,E=o*h-l*f,D=s*p-c*u,P=s*h-l*u,L=s*f-o*u;return t*(y*S-m*C+g*E)-n*(x*S-m*D+g*P)+r*(x*C-y*D+g*L)-a*(x*E-y*P+m*L)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],y=e[13],m=e[14],g=e[15],S=t*o-n*s,C=t*l-r*s,E=t*c-a*s,D=n*l-r*o,P=n*c-a*o,L=r*c-a*l,M=u*y-f*x,A=u*m-h*x,K=u*g-p*x,U=f*m-h*y,B=f*g-p*y,q=h*g-p*m,X=S*q-C*B+E*U+D*K-P*A+L*M;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/X;return e[0]=(o*q-l*B+c*U)*W,e[1]=(r*B-n*q-a*U)*W,e[2]=(y*L-m*P+g*D)*W,e[3]=(h*P-f*L-p*D)*W,e[4]=(l*K-s*q-c*A)*W,e[5]=(t*q-r*K+a*A)*W,e[6]=(m*E-x*L-g*C)*W,e[7]=(u*L-h*E+p*C)*W,e[8]=(s*B-o*K+c*M)*W,e[9]=(n*K-t*B-a*M)*W,e[10]=(x*P-y*E+g*S)*W,e[11]=(f*E-u*P-p*S)*W,e[12]=(o*A-s*U-l*M)*W,e[13]=(t*U-n*A+r*M)*W,e[14]=(y*C-x*D-m*S)*W,e[15]=(u*D-f*C+h*S)*W,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,f=o+o,h=a*c,p=a*u,x=a*f,y=s*u,m=s*f,g=o*f,S=l*c,C=l*u,E=l*f,D=n.x,P=n.y,L=n.z;return r[0]=(1-(y+g))*D,r[1]=(p+E)*D,r[2]=(x-C)*D,r[3]=0,r[4]=(p-E)*P,r[5]=(1-(h+g))*P,r[6]=(m+S)*P,r[7]=0,r[8]=(x+C)*L,r[9]=(m-S)*L,r[10]=(1-(h+y))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinant();if(a===0)return n.set(1,1,1),t.identity(),this;let s=dr.set(r[0],r[1],r[2]).length();const o=dr.set(r[4],r[5],r[6]).length(),l=dr.set(r[8],r[9],r[10]).length();a<0&&(s=-s),In.copy(this);const c=1/s,u=1/o,f=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,a,s,o=Xn,l=!1){const c=this.elements,u=2*a/(t-e),f=2*a/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let x,y;if(l)x=a/(s-a),y=s*a/(s-a);else if(o===Xn)x=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===sa)x=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=Xn,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,y;if(l)x=1/(s-a),y=s/(s-a);else if(o===Xn)x=-2/(s-a),y=-(s+a)/(s-a);else if(o===sa)x=-1/(s-a),y=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const dr=new G,In=new At,jp=new G(0,0,0),Kp=new G(1,1,1),Ti=new G,Aa=new G,vn=new G,Cc=new At,Rc=new Bi;class Kn{constructor(e=0,t=0,n=0,r=Kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,a),this._z=0);break;case"ZXY":this._x=Math.asin(at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-at(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ye("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Kn.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const Pc=new G,fr=new Bi,ri=new At,Ca=new G,Wr=new G,Jp=new G,Qp=new Bi,Dc=new G(1,0,0),Ic=new G(0,1,0),Lc=new G(0,0,1),Nc={type:"added"},em={type:"removed"},pr={type:"childadded",child:null},ho={type:"childremoved",child:null};class on extends ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=ha(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new G,t=new Kn,n=new Bi,r=new G(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Qe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.multiply(fr),this}rotateOnWorldAxis(e,t){return fr.setFromAxisAngle(e,t),this.quaternion.premultiply(fr),this}rotateX(e){return this.rotateOnAxis(Dc,e)}rotateY(e){return this.rotateOnAxis(Ic,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Pc.copy(e).applyQuaternion(this.quaternion),this.position.add(Pc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dc,e)}translateY(e){return this.translateOnAxis(Ic,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Wr,Ca,this.up):ri.lookAt(Ca,Wr,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),fr.setFromRotationMatrix(ri),this.quaternion.premultiply(fr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nc),pr.child=e,this.dispatchEvent(pr),pr.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),ho.child=e,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nc),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,Jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*n-a[8]*r,a[13]+=n-a[1]*t-a[5]*n-a[9]*r,a[14]+=r-a[2]*t-a[6]*n-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];a(e.shapes,f)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),h=s(e.skeletons),p=s(e.animations),x=s(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}on.DEFAULT_UP=new G(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Li extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tm={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,n),g=this._getHandJoint(c,y);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function po(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class lt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ct.workingColorSpace){if(e=Hp(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=po(s,a,e+1/3),this.g=po(s,a,e),this.b=po(s,a,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,t=Cn){function n(a){a!==void 0&&parseFloat(a)<1&&Ye("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Ye("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);Ye("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Cn){const n=Hh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ye("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return ct.workingToColorSpace(tn.copy(this),e),Math.round(at(tn.r*255,0,255))*65536+Math.round(at(tn.g*255,0,255))*256+Math.round(at(tn.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(tn.copy(this),t);const n=tn.r,r=tn.g,a=tn.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const f=s-o;switch(c=u<=.5?f/(s+o):f/(2-s-o),s){case n:l=(r-a)/f+(r<a?6:0);break;case r:l=(a-n)/f+2;break;case a:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Cn){ct.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,r=tn.b;return e!==Cn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Ra);const n=so(Ei.h,Ra.h,t),r=so(Ei.s,Ra.s,t),a=so(Ei.l,Ra.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new lt;lt.NAMES=Hh;class nm extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ln=new G,ai=new G,mo=new G,si=new G,mr=new G,gr=new G,Uc=new G,go=new G,vo=new G,xo=new G,yo=new Ut,bo=new Ut,_o=new Ut;class Fn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Ln.subVectors(e,t),r.cross(Ln);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Ln.subVectors(r,t),ai.subVectors(n,t),mo.subVectors(e,t);const s=Ln.dot(Ln),o=Ln.dot(ai),l=Ln.dot(mo),c=ai.dot(ai),u=ai.dot(mo),f=s*c-o*o;if(f===0)return a.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,x=(s*u-o*l)*h;return a.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,t,n,r,a,s,o,l){return this.getBarycoord(e,t,n,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,si.x),l.addScaledVector(s,si.y),l.addScaledVector(o,si.z),l)}static getInterpolatedAttribute(e,t,n,r,a,s){return yo.setScalar(0),bo.setScalar(0),_o.setScalar(0),yo.fromBufferAttribute(e,t),bo.fromBufferAttribute(e,n),_o.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(yo,a.x),s.addScaledVector(bo,a.y),s.addScaledVector(_o,a.z),s}static isFrontFacing(e,t,n,r){return Ln.subVectors(n,t),ai.subVectors(e,t),Ln.cross(ai).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Ln.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Fn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;mr.subVectors(r,n),gr.subVectors(a,n),go.subVectors(e,n);const l=mr.dot(go),c=gr.dot(go);if(l<=0&&c<=0)return t.copy(n);vo.subVectors(e,r);const u=mr.dot(vo),f=gr.dot(vo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(n).addScaledVector(mr,s);xo.subVectors(e,a);const p=mr.dot(xo),x=gr.dot(xo);if(x>=0&&p<=x)return t.copy(a);const y=p*c-l*x;if(y<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(gr,o);const m=u*x-p*f;if(m<=0&&f-u>=0&&p-x>=0)return Uc.subVectors(a,r),o=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(Uc,o);const g=1/(m+y+h);return s=y*g,o=h*g,t.copy(n).addScaledVector(mr,s).addScaledVector(gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Nn):Nn.fromBufferAttribute(a,s),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pa.copy(n.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Da.subVectors(this.max,qr),vr.subVectors(e.a,qr),xr.subVectors(e.b,qr),yr.subVectors(e.c,qr),Ai.subVectors(xr,vr),Ci.subVectors(yr,xr),qi.subVectors(vr,yr);let t=[0,-Ai.z,Ai.y,0,-Ci.z,Ci.y,0,-qi.z,qi.y,Ai.z,0,-Ai.x,Ci.z,0,-Ci.x,qi.z,0,-qi.x,-Ai.y,Ai.x,0,-Ci.y,Ci.x,0,-qi.y,qi.x,0];return!Mo(t,vr,xr,yr,Da)||(t=[1,0,0,0,1,0,0,0,1],!Mo(t,vr,xr,yr,Da))?!1:(Ia.crossVectors(Ai,Ci),t=[Ia.x,Ia.y,Ia.z],Mo(t,vr,xr,yr,Da))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const oi=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,Pa=new da,vr=new G,xr=new G,yr=new G,Ai=new G,Ci=new G,qi=new G,qr=new G,Da=new G,Ia=new G,Xi=new G;function Mo(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){Xi.fromArray(i,a);const o=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),l=e.dot(Xi),c=t.dot(Xi),u=n.dot(Xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ot=new G,La=new Ke;let im=0;class Sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:im++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=fn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=fn(t,this.array),n=fn(n,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}}class Gh extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Vh extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const rm=new da,Xr=new G,So=new G;class fa{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):rm.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Xr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(So.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(So)),this.expandByPoint(Xr.copy(e.center).sub(So))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let am=0;const An=new At,wo=new on,br=new G,xn=new da,Yr=new da,jt=new G;class Kt extends ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ha(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kp(e)?Vh:Gh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Qe().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,t,n){return An.makeTranslation(e,t,n),this.applyMatrix4(An),this}scale(e,t,n){return An.makeScale(e,t,n),this.applyMatrix4(An),this}lookAt(e){return wo.lookAt(e),wo.updateMatrix(),this.applyMatrix4(wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&Ye("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(xn.min,Yr.min),xn.expandByPoint(jt),jt.addVectors(xn.max,Yr.max),xn.expandByPoint(jt)):(xn.expandByPoint(Yr.min),xn.expandByPoint(Yr.max))}xn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)jt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(jt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(br.fromBufferAttribute(e,c),jt.add(br)),r=Math.max(r,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let M=0;M<n.count;M++)o[M]=new G,l[M]=new G;const c=new G,u=new G,f=new G,h=new Ke,p=new Ke,x=new Ke,y=new G,m=new G;function g(M,A,K){c.fromBufferAttribute(n,M),u.fromBufferAttribute(n,A),f.fromBufferAttribute(n,K),h.fromBufferAttribute(a,M),p.fromBufferAttribute(a,A),x.fromBufferAttribute(a,K),u.sub(c),f.sub(c),p.sub(h),x.sub(h);const U=1/(p.x*x.y-x.x*p.y);isFinite(U)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(U),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(U),o[M].add(y),o[A].add(y),o[K].add(y),l[M].add(m),l[A].add(m),l[K].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let M=0,A=S.length;M<A;++M){const K=S[M],U=K.start,B=K.count;for(let q=U,X=U+B;q<X;q+=3)g(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const C=new G,E=new G,D=new G,P=new G;function L(M){D.fromBufferAttribute(r,M),P.copy(D);const A=o[M];C.copy(A),C.sub(D.multiplyScalar(D.dot(A))).normalize(),E.crossVectors(P,A);const U=E.dot(l[M])<0?-1:1;s.setXYZW(M,C.x,C.y,C.z,U)}for(let M=0,A=S.length;M<A;++M){const K=S[M],U=K.start,B=K.count;for(let q=U,X=U+B;q<X;q+=3)L(e.getX(q+0)),L(e.getX(q+1)),L(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new G,a=new G,s=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,y),s.fromBufferAttribute(t,m),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),a.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),u.subVectors(s,a),f.subVectors(r,a),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*u;for(let g=0;g<u;g++)h[x++]=c[p++]}return new Sn(h,u,f)}if(this.index===null)return Ye("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],f=a[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let sm=0;class sr extends ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sm++}),this.uuid=ha(),this.name="",this.type="Material",this.blending=Cr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Lr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ye(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ye(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(n.blending=this.blending),this.side!==mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Qo&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const li=new G,To=new G,Na=new G,Ri=new G,Eo=new G,Ua=new G,Ao=new G;class Ns{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){To.copy(e).add(t).multiplyScalar(.5),Na.copy(t).sub(e).normalize(),Ri.copy(this.origin).sub(To);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Na),o=Ri.dot(this.direction),l=-Ri.dot(Na),c=Ri.lengthSq(),u=Math.abs(1-s*s);let f,h,p,x;if(u>0)if(f=s*l-o,h=s*o-l,x=a*u,f>=0)if(h>=-x)if(h<=x){const y=1/u;f*=y,h*=y,p=f*(f+s*h+2*o)+h*(s*f+h+2*l)+c}else h=a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h=-a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-s*a+o)),h=f>0?-a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+c):(f=Math.max(0,-(s*a+o)),h=f>0?a:Math.min(Math.max(-a,-l),a),p=-f*f+h*(h+2*l)+c);else h=s>0?-a:a,f=Math.max(0,-(s*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(To).addScaledVector(Na,h),p}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),r=li.dot(li)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,l=n+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(a=(e.min.y-h.y)*u,s=(e.max.y-h.y)*u):(a=(e.max.y-h.y)*u,s=(e.min.y-h.y)*u),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,r,a){Eo.subVectors(t,e),Ua.subVectors(n,e),Ao.crossVectors(Eo,Ua);let s=this.direction.dot(Ao),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Ri.subVectors(this.origin,e);const l=o*this.direction.dot(Ua.crossVectors(Ri,Ua));if(l<0)return null;const c=o*this.direction.dot(Eo.cross(Ri));if(c<0||l+c>s)return null;const u=-o*Ri.dot(Ao);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tr extends sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fc=new At,Yi=new Ns,Fa=new fa,kc=new G,ka=new G,Oa=new G,Ba=new G,Co=new G,za=new G,Oc=new G,Ha=new G;class Vt extends on{constructor(e=new Kt,t=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){za.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],f=a[l];u!==0&&(Co.fromBufferAttribute(f,e),s?za.addScaledVector(Co,u):za.addScaledVector(Co.sub(t),u))}t.add(za)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fa.copy(n.boundingSphere),Fa.applyMatrix4(a),Yi.copy(e.ray).recast(e.near),!(Fa.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(Fa,kc)===null||Yi.origin.distanceToSquared(kc)>(e.far-e.near)**2))&&(Fc.copy(a).invert(),Yi.copy(e.ray).applyMatrix4(Fc),!(n.boundingBox!==null&&Yi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Yi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,f=a.attributes.normal,h=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let x=0,y=h.length;x<y;x++){const m=h[x],g=s[m.materialIndex],S=Math.max(m.start,p.start),C=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,D=C;E<D;E+=3){const P=o.getX(E),L=o.getX(E+1),M=o.getX(E+2);r=Ga(this,g,e,n,c,u,f,P,L,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=x,g=y;m<g;m+=3){const S=o.getX(m),C=o.getX(m+1),E=o.getX(m+2);r=Ga(this,s,e,n,c,u,f,S,C,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let x=0,y=h.length;x<y;x++){const m=h[x],g=s[m.materialIndex],S=Math.max(m.start,p.start),C=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,D=C;E<D;E+=3){const P=E,L=E+1,M=E+2;r=Ga(this,g,e,n,c,u,f,P,L,M),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=x,g=y;m<g;m+=3){const S=m,C=m+1,E=m+2;r=Ga(this,s,e,n,c,u,f,S,C,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function om(i,e,t,n,r,a,s,o){let l;if(e.side===an?l=n.intersectTriangle(s,a,r,!0,o):l=n.intersectTriangle(r,a,s,e.side===mi,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:i}}function Ga(i,e,t,n,r,a,s,o,l,c){i.getVertexPosition(o,ka),i.getVertexPosition(l,Oa),i.getVertexPosition(c,Ba);const u=om(i,e,t,n,ka,Oa,Ba,Oc);if(u){const f=new G;Fn.getBarycoord(Oc,ka,Oa,Ba,f),r&&(u.uv=Fn.getInterpolatedAttribute(r,o,l,c,f,new Ke)),a&&(u.uv1=Fn.getInterpolatedAttribute(a,o,l,c,f,new Ke)),s&&(u.normal=Fn.getInterpolatedAttribute(s,o,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Fn.getNormal(ka,Oa,Ba,h.normal),u.face=h,u.barycoord=f}return u}class lm extends sn{constructor(e=null,t=1,n=1,r,a,s,o,l,c=Jt,u=Jt,f,h){super(null,s,o,l,c,u,r,a,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ro=new G,cm=new G,um=new Qe;class ui{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ro.subVectors(n,t).cross(cm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ro),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||um.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $i=new fa,hm=new Ke(.5,.5),Va=new G;class _0{constructor(e=new ui,t=new ui,n=new ui,r=new ui,a=new ui,s=new ui){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xn,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],l=a[2],c=a[3],u=a[4],f=a[5],h=a[6],p=a[7],x=a[8],y=a[9],m=a[10],g=a[11],S=a[12],C=a[13],E=a[14],D=a[15];if(r[0].setComponents(c-s,p-u,g-x,D-S).normalize(),r[1].setComponents(c+s,p+u,g+x,D+S).normalize(),r[2].setComponents(c+o,p+f,g+y,D+C).normalize(),r[3].setComponents(c-o,p-f,g-y,D-C).normalize(),n)r[4].setComponents(l,h,m,E).normalize(),r[5].setComponents(c-l,p-h,g-m,D-E).normalize();else if(r[4].setComponents(c-l,p-h,g-m,D-E).normalize(),t===Xn)r[5].setComponents(c+l,p+h,g+m,D+E).normalize();else if(t===sa)r[5].setComponents(l,h,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(e){$i.center.set(0,0,0);const t=hm.distanceTo(e.center);return $i.radius=.7071067811865476+t,$i.applyMatrix4(e.matrixWorld),this.intersectsSphere($i)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Va.x=r.normal.x>0?e.max.x:e.min.x,Va.y=r.normal.y>0?e.max.y:e.min.y,Va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Va)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class M0 extends sr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bs=new G,_s=new G,Bc=new At,$r=new Ns,Wa=new fa,Po=new G,zc=new G;class Wh extends on{constructor(e=new Kt,t=new M0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)bs.fromBufferAttribute(t,r-1),_s.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=bs.distanceTo(_s);e.setAttribute("lineDistance",new Wt(n,1))}else Ye("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=a,e.ray.intersectsSphere(Wa)===!1)return;Bc.copy(r).invert(),$r.copy(e.ray).applyMatrix4(Bc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,s.start),x=Math.min(u.count,s.start+s.count);for(let y=p,m=x-1;y<m;y+=c){const g=u.getX(y),S=u.getX(y+1),C=qa(this,e,$r,l,g,S,y);C&&t.push(C)}if(this.isLineLoop){const y=u.getX(x-1),m=u.getX(p),g=qa(this,e,$r,l,y,m,x-1);g&&t.push(g)}}else{const p=Math.max(0,s.start),x=Math.min(h.count,s.start+s.count);for(let y=p,m=x-1;y<m;y+=c){const g=qa(this,e,$r,l,y,y+1,y);g&&t.push(g)}if(this.isLineLoop){const y=qa(this,e,$r,l,x-1,p,x-1);y&&t.push(y)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function qa(i,e,t,n,r,a,s){const o=i.geometry.attributes.position;if(bs.fromBufferAttribute(o,r),_s.fromBufferAttribute(o,a),t.distanceSqToSegment(bs,_s,Po,zc)>n)return;Po.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Po);if(!(c<e.near||c>e.far))return{distance:c,point:zc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}class S0 extends sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new At,Gl=new Ns,Xa=new fa,Ya=new G;class qh extends on{constructor(e=new Kt,t=new S0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=a,e.ray.intersectsSphere(Xa)===!1)return;Hc.copy(r).invert(),Gl.copy(e.ray).applyMatrix4(Hc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let x=h,y=p;x<y;x++){const m=c.getX(x);Ya.fromBufferAttribute(f,m),Gc(Ya,m,l,r,e,t,this)}}else{const h=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let x=h,y=p;x<y;x++)Ya.fromBufferAttribute(f,x),Gc(Ya,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Gc(i,e,t,n,r,a,s){const o=Gl.distanceSqToPoint(i);if(o<t){const l=new G;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Xh extends sn{constructor(e=[],t=nr,n,r,a,s,o,l,c,u){super(e,t,n,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Us extends sn{constructor(e,t,n,r,a,s,o,l,c){super(e,t,n,r,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class oa extends sn{constructor(e,t,n=jn,r,a,s,o=Jt,l=Jt,c,u=vi,f=1){if(u!==vi&&u!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,a,s,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new b0(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dm extends oa{constructor(e,t=jn,n=nr,r,a,s=Jt,o=Jt,l,c=vi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,r,a,s,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Yh extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pa extends Kt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,n,t,e,s,a,0),x("z","y","x",1,-1,n,t,-e,s,a,1),x("x","z","y",1,1,e,n,t,r,s,2),x("x","z","y",1,-1,e,n,-t,r,s,3),x("x","y","z",1,-1,e,t,n,r,a,4),x("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(f,2));function x(y,m,g,S,C,E,D,P,L,M,A){const K=E/L,U=D/M,B=E/2,q=D/2,X=P/2,W=L+1,Y=M+1;let V=0,se=0;const re=new G;for(let xe=0;xe<Y;xe++){const _e=xe*U-q;for(let ye=0;ye<W;ye++){const Oe=ye*K-B;re[y]=Oe*S,re[m]=_e*C,re[g]=X,c.push(re.x,re.y,re.z),re[y]=0,re[m]=0,re[g]=P>0?1:-1,u.push(re.x,re.y,re.z),f.push(ye/L),f.push(1-xe/M),V+=1}}for(let xe=0;xe<M;xe++)for(let _e=0;_e<L;_e++){const ye=h+_e+W*xe,Oe=h+_e+W*(xe+1),ut=h+(_e+1)+W*(xe+1),Ve=h+(_e+1)+W*xe;l.push(ye,Oe,Ve),l.push(Oe,ut,Ve),se+=6}o.addGroup(p,se,A),p+=se,h+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class w0 extends Kt{constructor(e=1,t=1,n=1,r=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),a=Math.floor(a);const u=[],f=[],h=[],p=[];let x=0;const y=[],m=n/2;let g=0;S(),s===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new Wt(f,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(p,2));function S(){const E=new G,D=new G;let P=0;const L=(t-e)/n;for(let M=0;M<=a;M++){const A=[],K=M/a,U=K*(t-e)+e;for(let B=0;B<=r;B++){const q=B/r,X=q*l+o,W=Math.sin(X),Y=Math.cos(X);D.x=U*W,D.y=-K*n+m,D.z=U*Y,f.push(D.x,D.y,D.z),E.set(W,L,Y).normalize(),h.push(E.x,E.y,E.z),p.push(q,1-K),A.push(x++)}y.push(A)}for(let M=0;M<r;M++)for(let A=0;A<a;A++){const K=y[A][M],U=y[A+1][M],B=y[A+1][M+1],q=y[A][M+1];(e>0||A!==0)&&(u.push(K,U,q),P+=3),(t>0||A!==a-1)&&(u.push(U,B,q),P+=3)}c.addGroup(g,P,0),g+=P}function C(E){const D=x,P=new Ke,L=new G;let M=0;const A=E===!0?e:t,K=E===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*K,0),h.push(0,K,0),p.push(.5,.5),x++;const U=x;for(let B=0;B<=r;B++){const X=B/r*l+o,W=Math.cos(X),Y=Math.sin(X);L.x=A*Y,L.y=m*K,L.z=A*W,f.push(L.x,L.y,L.z),h.push(0,K,0),P.x=W*.5+.5,P.y=Y*.5*K+.5,p.push(P.x,P.y),x++}for(let B=0;B<r;B++){const q=D+B,X=U+B;E===!0?u.push(X,X+1,q):u.push(X+1,X,q),M+=3}c.addGroup(g,M,E===!0?1:2),g+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new w0(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class T0 extends w0{constructor(e=1,t=1,n=32,r=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,n,r,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new T0(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fs extends Kt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],x=[],y=[],m=[];for(let g=0;g<u;g++){const S=g*h-s;for(let C=0;C<c;C++){const E=C*f-a;x.push(E,-S,0),y.push(0,0,1),m.push(C/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let S=0;S<o;S++){const C=S+c*g,E=S+c*(g+1),D=S+1+c*(g+1),P=S+1+c*g;p.push(C,E,P),p.push(E,D,P)}this.setIndex(p),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fs(e.width,e.height,e.widthSegments,e.heightSegments)}}class E0 extends Kt{constructor(e=.5,t=1,n=32,r=1,a=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:a,thetaLength:s},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const h=(t-e)/r,p=new G,x=new Ke;for(let y=0;y<=r;y++){for(let m=0;m<=n;m++){const g=a+m/n*s;p.x=f*Math.cos(g),p.y=f*Math.sin(g),l.push(p.x,p.y,p.z),c.push(0,0,1),x.x=(p.x/t+1)/2,x.y=(p.y/t+1)/2,u.push(x.x,x.y)}f+=h}for(let y=0;y<r;y++){const m=y*(n+1);for(let g=0;g<n;g++){const S=g+m,C=S,E=S+n+1,D=S+n+2,P=S+1;o.push(C,E,P),o.push(E,D,P)}}this.setIndex(o),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new E0(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Hn extends Kt{constructor(e=1,t=32,n=16,r=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+o,Math.PI);let c=0;const u=[],f=new G,h=new G,p=[],x=[],y=[],m=[];for(let g=0;g<=n;g++){const S=[],C=g/n;let E=0;g===0&&s===0?E=.5/t:g===n&&l===Math.PI&&(E=-.5/t);for(let D=0;D<=t;D++){const P=D/t;f.x=-e*Math.cos(r+P*a)*Math.sin(s+C*o),f.y=e*Math.cos(s+C*o),f.z=e*Math.sin(r+P*a)*Math.sin(s+C*o),x.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(P+E,1-C),S.push(c++)}u.push(S)}for(let g=0;g<n;g++)for(let S=0;S<t;S++){const C=u[g][S+1],E=u[g][S],D=u[g+1][S],P=u[g+1][S+1];(g!==0||s>0)&&p.push(C,E,P),(g!==n-1||l<Math.PI)&&p.push(E,D,P)}this.setIndex(p),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function kr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ye("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=kr(i[t]);for(const r in n)e[r]=n[r]}return e}function fm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $h(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const pm={clone:kr,merge:cn};var mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=kr(e.uniforms),this.uniformsGroups=fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class vm extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qr extends sr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ym extends sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jh extends on{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Do=new At,Vc=new G,Wc=new G;class bm{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _0,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vc),Wc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wc),t.updateMatrixWorld(),Do.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===sa||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Do)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new G,ja=new Bi,Bn=new G;class Kh extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,ja,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,ja,Bn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose($a,ja,Bn),Bn.x===1&&Bn.y===1&&Bn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,ja,Bn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pi=new G,qc=new Ke,Xc=new Ke;class yn extends Kh{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Hl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Hl*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z),Pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pi.x,Pi.y).multiplyScalar(-e/Pi.z)}getViewSize(e,t){return this.getViewBounds(e,qc,Xc),t.subVectors(Xc,qc)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(us*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*n/c,r*=s.width/l,n*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class _m extends bm{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}}class Yc extends jh{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new _m}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zh extends Kh{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Mm extends jh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _r=-90,Mr=1;class Sm extends on{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(_r,Mr,e,t);r.layers=this.layers,this.add(r);const a=new yn(_r,Mr,e,t);a.layers=this.layers,this.add(a);const s=new yn(_r,Mr,e,t);s.layers=this.layers,this.add(s);const o=new yn(_r,Mr,e,t);o.layers=this.layers,this.add(o);const l=new yn(_r,Mr,e,t);l.layers=this.layers,this.add(l);const c=new yn(_r,Mr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===Xn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class wm extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ye("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class $c{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Em extends ar{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ye("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function jc(i,e,t,n){const r=Am(n);switch(t){case Nh:return i*e;case Fh:return i*e/r.components*r.byteLength;case m0:return i*e/r.components*r.byteLength;case Ur:return i*e*2/r.components*r.byteLength;case g0:return i*e*2/r.components*r.byteLength;case Uh:return i*e*3/r.components*r.byteLength;case kn:return i*e*4/r.components*r.byteLength;case v0:return i*e*4/r.components*r.byteLength;case ss:case os:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ls:case cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:case dl:return Math.max(i,16)*Math.max(e,8)/4;case cl:case hl:return Math.max(i,8)*Math.max(e,8)/2;case fl:case pl:case gl:case vl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ml:case xl:case yl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Al:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Nl:case Ul:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case kl:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Bl:case zl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Am(i){switch(i){case bn:case Ph:return{byteLength:1,components:1};case ra:case Dh:case gi:return{byteLength:2,components:1};case f0:case p0:return{byteLength:2,components:4};case jn:case d0:case qn:return{byteLength:4,components:1};case Ih:case Lh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:u0}}));typeof window<"u"&&(window.__THREE__?Ye("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=u0);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jh(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function Cm(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],y=f[p];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const y=f[p];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var Rm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Um=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Om=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,e1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",s1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,d1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,f1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,v1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,M1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,S1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,A1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,C1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,B1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Z1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Q1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ig=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,og=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ug=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Yg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ev=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,av=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ov=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Rm,alphahash_pars_fragment:Pm,alphamap_fragment:Dm,alphamap_pars_fragment:Im,alphatest_fragment:Lm,alphatest_pars_fragment:Nm,aomap_fragment:Um,aomap_pars_fragment:Fm,batching_pars_vertex:km,batching_vertex:Om,begin_vertex:Bm,beginnormal_vertex:zm,bsdfs:Hm,iridescence_fragment:Gm,bumpmap_pars_fragment:Vm,clipping_planes_fragment:Wm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Xm,clipping_planes_vertex:Ym,color_fragment:$m,color_pars_fragment:jm,color_pars_vertex:Km,color_vertex:Zm,common:Jm,cube_uv_reflection_fragment:Qm,defaultnormal_vertex:e1,displacementmap_pars_vertex:t1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:r1,colorspace_fragment:a1,colorspace_pars_fragment:s1,envmap_fragment:o1,envmap_common_pars_fragment:l1,envmap_pars_fragment:c1,envmap_pars_vertex:u1,envmap_physical_pars_fragment:_1,envmap_vertex:h1,fog_vertex:d1,fog_pars_vertex:f1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_pars_fragment:v1,lights_lambert_fragment:x1,lights_lambert_pars_fragment:y1,lights_pars_begin:b1,lights_toon_fragment:M1,lights_toon_pars_fragment:S1,lights_phong_fragment:w1,lights_phong_pars_fragment:T1,lights_physical_fragment:E1,lights_physical_pars_fragment:A1,lights_fragment_begin:C1,lights_fragment_maps:R1,lights_fragment_end:P1,logdepthbuf_fragment:D1,logdepthbuf_pars_fragment:I1,logdepthbuf_pars_vertex:L1,logdepthbuf_vertex:N1,map_fragment:U1,map_pars_fragment:F1,map_particle_fragment:k1,map_particle_pars_fragment:O1,metalnessmap_fragment:B1,metalnessmap_pars_fragment:z1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:W1,morphtarget_vertex:q1,normal_fragment_begin:X1,normal_fragment_maps:Y1,normal_pars_fragment:$1,normal_pars_vertex:j1,normal_vertex:K1,normalmap_pars_fragment:Z1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:Q1,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:ig,premultiplied_alpha_fragment:rg,project_vertex:ag,dithering_fragment:sg,dithering_pars_fragment:og,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:mg,skinning_vertex:gg,skinnormal_vertex:vg,specularmap_fragment:xg,specularmap_pars_fragment:yg,tonemapping_fragment:bg,tonemapping_pars_fragment:_g,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:wg,uv_pars_vertex:Tg,uv_vertex:Eg,worldpos_vertex:Ag,background_vert:Cg,background_frag:Rg,backgroundCube_vert:Pg,backgroundCube_frag:Dg,cube_vert:Ig,cube_frag:Lg,depth_vert:Ng,depth_frag:Ug,distance_vert:Fg,distance_frag:kg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:Hg,meshbasic_vert:Gg,meshbasic_frag:Vg,meshlambert_vert:Wg,meshlambert_frag:qg,meshmatcap_vert:Xg,meshmatcap_frag:Yg,meshnormal_vert:$g,meshnormal_frag:jg,meshphong_vert:Kg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:ev,meshtoon_frag:tv,points_vert:nv,points_frag:iv,shadow_vert:rv,shadow_frag:av,sprite_vert:sv,sprite_frag:ov},be={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Vn={basic:{uniforms:cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:cn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:cn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new lt(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:cn([be.points,be.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:cn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:cn([be.common,be.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:cn([be.sprite,be.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:cn([be.common,be.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:cn([be.lights,be.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};Vn.physical={uniforms:cn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const Ka={r:0,b:0,g:0},ji=new Kn,lv=new At;function cv(i,e,t,n,r,a){const s=new lt(0);let o=r===!0?0:1,l,c,u=null,f=0,h=null;function p(S){let C=S.isScene===!0?S.background:null;if(C&&C.isTexture){const E=S.backgroundBlurriness>0;C=e.get(C,E)}return C}function x(S){let C=!1;const E=p(S);E===null?m(s,o):E&&E.isColor&&(m(E,1),C=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(i.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,C){const E=p(C);E&&(E.isCubeTexture||E.mapping===Ls)?(c===void 0&&(c=new Vt(new pa(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:kr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),ji.copy(C.backgroundRotation),ji.x*=-1,ji.y*=-1,ji.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(lv.makeRotationFromEuler(ji)),c.material.toneMapped=ct.getTransfer(E.colorSpace)!==vt,(u!==E||f!==E.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,f=E.version,h=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Vt(new Fs(2,2),new Zn({name:"BackgroundMaterial",uniforms:kr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.toneMapped=ct.getTransfer(E.colorSpace)!==vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||f!==E.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=E,f=E.version,h=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,C){S.getRGB(Ka,$h(i)),t.buffers.color.setClear(Ka.r,Ka.g,Ka.b,C,a)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(S,C=1){s.set(S),o=C,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(s,o)},render:x,addToRenderList:y,dispose:g}}function uv(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let a=r,s=!1;function o(U,B,q,X,W){let Y=!1;const V=f(U,X,q,B);a!==V&&(a=V,c(a.object)),Y=p(U,X,q,W),Y&&x(U,X,q,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,E(U,B,q,X),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function f(U,B,q,X){const W=X.wireframe===!0;let Y=n[B.id];Y===void 0&&(Y={},n[B.id]=Y);const V=U.isInstancedMesh===!0?U.id:0;let se=Y[V];se===void 0&&(se={},Y[V]=se);let re=se[q.id];re===void 0&&(re={},se[q.id]=re);let xe=re[W];return xe===void 0&&(xe=h(l()),re[W]=xe),xe}function h(U){const B=[],q=[],X=[];for(let W=0;W<t;W++)B[W]=0,q[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:X,object:U,attributes:{},index:null}}function p(U,B,q,X){const W=a.attributes,Y=B.attributes;let V=0;const se=q.getAttributes();for(const re in se)if(se[re].location>=0){const _e=W[re];let ye=Y[re];if(ye===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(ye=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(ye=U.instanceColor)),_e===void 0||_e.attribute!==ye||ye&&_e.data!==ye.data)return!0;V++}return a.attributesNum!==V||a.index!==X}function x(U,B,q,X){const W={},Y=B.attributes;let V=0;const se=q.getAttributes();for(const re in se)if(se[re].location>=0){let _e=Y[re];_e===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(_e=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(_e=U.instanceColor));const ye={};ye.attribute=_e,_e&&_e.data&&(ye.data=_e.data),W[re]=ye,V++}a.attributes=W,a.attributesNum=V,a.index=X}function y(){const U=a.newAttributes;for(let B=0,q=U.length;B<q;B++)U[B]=0}function m(U){g(U,0)}function g(U,B){const q=a.newAttributes,X=a.enabledAttributes,W=a.attributeDivisors;q[U]=1,X[U]===0&&(i.enableVertexAttribArray(U),X[U]=1),W[U]!==B&&(i.vertexAttribDivisor(U,B),W[U]=B)}function S(){const U=a.newAttributes,B=a.enabledAttributes;for(let q=0,X=B.length;q<X;q++)B[q]!==U[q]&&(i.disableVertexAttribArray(q),B[q]=0)}function C(U,B,q,X,W,Y,V){V===!0?i.vertexAttribIPointer(U,B,q,W,Y):i.vertexAttribPointer(U,B,q,X,W,Y)}function E(U,B,q,X){y();const W=X.attributes,Y=q.getAttributes(),V=B.defaultAttributeValues;for(const se in Y){const re=Y[se];if(re.location>=0){let xe=W[se];if(xe===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(xe=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(xe=U.instanceColor)),xe!==void 0){const _e=xe.normalized,ye=xe.itemSize,Oe=e.get(xe);if(Oe===void 0)continue;const ut=Oe.buffer,Ve=Oe.type,J=Oe.bytesPerElement,ae=Ve===i.INT||Ve===i.UNSIGNED_INT||xe.gpuType===d0;if(xe.isInterleavedBufferAttribute){const de=xe.data,He=de.stride,Be=xe.offset;if(de.isInstancedInterleavedBuffer){for(let We=0;We<re.locationSize;We++)g(re.location+We,de.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let We=0;We<re.locationSize;We++)m(re.location+We);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let We=0;We<re.locationSize;We++)C(re.location+We,ye/re.locationSize,Ve,_e,He*J,(Be+ye/re.locationSize*We)*J,ae)}else{if(xe.isInstancedBufferAttribute){for(let de=0;de<re.locationSize;de++)g(re.location+de,xe.meshPerAttribute);U.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let de=0;de<re.locationSize;de++)m(re.location+de);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let de=0;de<re.locationSize;de++)C(re.location+de,ye/re.locationSize,Ve,_e,ye*J,ye/re.locationSize*de*J,ae)}}else if(V!==void 0){const _e=V[se];if(_e!==void 0)switch(_e.length){case 2:i.vertexAttrib2fv(re.location,_e);break;case 3:i.vertexAttrib3fv(re.location,_e);break;case 4:i.vertexAttrib4fv(re.location,_e);break;default:i.vertexAttrib1fv(re.location,_e)}}}}S()}function D(){A();for(const U in n){const B=n[U];for(const q in B){const X=B[q];for(const W in X){const Y=X[W];for(const V in Y)u(Y[V].object),delete Y[V];delete X[W]}}delete n[U]}}function P(U){if(n[U.id]===void 0)return;const B=n[U.id];for(const q in B){const X=B[q];for(const W in X){const Y=X[W];for(const V in Y)u(Y[V].object),delete Y[V];delete X[W]}}delete n[U.id]}function L(U){for(const B in n){const q=n[B];for(const X in q){const W=q[X];if(W[U.id]===void 0)continue;const Y=W[U.id];for(const V in Y)u(Y[V].object),delete Y[V];delete W[U.id]}}}function M(U){for(const B in n){const q=n[B],X=U.isInstancedMesh===!0?U.id:0,W=q[X];if(W!==void 0){for(const Y in W){const V=W[Y];for(const se in V)u(V[se].object),delete V[se];delete W[Y]}delete q[X],Object.keys(q).length===0&&delete n[B]}}}function A(){K(),s=!0,a!==r&&(a=r,c(a.object))}function K(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:K,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:M,releaseStatesOfProgram:L,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function hv(i,e,t){let n;function r(c){n=c}function a(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function s(c,u,f){f!==0&&(i.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,n,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)s(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,f);let x=0;for(let y=0;y<f;y++)x+=u[y]*h[y];t.update(x,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dv(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(L){return!(L!==kn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const M=L===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==bn&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==qn&&!M)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ye("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:C,maxFragmentUniforms:E,maxSamples:D,samples:P}}function fv(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new ui,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,g=i.get(f);if(!r||x===null||x.length===0||a&&!m)a?u(null):c();else{const S=a?0:n,C=S*4;let E=g.clippingState||null;l.value=E,E=u(x,h,C,p);for(let D=0;D!==C;++D)E[D]=t[D];g.clippingState=E,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,x){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,x!==!0||m===null){const g=p+y*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let C=0,E=p;C!==y;++C,E+=4)s.copy(f[C]).applyMatrix4(S,o),s.normal.toArray(m,E),m[E+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}const Ni=4,Kc=[.125,.215,.35,.446,.526,.582],Ji=20,pv=256,jr=new Zh,Zc=new lt;let Io=null,Lo=0,No=0,Uo=!1;const mv=new G;class Jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=mv}=a;Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Lo,No),this._renderer.xr.enabled=Uo,e.scissorTest=!1,Sr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Lo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:gi,format:kn,colorSpace:Fr,depthBuffer:!1},r=Qc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qc(e,t,n);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gv(a)),this._blurMaterial=xv(a,e,t),this._ggxMaterial=vv(a,e,t)}return r}_compileMaterial(e){const t=new Vt(new Kt,e);this._renderer.compile(t,jr)}_sceneToCubeUV(e,t,n,r,a){const l=new yn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Zc),f.toneMapping=Yn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new pa,new tr({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,m=y.material;let g=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,g=!0):(m.color.copy(Zc),g=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(l.up.set(0,c[C],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+u[C],a.y,a.z)):E===1?(l.up.set(0,0,c[C]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+u[C],a.z)):(l.up.set(0,c[C],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+u[C]));const D=this._cubeSize;Sr(r,E*D,C>2?D:0,D,D),f.setRenderTarget(r),g&&f.render(y,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===nr||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());const a=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=a;const o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Sr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,jr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,a=this._pingPongRenderTarget,s=this._ggxMaterial,o=this._lodMeshes[n];o.material=s;const l=s.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:x}=this,y=this._sizeLods[n],m=3*y*(n>x-Ni?n-x+Ni:0),g=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,Sr(a,m,g,3*y,2*y),r.setRenderTarget(a),r.render(o,jr),l.envMap.value=a.texture,l.roughness.value=0,l.mipInt.value=x-n,Sr(e,m,g,3*y,2*y),r.setRenderTarget(e),r.render(o,jr)}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),y=a/x,m=isFinite(a)?1+Math.floor(u*y):Ji;m>Ji&&Ye(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const g=[];let S=0;for(let L=0;L<Ji;++L){const M=L/y,A=Math.exp(-M*M/2);g.push(A),L===0?S+=A:L<m&&(S+=2*A)}for(let L=0;L<g.length;L++)g[L]=g[L]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=g,h.latitudinal.value=s==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:C}=this;h.dTheta.value=x,h.mipInt.value=C-n;const E=this._sizeLods[r],D=3*E*(r>C-Ni?r-C+Ni:0),P=4*(this._cubeSize-E);Sr(t,D,P,3*E,2*E),l.setRenderTarget(t),l.render(f,jr)}}function gv(i){const e=[],t=[],n=[];let r=i;const a=i-Ni+1+Kc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);e.push(o);let l=1/o;s>i-Ni?l=Kc[s-i+Ni-1]:s===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,y=3,m=2,g=1,S=new Float32Array(y*x*p),C=new Float32Array(m*x*p),E=new Float32Array(g*x*p);for(let P=0;P<p;P++){const L=P%3*2/3-1,M=P>2?0:-1,A=[L,M,0,L+2/3,M,0,L+2/3,M+1,0,L,M,0,L+2/3,M+1,0,L,M+1,0];S.set(A,y*x*P),C.set(h,m*x*P);const K=[P,P,P,P,P,P];E.set(K,g*x*P)}const D=new Kt;D.setAttribute("position",new Sn(S,y)),D.setAttribute("uv",new Sn(C,m)),D.setAttribute("faceIndex",new Sn(E,g)),n.push(new Vt(D,null)),r>Ni&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Qc(i,e,t){const n=new $n(i,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function vv(i,e,t){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ks(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function xv(i,e,t){const n=new Float32Array(Ji),r=new G(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function eu(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function tu(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ks(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ks(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qh extends $n{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Xh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new pa(5,5,5),a=new Zn({name:"CubemapFromEquirect",uniforms:kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:di});a.uniforms.tEquirect.value=t;const s=new Vt(r,a),o=t.minFilter;return t.minFilter===Qi&&(t.minFilter=nn),new Sm(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}function yv(i){let e=new WeakMap,t=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?s(h):a(h)}function a(h){if(h&&h.isTexture){const p=h.mapping;if(p===io||p===ro)if(e.has(h)){const x=e.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const y=new Qh(x.height);return y.fromEquirectangularTexture(i,h),e.set(h,y),h.addEventListener("dispose",c),o(y.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){const p=h.mapping,x=p===io||p===ro,y=p===nr||p===Nr;if(x||y){let m=t.get(h);const g=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==g)return n===null&&(n=new Jc(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const S=h.image;return x&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new Jc(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,p){return p===io?h.mapping=nr:p===ro&&(h.mapping=Nr),h}function l(h){let p=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&p++;return p===x}function c(h){const p=h.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function bv(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&ys("WebGLRenderer: "+n+" extension not supported."),r}}}function _v(i,e,t,n){const r={},a=new WeakMap;function s(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",s),delete r[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",s),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,x=f.attributes.position;let y=0;if(x===void 0)return;if(p!==null){const S=p.array;y=p.version;for(let C=0,E=S.length;C<E;C+=3){const D=S[C+0],P=S[C+1],L=S[C+2];h.push(D,P,P,L,L,D)}}else{const S=x.array;y=x.version;for(let C=0,E=S.length/3-1;C<E;C+=3){const D=C+0,P=C+1,L=C+2;h.push(D,P,P,L,L,D)}}const m=new(x.count>=65535?Vh:Gh)(h,1);m.version=y;const g=a.get(f);g&&e.remove(g),a.set(f,m)}function u(f){const h=a.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return a.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Mv(i,e,t){let n;function r(h){n=h}let a,s;function o(h){a=h.type,s=h.bytesPerElement}function l(h,p){i.drawElements(n,p,a,h*s),t.update(p,n,1)}function c(h,p,x){x!==0&&(i.drawElementsInstanced(n,p,a,h*s,x),t.update(p,n,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,h,0,x);let m=0;for(let g=0;g<x;g++)m+=p[g];t.update(m,n,1)}function f(h,p,x,y){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)c(h[g]/s,p[g],y[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,h,0,y,0,x);let g=0;for(let S=0;S<x;S++)g+=p[S]*y[S];t.update(g,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Sv(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:dt("WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function wv(i,e,t){const n=new WeakMap,r=new Ut;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let K=function(){M.dispose(),n.delete(o),o.removeEventListener("dispose",K)};var p=K;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],C=o.morphAttributes.color||[];let E=0;x===!0&&(E=1),y===!0&&(E=2),m===!0&&(E=3);let D=o.attributes.position.count*E,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const L=new Float32Array(D*P*4*f),M=new Bh(L,D,P,f);M.type=qn,M.needsUpdate=!0;const A=E*4;for(let U=0;U<f;U++){const B=g[U],q=S[U],X=C[U],W=D*P*4*U;for(let Y=0;Y<B.count;Y++){const V=Y*A;x===!0&&(r.fromBufferAttribute(B,Y),L[W+V+0]=r.x,L[W+V+1]=r.y,L[W+V+2]=r.z,L[W+V+3]=0),y===!0&&(r.fromBufferAttribute(q,Y),L[W+V+4]=r.x,L[W+V+5]=r.y,L[W+V+6]=r.z,L[W+V+7]=0),m===!0&&(r.fromBufferAttribute(X,Y),L[W+V+8]=r.x,L[W+V+9]=r.y,L[W+V+10]=r.z,L[W+V+11]=X.itemSize===4?r.w:1)}}h={count:f,texture:M,size:new Ke(D,P)},n.set(o,h),o.addEventListener("dispose",K)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const y=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:a}}function Tv(i,e,t,n,r){let a=new WeakMap;function s(c){const u=r.render.frame,f=c.geometry,h=e.get(c,f);if(a.get(h)!==u&&(e.update(h),a.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),a.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;a.get(p)!==u&&(p.update(),a.set(p,u))}return h}function o(){a=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Ev={[Sh]:"LINEAR_TONE_MAPPING",[wh]:"REINHARD_TONE_MAPPING",[Th]:"CINEON_TONE_MAPPING",[h0]:"ACES_FILMIC_TONE_MAPPING",[Ah]:"AGX_TONE_MAPPING",[Ch]:"NEUTRAL_TONE_MAPPING",[Eh]:"CUSTOM_TONE_MAPPING"};function Av(i,e,t,n,r){const a=new $n(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),s=new $n(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),o=new Kt;o.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Wt([0,2,0,0,2,0],2));const l=new vm({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Vt(o,l),u=new Zh(-1,1,1,-1,0,1);let f=null,h=null,p=!1,x,y=null,m=[],g=!1;this.setSize=function(S,C){a.setSize(S,C),s.setSize(S,C);for(let E=0;E<m.length;E++){const D=m[E];D.setSize&&D.setSize(S,C)}},this.setEffects=function(S){m=S,g=m.length>0&&m[0].isRenderPass===!0;const C=a.width,E=a.height;for(let D=0;D<m.length;D++){const P=m[D];P.setSize&&P.setSize(C,E)}},this.begin=function(S,C){if(p||S.toneMapping===Yn&&m.length===0)return!1;if(y=C,C!==null){const E=C.width,D=C.height;(a.width!==E||a.height!==D)&&this.setSize(E,D)}return g===!1&&S.setRenderTarget(a),x=S.toneMapping,S.toneMapping=Yn,!0},this.hasRenderPass=function(){return g},this.end=function(S,C){S.toneMapping=x,p=!0;let E=a,D=s;for(let P=0;P<m.length;P++){const L=m[P];if(L.enabled!==!1&&(L.render(S,D,E,C),L.needsSwap!==!1)){const M=E;E=D,D=M}}if(f!==S.outputColorSpace||h!==S.toneMapping){f=S.outputColorSpace,h=S.toneMapping,l.defines={},ct.getTransfer(f)===vt&&(l.defines.SRGB_TRANSFER="");const P=Ev[h];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(y),S.render(c,u),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),s.dispose(),o.dispose(),l.dispose()}}const ed=new sn,Vl=new oa(1,1),td=new Bh,nd=new $p,id=new Xh,nu=[],iu=[],ru=new Float32Array(16),au=new Float32Array(9),su=new Float32Array(4);function Gr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=nu[r];if(a===void 0&&(a=new Float32Array(r),nu[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Os(i,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function Pv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function Dv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function Iv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Yt(t,n)}}function Lv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),Yt(t,n)}}function Nv(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Xt(t,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),Yt(t,n)}}function Uv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Fv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function kv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function Ov(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function Bv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function Hv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function Gv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function Vv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Vl.compareFunction=t.isReversedDepthBuffer()?y0:x0,a=Vl):a=ed,t.setTexture2D(e||a,r)}function Wv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nd,r)}function qv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||id,r)}function Xv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||td,r)}function Yv(i){switch(i){case 5126:return Cv;case 35664:return Rv;case 35665:return Pv;case 35666:return Dv;case 35674:return Iv;case 35675:return Lv;case 35676:return Nv;case 5124:case 35670:return Uv;case 35667:case 35671:return Fv;case 35668:case 35672:return kv;case 35669:case 35673:return Ov;case 5125:return Bv;case 36294:return zv;case 36295:return Hv;case 36296:return Gv;case 35678:case 36198:case 36298:case 36306:case 35682:return Vv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Xv}}function $v(i,e){i.uniform1fv(this.addr,e)}function jv(i,e){const t=Gr(e,this.size,2);i.uniform2fv(this.addr,t)}function Kv(i,e){const t=Gr(e,this.size,3);i.uniform3fv(this.addr,t)}function Zv(i,e){const t=Gr(e,this.size,4);i.uniform4fv(this.addr,t)}function Jv(i,e){const t=Gr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qv(i,e){const t=Gr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function e2(i,e){const t=Gr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function t2(i,e){i.uniform1iv(this.addr,e)}function n2(i,e){i.uniform2iv(this.addr,e)}function i2(i,e){i.uniform3iv(this.addr,e)}function r2(i,e){i.uniform4iv(this.addr,e)}function a2(i,e){i.uniform1uiv(this.addr,e)}function s2(i,e){i.uniform2uiv(this.addr,e)}function o2(i,e){i.uniform3uiv(this.addr,e)}function l2(i,e){i.uniform4uiv(this.addr,e)}function c2(i,e,t){const n=this.cache,r=e.length,a=Os(t,r);Xt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));let s;this.type===i.SAMPLER_2D_SHADOW?s=Vl:s=ed;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||s,a[o])}function u2(i,e,t){const n=this.cache,r=e.length,a=Os(t,r);Xt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||nd,a[s])}function h2(i,e,t){const n=this.cache,r=e.length,a=Os(t,r);Xt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||id,a[s])}function d2(i,e,t){const n=this.cache,r=e.length,a=Os(t,r);Xt(n,a)||(i.uniform1iv(this.addr,a),Yt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||td,a[s])}function f2(i){switch(i){case 5126:return $v;case 35664:return jv;case 35665:return Kv;case 35666:return Zv;case 35674:return Jv;case 35675:return Qv;case 35676:return e2;case 5124:case 35670:return t2;case 35667:case 35671:return n2;case 35668:case 35672:return i2;case 35669:case 35673:return r2;case 5125:return a2;case 36294:return s2;case 36295:return o2;case 36296:return l2;case 35678:case 36198:case 36298:case 36306:case 35682:return c2;case 35679:case 36299:case 36307:return u2;case 35680:case 36300:case 36308:case 36293:return h2;case 36289:case 36303:case 36311:case 36292:return d2}}class p2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yv(t.type)}}class m2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f2(t.type)}}class g2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const Fo=/(\w+)(\])?(\[|\.)?/g;function ou(i,e){i.seq.push(e),i.map[e.id]=e}function v2(i,e,t){const n=i.name,r=n.length;for(Fo.lastIndex=0;;){const a=Fo.exec(n),s=Fo.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){ou(t,c===void 0?new p2(o,i,e):new m2(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new g2(o),ou(t,f)),t=f}}}class hs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);v2(o,l,this)}const r=[],a=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):a.push(s);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function lu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const x2=37297;let y2=0;function b2(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const cu=new Qe;function _2(i){ct._getMatrix(cu,ct.workingColorSpace,i);const e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case vs:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ye("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function uu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+b2(i.getShaderSource(e),o)}else return a}function M2(i,e){const t=_2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const S2={[Sh]:"Linear",[wh]:"Reinhard",[Th]:"Cineon",[h0]:"ACESFilmic",[Ah]:"AgX",[Ch]:"Neutral",[Eh]:"Custom"};function w2(i,e){const t=S2[e];return t===void 0?(Ye("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Za=new G;function T2(){ct.getLuminanceCoefficients(Za);const i=Za.x.toFixed(4),e=Za.y.toFixed(4),t=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ea).join(`
`)}function A2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function C2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function ea(i){return i!==""}function hu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wl(i){return i.replace(R2,D2)}const P2=new Map;function D2(i,e){let t=tt[e];if(t===void 0){const n=P2.get(e);if(n!==void 0)t=tt[n],Ye('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wl(t)}const I2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(I2,L2)}function L2(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function pu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const N2={[as]:"SHADOWMAP_TYPE_PCF",[Jr]:"SHADOWMAP_TYPE_VSM"};function U2(i){return N2[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const F2={[nr]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE_UV"};function k2(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F2[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const O2={[Nr]:"ENVMAP_MODE_REFRACTION"};function B2(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O2[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z2={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[Ep]:"ENVMAP_BLENDING_MIX",[Ap]:"ENVMAP_BLENDING_ADD"};function H2(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":z2[i.combine]||"ENVMAP_BLENDING_NONE"}function G2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function V2(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=U2(t),c=k2(t),u=B2(t),f=H2(t),h=G2(t),p=E2(t),x=A2(a),y=r.createProgram();let m,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ea).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ea).join(`
`),g.length>0&&(g+=`
`)):(m=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ea).join(`
`),g=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?tt.tonemapping_pars_fragment:"",t.toneMapping!==Yn?w2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,M2("linearToOutputTexel",t.outputColorSpace),T2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ea).join(`
`)),s=Wl(s),s=hu(s,t),s=du(s,t),o=Wl(o),o=hu(o,t),o=du(o,t),s=fu(s),o=fu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Mc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const C=S+m+s,E=S+g+o,D=lu(r,r.VERTEX_SHADER,C),P=lu(r,r.FRAGMENT_SHADER,E);r.attachShader(y,D),r.attachShader(y,P),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function L(U){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(y)||"",q=r.getShaderInfoLog(D)||"",X=r.getShaderInfoLog(P)||"",W=B.trim(),Y=q.trim(),V=X.trim();let se=!0,re=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,D,P);else{const xe=uu(r,D,"vertex"),_e=uu(r,P,"fragment");dt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+xe+`
`+_e)}else W!==""?Ye("WebGLProgram: Program Info Log:",W):(Y===""||V==="")&&(re=!1);re&&(U.diagnostics={runnable:se,programLog:W,vertexShader:{log:Y,prefix:m},fragmentShader:{log:V,prefix:g}})}r.deleteShader(D),r.deleteShader(P),M=new hs(r,y),A=C2(r,y)}let M;this.getUniforms=function(){return M===void 0&&L(this),M};let A;this.getAttributes=function(){return A===void 0&&L(this),A};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=r.getProgramParameter(y,x2)),K},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=y2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=D,this.fragmentShader=P,this}let W2=0;class q2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new X2(e),t.set(e,n)),n}}class X2{constructor(e){this.id=W2++,this.code=e,this.usedTimes=0}}function Y2(i,e,t,n,r,a){const s=new zh,o=new q2,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function y(M,A,K,U,B){const q=U.fog,X=B.geometry,W=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,Y=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap,V=e.get(M.envMap||W,Y),se=V&&V.mapping===Ls?V.image.height:null,re=p[M.type];M.precision!==null&&(h=n.getMaxPrecision(M.precision),h!==M.precision&&Ye("WebGLProgram.getParameters:",M.precision,"not supported, using",h,"instead."));const xe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,_e=xe!==void 0?xe.length:0;let ye=0;X.morphAttributes.position!==void 0&&(ye=1),X.morphAttributes.normal!==void 0&&(ye=2),X.morphAttributes.color!==void 0&&(ye=3);let Oe,ut,Ve,J;if(re){const gt=Vn[re];Oe=gt.vertexShader,ut=gt.fragmentShader}else Oe=M.vertexShader,ut=M.fragmentShader,o.update(M),Ve=o.getVertexShaderID(M),J=o.getFragmentShaderID(M);const ae=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),He=B.isInstancedMesh===!0,Be=B.isBatchedMesh===!0,We=!!M.map,Ft=!!M.matcap,rt=!!V,ot=!!M.aoMap,mt=!!M.lightMap,Je=!!M.bumpMap,Rt=!!M.normalMap,F=!!M.displacementMap,Pt=!!M.emissiveMap,st=!!M.metalnessMap,xt=!!M.roughnessMap,Pe=M.anisotropy>0,R=M.clearcoat>0,b=M.dispersion>0,z=M.iridescence>0,te=M.sheen>0,ne=M.transmission>0,Q=Pe&&!!M.anisotropyMap,Ae=R&&!!M.clearcoatMap,ge=R&&!!M.clearcoatNormalMap,ze=R&&!!M.clearcoatRoughnessMap,qe=z&&!!M.iridescenceMap,le=z&&!!M.iridescenceThicknessMap,fe=te&&!!M.sheenColorMap,De=te&&!!M.sheenRoughnessMap,Le=!!M.specularMap,Ee=!!M.specularColorMap,nt=!!M.specularIntensityMap,O=ne&&!!M.transmissionMap,ve=ne&&!!M.thicknessMap,pe=!!M.gradientMap,Re=!!M.alphaMap,ue=M.alphaTest>0,ee=!!M.alphaHash,Ie=!!M.extensions;let je=Yn;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(je=i.toneMapping);const wt={shaderID:re,shaderType:M.type,shaderName:M.name,vertexShader:Oe,fragmentShader:ut,defines:M.defines,customVertexShaderID:Ve,customFragmentShaderID:J,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:h,batching:Be,batchingColor:Be&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Fr,alphaToCoverage:!!M.alphaToCoverage,map:We,matcap:Ft,envMap:rt,envMapMode:rt&&V.mapping,envMapCubeUVHeight:se,aoMap:ot,lightMap:mt,bumpMap:Je,normalMap:Rt,displacementMap:F,emissiveMap:Pt,normalMapObjectSpace:Rt&&M.normalMapType===Pp,normalMapTangentSpace:Rt&&M.normalMapType===kh,metalnessMap:st,roughnessMap:xt,anisotropy:Pe,anisotropyMap:Q,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:ge,clearcoatRoughnessMap:ze,dispersion:b,iridescence:z,iridescenceMap:qe,iridescenceThicknessMap:le,sheen:te,sheenColorMap:fe,sheenRoughnessMap:De,specularMap:Le,specularColorMap:Ee,specularIntensityMap:nt,transmission:ne,transmissionMap:O,thicknessMap:ve,gradientMap:pe,opaque:M.transparent===!1&&M.blending===Cr&&M.alphaToCoverage===!1,alphaMap:Re,alphaTest:ue,alphaHash:ee,combine:M.combine,mapUv:We&&x(M.map.channel),aoMapUv:ot&&x(M.aoMap.channel),lightMapUv:mt&&x(M.lightMap.channel),bumpMapUv:Je&&x(M.bumpMap.channel),normalMapUv:Rt&&x(M.normalMap.channel),displacementMapUv:F&&x(M.displacementMap.channel),emissiveMapUv:Pt&&x(M.emissiveMap.channel),metalnessMapUv:st&&x(M.metalnessMap.channel),roughnessMapUv:xt&&x(M.roughnessMap.channel),anisotropyMapUv:Q&&x(M.anisotropyMap.channel),clearcoatMapUv:Ae&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:le&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(M.sheenRoughnessMap.channel),specularMapUv:Le&&x(M.specularMap.channel),specularColorMapUv:Ee&&x(M.specularColorMap.channel),specularIntensityMapUv:nt&&x(M.specularIntensityMap.channel),transmissionMapUv:O&&x(M.transmissionMap.channel),thicknessMapUv:ve&&x(M.thicknessMap.channel),alphaMapUv:Re&&x(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Rt||Pe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!X.attributes.uv&&(We||Re),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.wireframe===!1&&(M.flatShading===!0||X.attributes.normal===void 0&&Rt===!1&&(M.isMeshLambertMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isMeshPhysicalMaterial)),sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:B.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ye,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&K.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:We&&M.map.isVideoTexture===!0&&ct.getTransfer(M.map.colorSpace)===vt,decodeVideoTextureEmissive:Pt&&M.emissiveMap.isVideoTexture===!0&&ct.getTransfer(M.emissiveMap.colorSpace)===vt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Un,flipSided:M.side===an,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ie&&M.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&M.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function m(M){const A=[];if(M.shaderID?A.push(M.shaderID):(A.push(M.customVertexShaderID),A.push(M.customFragmentShaderID)),M.defines!==void 0)for(const K in M.defines)A.push(K),A.push(M.defines[K]);return M.isRawShaderMaterial===!1&&(g(A,M),S(A,M),A.push(i.outputColorSpace)),A.push(M.customProgramCacheKey),A.join()}function g(M,A){M.push(A.precision),M.push(A.outputColorSpace),M.push(A.envMapMode),M.push(A.envMapCubeUVHeight),M.push(A.mapUv),M.push(A.alphaMapUv),M.push(A.lightMapUv),M.push(A.aoMapUv),M.push(A.bumpMapUv),M.push(A.normalMapUv),M.push(A.displacementMapUv),M.push(A.emissiveMapUv),M.push(A.metalnessMapUv),M.push(A.roughnessMapUv),M.push(A.anisotropyMapUv),M.push(A.clearcoatMapUv),M.push(A.clearcoatNormalMapUv),M.push(A.clearcoatRoughnessMapUv),M.push(A.iridescenceMapUv),M.push(A.iridescenceThicknessMapUv),M.push(A.sheenColorMapUv),M.push(A.sheenRoughnessMapUv),M.push(A.specularMapUv),M.push(A.specularColorMapUv),M.push(A.specularIntensityMapUv),M.push(A.transmissionMapUv),M.push(A.thicknessMapUv),M.push(A.combine),M.push(A.fogExp2),M.push(A.sizeAttenuation),M.push(A.morphTargetsCount),M.push(A.morphAttributeCount),M.push(A.numDirLights),M.push(A.numPointLights),M.push(A.numSpotLights),M.push(A.numSpotLightMaps),M.push(A.numHemiLights),M.push(A.numRectAreaLights),M.push(A.numDirLightShadows),M.push(A.numPointLightShadows),M.push(A.numSpotLightShadows),M.push(A.numSpotLightShadowsWithMaps),M.push(A.numLightProbes),M.push(A.shadowMapType),M.push(A.toneMapping),M.push(A.numClippingPlanes),M.push(A.numClipIntersection),M.push(A.depthPacking)}function S(M,A){s.disableAll(),A.instancing&&s.enable(0),A.instancingColor&&s.enable(1),A.instancingMorph&&s.enable(2),A.matcap&&s.enable(3),A.envMap&&s.enable(4),A.normalMapObjectSpace&&s.enable(5),A.normalMapTangentSpace&&s.enable(6),A.clearcoat&&s.enable(7),A.iridescence&&s.enable(8),A.alphaTest&&s.enable(9),A.vertexColors&&s.enable(10),A.vertexAlphas&&s.enable(11),A.vertexUv1s&&s.enable(12),A.vertexUv2s&&s.enable(13),A.vertexUv3s&&s.enable(14),A.vertexTangents&&s.enable(15),A.anisotropy&&s.enable(16),A.alphaHash&&s.enable(17),A.batching&&s.enable(18),A.dispersion&&s.enable(19),A.batchingColor&&s.enable(20),A.gradientMap&&s.enable(21),M.push(s.mask),s.disableAll(),A.fog&&s.enable(0),A.useFog&&s.enable(1),A.flatShading&&s.enable(2),A.logarithmicDepthBuffer&&s.enable(3),A.reversedDepthBuffer&&s.enable(4),A.skinning&&s.enable(5),A.morphTargets&&s.enable(6),A.morphNormals&&s.enable(7),A.morphColors&&s.enable(8),A.premultipliedAlpha&&s.enable(9),A.shadowMapEnabled&&s.enable(10),A.doubleSided&&s.enable(11),A.flipSided&&s.enable(12),A.useDepthPacking&&s.enable(13),A.dithering&&s.enable(14),A.transmission&&s.enable(15),A.sheen&&s.enable(16),A.opaque&&s.enable(17),A.pointsUvs&&s.enable(18),A.decodeVideoTexture&&s.enable(19),A.decodeVideoTextureEmissive&&s.enable(20),A.alphaToCoverage&&s.enable(21),M.push(s.mask)}function C(M){const A=p[M.type];let K;if(A){const U=Vn[A];K=pm.clone(U.uniforms)}else K=M.uniforms;return K}function E(M,A){let K=u.get(A);return K!==void 0?++K.usedTimes:(K=new V2(i,A,M,r),c.push(K),u.set(A,K)),K}function D(M){if(--M.usedTimes===0){const A=c.indexOf(M);c[A]=c[c.length-1],c.pop(),u.delete(M.cacheKey),M.destroy()}}function P(M){o.remove(M)}function L(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:E,releaseProgram:D,releaseShaderCache:P,programs:c,dispose:L}}function $2(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,l){i.get(s)[o]=l}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function j2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gu(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function o(h,p,x,y,m,g){let S=i[e];return S===void 0?(S={id:h.id,object:h,geometry:p,material:x,materialVariant:s(h),groupOrder:y,renderOrder:h.renderOrder,z:m,group:g},i[e]=S):(S.id=h.id,S.object=h,S.geometry=p,S.material=x,S.materialVariant=s(h),S.groupOrder=y,S.renderOrder=h.renderOrder,S.z=m,S.group=g),e++,S}function l(h,p,x,y,m,g){const S=o(h,p,x,y,m,g);x.transmission>0?n.push(S):x.transparent===!0?r.push(S):t.push(S)}function c(h,p,x,y,m,g){const S=o(h,p,x,y,m,g);x.transmission>0?n.unshift(S):x.transparent===!0?r.unshift(S):t.unshift(S)}function u(h,p){t.length>1&&t.sort(h||j2),n.length>1&&n.sort(p||mu),r.length>1&&r.sort(p||mu)}function f(){for(let h=e,p=i.length;h<p;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:l,unshift:c,finish:f,sort:u}}function K2(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new gu,i.set(n,[s])):r>=a.length?(s=new gu,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Z2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new lt};break;case"SpotLight":t={position:new G,direction:new G,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":t={color:new lt,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function J2(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Q2=0;function e4(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t4(i){const e=new Z2,t=J2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const r=new G,a=new At,s=new At;function o(c){let u=0,f=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,x=0,y=0,m=0,g=0,S=0,C=0,E=0,D=0,P=0,L=0;c.sort(e4);for(let A=0,K=c.length;A<K;A++){const U=c[A],B=U.color,q=U.intensity,X=U.distance;let W=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ur?W=U.shadow.map.texture:W=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=B.r*q,f+=B.g*q,h+=B.b*q;else if(U.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(U.sh.coefficients[Y],q);L++}else if(U.isDirectionalLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,se=t.get(U);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,n.directionalShadow[p]=se,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=U.shadow.matrix,S++}n.directional[p]=Y,p++}else if(U.isSpotLight){const Y=e.get(U);Y.position.setFromMatrixPosition(U.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=X,Y.coneCos=Math.cos(U.angle),Y.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Y.decay=U.decay,n.spot[y]=Y;const V=U.shadow;if(U.map&&(n.spotLightMap[D]=U.map,D++,V.updateMatrices(U),U.castShadow&&P++),n.spotLightMatrix[y]=V.matrix,U.castShadow){const se=t.get(U);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,n.spotShadow[y]=se,n.spotShadowMap[y]=W,E++}y++}else if(U.isRectAreaLight){const Y=e.get(U);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(U.width*.5,0,0),Y.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=Y,m++}else if(U.isPointLight){const Y=e.get(U);if(Y.color.copy(U.color).multiplyScalar(U.intensity),Y.distance=U.distance,Y.decay=U.decay,U.castShadow){const V=U.shadow,se=t.get(U);se.shadowIntensity=V.intensity,se.shadowBias=V.bias,se.shadowNormalBias=V.normalBias,se.shadowRadius=V.radius,se.shadowMapSize=V.mapSize,se.shadowCameraNear=V.camera.near,se.shadowCameraFar=V.camera.far,n.pointShadow[x]=se,n.pointShadowMap[x]=W,n.pointShadowMatrix[x]=U.shadow.matrix,C++}n.point[x]=Y,x++}else if(U.isHemisphereLight){const Y=e.get(U);Y.skyColor.copy(U.color).multiplyScalar(q),Y.groundColor.copy(U.groundColor).multiplyScalar(q),n.hemi[g]=Y,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=be.LTC_FLOAT_1,n.rectAreaLTC2=be.LTC_FLOAT_2):(n.rectAreaLTC1=be.LTC_HALF_1,n.rectAreaLTC2=be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const M=n.hash;(M.directionalLength!==p||M.pointLength!==x||M.spotLength!==y||M.rectAreaLength!==m||M.hemiLength!==g||M.numDirectionalShadows!==S||M.numPointShadows!==C||M.numSpotShadows!==E||M.numSpotMaps!==D||M.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=E+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=L,M.directionalLength=p,M.pointLength=x,M.spotLength=y,M.rectAreaLength=m,M.hemiLength=g,M.numDirectionalShadows=S,M.numPointShadows=C,M.numSpotShadows=E,M.numSpotMaps=D,M.numLightProbes=L,n.version=Q2++)}function l(c,u){let f=0,h=0,p=0,x=0,y=0;const m=u.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){const C=c[g];if(C.isDirectionalLight){const E=n.directional[f];E.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(C.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(C.isRectAreaLight){const E=n.rectArea[x];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),s.identity(),a.copy(C.matrixWorld),a.premultiply(m),s.extractRotation(a),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),x++}else if(C.isPointLight){const E=n.point[h];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(m),h++}else if(C.isHemisphereLight){const E=n.hemi[y];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function vu(i){const e=new t4(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function a(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function n4(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new vu(i),e.set(r,[o])):a>=s.length?(o=new vu(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const i4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r4=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a4=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],s4=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],xu=new At,Kr=new G,ko=new G;function o4(i,e,t){let n=new _0;const r=new Ke,a=new Ke,s=new Ut,o=new xm,l=new ym,c={},u=t.maxTextureSize,f={[mi]:an,[an]:mi,[Un]:Un},h=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:i4,fragmentShader:r4}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Kt;x.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Vt(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=as;let g=this.type;this.render=function(P,L,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;this.type===op&&(Ye("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=as);const A=i.getRenderTarget(),K=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(di),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=g!==this.type;q&&L.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(W=>W.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,W=P.length;X<W;X++){const Y=P[X],V=Y.shadow;if(V===void 0){Ye("WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const se=V.getFrameExtents();r.multiply(se),a.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/se.x),r.x=a.x*se.x,V.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/se.y),r.y=a.y*se.y,V.mapSize.y=a.y));const re=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=re,V.map===null||q===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Jr){if(Y.isPointLight){Ye("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new $n(r.x,r.y,{format:Ur,type:gi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),V.map.texture.name=Y.name+".shadowMap",V.map.depthTexture=new oa(r.x,r.y,qn),V.map.depthTexture.name=Y.name+".shadowMapDepth",V.map.depthTexture.format=vi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt}else Y.isPointLight?(V.map=new Qh(r.x),V.map.depthTexture=new dm(r.x,jn)):(V.map=new $n(r.x,r.y),V.map.depthTexture=new oa(r.x,r.y,jn)),V.map.depthTexture.name=Y.name+".shadowMap",V.map.depthTexture.format=vi,this.type===as?(V.map.depthTexture.compareFunction=re?y0:x0,V.map.depthTexture.minFilter=nn,V.map.depthTexture.magFilter=nn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Jt,V.map.depthTexture.magFilter=Jt);V.camera.updateProjectionMatrix()}const xe=V.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<xe;_e++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(V.map),i.clear());const ye=V.getViewport(_e);s.set(a.x*ye.x,a.y*ye.y,a.x*ye.z,a.y*ye.w),B.viewport(s)}if(Y.isPointLight){const ye=V.camera,Oe=V.matrix,ut=Y.distance||ye.far;ut!==ye.far&&(ye.far=ut,ye.updateProjectionMatrix()),Kr.setFromMatrixPosition(Y.matrixWorld),ye.position.copy(Kr),ko.copy(ye.position),ko.add(a4[_e]),ye.up.copy(s4[_e]),ye.lookAt(ko),ye.updateMatrixWorld(),Oe.makeTranslation(-Kr.x,-Kr.y,-Kr.z),xu.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),V._frustum.setFromProjectionMatrix(xu,ye.coordinateSystem,ye.reversedDepth)}else V.updateMatrices(Y);n=V.getFrustum(),E(L,M,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Jr&&S(V,M),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(A,K,U)};function S(P,L){const M=e.update(y);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,p.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $n(r.x,r.y,{format:Ur,type:gi})),h.uniforms.shadow_pass.value=P.map.depthTexture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(L,null,M,h,y,null),p.uniforms.shadow_pass.value=P.mapPass.texture,p.uniforms.resolution.value=P.mapSize,p.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(L,null,M,p,y,null)}function C(P,L,M,A){let K=null;const U=M.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(U!==void 0)K=U;else if(K=M.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=K.uuid,q=L.uuid;let X=c[B];X===void 0&&(X={},c[B]=X);let W=X[q];W===void 0&&(W=K.clone(),X[q]=W,L.addEventListener("dispose",D)),K=W}if(K.visible=L.visible,K.wireframe=L.wireframe,A===Jr?K.side=L.shadowSide!==null?L.shadowSide:L.side:K.side=L.shadowSide!==null?L.shadowSide:f[L.side],K.alphaMap=L.alphaMap,K.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,K.map=L.map,K.clipShadows=L.clipShadows,K.clippingPlanes=L.clippingPlanes,K.clipIntersection=L.clipIntersection,K.displacementMap=L.displacementMap,K.displacementScale=L.displacementScale,K.displacementBias=L.displacementBias,K.wireframeLinewidth=L.wireframeLinewidth,K.linewidth=L.linewidth,M.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const B=i.properties.get(K);B.light=M}return K}function E(P,L,M,A,K){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&K===Jr)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,P.matrixWorld);const q=e.update(P),X=P.material;if(Array.isArray(X)){const W=q.groups;for(let Y=0,V=W.length;Y<V;Y++){const se=W[Y],re=X[se.materialIndex];if(re&&re.visible){const xe=C(P,re,A,K);P.onBeforeShadow(i,P,L,M,q,xe,se),i.renderBufferDirect(M,null,q,xe,P,se),P.onAfterShadow(i,P,L,M,q,xe,se)}}}else if(X.visible){const W=C(P,X,A,K);P.onBeforeShadow(i,P,L,M,q,W,null),i.renderBufferDirect(M,null,q,W,P,null),P.onAfterShadow(i,P,L,M,q,W,null)}}const B=P.children;for(let q=0,X=B.length;q<X;q++)E(B[q],L,M,A,K)}function D(P){P.target.removeEventListener("dispose",D);for(const M in c){const A=c[M],K=P.target.uuid;K in A&&(A[K].dispose(),delete A[K])}}}function l4(i,e){function t(){let O=!1;const ve=new Ut;let pe=null;const Re=new Ut(0,0,0,0);return{setMask:function(ue){pe!==ue&&!O&&(i.colorMask(ue,ue,ue,ue),pe=ue)},setLocked:function(ue){O=ue},setClear:function(ue,ee,Ie,je,wt){wt===!0&&(ue*=je,ee*=je,Ie*=je),ve.set(ue,ee,Ie,je),Re.equals(ve)===!1&&(i.clearColor(ue,ee,Ie,je),Re.copy(ve))},reset:function(){O=!1,pe=null,Re.set(-1,0,0,0)}}}function n(){let O=!1,ve=!1,pe=null,Re=null,ue=null;return{setReversed:function(ee){if(ve!==ee){const Ie=e.get("EXT_clip_control");ee?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ve=ee;const je=ue;ue=null,this.setClear(je)}},getReversed:function(){return ve},setTest:function(ee){ee?ae(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!O&&(i.depthMask(ee),pe=ee)},setFunc:function(ee){if(ve&&(ee=zp[ee]),Re!==ee){switch(ee){case tl:i.depthFunc(i.NEVER);break;case nl:i.depthFunc(i.ALWAYS);break;case il:i.depthFunc(i.LESS);break;case Lr:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=ee}},setLocked:function(ee){O=ee},setClear:function(ee){ue!==ee&&(ue=ee,ve&&(ee=1-ee),i.clearDepth(ee))},reset:function(){O=!1,pe=null,Re=null,ue=null,ve=!1}}}function r(){let O=!1,ve=null,pe=null,Re=null,ue=null,ee=null,Ie=null,je=null,wt=null;return{setTest:function(gt){O||(gt?ae(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(gt){ve!==gt&&!O&&(i.stencilMask(gt),ve=gt)},setFunc:function(gt,ti,ni){(pe!==gt||Re!==ti||ue!==ni)&&(i.stencilFunc(gt,ti,ni),pe=gt,Re=ti,ue=ni)},setOp:function(gt,ti,ni){(ee!==gt||Ie!==ti||je!==ni)&&(i.stencilOp(gt,ti,ni),ee=gt,Ie=ti,je=ni)},setLocked:function(gt){O=gt},setClear:function(gt){wt!==gt&&(i.clearStencil(gt),wt=gt)},reset:function(){O=!1,ve=null,pe=null,Re=null,ue=null,ee=null,Ie=null,je=null,wt=null}}}const a=new t,s=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],x=null,y=!1,m=null,g=null,S=null,C=null,E=null,D=null,P=null,L=new lt(0,0,0),M=0,A=!1,K=null,U=null,B=null,q=null,X=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,V=0;const se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(se)[1]),Y=V>=1):se.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Y=V>=2);let re=null,xe={};const _e=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Oe=new Ut().fromArray(_e),ut=new Ut().fromArray(ye);function Ve(O,ve,pe,Re){const ue=new Uint8Array(4),ee=i.createTexture();i.bindTexture(O,ee),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<pe;Ie++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ve+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ee}const J={};J[i.TEXTURE_2D]=Ve(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),s.setFunc(Lr),Je(!1),Rt(gc),ae(i.CULL_FACE),ot(di);function ae(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function de(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function He(O,ve){return f[O]!==ve?(i.bindFramebuffer(O,ve),f[O]=ve,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ve),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Be(O,ve){let pe=p,Re=!1;if(O){pe=h.get(ve),pe===void 0&&(pe=[],h.set(ve,pe));const ue=O.textures;if(pe.length!==ue.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Ie=ue.length;ee<Ie;ee++)pe[ee]=i.COLOR_ATTACHMENT0+ee;pe.length=ue.length,Re=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Re=!0);Re&&i.drawBuffers(pe)}function We(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const Ft={[Zi]:i.FUNC_ADD,[cp]:i.FUNC_SUBTRACT,[up]:i.FUNC_REVERSE_SUBTRACT};Ft[hp]=i.MIN,Ft[dp]=i.MAX;const rt={[fp]:i.ZERO,[pp]:i.ONE,[mp]:i.SRC_COLOR,[Qo]:i.SRC_ALPHA,[_p]:i.SRC_ALPHA_SATURATE,[yp]:i.DST_COLOR,[vp]:i.DST_ALPHA,[gp]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[bp]:i.ONE_MINUS_DST_COLOR,[xp]:i.ONE_MINUS_DST_ALPHA,[Mp]:i.CONSTANT_COLOR,[Sp]:i.ONE_MINUS_CONSTANT_COLOR,[wp]:i.CONSTANT_ALPHA,[Tp]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(O,ve,pe,Re,ue,ee,Ie,je,wt,gt){if(O===di){y===!0&&(de(i.BLEND),y=!1);return}if(y===!1&&(ae(i.BLEND),y=!0),O!==lp){if(O!==m||gt!==A){if((g!==Zi||E!==Zi)&&(i.blendEquation(i.FUNC_ADD),g=Zi,E=Zi),gt)switch(O){case Cr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:dt("WebGLState: Invalid blending: ",O);break}else switch(O){case Cr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xc:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yc:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",O);break}S=null,C=null,D=null,P=null,L.set(0,0,0),M=0,m=O,A=gt}return}ue=ue||ve,ee=ee||pe,Ie=Ie||Re,(ve!==g||ue!==E)&&(i.blendEquationSeparate(Ft[ve],Ft[ue]),g=ve,E=ue),(pe!==S||Re!==C||ee!==D||Ie!==P)&&(i.blendFuncSeparate(rt[pe],rt[Re],rt[ee],rt[Ie]),S=pe,C=Re,D=ee,P=Ie),(je.equals(L)===!1||wt!==M)&&(i.blendColor(je.r,je.g,je.b,wt),L.copy(je),M=wt),m=O,A=!1}function mt(O,ve){O.side===Un?de(i.CULL_FACE):ae(i.CULL_FACE);let pe=O.side===an;ve&&(pe=!pe),Je(pe),O.blending===Cr&&O.transparent===!1?ot(di):ot(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);const Re=O.stencilWrite;o.setTest(Re),Re&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Pt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(O){K!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),K=O)}function Rt(O){O!==ap?(ae(i.CULL_FACE),O!==U&&(O===gc?i.cullFace(i.BACK):O===sp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),U=O}function F(O){O!==B&&(Y&&i.lineWidth(O),B=O)}function Pt(O,ve,pe){O?(ae(i.POLYGON_OFFSET_FILL),(q!==ve||X!==pe)&&(q=ve,X=pe,s.getReversed()&&(ve=-ve),i.polygonOffset(ve,pe))):de(i.POLYGON_OFFSET_FILL)}function st(O){O?ae(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function xt(O){O===void 0&&(O=i.TEXTURE0+W-1),re!==O&&(i.activeTexture(O),re=O)}function Pe(O,ve,pe){pe===void 0&&(re===null?pe=i.TEXTURE0+W-1:pe=re);let Re=xe[pe];Re===void 0&&(Re={type:void 0,texture:void 0},xe[pe]=Re),(Re.type!==O||Re.texture!==ve)&&(re!==pe&&(i.activeTexture(pe),re=pe),i.bindTexture(O,ve||J[O]),Re.type=O,Re.texture=ve)}function R(){const O=xe[re];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function te(){try{i.texSubImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function ne(){try{i.texSubImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function ge(){try{i.texStorage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function ze(){try{i.texStorage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function qe(){try{i.texImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function le(){try{i.texImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function fe(O){Oe.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Oe.copy(O))}function De(O){ut.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),ut.copy(O))}function Le(O,ve){let pe=c.get(ve);pe===void 0&&(pe=new WeakMap,c.set(ve,pe));let Re=pe.get(O);Re===void 0&&(Re=i.getUniformBlockIndex(ve,O.name),pe.set(O,Re))}function Ee(O,ve){const Re=c.get(ve).get(O);l.get(ve)!==Re&&(i.uniformBlockBinding(ve,Re,O.__bindingPointIndex),l.set(ve,Re))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,xe={},f={},h=new WeakMap,p=[],x=null,y=!1,m=null,g=null,S=null,C=null,E=null,D=null,P=null,L=new lt(0,0,0),M=0,A=!1,K=null,U=null,B=null,q=null,X=null,Oe.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ae,disable:de,bindFramebuffer:He,drawBuffers:Be,useProgram:We,setBlending:ot,setMaterial:mt,setFlipSided:Je,setCullFace:Rt,setLineWidth:F,setPolygonOffset:Pt,setScissorTest:st,activeTexture:xt,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:b,compressedTexImage3D:z,texImage2D:qe,texImage3D:le,updateUBOMapping:Le,uniformBlockBinding:Ee,texStorage2D:ge,texStorage3D:ze,texSubImage2D:te,texSubImage3D:ne,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ae,scissor:fe,viewport:De,reset:nt}}function c4(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,b){return p?new OffscreenCanvas(R,b):xs("canvas")}function y(R,b,z){let te=1;const ne=Pe(R);if((ne.width>z||ne.height>z)&&(te=z/Math.max(ne.width,ne.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(te*ne.width),Ae=Math.floor(te*ne.height);f===void 0&&(f=x(Q,Ae));const ge=b?x(Q,Ae):f;return ge.width=Q,ge.height=Ae,ge.getContext("2d").drawImage(R,0,0,Q,Ae),Ye("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Q+"x"+Ae+")."),ge}else return"data"in R&&Ye("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(R,b,z,te,ne=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ye("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=b;if(b===i.RED&&(z===i.FLOAT&&(Q=i.R32F),z===i.HALF_FLOAT&&(Q=i.R16F),z===i.UNSIGNED_BYTE&&(Q=i.R8)),b===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.R8UI),z===i.UNSIGNED_SHORT&&(Q=i.R16UI),z===i.UNSIGNED_INT&&(Q=i.R32UI),z===i.BYTE&&(Q=i.R8I),z===i.SHORT&&(Q=i.R16I),z===i.INT&&(Q=i.R32I)),b===i.RG&&(z===i.FLOAT&&(Q=i.RG32F),z===i.HALF_FLOAT&&(Q=i.RG16F),z===i.UNSIGNED_BYTE&&(Q=i.RG8)),b===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RG8UI),z===i.UNSIGNED_SHORT&&(Q=i.RG16UI),z===i.UNSIGNED_INT&&(Q=i.RG32UI),z===i.BYTE&&(Q=i.RG8I),z===i.SHORT&&(Q=i.RG16I),z===i.INT&&(Q=i.RG32I)),b===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),z===i.UNSIGNED_INT&&(Q=i.RGB32UI),z===i.BYTE&&(Q=i.RGB8I),z===i.SHORT&&(Q=i.RGB16I),z===i.INT&&(Q=i.RGB32I)),b===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),z===i.UNSIGNED_INT&&(Q=i.RGBA32UI),z===i.BYTE&&(Q=i.RGBA8I),z===i.SHORT&&(Q=i.RGBA16I),z===i.INT&&(Q=i.RGBA32I)),b===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),b===i.RGBA){const Ae=ne?vs:ct.getTransfer(te);z===i.FLOAT&&(Q=i.RGBA32F),z===i.HALF_FLOAT&&(Q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Q=Ae===vt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function E(R,b){let z;return R?b===null||b===jn||b===aa?z=i.DEPTH24_STENCIL8:b===qn?z=i.DEPTH32F_STENCIL8:b===ra&&(z=i.DEPTH24_STENCIL8,Ye("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===jn||b===aa?z=i.DEPTH_COMPONENT24:b===qn?z=i.DEPTH_COMPONENT32F:b===ra&&(z=i.DEPTH_COMPONENT16),z}function D(R,b){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Jt&&R.minFilter!==nn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function P(R){const b=R.target;b.removeEventListener("dispose",P),M(b),b.isVideoTexture&&u.delete(b)}function L(R){const b=R.target;b.removeEventListener("dispose",L),K(b)}function M(R){const b=n.get(R);if(b.__webglInit===void 0)return;const z=R.source,te=h.get(z);if(te){const ne=te[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&A(R),Object.keys(te).length===0&&h.delete(z)}n.remove(R)}function A(R){const b=n.get(R);i.deleteTexture(b.__webglTexture);const z=R.source,te=h.get(z);delete te[b.__cacheKey],s.memory.textures--}function K(R){const b=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(b.__webglFramebuffer[te]))for(let ne=0;ne<b.__webglFramebuffer[te].length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[te][ne]);else i.deleteFramebuffer(b.__webglFramebuffer[te]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[te])}else{if(Array.isArray(b.__webglFramebuffer))for(let te=0;te<b.__webglFramebuffer.length;te++)i.deleteFramebuffer(b.__webglFramebuffer[te]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let te=0;te<b.__webglColorRenderbuffer.length;te++)b.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[te]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const z=R.textures;for(let te=0,ne=z.length;te<ne;te++){const Q=n.get(z[te]);Q.__webglTexture&&(i.deleteTexture(Q.__webglTexture),s.memory.textures--),n.remove(z[te])}n.remove(R)}let U=0;function B(){U=0}function q(){const R=U;return R>=r.maxTextures&&Ye("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function X(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function W(R,b){const z=n.get(R);if(R.isVideoTexture&&st(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const te=R.image;if(te===null)Ye("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ye("WebGLRenderer: Texture marked for update but image is incomplete");else{J(z,R,b);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+b)}function Y(R,b){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){J(z,R,b);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+b)}function V(R,b){const z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){J(z,R,b);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+b)}function se(R,b){const z=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){ae(z,R,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+b)}const re={[ir]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[ll]:i.MIRRORED_REPEAT},xe={[Jt]:i.NEAREST,[Cp]:i.NEAREST_MIPMAP_NEAREST,[Ea]:i.NEAREST_MIPMAP_LINEAR,[nn]:i.LINEAR,[ao]:i.LINEAR_MIPMAP_NEAREST,[Qi]:i.LINEAR_MIPMAP_LINEAR},_e={[Dp]:i.NEVER,[Fp]:i.ALWAYS,[Ip]:i.LESS,[x0]:i.LEQUAL,[Lp]:i.EQUAL,[y0]:i.GEQUAL,[Np]:i.GREATER,[Up]:i.NOTEQUAL};function ye(R,b){if(b.type===qn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===nn||b.magFilter===ao||b.magFilter===Ea||b.magFilter===Qi||b.minFilter===nn||b.minFilter===ao||b.minFilter===Ea||b.minFilter===Qi)&&Ye("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,re[b.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,re[b.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,re[b.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,xe[b.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jt||b.minFilter!==Ea&&b.minFilter!==Qi||b.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(R,b){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",P));const te=b.source;let ne=h.get(te);ne===void 0&&(ne={},h.set(te,ne));const Q=X(b);if(Q!==R.__cacheKey){ne[Q]===void 0&&(ne[Q]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ne[Q].usedTimes++;const Ae=ne[R.__cacheKey];Ae!==void 0&&(ne[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&A(b)),R.__cacheKey=Q,R.__webglTexture=ne[Q].texture}return z}function ut(R,b,z){return Math.floor(Math.floor(R/z)/b)}function Ve(R,b,z,te){const Q=R.updateRanges;if(Q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,z,te,b.data);else{Q.sort((le,fe)=>le.start-fe.start);let Ae=0;for(let le=1;le<Q.length;le++){const fe=Q[Ae],De=Q[le],Le=fe.start+fe.count,Ee=ut(De.start,b.width,4),nt=ut(fe.start,b.width,4);De.start<=Le+1&&Ee===nt&&ut(De.start+De.count-1,b.width,4)===Ee?fe.count=Math.max(fe.count,De.start+De.count-fe.start):(++Ae,Q[Ae]=De)}Q.length=Ae+1;const ge=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),qe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let le=0,fe=Q.length;le<fe;le++){const De=Q[le],Le=Math.floor(De.start/4),Ee=Math.ceil(De.count/4),nt=Le%b.width,O=Math.floor(Le/b.width),ve=Ee,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,nt,O,ve,pe,z,te,b.data)}R.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ge),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,qe)}}function J(R,b,z){let te=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(te=i.TEXTURE_3D);const ne=Oe(R,b),Q=b.source;t.bindTexture(te,R.__webglTexture,i.TEXTURE0+z);const Ae=n.get(Q);if(Q.version!==Ae.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);const ge=ct.getPrimaries(ct.workingColorSpace),ze=b.colorSpace===Di?null:ct.getPrimaries(b.colorSpace),qe=b.colorSpace===Di||ge===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let le=y(b.image,!1,r.maxTextureSize);le=xt(b,le);const fe=a.convert(b.format,b.colorSpace),De=a.convert(b.type);let Le=C(b.internalFormat,fe,De,b.colorSpace,b.isVideoTexture);ye(te,b);let Ee;const nt=b.mipmaps,O=b.isVideoTexture!==!0,ve=Ae.__version===void 0||ne===!0,pe=Q.dataReady,Re=D(b,le);if(b.isDepthTexture)Le=E(b.format===er,b.type),ve&&(O?t.texStorage2D(i.TEXTURE_2D,1,Le,le.width,le.height):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,fe,De,null));else if(b.isDataTexture)if(nt.length>0){O&&ve&&t.texStorage2D(i.TEXTURE_2D,Re,Le,nt[0].width,nt[0].height);for(let ue=0,ee=nt.length;ue<ee;ue++)Ee=nt[ue],O?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,fe,De,Ee.data):t.texImage2D(i.TEXTURE_2D,ue,Le,Ee.width,Ee.height,0,fe,De,Ee.data);b.generateMipmaps=!1}else O?(ve&&t.texStorage2D(i.TEXTURE_2D,Re,Le,le.width,le.height),pe&&Ve(b,le,fe,De)):t.texImage2D(i.TEXTURE_2D,0,Le,le.width,le.height,0,fe,De,le.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Le,nt[0].width,nt[0].height,le.depth);for(let ue=0,ee=nt.length;ue<ee;ue++)if(Ee=nt[ue],b.format!==kn)if(fe!==null)if(O){if(pe)if(b.layerUpdates.size>0){const Ie=jc(Ee.width,Ee.height,b.format,b.type);for(const je of b.layerUpdates){const wt=Ee.data.subarray(je*Ie/Ee.data.BYTES_PER_ELEMENT,(je+1)*Ie/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,je,Ee.width,Ee.height,1,fe,wt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ee.width,Ee.height,le.depth,fe,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Le,Ee.width,Ee.height,le.depth,0,Ee.data,0,0);else Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,Ee.width,Ee.height,le.depth,fe,De,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Le,Ee.width,Ee.height,le.depth,0,fe,De,Ee.data)}else{O&&ve&&t.texStorage2D(i.TEXTURE_2D,Re,Le,nt[0].width,nt[0].height);for(let ue=0,ee=nt.length;ue<ee;ue++)Ee=nt[ue],b.format!==kn?fe!==null?O?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,fe,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Le,Ee.width,Ee.height,0,Ee.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,Ee.width,Ee.height,fe,De,Ee.data):t.texImage2D(i.TEXTURE_2D,ue,Le,Ee.width,Ee.height,0,fe,De,Ee.data)}else if(b.isDataArrayTexture)if(O){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Le,le.width,le.height,le.depth),pe)if(b.layerUpdates.size>0){const ue=jc(le.width,le.height,b.format,b.type);for(const ee of b.layerUpdates){const Ie=le.data.subarray(ee*ue/le.data.BYTES_PER_ELEMENT,(ee+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,le.width,le.height,1,fe,De,Ie)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,fe,De,le.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,le.width,le.height,le.depth,0,fe,De,le.data);else if(b.isData3DTexture)O?(ve&&t.texStorage3D(i.TEXTURE_3D,Re,Le,le.width,le.height,le.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,fe,De,le.data)):t.texImage3D(i.TEXTURE_3D,0,Le,le.width,le.height,le.depth,0,fe,De,le.data);else if(b.isFramebufferTexture){if(ve)if(O)t.texStorage2D(i.TEXTURE_2D,Re,Le,le.width,le.height);else{let ue=le.width,ee=le.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Le,ue,ee,0,fe,De,null),ue>>=1,ee>>=1}}else if(nt.length>0){if(O&&ve){const ue=Pe(nt[0]);t.texStorage2D(i.TEXTURE_2D,Re,Le,ue.width,ue.height)}for(let ue=0,ee=nt.length;ue<ee;ue++)Ee=nt[ue],O?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,fe,De,Ee):t.texImage2D(i.TEXTURE_2D,ue,Le,fe,De,Ee);b.generateMipmaps=!1}else if(O){if(ve){const ue=Pe(le);t.texStorage2D(i.TEXTURE_2D,Re,Le,ue.width,ue.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,De,le)}else t.texImage2D(i.TEXTURE_2D,0,Le,fe,De,le);m(b)&&g(te),Ae.__version=Q.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ae(R,b,z){if(b.image.length!==6)return;const te=Oe(R,b),ne=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const Q=n.get(ne);if(ne.version!==Q.__version||te===!0){t.activeTexture(i.TEXTURE0+z);const Ae=ct.getPrimaries(ct.workingColorSpace),ge=b.colorSpace===Di?null:ct.getPrimaries(b.colorSpace),ze=b.colorSpace===Di||Ae===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const qe=b.isCompressedTexture||b.image[0].isCompressedTexture,le=b.image[0]&&b.image[0].isDataTexture,fe=[];for(let ee=0;ee<6;ee++)!qe&&!le?fe[ee]=y(b.image[ee],!0,r.maxCubemapSize):fe[ee]=le?b.image[ee].image:b.image[ee],fe[ee]=xt(b,fe[ee]);const De=fe[0],Le=a.convert(b.format,b.colorSpace),Ee=a.convert(b.type),nt=C(b.internalFormat,Le,Ee,b.colorSpace),O=b.isVideoTexture!==!0,ve=Q.__version===void 0||te===!0,pe=ne.dataReady;let Re=D(b,De);ye(i.TEXTURE_CUBE_MAP,b);let ue;if(qe){O&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,nt,De.width,De.height);for(let ee=0;ee<6;ee++){ue=fe[ee].mipmaps;for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];b.format!==kn?Le!==null?O?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,je.width,je.height,Le,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,nt,je.width,je.height,0,je.data):Ye("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,0,0,je.width,je.height,Le,Ee,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie,nt,je.width,je.height,0,Le,Ee,je.data)}}}else{if(ue=b.mipmaps,O&&ve){ue.length>0&&Re++;const ee=Pe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,nt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(le){O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe[ee].width,fe[ee].height,Le,Ee,fe[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,nt,fe[ee].width,fe[ee].height,0,Le,Ee,fe[ee].data);for(let Ie=0;Ie<ue.length;Ie++){const wt=ue[Ie].image[ee].image;O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,wt.width,wt.height,Le,Ee,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,nt,wt.width,wt.height,0,Le,Ee,wt.data)}}else{O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,Ee,fe[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,nt,Le,Ee,fe[ee]);for(let Ie=0;Ie<ue.length;Ie++){const je=ue[Ie];O?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,0,0,Le,Ee,je.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ie+1,nt,Le,Ee,je.image[ee])}}}m(b)&&g(i.TEXTURE_CUBE_MAP),Q.__version=ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function de(R,b,z,te,ne,Q){const Ae=a.convert(z.format,z.colorSpace),ge=a.convert(z.type),ze=C(z.internalFormat,Ae,ge,z.colorSpace),qe=n.get(b),le=n.get(z);if(le.__renderTarget=b,!qe.__hasExternalTextures){const fe=Math.max(1,b.width>>Q),De=Math.max(1,b.height>>Q);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,Q,ze,fe,De,b.depth,0,Ae,ge,null):t.texImage2D(ne,Q,ze,fe,De,0,Ae,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Pt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ne,le.__webglTexture,0,F(b)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ne,le.__webglTexture,Q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(R,b,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),b.depthBuffer){const te=b.depthTexture,ne=te&&te.isDepthTexture?te.type:null,Q=E(b.stencilBuffer,ne),Ae=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(b),Q,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(b),Q,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Q,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,R)}else{const te=b.textures;for(let ne=0;ne<te.length;ne++){const Q=te[ne],Ae=a.convert(Q.format,Q.colorSpace),ge=a.convert(Q.type),ze=C(Q.internalFormat,Ae,ge,Q.colorSpace);Pt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F(b),ze,b.width,b.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,F(b),ze,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ze,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(R,b,z){const te=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(b.depthTexture);if(ne.__renderTarget=b,(!ne.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),te){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),ne.__webglTexture===void 0){ne.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),ye(i.TEXTURE_CUBE_MAP,b.depthTexture);const qe=a.convert(b.depthTexture.format),le=a.convert(b.depthTexture.type);let fe;b.depthTexture.format===vi?fe=i.DEPTH_COMPONENT24:b.depthTexture.format===er&&(fe=i.DEPTH24_STENCIL8);for(let De=0;De<6;De++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,fe,b.width,b.height,0,qe,le,null)}}else W(b.depthTexture,0);const Q=ne.__webglTexture,Ae=F(b),ge=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,ze=b.depthTexture.format===er?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===vi)Pt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ze,ge,Q,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,ze,ge,Q,0);else if(b.depthTexture.format===er)Pt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ze,ge,Q,0,Ae):i.framebufferTexture2D(i.FRAMEBUFFER,ze,ge,Q,0);else throw new Error("Unknown depthTexture format")}function We(R){const b=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),te){const ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,te.removeEventListener("dispose",ne)};te.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=te}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(z)for(let te=0;te<6;te++)Be(b.__webglFramebuffer[te],R,te);else{const te=R.texture.mipmaps;te&&te.length>0?Be(b.__webglFramebuffer[0],R,0):Be(b.__webglFramebuffer,R,0)}else if(z){b.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[te]),b.__webglDepthbuffer[te]===void 0)b.__webglDepthbuffer[te]=i.createRenderbuffer(),He(b.__webglDepthbuffer[te],R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Q)}}else{const te=R.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),He(b.__webglDepthbuffer,R,!1);else{const ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,Q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(R,b,z){const te=n.get(R);b!==void 0&&de(te.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&We(R)}function rt(R){const b=R.texture,z=n.get(R),te=n.get(b);R.addEventListener("dispose",L);const ne=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ae=ne.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=b.version,s.memory.textures++),Q){z.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer[ge]=[];for(let ze=0;ze<b.mipmaps.length;ze++)z.__webglFramebuffer[ge][ze]=i.createFramebuffer()}else z.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){z.__webglFramebuffer=[];for(let ge=0;ge<b.mipmaps.length;ge++)z.__webglFramebuffer[ge]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let ge=0,ze=ne.length;ge<ze;ge++){const qe=n.get(ne[ge]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),s.memory.textures++)}if(R.samples>0&&Pt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){const ze=ne[ge];z.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ge]);const qe=a.convert(ze.format,ze.colorSpace),le=a.convert(ze.type),fe=C(ze.internalFormat,qe,le,ze.colorSpace,R.isXRRenderTarget===!0),De=F(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,fe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,z.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),He(z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),ye(i.TEXTURE_CUBE_MAP,b);for(let ge=0;ge<6;ge++)if(b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)de(z.__webglFramebuffer[ge][ze],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ze);else de(z.__webglFramebuffer[ge],R,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(b)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ge=0,ze=ne.length;ge<ze;ge++){const qe=ne[ge],le=n.get(qe);let fe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,le.__webglTexture),ye(fe,qe),de(z.__webglFramebuffer,R,qe,i.COLOR_ATTACHMENT0+ge,fe,0),m(qe)&&g(fe)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,te.__webglTexture),ye(ge,b),b.mipmaps&&b.mipmaps.length>0)for(let ze=0;ze<b.mipmaps.length;ze++)de(z.__webglFramebuffer[ze],R,b,i.COLOR_ATTACHMENT0,ge,ze);else de(z.__webglFramebuffer,R,b,i.COLOR_ATTACHMENT0,ge,0);m(b)&&g(ge),t.unbindTexture()}R.depthBuffer&&We(R)}function ot(R){const b=R.textures;for(let z=0,te=b.length;z<te;z++){const ne=b[z];if(m(ne)){const Q=S(R),Ae=n.get(ne).__webglTexture;t.bindTexture(Q,Ae),g(Q),t.unbindTexture()}}}const mt=[],Je=[];function Rt(R){if(R.samples>0){if(Pt(R)===!1){const b=R.textures,z=R.width,te=R.height;let ne=i.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(R),ge=b.length>1;if(ge)for(let qe=0;qe<b.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const ze=R.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let qe=0;qe<b.length;qe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[qe]);const le=n.get(b[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,le,0)}i.blitFramebuffer(0,0,z,te,0,0,z,te,ne,i.NEAREST),l===!0&&(mt.length=0,Je.length=0,mt.push(i.COLOR_ATTACHMENT0+qe),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(Q),Je.push(Q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let qe=0;qe<b.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[qe]);const le=n.get(b[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,le,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const b=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function F(R){return Math.min(r.maxSamples,R.samples)}function Pt(R){const b=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function st(R){const b=s.render.frame;u.get(R)!==b&&(u.set(R,b),R.update())}function xt(R,b){const z=R.colorSpace,te=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Fr&&z!==Di&&(ct.getTransfer(z)===vt?(te!==kn||ne!==bn)&&Ye("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",z)),b}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=se,this.rebindTextures=Ft,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function u4(i,e){function t(n,r=Di){let a;const s=ct.getTransfer(r);if(n===bn)return i.UNSIGNED_BYTE;if(n===f0)return i.UNSIGNED_SHORT_4_4_4_4;if(n===p0)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ih)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ph)return i.BYTE;if(n===Dh)return i.SHORT;if(n===ra)return i.UNSIGNED_SHORT;if(n===d0)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===qn)return i.FLOAT;if(n===gi)return i.HALF_FLOAT;if(n===Nh)return i.ALPHA;if(n===Uh)return i.RGB;if(n===kn)return i.RGBA;if(n===vi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===Fh)return i.RED;if(n===m0)return i.RED_INTEGER;if(n===Ur)return i.RG;if(n===g0)return i.RG_INTEGER;if(n===v0)return i.RGBA_INTEGER;if(n===ss||n===os||n===ls||n===cs)if(s===vt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ss)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ss)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ls)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===ul||n===hl||n===dl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===cl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ul)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fl||n===pl||n===ml||n===gl||n===vl||n===xl||n===yl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===fl||n===pl)return s===vt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ml)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return a.COMPRESSED_R11_EAC;if(n===vl)return a.COMPRESSED_SIGNED_R11_EAC;if(n===xl)return a.COMPRESSED_RG11_EAC;if(n===yl)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===bl||n===_l||n===Ml||n===Sl||n===wl||n===Tl||n===El||n===Al||n===Cl||n===Rl||n===Pl||n===Dl||n===Il||n===Ll)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===bl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Tl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Al)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return s===vt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nl||n===Ul||n===Fl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===Nl)return s===vt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ul)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===kl||n===Ol||n===Bl||n===zl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===kl)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Ol)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===aa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const h4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d4=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Yh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Zn({vertexShader:h4,fragmentShader:d4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Vt(new Fs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p4 extends ar{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null;const y=typeof XRWebGLBinding<"u",m=new f4,g={},S=t.getContextAttributes();let C=null,E=null;const D=[],P=[],L=new Ke;let M=null;const A=new yn;A.viewport=new Ut;const K=new yn;K.viewport=new Ut;const U=[A,K],B=new wm;let q=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ae=D[J];return ae===void 0&&(ae=new fo,D[J]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(J){let ae=D[J];return ae===void 0&&(ae=new fo,D[J]=ae),ae.getGripSpace()},this.getHand=function(J){let ae=D[J];return ae===void 0&&(ae=new fo,D[J]=ae),ae.getHandSpace()};function W(J){const ae=P.indexOf(J.inputSource);if(ae===-1)return;const de=D[ae];de!==void 0&&(de.update(J.inputSource,J.frame,c||s),de.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",V);for(let J=0;J<D.length;J++){const ae=P[J];ae!==null&&(P[J]=null,D[J].disconnect(ae))}q=null,X=null,m.reset();for(const J in g)delete g[J];e.setRenderTarget(C),p=null,h=null,f=null,r=null,E=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(M),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){a=J,n.isPresenting===!0&&Ye("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ye("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(C=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",V),S.xrCompatible!==!0&&await t.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(L),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,He=null,Be=null;S.depth&&(Be=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?er:vi,He=S.stencil?aa:jn);const We={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:a};f=this.getBinding(),h=f.createProjectionLayer(We),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),E=new $n(h.textureWidth,h.textureHeight,{format:kn,type:bn,depthTexture:new oa(h.textureWidth,h.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new $n(p.framebufferWidth,p.framebufferHeight,{format:kn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),Ve.setContext(r),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function V(J){for(let ae=0;ae<J.removed.length;ae++){const de=J.removed[ae],He=P.indexOf(de);He>=0&&(P[He]=null,D[He].disconnect(de))}for(let ae=0;ae<J.added.length;ae++){const de=J.added[ae];let He=P.indexOf(de);if(He===-1){for(let We=0;We<D.length;We++)if(We>=P.length){P.push(de),He=We;break}else if(P[We]===null){P[We]=de,He=We;break}if(He===-1)break}const Be=D[He];Be&&Be.connect(de)}}const se=new G,re=new G;function xe(J,ae,de){se.setFromMatrixPosition(ae.matrixWorld),re.setFromMatrixPosition(de.matrixWorld);const He=se.distanceTo(re),Be=ae.projectionMatrix.elements,We=de.projectionMatrix.elements,Ft=Be[14]/(Be[10]-1),rt=Be[14]/(Be[10]+1),ot=(Be[9]+1)/Be[5],mt=(Be[9]-1)/Be[5],Je=(Be[8]-1)/Be[0],Rt=(We[8]+1)/We[0],F=Ft*Je,Pt=Ft*Rt,st=He/(-Je+Rt),xt=st*-Je;if(ae.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xt),J.translateZ(st),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Be[10]===-1)J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const Pe=Ft+st,R=rt+st,b=F-xt,z=Pt+(He-xt),te=ot*rt/R*Pe,ne=mt*rt/R*Pe;J.projectionMatrix.makePerspective(b,z,te,ne,Pe,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function _e(J,ae){ae===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ae.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ae=J.near,de=J.far;m.texture!==null&&(m.depthNear>0&&(ae=m.depthNear),m.depthFar>0&&(de=m.depthFar)),B.near=K.near=A.near=ae,B.far=K.far=A.far=de,(q!==B.near||X!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),q=B.near,X=B.far),B.layers.mask=J.layers.mask|6,A.layers.mask=B.layers.mask&-5,K.layers.mask=B.layers.mask&-3;const He=J.parent,Be=B.cameras;_e(B,He);for(let We=0;We<Be.length;We++)_e(Be[We],He);Be.length===2?xe(B,A,K):B.projectionMatrix.copy(A.projectionMatrix),ye(J,B,He)};function ye(J,ae,de){de===null?J.matrix.copy(ae.matrixWorld):(J.matrix.copy(de.matrixWorld),J.matrix.invert(),J.matrix.multiply(ae.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ae.projectionMatrix),J.projectionMatrixInverse.copy(ae.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Hl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(J){l=J,h!==null&&(h.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return g[J]};let Oe=null;function ut(J,ae){if(u=ae.getViewerPose(c||s),x=ae,u!==null){const de=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let He=!1;de.length!==B.cameras.length&&(B.cameras.length=0,He=!0);for(let rt=0;rt<de.length;rt++){const ot=de[rt];let mt=null;if(p!==null)mt=p.getViewport(ot);else{const Rt=f.getViewSubImage(h,ot);mt=Rt.viewport,rt===0&&(e.setRenderTargetTextures(E,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(E))}let Je=U[rt];Je===void 0&&(Je=new yn,Je.layers.enable(rt),Je.viewport=new Ut,U[rt]=Je),Je.matrix.fromArray(ot.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ot.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(mt.x,mt.y,mt.width,mt.height),rt===0&&(B.matrix.copy(Je.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),He===!0&&B.cameras.push(Je)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){f=n.getBinding();const rt=f.getDepthInformation(de[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,r.renderState)}if(Be&&Be.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let rt=0;rt<de.length;rt++){const ot=de[rt].camera;if(ot){let mt=g[ot];mt||(mt=new Yh,g[ot]=mt);const Je=f.getCameraImage(ot);mt.sourceTexture=Je}}}}for(let de=0;de<D.length;de++){const He=P[de],Be=D[de];He!==null&&Be!==void 0&&Be.update(He,ae,c||s)}Oe&&Oe(J,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),x=null}const Ve=new Jh;Ve.setAnimationLoop(ut),this.setAnimationLoop=function(J){Oe=J},this.dispose=function(){}}}const Ki=new Kn,m4=new At;function g4(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,$h(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,S,C,E){g.isMeshBasicMaterial?a(m,g):g.isMeshLambertMaterial?(a(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(a(m,g),f(m,g)):g.isMeshPhongMaterial?(a(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(a(m,g),h(m,g),g.isMeshPhysicalMaterial&&p(m,g,E)):g.isMeshMatcapMaterial?(a(m,g),x(m,g)):g.isMeshDepthMaterial?a(m,g):g.isMeshDistanceMaterial?(a(m,g),y(m,g)):g.isMeshNormalMaterial?a(m,g):g.isLineBasicMaterial?(s(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,S,C):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function a(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===an&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===an&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=e.get(g),C=S.envMap,E=S.envMapRotation;C&&(m.envMap.value=C,Ki.copy(E),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(m4.makeRotationFromEuler(Ki)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function s(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,S,C){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=C*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function f(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function h(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===an&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,g){g.matcap&&(m.matcap.value=g.matcap)}function y(m,g){const S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function v4(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,C){const E=C.program;n.uniformBlockBinding(S,E)}function c(S,C){let E=r[S.id];E===void 0&&(x(S),E=u(S),r[S.id]=E,S.addEventListener("dispose",m));const D=C.program;n.updateUBOMapping(S,D);const P=e.render.frame;a[S.id]!==P&&(h(S),a[S.id]=P)}function u(S){const C=f();S.__bindingPointIndex=C;const E=i.createBuffer(),D=S.__size,P=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,E),E}function f(){for(let S=0;S<o;S++)if(s.indexOf(S)===-1)return s.push(S),S;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const C=r[S.id],E=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let P=0,L=E.length;P<L;P++){const M=Array.isArray(E[P])?E[P]:[E[P]];for(let A=0,K=M.length;A<K;A++){const U=M[A];if(p(U,P,A,D)===!0){const B=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let X=0;for(let W=0;W<q.length;W++){const Y=q[W],V=y(Y);typeof Y=="number"||typeof Y=="boolean"?(U.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,B+X,U.__data)):Y.isMatrix3?(U.__data[0]=Y.elements[0],U.__data[1]=Y.elements[1],U.__data[2]=Y.elements[2],U.__data[3]=0,U.__data[4]=Y.elements[3],U.__data[5]=Y.elements[4],U.__data[6]=Y.elements[5],U.__data[7]=0,U.__data[8]=Y.elements[6],U.__data[9]=Y.elements[7],U.__data[10]=Y.elements[8],U.__data[11]=0):(Y.toArray(U.__data,X),X+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,C,E,D){const P=S.value,L=C+"_"+E;if(D[L]===void 0)return typeof P=="number"||typeof P=="boolean"?D[L]=P:D[L]=P.clone(),!0;{const M=D[L];if(typeof P=="number"||typeof P=="boolean"){if(M!==P)return D[L]=P,!0}else if(M.equals(P)===!1)return M.copy(P),!0}return!1}function x(S){const C=S.uniforms;let E=0;const D=16;for(let L=0,M=C.length;L<M;L++){const A=Array.isArray(C[L])?C[L]:[C[L]];for(let K=0,U=A.length;K<U;K++){const B=A[K],q=Array.isArray(B.value)?B.value:[B.value];for(let X=0,W=q.length;X<W;X++){const Y=q[X],V=y(Y),se=E%D,re=se%V.boundary,xe=se+re;E+=re,xe!==0&&D-xe<V.storage&&(E+=D-xe),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=V.storage}}}const P=E%D;return P>0&&(E+=D-P),S.__size=E,S.__cache={},this}function y(S){const C={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(C.boundary=4,C.storage=4):S.isVector2?(C.boundary=8,C.storage=8):S.isVector3||S.isColor?(C.boundary=16,C.storage=12):S.isVector4?(C.boundary=16,C.storage=16):S.isMatrix3?(C.boundary=48,C.storage=48):S.isMatrix4?(C.boundary=64,C.storage=64):S.isTexture?Ye("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ye("WebGLRenderer: Unsupported uniform value type.",S),C}function m(S){const C=S.target;C.removeEventListener("dispose",m);const E=s.indexOf(C.__bindingPointIndex);s.splice(E,1),i.deleteBuffer(r[C.id]),delete r[C.id],delete a[C.id]}function g(){for(const S in r)i.deleteBuffer(r[S]);s=[],r={},a={}}return{bind:l,update:c,dispose:g}}const x4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function y4(){return zn===null&&(zn=new lm(x4,16,16,Ur,gi),zn.name="DFG_LUT",zn.minFilter=nn,zn.magFilter=nn,zn.wrapS=_n,zn.wrapT=_n,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class b4{constructor(e={}){const{canvas:t=Op(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=s;const y=p,m=new Set([v0,g0,m0]),g=new Set([bn,jn,ra,aa,f0,p0]),S=new Uint32Array(4),C=new Int32Array(4);let E=null,D=null;const P=[],L=[];let M=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let K=!1;this._outputColorSpace=Cn;let U=0,B=0,q=null,X=-1,W=null;const Y=new Ut,V=new Ut;let se=null;const re=new lt(0);let xe=0,_e=t.width,ye=t.height,Oe=1,ut=null,Ve=null;const J=new Ut(0,0,_e,ye),ae=new Ut(0,0,_e,ye);let de=!1;const He=new _0;let Be=!1,We=!1;const Ft=new At,rt=new G,ot=new Ut,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function Rt(){return q===null?Oe:1}let F=n;function Pt(T,H){return t.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${u0}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",wt,!1),F===null){const H="webgl2";if(F=Pt(H,T),F===null)throw Pt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw dt("WebGLRenderer: "+T.message),T}let st,xt,Pe,R,b,z,te,ne,Q,Ae,ge,ze,qe,le,fe,De,Le,Ee,nt,O,ve,pe,Re;function ue(){st=new bv(F),st.init(),ve=new u4(F,st),xt=new dv(F,st,e,ve),Pe=new l4(F,st),xt.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),R=new Sv(F),b=new $2,z=new c4(F,st,Pe,b,xt,ve,R),te=new yv(A),ne=new Cm(F),pe=new uv(F,ne),Q=new _v(F,ne,R,pe),Ae=new Tv(F,Q,ne,pe,R),Ee=new wv(F,xt,z),fe=new fv(b),ge=new Y2(A,te,st,xt,pe,fe),ze=new g4(A,b),qe=new K2,le=new n4(st),Le=new cv(A,te,Pe,Ae,x,l),De=new o4(A,Ae,xt),Re=new v4(F,R,xt,Pe),nt=new hv(F,st,R),O=new Mv(F,st,R),R.programs=ge.programs,A.capabilities=xt,A.extensions=st,A.properties=b,A.renderLists=qe,A.shadowMap=De,A.state=Pe,A.info=R}ue(),y!==bn&&(M=new Av(y,t.width,t.height,r,a));const ee=new p4(A,F);this.xr=ee,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=st.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=st.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Oe},this.setPixelRatio=function(T){T!==void 0&&(Oe=T,this.setSize(_e,ye,!1))},this.getSize=function(T){return T.set(_e,ye)},this.setSize=function(T,H,Z=!0){if(ee.isPresenting){Ye("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=T,ye=H,t.width=Math.floor(T*Oe),t.height=Math.floor(H*Oe),Z===!0&&(t.style.width=T+"px",t.style.height=H+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(_e*Oe,ye*Oe).floor()},this.setDrawingBufferSize=function(T,H,Z){_e=T,ye=H,Oe=Z,t.width=Math.floor(T*Z),t.height=Math.floor(H*Z),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(y===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,H,Z,j){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,H,Z,j),Pe.viewport(Y.copy(J).multiplyScalar(Oe).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,H,Z,j){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,H,Z,j),Pe.scissor(V.copy(ae).multiplyScalar(Oe).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(T){Pe.setScissorTest(de=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){Ve=T},this.getClearColor=function(T){return T.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,Z=!0){let j=0;if(T){let $=!1;if(q!==null){const Me=q.texture.format;$=m.has(Me)}if($){const Me=q.texture.type,Ce=g.has(Me),Se=Le.getClearColor(),Ne=Le.getClearAlpha(),Fe=Se.r,Ze=Se.g,it=Se.b;Ce?(S[0]=Fe,S[1]=Ze,S[2]=it,S[3]=Ne,F.clearBufferuiv(F.COLOR,0,S)):(C[0]=Fe,C[1]=Ze,C[2]=it,C[3]=Ne,F.clearBufferiv(F.COLOR,0,C))}else j|=F.COLOR_BUFFER_BIT}H&&(j|=F.DEPTH_BUFFER_BIT),Z&&(j|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&F.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Le.dispose(),qe.dispose(),le.dispose(),b.dispose(),te.dispose(),Ae.dispose(),pe.dispose(),Re.dispose(),ge.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",R0),ee.removeEventListener("sessionend",P0),Hi.stop()};function Ie(T){T.preventDefault(),wc("WebGLRenderer: Context Lost."),K=!0}function je(){wc("WebGLRenderer: Context Restored."),K=!1;const T=R.autoReset,H=De.enabled,Z=De.autoUpdate,j=De.needsUpdate,$=De.type;ue(),R.autoReset=T,De.enabled=H,De.autoUpdate=Z,De.needsUpdate=j,De.type=$}function wt(T){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function gt(T){const H=T.target;H.removeEventListener("dispose",gt),ti(H)}function ti(T){ni(T),b.remove(T)}function ni(T){const H=b.get(T).programs;H!==void 0&&(H.forEach(function(Z){ge.releaseProgram(Z)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Z,j,$,Me){H===null&&(H=mt);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Se=ld(T,H,Z,j,$);Pe.setMaterial(j,Ce);let Ne=Z.index,Fe=1;if(j.wireframe===!0){if(Ne=Q.getWireframeAttribute(Z),Ne===void 0)return;Fe=2}const Ze=Z.drawRange,it=Z.attributes.position;let ke=Ze.start*Fe,yt=(Ze.start+Ze.count)*Fe;Me!==null&&(ke=Math.max(ke,Me.start*Fe),yt=Math.min(yt,(Me.start+Me.count)*Fe)),Ne!==null?(ke=Math.max(ke,0),yt=Math.min(yt,Ne.count)):it!=null&&(ke=Math.max(ke,0),yt=Math.min(yt,it.count));const kt=yt-ke;if(kt<0||kt===1/0)return;pe.setup($,j,Se,Z,Ne);let Lt,bt=nt;if(Ne!==null&&(Lt=ne.get(Ne),bt=O,bt.setIndex(Lt)),$.isMesh)j.wireframe===!0?(Pe.setLineWidth(j.wireframeLinewidth*Rt()),bt.setMode(F.LINES)):bt.setMode(F.TRIANGLES);else if($.isLine){let Qt=j.linewidth;Qt===void 0&&(Qt=1),Pe.setLineWidth(Qt*Rt()),$.isLineSegments?bt.setMode(F.LINES):$.isLineLoop?bt.setMode(F.LINE_LOOP):bt.setMode(F.LINE_STRIP)}else $.isPoints?bt.setMode(F.POINTS):$.isSprite&&bt.setMode(F.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)ys("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))bt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Qt=$._multiDrawStarts,Ue=$._multiDrawCounts,gn=$._multiDrawCount,ht=Ne?ne.get(Ne).bytesPerElement:1,Dn=b.get(j).currentProgram.getUniforms();for(let On=0;On<gn;On++)Dn.setValue(F,"_gl_DrawID",On),bt.render(Qt[On]/ht,Ue[On])}else if($.isInstancedMesh)bt.renderInstances(ke,kt,$.count);else if(Z.isInstancedBufferGeometry){const Qt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ue=Math.min(Z.instanceCount,Qt);bt.renderInstances(ke,kt,Ue)}else bt.render(ke,kt)};function C0(T,H,Z){T.transparent===!0&&T.side===Un&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,ga(T,H,Z),T.side=mi,T.needsUpdate=!0,ga(T,H,Z),T.side=Un):ga(T,H,Z)}this.compile=function(T,H,Z=null){Z===null&&(Z=T),D=le.get(Z),D.init(H),L.push(D),Z.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(D.pushLight($),$.castShadow&&D.pushShadow($))}),T!==Z&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(D.pushLight($),$.castShadow&&D.pushShadow($))}),D.setupLights();const j=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Me=$.material;if(Me)if(Array.isArray(Me))for(let Ce=0;Ce<Me.length;Ce++){const Se=Me[Ce];C0(Se,Z,$),j.add(Se)}else C0(Me,Z,$),j.add(Me)}),D=L.pop(),j},this.compileAsync=function(T,H,Z=null){const j=this.compile(T,H,Z);return new Promise($=>{function Me(){if(j.forEach(function(Ce){b.get(Ce).currentProgram.isReady()&&j.delete(Ce)}),j.size===0){$(T);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Bs=null;function od(T){Bs&&Bs(T)}function R0(){Hi.stop()}function P0(){Hi.start()}const Hi=new Jh;Hi.setAnimationLoop(od),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(T){Bs=T,ee.setAnimationLoop(T),T===null?Hi.stop():Hi.start()},ee.addEventListener("sessionstart",R0),ee.addEventListener("sessionend",P0),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;const Z=ee.enabled===!0&&ee.isPresenting===!0,j=M!==null&&(q===null||Z)&&M.begin(A,q);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(H),H=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(A,T,H,q),D=le.get(T,L.length),D.init(H),L.push(D),Ft.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),He.setFromProjectionMatrix(Ft,Xn,H.reversedDepth),We=this.localClippingEnabled,Be=fe.init(this.clippingPlanes,We),E=qe.get(T,P.length),E.init(),P.push(E),ee.enabled===!0&&ee.isPresenting===!0){const Ce=A.xr.getDepthSensingMesh();Ce!==null&&zs(Ce,H,-1/0,A.sortObjects)}zs(T,H,0,A.sortObjects),E.finish(),A.sortObjects===!0&&E.sort(ut,Ve),Je=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Je&&Le.addToRenderList(E,T),this.info.render.frame++,Be===!0&&fe.beginShadows();const $=D.state.shadowsArray;if(De.render($,T,H),Be===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(j&&M.hasRenderPass())===!1){const Ce=E.opaque,Se=E.transmissive;if(D.setupLights(),H.isArrayCamera){const Ne=H.cameras;if(Se.length>0)for(let Fe=0,Ze=Ne.length;Fe<Ze;Fe++){const it=Ne[Fe];I0(Ce,Se,T,it)}Je&&Le.render(T);for(let Fe=0,Ze=Ne.length;Fe<Ze;Fe++){const it=Ne[Fe];D0(E,T,it,it.viewport)}}else Se.length>0&&I0(Ce,Se,T,H),Je&&Le.render(T),D0(E,T,H)}q!==null&&B===0&&(z.updateMultisampleRenderTarget(q),z.updateRenderTargetMipmap(q)),j&&M.end(A),T.isScene===!0&&T.onAfterRender(A,T,H),pe.resetDefaultState(),X=-1,W=null,L.pop(),L.length>0?(D=L[L.length-1],Be===!0&&fe.setGlobalState(A.clippingPlanes,D.state.camera)):D=null,P.pop(),P.length>0?E=P[P.length-1]:E=null};function zs(T,H,Z,j){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)D.pushLight(T),T.castShadow&&D.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||He.intersectsSprite(T)){j&&ot.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ft);const Ce=Ae.update(T),Se=T.material;Se.visible&&E.push(T,Ce,Se,Z,ot.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||He.intersectsObject(T))){const Ce=Ae.update(T),Se=T.material;if(j&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ot.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ot.copy(Ce.boundingSphere.center)),ot.applyMatrix4(T.matrixWorld).applyMatrix4(Ft)),Array.isArray(Se)){const Ne=Ce.groups;for(let Fe=0,Ze=Ne.length;Fe<Ze;Fe++){const it=Ne[Fe],ke=Se[it.materialIndex];ke&&ke.visible&&E.push(T,Ce,ke,Z,ot.z,it)}}else Se.visible&&E.push(T,Ce,Se,Z,ot.z,null)}}const Me=T.children;for(let Ce=0,Se=Me.length;Ce<Se;Ce++)zs(Me[Ce],H,Z,j)}function D0(T,H,Z,j){const{opaque:$,transmissive:Me,transparent:Ce}=T;D.setupLightsView(Z),Be===!0&&fe.setGlobalState(A.clippingPlanes,Z),j&&Pe.viewport(Y.copy(j)),$.length>0&&ma($,H,Z),Me.length>0&&ma(Me,H,Z),Ce.length>0&&ma(Ce,H,Z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function I0(T,H,Z,j){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[j.id]===void 0){const ke=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[j.id]=new $n(1,1,{generateMipmaps:!0,type:ke?gi:bn,minFilter:Qi,samples:Math.max(4,xt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Me=D.state.transmissionRenderTarget[j.id],Ce=j.viewport||Y;Me.setSize(Ce.z*A.transmissionResolutionScale,Ce.w*A.transmissionResolutionScale);const Se=A.getRenderTarget(),Ne=A.getActiveCubeFace(),Fe=A.getActiveMipmapLevel();A.setRenderTarget(Me),A.getClearColor(re),xe=A.getClearAlpha(),xe<1&&A.setClearColor(16777215,.5),A.clear(),Je&&Le.render(Z);const Ze=A.toneMapping;A.toneMapping=Yn;const it=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),D.setupLightsView(j),Be===!0&&fe.setGlobalState(A.clippingPlanes,j),ma(T,Z,j),z.updateMultisampleRenderTarget(Me),z.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let yt=0,kt=H.length;yt<kt;yt++){const Lt=H[yt],{object:bt,geometry:Qt,material:Ue,group:gn}=Lt;if(Ue.side===Un&&bt.layers.test(j.layers)){const ht=Ue.side;Ue.side=an,Ue.needsUpdate=!0,L0(bt,Z,j,Qt,Ue,gn),Ue.side=ht,Ue.needsUpdate=!0,ke=!0}}ke===!0&&(z.updateMultisampleRenderTarget(Me),z.updateRenderTargetMipmap(Me))}A.setRenderTarget(Se,Ne,Fe),A.setClearColor(re,xe),it!==void 0&&(j.viewport=it),A.toneMapping=Ze}function ma(T,H,Z){const j=H.isScene===!0?H.overrideMaterial:null;for(let $=0,Me=T.length;$<Me;$++){const Ce=T[$],{object:Se,geometry:Ne,group:Fe}=Ce;let Ze=Ce.material;Ze.allowOverride===!0&&j!==null&&(Ze=j),Se.layers.test(Z.layers)&&L0(Se,H,Z,Ne,Ze,Fe)}}function L0(T,H,Z,j,$,Me){T.onBeforeRender(A,H,Z,j,$,Me),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(A,H,Z,j,T,Me),$.transparent===!0&&$.side===Un&&$.forceSinglePass===!1?($.side=an,$.needsUpdate=!0,A.renderBufferDirect(Z,H,j,$,T,Me),$.side=mi,$.needsUpdate=!0,A.renderBufferDirect(Z,H,j,$,T,Me),$.side=Un):A.renderBufferDirect(Z,H,j,$,T,Me),T.onAfterRender(A,H,Z,j,$,Me)}function ga(T,H,Z){H.isScene!==!0&&(H=mt);const j=b.get(T),$=D.state.lights,Me=D.state.shadowsArray,Ce=$.state.version,Se=ge.getParameters(T,$.state,Me,H,Z),Ne=ge.getProgramCacheKey(Se);let Fe=j.programs;j.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,j.fog=H.fog;const Ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;j.envMap=te.get(T.envMap||j.environment,Ze),j.envMapRotation=j.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",gt),Fe=new Map,j.programs=Fe);let it=Fe.get(Ne);if(it!==void 0){if(j.currentProgram===it&&j.lightsStateVersion===Ce)return U0(T,Se),it}else Se.uniforms=ge.getUniforms(T),T.onBeforeCompile(Se,A),it=ge.acquireProgram(Se,Ne),Fe.set(Ne,it),j.uniforms=Se.uniforms;const ke=j.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=fe.uniform),U0(T,Se),j.needsLights=ud(T),j.lightsStateVersion=Ce,j.needsLights&&(ke.ambientLightColor.value=$.state.ambient,ke.lightProbe.value=$.state.probe,ke.directionalLights.value=$.state.directional,ke.directionalLightShadows.value=$.state.directionalShadow,ke.spotLights.value=$.state.spot,ke.spotLightShadows.value=$.state.spotShadow,ke.rectAreaLights.value=$.state.rectArea,ke.ltc_1.value=$.state.rectAreaLTC1,ke.ltc_2.value=$.state.rectAreaLTC2,ke.pointLights.value=$.state.point,ke.pointLightShadows.value=$.state.pointShadow,ke.hemisphereLights.value=$.state.hemi,ke.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ke.spotLightMatrix.value=$.state.spotLightMatrix,ke.spotLightMap.value=$.state.spotLightMap,ke.pointShadowMatrix.value=$.state.pointShadowMatrix),j.currentProgram=it,j.uniformsList=null,it}function N0(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=hs.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function U0(T,H){const Z=b.get(T);Z.outputColorSpace=H.outputColorSpace,Z.batching=H.batching,Z.batchingColor=H.batchingColor,Z.instancing=H.instancing,Z.instancingColor=H.instancingColor,Z.instancingMorph=H.instancingMorph,Z.skinning=H.skinning,Z.morphTargets=H.morphTargets,Z.morphNormals=H.morphNormals,Z.morphColors=H.morphColors,Z.morphTargetsCount=H.morphTargetsCount,Z.numClippingPlanes=H.numClippingPlanes,Z.numIntersection=H.numClipIntersection,Z.vertexAlphas=H.vertexAlphas,Z.vertexTangents=H.vertexTangents,Z.toneMapping=H.toneMapping}function ld(T,H,Z,j,$){H.isScene!==!0&&(H=mt),z.resetTextureUnits();const Me=H.fog,Ce=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?H.environment:null,Se=q===null?A.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Fr,Ne=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Fe=te.get(j.envMap||Ce,Ne),Ze=j.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),ke=!!Z.morphAttributes.position,yt=!!Z.morphAttributes.normal,kt=!!Z.morphAttributes.color;let Lt=Yn;j.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Lt=A.toneMapping);const bt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Qt=bt!==void 0?bt.length:0,Ue=b.get(j),gn=D.state.lights;if(Be===!0&&(We===!0||T!==W)){const $t=T===W&&j.id===X;fe.setState(j,T,$t)}let ht=!1;j.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==gn.state.version||Ue.outputColorSpace!==Se||$.isBatchedMesh&&Ue.batching===!1||!$.isBatchedMesh&&Ue.batching===!0||$.isBatchedMesh&&Ue.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ue.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ue.instancing===!1||!$.isInstancedMesh&&Ue.instancing===!0||$.isSkinnedMesh&&Ue.skinning===!1||!$.isSkinnedMesh&&Ue.skinning===!0||$.isInstancedMesh&&Ue.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ue.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ue.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ue.instancingMorph===!1&&$.morphTexture!==null||Ue.envMap!==Fe||j.fog===!0&&Ue.fog!==Me||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==fe.numPlanes||Ue.numIntersection!==fe.numIntersection)||Ue.vertexAlphas!==Ze||Ue.vertexTangents!==it||Ue.morphTargets!==ke||Ue.morphNormals!==yt||Ue.morphColors!==kt||Ue.toneMapping!==Lt||Ue.morphTargetsCount!==Qt)&&(ht=!0):(ht=!0,Ue.__version=j.version);let Dn=Ue.currentProgram;ht===!0&&(Dn=ga(j,H,$));let On=!1,Gi=!1,or=!1;const Mt=Dn.getUniforms(),Zt=Ue.uniforms;if(Pe.useProgram(Dn.program)&&(On=!0,Gi=!0,or=!0),j.id!==X&&(X=j.id,Gi=!0),On||W!==T){Pe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(F,"projectionMatrix",T.projectionMatrix),Mt.setValue(F,"viewMatrix",T.matrixWorldInverse);const Mi=Mt.map.cameraPosition;Mi!==void 0&&Mi.setValue(F,rt.setFromMatrixPosition(T.matrixWorld)),xt.logarithmicDepthBuffer&&Mt.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Mt.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Gi=!0,or=!0)}if(Ue.needsLights&&(gn.state.directionalShadowMap.length>0&&Mt.setValue(F,"directionalShadowMap",gn.state.directionalShadowMap,z),gn.state.spotShadowMap.length>0&&Mt.setValue(F,"spotShadowMap",gn.state.spotShadowMap,z),gn.state.pointShadowMap.length>0&&Mt.setValue(F,"pointShadowMap",gn.state.pointShadowMap,z)),$.isSkinnedMesh){Mt.setOptional(F,$,"bindMatrix"),Mt.setOptional(F,$,"bindMatrixInverse");const $t=$.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Mt.setValue(F,"boneTexture",$t.boneTexture,z))}$.isBatchedMesh&&(Mt.setOptional(F,$,"batchingTexture"),Mt.setValue(F,"batchingTexture",$._matricesTexture,z),Mt.setOptional(F,$,"batchingIdTexture"),Mt.setValue(F,"batchingIdTexture",$._indirectTexture,z),Mt.setOptional(F,$,"batchingColorTexture"),$._colorsTexture!==null&&Mt.setValue(F,"batchingColorTexture",$._colorsTexture,z));const _i=Z.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&Ee.update($,Z,Dn),(Gi||Ue.receiveShadow!==$.receiveShadow)&&(Ue.receiveShadow=$.receiveShadow,Mt.setValue(F,"receiveShadow",$.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&H.environment!==null&&(Zt.envMapIntensity.value=H.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=y4()),Gi&&(Mt.setValue(F,"toneMappingExposure",A.toneMappingExposure),Ue.needsLights&&cd(Zt,or),Me&&j.fog===!0&&ze.refreshFogUniforms(Zt,Me),ze.refreshMaterialUniforms(Zt,j,Oe,ye,D.state.transmissionRenderTarget[T.id]),hs.upload(F,N0(Ue),Zt,z)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(hs.upload(F,N0(Ue),Zt,z),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Mt.setValue(F,"center",$.center),Mt.setValue(F,"modelViewMatrix",$.modelViewMatrix),Mt.setValue(F,"normalMatrix",$.normalMatrix),Mt.setValue(F,"modelMatrix",$.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const $t=j.uniformsGroups;for(let Mi=0,lr=$t.length;Mi<lr;Mi++){const F0=$t[Mi];Re.update(F0,Dn),Re.bind(F0,Dn)}}return Dn}function cd(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ud(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(T,H,Z){const j=b.get(T);j.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),b.get(T.texture).__webglTexture=H,b.get(T.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Z,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const Z=b.get(T);Z.__webglFramebuffer=H,Z.__useDefaultFramebuffer=H===void 0};const hd=F.createFramebuffer();this.setRenderTarget=function(T,H=0,Z=0){q=T,U=H,B=Z;let j=null,$=!1,Me=!1;if(T){const Se=b.get(T);if(Se.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(F.FRAMEBUFFER,Se.__webglFramebuffer),Y.copy(T.viewport),V.copy(T.scissor),se=T.scissorTest,Pe.viewport(Y),Pe.scissor(V),Pe.setScissorTest(se),X=-1;return}else if(Se.__webglFramebuffer===void 0)z.setupRenderTarget(T);else if(Se.__hasExternalTextures)z.rebindTextures(T,b.get(T.texture).__webglTexture,b.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Se.__boundDepthTexture!==Ze){if(Ze!==null&&b.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Me=!0);const Fe=b.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?j=Fe[H][Z]:j=Fe[H],$=!0):T.samples>0&&z.useMultisampledRTT(T)===!1?j=b.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[Z]:j=Fe,Y.copy(T.viewport),V.copy(T.scissor),se=T.scissorTest}else Y.copy(J).multiplyScalar(Oe).floor(),V.copy(ae).multiplyScalar(Oe).floor(),se=de;if(Z!==0&&(j=hd),Pe.bindFramebuffer(F.FRAMEBUFFER,j)&&Pe.drawBuffers(T,j),Pe.viewport(Y),Pe.scissor(V),Pe.setScissorTest(se),$){const Se=b.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,Z)}else if(Me){const Se=H;for(let Ne=0;Ne<T.textures.length;Ne++){const Fe=b.get(T.textures[Ne]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,Z,Se)}}else if(T!==null&&Z!==0){const Se=b.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se.__webglTexture,Z)}X=-1},this.readRenderTargetPixels=function(T,H,Z,j,$,Me,Ce,Se=0){if(!(T&&T.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Pe.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Fe=T.textures[Se],Ze=Fe.format,it=Fe.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),!xt.textureFormatReadable(Ze)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xt.textureTypeReadable(it)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-j&&Z>=0&&Z<=T.height-$&&F.readPixels(H,Z,j,$,ve.convert(Ze),ve.convert(it),Me)}finally{const Fe=q!==null?b.get(q).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,H,Z,j,$,Me,Ce,Se=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(H>=0&&H<=T.width-j&&Z>=0&&Z<=T.height-$){Pe.bindFramebuffer(F.FRAMEBUFFER,Ne);const Fe=T.textures[Se],Ze=Fe.format,it=Fe.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Se),!xt.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ke),F.bufferData(F.PIXEL_PACK_BUFFER,Me.byteLength,F.STREAM_READ),F.readPixels(H,Z,j,$,ve.convert(Ze),ve.convert(it),0);const yt=q!==null?b.get(q).__webglFramebuffer:null;Pe.bindFramebuffer(F.FRAMEBUFFER,yt);const kt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Bp(F,kt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ke),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Me),F.deleteBuffer(ke),F.deleteSync(kt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,Z=0){const j=Math.pow(2,-Z),$=Math.floor(T.image.width*j),Me=Math.floor(T.image.height*j),Ce=H!==null?H.x:0,Se=H!==null?H.y:0;z.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,Ce,Se,$,Me),Pe.unbindTexture()};const dd=F.createFramebuffer(),fd=F.createFramebuffer();this.copyTextureToTexture=function(T,H,Z=null,j=null,$=0,Me=0){let Ce,Se,Ne,Fe,Ze,it,ke,yt,kt;const Lt=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(Z!==null)Ce=Z.max.x-Z.min.x,Se=Z.max.y-Z.min.y,Ne=Z.isBox3?Z.max.z-Z.min.z:1,Fe=Z.min.x,Ze=Z.min.y,it=Z.isBox3?Z.min.z:0;else{const Zt=Math.pow(2,-$);Ce=Math.floor(Lt.width*Zt),Se=Math.floor(Lt.height*Zt),T.isDataArrayTexture?Ne=Lt.depth:T.isData3DTexture?Ne=Math.floor(Lt.depth*Zt):Ne=1,Fe=0,Ze=0,it=0}j!==null?(ke=j.x,yt=j.y,kt=j.z):(ke=0,yt=0,kt=0);const bt=ve.convert(H.format),Qt=ve.convert(H.type);let Ue;H.isData3DTexture?(z.setTexture3D(H,0),Ue=F.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(z.setTexture2DArray(H,0),Ue=F.TEXTURE_2D_ARRAY):(z.setTexture2D(H,0),Ue=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,H.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,H.unpackAlignment);const gn=F.getParameter(F.UNPACK_ROW_LENGTH),ht=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Dn=F.getParameter(F.UNPACK_SKIP_PIXELS),On=F.getParameter(F.UNPACK_SKIP_ROWS),Gi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Lt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Lt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Fe),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,it);const or=T.isDataArrayTexture||T.isData3DTexture,Mt=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const Zt=b.get(T),_i=b.get(H),$t=b.get(Zt.__renderTarget),Mi=b.get(_i.__renderTarget);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,$t.__webglFramebuffer),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let lr=0;lr<Ne;lr++)or&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(T).__webglTexture,$,it+lr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,b.get(H).__webglTexture,Me,kt+lr)),F.blitFramebuffer(Fe,Ze,Ce,Se,ke,yt,Ce,Se,F.DEPTH_BUFFER_BIT,F.NEAREST);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||b.has(T)){const Zt=b.get(T),_i=b.get(H);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,dd),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,fd);for(let $t=0;$t<Ne;$t++)or?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,$,it+$t):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,$),Mt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_i.__webglTexture,Me,kt+$t):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,_i.__webglTexture,Me),$!==0?F.blitFramebuffer(Fe,Ze,Ce,Se,ke,yt,Ce,Se,F.COLOR_BUFFER_BIT,F.NEAREST):Mt?F.copyTexSubImage3D(Ue,Me,ke,yt,kt+$t,Fe,Ze,Ce,Se):F.copyTexSubImage2D(Ue,Me,ke,yt,Fe,Ze,Ce,Se);Pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Mt?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ue,Me,ke,yt,kt,Ce,Se,Ne,bt,Qt,Lt.data):H.isCompressedArrayTexture?F.compressedTexSubImage3D(Ue,Me,ke,yt,kt,Ce,Se,Ne,bt,Lt.data):F.texSubImage3D(Ue,Me,ke,yt,kt,Ce,Se,Ne,bt,Qt,Lt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Me,ke,yt,Ce,Se,bt,Qt,Lt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Me,ke,yt,Lt.width,Lt.height,bt,Lt.data):F.texSubImage2D(F.TEXTURE_2D,Me,ke,yt,Ce,Se,bt,Qt,Lt);F.pixelStorei(F.UNPACK_ROW_LENGTH,gn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Dn),F.pixelStorei(F.UNPACK_SKIP_ROWS,On),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Gi),Me===0&&H.generateMipmaps&&F.generateMipmap(Ue),Pe.unbindTexture()},this.initRenderTarget=function(T){b.get(T).__webglFramebuffer===void 0&&z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?z.setTextureCube(T,0):T.isData3DTexture?z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?z.setTexture2DArray(T,0):z.setTexture2D(T,0),Pe.unbindTexture()},this.resetState=function(){U=0,B=0,q=null,Pe.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}const yu={type:"change"},A0={type:"start"},rd={type:"end"},Ja=new Ns,bu=new ui,_4=Math.cos(70*Gp.DEG2RAD),Gt=new G,pn=2*Math.PI,_t={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Oo=1e-6;class M4 extends Em{constructor(e,t=null){super(e,t),this.state=_t.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:wr.ROTATE,TWO:wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Bi,this._lastTargetPosition=new G,this._quat=new Bi().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new $c,this._sphericalDelta=new $c,this._scale=1,this._panOffset=new G,this._rotateStart=new Ke,this._rotateEnd=new Ke,this._rotateDelta=new Ke,this._panStart=new Ke,this._panEnd=new Ke,this._panDelta=new Ke,this._dollyStart=new Ke,this._dollyEnd=new Ke,this._dollyDelta=new Ke,this._dollyDirection=new G,this._mouse=new Ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=w4.bind(this),this._onPointerDown=S4.bind(this),this._onPointerUp=T4.bind(this),this._onContextMenu=I4.bind(this),this._onMouseWheel=C4.bind(this),this._onKeyDown=R4.bind(this),this._onTouchStart=P4.bind(this),this._onTouchMove=D4.bind(this),this._onMouseDown=E4.bind(this),this._onMouseMove=A4.bind(this),this._interceptControlDown=L4.bind(this),this._interceptControlUp=N4.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(yu),this.update(),this.state=_t.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Gt.copy(t).sub(this.target),Gt.applyQuaternion(this._quat),this._spherical.setFromVector3(Gt),this.autoRotate&&this.state===_t.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=pn:n>Math.PI&&(n-=pn),r<-Math.PI?r+=pn:r>Math.PI&&(r-=pn),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(Gt.setFromSpherical(this._spherical),Gt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Gt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=Gt.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new G(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new G(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=Gt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(Ja.origin.copy(this.object.position),Ja.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ja.direction))<_4?this.object.lookAt(this.target):(bu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ja.intersectPlane(bu,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>Oo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Oo||this._lastTargetPosition.distanceToSquared(this.target)>Oo?(this.dispatchEvent(yu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?pn/60*this.autoRotateSpeed*e:pn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Gt.setFromMatrixColumn(t,0),Gt.multiplyScalar(-e),this._panOffset.add(Gt)}_panUp(e,t){this.screenSpacePanning===!0?Gt.setFromMatrixColumn(t,1):(Gt.setFromMatrixColumn(t,0),Gt.crossVectors(this.object.up,Gt)),Gt.multiplyScalar(e),this._panOffset.add(Gt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Gt.copy(r).sub(this.target);let a=Gt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/n.clientHeight,this.object.matrix),this._panUp(2*t*a/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,a=t-n.top,s=n.width,o=n.height;this._mouse.x=r/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),a=.5*(e.pageY+n.y);this._rotateEnd.set(r,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(pn*this._rotateDelta.x/t.clientHeight),this._rotateUp(pn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,a=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function S4(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function w4(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function T4(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rd),this.state=_t.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function E4(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=_t.DOLLY;break;case Ar.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}break;case Ar.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=_t.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=_t.PAN}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(A0)}function A4(i){switch(this.state){case _t.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case _t.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case _t.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function C4(i){this.enabled===!1||this.enableZoom===!1||this.state!==_t.NONE||(i.preventDefault(),this.dispatchEvent(A0),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(rd))}function R4(i){this.enabled!==!1&&this._handleKeyDown(i)}function P4(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=_t.TOUCH_ROTATE;break;case wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=_t.TOUCH_PAN;break;default:this.state=_t.NONE}break;case 2:switch(this.touches.TWO){case wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=_t.TOUCH_DOLLY_PAN;break;case wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=_t.TOUCH_DOLLY_ROTATE;break;default:this.state=_t.NONE}break;default:this.state=_t.NONE}this.state!==_t.NONE&&this.dispatchEvent(A0)}function D4(i){switch(this._trackPointer(i),this.state){case _t.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case _t.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case _t.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case _t.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=_t.NONE}}function I4(i){this.enabled!==!1&&i.preventDefault()}function L4(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function N4(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function U4(i,e="surface"){const t=i.clientWidth,n=i.clientHeight||420,r=new nm;r.background=new lt(132104);const a=new yn(45,t/n,.1,100);a.position.set(0,.5,3.2);const s=new b4({antialias:!0,alpha:!0});s.setSize(t,n),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.toneMapping=h0,s.localClippingEnabled=!0,i.appendChild(s.domElement);const o=new M4(a,s.domElement);o.enableDamping=!0,o.dampingFactor=.05,o.minDistance=1.8,o.maxDistance=6,o.autoRotate=!0,o.autoRotateSpeed=.4;const l=new Yc(16770244,1.5,50);l.position.set(5,2,3),r.add(l);const c=new Mm(3359846,.6);r.add(c);const u=new Yc(4491519,.4,20);u.position.set(-3,1,-2),r.add(u);const f=new Kt,h=new Float32Array(3e3);for(let Ve=0;Ve<3e3;Ve++)h[Ve]=(Math.random()-.5)*40;f.setAttribute("position",new Sn(h,3)),r.add(new qh(f,new S0({color:16777215,size:.02,transparent:!0,opacity:.6})));const p=V4(),x=W4(),y=new Hn(1,128,128),m=new Qr({map:p,bumpMap:x,bumpScale:.02,roughness:.7,metalness:.05}),g=new Vt(y,m);r.add(g);const S=new Hn(1.02,64,64),C=new tr({color:6724044,transparent:!0,opacity:.04,side:an}),E=new Vt(S,C);r.add(E);const D=F4();D.visible=!1,r.add(D);const P=new Li;P.visible=!1,r.add(P);const L=k4(),M=new Qr({map:L,transparent:!0,opacity:.7,roughness:.5,metalness:0}),A=new Vt(new Hn(1,128,128),M);P.add(A);const K=O4();P.add(K.points);const U=new tr({color:1731498,transparent:!0,opacity:.25,side:mi});P.add(new Vt(new Hn(.88,64,64),U));const B=new Li;B.visible=!1,r.add(B);const q=new Qr({map:p,transparent:!0,opacity:.4,roughness:.8,metalness:0});B.add(new Vt(new Hn(1,64,64),q)),B4(B),z4(B),H4(B);const X=new Li;X.visible=!1,r.add(X);const W=G4(),Y=new Qr({map:W,roughness:.5,metalness:.1});X.add(new Vt(new Hn(1,128,128),Y));const V=new tr({color:16739179,transparent:!0,opacity:.06,side:an}),se=new Vt(new Hn(1.03,64,64),V);se.scale.set(1.02,.99,1),X.add(se);let re=e;function xe(Ve){re=Ve,g.visible=Ve==="surface",E.visible=Ve==="surface",D.visible=Ve==="internal",P.visible=Ve==="convection",B.visible=Ve==="magnetic",X.visible=Ve==="tidal"}xe(e);let _e=null;const ye=new Tm;function Oe(){_e=requestAnimationFrame(Oe);const Ve=ye.getElapsedTime();if(o.update(),re==="convection"&&K.positions){const J=K.positions;for(let ae=0;ae<J.count;ae++){let de=Math.sqrt(J.getX(ae)**2+J.getY(ae)**2+J.getZ(ae)**2);de+=.002,de>.98&&(de=.55+Math.random()*.1);const He=Math.atan2(J.getY(ae),Math.sqrt(J.getX(ae)**2+J.getZ(ae)**2)),Be=Math.atan2(J.getZ(ae),J.getX(ae));J.setXYZ(ae,de*Math.cos(He)*Math.cos(Be),de*Math.sin(He),de*Math.cos(He)*Math.sin(Be))}J.needsUpdate=!0}re==="magnetic"&&B.children.forEach(J=>{J.userData.isFieldLine&&(J.rotation.y=Ve*.1)}),re==="tidal"&&(se.rotation.y=Ve*.15),s.render(r,a)}Oe();const ut=()=>{const Ve=i.clientWidth,J=i.clientHeight||420;a.aspect=Ve/J,a.updateProjectionMatrix(),s.setSize(Ve,J)};return window.addEventListener("resize",ut),{setMode(Ve){xe(Ve)},dispose(){cancelAnimationFrame(_e),window.removeEventListener("resize",ut),o.dispose(),s.dispose(),s.domElement.remove()}}}function F4(){const i=new Li,e=new ui(new G(0,0,-1),0),t=[{name:"Ice Shell",radius:1,color:13166320,opacity:.6},{name:"Ocean",radius:.85,color:1731498,opacity:.75},{name:"Silicate Mantle",radius:.6,color:9136404,opacity:.85},{name:"Iron Core",radius:.3,color:8947848,opacity:.95}];return t.forEach((n,r)=>{const a=new Hn(n.radius,64,64),s=new Qr({color:n.color,transparent:!0,opacity:n.opacity,side:Un,roughness:.6,metalness:.1,clippingPlanes:[e]});i.add(new Vt(a,s));const o=r<t.length-1?t[r+1].radius:0,l=new E0(o,n.radius,64),c=new tr({color:n.color,side:Un,transparent:!0,opacity:n.opacity*.9}),u=new Vt(l,c);u.rotation.y=Math.PI/2,i.add(u)}),i}function k4(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const e=i.getContext("2d");e.fillStyle="#8ab8cc",e.fillRect(0,0,2048,1024);const t=[];for(let r=0;r<12;r++){const a=Math.random()*2048,s=200+Math.random()*624,o=50+Math.random()*150;t.push({cx:a,cy:s,r:o});const l=e.createRadialGradient(a,s,0,a,s,o);l.addColorStop(0,"rgba(255, 100, 60, 0.6)"),l.addColorStop(.5,"rgba(255, 150, 80, 0.3)"),l.addColorStop(1,"rgba(200, 180, 160, 0)"),e.fillStyle=l,e.fillRect(a-o,s-o,o*2,o*2)}for(let r=0;r<8;r++){const a=Math.random()*2048,s=Math.random()*1024,o=80+Math.random()*200,l=e.createRadialGradient(a,s,0,a,s,o);l.addColorStop(0,"rgba(100, 180, 240, 0.4)"),l.addColorStop(1,"rgba(140, 190, 220, 0)"),e.fillStyle=l,e.fillRect(a-o,s-o,o*2,o*2)}for(const r of t)for(let a=0;a<8;a++){const s=Math.random()*Math.PI*2,o=20+Math.random()*r.r;e.beginPath(),e.moveTo(r.cx,r.cy),e.lineTo(r.cx+Math.cos(s)*o,r.cy+Math.sin(s)*o),e.strokeStyle=`rgba(255, 80, 40, ${.2+Math.random()*.3})`,e.lineWidth=1+Math.random()*2,e.stroke()}const n=new Us(i);return n.wrapS=ir,n.wrapT=_n,n}function O4(){const e=new Float32Array(2400),t=new Float32Array(800*3);for(let s=0;s<800;s++){const o=Math.floor(s/60)/12*Math.PI*2+Math.random()*.3,l=.55+Math.random()*.4,c=(Math.random()-.5)*1.2,u=o;e[s*3]=l*Math.cos(c)*Math.cos(u),e[s*3+1]=l*Math.sin(c),e[s*3+2]=l*Math.cos(c)*Math.sin(u);const f=l>.75?.8:.4;t[s*3]=1,t[s*3+1]=.3+f*.4,t[s*3+2]=.1}const n=new Kt;n.setAttribute("position",new Sn(e,3)),n.setAttribute("color",new Sn(t,3));const r=new S0({size:.015,vertexColors:!0,transparent:!0,opacity:.7,sizeAttenuation:!0});return{points:new qh(n,r),positions:n.attributes.position}}function B4(i){const e=new M0({color:4491519,transparent:!0,opacity:.35,linewidth:1});for(let t=0;t<14;t++){const n=[],r=t/14*Math.PI*2;for(let o=-2;o<=2;o+=.1){const l=.5+Math.abs(o)*1.2,c=l*Math.cos(r)*.3+o*.8,u=l*Math.sin(r)*.8,f=Math.sin(r*.5)*.3;n.push(new G(c,u,f))}const a=new Kt().setFromPoints(n),s=new Wh(a,e);s.userData.isFieldLine=!0,i.add(s)}}function z4(i){const e=new M0({color:54527,transparent:!0,opacity:.5,linewidth:1});for(let t=0;t<6;t++){const n=[],r=(t-2.5)*.25,a=1.15+t*.06;for(let o=0;o<=Math.PI*2;o+=.1)n.push(new G(a*Math.cos(o),r+Math.sin(o*2)*.05,a*Math.sin(o)));const s=new Kt().setFromPoints(n);i.add(new Wh(s,e))}}function H4(i){const e=new tr({color:16755268,transparent:!0,opacity:.6});for(let t=0;t<8;t++){const n=t/8*Math.PI*2,r=new Vt(new T0(.03,.08,8),e);r.position.set(1.1*Math.cos(n),0,1.1*Math.sin(n)),r.rotation.y=-n+Math.PI/2,r.rotation.z=Math.PI/2,i.add(r)}}function G4(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const e=i.getContext("2d");e.fillStyle="#b0c8d8",e.fillRect(0,0,2048,1024);for(let n=0;n<2048;n++)for(let r=0;r<1024;r+=4){const a=n/2048*Math.PI*2,s=r/1024*Math.PI-Math.PI/2,o=Math.abs(Math.cos(2*a))*Math.cos(s)**2;if(o>.3){const l=(o-.3)/.7,c=Math.round(180+l*75),u=Math.round(120-l*60),f=Math.round(100-l*50);e.fillStyle=`rgba(${c}, ${u}, ${f}, ${.3+l*.4})`,e.fillRect(n,r,1,4)}}for(let n=0;n<100;n++){const r=Math.random()*2048,a=200+Math.random()*624,s=Math.abs(Math.cos(2*(r/2048)*Math.PI*2))*Math.cos(a/1024*Math.PI-Math.PI/2)**2;if(s>.2){const o=r/2048*Math.PI*2+Math.PI/4,l=30+s*200;e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(o)*l,a+Math.sin(o)*l),e.strokeStyle=`rgba(200, 80, 50, ${.2+s*.4})`,e.lineWidth=1+s*3,e.stroke()}}const t=new Us(i);return t.wrapS=ir,t.wrapT=_n,t}function V4(){const i=document.createElement("canvas");i.width=2048,i.height=1024;const e=i.getContext("2d");e.fillStyle="#c8b898",e.fillRect(0,0,2048,1024),e.fillStyle="rgba(180, 200, 220, 0.4)",e.fillRect(0,0,2048,1024);for(let a=0;a<200;a++){const s=Math.random()*2048,o=Math.random()*1024,l=Math.random()*Math.PI,c=50+Math.random()*400,u=s+Math.cos(l)*c,f=o+Math.sin(l)*c,h=(s+u)/2+(Math.random()-.5)*60,p=(o+f)/2+(Math.random()-.5)*60;e.beginPath(),e.moveTo(s,o),e.quadraticCurveTo(h,p,u,f),e.strokeStyle=`rgba(${100+Math.floor(Math.random()*60)}, ${60+Math.floor(Math.random()*40)}, ${30+Math.floor(Math.random()*30)}, ${.15+Math.random()*.4})`,e.lineWidth=.5+Math.random()*3,e.stroke()}for(let a=0;a<15;a++){const s=Math.random()*2048,o=Math.random()*1024,l=30+Math.random()*120;e.beginPath(),e.arc(s,o,l,0,Math.PI*2),e.fillStyle=`rgba(${140+Math.random()*40}, ${110+Math.random()*30}, ${80+Math.random()*30}, ${.2+Math.random()*.3})`,e.fill();for(let c=0;c<10;c++)e.fillStyle=`rgba(190, 200, 210, ${.15+Math.random()*.25})`,e.fillRect(s+(Math.random()-.5)*l*1.5,o+(Math.random()-.5)*l*1.5,5+Math.random()*20,5+Math.random()*20)}for(let a=0;a<30;a++){const s=Math.random()*1024,o=Math.random()*1e3,l=200+Math.random()*600;e.beginPath(),e.moveTo(o,s);for(let c=o;c<o+l;c+=10)e.lineTo(c,s+Math.sin(c*.02)*(3+Math.random()*8));e.strokeStyle=`rgba(160, 140, 100, ${.1+Math.random()*.2})`,e.lineWidth=2+Math.random()*5,e.stroke()}const t=e.getImageData(0,0,2048,1024),n=t.data;for(let a=0;a<n.length;a+=4){const s=(Math.random()-.5)*15;n[a]+=s,n[a+1]+=s,n[a+2]+=s}e.putImageData(t,0,0);const r=new Us(i);return r.wrapS=ir,r.wrapT=_n,r}function W4(){const i=document.createElement("canvas");i.width=1024,i.height=512;const e=i.getContext("2d");e.fillStyle="#808080",e.fillRect(0,0,1024,512);for(let n=0;n<150;n++){const r=Math.random()*1024,a=Math.random()*512,s=Math.random()*Math.PI,o=30+Math.random()*200;e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(s)*o,a+Math.sin(s)*o),e.strokeStyle=`rgb(${Math.random()>.5?180:100}, ${Math.random()>.5?180:100}, ${Math.random()>.5?180:100})`,e.lineWidth=1+Math.random()*3,e.stroke()}const t=new Us(i);return t.wrapS=ir,t.wrapT=_n,t}function q4(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Overview & Astrophysical Constants</h2>
      <p class="tab-subtitle">
        General properties of icy moons in the outer solar system. These bodies maintain subsurface oceans 
        beneath ice shells, kept liquid by tidal dissipation and radiogenic heating — far outside the 
        traditional habitable zone.
      </p>
    </div>

    <div class="grid-2">
      <div>
        <div class="card" style="margin-bottom: 20px;">
          <div class="card-title"><span class="icon">🌐</span> 3D Interactive Europa Model</div>
          <div class="three-container" id="globe-container" style="height:500px;">
            <div class="three-overlay">
              <div class="toggle-group" id="globe-toggle" style="flex-wrap:wrap; max-width:420px;">
                <button class="toggle-option active" data-mode="surface">Surface</button>
                <button class="toggle-option" data-mode="internal">Layers</button>
                <button class="toggle-option" data-mode="convection">Convection</button>
                <button class="toggle-option" data-mode="magnetic">B-Field</button>
                <button class="toggle-option" data-mode="tidal">Tidal Stress</button>
              </div>
            </div>
          </div>
          <p style="font-size:11px; color:var(--text-muted); margin-top:8px; text-align:center;">
            Drag to rotate · Scroll to zoom · 5 visualization modes — click toggles above
          </p>
        </div>
      </div>

      <div>
        <div class="card" style="margin-bottom: 20px;">
          <div class="card-title"><span class="icon">📊</span> Icy Moon Physical Parameters</div>
          <p style="font-size:12px; color:var(--text-secondary); margin-bottom:14px;">
            Representative values for a Europa-class icy moon. These set the scale for interior modelling 
            and are inputs to hydrostatic equilibrium calculations.
          </p>
          <div class="data-grid" id="data-panel"></div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">⚖️</span> Hydrostatic Equilibrium</div>
          <div class="equation-block" id="eq-hydrostatic"></div>
          <div id="eq-hydrostatic-explanation"></div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 — Course Concept: Layered Density</div>
      <div class="context-block">
        <h4>Why Hydrostatic Equilibrium Matters for Icy Moons</h4>
        <p>
          An icy moon like Europa is a gravitationally bound, differentiated body — meaning heavier materials 
          (iron, silicates) have sunk to the centre, leaving lighter materials (water ice, liquid water) on 
          top. Each shell satisfies hydrostatic equilibrium: the weight of overlying material is balanced by 
          the pressure gradient. This yields a density profile ρ(r) that increases inward, and a pressure 
          profile P(r) that increases from ~0 at the surface to ~200–300 MPa at the ice-ocean boundary, 
          then to ~2 GPa at the core.
        </p>
        <p style="margin-top:10px;">
          <strong>Dimensional analysis exercise:</strong> Using g ≈ 1.3 m/s² and ρ<sub>ice</sub> ≈ 920 kg/m³, 
          the pressure at depth d in the ice shell is approximately P ≈ ρgd. At d = 25 km, 
          P ≈ 920 × 1.3 × 25000 ≈ 30 MPa — consistent with the ice-ocean transition.
        </p>
      </div>
    </div>
  `;const e=[{label:"Mean Radius",value:"1560.8",unit:"km",symbol:"R"},{label:"Surface Gravity",value:"1.314",unit:"m/s²",symbol:"g"},{label:"Mean Density",value:"3.013",unit:"g/cm³",symbol:"ρ"},{label:"Bond Albedo",value:"0.67",unit:"",symbol:"α"},{label:"Orbital Period",value:"3.551",unit:"days",symbol:"T"},{label:"Surface Temp",value:"~100",unit:"K",symbol:"T_s"},{label:"Tidal Heating",value:"~10¹²",unit:"W",symbol:"Q̇"},{label:"Ocean Depth (est.)",value:"60–150",unit:"km",symbol:"d"}],t=document.getElementById("data-panel");t.innerHTML=e.map(l=>`
    <div class="data-item">
      <div class="label">${l.label} (${l.symbol})</div>
      <div class="value">${l.value}<span class="unit">${l.unit}</span></div>
    </div>
  `).join("");const n=document.getElementById("eq-hydrostatic");n.innerHTML=`
    <div class="equation-label">Hydrostatic Equilibrium</div>
    ${Tt.renderToString("\\frac{dP}{dr} = -g(r)\\,\\rho(r)",{displayMode:!0,throwOnError:!1})}
  `;const r=document.getElementById("eq-hydrostatic-explanation");r.innerHTML=`
    <div class="equation-explanation">
      <strong>Derivation:</strong> Consider a thin shell at radius r with thickness dr. 
      The weight per unit area of this shell is ρ(r) · g(r) · dr. In equilibrium, this must 
      equal the pressure difference dP across the shell, giving dP/dr = −g(r)ρ(r). 
      Here g(r) = GM(r)/r² where M(r) is the mass enclosed within radius r. 
      For a differentiated icy moon, ρ(r) is piecewise constant across each layer 
      (ice ≈ 0.92, ocean ≈ 1.02, mantle ≈ 3.5, core ≈ 5.5 g/cm³).
    </div>
  `;const a=document.getElementById("globe-container"),s=U4(a,"surface"),o=document.getElementById("globe-toggle");return o.addEventListener("click",l=>{const c=l.target.closest(".toggle-option");c&&(o.querySelectorAll(".toggle-option").forEach(u=>u.classList.remove("active")),c.classList.add("active"),s.setMode(c.dataset.mode))}),()=>s.dispose()}function X4(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Ocean Convection Theory</h2>
      <p class="tab-subtitle">
        Subsurface oceans on icy moons are subject to intense thermal convection driven by bottom heating 
        (tidal + radiogenic) and rapid planetary rotation. The resulting flows are characterised by extreme 
        dimensionless numbers that place them in the rapidly-rotating turbulent regime.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🌀</span> Convective Forcing Visualization</div>
        <div class="canvas-container" style="height: 320px;">
          <canvas id="convection-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Schematic: heated bottom → buoyant plumes rise → deflected by Coriolis force → 
          organizing into Taylor columns aligned with the rotation axis.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom: 20px;">
          <div class="card-title"><span class="icon">📐</span> Dimensionless Scaling</div>
          <div class="data-grid">
            <div class="data-item">
              <div class="label">Rayleigh Number</div>
              <div class="value" style="font-size:15px;">10²⁰ – 10²⁶</div>
            </div>
            <div class="data-item">
              <div class="label">Ekman Number</div>
              <div class="value" style="font-size:15px;">10⁻¹² – 10⁻¹¹</div>
            </div>
            <div class="data-item">
              <div class="label">Prandtl Number</div>
              <div class="value" style="font-size:15px;">~7 <span class="unit">(water)</span></div>
            </div>
            <div class="data-item">
              <div class="label">Rossby Number</div>
              <div class="value" style="font-size:15px;">≪ 1</div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📏</span> Key Equations</div>
          <div class="equation-block" id="eq-rayleigh"></div>
          <div class="equation-block" id="eq-ekman"></div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🏛️</span> Taylor-Proudman Constraint</div>
      <div class="grid-2">
        <div>
          <div class="equation-block" id="eq-taylor"></div>
          <div class="equation-explanation">
            <strong>Physical meaning:</strong> In the limit Ek → 0 and Ro → 0 (rapid rotation, weak inertia), 
            the Navier-Stokes equations reduce to geostrophic balance: 2Ω × u = −∇p/ρ. Taking the curl 
            yields the Taylor-Proudman theorem: flows cannot vary along the rotation axis. This forces 
            convective plumes into columnar structures ("Taylor columns") spanning the full ocean depth.
          </div>
        </div>
        <div>
          <div class="context-block">
            <h4>🎓 AST320 Connection: Convective Stability</h4>
            <p>
              The Rayleigh number measures whether convection occurs at all: Ra > Ra_critical 
              (≈ 1708 for classical Rayleigh-Bénard). Icy moon oceans exceed this by ~18 orders of 
              magnitude, guaranteeing vigorous turbulent convection. The Schwarzschild criterion 
              (dT/dr exceeding the adiabatic gradient) is the stellar analogue — in both cases, 
              superadiabatic temperature gradients drive overturning motions.
            </p>
          </div>
          <div class="context-block" style="margin-top:12px;">
            <h4>Electromagnetic Pump Concept</h4>
            <p>
              Jupiter's magnetic field sweeps past Europa's conducting saltwater ocean, inducing 
              electric currents J. The resulting Lorentz force F = J × B can drive zonal (east-west) 
              flows — a "natural electromagnetic pump." This may produce a westward equatorial jet 
              analogous to Earth's ocean currents but with an entirely different driving mechanism.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("eq-rayleigh").innerHTML=`
    <div class="equation-label">Rayleigh Number</div>
    ${Tt.renderToString("Ra = \\frac{g\\,\\alpha\\,\\Delta T\\,d^3}{\\nu\\,\\kappa}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      g = gravitational acceleration, α = thermal expansion coefficient, ΔT = temperature contrast 
      across the ocean, d = ocean depth, ν = kinematic viscosity, κ = thermal diffusivity.
    </div>
  `,document.getElementById("eq-ekman").innerHTML=`
    <div class="equation-label">Ekman Number</div>
    ${Tt.renderToString("Ek = \\frac{\\nu}{\\Omega\\,d^2}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      Ω = rotation rate (= 2π/T_orbital). Small Ek means rotational effects dominate viscous effects.
    </div>
  `,document.getElementById("eq-taylor").innerHTML=`
    <div class="equation-label">Taylor-Proudman Theorem</div>
    ${Tt.renderToString("(2\\vec{\\Omega} \\cdot \\nabla)\\,\\vec{u} = 0",{displayMode:!0,throwOnError:!1})}
  `,Y4()}function Y4(){const i=document.getElementById("convection-canvas");if(!i)return;const e=i.parentElement.getBoundingClientRect();i.width=e.width*2,i.height=e.height*2,i.style.width=e.width+"px",i.style.height=e.height+"px";const t=i.getContext("2d");t.scale(2,2);const n=e.width,r=e.height,a=t.createLinearGradient(0,0,0,r);a.addColorStop(0,"#0a1628"),a.addColorStop(1,"#1a0a0a"),t.fillStyle=a,t.fillRect(0,0,n,r);const s=t.createLinearGradient(0,r-40,0,r);s.addColorStop(0,"rgba(255, 80, 20, 0.0)"),s.addColorStop(1,"rgba(255, 80, 20, 0.4)"),t.fillStyle=s,t.fillRect(0,r-40,n,40);const o=t.createLinearGradient(0,0,0,30);o.addColorStop(0,"rgba(180, 220, 240, 0.5)"),o.addColorStop(1,"rgba(180, 220, 240, 0.0)"),t.fillStyle=o,t.fillRect(0,0,n,30),t.font='11px "JetBrains Mono", monospace',t.fillStyle="rgba(180, 220, 240, 0.8)",t.fillText("ICE SHELL",10,16),t.fillStyle="rgba(255, 150, 100, 0.8)",t.fillText("SILICATE MANTLE (HEAT SOURCE)",10,r-8),t.fillStyle="rgba(0, 212, 255, 0.6)",t.font='11px "JetBrains Mono", monospace',t.fillText("Ω →",n-45,16);const l=6,c=Date.now()*.001;for(let u=0;u<l;u++){const f=n*(u+1)/(l+1),h=u%2===0;t.beginPath(),t.strokeStyle=h?"rgba(255, 120, 50, 0.3)":"rgba(100, 180, 255, 0.3)",t.lineWidth=20+Math.sin(u)*8,t.moveTo(f,r-40),t.lineTo(f,30),t.stroke();for(let p=0;p<8;p++){const x=h?r-40-(c*40+p*35+u*20)%(r-70):30+(c*30+p*35+u*20)%(r-70),y=f+Math.sin(x*.03+u)*10,m=2+Math.random();t.beginPath(),t.arc(y,x,m,0,Math.PI*2),t.fillStyle=h?`rgba(255, 160, 80, ${.5+Math.random()*.3})`:`rgba(100, 200, 255, ${.4+Math.random()*.3})`,t.fill()}t.font='9px "Inter", sans-serif',t.fillStyle="rgba(255,255,255,0.4)",t.textAlign="center",t.fillText(h?"↑ hot":"↓ cold",f,r/2),t.textAlign="left"}}function $4(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Ice Shell Dynamics & Regime Switches</h2>
      <p class="tab-subtitle">
        Icy moon shells can exist in two distinct thermal states — thin conductive or thick convective — 
        depending on the balance between tidal heat production and heat loss to space. 
        The transition between these states may exhibit hysteresis, meaning the system can "jump" 
        between stable configurations.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🔄</span> Hysteresis Toggle: Shell Regime</div>
        <div class="toggle-group" id="shell-toggle" style="margin-bottom:20px;">
          <button class="toggle-option active" data-mode="thin">Thin Conductive (~10 km)</button>
          <button class="toggle-option" data-mode="thick">Thick Convective (~30 km)</button>
        </div>
        <div class="canvas-container" style="height:340px;">
          <canvas id="shell-canvas"></canvas>
        </div>
        <div id="shell-description" style="margin-top:14px;"></div>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">📐</span> Heat Transport Equation</div>
          <div class="equation-block" id="eq-heat"></div>
          <div class="equation-block" id="eq-nusselt"></div>
        </div>

        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">📊</span> Regime Comparison</div>
          <table style="width:100%; font-size:13px; color:var(--text-secondary); border-collapse:collapse;">
            <thead>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <th style="text-align:left; padding:8px; color:var(--text-muted); font-size:11px; text-transform:uppercase; letter-spacing:1px;">Property</th>
                <th style="text-align:center; padding:8px; color:var(--accent-primary);">Conductive</th>
                <th style="text-align:center; padding:8px; color:var(--accent-warm);">Convective</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Thickness</td>
                <td style="text-align:center; padding:8px;">~5–15 km</td>
                <td style="text-align:center; padding:8px;">~25–40 km</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Heat transport</td>
                <td style="text-align:center; padding:8px;">Conduction only</td>
                <td style="text-align:center; padding:8px;">Conduction + convection</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Nusselt number</td>
                <td style="text-align:center; padding:8px;">Nu = 1</td>
                <td style="text-align:center; padding:8px;">Nu ≫ 1</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-subtle);">
                <td style="padding:8px;">Surface features</td>
                <td style="text-align:center; padding:8px;">Smooth ridges</td>
                <td style="text-align:center; padding:8px;">Chaos terrain</td>
              </tr>
              <tr>
                <td style="padding:8px;">Schwarzschild</td>
                <td style="text-align:center; padding:8px;">Sub-adiabatic</td>
                <td style="text-align:center; padding:8px;">Super-adiabatic</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🎓</span> AST320 Connection</div>
          <div class="context-block" style="margin:0;">
            <h4>Schwarzschild Criterion in Ice Shells</h4>
            <p>
              The Schwarzschild criterion from stellar interiors applies directly: when the 
              conductive temperature gradient exceeds the adiabatic gradient, convection onsets. 
              In an ice shell, the conductive gradient steepens as the shell thickens 
              (∝ ΔT/d), but the adiabatic gradient is nearly fixed. Beyond a critical thickness 
              (~15 km for Europa-like conditions), convection kicks in and the shell transitions 
              to the thick convective regime. This is a "finite-amplitude" bifurcation — the shell 
              doesn't smoothly transition but jumps.
            </p>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("eq-heat").innerHTML=`
    <div class="equation-label">Fourier's Law (Conductive Heat Flux)</div>
    ${Tt.renderToString("q_{\\text{cond}} = -k\\,\\frac{dT}{dz} \\approx k\\,\\frac{T_m - T_s}{d}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">k = thermal conductivity of ice (~2.3 W/m·K), T_m = melting point (~273 K), T_s = surface temp (~100 K), d = shell thickness.</div>
  `,document.getElementById("eq-nusselt").innerHTML=`
    <div class="equation-label">Nusselt Number (Convective Enhancement)</div>
    ${Tt.renderToString("Nu = \\frac{q_{\\text{total}}}{q_{\\text{cond}}}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">Nu = 1 for purely conductive shells. Nu ≫ 1 when vigorous convection enhances heat transport beyond conduction alone.</div>
  `;let e="thin";Mu(e),_u(e),document.getElementById("shell-toggle").addEventListener("click",t=>{const n=t.target.closest(".toggle-option");n&&(document.querySelectorAll("#shell-toggle .toggle-option").forEach(r=>r.classList.remove("active")),n.classList.add("active"),e=n.dataset.mode,Mu(e),_u(e))})}function _u(i){const e=document.getElementById("shell-description");i==="thin"?e.innerHTML=`
      <div class="context-block" style="border-color: rgba(0, 212, 255, 0.3);">
        <h4 style="color: var(--accent-primary);">Thin Conductive Shell (~10 km)</h4>
        <p>Heat is transported purely by conduction. The shell is thin enough that the temperature 
        gradient remains sub-adiabatic (Schwarzschild stability). Surface features are dominated by 
        tectonic ridges and lineae. The ocean is relatively close to the surface.</p>
      </div>
    `:e.innerHTML=`
      <div class="context-block" style="border-color: rgba(255, 107, 107, 0.3);">
        <h4 style="color: var(--accent-warm);">Thick Convective Shell (~30 km)</h4>
        <p>The shell is thick enough for the temperature gradient to exceed the adiabatic gradient, 
        triggering solid-state convection (warm ice rising, cold ice sinking). This produces <strong>chaos 
        terrain</strong> — disrupted blocks of ice tilted at odd angles, formed when warm diapirs 
        partially melt through the shell. The "finite-amplitude jump" in heat flux occurs because 
        convection suddenly becomes the dominant transport mechanism.</p>
      </div>
    `}function Mu(i){const e=document.getElementById("shell-canvas");if(!e)return;const t=e.parentElement.getBoundingClientRect();e.width=t.width*2,e.height=340*2,e.style.width=t.width+"px",e.style.height="340px";const n=e.getContext("2d");n.scale(2,2);const r=t.width,a=340;n.fillStyle="#060a14",n.fillRect(0,0,r,a);const s=i==="thin"?80:180,o=n.createLinearGradient(0,s,0,a);o.addColorStop(0,"#0a3d6b"),o.addColorStop(1,"#051e36"),n.fillStyle=o,n.fillRect(0,s,r,a-s);const l=n.createLinearGradient(0,0,0,s);if(l.addColorStop(0,"#d0e8f0"),l.addColorStop(.3,"#a0c8d8"),l.addColorStop(1,"#4a8aaa"),n.fillStyle=l,n.fillRect(0,0,r,s),n.font='12px "JetBrains Mono", monospace',n.fillStyle="#2a4a5a",n.fillText(`ICE SHELL (~${i==="thin"?"10":"30"} km)`,12,s/2),n.fillStyle="rgba(100, 200, 255, 0.7)",n.fillText("SUBSURFACE OCEAN",12,s+30),n.beginPath(),n.strokeStyle="rgba(0, 212, 255, 0.6)",n.lineWidth=2,n.setLineDash([6,4]),n.moveTo(0,s),n.lineTo(r,s),n.stroke(),n.setLineDash([]),n.beginPath(),n.strokeStyle="rgba(255, 255, 255, 0.4)",n.lineWidth=1,n.moveTo(r-30,5),n.lineTo(r-30,s-5),n.stroke(),n.moveTo(r-35,5),n.lineTo(r-25,5),n.stroke(),n.moveTo(r-35,s-5),n.lineTo(r-25,s-5),n.stroke(),n.font='10px "JetBrains Mono", monospace',n.fillStyle="rgba(255, 255, 255, 0.6)",n.save(),n.translate(r-18,s/2+10),n.rotate(-Math.PI/2),n.fillText(`~${i==="thin"?"10":"30"} km`,0,0),n.restore(),i==="thick"){for(let c=0;c<5;c++){const u=r*(c+.5)/5,f=c%2===0;n.beginPath(),n.strokeStyle=f?"rgba(255, 100, 60, 0.25)":"rgba(100, 180, 220, 0.25)",n.lineWidth=3,f?Su(n,u,s-20,u,30):Su(n,u,30,u,s-20)}n.fillStyle="rgba(80, 50, 30, 0.4)";for(let c=0;c<8;c++){const u=30+Math.random()*(r-60),f=15+Math.random()*30,h=5+Math.random()*10;n.save(),n.translate(u,3+Math.random()*8),n.rotate((Math.random()-.5)*.3),n.fillRect(-f/2,-h/2,f,h),n.restore()}n.font='10px "Inter", sans-serif',n.fillStyle="rgba(255, 120, 80, 0.7)",n.fillText("↑ CHAOS TERRAIN",r/2-50,16)}}function Su(i,e,t,n,r){i.beginPath(),i.moveTo(e,t),i.lineTo(n,r),i.stroke();const a=Math.atan2(r-t,n-e);i.beginPath(),i.moveTo(n,r),i.lineTo(n-8*Math.cos(a-.4),r-8*Math.sin(a-.4)),i.moveTo(n,r),i.lineTo(n-8*Math.cos(a+.4),r-8*Math.sin(a+.4)),i.stroke()}function j4(i){ql=!1,i.innerHTML=`
    <div class="tab-header">
      <h2>Ice-Ocean Interface: Mushy Layers</h2>
      <p class="tab-subtitle">
        At the base of an icy moon's shell, ice does not form a sharp boundary with the ocean. 
        Instead, a "mushy layer" — a porous matrix of ice crystals permeated by interstitial brine — 
        mediates mass and heat exchange between the solid shell and the liquid ocean.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🔬</span> Mushy Layer Cross-Section</div>
        <div class="canvas-container" style="height: 380px;">
          <canvas id="mushy-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Schematic of the dendritic ice-brine structure. Brine channels act as conduits for 
          nutrient-rich ocean water to penetrate upward into the shell.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">⬆️</span> Vertical Transport: Nutrient Elevator</div>
          <div class="slider-container">
            <label>
              Vertical Velocity
              <span class="slider-value" id="velocity-display">85 m/day</span>
            </label>
            <input type="range" id="velocity-slider" min="0" max="170" value="85" step="1" />
          </div>
          <div style="margin-top:12px;">
            <div class="data-grid">
              <div class="data-item">
                <div class="label">Max Vertical Velocity</div>
                <div class="value">170<span class="unit">m/day</span></div>
              </div>
              <div class="data-item">
                <div class="label">Front Width Scale</div>
                <div class="value">0.1–10<span class="unit">km</span></div>
              </div>
            </div>
          </div>
          <div class="context-block" style="margin-top:14px;">
            <h4>Submesoscale Fronts</h4>
            <p>
              At horizontal scales of 0.1–10 km, density-driven ("submesoscale") fronts develop 
              where fresh meltwater meets saltier ocean water. These fronts drive intense vertical 
              circulations that can transport nutrients (oxidants from the irradiated surface, 
              reductants from the seafloor) across the stratified interface — acting as 
              "nutrient elevators" connecting the ocean's redox chemistry to the surface.
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📐</span> Mushy Layer Energy Equation</div>
          <div class="equation-block" id="eq-mushy"></div>
          <div class="equation-block" id="eq-stefan" style="margin-top:12px;"></div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 Connection: Phase Transitions & Latent Heat</div>
      <div class="context-block" style="margin:0;">
        <h4>Latent Heat in Astrophysical Phase Boundaries</h4>
        <p>
          The mushy-layer energy equation above contains the term L<sub>V</sub> ∂ϕ/∂τ — the latent heat 
          released or absorbed as the solid fraction ϕ changes. This is identical in form to the energy 
          balance at any astrophysical phase boundary: hydrogen ionisation fronts in HII regions, ice 
          condensation in protoplanetary disks, or the nuclear-burning shell in an evolved star. In all cases, 
          the competition between heat conduction and latent heat production governs the advance or retreat 
          of the phase boundary.
        </p>
        <p style="margin-top:8px;">
          <strong>Key insight:</strong> The Stefan condition (below) is the moving-boundary counterpart of 
          hydrostatic equilibrium — it governs the rate of change of the boundary position, just as 
          hydrostatic equilibrium governs the pressure profile.
        </p>
      </div>
    </div>
  `,document.getElementById("eq-mushy").innerHTML=`
    <div class="equation-label">Mushy Layer Energy Conservation</div>
    ${Tt.renderToString("\\rho_m c_m \\frac{\\partial \\theta_m}{\\partial \\tau} = \\frac{\\partial}{\\partial \\xi}\\!\\left(\\lambda_m \\frac{\\partial \\theta_m}{\\partial \\xi}\\right) + L_V \\frac{\\partial \\phi}{\\partial \\tau}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      θ<sub>m</sub> = dimensionless temperature in the mush, ξ = dimensionless depth coordinate, 
      λ<sub>m</sub> = effective thermal conductivity (depends on porosity), ϕ = solid fraction, 
      L<sub>V</sub> = latent heat of fusion. The last term represents latent heat released/absorbed 
      as ice grows or melts within the mushy matrix.
    </div>
  `,document.getElementById("eq-stefan").innerHTML=`
    <div class="equation-label">Stefan Condition (Moving Phase Boundary)</div>
    ${Tt.renderToString("\\rho\\,L_V\\,\\frac{dh}{dt} = k\\!\\left.\\frac{\\partial T}{\\partial z}\\right|_{\\text{ice}} - k\\!\\left.\\frac{\\partial T}{\\partial z}\\right|_{\\text{ocean}}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      h = interface position, L<sub>V</sub> = latent heat. The difference in heat flux 
      on either side drives freezing (positive dh/dt) or melting (negative dh/dt).
    </div>
  `;const e=document.getElementById("velocity-slider"),t=document.getElementById("velocity-display");e.addEventListener("input",()=>{t.textContent=`${e.value} m/day`,wu(parseInt(e.value))}),wu(85)}let ql=!1,Qa=0;function wu(i){const e=document.getElementById("mushy-canvas");if(!e)return;const t=e.getContext("2d"),n=380;ql||(Qa=e.parentElement.getBoundingClientRect().width,e.width=Qa*2,e.height=n*2,e.style.width=Qa+"px",e.style.height=n+"px",ql=!0),t.save(),t.setTransform(2,0,0,2,0,0);const r=Qa;t.fillStyle="#050a14",t.fillRect(0,0,r,n);const a=100,s=t.createLinearGradient(0,0,0,a);s.addColorStop(0,"#90b8cc"),s.addColorStop(1,"#5a90aa"),t.fillStyle=s,t.fillRect(0,0,r,a);const o=220,l=t.createLinearGradient(0,a,0,o);l.addColorStop(0,"#3a7090"),l.addColorStop(.5,"#1a5080"),l.addColorStop(1,"#0a3a60"),t.fillStyle=l,t.fillRect(0,a,r,o-a);const c=t.createLinearGradient(0,o,0,n);c.addColorStop(0,"#0a3a60"),c.addColorStop(1,"#051e36"),t.fillStyle=c,t.fillRect(0,o,r,n-o),t.strokeStyle="rgba(180, 220, 240, 0.3)",t.lineWidth=1;for(let f=0;f<40;f++){const h=20+Math.random()*(r-40),p=a+10+Math.random()*(o-a-20);K4(t,h,p,8+Math.random()*15)}const u=5;for(let f=0;f<u;f++){const h=r*(f+.7)/(u+.5),p=3+Math.random()*4;t.beginPath(),t.strokeStyle=`rgba(255, 200, 50, ${.2+Math.random()*.15})`,t.lineWidth=p,t.moveTo(h,o);for(let y=o;y>a+20;y-=5)t.lineTo(h+Math.sin(y*.1+f)*6,y);t.stroke();const x=Math.round(i/20);for(let y=0;y<x;y++){const m=a+20+Math.random()*(o-a-30),g=h+Math.sin(m*.1+f)*6+(Math.random()-.5)*p;t.beginPath(),t.arc(g,m,1.5,0,Math.PI*2),t.fillStyle=`rgba(255, 220, 80, ${.4+i/170*.4})`,t.fill()}}t.font='11px "JetBrains Mono", monospace',t.fillStyle="rgba(40, 70, 90, 0.9)",t.fillText("SOLID ICE",10,50),t.fillStyle="rgba(150, 200, 230, 0.8)",t.fillText("MUSHY LAYER",10,a+60),t.font='9px "Inter", sans-serif',t.fillStyle="rgba(150, 200, 230, 0.5)",t.fillText("(porous ice + brine)",10,a+76),t.font='11px "JetBrains Mono", monospace',t.fillStyle="rgba(100, 200, 255, 0.7)",t.fillText("OCEAN",10,o+40),t.font='11px "JetBrains Mono", monospace',t.fillStyle=`rgba(255, 220, 80, ${.5+i/170*.5})`,t.fillText(`v_z = ${i} m/day`,r-130,a+60),t.setLineDash([4,4]),t.strokeStyle="rgba(255, 255, 255, 0.3)",t.lineWidth=1,t.beginPath(),t.moveTo(0,a),t.lineTo(r,a),t.stroke(),t.beginPath(),t.moveTo(0,o),t.lineTo(r,o),t.stroke(),t.setLineDash([]),Z4(t,r-40,a-20,o+40),t.restore()}function K4(i,e,t,n){const r=3+Math.floor(Math.random()*3);for(let a=0;a<r;a++){const s=a/r*Math.PI*2+Math.random()*.5,o=n*(.5+Math.random()*.5);i.beginPath(),i.moveTo(e,t),i.lineTo(e+Math.cos(s)*o,t+Math.sin(s)*o),i.stroke()}}function Z4(i,e,t,n){i.beginPath(),i.strokeStyle="rgba(255, 100, 60, 0.5)",i.lineWidth=2;const r=30;for(let a=0;a<=r;a++){const s=a/r,o=t+s*(n-t),l=1/(1+Math.exp(-8*(s-.5))),c=e-25+l*25;a===0?i.moveTo(c,o):i.lineTo(c,o)}i.stroke(),i.font='8px "JetBrains Mono", monospace',i.fillStyle="rgba(255, 100, 60, 0.5)",i.fillText("T",e-5,t-5)}function J4(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Jupiter System & Magnetosphere</h2>
      <p class="tab-subtitle">
        Europa orbits within Jupiter's immense magnetosphere — the largest structure in the solar 
        system. The interplay between orbital mechanics (the Laplace resonance), Jupiter's magnetic 
        field, and tidal dissipation shapes every aspect of Europa's interior and habitability.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🪐</span> Galilean Moon Orbits & Laplace Resonance</div>
        <div class="canvas-container" style="height:420px;">
          <canvas id="orbit-canvas"></canvas>
        </div>
        <div style="display:flex; gap:8px; margin-top:10px; flex-wrap:wrap;">
          <span class="badge badge-gold">Io — 1.77 d</span>
          <span class="badge badge-cyan">Europa — 3.55 d</span>
          <span class="badge badge-purple">Ganymede — 7.15 d</span>
          <span class="badge" style="background:rgba(255,255,255,0.08); color:var(--text-secondary); border:1px solid var(--border-subtle);">Callisto — 16.69 d</span>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:6px;">
          Animated orbital view. The 1:2:4 Laplace resonance locks Io, Europa, and Ganymede into 
          commensurable orbits, maintaining their orbital eccentricities and driving tidal heating.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">🔗</span> The Laplace Resonance (1:2:4)</div>
          <div class="equation-block" id="eq-laplace"></div>
          <div class="equation-block" id="eq-mean-motion" style="margin-top:12px;"></div>
          <div class="context-block" style="margin-top:14px;">
            <h4>Why Resonance Matters for Europa</h4>
            <p>
              The 1:2:4 orbital resonance between Io, Europa, and Ganymede prevents their orbits 
              from circularising. Each conjunction provides a periodic gravitational "kick" that 
              maintains a forced eccentricity of e ≈ 0.009 for Europa. This small but persistent 
              eccentricity means Europa's distance from Jupiter varies by ~6,000 km each orbit, 
              producing <strong>time-varying tidal stresses</strong> that flex the ice shell and heat 
              the interior through viscous dissipation.
            </p>
            <p style="margin-top:8px;">
              Without the resonance, tidal dissipation would circularise Europa's orbit within 
              ~10⁸ years, the ocean would freeze, and the moon would become geologically inert.
              <strong>The Laplace resonance is the engine that keeps Europa alive.</strong>
            </p>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">📊</span> Orbital Parameters</div>
          <div style="overflow-x:auto;">
            <table style="width:100%; font-size:12px; color:var(--text-secondary); border-collapse:collapse; min-width:400px;">
              <thead>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <th style="text-align:left; padding:8px; color:var(--text-muted); font-size:10px; text-transform:uppercase; letter-spacing:1px;">Moon</th>
                  <th style="text-align:center; padding:8px;">a (R_J)</th>
                  <th style="text-align:center; padding:8px;">P (days)</th>
                  <th style="text-align:center; padding:8px;">e</th>
                  <th style="text-align:center; padding:8px;">Resonance</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:8px; color:var(--accent-gold);">Io</td>
                  <td style="text-align:center;">5.91</td>
                  <td style="text-align:center;">1.769</td>
                  <td style="text-align:center;">0.0041</td>
                  <td style="text-align:center;">1×</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:8px; color:var(--accent-primary);">Europa</td>
                  <td style="text-align:center;">9.39</td>
                  <td style="text-align:center;">3.551</td>
                  <td style="text-align:center;">0.0094</td>
                  <td style="text-align:center;">2×</td>
                </tr>
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:8px; color:var(--accent-tertiary);">Ganymede</td>
                  <td style="text-align:center;">14.97</td>
                  <td style="text-align:center;">7.155</td>
                  <td style="text-align:center;">0.0013</td>
                  <td style="text-align:center;">4×</td>
                </tr>
                <tr>
                  <td style="padding:8px; color:var(--text-secondary);">Callisto</td>
                  <td style="text-align:center;">26.33</td>
                  <td style="text-align:center;">16.69</td>
                  <td style="text-align:center;">0.0074</td>
                  <td style="text-align:center;">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🧲</span> Jupiter's Magnetosphere & Europa</div>
        <div class="canvas-container" style="height:380px;">
          <canvas id="mag-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Jupiter's magnetic field (B<sub>J</sub> ≈ 420 nT at Europa) sweeps past Europa at ~100 km/s, 
          inducing currents in the salty ocean and driving electromagnetic pumping of ocean flow.
        </p>
      </div>

      <div>
        <div class="card" style="margin-bottom:20px;">
          <div class="card-title"><span class="icon">⚡</span> Electromagnetic Induction at Europa</div>
          <div class="equation-block" id="eq-induction"></div>
          <div class="equation-block" id="eq-lorentz" style="margin-top:12px;"></div>
          <div class="context-block" style="margin-top:14px;">
            <h4>How the Magnetosphere Drives Ocean Currents</h4>
            <p>
              Jupiter's magnetic field at Europa's orbit has a time-varying component due to 
              Jupiter's tilted dipole (tilt ≈ 9.6°) rotating with a period of ~10 hours. 
              This oscillating field penetrates Europa's ice shell and induces eddy currents 
              in the conducting ocean (σ ≈ 3–5 S/m for Earth-like salinity). Three effects result:
            </p>
            <ul style="margin-top:8px; padding-left:16px; font-size:12px; line-height:2;">
              <li><strong>Induced magnetic field</strong> — detectable by ECM (Steinbrügge et al. 2026)</li>
              <li><strong>Joule heating</strong> — small (≈ 10⁷ W) but contributes to the energy budget</li>
              <li><strong>Lorentz force</strong> — F = J × B drives zonal ocean currents (electromagnetic pumping)</li>
            </ul>
          </div>
        </div>

        <div class="card">
          <div class="card-title"><span class="icon">🔥</span> Tidal Dissipation Budget</div>
          <div class="equation-block" id="eq-tidal"></div>
          <div class="data-grid" style="margin-top:14px;">
            <div class="data-item">
              <div class="label">Tidal Heating (Europa)</div>
              <div class="value" style="font-size:15px;">~10¹²<span class="unit">W</span></div>
            </div>
            <div class="data-item">
              <div class="label">Radiogenic Heating</div>
              <div class="value" style="font-size:15px;">~3×10¹¹<span class="unit">W</span></div>
            </div>
            <div class="data-item">
              <div class="label">Forced Eccentricity</div>
              <div class="value" style="font-size:15px;">0.0094</div>
            </div>
            <div class="data-item">
              <div class="label">Orbital Period</div>
              <div class="value" style="font-size:15px;">3.551<span class="unit">days</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 — Orbital Mechanics & Tidal Theory</div>
      <div class="grid-3">
        <div class="context-block" style="margin:0;">
          <h4>Kepler's Third Law at Jupiter</h4>
          <div class="equation-block" id="eq-kepler" style="margin:10px 0;"></div>
          <p>
            The 1:2:4 period ratio implies a<sub>Europa</sub>/a<sub>Io</sub> = 2^(2/3) ≈ 1.587. 
            Measured: 9.39/5.91 = 1.589 — confirming Kepler's law to <0.2% precision. This is a 
            textbook verification of Newtonian gravity.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Virial Theorem & Energy Budget</h4>
          <div class="equation-block" id="eq-virial" style="margin:10px 0;"></div>
          <p>
            The Virial theorem constrains Europa's thermal evolution: total gravitational binding 
            energy ≈ 3GM²/5R ≈ 2.5×10²⁹ J. The tidal dissipation rate (~10¹² W) implies a 
            cooling timescale of ~10¹⁷ s ≈ 3 Gyr — meaning Europa's ocean should persist for 
            roughly the remaining lifetime of the solar system.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Roche Limit & Tidal Stresses</h4>
          <div class="equation-block" id="eq-roche" style="margin:10px 0;"></div>
          <p>
            Europa orbits well outside Jupiter's Roche limit (≈ 2.5 R_J for ice), so it remains 
            self-gravitating. However, the differential tidal acceleration across Europa's diameter 
            produces surface stresses of ~0.1 MPa — enough to fracture the ice shell and create 
            the observed lineae and cycloid ridges.
          </p>
        </div>
      </div>
    </div>
  `,document.getElementById("eq-laplace").innerHTML=`
    <div class="equation-label">Laplace Resonance Condition</div>
    ${Tt.renderToString("n_{\\text{Io}} - 3n_{\\text{Europa}} + 2n_{\\text{Ganymede}} = 0",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      n = mean motion (= 2π/P). This relation means that the three moons can never be aligned 
      on the same side of Jupiter simultaneously — at each conjunction, only two moons align while 
      the third is on the opposite side, producing a cyclic pattern of gravitational perturbations.
    </div>
  `,document.getElementById("eq-mean-motion").innerHTML=`
    <div class="equation-label">Period Ratios</div>
    ${Tt.renderToString("\\frac{P_{\\text{Europa}}}{P_{\\text{Io}}} = 2.007 \\approx 2, \\quad \\frac{P_{\\text{Ganymede}}}{P_{\\text{Europa}}} = 2.015 \\approx 2",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      Near-integer period ratios lock the moons into resonance. The small deviations from exact 2:1 
      cause a slow libration of the resonant argument — measurable by Europa Clipper's G/RS tracking.
    </div>
  `,document.getElementById("eq-induction").innerHTML=`
    <div class="equation-label">Magnetic Diffusion Equation</div>
    ${Tt.renderToString("\\frac{\\partial \\vec{B}}{\\partial t} = \\nabla \\times (\\vec{v} \\times \\vec{B}) + \\eta \\nabla^2 \\vec{B}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      η = 1/(μ₀σ) is the magnetic diffusivity. For Europa's ocean (σ ≈ 4 S/m), 
      η ≈ 2×10⁵ m²/s. The skin depth δ = √(2η/ω) ≈ 80–120 km at the Jovian synodic period, 
      meaning the field penetrates deep enough to "see" the ocean.
    </div>
  `,document.getElementById("eq-lorentz").innerHTML=`
    <div class="equation-label">Lorentz Force (Electromagnetic Pumping)</div>
    ${Tt.renderToString("\\vec{F} = \\vec{J} \\times \\vec{B} = \\sigma(\\vec{v} \\times \\vec{B}) \\times \\vec{B}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      The induced currents J interact with Jupiter's background field B to produce a net force 
      that drives westward zonal jets in the equatorial ocean — a "natural electromagnetic pump."
    </div>
  `,document.getElementById("eq-tidal").innerHTML=`
    <div class="equation-label">Tidal Dissipation Rate</div>
    ${Tt.renderToString("\\dot{E}_{\\text{tidal}} = \\frac{21}{2}\\,\\frac{k_2}{Q}\\,\\frac{(GM_J)^{5/2}\\,R^5\\,e^2}{a^{15/2}}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      k₂/Q = tidal quality factor (≈ 0.01 for Europa), M_J = Jupiter's mass, R = Europa's 
      radius, e = orbital eccentricity, a = semi-major axis. The e² dependence makes the 
      Laplace resonance essential — without forced eccentricity, tidal heating vanishes.
    </div>
  `,document.getElementById("eq-kepler").innerHTML=Tt.renderToString("P^2 = \\frac{4\\pi^2}{GM_J}\\,a^3",{displayMode:!0,throwOnError:!1}),document.getElementById("eq-virial").innerHTML=Tt.renderToString("E_{\\text{bind}} \\approx \\frac{3GM^2}{5R} \\approx 2.5 \\times 10^{29}\\,\\text{J}",{displayMode:!0,throwOnError:!1}),document.getElementById("eq-roche").innerHTML=Tt.renderToString("d_{\\text{Roche}} \\approx 2.46\\,R_J\\!\\left(\\frac{\\rho_J}{\\rho_{\\text{moon}}}\\right)^{\\!1/3}",{displayMode:!0,throwOnError:!1}),Q4(),e3()}function Q4(){const i=document.getElementById("orbit-canvas");if(!i)return;const e=i.parentElement.getBoundingClientRect(),t=Math.min(window.devicePixelRatio,2);i.width=e.width*t,i.height=420*t,i.style.width=e.width+"px",i.style.height="420px";const n=i.getContext("2d");n.scale(t,t);const r=e.width,a=420,s=r/2,o=a/2,l=Math.min(r,a)/7,c=[{name:"Io",a:1,period:1.769,color:"#ffd93d",size:5},{name:"Europa",a:1.59,period:3.551,color:"#00d4ff",size:6},{name:"Ganymede",a:2.53,period:7.155,color:"#7c5cfc",size:8},{name:"Callisto",a:4.46,period:16.69,color:"#9ba4c0",size:7}];let u=Date.now(),f;function h(){f=requestAnimationFrame(h);const p=(Date.now()-u)/1e3;n.clearRect(0,0,r,a),n.fillStyle="#040810",n.fillRect(0,0,r,a);const x=n.createRadialGradient(s,o,0,s,o,22);x.addColorStop(0,"#e8c87a"),x.addColorStop(.5,"#c49a4a"),x.addColorStop(1,"#8a6420"),n.beginPath(),n.arc(s,o,18,0,Math.PI*2),n.fillStyle=x,n.fill(),n.strokeStyle="rgba(100, 60, 20, 0.4)",n.lineWidth=2;for(let S=-12;S<=12;S+=6)n.beginPath(),n.arc(s,o,18,0,Math.PI*2),n.save(),n.clip(),n.beginPath(),n.moveTo(s-20,o+S),n.lineTo(s+20,o+S),n.stroke(),n.restore();n.setLineDash([3,6]),n.strokeStyle="rgba(100, 150, 255, 0.1)",n.lineWidth=1,n.beginPath(),n.ellipse(s,o,l*5,l*3.5,0,0,Math.PI*2),n.stroke(),n.setLineDash([]),n.font='9px "JetBrains Mono", monospace',n.fillStyle="rgba(100, 150, 255, 0.25)",n.fillText("MAGNETOSPHERE",s+l*3.2,o-l*2.5),c.forEach(S=>{const C=S.a*l;n.beginPath(),n.arc(s,o,C,0,Math.PI*2),n.strokeStyle=`${S.color}22`,n.lineWidth=1,n.stroke();const E=2*Math.PI*p*8/S.period,D=s+C*Math.cos(E),P=o+C*Math.sin(E);n.beginPath();for(let L=0;L<30;L++){const M=E-L/30*.5,A=s+C*Math.cos(M),K=o+C*Math.sin(M);L===0?n.moveTo(A,K):n.lineTo(A,K)}n.strokeStyle=`${S.color}${Math.round(60).toString(16).padStart(2,"0")}`,n.lineWidth=2,n.stroke(),n.beginPath(),n.arc(D,P,S.size,0,Math.PI*2),n.fillStyle=S.color,n.fill(),n.beginPath(),n.arc(D,P,S.size+3,0,Math.PI*2),n.fillStyle=`${S.color}20`,n.fill(),n.font='10px "Inter", sans-serif',n.fillStyle=S.color,n.textAlign="center",n.fillText(S.name,D,P-S.size-6),n.textAlign="left"});const y=2*Math.PI*p*8/1.769,m=2*Math.PI*p*8/3.551,g=Math.abs(((y-m)%(Math.PI*2)+Math.PI*2)%(Math.PI*2));if(g<.3||g>Math.PI*2-.3){const S=1*l,C=1.59*l;n.beginPath(),n.moveTo(s+S*Math.cos(y),o+S*Math.sin(y)),n.lineTo(s+C*Math.cos(m),o+C*Math.sin(m)),n.strokeStyle="rgba(255, 217, 61, 0.4)",n.lineWidth=1,n.setLineDash([4,4]),n.stroke(),n.setLineDash([])}n.font='10px "JetBrains Mono", monospace',n.fillStyle="#c49a4a",n.textAlign="center",n.fillText("Jupiter",s,o+30),n.textAlign="left"}h(),i._animId=f}function e3(){const i=document.getElementById("mag-canvas");if(!i)return;const e=i.parentElement.getBoundingClientRect(),t=Math.min(window.devicePixelRatio,2);i.width=e.width*t,i.height=380*t,i.style.width=e.width+"px",i.style.height="380px";const n=i.getContext("2d");n.scale(t,t);const r=e.width,a=380,s=r*.3,o=a/2;n.fillStyle="#040810",n.fillRect(0,0,r,a);const l=n.createRadialGradient(s-80,o,0,s-80,o,50);l.addColorStop(0,"#e8c87a"),l.addColorStop(.7,"#c49a4a"),l.addColorStop(1,"#8a642044"),n.beginPath(),n.arc(s-80,o,40,0,Math.PI*2),n.fillStyle=l,n.fill(),n.font='10px "JetBrains Mono", monospace',n.fillStyle="#c49a4a88",n.fillText("Jupiter",s-100,o+55),n.strokeStyle="rgba(80, 130, 255, 0.15)",n.lineWidth=1.5;for(let h=0;h<12;h++){const p=h/12*Math.PI*2;n.beginPath();for(let x=0;x<=1;x+=.02){const y=30+x*250,m=p+x*.3*Math.sin(p),g=s-80+y*Math.cos(m),S=o+y*.6*Math.sin(m);x===0?n.moveTo(g,S):n.lineTo(g,S)}n.stroke()}n.font='11px "JetBrains Mono", monospace',n.fillStyle="rgba(80, 130, 255, 0.6)",n.fillText("B_J ≈ 420 nT",s-30,o-100);for(let h=0;h<5;h++){const p=s+40+h*50,x=o+Math.sin(h*.8)*30;n.beginPath(),n.moveTo(p,x),n.lineTo(p+20,x),n.strokeStyle="rgba(80, 130, 255, 0.3)",n.lineWidth=1.5,n.stroke(),n.beginPath(),n.moveTo(p+20,x),n.lineTo(p+16,x-3),n.moveTo(p+20,x),n.lineTo(p+16,x+3),n.stroke()}n.fillStyle="rgba(80, 130, 255, 0.4)",n.font='9px "Inter", sans-serif',n.fillText("→ sweeps past at ~100 km/s",s+60,o-60);const c=s+120,u=o;n.strokeStyle="rgba(0, 212, 255, 0.2)",n.lineWidth=1;for(let h=0;h<8;h++){const p=h/8*Math.PI*2;n.beginPath();for(let x=0;x<=1;x+=.05){const y=20+x*40,m=p+x*.5,g=c+y*Math.cos(m),S=u+y*.7*Math.sin(m);x===0?n.moveTo(g,S):n.lineTo(g,S)}n.stroke()}const f=n.createRadialGradient(c,u,0,c,u,16);f.addColorStop(0,"#c8dce8"),f.addColorStop(1,"#6090a8"),n.beginPath(),n.arc(c,u,14,0,Math.PI*2),n.fillStyle=f,n.fill(),n.strokeStyle="rgba(0, 212, 255, 0.5)",n.lineWidth=1.5,n.stroke(),n.beginPath(),n.arc(c,u,10,0,Math.PI*2),n.strokeStyle="rgba(0, 150, 255, 0.4)",n.setLineDash([2,2]),n.stroke(),n.setLineDash([]),n.font='10px "JetBrains Mono", monospace',n.fillStyle="#00d4ff",n.fillText("Europa",c-18,u+28),n.font='9px "Inter", sans-serif',n.fillStyle="rgba(0, 212, 255, 0.5)",n.fillText("induced B",c+20,u-30),n.fillStyle="rgba(255, 200, 50, 0.6)",n.font='10px "JetBrains Mono", monospace',n.fillText("J →",c+18,u+2),n.fillStyle="rgba(255, 107, 107, 0.7)",n.font='10px "JetBrains Mono", monospace',n.fillText("F = J × B",c-5,u+50),n.font='9px "Inter", sans-serif',n.fillStyle="rgba(255, 107, 107, 0.5)",n.fillText("(westward jet)",c-10,u+64),n.fillStyle="rgba(255, 217, 61, 0.2)",n.fillRect(s-40,a-30,160,20),n.fillStyle="rgba(255, 217, 61, 0.6)",n.font='9px "JetBrains Mono", monospace',n.fillText("Io plasma torus region",s-32,a-16)}function t3(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Geodetic Investigations of the Europa Clipper Mission</h2>
      <p class="tab-subtitle">
        The Europa Clipper mission will assess Europa's habitability through geodetic measurements — 
        global shape, rotation, gravity, and tidal deformation. This tab summarises the key science 
        from Steinbrügge et al. (2026), which describes how cross-instrument geodetic data will 
        constrain Europa's ice shell thickness, ocean presence, and interior mass distribution.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1007/s11214-025-01250-x" target="_blank" rel="noopener">
          Steinbrügge, G. et al. (2026). <em>Space Sci. Rev.</em>, 222, 17.
        </a>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">🔭</span> Context: Why Geodesy Matters</div>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.8;">
        Europa is one of the most promising places in the solar system to search for habitable 
        environments. Its subsurface ocean — inferred from Galileo magnetometer data, surface 
        geology, and theoretical models — lies beneath an ice shell of uncertain thickness. 
        <strong>Geodetic measurements provide the most direct constraints on Europa's interior 
        structure</strong> because they are sensitive to the bulk mechanical response of the body 
        to tidal forcing. Steinbrügge et al. (2026) describe how the Europa Clipper Geodesy Focus 
        Group (GFG) will coordinate data from four instruments to build a comprehensive geodetic 
        dataset over ~49 flybys.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> Key Observable: Tidal Love Numbers</div>
        <div class="equation-block" id="eq-love-k2"></div>
        <div class="equation-block" id="eq-love-h2" style="margin-top:12px;"></div>
        <div class="context-block" style="margin-top:14px;">
          <h4>What Love Numbers Tell Us (Steinbrügge et al.)</h4>
          <p>
            The degree-2 tidal Love numbers k₂ and h₂ quantify how Europa's gravity field and 
            shape, respectively, respond to Jupiter's tidal potential. A <strong>decoupled ice shell</strong> 
            floating on a global ocean produces k₂ ≈ 0.25 and h₂ ≈ 1.35 — values that are 
            <em>diagnostic</em> of an ocean's existence. If the ice shell were frozen to the 
            mantle, k₂ would be much smaller (~0.02). The Clipper mission aims to measure k₂ 
            with sufficient precision to distinguish these scenarios.
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🛰️</span> Cross-Instrument Geodesy (Fig. concept from paper)</div>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:16px;">
          Steinbrügge et al. describe how four instruments contribute complementary geodetic measurements:
        </p>
        <div style="display:flex; flex-direction:column; gap:12px;">
          ${es("G/RS","Gravity / Radio Science","Measures the gravity field via Doppler tracking of the spacecraft. Determines J₂, C₂₂, and higher-degree gravity coefficients. Constrains k₂ through repeated flyby tracking at different orbital phases of Europa around Jupiter.")}
          ${es("EIS","Europa Imaging System","Provides stereo imaging for shape modelling. Measures h₂ through limb profile changes at different tidal phases. Establishes a cartographic control network for georeferencing all other datasets.")}
          ${es("REASON","Radar for Europa Assessment & Sounding","Dual-frequency ice-penetrating radar (9 MHz HF + 60 MHz VHF). Probes ice shell structure down to ~30 km. Also provides high-precision altimetry for shape determination and tidal deformation (h₂).")}
          ${es("Europa-UVS","Ultraviolet Spectrograph","Stellar occultations constrain Europa's limb shape and atmosphere/exosphere. Provides independent shape data points at UV wavelengths.")}
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🌐</span> Geodetic Reference System</div>
        <p style="font-size:13px; color:var(--text-secondary); line-height:1.8;">
          A critical contribution of the GFG is establishing a <strong>precise cartographic 
          reference system</strong> for Europa. This requires:
        </p>
        <ul style="font-size:13px; color:var(--text-secondary); line-height:2; padding-left:20px; margin-top:8px;">
          <li>Determining the rotation state (pole orientation, spin rate, possible librations)</li>
          <li>Fitting a global triaxial ellipsoid from shape data (EIS + REASON altimetry)</li>
          <li>Defining a coordinate system anchored to surface control points</li>
          <li>Accounting for tidal deformation when registering images across different flyby epochs</li>
        </ul>
        <div class="data-grid" style="margin-top:16px;">
          <div class="data-item">
            <div class="label">Planned Flybys</div>
            <div class="value">49</div>
          </div>
          <div class="data-item">
            <div class="label">Closest Approach</div>
            <div class="value">25–100<span class="unit">km</span></div>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">💡</span> Implications & Impact</div>
        <div class="context-block" style="margin:0;">
          <h4>Why This Paper Matters for the Field</h4>
          <p>
            <strong>1. First direct measurement of Europa's tidal response.</strong> While Galileo 
            provided indirect evidence for an ocean (induced magnetic field), Clipper will directly 
            measure the body's mechanical response to tides via k₂ and h₂ — an unambiguous ocean indicator.
          </p>
          <p style="margin-top:8px;">
            <strong>2. Ice shell thickness constraint.</strong> The combination of k₂, h₂, and 
            REASON radar sounding will provide the first observational bound on ice shell thickness — 
            a parameter that controls habitability by governing surface-ocean material exchange.
          </p>
          <p style="margin-top:8px;">
            <strong>3. Establishes methodology for all icy moon geodesy.</strong> The cross-instrument 
            approach described here will serve as the template for future missions (e.g., JUICE at 
            Ganymede, Dragonfly at Titan, Enceladus orbiters).
          </p>
        </div>
        <div style="margin-top:12px;">
          <span class="badge badge-cyan">Geodesy</span>
          <span class="badge badge-purple">Interior Structure</span>
          <span class="badge badge-gold">Habitability</span>
        </div>
      </div>
    </div>
  `,document.getElementById("eq-love-k2").innerHTML=`
    <div class="equation-label">Degree-2 Tidal Love Number k₂ (Gravity Response)</div>
    ${Tt.renderToString("k_2 = \\frac{\\delta \\Phi_{\\text{induced}}}{\\Phi_{\\text{tidal}}}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      k₂ measures the ratio of the induced gravitational potential perturbation to the applied 
      tidal potential from Jupiter. For a body with a global subsurface ocean decoupling the ice 
      shell from the interior: k₂ ≈ 0.25 (Steinbrügge et al. 2026). Without an ocean: k₂ ≈ 0.02.
    </div>
  `,document.getElementById("eq-love-h2").innerHTML=`
    <div class="equation-label">Degree-2 Tidal Love Number h₂ (Shape Response)</div>
    ${Tt.renderToString("h_2 = \\frac{\\delta r_{\\text{surface}}}{\\Phi_{\\text{tidal}} / g}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      h₂ measures the radial surface displacement normalised by the tidal potential. 
      With an ocean: h₂ ≈ 1.35 (the surface deforms by ~30 m peak-to-peak). 
      Without an ocean: h₂ ≈ 0.04 (deformation < 1 m).
    </div>
  `}function es(i,e,t){return`
    <div class="instrument-card">
      <div style="display:flex; align-items:center; gap:10px; margin-bottom:6px;">
        <span class="badge badge-cyan">${i}</span>
        <span class="inst-name">${e}</span>
      </div>
      <div class="inst-desc">${t}</div>
    </div>
  `}function n3(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Ocean Convection & Ice Shell Response</h2>
      <p class="tab-subtitle">
        Pagnoscin et al. (2026) investigate intermediate-scale convective dynamics within icy moon 
        oceans and how these motions generate differential heat fluxes that locally thin or thicken 
        the overlying ice shell. Their work bridges the gap between global-scale models and the 
        localised processes that may produce observable surface signatures.
      </p>
      <div class="paper-citation">
        📄 <a href="https://doi.org/10.1016/j.icarus.2025.116875" target="_blank" rel="noopener">
          Pagnoscin, S. et al. (2026). <em>Icarus</em>, 446, 116875.
        </a>
      </div>
    </div>

    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><span class="icon">🔭</span> Context: Why Intermediate-Scale Convection Matters</div>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.8;">
        The subsurface oceans of icy moons like Europa lie well outside the traditional habitable zone, 
        yet tidal dissipation and radiogenic heating sustain liquid water beneath their ice shells. 
        <strong>Previous global models</strong> (e.g., Soderlund et al. 2014) showed that large-scale 
        ocean circulation produces latitude-dependent heat flux variations at the ice-ocean boundary. 
        However, the <strong>intermediate-scale, localised convective dynamics</strong> — which may 
        directly control where and how fast the ice melts or grows — have been less explored.
      </p>
      <p style="font-size:13px; color:var(--text-secondary); line-height:1.8; margin-top:10px;">
        Pagnoscin et al. address this gap by coupling a turbulent convective fluid model with a 
        linear freeze-melt approximation for the ice layer. Their key insight: <strong>spatial 
        variability in basal melting/freezing rates can induce measurable ice shell thickness 
        variations</strong> — potentially detectable by JUICE and Europa Clipper.
      </p>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📐</span> Paper's Key Equation: Coupled Heat-Ice Model</div>
        <div class="equation-block" id="eq-boussinesq"></div>
        <div class="equation-block" id="eq-ice-response" style="margin-top:14px;"></div>

        <div class="context-block" style="margin-top:14px;">
          <h4>Model Setup (from paper)</h4>
          <p>
            The authors numerically integrate a 2D Rayleigh-Bénard convection model in the 
            Boussinesq approximation, heated from below and cooled from above. The upper boundary 
            is coupled to a thin ice layer whose local thickness evolves in response to the 
            spatially varying heat flux from the convecting ocean below. Key model choices:
          </p>
          <ul style="margin-top:8px; padding-left:16px; line-height:2;">
            <li>Rayleigh number range: Ra = 10⁶ – 10⁸ (computationally accessible regime that captures the qualitative dynamics)</li>
            <li>Prandtl number: Pr = 7 (appropriate for liquid water)</li>
            <li>Linear ice thickness response: δh/δt ∝ (q - q_critical)</li>
            <li>Periodic lateral boundary conditions</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">📊</span> Key Results (Pagnoscin et al. 2026)</div>
        
        <div style="display:flex; flex-direction:column; gap:14px;">
          <div class="data-item" style="border-left:3px solid var(--accent-primary);">
            <div class="label">Result 1: Intense Thermal Convection</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              Icy moon oceans are dominated by intense thermal convection that generates 
              <strong>spatially heterogeneous heat flux</strong> at the ice-ocean boundary. 
              Turbulent plumes create regions of enhanced heat delivery (hot spots) alternating 
              with regions of reduced flux.
            </p>
          </div>

          <div class="data-item" style="border-left:3px solid var(--accent-warm);">
            <div class="label">Result 2: Differential Melting/Freezing</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              The spatial variability in basal heat flux drives <strong>differential melting and 
              freezing rates</strong> at the ice-ocean interface. Where ocean heat flux exceeds 
              the conductive flux through the ice, the ice melts from below; where it falls short, 
              ice accretes (marine ice formation).
            </p>
          </div>

          <div class="data-item" style="border-left:3px solid var(--accent-gold);">
            <div class="label">Result 3: Ice Shell Thickness Variations</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              The resulting basal topography creates <strong>measurable ice shell thickness 
              variations</strong>. These would produce gravity and altimetry signatures detectable 
              by JUICE (gravity and GALA laser altimeter) and Europa Clipper (G/RS and REASON).
            </p>
          </div>

          <div class="data-item" style="border-left:3px solid var(--accent-green);">
            <div class="label">Result 4: Surface-Interior Coupling</div>
            <p style="font-size:12px; color:var(--text-secondary); line-height:1.7; margin-top:6px;">
              Internal convective processes are <strong>physically coupled with surface 
              dynamics</strong> at intermediate spatial scales. This means surface geological 
              features (chaos terrain, pits, domes) may be direct manifestations of ocean-driven 
              ice shell thickness variations.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🎨</span> Conceptual Figure: Heat Flux & Ice Response</div>
        <div class="canvas-container" style="height:320px;">
          <canvas id="pagnoscin-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Conceptual recreation based on Pagnoscin et al. (2026) results: spatially variable ocean 
          heat flux (bottom) drives differential melting/freezing of the ice base (top), producing 
          ice shell thickness variations.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">💡</span> Implications & Impact</div>
        <div class="context-block" style="margin:0;">
          <h4>Significance for the Field</h4>
          <p>
            <strong>1. Testable predictions for upcoming missions.</strong> The ice thickness 
            variations predicted by this model can be tested by ESA's JUICE (gravity and GALA 
            altimetry) and NASA's Europa Clipper (G/RS + REASON radar). This makes the paper's 
            predictions directly falsifiable.
          </p>
          <p style="margin-top:8px;">
            <strong>2. Bridges scale gap in ocean models.</strong> Previous work focused on either 
            global circulation (O(1000 km)) or micro-scale processes (O(1 m)). Pagnoscin et al. 
            address the intermediate scale (O(10–100 km)) where convective plumes interact 
            with the ice-ocean boundary — the scale most relevant to observable features.
          </p>
          <p style="margin-top:8px;">
            <strong>3. Habitability implications.</strong> Spatial variability in ice thickness 
            affects where the ice is thinnest — and thus where subsurface material (potentially 
            biosignatures) is most accessible to surface sampling. This guides future lander 
            site selection.
          </p>
          <p style="margin-top:8px;">
            <strong>4. Applicable beyond Europa.</strong> The model applies to any icy moon with 
            a convecting subsurface ocean: Enceladus, Ganymede, Titan, Callisto — making it a 
            general framework for ocean-world science.
          </p>
        </div>
        <div style="margin-top:12px;">
          <span class="badge badge-cyan">Hydrodynamics</span>
          <span class="badge badge-purple">Ice Shell</span>
          <span class="badge badge-gold">Habitability</span>
          <span class="badge badge-green">JUICE / Clipper</span>
        </div>
      </div>
    </div>
  `,document.getElementById("eq-boussinesq").innerHTML=`
    <div class="equation-label">Boussinesq Momentum Equation (Convection Model)</div>
    ${Tt.renderToString("\\frac{\\partial \\vec{u}}{\\partial t} + (\\vec{u} \\cdot \\nabla)\\vec{u} = -\\nabla p + \\text{Ra}\\,\\text{Pr}\\,T\\,\\hat{z} + \\text{Pr}\\,\\nabla^2 \\vec{u}",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      Non-dimensionalised Navier-Stokes in the Boussinesq approximation. Ra·Pr·T·ẑ is the 
      buoyancy term driving convection. Pr = ν/κ ≈ 7 for water. The velocity field u 
      determines the local heat flux q = −∂T/∂z + u·T delivered to the ice-ocean boundary.
    </div>
  `,document.getElementById("eq-ice-response").innerHTML=`
    <div class="equation-label">Ice Layer Response (Linear Approximation)</div>
    ${Tt.renderToString("\\frac{\\partial h}{\\partial t} = \\frac{1}{\\rho_{\\text{ice}}\\,L_V} \\left( k_{\\text{ice}}\\,\\frac{T_m - T_s}{h} - q_{\\text{ocean}} \\right)",{displayMode:!0,throwOnError:!1})}
    <div class="equation-explanation">
      h = local ice thickness, q<sub>ocean</sub> = local heat flux from the convecting ocean, 
      k<sub>ice</sub>(T_m − T_s)/h = conductive heat flux through the ice. Where q<sub>ocean</sub> exceeds the conductive 
      flux, h decreases (melting); where it falls short, h increases (freezing). This is the 
      paper's key coupling equation between the ocean and the ice shell.
    </div>
  `,i3()}function i3(){const i=document.getElementById("pagnoscin-canvas");if(!i)return;const e=i.parentElement.getBoundingClientRect();i.width=e.width*2,i.height=320*2,i.style.width=e.width+"px",i.style.height="320px";const t=i.getContext("2d");t.scale(2,2);const n=e.width,r=320;t.fillStyle="#040810",t.fillRect(0,0,n,r);const a=t.createLinearGradient(0,80,0,r);a.addColorStop(0,"#0a3a6b"),a.addColorStop(1,"#0a1a30"),t.fillStyle=a,t.fillRect(0,80,n,r-80);const s=[],o=[];for(let m=0;m<n;m++){const g=.5+.3*Math.sin(m*.025)+.15*Math.sin(m*.067+1)+.1*Math.sin(m*.15+2);s.push(g);const S=40+g*50;o.push(S)}const l=t.createLinearGradient(0,0,0,90);l.addColorStop(0,"#c0dce8"),l.addColorStop(.5,"#80b0c8"),l.addColorStop(1,"#4080a0"),t.fillStyle=l,t.beginPath(),t.moveTo(0,0);for(let m=0;m<n;m++)t.lineTo(m,o[m]);t.lineTo(n,0),t.closePath(),t.fill(),t.beginPath(),t.strokeStyle="rgba(0, 212, 255, 0.6)",t.lineWidth=2;for(let m=0;m<n;m++)m===0?t.moveTo(m,o[m]):t.lineTo(m,o[m]);t.stroke(),[n*.15,n*.35,n*.55,n*.75,n*.9].forEach((m,g)=>{const S=s[Math.round(m)]||.5;t.beginPath(),t.strokeStyle=`rgba(255, ${80+S*100}, 40, ${.15+S*.25})`,t.lineWidth=8+S*15,t.moveTo(m,r-20),t.quadraticCurveTo(m+(Math.random()-.5)*20,r*.5,m,o[Math.round(m)]+10),t.stroke();for(let C=0;C<6;C++){const E=o[Math.round(m)]+15+Math.random()*(r-o[Math.round(m)]-40),D=m+(Math.random()-.5)*(12+S*10);t.beginPath(),t.arc(D,E,1.5+Math.random(),0,Math.PI*2),t.fillStyle=`rgba(255, 150, 60, ${.3+S*.4})`,t.fill()}});const u=15,f=r-u;for(let m=0;m<n;m++){const g=s[m],S=Math.round(255*g),C=Math.round(80*(1-g)),E=Math.round(30*(1-g));t.fillStyle=`rgba(${S}, ${C}, ${E}, 0.8)`,t.fillRect(m,f,1,u)}t.font='11px "JetBrains Mono", monospace',t.fillStyle="rgba(60, 100, 120, 0.9)",t.fillText("ICE SHELL (variable thickness)",10,22),t.fillStyle="rgba(100, 200, 255, 0.7)",t.fillText("OCEAN (convecting)",10,120),t.fillStyle="rgba(255, 200, 100, 0.7)",t.fillText("← Ocean Heat Flux (q_ocean) →",n/2-100,r-3);let h=1/0,p=-1/0,x=0,y=0;o.forEach((m,g)=>{m<h&&(h=m,x=g),m>p&&(p=m,y=g)}),t.font='9px "Inter", sans-serif',t.fillStyle="rgba(100, 255, 150, 0.7)",t.fillText("▼ thin (melting)",y-30,p+14),t.fillStyle="rgba(180, 220, 255, 0.7)",t.fillText("▲ thick (freezing)",x-35,h+14)}function r3(i){const e=[{id:"reason",name:"REASON",fullName:"Radar for Europa Assessment & Sounding: Ocean to Near-surface",icon:"📡",color:"var(--accent-primary)",specs:[{label:"HF Array",value:"9 MHz"},{label:"VHF Array",value:"60 MHz (interferometric)"},{label:"Max Penetration",value:"~30 km"},{label:"Developer",value:"UT Austin (UTIG)"}],science:`REASON will provide the <strong>first direct measurements of Europa's ice shell 
        subsurface structure</strong>. The 9 MHz HF array penetrates deep into the ice crust, searching 
        for the ice-ocean interface, while the 60 MHz VHF array provides high-resolution near-surface 
        sounding and altimetry. As described by Steinbrügge et al. (2026), REASON altimetry contributes 
        to measuring h₂ (tidal shape deformation) and identifying shallow subsurface water bodies.`,connection:`Connects to Pagnoscin et al. (2026): the ice shell thickness variations predicted 
        by differential ocean heat flux would appear as undulations in REASON radar reflections from 
        the ice-ocean interface — providing a direct test of the convection-ice coupling model.`},{id:"ecm",name:"ECM",fullName:"Europa Clipper Magnetometer",icon:"🧲",color:"var(--accent-tertiary)",specs:[{label:"Sensors",value:"3 fluxgate magnetometers"},{label:"Boom Length",value:"8.5 m"},{label:"Sensitivity",value:"< 0.1 nT"},{label:"Positions",value:"8.5m, 6.8m, 5.2m on boom"}],science:`ECM measures the <strong>induced magnetic field</strong> of Europa. Jupiter's time-varying 
        magnetic field drives currents in Europa's conducting saltwater ocean, which generate a secondary 
        field detectable by ECM. The strength and phase of this induced field constrain the ocean's 
        <strong>depth, thickness, and electrical conductivity (salinity)</strong>. The three-sensor 
        gradiometric configuration removes spacecraft magnetic contamination.`,connection:`Ocean salinity directly affects the conductivity measured by ECM. Pagnoscin et al.'s 
        model predicts spatially varying freeze-melt rates — which would create local salinity anomalies 
        (brine rejection during freezing) potentially detectable as spatial variations in the induced field. 
        ECM works with PIMS (Plasma Instrument for Magnetic Sounding) to separate ocean signals from 
        plasma currents in Jupiter's magnetosphere.`},{id:"eis",name:"EIS",fullName:"Europa Imaging System",icon:"📷",color:"var(--accent-gold)",specs:[{label:"Cameras",value:"Wide-Angle + Narrow-Angle"},{label:"Resolution",value:"< 0.5 m (close approach)"},{label:"Purpose",value:"Stereo imaging, shape, geology"}],science:`EIS provides <strong>high-resolution stereo imaging</strong> for global shape modelling. 
        As described by Steinbrügge et al. (2026), limb profile analysis at different tidal phases 
        constrains h₂ — the surface tidal deformation. EIS also maps surface geology: lineae, chaos 
        terrain, and ridges — features that may correlate with ice shell thickness variations predicted 
        by Pagnoscin et al. (2026).`,connection:`Chaos terrain locations can be compared against model predictions of thin-ice regions 
        (where convective ocean heat flux is highest). If chaos features cluster above predicted plume 
        sites, this supports the convection-ice coupling hypothesis.`},{id:"grs",name:"G/RS",fullName:"Gravity / Radio Science",icon:"📻",color:"var(--accent-green)",specs:[{label:"Method",value:"Doppler tracking (X+Ka band)"},{label:"Measures",value:"J₂, C₂₂, k₂, gravity anomalies"}],science:`G/RS determines Europa's gravity field through precision Doppler tracking. 
        Steinbrügge et al. (2026) describe how repeated flyby tracking at different orbital phases 
        yields k₂ — distinguishing a decoupled (ocean-bearing) shell from a frozen-solid body. 
        Higher-degree gravity anomalies can reveal lateral density variations within the ice shell.`,connection:`Ice shell thickness variations (Pagnoscin et al.) produce gravity anomalies: 
        thinner ice (lower density) above upwelling plumes creates negative Bouguer anomalies. 
        G/RS gravity maps can test this prediction.`}];let t="reason";i.innerHTML=`
    <div class="tab-header">
      <h2>Europa Clipper Mission (2030–2034)</h2>
      <p class="tab-subtitle">
        NASA's Europa Clipper will perform ~49 close flybys of Europa (25–100 km altitude), 
        carrying a suite of 9 instruments to investigate the moon's habitability. This tab connects 
        the mission's key instruments to the science described by Steinbrügge et al. (2026) and 
        Pagnoscin et al. (2026).
      </p>
    </div>

    <div class="grid-2" style="margin-bottom:20px;">
      <div class="card">
        <div class="card-title"><span class="icon">🛰️</span> Mission Overview</div>
        <div class="data-grid">
          <div class="data-item">
            <div class="label">Total Flybys</div>
            <div class="value">~49</div>
          </div>
          <div class="data-item">
            <div class="label">Closest Approach</div>
            <div class="value">25<span class="unit">km</span></div>
          </div>
          <div class="data-item">
            <div class="label">Orbit</div>
            <div class="value" style="font-size:14px;">Jupiter orbit</div>
          </div>
          <div class="data-item">
            <div class="label">Prime Mission</div>
            <div class="value" style="font-size:14px;">~4 years</div>
          </div>
        </div>
        <div class="context-block" style="margin-top:14px;">
          <h4>Predictive Science: Testing the Papers</h4>
          <p>
            The two papers cited in this dashboard make predictions that Europa Clipper can test:
          </p>
          <ul style="margin-top:6px; padding-left:16px; font-size:12px; line-height:1.8;">
            <li><strong>Steinbrügge et al.:</strong> k₂ ≈ 0.25 if a global ocean exists</li>
            <li><strong>Steinbrügge et al.:</strong> h₂ ≈ 1.35 → ~30 m tidal amplitude</li>
            <li><strong>Pagnoscin et al.:</strong> Ice shell thickness varies spatially due to ocean convection</li>
            <li><strong>Pagnoscin et al.:</strong> Surface geology correlates with sub-ice plume locations</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🔧</span> Instrument Suite — Click to Explore</div>
        <div id="instrument-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:10px;"></div>
      </div>
    </div>

    <div class="card" id="instrument-detail">
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 Connection: Remote Sensing & Field Induction</div>
      <div class="grid-2">
        <div class="context-block" style="margin:0;">
          <h4>Electromagnetic Induction</h4>
          <p>
            The fundamental physics behind ECM's ocean detection is Faraday's law: a time-varying 
            external magnetic field (Jupiter's rotating dipole) induces currents in any conductor 
            (Europa's salty ocean). These currents produce a secondary field whose amplitude and 
            phase depend on the conductor's geometry and conductivity — encoding the ocean's depth, 
            thickness, and salinity.
          </p>
          <div class="equation-block" id="eq-faraday" style="margin-top:12px;"></div>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Radar Sounding Principle</h4>
          <p>
            REASON operates on the principle of dielectric contrast: when a radar pulse encounters 
            a boundary between materials with different dielectric constants (ice ε ≈ 3.2, water ε ≈ 80), 
            part of the energy is reflected. The two-way travel time of the reflection encodes the 
            depth of the interface.
          </p>
          <div class="equation-block" id="eq-radar" style="margin-top:12px;"></div>
        </div>
      </div>
    </div>
  `;const n=document.getElementById("instrument-grid");e.forEach(a=>{const s=document.createElement("div");s.className=`instrument-card${a.id===t?" active":""}`,s.id=`inst-card-${a.id}`,s.innerHTML=`
      <div style="font-size:20px; margin-bottom:6px;">${a.icon}</div>
      <div class="inst-name">${a.name}</div>
      <div class="inst-desc">${a.fullName}</div>
    `,s.addEventListener("click",()=>{t=a.id,document.querySelectorAll(".instrument-card").forEach(o=>o.classList.remove("active")),s.classList.add("active"),r(a)}),n.appendChild(s)}),r(e[0]),document.getElementById("eq-faraday").innerHTML=`
    <div class="equation-label">Faraday's Law of Induction</div>
    ${Tt.renderToString("\\nabla \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}",{displayMode:!0,throwOnError:!1})}
  `,document.getElementById("eq-radar").innerHTML=`
    <div class="equation-label">Radar Depth from Two-Way Travel Time</div>
    ${Tt.renderToString("d = \\frac{c \\cdot \\Delta t}{2\\sqrt{\\varepsilon_{\\text{ice}}}}",{displayMode:!0,throwOnError:!1})}
  `;function r(a){const s=document.getElementById("instrument-detail");s.innerHTML=`
      <div class="card-title" style="color:${a.color};">
        <span class="icon">${a.icon}</span> ${a.name}: ${a.fullName}
      </div>
      <div class="grid-2">
        <div>
          <h4 style="font-size:13px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-family:var(--font-mono);">Specifications</h4>
          <div style="display:flex; flex-direction:column; gap:8px;">
            ${a.specs.map(o=>`
              <div class="data-item">
                <div class="label">${o.label}</div>
                <div class="value" style="font-size:14px;">${o.value}</div>
              </div>
            `).join("")}
          </div>
        </div>
        <div>
          <h4 style="font-size:13px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:10px; font-family:var(--font-mono);">Science & Paper Connections</h4>
          <p style="font-size:13px; color:var(--text-secondary); line-height:1.8; margin-bottom:12px;">
            ${a.science}
          </p>
          <div class="context-block">
            <h4>Connection to Cited Papers</h4>
            <p>${a.connection}</p>
          </div>
        </div>
      </div>
    `}}function a3(i){i.innerHTML=`
    <div class="tab-header">
      <h2>Clipper Analytics Dashboard</h2>
      <p class="tab-subtitle">
        An integrated analytics view connecting Europa Clipper's planned observations to 
        predictions from Steinbrügge et al. (2026) and Pagnoscin et al. (2026). 
        Each flyby produces complementary datasets that can be cross-correlated to test 
        specific hypotheses about Europa's interior.
      </p>
    </div>

    <div class="grid-3" style="margin-bottom:20px;">
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-primary);">49</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px; font-family:var(--font-mono);">Planned Flybys</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-tertiary);">9</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px; font-family:var(--font-mono);">Science Instruments</div>
      </div>
      <div class="card" style="text-align:center;">
        <div style="font-size:36px; font-family:var(--font-display); font-weight:700; color:var(--accent-gold);">25 km</div>
        <div style="font-size:11px; color:var(--text-muted); text-transform:uppercase; letter-spacing:1.5px; font-family:var(--font-mono);">Minimum Altitude</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">📈</span> Flyby Coverage & Science Accumulation</div>
        <div class="canvas-container" style="height:300px;">
          <canvas id="flyby-timeline"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Projected science return: gravity field precision improves as 1/√N with number of 
          tracked flybys. k₂ and h₂ require measurements at diverse tidal phases.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">🔬</span> Hypothesis Testing Matrix</div>
        <p style="font-size:12px; color:var(--text-secondary); margin-bottom:14px;">
          Mapping paper predictions to testable observations:
        </p>
        <div style="display:flex; flex-direction:column; gap:10px;" id="hypothesis-list">
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="grid-2">
      <div class="card">
        <div class="card-title"><span class="icon">🗺️</span> Spatial Coverage Strategy</div>
        <div class="canvas-container" style="height:280px;">
          <canvas id="coverage-canvas"></canvas>
        </div>
        <p style="font-size:11px; color:var(--text-muted); margin-top:8px;">
          Flyby ground tracks provide heterogeneous spatial coverage. REASON ice thickness 
          measurements along each track can be compared with Pagnoscin et al.'s predicted pattern 
          of convection-driven thickness variations.
        </p>
      </div>

      <div class="card">
        <div class="card-title"><span class="icon">📊</span> Measurement Precision Targets</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${ts("k₂ (Gravity Response)","0.25 ± 0.02","var(--accent-primary)","G/RS Doppler tracking over ~20 tracked flybys at diverse tidal phases. Must distinguish k₂ ≈ 0.25 (ocean) from k₂ ≈ 0.02 (no ocean) — a 10σ detection with target precision.")}
          ${ts("h₂ (Shape Response)","1.35 ± 0.10","var(--accent-tertiary)","EIS limb profiles + REASON altimetry. ~30 m peak-to-peak tidal deformation. Requires repeated altimetry passes at different tidal phases.")}
          ${ts("Ice Shell Thickness","5–30 km (local)","var(--accent-gold)","REASON 9 MHz radar sounding. Max penetration ~30 km. Spatial resolution along-track ~1 km. Each flyby provides one profile.")}
          ${ts("Ocean Conductivity","1–10 S/m","var(--accent-green)","ECM + PIMS induction measurement. Conductivity constrains salinity (Earth ocean: σ ≈ 4 S/m ↔ 35 g/kg NaCl).")}
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🔗</span> Cross-Instrument Synergy: Testing Convection-Ice Coupling</div>
      <div class="canvas-container" style="height:200px;">
        <canvas id="synergy-canvas"></canvas>
      </div>
      <div class="grid-2" style="margin-top:16px;">
        <div class="context-block" style="margin:0;">
          <h4>The Key Test (Pagnoscin et al. 2026)</h4>
          <p>
            If ocean convection drives ice shell thickness variations, then:
          </p>
          <ol style="margin-top:6px; padding-left:16px; font-size:12px; line-height:2;">
            <li>REASON should detect spatial variations in ice-ocean interface depth</li>
            <li>G/RS should measure corresponding gravity anomalies (thinner ice → lower density → negative Bouguer anomaly)</li>
            <li>EIS should map surface geology (chaos terrain) correlating with thin-ice regions</li>
            <li>If all three correlate → strong evidence for convection-ice coupling</li>
          </ol>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>The Key Test (Steinbrügge et al. 2026)</h4>
          <p>
            If a global subsurface ocean exists and decouples the ice shell:
          </p>
          <ol style="margin-top:6px; padding-left:16px; font-size:12px; line-height:2;">
            <li>G/RS should measure k₂ ≈ 0.25 (decoupled shell)</li>
            <li>EIS + REASON should measure h₂ ≈ 1.35 (~30 m surface deformation)</li>
            <li>ECM should detect a secondary induced magnetic field matching ocean conductivity models</li>
            <li>If all three agree → definitive ocean confirmation</li>
          </ol>
        </div>
      </div>
    </div>

    <div class="section-gap"></div>

    <div class="card">
      <div class="card-title"><span class="icon">🎓</span> AST320 — From Theory to Observation</div>
      <div class="grid-3">
        <div class="context-block" style="margin:0;">
          <h4>Inverse Problem</h4>
          <p>
            Geodesy is fundamentally an inverse problem: given surface observables (gravity, shape, 
            magnetic field), infer interior structure. This is the same mathematical framework as 
            stellar structure — where surface luminosity and spectra constrain internal temperature 
            and composition profiles.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Error Propagation</h4>
          <div class="equation-block" id="eq-error" style="margin:8px 0;"></div>
          <p>
            Uncertainty in k₂ propagates to uncertainty in ice shell thickness. This is a direct 
            application of error propagation — a core AST320 skill applied to real planetary data.
          </p>
        </div>
        <div class="context-block" style="margin:0;">
          <h4>Bayesian Inference</h4>
          <div class="equation-block" id="eq-bayes" style="margin:8px 0;"></div>
          <p>
            Each flyby updates our posterior probability for Europa's interior model. The final 
            answer emerges from combining ~49 independent measurements — a textbook application of 
            Bayesian parameter estimation.
          </p>
        </div>
      </div>
    </div>
  `;const e=[{id:"H1",test:"Global ocean exists",instrument:"G/RS + ECM",metric:"k₂ ≈ 0.25, induced B",paper:"Steinbrügge 2026",status:"testable"},{id:"H2",test:"Ice shell thickness varies spatially",instrument:"REASON + G/RS",metric:"Correlated ice depth & gravity",paper:"Pagnoscin 2026",status:"testable"},{id:"H3",test:"Chaos terrain above thin ice",instrument:"EIS + REASON",metric:"Geology-thickness correlation",paper:"Pagnoscin 2026",status:"testable"},{id:"H4",test:"Ocean salinity ≈ Earth-like",instrument:"ECM + PIMS",metric:"σ ≈ 3–5 S/m",paper:"Steinbrügge 2026",status:"testable"},{id:"H5",test:"Tidal deformation ~30 m",instrument:"EIS + REASON",metric:"h₂ ≈ 1.35",paper:"Steinbrügge 2026",status:"testable"}],t=document.getElementById("hypothesis-list");e.forEach(n=>{t.innerHTML+=`
      <div class="data-item" style="border-left:3px solid var(--accent-primary);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <span class="badge badge-cyan">${n.id}</span>
          <span class="badge badge-green">${n.status}</span>
        </div>
        <div style="font-size:13px; font-weight:600; color:var(--text-primary); margin-bottom:4px;">${n.test}</div>
        <div style="font-size:11px; color:var(--text-secondary);">
          <strong>Instrument:</strong> ${n.instrument} · <strong>Metric:</strong> ${n.metric}
        </div>
        <div style="font-size:10px; color:var(--text-muted); margin-top:2px;">Source: ${n.paper}</div>
      </div>
    `}),document.getElementById("eq-error").innerHTML=Tt.renderToString("\\sigma_{d_{\\text{ice}}} = \\left|\\frac{\\partial d}{\\partial k_2}\\right| \\sigma_{k_2}",{displayMode:!0,throwOnError:!1}),document.getElementById("eq-bayes").innerHTML=Tt.renderToString("P(\\text{model}|\\text{data}) \\propto P(\\text{data}|\\text{model})\\,P(\\text{model})",{displayMode:!0,throwOnError:!1}),s3(),o3(),l3()}function ts(i,e,t,n){return`
    <div class="data-item" style="border-left:3px solid ${t};">
      <div style="display:flex; justify-content:space-between; align-items:baseline;">
        <div class="label">${i}</div>
        <span style="font-family:var(--font-mono); font-size:13px; font-weight:600; color:${t};">${e}</span>
      </div>
      <p style="font-size:11px; color:var(--text-secondary); line-height:1.6; margin-top:4px;">${n}</p>
    </div>
  `}function s3(){const i=document.getElementById("flyby-timeline");if(!i)return;const e=i.parentElement.getBoundingClientRect(),t=Math.min(window.devicePixelRatio,2);i.width=e.width*t,i.height=300*t,i.style.width=e.width+"px",i.style.height="300px";const n=i.getContext("2d");n.scale(t,t);const r=e.width,a=300,s={top:30,right:20,bottom:40,left:50};n.fillStyle="#040810",n.fillRect(0,0,r,a);const o=r-s.left-s.right,l=a-s.top-s.bottom;n.strokeStyle="rgba(255,255,255,0.15)",n.lineWidth=1,n.beginPath(),n.moveTo(s.left,s.top),n.lineTo(s.left,a-s.bottom),n.lineTo(r-s.right,a-s.bottom),n.stroke(),n.strokeStyle="rgba(255,255,255,0.05)";for(let p=1;p<=4;p++){const x=s.top+l*p/5;n.beginPath(),n.moveTo(s.left,x),n.lineTo(r-s.right,x),n.stroke()}const c=49,u=[];for(let p=1;p<=c;p++)u.push(.1/Math.sqrt(p/3));const f=u[0];n.beginPath(),n.strokeStyle="rgba(0, 212, 255, 0.8)",n.lineWidth=2;for(let p=0;p<c;p++){const x=s.left+p/(c-1)*o,y=s.top+(1-u[p]/f)*l;p===0?n.moveTo(x,y):n.lineTo(x,y)}n.stroke(),n.lineTo(s.left+o,a-s.bottom),n.lineTo(s.left,a-s.bottom),n.fillStyle="rgba(0, 212, 255, 0.05)",n.fill(),n.fillStyle="rgba(124, 92, 252, 0.2)";for(let p=0;p<c;p++){const x=s.left+p/c*o,y=p/c*l*.6,m=o/c-1;n.fillRect(x,a-s.bottom-y,Math.max(m,1),y)}const h=s.top+(1-.02/f)*l;n.setLineDash([6,4]),n.strokeStyle="rgba(255, 217, 61, 0.5)",n.lineWidth=1,n.beginPath(),n.moveTo(s.left,h),n.lineTo(r-s.right,h),n.stroke(),n.setLineDash([]),n.font='9px "JetBrains Mono", monospace',n.fillStyle="rgba(255, 217, 61, 0.6)",n.fillText("σ(k₂) = 0.02 target",r-s.right-100,h-5),n.font='10px "JetBrains Mono", monospace',n.fillStyle="rgba(0, 212, 255, 0.7)",n.fillText("k₂ precision",s.left+5,s.top+15),n.fillStyle="rgba(124, 92, 252, 0.6)",n.fillText("ice profiles",s.left+5,s.top+28),n.fillStyle="rgba(255,255,255,0.4)",n.font='10px "Inter", sans-serif',n.textAlign="center",n.fillText("Flyby Number",r/2,a-8),n.textAlign="left",n.font='9px "JetBrains Mono", monospace',n.fillStyle="rgba(255,255,255,0.3)",[1,10,20,30,40,49].forEach(p=>{const x=s.left+(p-1)/(c-1)*o;n.fillText(p.toString(),x-4,a-s.bottom+14)})}function o3(){const i=document.getElementById("coverage-canvas");if(!i)return;const e=i.parentElement.getBoundingClientRect(),t=Math.min(window.devicePixelRatio,2);i.width=e.width*t,i.height=280*t,i.style.width=e.width+"px",i.style.height="280px";const n=i.getContext("2d");n.scale(t,t);const r=e.width,a=280;n.fillStyle="#0a1520",n.fillRect(0,0,r,a),n.strokeStyle="rgba(255,255,255,0.06)",n.lineWidth=.5;for(let o=0;o<=6;o++){const l=o/6*a;n.beginPath(),n.moveTo(0,l),n.lineTo(r,l),n.stroke()}for(let o=0;o<=12;o++){const l=o/12*r;n.beginPath(),n.moveTo(l,0),n.lineTo(l,a),n.stroke()}n.font='8px "JetBrains Mono", monospace',n.fillStyle="rgba(255,255,255,0.2)",n.fillText("90°N",3,12),n.fillText("0°",3,a/2+4),n.fillText("90°S",3,a-4),n.fillText("0°",r/2-4,a-4),n.fillText("180°W",3,a-4),n.fillText("180°E",r-30,a-4),n.strokeStyle="rgba(140, 110, 70, 0.1)",n.lineWidth=1;for(let o=0;o<30;o++){const l=Math.random()*r,c=Math.random()*a,u=Math.random()*Math.PI,f=30+Math.random()*80;n.beginPath(),n.moveTo(l,c),n.lineTo(l+Math.cos(u)*f,c+Math.sin(u)*f),n.stroke()}const s=["rgba(0, 212, 255, 0.4)","rgba(124, 92, 252, 0.4)","rgba(255, 217, 61, 0.35)","rgba(107, 203, 119, 0.35)"];for(let o=0;o<15;o++){const l=Math.random()*r,c=a*.2+Math.random()*a*.6,u=(Math.random()-.5)*.8;n.beginPath(),n.strokeStyle=s[o%s.length],n.lineWidth=2;for(let f=0;f<r;f+=2){const h=c+u*(f-l)+Math.sin(f*.03+o)*15;f===0?n.moveTo(f,h):n.lineTo(f,h)}n.stroke()}n.font='10px "JetBrains Mono", monospace',n.fillStyle="rgba(255,255,255,0.4)",n.textAlign="center",n.fillText("Europa Surface — Equirectangular Projection",r/2,16),n.textAlign="left",n.fillStyle="rgba(0, 212, 255, 0.5)",n.fillText("— ground tracks (15 shown)",r-170,16)}function l3(){const i=document.getElementById("synergy-canvas");if(!i)return;const e=i.parentElement.getBoundingClientRect(),t=Math.min(window.devicePixelRatio,2);i.width=e.width*t,i.height=200*t,i.style.width=e.width+"px",i.style.height="200px";const n=i.getContext("2d");n.scale(t,t);const r=e.width,a=200;n.fillStyle="#040810",n.fillRect(0,0,r,a);const s=[{x:r*.12,items:["G/RS","EIS","REASON","ECM"],colors:["#6bcb77","#ffd93d","#00d4ff","#7c5cfc"]},{x:r*.42,items:["k₂, gravity","h₂, shape","ice depth","induced B"],colors:["#6bcb77","#ffd93d","#00d4ff","#7c5cfc"]},{x:r*.75,items:["Ocean confirmed","Ice thickness map","Salinity"],colors:["#00d4ff","#ff6b6b","#ffd93d"]}];n.font='10px "JetBrains Mono", monospace',n.textAlign="center";const o=["INSTRUMENTS","MEASUREMENTS","SCIENCE OUTCOMES"];s.forEach((u,f)=>{n.fillStyle="rgba(255,255,255,0.3)",n.fillText(o[f],u.x,18)}),s.forEach((u,f)=>{u.items.forEach((h,p)=>{const x=45+p*40,y=f===2?110:90,m=26;n.fillStyle=`${u.colors[p]}15`,n.strokeStyle=`${u.colors[p]}40`,n.lineWidth=1,c3(n,u.x-y/2,x,y,m,6),n.fill(),n.stroke(),n.fillStyle=u.colors[p],n.font='10px "Inter", sans-serif',n.textAlign="center",n.fillText(h,u.x,x+17)})}),[[0,0],[1,1],[2,2],[3,3]].forEach(([u,f])=>{Tu(n,s[0].x+45,45+u*40+13,s[1].x-45,45+f*40+13,s[0].colors[u])}),[[0,0],[1,0],[2,1],[3,2],[1,1]].forEach(([u,f])=>{Tu(n,s[1].x+45,45+u*40+13,s[2].x-55,45+f*40+13,s[1].colors[u])}),n.textAlign="left"}function Tu(i,e,t,n,r,a){i.beginPath(),i.moveTo(e,t),i.bezierCurveTo(e+30,t,n-30,r,n,r),i.strokeStyle=`${a}30`,i.lineWidth=1.5,i.stroke()}function c3(i,e,t,n,r,a){i.beginPath(),i.moveTo(e+a,t),i.lineTo(e+n-a,t),i.quadraticCurveTo(e+n,t,e+n,t+a),i.lineTo(e+n,t+r-a),i.quadraticCurveTo(e+n,t+r,e+n-a,t+r),i.lineTo(e+a,t+r),i.quadraticCurveTo(e,t+r,e,t+r-a),i.lineTo(e,t+a),i.quadraticCurveTo(e,t,e+a,t),i.closePath()}const ad={overview:{render:q4,label:"Overview & Constants",icon:"🌍",section:"icy"},jupiter:{render:J4,label:"Jupiter System & Magneto.",icon:"🪐",section:"icy"},ocean:{render:X4,label:"Ocean Convection Theory",icon:"🌊",section:"icy"},iceshell:{render:$4,label:"Ice Shell Dynamics",icon:"❄️",section:"icy"},mushy:{render:j4,label:"Ice-Ocean Interface",icon:"🔬",section:"icy"},geodetic:{render:t3,label:"Steinbrügge et al. 2026",icon:"📡",section:"europa"},convection:{render:n3,label:"Pagnoscin et al. 2026",icon:"🔥",section:"europa"},clipper:{render:r3,label:"Europa Clipper Mission",icon:"🛰️",section:"europa"},analytics:{render:a3,label:"Clipper Analytics",icon:"📊",section:"europa"}};let la="overview",Tr=null,ns=null;function u3(){const i=document.getElementById("app"),e=pd(ad,la);i.appendChild(e),Tr=document.createElement("main"),Tr.className="main-content",Tr.id="main-content",i.appendChild(Tr);const t=rp();i.appendChild(t),sd()}function h3(i){i!==la&&(la=i,d3(),sd())}function d3(){document.querySelectorAll(".nav-item").forEach(i=>{i.classList.toggle("active",i.dataset.tab===la)})}function sd(){ns&&(ns(),ns=null),Tr.innerHTML="";const i=ad[la];if(i){const e=i.render(Tr);typeof e=="function"&&(ns=e)}}window.__switchTab=h3;window.__openGlossary=()=>{var i;(i=document.getElementById("glossary-modal"))==null||i.classList.add("open")};document.addEventListener("DOMContentLoaded",u3);
