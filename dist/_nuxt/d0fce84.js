(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{381:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(78),n(88)),c=n.n(o),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("http://blog-prod-elb-1466614929.us-west-2.elb.amazonaws.com/api/articles/"+t.params.id);case 2:return n=e.sent,e.abrupt("return",{post:n.data,title:n.data.data.post_title});case 4:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.title}}},d=n(70),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"red--text"},[t._v(t._s(t.post.data.post_title))]),t._v(" "),n("div",{staticClass:"black--text",domProps:{innerHTML:t._s(t.$md.render(t.post.data.post_content))}}),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("back Home")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);