(function(t){function e(e){for(var c,i,r=e[0],o=e[1],d=e[2],b=0,s=[];b<r.length;b++)i=r[b],Object.prototype.hasOwnProperty.call(u,i)&&u[i]&&s.push(u[i][0]),u[i]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(t[c]=o[c]);l&&l(e);while(s.length)s.shift()();return a.push.apply(a,d||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,r=1;r<n.length;r++){var o=n[r];0!==u[o]&&(c=!1)}c&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},u={app:0},a=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/my-project/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"17ed":function(t,e,n){"use strict";n("f74b")},"2eba":function(t,e,n){"use strict";n("ca40")},4151:function(t,e,n){},"44da":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("fb98");var c=n("7a23"),u=Object(c["l"])("data-v-01ca0482");Object(c["g"])("data-v-01ca0482");var a=Object(c["d"])("div",{class:"main"},[Object(c["d"])("h1",null,"My UI components")],-1);Object(c["f"])();var i=u((function(t,e,n,u,i,r){var o=Object(c["i"])("ButtonsSections"),d=Object(c["i"])("InputsSections");return Object(c["e"])(),Object(c["c"])(c["a"],null,[a,Object(c["d"])(o),Object(c["d"])(d,{fields:t.fields},null,8,["fields"])],64)})),r=Object(c["l"])("data-v-ba30272a");Object(c["g"])("data-v-ba30272a");var o=Object(c["d"])("div",{class:"title"},[Object(c["d"])("div",{class:"img"})],-1),d={class:"block"},l=Object(c["d"])("h3",null,"Small action buttons",-1),b={class:"content"};Object(c["f"])();var s=r((function(t,e,n,u,a,i){var r=Object(c["i"])("ActionSmallButton1");return Object(c["e"])(),Object(c["c"])("section",null,[o,Object(c["d"])("div",d,[l,Object(c["d"])("div",b,[Object(c["d"])(r)])])])})),p=Object(c["l"])("data-v-f9048a4c");Object(c["g"])("data-v-f9048a4c");var f=Object(c["d"])("svg",{width:"342",height:"342",viewBox:"0 0 342 342",xmlns:"http://www.w3.org/2000/svg"},[Object(c["d"])("path",{d:"M192 149.4V0H149.4V149.4H0V192H149.4V341.4H192V192H341.4V149.4H192Z",fill:"black"})],-1);Object(c["f"])();var v=p((function(t,e,n,u,a,i){return Object(c["e"])(),Object(c["c"])("button",{class:["btn",{"btn-active":t.btnActive}],onClick:e[1]||(e[1]=function(e){return t.btnActive=!t.btnActive}),type:"button"},[f],2)})),j={data:function(){return{btnActive:!1}}};n("7fd6");j.render=v,j.__scopeId="data-v-f9048a4c";var O=j,I={components:{ActionSmallButton1:O}};n("17ed");I.render=s,I.__scopeId="data-v-ba30272a";var h=I,V=Object(c["l"])("data-v-ba452ab6");Object(c["g"])("data-v-ba452ab6");var y=Object(c["d"])("div",{class:"title"},[Object(c["d"])("div",{class:"img"})],-1),g={class:"block"},k=Object(c["d"])("h3",null,"Radio inputs",-1),m={class:"content"},x=Object(c["d"])("h3",null,"Checkbox inputs",-1),_={class:"content"};Object(c["f"])();var w=V((function(t,e,n,u,a,i){var r=Object(c["i"])("RadioInputs1"),o=Object(c["i"])("RadioInputs2"),d=Object(c["i"])("CheckboxInputs1");return Object(c["e"])(),Object(c["c"])("section",null,[y,Object(c["d"])("div",g,[k,Object(c["d"])("div",m,[Object(c["d"])(r,{fields:n.fields,rdioInput1Value:t.rdioInput1Value,"onUpdate:rdioInput1Value":e[1]||(e[1]=function(e){return t.rdioInput1Value=e})},null,8,["fields","rdioInput1Value"]),Object(c["d"])(o,{fields:n.fields,rdioInput2Value:t.rdioInput2Value,"onUpdate:rdioInput2Value":e[2]||(e[2]=function(e){return t.rdioInput2Value=e})},null,8,["fields","rdioInput2Value"])]),x,Object(c["d"])("div",_,[Object(c["d"])(d,{fields:n.fields,CheckboxInputs1Value:t.CheckboxInputs1Value,"onUpdate:CheckboxInputs1Value":e[3]||(e[3]=function(e){return t.CheckboxInputs1Value=e})},null,8,["fields","CheckboxInputs1Value"])])])])})),S=Object(c["l"])("data-v-144f3bef"),A=S((function(t,e,n,u,a,i){return Object(c["e"])(),Object(c["c"])("div",null,[(Object(c["e"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(n.fields,(function(t){return Object(c["e"])(),Object(c["c"])("div",{class:"radio-group",key:"radioInputs1-".concat(t.id)},[Object(c["d"])("input",{type:"radio",id:"radioInputs1"+t.id,value:t.value,name:"radioInputs1",onInput:e[1]||(e[1]=Object(c["k"])((function(){return i.updateValue&&i.updateValue.apply(i,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["d"])("label",{for:"radioInputs1"+t.id},Object(c["j"])(t.value),9,["for"])])})),128))])})),C={props:{rdioInput1Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(t){this.$emit("update:rdioInput1Value",t.target.value)}}};n("ac99");C.render=A,C.__scopeId="data-v-144f3bef";var P=C,H=Object(c["l"])("data-v-2c1ff6a6"),M=H((function(t,e,n,u,a,i){return Object(c["e"])(),Object(c["c"])("div",null,[(Object(c["e"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(n.fields,(function(t){return Object(c["e"])(),Object(c["c"])("div",{class:"radio-group",key:"radioInputs2-".concat(t.id)},[Object(c["d"])("input",{type:"radio",id:"radioInputs2"+t.id,value:t.value,name:"radioInputs2",onInput:e[1]||(e[1]=Object(c["k"])((function(){return i.updateValue&&i.updateValue.apply(i,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["d"])("label",{for:"radioInputs2"+t.id},Object(c["j"])(t.value),9,["for"])])})),128))])})),B={props:{rdioInput2Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(t){this.$emit("update:rdioInput2Value",t.target.value)}}};n("2eba");B.render=M,B.__scopeId="data-v-2c1ff6a6";var R=B,U=Object(c["l"])("data-v-7f8d1da7"),$=U((function(t,e,n,u,a,i){return Object(c["e"])(),Object(c["c"])("div",null,[(Object(c["e"])(!0),Object(c["c"])(c["a"],null,Object(c["h"])(n.fields,(function(t){return Object(c["e"])(),Object(c["c"])("div",{class:"checkboxes-group",key:"checkboxInputs1-".concat(t.id)},[Object(c["d"])("input",{type:"checkbox",id:"checkboxInputs1"+t.id,value:t.value,name:"checkboxInputs1",onInput:e[1]||(e[1]=Object(c["k"])((function(){return i.updateValue&&i.updateValue.apply(i,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["d"])("label",{for:"checkboxInputs1"+t.id},Object(c["j"])(t.value),9,["for"])])})),128))])})),J={props:{checkboxInput1Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(t){this.$emit("update:checkboxInput1Value",t.target.value)}}};n("ce6d");J.render=$,J.__scopeId="data-v-7f8d1da7";var T=J,Z={components:{RadioInputs1:P,RadioInputs2:R,CheckboxInputs1:T},props:["fields"],data:function(){return{rdioInput1Value:"",rdioInput2Value:"",CheckboxInputs1Value:[]}}};n("7edd");Z.render=w,Z.__scopeId="data-v-ba452ab6";var q=Z,z={name:"App",data:function(){return{fields:[{id:"one",value:"Первый"},{id:"two",value:"Второй"},{id:"three",value:"Третий"}]}},components:{ButtonsSections:h,InputsSections:q}};n("9c56"),n("9c23");z.render=i,z.__scopeId="data-v-01ca0482";var D=z;Object(c["b"])(D).mount("#app")},"7edd":function(t,e,n){"use strict";n("4151")},"7fd6":function(t,e,n){"use strict";n("cbcc")},"9c23":function(t,e,n){"use strict";n("b725")},"9c56":function(t,e,n){"use strict";n("44da")},ac99:function(t,e,n){"use strict";n("c05f")},b725:function(t,e,n){},c05f:function(t,e,n){},ca40:function(t,e,n){},cbcc:function(t,e,n){},ce6d:function(t,e,n){"use strict";n("df60")},df60:function(t,e,n){},f74b:function(t,e,n){},fb98:function(t,e,n){}});
//# sourceMappingURL=app.06a0ba3d.js.map