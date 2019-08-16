!function(t,e){"function"==typeof define&&define.amd?define(e):"undefined"!=typeof exports?module.exports=e():e()}(0,function(){window.SplitType=function(t,e,i){if(e.addEventListener&&Function.prototype.bind){var n="splitType"+1*new Date,s={},l=0,r=Array.prototype.push,o=Array.prototype.slice,p=Object.keys,a=(Object.prototype.hasOwnProperty,Object.defineProperty),h=(Object.defineProperties,Object.getOwnPropertyDescriptor),f=e.createDocumentFragment.bind(e),c=e.createTextNode.bind(e),d={splitClass:"",lineClass:"line",wordClass:"word",charClass:"char",split:"lines, words, chars",position:"relative",absolute:!1,tagName:"div",DEBUG:!1};return a(v,"defaults",{get:function(){return d},set:function(t){d=C(d,t)}}),v.prototype.split=function(e){this.revert(),this.lines=[],this.words=[],this.chars=[];var l=[t.pageXoffset,t.pageYoffset];e!==i&&(this.settings=C(this.settings,e)),m(this.elements,function(e){(function(e){var i,n,s,l,p=this.settings,a=p.tagName,h="B"+1*new Date+"R",d=p.split,u=-1!==d.indexOf("lines"),y=-1!==d.indexOf("words"),g=-1!==d.indexOf("chars"),C="absolute"===p.position||!0===p.absolute,v=w("div"),x=[],O=[];if(l=u?w("div"):f(),v.innerHTML=e.innerHTML.replace(/<br\s*\/?>/g," "+h+" "),i=v.textContent.replace(/\s+/g," ").trim().split(" ").map(function(t){if(t===h)return l.appendChild(w("br")),null;if(g){var e=t.split("").map(function(t){return w(a,{class:p.charClass+" "+p.splitClass,style:"display: inline-block;",textContent:t})});r.apply(O,e)}return y||u?(s=w(a,{class:p.wordClass+" "+p.splitClass,style:"display: inline-block; position:"+(y?"relative":"static;"),children:g?e:null,textContent:g?null:t}),l.appendChild(s)):m(e,function(t){l.appendChild(t)}),l.appendChild(c(" ")),s},this).filter(function(t){return t}),e.innerHTML="",e.appendChild(l),r.apply(this.words,i),r.apply(this.chars,O),C||u){var T,j,H,S,E,L,k,M,A,B,D,N=[];k=b(e).nodes=e.getElementsByTagName(a),M=e.parentElement,A=e.nextElementSibling,B=t.getComputedStyle(e),D=B.textAlign,C&&(S={left:l.offsetLeft,top:l.offsetTop,width:l.offsetWidth},L=e.offsetWidth,E=e.offsetHeight,b(e).cssWidth=e.style.width,b(e).cssHeight=e.style.height),m(k,function(t){if(t!==l){var e,i=t.parentElement===l;u&&i&&((e=b(t).top=t.offsetTop)!==j&&(j=e,N.push(T=[])),T.push(t)),C&&(b(t).top=e||t.offsetTop,b(t).left=t.offsetLeft,b(t).width=t.offsetWidth,b(t).height=H||(H=t.offsetHeight))}}),M.removeChild(e),u&&(l=f(),x=N.map(function(t){return l.appendChild(n=w(a,{class:p.lineClass+" "+p.splitClass,style:"display: block; text-align:"+D+"; width: 100%;"})),C&&(b(n).type="line",b(n).top=b(t[0]).top,b(n).height=H),m(t,function(t){y?n.appendChild(t):g?o.call(t.children).forEach(function(t){n.appendChild(t)}):n.appendChild(c(t.textContent)),n.appendChild(c(" "))}),n}),e.replaceChild(l,e.firstChild),r.apply(this.lines,x)),C&&(e.style.width=e.style.width||L+"px",e.style.height=E+"px",m(k,function(t){var e="line"===b(t).type,i=!e&&"line"===b(t.parentElement).type;t.style.top=i?0:b(t).top+"px",t.style.left=e?S.left+"px":(i?b(t).left-S.left:b(t).left)+"px",t.style.height=b(t).height+"px",t.style.width=e?S.width+"px":b(t).width+"px",t.style.position="absolute"})),A?M.insertBefore(e,A):M.appendChild(e)}}).call(this,e),b(e).isSplit=!0},this),this.isSplit=!0,t.scrollTo.apply(t,l),m(this.elements,function(t){for(var e,i,l=b(t).nodes||[],r=0,o=l.length;r<o;r++)e=l[r],void 0,(i=e&&e[n])&&(delete e[i],delete s[i])})},v.prototype.revert=function(){this.isSplit&&(this.lines=this.words=this.chars=null),m(this.elements,function(t){b(t).isSplit&&b(t).html&&(t.innerHTML=b(t).html,t.style.height=b(t).cssHeight||"",t.style.width=b(t).cssWidth||"",this.isSplit=!1)},this)},v}function u(t){return null!==t&&"object"==typeof t}function y(t){return u(t)&&"number"==typeof t.length&&t.length>0}function g(t){return u(t)&&/^(1|3|11)$/.test(t.nodeType)}function m(t,e,i){for(var n,s=Object(t),l=y(s)?s:u(n=s)&&"[object Object]"===Object.prototype.toString.call(n)?p(s):[s],r=parseInt(l.length)||0,o=0;o<r;o++)e.call(i,l[o],o,s)}function C(t,e){return t=Object(t),e=Object(e),Object.getOwnPropertyNames(t).reduce(function(i,n){return a(i,n,h(e,n)||h(t,n))},{})}function b(t,e,r){var o,p={};return u(t)&&(o=t[n]||(t[n]=++l),p=s[o]||(s[o]={})),r===i?e===i?p:p[e]:e!==i?(p[e]=r,r):void 0}function w(t,n){var s=e.createElement(t);return n===i?s:(m(n,function(t){var e=n[t];if(null!==e)switch(t){case"textContent":s.textContent=e;break;case"innerHTML":s.innerHTML=e;break;case"children":m(e,function(t){g(t)&&s.appendChild(t)});break;default:s.setAttribute(t,e)}}),s)}function v(t,i){if(!(this instanceof v))return new v(t,i);this.isSplit=!1,this.settings=C(d,i),this.elements=function(t){var i,n,s,l,r,p,a=[];if("string"==typeof t&&(t="#"!==(i=t.trim())[0]||/[^\w]/.test(n=i.slice(1))?e.querySelectorAll(i):e.getElementById(n)),i||g(t))return g(t)?[t]:o.call(t);if(y(t))for(r=0,s=t.length;r<s;r++)if(y(t[r]))for(p=0,l=t[r].length;p<l;p++)g(t[r][p])&&a.push(t[r][p]);else g(t[r])&&a.push(t[r]);return a}(t),this.elements.length&&(this.originals=this.elements.map(function(t){return b(t).html=b(t).html||t.innerHTML}),this.split())}}(window,document)});

