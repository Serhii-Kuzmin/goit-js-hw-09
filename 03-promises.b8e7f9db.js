!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i),i.register("hGDhh",(function(n,t){var o=i("6JpON");document.addEventListener("DOMContentLoaded",(function(){function n(e,n){return new Promise((function(t,o){var i=Math.random()>.3;setTimeout((function(){i?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();for(var i=Number(this.elements.delay.value),r=Number(this.elements.step.value),u=Number(this.elements.amount.value),a=1;a<=u;a++)n(a,i+(a-1)*r).then((function(n){var t=n.position,i=n.delay;e(o).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(i,"ms"))})).catch((function(n){var t=n.position,i=n.delay;e(o).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(i,"ms"))}))}))}))})),i("hGDhh")}();
//# sourceMappingURL=03-promises.b8e7f9db.js.map
