(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{373:function(t,e,r){"use strict";r.r(e);var n=r(9),o=(r(64),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,"http://blog-prod-elb-1466614929.us-west-2.elb.amazonaws.com/api/articles",e.next=4,r.$get("http://blog-prod-elb-1466614929.us-west-2.elb.amazonaws.com/api/articles");case 4:return n=e.sent,e.abrupt("return",{posts:n});case 6:case"end":return e.stop()}}),e)})))()}}),l=r(57),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",{staticClass:"red--text"},[t._v("hello world👋")]),t._v(" "),r("div",{staticClass:"black--text"},[r("ul",t._l(t.posts.data,(function(e,n){return r("li",{key:n},[r("nuxt-link",{attrs:{to:{name:"articles-id",params:{id:e.id}}}},[t._v(t._s(e.post_title))])],1)})),0)]),t._v(" "),r("NuxtLink",{attrs:{to:"/about"}},[t._v("About Page")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);