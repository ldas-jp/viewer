(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1134:function(t,e,n){"use strict";var r=n(4),o=n(1135).start;r({target:"String",proto:!0,forced:n(1136)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},1135:function(t,e,n){var r=n(33),o=n(192),l=n(43),c=Math.ceil,d=function(t){return function(e,n,d){var f,m,v=String(l(e)),h=v.length,x=void 0===d?" ":String(d),y=r(n);return y<=h||""==x?v:(f=y-h,(m=o.call(x,c(f/x.length))).length>f&&(m=m.slice(0,f)),t?v+m:m+v)}};t.exports={start:d(!1),end:d(!0)}},1136:function(t,e,n){var r=n(116);t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},1308:function(t,e,n){"use strict";n.r(e);n(16),n(23),n(64),n(1134),n(50),n(58),n(71),n(48),n(291),n(47);var r=n(9);function o(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={layout:"default",components:{},data:function(){return{progress:0,total:0,start:0,end:0,manifest:null,message:"",loading:!1,text:"",size:"full"}},mounted:function(){this.loadJSZipFromCDN(),this.manifest=this.$route.query.manifest,this.size=this.$route.query.size||this.size,this.manifest&&(this.text=this.manifest,this.downloadImages())},computed:{percentage:function(){return 0==this.total?0:this.progress/this.total*100}},methods:{loadJSZipFromCDN:function(){var script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/jszip@3.2.1/dist/jszip.js",document.head.append(script)},downloadImages:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,label,r,l,c,d,f,m,canvas,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.init(!0,""),t.size||(t.size="full"),n=[],label=t.manifest,r=[],e.prev=5,l=t.manifest,e.next=9,t.$axios.$get(l);case 9:c=e.sent,d=c.sequences[0].canvases,f=o(d);try{for(f.s();!(m=f.n()).done;)canvas=m.value,n.push(canvas.images[0].resource["@id"].replace("/full/full/","/full/".concat(t.size,"/")))}catch(t){f.e(t)}finally{f.f()}label=c.label,t.total=n.length,i=0;case 16:if(!(i<n.length)){e.next=28;break}return t.progress=i,e.t0=r,e.t1=String(i+1).padStart(5,"0")+".jpg",e.next=22,t.$axios.$get(n[i],{responseType:"arraybuffer"});case 22:e.t2=e.sent,e.t3={fileName:e.t1,data:e.t2},e.t0.push.call(e.t0,e.t3);case 25:i++,e.next=16;break;case 28:e.next=34;break;case 30:return e.prev=30,e.t4=e.catch(5),t.init(!1,e.t4),e.abrupt("return");case 34:t.progress=t.total,t.generateImagesZip(r,label),t.init(!1,"");case 37:case"end":return e.stop()}}),e,null,[[5,30]])})))()},init:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.total=0,this.loading=t,this.message=e},generateImagesZip:function(t,label){var e=new JSZip,n=label,r=e.folder(n);t.forEach((function(image){image.data&&image.fileName&&r.file(image.fileName,image.data)})),e.generateAsync({type:"blob"}).then((function(t){var e=document.createElement("a"),r=URL.createObjectURL(t);e.href=r,e.download="".concat(n,".zip"),document.body.insertAdjacentElement("beforeEnd",e),e.click(),e.remove(),setTimeout((function(){window.URL.revokeObjectURL(r)}),1e3)}))}}},d=n(72),f=n(117),m=n.n(f),v=n(272),h=n(883),x=n(439),y=n(542),w=n(884),_=n(1297),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{staticClass:"my-5"},[n("h2",{staticClass:"mb-5"},[t._v(t._s(t.$t("IIIF Image Downloader"))+" (JavaScript "+t._s(t.$t("Version"))+")")]),t._v(" "),n("v-text-field",{attrs:{filled:"",rounded:"",label:t.$t("IIIF Manifest"),placeholder:"{scheme}://{host}/{prefix}/{identifier}/manifest"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),t._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{filled:"",rounded:"",label:t.$t("Size"),placeholder:"full, '600,', ',600', ..."},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{filled:"",rounded:"",disabled:"",label:t.$t("Start")},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"4"}},[n("v-text-field",{attrs:{filled:"",rounded:"",disabled:"",label:t.$t("End")},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}})],1)],1),t._v(" "),n("v-btn",{attrs:{rounded:"",loading:t.loading,color:"primary"},on:{click:function(e){t.manifest=t.text,t.downloadImages()}}},[t._v(t._s(t.$t("Download")))]),t._v(" "),n("h2",{staticClass:"mt-10 mb-5"}),t._v(" "),n("div",{staticClass:"error--text"},[t._v(t._s(t.message))]),t._v(" "),0!==t.total?n("v-progress-linear",{attrs:{color:"amber",height:"25"},model:{value:t.percentage,callback:function(e){t.percentage=e},expression:"percentage"}},[n("strong",[t._v(t._s(t.progress)+" / "+t._s(t.total))])]):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:v.a,VCol:h.a,VContainer:x.a,VProgressLinear:y.a,VRow:w.a,VTextField:_.a})}}]);