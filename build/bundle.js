!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){const r=n(1);axios({method:"get",url:"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty",responseType:"json"}).then(e=>{e.data.forEach(e=>{axios({method:"GET",url:`https://hacker-news.firebaseio.com/v0/item/${e}.json?print=pretty`,responseType:"json"}).then(e=>{let t=e.data;t.url=void 0===t.url?"no-url":t.url,t.descendants=void 0===t.descendants?"0":t.descendants;let n=r(t);document.getElementById("stories").innerHTML+=n})})})},function(e,t){e.exports=e=>`<div class="entry card">\n            <div class="card-body">\n                <h4 class="card-title"><a href="${e.url}"><div style="color:darkslategray">${e.title}</div></a></h1>\n                <div class="card-text">\n                <p>The story's score: <strong>${e.score}</strong>, post by: <strong>${e.by}.</strong></p>\n                <span>${e.descendants} comments.</span>\n                </div>\n            </div>\n        </div>`}]);