(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n.n(r),s=n(3),c=n.n(s),i=(n(12),n(13),n(4)),l=n(5),o=n(7),j=n(6),d=n(0);var b=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("table",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"First Name"}),Object(d.jsx)("th",{children:"Last Name"})]})})})};function h(t,e){return t.firstName<e.firstName?-1:t.firstName>e.firstName?1:0}function u(t,e){return t.lastName<e.lastName?-1:t.lastName>e.lastName?1:0}var f=function(t){return console.log(t),"default"===t.sorting?t.data.map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.firstName},e),Object(d.jsx)("td",{children:t.lastName},e)]})})):"sortFirst"===t.sorting?t.data.sort(h).map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.firstName},e),Object(d.jsx)("td",{children:t.lastName},e)]})})):"sortLast"===t.sorting?t.data.sort(u).map((function(t,e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.firstName},e),Object(d.jsx)("td",{children:t.lastName},e)]})})):void 0},m=[{firstName:"George",lastName:"Washington"},{firstName:"Abraham",lastName:"Lincoln"},{firstName:"John",lastName:"Adams"}],O=function(t){Object(o.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={tableState:"default"},t.handleTableChange=function(e){t.setState({tableState:e})},t.renderTableData=function(){return"default"===t.state.tableState?Object(d.jsx)(f,{sorting:"default",data:m}):"sortFirst"===t.state.tableState?Object(d.jsx)(f,{sorting:"sortFirst",data:m}):"sortLast"===t.state.tableState?Object(d.jsx)(f,{sorting:"sortLast",data:m}):void 0},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:function(){return t.handleTableChange("sortFirst")},children:"Sort by First Name"}),Object(d.jsx)("button",{onClick:function(){return t.handleTableChange("sortLast")},children:"Sort by Last Name"}),Object(d.jsx)("button",{children:"Filter"}),Object(d.jsx)(b,{}),this.renderTableData()]})}}]),n}(r.Component);var x=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("h1",{children:"Welcome"}),Object(d.jsx)("p",{children:"Check the list of employees below."}),Object(d.jsx)(O,{})]})})};var N=function(){return Object(d.jsx)(x,{})},g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),s(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.3f2f123d.chunk.js.map