new Vue({
	el: '#jhook',
  data: {
  	show: false
  },
  methods: {
  	beforeEnter (el) {
    	console.log("beforeEnter");
    },
    enter (el, done) {
      var instance = new SplitType('.text', {
        split: 'chars',
        position: 'absolute'
      });

      $(".text").each(function( index ) {

        var tl = new TimelineMax({onComplete:done});
        var items = $(this).find(".char").toArray();

        //--fade in
        tl.add(TweenMax.staggerFrom(items, 0.75, {
          x:"+=30px",
          opacity: 0,
          ease: Power1.easeOut
        },0.075));
      });
    },
	 	afterEnter (el) {
    	console.log("afterEnter");
    },
	 	beforeLeave (el) {
    	console.log("beforeLeave");
    },
    leave (el, done) {
      var instance = new SplitType('.text', {
        split: 'chars',
        position: 'absolute'
      });
      $(".text").each(function( index ) {

        var tl = new TimelineMax({onComplete:done});
        var items = $(this).find(".char").toArray();

        //--fade out
        tl.add(TweenMax.staggerTo(items, 0.25, {
          x:"+=30px",
          opacity: 0,
          ease: Power1.easeIn
        },-0.075));
      });
    },
	 	afterLeave (el) {
    	console.log("afterLeave");
    },
  }
})