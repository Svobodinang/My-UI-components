(function(e){function t(t){for(var n,o,l=t[0],d=t[1],i=t[2],b=0,p=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&p.push(u[o][0]),u[o]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);r&&r(t);while(p.length)p.shift()();return a.push.apply(a,i||[]),c()}function c(){for(var e,t=0;t<a.length;t++){for(var c=a[t],n=!0,l=1;l<c.length;l++){var d=c[l];0!==u[d]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=c[0]))}return e}var n={},u={app:0},a=[];function o(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=e,o.c=n,o.d=function(e,t,c){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(c,n,function(t){return e[t]}.bind(null,n));return c},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/My-UI-components/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var r=d;a.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"022f":function(e,t,c){},"0c28":function(e,t,c){},"20c0":function(e,t,c){},"319e":function(e,t,c){},3250:function(e,t,c){"use strict";c("6abb")},"3e24":function(e,t,c){"use strict";c("022f")},5087:function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d"),c("fb98");var n=c("7a23"),u=Object(n["l"])("data-v-3c9d86b2");Object(n["g"])("data-v-3c9d86b2");var a=Object(n["d"])("div",{class:"main"},[Object(n["d"])("h1",null,"My UI components")],-1);Object(n["f"])();var o=u((function(e,t,c,u,o,l){var d=Object(n["i"])("ButtonsSections"),i=Object(n["i"])("InputsSections"),r=Object(n["i"])("IconsSections");return Object(n["e"])(),Object(n["c"])(n["a"],null,[a,Object(n["d"])(d),Object(n["d"])(i,{fields:e.fields,placeholder:e.placeholder},null,8,["fields","placeholder"]),Object(n["d"])(r)],64)})),l=Object(n["l"])("data-v-31325956");Object(n["g"])("data-v-31325956");var d=Object(n["d"])("div",{class:"title"},[Object(n["d"])("div",{class:"img"})],-1),i={class:"block"},r=Object(n["d"])("h3",null,"Small action buttons",-1),b={class:"content"};Object(n["f"])();var p=l((function(e,t,c,u,a,o){var l=Object(n["i"])("ActionSmallButton1");return Object(n["e"])(),Object(n["c"])("section",null,[d,Object(n["d"])("div",i,[r,Object(n["d"])("div",b,[Object(n["d"])(l)])])])})),s=Object(n["l"])("data-v-f9048a4c");Object(n["g"])("data-v-f9048a4c");var f=Object(n["d"])("svg",{width:"342",height:"342",viewBox:"0 0 342 342",xmlns:"http://www.w3.org/2000/svg"},[Object(n["d"])("path",{d:"M192 149.4V0H149.4V149.4H0V192H149.4V341.4H192V192H341.4V149.4H192Z",fill:"black"})],-1);Object(n["f"])();var j=s((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("button",{class:["btn",{"btn-active":e.btnActive}],onClick:t[1]||(t[1]=function(t){return e.btnActive=!e.btnActive}),type:"button"},[f],2)})),v={data:function(){return{btnActive:!1}}};c("7fd6");v.render=j,v.__scopeId="data-v-f9048a4c";var O=v,I={components:{ActionSmallButton1:O}};c("af8f");I.render=p,I.__scopeId="data-v-31325956";var h=I,V=Object(n["l"])("data-v-c35ced86");Object(n["g"])("data-v-c35ced86");var x=Object(n["d"])("div",{class:"title"},[Object(n["d"])("div",{class:"img"})],-1),k={class:"block"},y=Object(n["d"])("h3",null,"Radio inputs",-1),g={class:"content"},m=Object(n["d"])("h3",null,"Checkbox inputs",-1),_={class:"content"},S=Object(n["d"])("h3",null,"Text inputs",-1),w={class:"content"};Object(n["f"])();var M=V((function(e,t,c,u,a,o){var l=Object(n["i"])("RadioInputs1"),d=Object(n["i"])("RadioInputs2"),i=Object(n["i"])("CheckboxInputs1"),r=Object(n["i"])("CheckboxInputs2"),b=Object(n["i"])("TextInput1");return Object(n["e"])(),Object(n["c"])("section",null,[x,Object(n["d"])("div",k,[y,Object(n["d"])("div",g,[Object(n["d"])(l,{fields:c.fields,rdioInput1Value:e.rdioInput1Value,"onUpdate:rdioInput1Value":t[1]||(t[1]=function(t){return e.rdioInput1Value=t})},null,8,["fields","rdioInput1Value"]),Object(n["d"])(d,{fields:c.fields,rdioInput2Value:e.rdioInput2Value,"onUpdate:rdioInput2Value":t[2]||(t[2]=function(t){return e.rdioInput2Value=t})},null,8,["fields","rdioInput2Value"])]),m,Object(n["d"])("div",_,[Object(n["d"])(i,{fields:c.fields,checkboxInputs1Value:e.checkboxInputs1Value,"onUpdate:checkboxInputs1Value":t[3]||(t[3]=function(t){return e.checkboxInputs1Value=t})},null,8,["fields","checkboxInputs1Value"]),Object(n["d"])(r,{fields:c.fields,checkboxInputs2Value:e.checkboxInputs2Value,"onUpdate:checkboxInputs2Value":t[4]||(t[4]=function(t){return e.checkboxInputs2Value=t})},null,8,["fields","checkboxInputs2Value"])]),S,Object(n["d"])("div",w,[Object(n["d"])(b,{placeholder:c.placeholder,TextInput1Value:e.TextInput1Value,"onUpdate:TextInput1Value":t[5]||(t[5]=function(t){return e.TextInput1Value=t})},null,8,["placeholder","TextInput1Value"])])])])})),T=Object(n["l"])("data-v-144f3bef"),A=T((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("div",null,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(c.fields,(function(e){return Object(n["e"])(),Object(n["c"])("div",{class:"radio-group",key:"radioInputs1-".concat(e.id)},[Object(n["d"])("input",{type:"radio",id:"radioInputs1"+e.id,value:e.value,name:"radioInputs1",onInput:t[1]||(t[1]=Object(n["k"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(n["d"])("label",{for:"radioInputs1"+e.id},Object(n["j"])(e.value),9,["for"])])})),128))])})),C={props:{rdioInput1Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:rdioInput1Value",e.target.value)}}};c("ac99");C.render=A,C.__scopeId="data-v-144f3bef";var P=C,U=Object(n["l"])("data-v-07f4ea0f"),H=U((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("div",null,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(c.fields,(function(e){return Object(n["e"])(),Object(n["c"])("div",{class:"radio-group",key:"radioInputs2-".concat(e.id)},[Object(n["d"])("input",{type:"radio",id:"radioInputs2"+e.id,value:e.value,name:"radioInputs2",onInput:t[1]||(t[1]=Object(n["k"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(n["d"])("label",{for:"radioInputs2"+e.id},Object(n["j"])(e.value),9,["for"])])})),128))])})),B={props:{rdioInput2Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:rdioInput2Value",e.target.value)}}};c("3250");B.render=H,B.__scopeId="data-v-07f4ea0f";var R=B,$=Object(n["l"])("data-v-6cce1fc4"),J=$((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("div",null,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(c.fields,(function(e){return Object(n["e"])(),Object(n["c"])("div",{class:"checkboxes-group",key:"checkboxInputs1-".concat(e.id)},[Object(n["d"])("input",{type:"checkbox",id:"checkboxInputs1"+e.id,value:e.value,name:"checkboxInputs1",onInput:t[1]||(t[1]=Object(n["k"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(n["d"])("label",{for:"checkboxInputs1"+e.id},Object(n["j"])(e.value),9,["for"])])})),128))])})),q={props:{checkboxInput1Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:checkboxInput1Value",e.target.value)}}};c("9979");q.render=J,q.__scopeId="data-v-6cce1fc4";var Z=q,z=Object(n["l"])("data-v-34c4fdad"),D=z((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("div",null,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["h"])(c.fields,(function(e){return Object(n["e"])(),Object(n["c"])("div",{class:"checkboxes-group",key:"checkboxInputs2-".concat(e.id)},[Object(n["d"])("input",{type:"checkbox",id:"checkboxInputs2"+e.id,value:e.value,name:"checkboxInputs2",onInput:t[1]||(t[1]=Object(n["k"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(n["d"])("label",{for:"checkboxInputs2"+e.id},Object(n["j"])(e.value),9,["for"])])})),128))])})),E={props:{checkboxInput2Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:checkboxInput2Value",e.target.value)}}};c("9c7e");E.render=D,E.__scopeId="data-v-34c4fdad";var F=E,G=Object(n["l"])("data-v-27d99400");Object(n["g"])("data-v-27d99400");var K={class:"input-group"},L={class:"label-box"};Object(n["f"])();var N=G((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("div",K,[Object(n["d"])("input",{type:"text",required:"",onInput:t[1]||(t[1]=function(){return o.updateValue&&o.updateValue.apply(o,arguments)})},null,32),Object(n["d"])("div",L,[Object(n["d"])("label",null,Object(n["j"])(c.placeholder),1)])])})),Q={props:{TextInput1Value:String,placeholder:{type:String,default:"placeholder"}},methods:{updateValue:function(e){this.$emit("update:TextInput1Value",e.target.value)}}};c("b37c");Q.render=N,Q.__scopeId="data-v-27d99400";var W=Q,X={components:{RadioInputs1:P,RadioInputs2:R,CheckboxInputs1:Z,CheckboxInputs2:F,TextInput1:W},props:["fields","placeholder"],data:function(){return{rdioInput1Value:"",rdioInput2Value:"",checkboxInputs1Value:[],checkboxInputs2Value:[],TextInput1Value:""}}};c("ae81");X.render=M,X.__scopeId="data-v-c35ced86";var Y=X,ee=Object(n["l"])("data-v-134874d4");Object(n["g"])("data-v-134874d4");var te=Object(n["d"])("div",{class:"title"},[Object(n["d"])("div",{class:"img"})],-1),ce={class:"block"},ne=Object(n["d"])("h3",null,"Menu icons",-1),ue={class:"content"};Object(n["f"])();var ae=ee((function(e,t,c,u,a,o){var l=Object(n["i"])("MenuIcon1");return Object(n["e"])(),Object(n["c"])("section",null,[te,Object(n["d"])("div",ce,[ne,Object(n["d"])("div",ue,[Object(n["d"])(l)])])])})),oe=Object(n["l"])("data-v-2bb22d84");Object(n["g"])("data-v-2bb22d84");var le={class:"menu-icon-1"},de=Object(n["d"])("span",null,null,-1);Object(n["f"])();var ie=oe((function(e,t,c,u,a,o){return Object(n["e"])(),Object(n["c"])("div",le,[Object(n["d"])("div",{class:["menu-icon",{"menu-icon-open":e.activeMenu}],onClick:t[1]||(t[1]=function(){return o.clickIcon&&o.clickIcon.apply(o,arguments)})},[de],2)])})),re={data:function(){return{activeMenu:!1}},methods:{clickIcon:function(){this.activeMenu=!this.activeMenu}}};c("3e24");re.render=ie,re.__scopeId="data-v-2bb22d84";var be=re,pe={components:{MenuIcon1:be}};c("e387");pe.render=ae,pe.__scopeId="data-v-134874d4";var se=pe,fe={name:"App",data:function(){return{fields:[{id:"one",value:"Первый"},{id:"two",value:"Второй"},{id:"three",value:"Третий"}],placeholder:"Введите текст"}},components:{ButtonsSections:h,InputsSections:Y,IconsSections:se}};c("743c"),c("5c70");fe.render=o,fe.__scopeId="data-v-3c9d86b2";var je=fe;Object(n["b"])(je).mount("#app")},"5c70":function(e,t,c){"use strict";c("7e6d")},"672a":function(e,t,c){},"6abb":function(e,t,c){},"743c":function(e,t,c){"use strict";c("c3ff")},"7e6d":function(e,t,c){},"7fd6":function(e,t,c){"use strict";c("cbcc")},9979:function(e,t,c){"use strict";c("20c0")},"9c7e":function(e,t,c){"use strict";c("319e")},ac71:function(e,t,c){},ac99:function(e,t,c){"use strict";c("c05f")},ae81:function(e,t,c){"use strict";c("5087")},af8f:function(e,t,c){"use strict";c("ac71")},b37c:function(e,t,c){"use strict";c("672a")},c05f:function(e,t,c){},c3ff:function(e,t,c){},cbcc:function(e,t,c){},e387:function(e,t,c){"use strict";c("0c28")},fb98:function(e,t,c){}});
//# sourceMappingURL=app.905e0377.js.map