(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},53:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var s=c(18),i=c.n(s),n=(c(29),c(21)),r=(c(30),c(19)),a=c(20),d=c(5),j=c.n(d),h="https://fathomless-dusk-03713.herokuapp.com/servitka",l=new(Object(r.a)((function e(){Object(a.a)(this,e),this.getZaznamy=function(){return j.a.get(h)},this.getZaznamById=function(e){return j.a.get(h+e)},this.createZaznam=function(e){j.a.post(h,e)}}))),m=(c(53),c(0));var p=function(e){return Object(m.jsxs)("tr",{className:"expense-item",children:[Object(m.jsx)("td",{children:e.date}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsxs)("h2",{children:["Temperature: ",e.temperature]})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsxs)("h2",{children:["Humidity: ",e.humidity]})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsxs)("h2",{children:["Water: ",e.water]})}),Object(m.jsx)("td",{className:"expense-item__price",children:e.id}),Object(m.jsx)("td",{className:"expense-item__price",children:Object(m.jsx)("button",{children:"Delete"})})]})},x=c(3);c(55);var b=function(){var e=Object(x.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(x.useEffect)((function(){l.getZaznamy().then((function(e){s(e.data)}))})),Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Let's get started!"}),Object(m.jsx)("p",{children:"Sup hoe"}),Object(m.jsxs)("table",{className:"app-table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{className:"expense-item",children:[Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsx)("h2",{children:"Date"})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsx)("h2",{children:"Temperature"})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsx)("h2",{children:"Humidity"})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsx)("h2",{children:"Water"})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsx)("h2",{children:"Id"})}),Object(m.jsx)("td",{className:"expense-item__description",children:Object(m.jsx)("h2",{})})]})}),Object(m.jsx)("tbody",{children:c.map((function(e){return Object(m.jsx)(p,{date:e.date,temperature:e.temperature,humidity:e.humidity,water:e.water,id:e.id,delete:"Delete"},e.id)}))})]})]})};i.a.createRoot(document.getElementById("root")).render(Object(m.jsx)(b,{}))}},[[56,1,2]]]);
//# sourceMappingURL=main.b48125eb.chunk.js.map