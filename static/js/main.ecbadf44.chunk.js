(this.webpackJsonppercolation=this.webpackJsonppercolation||[]).push([[0],{17:function(t,e,n){},19:function(t,e,n){},2:function(t,e,n){t.exports={grid:"PercolationSimulation_grid__aK6iY",row:"PercolationSimulation_row__24Wwf",cell:"PercolationSimulation_cell__2erQ9",openCell:"PercolationSimulation_openCell__1qhE-",percolates:"PercolationSimulation_percolates__2qMFD",cellButton:"PercolationSimulation_cellButton__2nZIT"}},20:function(t,e,n){"use strict";n.r(e);var i=n(1),o=n.n(i),r=n(10),c=n.n(r),a=(n(17),n(12)),l=n(11),u=n(4),s=n(9),h=n(6),f=n(7),d=function(){function t(e){if(Object(h.a)(this,t),!e)throw new Error("n should be a number bigger then 0");this.arr=new Array(e).fill(0).map((function(t,e){return e}))}return Object(f.a)(t,[{key:"union",value:function(t,e){var n=this.find(t),i=this.find(e);return this.arr=this.arr.map((function(t){return t===i?n:t})),n}},{key:"find",value:function(t){return this.arr[t]}}]),t}(),b=[{row:0,col:-1},{row:0,col:1},{row:1,col:0},{row:-1,col:0}],j=function(){function t(e,n){var i=this;Object(h.a)(this,t),this.rowsAm=e,this.colsAm=n,this.uf=new d((e+1)*n),this.percolateRoot=-1,new Array(n).fill(0).forEach((function(t,e){i.percolateRoot=i.uf.union(e,0)})),this.grid=new Array(e).fill(0).map((function(){return new Array(n).fill(!1)}))}return Object(f.a)(t,[{key:"open",value:function(t,e){var n=this;this.grid[t][e]=!0,b.forEach((function(i){var o=i.row,r=i.col;n.join({row:t,col:e},{row:t+o,col:e+r})}))}},{key:"toIndex",value:function(t,e){return(t+1)*this.colsAm+e}},{key:"isOpen",value:function(t,e){return!(e<0||e>=this.colsAm)&&(-1===t||!(t<0||t>=this.rowsAm)&&this.grid[t][e])}},{key:"join",value:function(t,e){if(!this.isOpen(t.row,t.col)||!this.isOpen(e.row,e.col))return-1;var n=this.toIndex(t.row,t.col),i=this.toIndex(e.row,e.col),o=this.uf.find(n),r=this.uf.find(i),c=this.uf.union(n,i);return o!==this.percolateRoot&&r!==this.percolateRoot||(this.percolateRoot=c),c}},{key:"percolates",value:function(t,e){return this.uf.find(this.toIndex(t,e))===this.percolateRoot}}]),t}(),p=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=0;return new Promise((function(t,n){e.forEach((function(o){o().then((function(){(i+=1)===e.length&&t()})).catch((function(){n()}))}))}))},m=n(2),O=n.n(m),w=n(0),g=function(){var t=Object(i.useState)({width:40,height:40}),e=Object(u.a)(t,2),n=e[0],o=n.width,r=n.height,c=e[1],h=Object(i.useState)({grid:[],model:null}),f=Object(u.a)(h,2),d=f[0],b=d.grid,m=d.model,g=f[1],v=Object(i.useState)(150),x=Object(u.a)(v,2),y=x[0],C=x[1];Object(i.useEffect)((function(){g({grid:new Array(r).fill(0).map((function(){return new Array(o).fill(!1)})),model:new j(r,o)})}),[o,r]);var k=Object(i.useCallback)((function(t){c(Object(l.a)({width:o,height:r},t.target.name,parseInt(t.target.value,10)||1))}),[o,r]),_=Object(i.useCallback)((function(t,e){m.open(t,e),g({model:m,grid:b.map((function(t,e){return t.map((function(t,n){return m.grid[e][n]}))}))})}),[b,m]),A=Object(i.useCallback)((function(t){var e=t.target.getAttribute("data-cell").split("-").map((function(t){return parseInt(t,10)})),n=Object(u.a)(e,2),i=n[0],o=n[1];_(i,o)}),[_]),S=Object(i.useCallback)((function(t){C(t.target.value)}),[]),P=Object(i.useCallback)((function(){g({grid:new Array(r).fill(0).map((function(){return new Array(o).fill(!1)})),model:new j(r,o)})}),[o,r]),I=Object(i.useCallback)((function(){p.apply(void 0,Object(a.a)(new Array(y).fill(0).map((function(){return function(){return new Promise((function(t){setTimeout((function(){_(Math.floor(Math.random()*r),Math.floor(Math.random()*o)),t()}),200)}))}}))))}),[_,o,r,y]);return Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:O.a.controls,children:[Object(w.jsxs)("div",{children:[Object(w.jsxs)("label",{htmlFor:"width",children:["Width:",Object(w.jsx)("input",{type:"number",name:"width",value:o,onChange:k})]}),Object(w.jsxs)("label",{htmlFor:"height",children:["Height:",Object(w.jsx)("input",{type:"number",name:"height",value:r,onChange:k})]})]}),Object(w.jsxs)("div",{children:[Object(w.jsx)("input",{type:"number",name:"randomCellAm",value:y,onChange:S}),Object(w.jsx)("button",{type:"button",onClick:I,children:"random"})]})]}),Object(w.jsx)("div",{children:Object(w.jsx)("button",{type:"button",onClick:P,children:"reset"})}),Object(w.jsx)("div",{children:Object(w.jsx)("div",{className:O.a.grid,children:b.map((function(t,e){return Object(w.jsx)("div",{className:O.a.row,children:t.map((function(t,n){return Object(w.jsx)("div",{className:Object(s.a)(O.a.cell,t&&O.a.openCell,t&&m.percolates(e,n)&&O.a.percolates),children:Object(w.jsxs)("button",{className:Object(s.a)(O.a.cellButton),type:"button",onClick:A,"data-cell":"".concat(e,"-").concat(n),children:["open cell"," ",e," ",n]})})}))})}))})})]})};n(19);var v=function(){return Object(w.jsx)(g,{})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,r=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),r(t),c(t)}))};c.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(v,{})}),document.getElementById("root")),x()}},[[20,1,2]]]);
//# sourceMappingURL=main.ecbadf44.chunk.js.map