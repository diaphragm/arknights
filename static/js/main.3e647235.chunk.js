(this.webpackJsonptmp=this.webpackJsonptmp||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('[[{"label":"\u5148\u92d2\u30bf\u30a4\u30d7","value":"PIONEER"},{"label":"\u524d\u885b\u30bf\u30a4\u30d7","value":"WARRIOR"},{"label":"\u72d9\u6483\u30bf\u30a4\u30d7","value":"SNIPER"},{"label":"\u91cd\u88c5\u30bf\u30a4\u30d7","value":"TANK"},{"label":"\u533b\u7642\u30bf\u30a4\u30d7","value":"MEDIC"},{"label":"\u88dc\u52a9\u30bf\u30a4\u30d7","value":"SUPPORT"},{"label":"\u8853\u58eb\u30bf\u30a4\u30d7","value":"CASTER"},{"label":"\u7279\u6b8a\u30bf\u30a4\u30d7","value":"SPECIAL"}],[{"label":"\u8fd1\u8ddd\u96e2","value":"MELEE"},{"label":"\u9060\u8ddd\u96e2","value":"RANGED"}],[{"label":"\u521d\u671f","value":"\u521d\u671f"},{"label":"\u30a8\u30ea\u30fc\u30c8","value":"SENIOR"},{"label":"\u4e0a\u7d1a\u30a8\u30ea\u30fc\u30c8","value":"TOP"}],[{"label":"\u6cbb\u7642","value":"\u6cbb\u7642"},{"label":"\u652f\u63f4","value":"\u652f\u63f4"},{"label":"\u706b\u529b","value":"\u706b\u529b"},{"label":"\u7bc4\u56f2\u653b\u6483","value":"\u7bc4\u56f2\u653b\u6483"},{"label":"\u6e1b\u901f","value":"\u6e1b\u901f"},{"label":"\u751f\u5b58","value":"\u751f\u5b58"},{"label":"\u9632\u5fa1","value":"\u9632\u5fa1"},{"label":"\u5f31\u5316","value":"\u5f31\u5316"},{"label":"\u5f37\u5236\u79fb\u52d5","value":"\u5f37\u5236\u79fb\u52d5"},{"label":"\u727d\u5236","value":"\u727d\u5236"},{"label":"\u7206\u767a\u529b","value":"\u7206\u767a\u529b"},{"label":"\u53ec\u559a","value":"\u53ec\u559a"},{"label":"\u9ad8\u901f\u518d\u914d\u7f6e","value":"\u9ad8\u901f\u518d\u914d\u7f6e"},{"label":"COST\u56de\u5fa9","value":"COST\u56de\u5fa9"},{"label":"\u30ed\u30dc\u30c3\u30c8","value":"ROBOT"}]]')},function(e,a,t){},,,function(e,a,t){e.exports=t(25)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(10),c=t.n(l),u=(t(16),t(1)),s=t.n(u),i=t(4),o=t(2),f=(t(18),t(19),function(){return r.a.createElement("div",{className:"Title"},r.a.createElement("span",null,"\u30a2\u30fc\u30af\u30ca\u30a4\u30c4")," ",r.a.createElement("span",null,"\u516c\u958b\u6c42\u4eba\u691c\u7d22"))}),m=t(3),v=(t(20),t(21),t(8),function(e){var a=e.label,t=e.value,n=e.onChange,l=e.checked,c=["TagButton","tag"];return l&&c.push("checked"),r.a.createElement("div",{className:c.join(" "),onClick:function(){n&&n({label:a,value:t,checked:!l})}},a)}),p=(t(22),function(e){var a=e.onClick;return r.a.createElement("span",{className:"ClearButton tag",onClick:a},"\xd7")}),h=t(7),b=function(e){var a=e.list,t=e.onChange,n=function(e){var n=e.value;e.checked?a.includes(n)||t([].concat(Object(m.a)(a),[n])):t(a.filter((function(e){return e!==n})))};return r.a.createElement("div",{className:"ButtonList"},r.a.createElement("div",null,r.a.createElement(p,{onClick:function(){t([])}})),h.map((function(e,t){return r.a.createElement("div",{className:"group",key:t},e.map((function(e,t){var l=e.label,c=e.value;return r.a.createElement(v,{label:l,value:c,onChange:n,checked:a.includes(c),key:t})})))})))},g=(t(23),t(24),function(e){var a=e.tags,t=e.chars,n=Math.min.apply(Math,Object(m.a)(t.map((function(e){return e.rarity}))));return r.a.createElement("div",{className:"Result rarity".concat(n)},r.a.createElement("div",{className:"tags"},a.map((function(e,a){var t,n=(t=e,h.flat().find((function(e){return e.value===t}))).label;return r.a.createElement("div",{className:"tag",key:a},n)}))),n>=4&&r.a.createElement("div",{className:"note"},"[\u2605",n,"\u4ee5\u4e0a\u78ba\u5b9a\uff01]"),r.a.createElement("div",{className:"characters"},t.map((function(e,a){return r.a.createElement("div",{className:"character",key:a},"\u2605",e.rarity," ",e.name)}))))}),E=function(e){var a=e.result;return console.log(a),a.length>0?r.a.createElement("div",{className:"Output"},a.map((function(e,a){var t=e.tags,n=e.chars;return 0===n.length?null:r.a.createElement(g,{tags:t,chars:n,key:a})}))):r.a.createElement("div",{className:"Output noinfo"},"NO INFO/")},d=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/character_table.json");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://raw.githubusercontent.com/Kengxxiao/ArknightsGameData/master/ja_JP/gamedata/excel/gacha_table.json");case 2:return e.next=4,e.sent.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(i.a)(s.a.mark((function e(){var a,t,n,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([d(),O()]);case 2:return a=e.sent,t=Object(o.a)(a,2),n=t[0],r=t[1],l=r.recruitDetail.replace(/<@rc\.eml>|<\/>/g,"").match(/(?<=\u2605+\n).+(?=\n--------------------|$)/g).map((function(e){return e.split(" / ")})).flat(),console.log(l),e.abrupt("return",Object.entries(n).filter((function(e){var a=Object(o.a)(e,2)[1];return l.includes(a.name)})).map((function(e){var a=Object(o.a)(e,2),t=a[0],n=a[1],r=n.tagList||[];return r.push(n.position,n.profession),n.rarity+1===1&&r.push("ROBOT"),n.rarity+1===5&&r.push("SENIOR"),n.rarity+1===6&&r.push("TOP"),{key:t,name:n.name,rarity:n.rarity+1,tags:r}})));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(e,a){return a.filter((function(a){return!(6===a.rarity&&!e.includes("TOP"))&&e.every((function(e){return a.tags.includes(e)}))}))},N=function(){var e=r.a.useState([]),a=Object(o.a)(e,2),t=a[0],n=a[1],l=r.a.useState([]),c=Object(o.a)(l,2),u=c[0],v=c[1],p=r.a.useState([]),h=Object(o.a)(p,2),g=h[0],d=h[1];return r.a.useEffect((function(){Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,k();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),r.a.useEffect((function(){d(function(e,a){return Object(m.a)(Array(e.length).keys()).reverse().map((function(e){return e+1})).map((function(a){return function e(a,t){var n=[];if(a.length<t)return[];if(1===t)for(var r=0;r<a.length;r++)n[r]=[a[r]];else for(var l=0;l<a.length-t+1;l++)for(var c=e(a.slice(l+1),t-1),u=0;u<c.length;u++)n.push([a[l]].concat(c[u]));return n}(e,a)})).flat().map((function(e){return{tags:e,chars:y(e,a)}}))}(u,t))}),[u,t]),r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(b,{list:u,onChange:function(e){return v(e)}}),r.a.createElement(E,{result:g}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.3e647235.chunk.js.map