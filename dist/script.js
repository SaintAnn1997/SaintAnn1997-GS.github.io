!function(e){var t={};function l(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t);var n=(e,t,l,n)=>{const r=document.querySelectorAll(e),i=document.querySelector(t),o=document.querySelector(l),s=document.querySelectorAll(n);let c=1;function a(e){e>r.length&&(c=1),e<1&&(c=r.length),r.forEach(e=>{e.style.display="none",e.classList.add("animated")}),r[c-1].classList.add("fadeInOut"),r[c-1].style.display="block"}function d(){s.forEach(e=>e.classList.remove("main-slider__control-dot--active")),s[c-1].classList.add("main-slider__control-dot--active")}function u(e){c+=e,a(c),d()}a(c),i.addEventListener("click",()=>{u(-1),r[c-1].classList.remove("slideInLeft"),r[c-1].classList.add("slideInRight")}),o.addEventListener("click",()=>{u(1),r[c-1].classList.add("slideInLeft"),r[c-1].classList.remove("slideInRight")}),s.forEach((e,t)=>{e.addEventListener("click",()=>{c=t+1,a(c),d()})})};var r=(e,t)=>{const l=document.querySelector(e);let n;document.querySelectorAll(t)[1].addEventListener("click",()=>{n?(n=!1,l.style.transform="scaleY(0)"):(n=!0,l.style.transform="scaleY(1)")})};var i=(e,t,l,n,r)=>{const i=document.querySelector(t),o=document.querySelector(l),s=document.querySelectorAll(e),c=document.querySelector(n),a=document.querySelector(r);let d,u=0;const m={small:null,medium:window.matchMedia("(min-width: 768px)"),large:window.matchMedia("(min-width: 992px)"),xl:window.matchMedia("(min-width: 1200px)")};for(let[e,t]of Object.entries(m))t&&t.addEventListener("change",v);function v(){let e;for(let[t,l]of Object.entries(m))l&&!l.matches||(e=t);switch(e){case"xl":o.style.width=100*s.length/4+"%",d=4;break;case"large":o.style.width=100*s.length/3+"%",d=3;break;case"medium":o.style.width=100*s.length/2+"%",d=2;break;case"small":o.style.width=100*s.length/1+"%",d=1}console.log(e)}v(),a.addEventListener("click",(function e(){let t=window.getComputedStyle(i).width;u==+t.slice(0,t.length-2)*(s.length/d-1)?(c.classList.remove("global-slider__prev--inactive"),a.classList.add("global-slider__prev--inactive"),window.removeEventListener("click",e)):(console.log(t),u+=+t.slice(0,t.length-2),c.classList.remove("global-slider__prev--inactive")),o.style.transform=`translateX(-${u}px)`})),c.addEventListener("click",(function e(){let t=window.getComputedStyle(i).width;0==u?(c.classList.add("global-slider__prev--inactive"),a.classList.remove("global-slider__prev--inactive"),window.removeEventListener("click",e)):(u-=+t.slice(0,t.length-2),a.classList.remove("global-slider__prev--inactive")),o.style.transform=`translateX(-${u}px)`}))};var o=(e,t,l)=>{const n=document.querySelector(e),r=document.querySelector(t),i=document.querySelectorAll(l);let o=!1;function s(){o=!o,n.classList.toggle("hamburger--active"),r.classList.toggle("menu__list--active"),document.body.style.overflow=o?"hidden":""}n.addEventListener("click",s),i.forEach(e=>{e.addEventListener("click",()=>{s()})})};window.addEventListener("DOMContentLoaded",()=>{n(".main-slider__slide",".main-slider__control-prev",".main-slider__control-next",".main-slider__control-dot"),r(".popup__catalog",".menu__list-item"),i(".global-slider__slide",".global-slider__wrapper",".global-slider__inner",".global-slider__prev",".global-slider__next"),o(".hamburger",".menu__list",".menu__list-item")})}]);