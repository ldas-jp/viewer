(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1309:function(e,n,o){"use strict";o.r(n);var t=o(36),r=o(846),d=o(849),l={layout:"empty",components:{},mounted:function(){var e=this.$route.query,n="ja";if(e.lang&&(n=e.lang),e.q){for(var o=JSON.parse(e.q),l=[],i=0;i<o.length;i++){var w=o[i],c={id:"window_"+i,manifestId:w.manifest,imageToolsEnabled:!0,imageToolsOpen:!0,view:"single"};l.push(c),w.canvas&&(c.canvasId=w.canvas)}var v={};if(l.length>1){var f=l.length,m={first:"window_"+(f-2),second:"window_"+(f-1),direction:"row"};if(f>2)for(var h=2;h<f;h++){var _=h+1;m={first:"window_"+(f-_),second:m,direction:"row",splitPercentage:100/_}}v={layout:m}}var y={id:"demo",windows:l,workspace:v,language:n};r.a.viewer(y,Object(t.a)(d.a))}}},w=o(72),component=Object(w.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"demo"}})}),[],!1,null,null,null);n.default=component.exports}}]);