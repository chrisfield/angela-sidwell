(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var n,i=r(a("v06X")),s=r(a("XEEL")),l=r(a("uDP2")),o=r(a("j8BX")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),c.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var z=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+c+s+l+a+r+t+i+n+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=c.default.createElement(V,(0,o.default)({src:t},n));return a.length>1?c.default.createElement("picture",null,r(a),i):i},V=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return c.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:n},g,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));V.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=z(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,E=e.itemProp,L=e.loading,z=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,C=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,o.default)({opacity:O?1:0,transition:C?"opacity "+b+"ms":"none"},l),k="boolean"==typeof h?"lightgray":h,N={transitionDelay:b+"ms"},q=(0,o.default)({opacity:this.state.imgLoaded?0:1},C&&N,{},l,{},f),M={title:t,alt:this.state.isVisible?"":a,style:q,className:g};if(p){var P=p,j=P[0];return c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),k&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},C&&N)}),j.base64&&c.default.createElement(x,{src:j.base64,spreadProps:M,imageVariants:P,generateSources:w}),j.tracedSVG&&c.default.createElement(x,{src:j.tracedSVG,spreadProps:M,imageVariants:P,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(P),c.default.createElement(V,{alt:a,title:t,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},j,{imageVariants:P}))}}))}if(m){var G=m,T=G[0],B=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:T.width,height:T.height},i);return"inherit"===i.display&&delete B.display,c.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(T.srcSet)},k&&c.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:k,width:T.width,opacity:this.state.imgLoaded?0:1,height:T.height},C&&N)}),T.base64&&c.default.createElement(x,{src:T.base64,spreadProps:M,imageVariants:G,generateSources:w}),T.tracedSVG&&c.default.createElement(x,{src:T.tracedSVG,spreadProps:M,imageVariants:G,generateSources:S}),this.state.isVisible&&c.default.createElement("picture",null,v(G),c.default.createElement(V,{alt:a,title:t,width:T.width,height:T.height,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:L,draggable:z})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,o.default)({alt:a,title:t,loading:L},T,{imageVariants:G}))}}))}return null},t}(c.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),R=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});O.propTypes={resolutions:C,sizes:R,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([R,d.default.arrayOf(R)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var k=O;t.default=k},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("+ZDr"),s=a.n(i);a("lw3w"),a("emEt").default.enqueue,n.a.createContext({});a("y7hu");var l=a("uWfE"),o=a.n(l),c=a("Oobe"),d=a.n(c),u=a("UNbL"),f=a.n(u),g=function(e){return n.a.createElement("footer",null,n.a.createElement("div",{className:f.a.links},n.a.createElement("a",{className:f.a.link,href:"mailto:angela@angelasidwell.com"},n.a.createElement(d.a,null)),n.a.createElement("a",{className:f.a.link,href:"https://www.instagram.com/angela_sidwell_artist/"},n.a.createElement(o.a,null))))},p=function(e){return n.a.createElement("li",{style:{display:"inline-block",marginRight:"1rem"}},n.a.createElement(s.a,{to:e.to},e.children))};t.a=function(e){var t=e.children;return n.a.createElement("div",{style:{margin:"3rem auto",maxWidth:"600px",padding:"0 1rem"}},n.a.createElement("header",{style:{marginBottom:"1.5rem"}},n.a.createElement(s.a,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},n.a.createElement("h3",{style:{display:"inline"}},"Angela Sidwell")),n.a.createElement("ul",{style:{listStyle:"none",float:"right"}},n.a.createElement(p,{to:"/events"},"Events & Stockists"),n.a.createElement(p,{to:"/gallery"},"Image Gallery"),n.a.createElement(p,{to:"/statement/"},"Statement"),n.a.createElement(p,{to:"/contact/"},"Contact"))),n.a.createElement("div",{style:{clear:"both"}},t),n.a.createElement(g,null))}},Oobe:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,r.createElement("g",null,r.createElement("path",{d:"M384.202,59.111H4.209C1.888,59.111,0,61,0,63.33v261.766c0,2.33,1.888,4.217,4.209,4.217h379.993   c2.317,0,4.222-1.887,4.222-4.217V63.33C388.424,61,386.52,59.111,384.202,59.111z M319.937,92.888L194.212,185.09L68.485,92.888   H319.937z M354.647,295.535H33.779V109.328l157.935,115.82c1.494,1.089,3.508,1.089,5.004,0l157.934-115.82v186.207H354.647z"})))}n.defaultProps={version:"1.1",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 388.424 388.424",style:{enableBackground:"new 0 0 388.424 388.424"},xmlSpace:"preserve"},e.exports=n,n.default=n},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var r=a("q1tI"),n=a.n(r),i=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}},"t+fG":function(e,t,a){var r=a("P8UN"),n=a("96qb"),i=a("ap2Z"),s=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},uWfE:function(e,t,a){var r=a("q1tI");function n(e){return r.createElement("svg",e,r.createElement("g",null,r.createElement("path",{d:"M421.981,16.562C410.941,5.519,397.711,0,382.298,0H56.248C40.83,0,27.604,5.521,16.561,16.562   C5.52,27.6,0.001,40.828,0.001,56.243V382.29c0,15.413,5.518,28.644,16.56,39.683c11.043,11.04,24.272,16.563,39.687,16.563   h326.046c15.41,0,28.644-5.523,39.684-16.563c11.043-11.039,16.557-24.27,16.557-39.683V56.243   C438.534,40.825,433.021,27.604,421.981,16.562z M157.462,158.025c17.224-16.652,37.924-24.982,62.097-24.982   c24.36,0,45.153,8.33,62.381,24.982c17.228,16.655,25.837,36.785,25.837,60.386c0,23.598-8.609,43.729-25.837,60.379   c-17.228,16.659-38.014,24.988-62.381,24.988c-24.172,0-44.87-8.336-62.097-24.988c-17.228-16.652-25.841-36.781-25.841-60.379   C131.621,194.81,140.234,174.681,157.462,158.025z M388.865,370.589c0,4.945-1.718,9.083-5.141,12.416   c-3.433,3.33-7.519,4.996-12.282,4.996h-305.2c-4.948,0-9.091-1.666-12.419-4.996c-3.333-3.326-4.998-7.471-4.998-12.416V185.575   H89.08c-3.805,11.993-5.708,24.462-5.708,37.402c0,36.553,13.322,67.715,39.969,93.511c26.65,25.786,58.721,38.685,96.217,38.685   c24.744,0,47.583-5.903,68.527-17.703c20.937-11.807,37.486-27.839,49.676-48.112c12.183-20.272,18.274-42.4,18.274-66.38   c0-12.94-1.91-25.406-5.715-37.402h38.547v185.014H388.865z M388.865,115.626c0,5.52-1.903,10.184-5.716,13.99   c-3.805,3.809-8.466,5.711-13.989,5.711h-49.676c-5.517,0-10.185-1.903-13.99-5.711c-3.806-3.806-5.708-8.47-5.708-13.99V68.522   c0-5.33,1.902-9.945,5.708-13.848c3.806-3.901,8.474-5.854,13.99-5.854h49.676c5.523,0,10.185,1.952,13.989,5.854   c3.812,3.903,5.716,8.518,5.716,13.848V115.626z"})))}n.defaultProps={version:"1.1",x:"0px",y:"0px",width:"20px",height:"20px",viewBox:"0 0 438.536 438.536",style:{enableBackground:"new 0 0 438.536 438.536"},xmlSpace:"preserve"},e.exports=n,n.default=n},y7hu:function(e,t,a){"use strict";a("t+fG")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},yp8A:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));a("pJf4");var r=a("q1tI"),n=a.n(r),i=a("9eSz"),s=a.n(i),l=a("Bl7J"),o=a("uzhU"),c=a.n(o);t.default=function(e){var t=e.data;return n.a.createElement(l.a,{className:c.a.album},n.a.createElement("section",null,t.allGalleryYaml.edges[0].node.images.map((function(e){return n.a.createElement("div",null,n.a.createElement(s.a,{className:c.a.image,fluid:e.image.childImageSharp.fluid,alt:e.alt||e.image.name}))}))))};var d="893489621"}}]);
//# sourceMappingURL=component---src-pages-gallery-js-23b145d70903164477c8.js.map