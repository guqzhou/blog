(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(t,e,o){},316:function(t,e,o){"use strict";o(274)},323:function(t,e,o){"use strict";o.r(e);var i={data:()=>({twikoo:"",firstLoad:!0}),mounted(){null!=this.$frontmatter.comment&&!this.$frontmatter.comment||"/"==this.$route.path||"/archives/"==this.$route.path||this.isFourZeroFour(this.$route)||setTimeout(()=>{this.twikooInit()},700)},watch:{$route(t,e){"/"==this.$route.path||""!=this.$route.hash||this.isFourZeroFour(t)||("/"!=t.path&&0!=this.getCommentByFrontmatter(t)?"/"!=e.path&&"/archives/"!=e.path&&this.getCommentByFrontmatter(e)?"/"!=this.$route.path&&""==this.$route.hash&&setTimeout(()=>{this.updateComment()},700):this.firstLoad?setTimeout(()=>{this.twikooInit(),this.firstLoad=!1},700):this.twikooInit():this.deleteComment())}},methods:{twikooInit(){twikoo.init({envId:"https://www.guqzhou.tech/",el:"#tcomment"}).then(()=>{this.loadTwikoo()})},loadTwikoo(){let t=document.getElementsByClassName("page")[0],e=document.getElementById("twikoo");e?this.twikoo=e:e=this.twikoo,t&&(e?t.appendChild(e):t.appendChild(this.twikoo)),this.updateComment()},updateComment(){let t=document.getElementsByClassName("tk-icon")[0];t&&t.click()},deleteComment(){let t=document.getElementById("twikoo");t&&t.parentNode.removeChild(t)},getCommentByFrontmatter(t){let e=!0;return this.$site.pages.forEach(o=>{o.path==t.path&&(e=o.frontmatter.comment)}),e},isFourZeroFour(t){let e=!0;return this.$site.pages.forEach(o=>{o.path==t.path&&(e=!1)}),e}}},s=(o(316),o(16)),n=Object(s.a)(i,(function(){return(0,this._self._c)("div",{attrs:{id:"tcomment"}})}),[],!1,null,null,null);e.default=n.exports}}]);