(this.webpackJsonprobo_friends=this.webpackJsonprobo_friends||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(4),s=n.n(o),a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))},i=(n(13),n(5)),h=n(6),b=n(2),l=n(8),u=n(7),j=(n(14),n(0)),d=function(e){var t=e.robot;return Object(j.jsxs)("div",{className:"tc pa3 ma2 grow shadow-5 dib bw2 br3 bg-light-blue",children:[Object(j.jsx)("img",{alt:"poza-robot",src:"https://robohash.org/".concat(t.username,"?200x200")}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:t.name}),Object(j.jsx)("h2",{children:t.email})]})]})},g=function(e){var t=e.robots.map((function(e,t){return Object(j.jsx)(d,{robot:e},t)}));return Object(j.jsx)("div",{children:t})};var f=function(e){var t=e.change;return Object(j.jsx)("div",{className:"pa2",children:Object(j.jsx)("input",{onChange:t,className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots"})})},O=(n(16),function(e){return Object(j.jsx)("div",{className:"scroll-component",children:e.children})}),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={robots:[],searchField:""},e.onSearchChange=e.onSearchChange.bind(Object(b.a)(e)),e}return Object(h.a)(n,[{key:"onSearchChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return this.state.robots.length?Object(j.jsxs)("div",{className:"tc",children:[Object(j.jsx)("h1",{children:"RoboFriends"}),Object(j.jsx)(f,{change:this.onSearchChange}),Object(j.jsx)(O,{children:Object(j.jsx)(g,{robots:t})})]}):Object(j.jsx)("h1",{children:"Loading..."})}}]),n}(r.a.Component);s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),a()}},[[17,1,2]]]);
//# sourceMappingURL=main.427c8f96.chunk.js.map