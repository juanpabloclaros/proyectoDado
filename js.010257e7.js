parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QvaY":[function(require,module,exports) {
function e(c,t){for(var i=0,d=c.childNodes.length,o=0;o<d;o++)3!=c.childNodes[o].nodeType&&(t&&(i+=e(c.childNodes[o],!0)),i++);return i}var c=document.querySelector("#buttonDice"),t=document.querySelector("#buttonDelete"),i="dice1",d=document.querySelector(".container2");c.addEventListener("click",function(){var c=document.querySelector(".dice");if(12==e(d,!0))alert("El historial esta lleno. Borrelo para seguir tirando el dado.");else{var t=["dice1","dice2","dice3","dice4","dice5","dice6"],o=Math.floor(6*Math.random());c.classList.remove(i),c.classList.add(t[o]),d.innerHTML+='<div class="history '.concat(t[o],'"></div>'),i=t[o]}}),t.addEventListener("click",function(){d.innerHTML=""});
},{}]},{},["QvaY"], null)
//# sourceMappingURL=/proyectoDado/js.010257e7.js.map