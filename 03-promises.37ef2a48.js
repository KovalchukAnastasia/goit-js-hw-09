function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var l=i("eWCmQ");const r={submitBtn:document.querySelector("button"),delayField:document.querySelector('input[name="delay"]'),stepField:document.querySelector('input[name="step"]'),amountField:document.querySelector('input[name="amount"]')};function u(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}r.submitBtn.addEventListener("click",(function(t){t.preventDefault();const n=Number(r.delayField.value),o=Number(r.stepField.value),i=Number(r.amountField.value);let d=0;for(let t=0;t<i;t+=1)d+=0===t?n:o,u(t+1,d).then((({position:t,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.37ef2a48.js.map
