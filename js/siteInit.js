import{a as D,c as G,d as Be,e as De,f as Ue,g as je,h as ze,i as Ge,k as ee}from"./chunk-M3KK2775.js";import{$ as Re,A as ge,B as E,C as N,D as P,E as ve,F as B,G as K,H as Q,I as we,J as ye,M as Ee,N as be,O as Le,P as Ce,Q as Se,R as Te,S as Ae,T as xe,U as He,V as ke,W as _e,X as Ie,Y as qe,Z as Oe,_ as Me,a as f,aa as Ne,ba as Pe,c as x,ca as p,da as b,e as H,f as ue,j as q,k as me,l as h,m as V,n as O,o as M,p as he,q as fe,r as R,s as j,t as pe,u as S,v as w,w as z,x as T,y as J,z as m}from"./chunk-O362YD22.js";import"./chunk-IUIL5QVI.js";import{c as u}from"./chunk-MHRSD4DB.js";u();u();u();me();var k=(e,t)=>{m.hasClass("on")?(m.removeClass("on"),T.removeClass("close"),t?m.style="":p(m,"slideRightOut")):t?m.style="":p(m,"slideRightIn",()=>{m.addClass("on"),T.addClass("close")})},Fe=()=>{let e=m.querySelector(".inner");m.querySelector(".tab")&&e.removeChild(m.querySelector(".tab"));let t=document.createElement("ul"),o="active";t.className="tab",["contents","related","overview"].forEach(s=>{let n=m.querySelector(".panel."+s);if(n.innerHTML.trim().length<1){s==="contents"&&q(B,"none");return}s==="contents"&&q(B,"");let i=document.createElement("li"),c=document.createElement("span"),r=document.createTextNode(n.getAttribute("data-title"));c.appendChild(r),i.appendChild(c),i.addClass(s+" item"),o?(n.addClass(o),i.addClass(o)):n.removeClass("active"),i.addEventListener("click",a=>{let l=a.currentTarget;l.hasClass("active")||(m.find(".tab .item").forEach(d=>{d.removeClass("active")}),m.find(".panel").forEach(d=>{d.removeClass("active")}),m.querySelector(".panel."+l.className.replace(" item","")).addClass("active"),l.addClass("active"))}),t.appendChild(i),o=""}),t.childNodes.length>1?(e.insertBefore(t,e.childNodes[0]),m.querySelector(".panels").style.paddingTop=""):m.querySelector(".panels").style.paddingTop=".625rem"},We=()=>{let e=r=>{let a=t[r];if(!a||a.hasClass("current"))return;f.each(".toc .active",d=>{d&&d.removeClass("active current")}),o.forEach(d=>{d&&d.removeClass("active")}),a.addClass("active current"),o[r]&&o[r].addClass("active");let l=a.parentNode;for(;!l.matches(".contents");){if(l.matches("li")){l.addClass("active");let d=document.querySelector(decodeURIComponent(l.querySelector("a.toc-link").getAttribute("href")));d&&d.addClass("active")}l=l.parentNode}getComputedStyle(m).display!=="none"&&n.hasClass("active")&&b(n,a.offsetTop-n.offsetHeight/4)},t=f.all(".contents li");if(t.length<1)return;let o=[...t],s=null;o=o.map((r,a)=>{let l=r.querySelector("a.toc-link"),d=document.querySelector(decodeURI(l.getAttribute("href")));if(!d)return null;let U=d.querySelector("a.anchor"),I=C=>{C.preventDefault();let ft=document.querySelector(decodeURI(C.currentTarget.getAttribute("href")));s=a,b(ft,null,()=>{e(a),s=null})};return l.addEventListener("click",I),U&&U.addEventListener("click",C=>{I(C),De(h.hostname+"/"+LOCAL.path+C.currentTarget.getAttribute("href"))}),d});let n=m.querySelector(".contents.panel"),i=r=>{let a=0,l=r[a];if(l.boundingClientRect.top>0)return a=o.indexOf(l.target),a===0?0:a-1;for(;a<r.length;a++)if(r[a].boundingClientRect.top<=0)l=r[a];else return o.indexOf(l.target);return o.indexOf(l.target)};(()=>{let r=new IntersectionObserver(a=>{let l=i(a)+(M<0?1:0);s===null&&e(l)},{rootMargin:"0px 0px -100% 0px",threshold:0});o.forEach(a=>{a&&r.observe(a)})})()},te=()=>{b(0)},Ye=()=>{b(parseInt(String(H(pe))))},$e=()=>{b(document.getElementById("comments"))},Xe=()=>{f.each(".menu .item:not(.title)",e=>{let t=e.querySelector("a[href]"),o=e.parentNode.parentNode;if(!t)return;let s=t.pathname===location.pathname||t.pathname===location.pathname.replace("index.html",""),n=!h.root.startsWith(t.pathname)&&location.pathname.startsWith(t.pathname),i=!t.onclick&&t.hostname===location.hostname&&(s||n);e.toggleClass("active",i),e.parentNode.querySelector(".active")&&o.hasClass("dropdown")?o.removeClass("active").addClass("expand"):o.removeClass("expand")})};u();var v={timer:void 0,lock:!1,show(){clearTimeout(this.timer),document.body.removeClass("loaded"),S.setAttribute("style","display:block"),v.lock=!1},hide(e){h.loader.start||(e=-1),this.timer=setTimeout(this.vanish,e||3e3)},vanish(){v.lock||(h.loader.start&&p(S,0),document.body.addClass("loaded"),v.lock=!0)}};function oe(){f.each(".overview .menu > .item",t=>{w.querySelector(".menu").appendChild(t.cloneNode(!0))}),S.addEventListener("click",v.vanish),T.addEventListener("click",k),document.querySelector(".dimmer").addEventListener("click",k),J.querySelector(".down").addEventListener("click",Ye),J.querySelector(".up").addEventListener("click",te),E||Ne(x(z,"div",{id:"tool",innerHTML:'<div class="item player"></div><div class="item contents"><i class="ic i-list-ol"></i></div><div class="item chat"><i class="ic i-comments"></i></div><div class="item back-to-top"><i class="ic i-arrow-up"></i><span>0%</span></div>'})),qe(E.querySelector(".player")),Oe(E.querySelector(".back-to-top")),Me(E.querySelector(".chat")),Re(E.querySelector(".contents")),P.addEventListener("click",te),ve.addEventListener("click",$e),B.addEventListener("click",k),je(N),document.querySelector("main").addEventListener("click",()=>{N.player.mini()}),(()=>{new IntersectionObserver(([t])=>{t.isIntersecting?(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.remove("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.remove("stop-animation")})):(document.querySelectorAll(".parallax>use").forEach(o=>{o.classList.add("stop-animation")}),document.querySelectorAll("#imgs .item").forEach(o=>{o.classList.add("stop-animation")}))},{root:null,threshold:.2}).observe(document.getElementById("waves")),new IntersectionObserver(([t])=>{t.isIntersecting?document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.remove("stop-animation")}):document.querySelectorAll(".with-love>i").forEach(o=>{o.classList.add("stop-animation")})},{root:null,threshold:.2}).observe(document.querySelector(".with-love"))})()}u();u();var Ze=()=>{if(!document.querySelector(".index.wrap"))return;let e=new IntersectionObserver(t=>{t.forEach(o=>{o.target.hasClass("show")?e.unobserve(o.target):(o.isIntersecting||o.intersectionRatio>0)&&(o.target.addClass("show"),e.unobserve(o.target))})},{root:null,threshold:[.3]});f.each(".index.wrap article.item, .index.wrap section.item",t=>{e.observe(t)}),document.querySelector(".index.wrap .item:first-child").addClass("show"),f.each(".cards .item",t=>{["mouseenter","touchstart"].forEach(o=>{t.addEventListener(o,()=>{let s=document.querySelector(".cards .item.active");s&&s.removeClass("active"),t.addClass("active")},{passive:!0})}),["mouseleave"].forEach(o=>{t.addEventListener(o,()=>{t.removeClass("active")},{passive:!0})})})};u();u();var y=e=>{let t=document.querySelector(".theme .ic");e==="dark"?(j.setAttribute("data-theme",e),t.removeClass("i-sun"),t.addClass("i-moon")):(j.removeAttribute("data-theme"),t.removeClass("i-moon"),t.addClass("i-sun"))},Ve=()=>{h.auto_dark.enable&&(new Date().getHours()>=h.auto_dark.start||new Date().getHours()<=h.auto_dark.end?y("dark"):y())},se=e=>{j.getAttribute("data-theme")==="dark"&&(e="#222"),document.querySelector('meta[name="theme-color"]').setAttribute("content",e)},Je=()=>{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{t.matches?y("dark"):y()});let e=D.get("theme");e?y(e):h.darkmode&&y("dark")};var pt=document.getElementById("waves"),F=()=>{be(H(w)),Le(H(z)),Ce(Q+H(pt)),ye!==window.innerWidth&&k(null,1),Se(window.innerHeight),Te(window.innerWidth)},Ke=()=>{let e=window.innerHeight,t=document.querySelector("main > .inner").offsetHeight,o=t>e?t-e:document.body.scrollHeight-e,s=window.scrollY>Q,n=window.scrollY>0;s?se("#FFF"):se("#222"),w.toggleClass("show",s),E.toggleClass("affix",n),ge.toggleClass("affix",n),m.toggleClass("affix",window.scrollY>we&&document.body.offsetWidth>=991),typeof O.y>"u"&&(O.y=window.scrollY),Ae(O.y-window.scrollY),M<0?(w.removeClass("up"),w.toggleClass("down",s)):M>0&&(w.removeClass("down"),w.toggleClass("up",s)),O.y=window.scrollY;let i=Math.round(Math.min(100*window.scrollY/o,100))+"%";P.querySelector("span").innerText!==i&&(P.querySelector("span").innerText=i),(document.getElementById("sidebar").hasClass("affix")||document.getElementById("sidebar").hasClass("on"))&&ue(document.querySelector(".percent"),i)},Qe=()=>{let e=document.querySelector('[rel="icon"]');document.addEventListener("visibilitychange",()=>{switch(document.visibilityState){case"hidden":e.setAttribute("href",V+h.favicon.hidden),document.title=LOCAL.favicon.hide,h.loader.switch&&v.show(),clearTimeout(fe);break;case"visible":e.setAttribute("href",V+h.favicon.normal),document.title=LOCAL.favicon.show,h.loader.switch&&v.hide(1e3),xe(setTimeout(()=>{document.title=he},2e3));break}},{passive:!0})};u();u();u();var et=32,tt="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",ot=typeof window>"u",ne=!ot&&"loading"in HTMLImageElement.prototype,re=!ot&&(!("onscroll"in window)||/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent));function st(e,t=document){return typeof e=="string"?[...t.querySelectorAll(e)]:e instanceof Element?[e]:[...e]}function nt(e,t){let o;return function(...s){o&&clearTimeout(o),o=setTimeout(()=>{o=void 0,e(...s)},t)}}var gt=Math.PI,lo=gt*2;function ce(e='img[loading="lazy"]',{hash:t=!0,hashType:o="blurhash",placeholderSize:s=et,updateSizesOnResize:n=!1,onImageLoad:i}={}){let c=new Set;for(let r of st(e)){let a=ae(r,{updateOnResize:n});if(n&&a&&c.add(a),!r.dataset.src&&!r.dataset.srcset)continue;if(re||!ne){rt(r),$(r),Y(r);continue}if(r.src||(r.src=tt),r.complete&&r.naturalWidth>0){ie(r,i);continue}let l=()=>ie(r,i);r.addEventListener("load",l,{once:!0}),c.add(()=>r.removeEventListener("load",l))}return()=>{for(let r of c)r();c.clear()}}function ie(e,t){if(e.parentElement?.tagName.toLowerCase()==="picture"){rt(e),$(e),Y(e),t?.(e);return}let s=new Image,{srcset:n,src:i,sizes:c}=e.dataset;if(c==="auto"){let r=it(e);r&&(s.sizes=`${r}px`)}else e.sizes&&(s.sizes=e.sizes);n&&(s.srcset=n),i&&(s.src=i),s.addEventListener("load",()=>{$(e),Y(e),t?.(e)},{once:!0})}var W=new WeakMap;function ae(e,t){if(e.dataset.sizes!=="auto")return;let o=it(e);if(o&&(e.sizes=`${o}px`),e.parentElement?.tagName.toLowerCase()==="picture"&&!t?.skipChildren&&[...e.parentElement.getElementsByTagName("source")].forEach(s=>ae(s,{skipChildren:!0})),t?.updateOnResize){if(!W.has(e)){let s=nt(()=>ae(e),500),n=new ResizeObserver(s);W.set(e,n),n.observe(e)}return()=>{let s=W.get(e);s&&(s.disconnect(),W.delete(e))}}}function Y(e){e.dataset.src&&(e.src=e.dataset.src,e.removeAttribute("data-src"))}function $(e){e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset"))}function rt(e){let t=e.parentElement;t?.tagName.toLowerCase()==="picture"&&([...t.querySelectorAll("source[data-srcset]")].forEach($),[...t.querySelectorAll("source[data-src]")].forEach(Y))}function it(e){return e instanceof HTMLSourceElement?e.parentElement?.getElementsByTagName("img")[0]?.offsetWidth:e.offsetWidth}var at=()=>{G(),m.hasClass("on")&&p(m,0,()=>{m.removeClass("on"),T.removeClass("close")});let e=document.getElementById("main");e.innerHTML="",e.appendChild(S.lastChild.cloneNode(!0)),b(0)},le=async e=>{He(0),ke(window.location.href),ee("katex"),await import("./copy-tex-N75HKMG4.js"),ee("mermaid");let t=new IntersectionObserver(function(s,n){s.forEach(i=>{if(i.isIntersecting){let c=i.target;c.style.backgroundImage=`url("${c.getAttribute("data-background-image")}")`,c.removeAttribute("data-background-image"),n.unobserve(c)}})},{root:null,threshold:.2});document.querySelectorAll("[data-background-image]").forEach(s=>{t.observe(s)}),e!==1&&f.each("script[data-pjax]",Ge),Ie(document.title),F(),Xe(),Fe(),We(),import("./post-RN3D5PK5.js").then(({postBeauty:s})=>{s()});let o=document.getElementById("copyright");if(o){let s=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&s.disconnect()})},{root:null,threshold:.2});s.observe(o)}ce(),Ue(),N.player.load(LOCAL.audio||h.audio||{}),v.hide(100),setTimeout(()=>{Be()},500),Ze()};u();function A(e,t,o){return e instanceof HTMLCollection||e instanceof NodeList||e instanceof Array?Array.prototype.forEach.call(e,t,o):t.call(o,e,0,[e])}var ut=(e,t)=>{e=typeof e=="string"?e.split(" "):e,e.forEach(t)};function de(e,t,o,s){ut(t,n=>{A(e,i=>{i.addEventListener(n,o,s)})})}function _(e,t,o={}){ut(t,s=>{let n=new CustomEvent(s,{bubbles:!0,cancelable:!0,...o});A(e,i=>{i.dispatchEvent(n)})})}function ct(e){let t=e.text||e.textContent||e.innerHTML||"",o=e.src||"",s=e.parentNode||document.querySelector("head")||document.documentElement,n=document.createElement("script");return t.match("document.write")?!1:(n.type="text/javascript",n.id=e.id,o!==""&&(n.src=o,n.async=!1),t!==""&&n.appendChild(document.createTextNode(t)),s.appendChild(n),(s instanceof HTMLHeadElement||s instanceof HTMLBodyElement)&&s.contains(n)&&s.removeChild(n),!0)}function vt(e){e.tagName.toLowerCase()==="script"&&ct(e),A(e.querySelectorAll("script"),t=>{let o=t;(!o.type||o.type.toLowerCase()==="text/javascript")&&(o.parentNode&&o.parentNode.removeChild(o),ct(o))})}function wt(e,t,o,s=document){e.forEach(n=>{A(s.querySelectorAll(n),t,o)})}var X=(()=>{let e=0;return()=>`pjax${new Date().getTime()}_${e++}`})();function mt(e,t){e.outerHTML=t.outerHTML,this.onSwitch()}function yt(e,t){e.innerHTML=t.innerHTML,t.className===""?e.removeAttribute("class"):e.className=t.className,this.onSwitch()}function lt(e,t){if(e.innerHTML=t.innerHTML,t.hasAttributes()){let o=t.attributes;for(let s=0;s<o.length;s++)e.attributes.setNamedItem(o[s].cloneNode())}this.onSwitch()}function Et({elements:e="a[href]",selectors:t=["title",".js-Pjax"],switches:o={},switchesOptions:s={},history:n=!0,scrollTo:i=0,scrollRestoration:c=!0,cacheBust:r=!0,timeout:a=0,currentUrlFullReload:l=!1}={}){let d={elements:e,selectors:t,switches:o,switchesOptions:s,history:n,scrollTo:i,scrollRestoration:c,cacheBust:r,timeout:a,currentUrlFullReload:l};return d.switches.head||(d.switches.head=lt),d.switches.body||(d.switches.body=lt),d}var Z="data-pjax-state";function dt(e,t){if(t.defaultPrevented||t.returnValue===!1)return;let o={...this.options},s=bt(e,t);if(s){e.setAttribute(Z,s);return}if(t.preventDefault(),this.options.currentUrlFullReload&&e.href===window.location.href.split("#")[0]){e.setAttribute(Z,"reload"),this.reload();return}e.setAttribute(Z,"load"),o.triggerElement=e,this.loadUrl(e.href,o)}function bt(e,t){return t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey?"modifier":e.protocol!==window.location.protocol||e.host!==window.location.host?"external":e.hash&&e.href.replace(e.hash,"")===window.location.href.replace(location.hash,"")?"anchor":e.href===window.location.href.split("#")[0]+"#"?"anchor-empty":null}function Lt(e){e.setAttribute(Z,""),de(e,"click",t=>dt.call(this,e,t)),de(e,"keyup",t=>{let o=t;o.keyCode===13&&dt.call(this,e,o)})}function Ct(e,t,o,s){if(s={...s||this.options},s.request=t,e===!1){_(document,"pjax:complete pjax:error",s);return}let n=window.history.state||{};window.history.replaceState({url:n.url||window.location.href,title:n.title||document.title,uid:n.uid||X(),scrollPos:[document.documentElement.scrollLeft||document.body.scrollLeft,document.documentElement.scrollTop||document.body.scrollTop]},document.title,window.location.href);let i=o;t.responseURL?o!==t.responseURL&&(o=t.responseURL):t.getResponseHeader("X-PJAX-URL")?o=t.getResponseHeader("X-PJAX-URL"):t.getResponseHeader("X-XHR-Redirected-To")&&(o=t.getResponseHeader("X-XHR-Redirected-To"));let c=document.createElement("a");c.href=i;let r=c.hash;c.href=o,r&&!c.hash&&(c.hash=r,o=c.href),this.state.href=o,this.state.options=s;try{this.loadContent(e,s)}catch(a){return _(document,"pjax:error",s),console.error("Pjax switch fail: ",a),this.latestChance(o)}}function St(e){switch(e.tagName.toLowerCase()){case"a":e.hasAttribute("data-pjax-state")||this.attachLink(e);break;default:throw new Error("theme-shokax-pjax can only be applied on <a>")}}function Tt(e,t,o){let s=new RegExp("([?&])"+t+"=.*?(&|$)","i"),n=e.indexOf("?")!==-1?"&":"?";return e.match(s)?e.replace(s,"$1"+t+"="+o+"$2"):e+n+t+"="+o}function At(e,t={},o){let s=t.requestOptions||{},n=(s.requestMethod||"GET").toUpperCase(),i=s.requestParams||null,c=null,r=new XMLHttpRequest,a=t.timeout;if(r.onreadystatechange=()=>{r.readyState===4&&(r.status===200?o(r.responseText,r,e,t):r.status!==0&&o(null,r,e,t))},r.onerror=l=>{console.error(l),o(null,r,e,t)},r.ontimeout=()=>{o(null,r,e,t)},i&&i.length){let l=i.map(d=>d.name+"="+d.value).join("&");switch(n){case"GET":e=e.split("?")[0],e+="?"+l;break;case"POST":c=l;break}}return t.cacheBust&&(e=Tt(e,"t",Date.now())),r.open(n,e,!0),r.timeout=a,r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.setRequestHeader("X-PJAX","true"),r.setRequestHeader("X-PJAX-Selectors",JSON.stringify(t.selectors)),r.send(c),r}function xt(e,t,o,s,n,i){let c=[];o.forEach(r=>{let a=s.querySelectorAll(r),l=n.querySelectorAll(r);if(a.length!==l.length)throw new Error(`DOM doesn't look the same on new loaded page: '${r}' - new ${a.length}, old ${l.length}`);A(a,(d,U)=>{let I=l[U],C=e[r]?e[r].bind(this,I,d,i,t[r]):mt.bind(this,I,d,i);c.push(C)},this)},this),this.state.numPendingSwitches=c.length,c.forEach(r=>{r()})}function Ht(e,t,o){for(let s of t){let n=e.querySelectorAll(s);for(let i=0;i<n.length;i++)if(n[i].contains(o))return!0}return!1}var L=class{constructor(t){this.state={numPendingSwitches:0,href:null,options:null},this.options=Et(t),this.options.scrollRestoration&&"scrollRestoration"in history&&(history.scrollRestoration="manual"),this.maxUid=this.lastUid=X(),this.parseDOM(document),de(window,"popstate",o=>{let s=o;if(s.state){let n={...this.options};n.url=s.state.url,n.title=s.state.title,n.history=!1,n.scrollPos=s.state.scrollPos,s.state.uid<this.lastUid?n.backward=!0:n.forward=!0,this.lastUid=s.state.uid,this.loadUrl(s.state.url,n)}})}getElements(t){return t.querySelectorAll(this.options.elements)}parseDOM(t){A(this.getElements(t),St,this)}refresh(t){this.parseDOM(t||document)}reload(){window.location.reload()}forEachSelectors(t,o,s){return wt.bind(this)(this.options.selectors,t,o,s)}switchSelectors(t,o,s,n){return xt.bind(this)(this.options.switches,this.options.switchesOptions,t,o,s,n)}latestChance(t){window.location=t}onSwitch(){_(window,"resize scroll"),this.state.numPendingSwitches--,this.state.numPendingSwitches===0&&this.afterAllSwitches()}loadContent(t,o){if(typeof t!="string"){_(document,"pjax:complete pjax:error",o);return}let s=document.implementation.createHTMLDocument("pjax"),n=/<html[^>]+>/gi,i=/\s?[a-z:]+(?:=['"][^'">]+['"])*/gi,c=t.match(n);if(c&&c.length&&(c=c[0].match(i),c.length&&(c.shift(),c.forEach(r=>{let a=r.trim().split("=");a.length===1?s.documentElement.setAttribute(a[0],"true"):s.documentElement.setAttribute(a[0],a[1].slice(1,-1))}))),s.documentElement.innerHTML=t,document.activeElement&&Ht(document,this.options.selectors,document.activeElement))try{document.activeElement.blur()}catch{}this.switchSelectors(this.options.selectors,s,document,o)}loadUrl(t,o){o=typeof o=="object"?{...this.options,...o}:{...this.options},this.abortRequest(this.request),_(document,"pjax:send",o),this.request=this.doRequest(t,o,this.handleResponse.bind(this))}afterAllSwitches(){var t,o,s;this.options.selectors.forEach(i=>{A(document.querySelectorAll(i),c=>{vt(c)})});let n=this.state;if(!((t=n.options)===null||t===void 0)&&t.history&&(window.history.state||(this.lastUid=this.maxUid=X(),window.history.replaceState({url:window.location.href,title:document.title,uid:this.maxUid,scrollPos:[0,0]},document.title)),this.lastUid=this.maxUid=X(),window.history.pushState({url:n.href,title:n.options.title,uid:this.maxUid,scrollPos:[0,0]},n.options.title,n.href)),this.forEachSelectors(i=>{this.parseDOM(i)},this),_(document,"pjax:complete pjax:success",n.options),!((o=n.options)===null||o===void 0)&&o.history){let i=document.createElement("a");if(i.href=this.state.href,i.hash){let c=i.hash.slice(1);c=decodeURIComponent(c);let r=0,a=document.getElementById(c)||document.getElementsByName(c)[0];if(a&&a.offsetParent)do r+=a.offsetTop,a=a.offsetParent;while(a);window.scrollTo(0,r)}else n.options.scrollTo!==!1&&(Array.isArray(n.options.scrollTo)?window.scrollTo(n.options.scrollTo[0],n.options.scrollTo[1]):window.scrollTo(0,n.options.scrollTo))}else!((s=n.options)===null||s===void 0)&&s.scrollRestoration&&n.options.scrollPos&&window.scrollTo(n.options.scrollPos[0],n.options.scrollPos[1]);this.state={numPendingSwitches:0,href:null,options:null}}abortRequest(t){t&&t.readyState<4&&(t.onreadystatechange=()=>{},t.abort())}};L.prototype.attachLink=Lt;L.prototype.doRequest=At;L.prototype.handleResponse=Ct;L.switches={innerHTML:yt,outerHTML:mt};u();function ht(){function e(){let t,o=document.querySelector(".theme").querySelector(".ic"),s=x(R,"div",{id:"neko",innerHTML:'<div class="planet"><div class="sun"></div><div class="moon"></div></div><div class="body"><div class="face"><section class="eyes left"><span class="pupil"></span></section><section class="eyes right"><span class="pupil"></span></section><span class="nose"></span></div></div>'}),n=()=>{p(s,{delay:2500,opacity:0},()=>{R.removeChild(s)})};o.hasClass("i-sun")?t=()=>{s.addClass("dark"),y("dark"),D.set("theme","dark"),n()}:(s.addClass("dark"),t=()=>{s.removeClass("dark"),y(),D.set("theme","light"),n()}),p(s,1,()=>{setTimeout(t,210)},()=>{q(s,"block")})}document.getElementById("rightNav").querySelector(".theme .ic").addEventListener("click",e)}var kt=async()=>{ht(),oe(),_e(new L({selectors:["head title",".languages",".twikoo",".pjax",".leancloud-recent-comment","script[data-config]"],cacheBust:!1})),h.quicklink.ignores=LOCAL.ignores,import("./quicklink-XVK2PNAK.js").then(({listen:e})=>{e(h.quicklink)}),Ve(),Qe(),Je(),document.querySelector("li.item.search > i").addEventListener("click",()=>{h.search!==null&&(K||Pe(x(R,"div",{id:"search",innerHTML:'<div class="inner"><div class="header"><span class="icon"><i class="ic i-search"></i></span><div class="search-input-container"></div><span class="close-btn"><i class="ic i-times-circle"></i></span></div><div class="results"><div class="inner"><div id="search-stats"></div><div id="search-hits"></div><div id="search-pagination"></div></div></div></div>'})),import("./search-WY4LYKKC.js").then(({algoliaSearch:e})=>{e(Ee)}),f.each(".search",e=>{e.addEventListener("click",()=>{document.body.style.overflow="hidden",p(K,"shrinkIn",()=>{document.querySelector(".search-input").focus()})})}))},{once:!0,capture:!0}),import("./index.esm-5RL62T2G.js").then(e=>{e.default(h.fireworks)}),window.addEventListener("scroll",Ke,{passive:!0}),window.addEventListener("resize",F,{passive:!0}),window.addEventListener("pjax:send",at,{passive:!0}),window.addEventListener("pjax:success",le,{passive:!0}),window.addEventListener("beforeunload",()=>{G()}),await le(1)};ze();window.addEventListener("DOMContentLoaded",kt,{passive:!0});console.log("%c Theme.ShokaX v"+h.version+" %c https://github.com/theme-shoka-x/hexo-theme-shokaX ","color: white; background: #e9546b; padding:5px 0;","padding:4px;border:1px solid #e9546b;");
/*! For license information please see siteInit.js.LEGAL.txt */
