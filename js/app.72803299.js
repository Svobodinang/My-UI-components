(function(e){function t(t){for(var c,o,s=t[0],u=t[1],r=t[2],d=0,b=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&b.push(i[o][0]),i[o]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,r||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},i={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/My-UI-components/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var r=0;r<s.length;r++)t(s[r]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08c4":function(e,t,n){"use strict";n("c342")},"0c3e":function(e,t,n){},"0cd3":function(e,t,n){"use strict";n("dc7b")},"0eca":function(e,t,n){e.exports=n.p+"img/instagram.43afc1f5.svg"},"1e09":function(e,t,n){"use strict";n("f08c")},"1fe7":function(e,t,n){"use strict";n("8237")},"20ed":function(e,t,n){},"219f":function(e,t,n){},2668:function(e,t,n){e.exports=n.p+"img/telegram.89431860.svg"},"2efc":function(e,t,n){"use strict";n("693b")},"39c8":function(e,t,n){e.exports=n.p+"img/vk.9d2827e4.svg"},"40ff":function(e,t,n){"use strict";n("0c3e")},4149:function(e,t,n){"use strict";n("219f")},"41c2":function(e,t,n){},"43ea":function(e,t){e.exports="varying vec2 vUv;\nuniform vec2 u_size;\nuniform vec2 u_resolution;\nvoid main(){\nvUv=(position.xy+1.)*0.3;\nfloat scalex,scaley;\nscalex=u_size.x/(u_resolution.x);\nscaley=u_size.y/(u_resolution.y);\nvUv.x=vUv.x/scalex;\nvUv.y=vUv.y/scaley;\ngl_Position=vec4(position,1.);\n}"},4944:function(e,t,n){"use strict";n("8ed8")},"4eed":function(e,t,n){e.exports=n.p+"img/image.dc8fea45.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),i=n("8e98"),a=n.n(i),o=n("0eca"),s=n.n(o),u=n("2668"),r=n.n(u),l=n("39c8"),d=n.n(l),b=Object(c["m"])("data-v-1a008e13");Object(c["h"])("data-v-1a008e13");var f=Object(c["e"])("div",{class:"main"},[Object(c["e"])("h1",null,"UI components"),Object(c["e"])("p",null,"by Hope Freedom"),Object(c["e"])("div",{class:"social"},[Object(c["e"])("a",{href:"https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0-5a39211ba/",target:"_blank"},[Object(c["e"])("img",{class:"icon",src:a.a,alt:"linkedin"})]),Object(c["e"])("a",{href:"https://www.instagram.com/hope___freedom/",target:"_blank"},[Object(c["e"])("img",{class:"icon",src:s.a,alt:"vk"})]),Object(c["e"])("a",{href:"https://telegram.me/HopeFreedom",target:"_blank"},[Object(c["e"])("img",{class:"icon",src:r.a,alt:"vk"})]),Object(c["e"])("a",{href:"https://vk.com/hope_freedom",target:"_blank"},[Object(c["e"])("img",{class:"icon",src:d.a,alt:"vk"})])])],-1);Object(c["g"])();var v=b((function(e,t,n,i,a,o){var s=Object(c["j"])("Animate"),u=Object(c["j"])("ButtonsSections"),r=Object(c["j"])("InputsSections"),l=Object(c["j"])("IconsSections");return Object(c["f"])(),Object(c["c"])(c["a"],null,[f,Object(c["e"])(s),Object(c["e"])(u),Object(c["e"])(r,{fields:e.fields,placeholder:e.placeholder},null,8,["fields","placeholder"]),Object(c["e"])(l)],64)})),p=Object(c["m"])("data-v-04d1021e");Object(c["h"])("data-v-04d1021e");var h={class:"block"},j=Object(c["e"])("h3",null,"Small action buttons",-1),O={class:"content"};Object(c["g"])();var m=p((function(e,t,n,i,a,o){var s=Object(c["j"])("ActionSmallButton1");return Object(c["f"])(),Object(c["c"])("section",null,[Object(c["e"])("div",h,[j,Object(c["e"])("div",O,[Object(c["e"])(s)])])])})),g=Object(c["m"])("data-v-3ab8c812");Object(c["h"])("data-v-3ab8c812");var x=Object(c["e"])("svg",{width:"342",height:"342",viewBox:"0 0 342 342",xmlns:"http://www.w3.org/2000/svg"},[Object(c["e"])("path",{d:"M192 149.4V0H149.4V149.4H0V192H149.4V341.4H192V192H341.4V149.4H192Z",fill:"black"})],-1);Object(c["g"])();var y=g((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("button",{class:["btn",{"btn-active":e.btnActive}],onClick:t[1]||(t[1]=function(t){return e.btnActive=!e.btnActive}),type:"button"},[x],2)})),k={data:function(){return{btnActive:!1}}};n("bcf8");k.render=y,k.__scopeId="data-v-3ab8c812";var I=k,_={components:{ActionSmallButton1:I}};n("0cd3");_.render=m,_.__scopeId="data-v-04d1021e";var w=_,V=Object(c["m"])("data-v-e1581188");Object(c["h"])("data-v-e1581188");var C={class:"block"},S=Object(c["e"])("h3",null,"Radio inputs",-1),M={class:"content"},A={class:"block"},B=Object(c["e"])("h3",null,"Checkbox inputs",-1),P={class:"content"},T={class:"block"},D=Object(c["e"])("h3",null,"Text inputs",-1),R={class:"content"};Object(c["g"])();var U=V((function(e,t,n,i,a,o){var s=Object(c["j"])("RadioInputs1"),u=Object(c["j"])("RadioInputs2"),r=Object(c["j"])("CheckboxInputs1"),l=Object(c["j"])("CheckboxInputs2"),d=Object(c["j"])("TextInput1");return Object(c["f"])(),Object(c["c"])("section",null,[Object(c["e"])("div",C,[S,Object(c["e"])("div",M,[Object(c["e"])(s,{fields:n.fields,rdioInput1Value:e.rdioInput1Value,"onUpdate:rdioInput1Value":t[1]||(t[1]=function(t){return e.rdioInput1Value=t})},null,8,["fields","rdioInput1Value"]),Object(c["e"])(u,{fields:n.fields,rdioInput2Value:e.rdioInput2Value,"onUpdate:rdioInput2Value":t[2]||(t[2]=function(t){return e.rdioInput2Value=t})},null,8,["fields","rdioInput2Value"])])]),Object(c["e"])("div",A,[B,Object(c["e"])("div",P,[Object(c["e"])(r,{fields:n.fields,checkboxInputs1Value:e.checkboxInputs1Value,"onUpdate:checkboxInputs1Value":t[3]||(t[3]=function(t){return e.checkboxInputs1Value=t})},null,8,["fields","checkboxInputs1Value"]),Object(c["e"])(l,{fields:n.fields,checkboxInputs2Value:e.checkboxInputs2Value,"onUpdate:checkboxInputs2Value":t[4]||(t[4]=function(t){return e.checkboxInputs2Value=t})},null,8,["fields","checkboxInputs2Value"])])]),Object(c["e"])("div",T,[D,Object(c["e"])("div",R,[Object(c["e"])(d,{placeholder:n.placeholder,TextInput1Value:e.TextInput1Value,"onUpdate:TextInput1Value":t[5]||(t[5]=function(t){return e.TextInput1Value=t})},null,8,["placeholder","TextInput1Value"])])])])})),E=Object(c["m"])("data-v-316c1f77"),z=E((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",null,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.fields,(function(e){return Object(c["f"])(),Object(c["c"])("div",{class:"radio-group",key:"radioInputs1-".concat(e.id)},[Object(c["e"])("input",{type:"radio",id:"radioInputs1"+e.id,value:e.value,name:"radioInputs1",onInput:t[1]||(t[1]=Object(c["l"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["e"])("label",{for:"radioInputs1"+e.id},Object(c["k"])(e.value),9,["for"])])})),128))])})),W={props:{rdioInput1Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:rdioInput1Value",e.target.value)}}};n("1fe7");W.render=z,W.__scopeId="data-v-316c1f77";var Y=W,$=Object(c["m"])("data-v-28981744"),H=$((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",null,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.fields,(function(e){return Object(c["f"])(),Object(c["c"])("div",{class:"radio-group",key:"radioInputs2-".concat(e.id)},[Object(c["e"])("input",{type:"radio",id:"radioInputs2"+e.id,value:e.value,name:"radioInputs2",onInput:t[1]||(t[1]=Object(c["l"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["e"])("label",{for:"radioInputs2"+e.id},Object(c["k"])(e.value),9,["for"])])})),128))])})),L={props:{rdioInput2Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:rdioInput2Value",e.target.value)}}};n("4149");L.render=H,L.__scopeId="data-v-28981744";var q=L,G=Object(c["m"])("data-v-5ae7de32"),F=G((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",null,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.fields,(function(e){return Object(c["f"])(),Object(c["c"])("div",{class:"checkboxes-group",key:"checkboxInputs1-".concat(e.id)},[Object(c["e"])("input",{type:"checkbox",id:"checkboxInputs1"+e.id,value:e.value,name:"checkboxInputs1",onInput:t[1]||(t[1]=Object(c["l"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["e"])("label",{for:"checkboxInputs1"+e.id},Object(c["k"])(e.value),9,["for"])])})),128))])})),X={props:{checkboxInput1Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:checkboxInput1Value",e.target.value)}}};n("b432");X.render=F,X.__scopeId="data-v-5ae7de32";var J=X,N=Object(c["m"])("data-v-8352fb7c"),Z=N((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",null,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(n.fields,(function(e){return Object(c["f"])(),Object(c["c"])("div",{class:"checkboxes-group",key:"checkboxInputs2-".concat(e.id)},[Object(c["e"])("input",{type:"checkbox",id:"checkboxInputs2"+e.id,value:e.value,name:"checkboxInputs2",onInput:t[1]||(t[1]=Object(c["l"])((function(){return o.updateValue&&o.updateValue.apply(o,arguments)}),["prevent"]))},null,40,["id","value"]),Object(c["e"])("label",{for:"checkboxInputs2"+e.id},Object(c["k"])(e.value),9,["for"])])})),128))])})),K={props:{checkboxInput2Value:String,fields:{type:Array,default:function(){return[{id:0,value:"0"}]}}},methods:{updateValue:function(e){this.$emit("update:checkboxInput2Value",e.target.value)}}};n("e12f");K.render=Z,K.__scopeId="data-v-8352fb7c";var Q=K,ee=Object(c["m"])("data-v-81645cce");Object(c["h"])("data-v-81645cce");var te={class:"input-group"},ne={class:"label-box"};Object(c["g"])();var ce=ee((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",te,[Object(c["e"])("input",{type:"text",required:"",onInput:t[1]||(t[1]=function(){return o.updateValue&&o.updateValue.apply(o,arguments)})},null,32),Object(c["e"])("div",ne,[Object(c["e"])("label",null,Object(c["k"])(n.placeholder),1)])])})),ie={props:{TextInput1Value:String,placeholder:{type:String,default:"placeholder"}},methods:{updateValue:function(e){this.$emit("update:TextInput1Value",e.target.value)}}};n("08c4");ie.render=ce,ie.__scopeId="data-v-81645cce";var ae=ie,oe={components:{RadioInputs1:Y,RadioInputs2:q,CheckboxInputs1:J,CheckboxInputs2:Q,TextInput1:ae},props:["fields","placeholder"],data:function(){return{rdioInput1Value:"",rdioInput2Value:"",checkboxInputs1Value:[],checkboxInputs2Value:[],TextInput1Value:""}}};n("2efc");oe.render=U,oe.__scopeId="data-v-e1581188";var se=oe,ue=Object(c["m"])("data-v-0e04a58a");Object(c["h"])("data-v-0e04a58a");var re={class:"block"},le=Object(c["e"])("h3",null,"Menu icons",-1),de={class:"content"};Object(c["g"])();var be=ue((function(e,t,n,i,a,o){var s=Object(c["j"])("MenuIcon1");return Object(c["f"])(),Object(c["c"])("section",null,[Object(c["e"])("div",re,[le,Object(c["e"])("div",de,[Object(c["e"])(s)])])])})),fe=Object(c["m"])("data-v-677f37ff");Object(c["h"])("data-v-677f37ff");var ve={class:"menu-icon-1"},pe=Object(c["e"])("span",null,null,-1);Object(c["g"])();var he=fe((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",ve,[Object(c["e"])("div",{class:["menu-icon",{"menu-icon-open":e.activeMenu}],onClick:t[1]||(t[1]=function(){return o.clickIcon&&o.clickIcon.apply(o,arguments)})},[pe],2)])})),je={data:function(){return{activeMenu:!1}},methods:{clickIcon:function(){this.activeMenu=!this.activeMenu}}};n("1e09");je.render=he,je.__scopeId="data-v-677f37ff";var Oe=je,me={components:{MenuIcon1:Oe}};n("e10e");me.render=be,me.__scopeId="data-v-0e04a58a";var ge=me,xe=Object(c["m"])("data-v-3830874f");Object(c["h"])("data-v-3830874f");var ye={class:"block"},ke=Object(c["e"])("h3",null,"css animate",-1),Ie={class:"components"},_e={class:"block"},we=Object(c["e"])("h3",null,"Gsap animate",-1),Ve={class:"components"},Ce={class:"block"},Se=Object(c["e"])("h3",null,"Canvas animate",-1),Me={class:"components"},Ae={class:"block"},Be=Object(c["e"])("h3",null,"Scroll animate",-1),Pe={class:"components"},Te={class:"block"},De=Object(c["e"])("h3",null,"WebGL animate",-1),Re={class:"components"};Object(c["g"])();var Ue=xe((function(e,t,n,i,a,o){var s=Object(c["j"])("CssAnimate1"),u=Object(c["j"])("GsapAnimate1"),r=Object(c["j"])("CanvasAnimate1"),l=Object(c["j"])("CanvasAnimate2"),d=Object(c["j"])("ScrollAnimate1"),b=Object(c["j"])("WebGLAnimate1");return Object(c["f"])(),Object(c["c"])("section",null,[Object(c["e"])("div",ye,[ke,Object(c["e"])("div",Ie,[Object(c["e"])(s)])]),Object(c["e"])("div",_e,[we,Object(c["e"])("div",Ve,[Object(c["e"])(u)])]),Object(c["e"])("div",Ce,[Se,Object(c["e"])("div",Me,[Object(c["e"])(r),Object(c["e"])(l)])]),Object(c["e"])("div",Ae,[Be,Object(c["e"])("div",Pe,[Object(c["e"])(d)])]),Object(c["e"])("div",Te,[De,Object(c["e"])("div",Re,[Object(c["e"])(b)])])])})),Ee=Object(c["m"])("data-v-11644bab");Object(c["h"])("data-v-11644bab");var ze={class:"item"};Object(c["g"])();var We=Ee((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",ze,[Object(c["e"])("canvas",{ref:"canvas",width:e.canvasWidth,height:e.canvasWidth},null,8,["width","height"])])})),Ye=(n("cb29"),n("4160"),n("159b"),n("d4ec")),$e=function e(t){var n=this;Object(Ye["a"])(this,e),this.x=0,this.y=0,t.onmousemove=function(e){n.x=e.pageX-t.offsetLeft,n.y=e.pageY-t.offsetTop}},He=n("bee2"),Le=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"#ff6600";Object(Ye["a"])(this,e),this.x=t,this.y=n,this.originalX=t,this.originalY=n,this.vx=0,this.vy=0,this.radius=c,this.color=i,this.friction=.9,this.springFactor=.02}return Object(He["a"])(e,[{key:"setPosition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.x,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.y;this.x=e,this.y=t}},{key:"think",value:function(e,t){var n=this.x-e.x,c=this.y-e.y,i=Math.sqrt(n*n+c*c);if(i<t){var a=Math.atan2(c,n),o=e.x+Math.cos(a)*t,s=e.y+Math.sin(a)*t;this.vx+=o-this.x,this.vy+=s-this.y}var u=-(this.x-this.originalX),r=-(this.y-this.originalY);this.vx+=u*this.springFactor,this.vy+=r*this.springFactor,this.vx*=this.friction,this.vy*=this.friction,this.x+=this.vx,this.y+=this.vy}},{key:"draw",value:function(e){e.save(),e.beginPath(),e.arc(this.x,this.y,this.radius,0,2*Math.PI),e.fillStyle=this.color,e.fill(),e.closePath(),e.restore()}}]),e}(),qe={data:function(){return{canvasWidth:600,ctx:null,cursorPosInCanvas:null,balls:[],ballsCount:10,circleRadius:100,mouse:null,mouseRadius:50}},mounted:function(){this.setCanvas(),this.setMouse(),this.initBalls(),this.render()},methods:{setCanvas:function(){var e=this.$refs.canvas;this.ctx=e.getContext("2d"),this.cursorPosInCanvas=new $e(e)},setMouse:function(){this.mouse=new Le(0,0,this.mouseRadius,"#9ACEEB")},initBalls:function(){for(var e=0;e<this.ballsCount;e++)this.balls.push(new Le(300+this.circleRadius*Math.cos(2*e*Math.PI/this.ballsCount),300+this.circleRadius*Math.sin(2*e*Math.PI/this.ballsCount)))},connectDots:function(){this.ctx.beginPath(),this.ctx.fillStyle="#f0cde7";for(var e=0,t=this.ballsCount;e<=t;e++){var n=this.balls[e+0>=t?e+0-t:e+0],c=this.balls[e+1>=t?e+1-t:e+1];this.ctx.quadraticCurveTo(n.x,n.y,.5*(n.x+c.x),.5*(n.y+c.y))}this.ctx.closePath(),this.ctx.fill()},render:function(){var e=this;window.requestAnimationFrame(this.render),this.ctx.clearRect(0,0,this.canvasWidth,this.canvasWidth),this.mouse.setPosition(this.cursorPosInCanvas.x,this.cursorPosInCanvas.y),this.balls.forEach((function(t){t.think(e.cursorPosInCanvas,e.mouseRadius)})),this.connectDots()}}};n("ecfe");qe.render=We,qe.__scopeId="data-v-11644bab";var Ge=qe,Fe=Object(c["m"])("data-v-288cf3a5");Object(c["h"])("data-v-288cf3a5");var Xe={class:"item"},Je={ref:"canvas",width:"600",height:"400"};Object(c["g"])();var Ne=Fe((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",Xe,[Object(c["e"])("canvas",Je,null,512)])})),Ze={};n("cc47");Ze.render=Ne,Ze.__scopeId="data-v-288cf3a5";var Ke=Ze,Qe=Object(c["m"])("data-v-b182f02a");Object(c["h"])("data-v-b182f02a");var et={class:"item"},tt=Object(c["d"])(" click! "),nt={class:"border"},ct=Object(c["e"])("defs",null,[Object(c["e"])("clipPath",{id:"R"},[Object(c["e"])("path",{d:"M238.8,22.2V12c0-7.6-4.3-12-11.7-12h-64.2v61.7h9V47.6c0-0.2,0-0.5,0-0.7V14.6\r\n\t\t\tc0-0.2,0-0.5,0-0.7V8.3h53.2c3,0,4.6,1.8,4.6,5.1v8c0,3.3-1.6,5.1-4.6,5.1h-43.4v8h25l21.3,27l0.1,0.2h9.7l-22.2-27.8h13.2\r\n\t\t\tC233.6,33.9,238.8,30.8,238.8,22.2"})]),Object(c["e"])("clipPath",{id:"Y"},[Object(c["e"])("polygon",{points:"429.2,0 406.1,27.6 383,0.2 382.9,0 371.8,0 401.6,35.3 401.6,35.3 \r\n\t\t\t410.6,35.3 410.6,35.3 439.8,0 \t"}),Object(c["e"])("rect",{x:"401.6",y:"45.1",fill:"pink",width:"9",height:"16.6"})]),Object(c["e"])("clipPath",{id:"t-top"},[Object(c["e"])("path",{fill:"white",d:"M275.3,0v8.3l36.4-0.1v0c6.6,0,13.1-0.1,19.7-0.1c0.2,0,0.5,0,0.7,0h24l0-0.5\r\n\t\t\t\tc0.1-2.4,0.1-4.9,0.1-7.3l0-0.5H275.3z"})]),Object(c["e"])("clipPath",{id:"t-bottom"},[Object(c["e"])("path",{fill:"white",d:"M311.7,18.1v43h9.1v-43C317.8,18.1,314.7,18.1,311.7,18.1"})])],-1),it=Object(c["e"])("polygon",{fill:"black",points:"0,0 0,61.1 62.7,61.1 62.7,53.2 9,53.2 9,0 "},null,-1),at={ref:"logoU",fill:"black",d:"M140.4,47.8c0,3.3-1.6,5.1-4.6,5.1H89.2c-3,0-4.6-1.8-4.6-5.1V0h-9v49.1\r\n\t\tc0,7.6,4.2,12,11.6,12h50.7c7.4,0,11.7-4.4,11.7-12V0h-9.1V47.8z"},ot={"clip-path":"url(#R)"},st={ref:"logoR",x:"0",y:"0",width:"100%",height:"100%",fill:"black"},ut={ref:"logoI",x:"251.2",y:"0",fill:"black",width:"9",height:"61.7"},rt={"clip-path":"url(#t-top)"},lt={ref:"logoTTop",x:"0",y:"0",fill:"black",width:"100%",height:"100%"},dt={"clip-path":"url(#t-bottom)"},bt={ref:"logoTBottom",x:"0",y:"0",fill:"black",width:"100%",height:"100%"},ft={"clip-path":"url(#Y)"},vt={ref:"logoY",x:"0",y:"0",fill:"black",width:"100%",height:"100%"};Object(c["g"])();var pt=Qe((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",et,[tt,Object(c["e"])("div",nt,[(Object(c["f"])(),Object(c["c"])("svg",{onClick:t[1]||(t[1]=function(){return o.animate&&o.animate.apply(o,arguments)}),version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:a":"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/",x:"0px",y:"0px",viewBox:"0 0 439.8 61.7","enable-background":"new 0 0 439.8 61.7","xml:space":"preserve"},[ct,Object(c["e"])("g",null,[it,Object(c["e"])("path",at,null,512),Object(c["e"])("g",ot,[Object(c["e"])("rect",st,null,512)]),Object(c["e"])("rect",ut,null,512),Object(c["e"])("g",rt,[Object(c["e"])("rect",lt,null,512)]),Object(c["e"])("g",dt,[Object(c["e"])("rect",bt,null,512)]),Object(c["e"])("g",ft,[Object(c["e"])("rect",vt,null,512)])])]))])])})),ht=n("cffa"),jt=n("9d0b");ht["a"].registerPlugin(jt["a"]);var Ot={mounted:function(){this.animate()},methods:{animate:function(){var e=ht["a"].timeline();e.from(this.$refs.logoU,1,{y:-30}).from(this.$refs.logoR,2,{y:-80,rotation:15,transformOrigin:"100% 50%"},"-=1").from(this.$refs.logoI,2,{y:"110%"},"-=1.5").from(this.$refs.logoTTop,8,{x:"100%"},"-=1.5").from(this.$refs.logoTBottom,2,{y:"-100%"},"-=7").from(this.$refs.logoY,2,{y:"110%"},"-=7")}}};n("dfe5");Ot.render=pt,Ot.__scopeId="data-v-b182f02a";var mt=Ot,gt=Object(c["m"])("data-v-69b1028f");Object(c["h"])("data-v-69b1028f");var xt=Object(c["d"])(" click! "),yt={class:"canvas"};Object(c["g"])();var kt=gt((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",{class:["wrapper",{isCss:e.isCss}],onClick:t[1]||(t[1]=function(t){return e.isCss=!e.isCss})},[xt,Object(c["e"])("div",yt,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.pointCount,(function(e){return Object(c["f"])(),Object(c["c"])("div",{class:"p".concat(e),key:e},null,2)})),128))])],2)})),It={data:function(){return{pointCount:100,isCss:!1}}};n("c75d");It.render=kt,It.__scopeId="data-v-69b1028f";var _t=It,wt=Object(c["m"])("data-v-672722cc");Object(c["h"])("data-v-672722cc");var Vt={class:"scroll-animate-1"},Ct=Object(c["e"])("p",{class:"scroll-animate-1__text"}," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et inventore ipsum placeat, delectus debitis quae voluptates deleniti odio fugiat asperiores ea rerum, amet velit! Itaque molestiae repellat iure amet iusto. ",-1),St=Object(c["e"])("p",{class:"scroll-animate-1__text"}," Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et inventore ipsum placeat, delectus debitis quae voluptates deleniti odio fugiat asperiores ea rerum, amet velit! Itaque molestiae repellat iure amet iusto. ",-1);Object(c["g"])();var Mt=wt((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",Vt,[Ct,St])})),At=n("b85c"),Bt=n("c46f"),Pt=50,Tt={mounted:function(){var e=this,t=this.checkScrollSpeed(),n=1,c=0;window.onscroll=function(){var i=t();n<4?(c=(c+i)/n,n+=1):(n=1,c=i),c>Pt&&(c=Pt),c<-Pt&&(c=-Pt),e.setSkew("scroll-animate-1__text",c/7),e.setBack("scroll-animate-1__text")}},methods:{setSkew:Object(Bt["b"])((function(e,t){var n,c=document.getElementsByClassName(e),i=Object(At["a"])(c);try{for(i.s();!(n=i.n()).done;){var a=n.value;a.style.transform="skewY(".concat(t,"deg)")}}catch(o){i.e(o)}finally{i.f()}}),50),setBack:Object(Bt["a"])((function(e){var t,n=document.getElementsByClassName(e),c=Object(At["a"])(n);try{for(c.s();!(t=c.n()).done;){var i=t.value;i.style.transform="skewY(0deg)"}}catch(a){c.e(a)}finally{c.f()}}),100),checkScrollSpeed:function(e){e=e||{};var t,n,c,i,a=e.delay||50;function o(){t=null,i=0}return o(),function(){return n=window.scrollY,null!=t&&(i=n-t),t=n,clearTimeout(c),c=setTimeout(o,a),i}}}};n("4944");Tt.render=Mt,Tt.__scopeId="data-v-672722cc";var Dt=Tt,Rt={id:"webGLAnimate1__container",ref:"block"};function Ut(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",Rt,null,512)}var Et=n("5a89"),zt=n("5ead"),Wt=n.n(zt),Yt=n("43ea"),$t=n.n(Yt),Ht={mounted:function(){this.mouse={x:0,y:0},document.onmousemove=this.getMouseXY,this.init(),this.animate()},beforeUnmount:function(){window.removeEventListener("resize",this.onWindowResize)},methods:{getMouseXY:function(e){this.mouse.x=e.pageX,this.mouse.y=e.pageY,this.uniforms.u_mouse.value.x=this.mouse.x,this.uniforms.u_mouse.value.y=this.mouse.y},init:function(){var e=this;this.container=document.getElementById("webGLAnimate1__container"),this.camera=new Et["a"],this.camera.position.z=1,this.scene=new Et["d"];var t=new Et["c"](2,2),c=new Et["f"],i=c.load(n("4eed"),(function(t){e.uniforms.u_size.value=new Et["g"](t.image.width/9,t.image.height/9)})),a=c.load(n("754c"));this.uniforms={u_time:{type:"f",value:1},u_animation:{type:"f",value:1},u_mouse:{type:"v2",value:new Et["g"]},u_resolution:{type:"v2",value:new Et["g"]},u_size:{type:"v2",value:new Et["g"]},texture_sample:{type:"t",value:i},map_sample:{type:"t",value:a}};var o=new Et["e"]({fragmentShader:Wt.a,vertexShader:$t.a,uniforms:this.uniforms}),s=new Et["b"](t,o);this.scene.add(s),this.rerender=new Et["h"],this.rerender.setPixelRatio(window.devicePixelRation),this.container.appendChild(this.rerender.domElement),this.onWindowResize(),window.addEventListener("resize",this.onWindowResize,!1)},onWindowResize:function(){this.rerender.setSize(700,800),this.uniforms.u_resolution.value.x=this.rerender.domElement.width,this.uniforms.u_resolution.value.y=this.rerender.domElement.height,this.uniforms.u_mouse.value.x=this.mouse.x,this.uniforms.u_mouse.value.y=this.mouse.y},animate:function(){requestAnimationFrame(this.animate),this.render()},render:function(){this.uniforms.u_time.value+=.05,this.rerender.render(this.scene,this.camera)}}};Ht.render=Ut;var Lt=Ht,qt={components:{CssAnimate1:_t,GsapAnimate1:mt,CanvasAnimate1:Ge,CanvasAnimate2:Ke,ScrollAnimate1:Dt,WebGLAnimate1:Lt}};n("7136");qt.render=Ue,qt.__scopeId="data-v-3830874f";var Gt=qt,Ft={name:"App",data:function(){return{fields:[{id:"one",value:"first"},{id:"two",value:"second"},{id:"three",value:"third"}],placeholder:"Enter your text"}},components:{ButtonsSections:w,InputsSections:se,IconsSections:ge,Animate:Gt}};n("adb9"),n("40ff");Ft.render=v,Ft.__scopeId="data-v-1a008e13";var Xt=Ft,Jt=Object(c["m"])("data-v-8f361dd8");Object(c["h"])("data-v-8f361dd8");var Nt={class:"tickers"},Zt={class:"ticker"},Kt={class:"ticker hidden-ticker"};Object(c["g"])();var Qt=Jt((function(e,t,n,i,a,o){return Object(c["f"])(),Object(c["c"])("div",Nt,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.tickerCount,(function(t){return Object(c["f"])(),Object(c["c"])("div",{key:t,class:["ticker-block",{"other-direct":t%2}]},[Object(c["e"])("div",Zt,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.titlesCount,(function(e){return Object(c["f"])(),Object(c["c"])("div",{key:e,ref:"titles"},[Object(c["e"])("h2",null,Object(c["k"])(n.title),1)],512)})),128))]),Object(c["e"])("div",Kt,[(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["i"])(e.titlesCount,(function(e){return Object(c["f"])(),Object(c["c"])("div",{key:e},[Object(c["e"])("h2",null,Object(c["k"])(n.title),1)])})),128))])],2)})),128))])})),en={props:{title:{type:String,default:"Заголовок"}},data:function(){return{tickerCount:2,titlesCount:2}},mounted:function(){this.calcTitlesCount()},methods:{calcTitlesCount:function(){var e,t=this.title.length,n=window.innerWidth-17;e=n>1500?40:n>1100?35:n>700?20:17,this.titlesCount=Math.floor(e/t)}}};n("77f1");en.render=Qt,en.__scopeId="data-v-8f361dd8";var tn=en;Object(c["b"])(Xt).component("Title",tn).mount("#app")},"5ead":function(e,t){e.exports="precision highp float;\nvarying vec2 vUv;\nuniform vec2 u_resolution;\nuniform vec2 u_mouse;\nuniform float u_time;\nuniform sampler2D texture_sample;\nuniform sampler2D map_sample;\nuniform float u_animation;\nvoid main(){\nfloat m=(u_mouse.x/u_resolution.x-0.5)*0.02;\nfloat distort=sin(vUv.y*150.+u_time)*0.01+m;\nfloat myMap=texture2D(map_sample,vUv).r*u_animation;\nvec4 myTexture=texture2D(texture_sample,vec2(vUv.x+distort*myMap,vUv.y));\ngl_FragColor=vec4(myTexture.rgb,1.);\n}"},"693b":function(e,t,n){},7136:function(e,t,n){"use strict";n("c9d7")},"754c":function(e,t,n){e.exports=n.p+"img/flower-map.839ea74f.jpg"},"77f1":function(e,t,n){"use strict";n("f6bc")},"7c7c":function(e,t,n){},"7cb0":function(e,t,n){},8237:function(e,t,n){},"8d85":function(e,t,n){},"8e98":function(e,t,n){e.exports=n.p+"img/linkedin.5f66c1b2.svg"},"8ed8":function(e,t,n){},a10f:function(e,t,n){},adb9:function(e,t,n){"use strict";n("b65d")},b432:function(e,t,n){"use strict";n("8d85")},b65d:function(e,t,n){},bcf8:function(e,t,n){"use strict";n("20ed")},c013:function(e,t,n){},c342:function(e,t,n){},c75d:function(e,t,n){"use strict";n("41c2")},c9d7:function(e,t,n){},cc47:function(e,t,n){"use strict";n("f37d")},dc7b:function(e,t,n){},dfe5:function(e,t,n){"use strict";n("7c7c")},e10e:function(e,t,n){"use strict";n("7cb0")},e12f:function(e,t,n){"use strict";n("c013")},ecfe:function(e,t,n){"use strict";n("a10f")},f08c:function(e,t,n){},f37d:function(e,t,n){},f6bc:function(e,t,n){}});
//# sourceMappingURL=app.72803299.js.map