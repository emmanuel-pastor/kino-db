(this["webpackJsonpkino-db"]=this["webpackJsonpkino-db"]||[]).push([[0],{191:function(e,t,n){e.exports={Component:"MovieComponent_Component__hC6_j"}},192:function(e,t,n){},194:function(e,t,n){e.exports={SidePanel:"MovieDetailsSidePanel_SidePanel__HWfhu"}},195:function(e,t,n){e.exports={Block:"SidePanelInfoBlock_Block__1JNpR"}},196:function(e,t,n){e.exports={WrapperRow:"MovieDetailsActorsSection_WrapperRow__1ePqC"}},208:function(e,t,n){},209:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);var i,a=n(1),o=n(0),c=n.n(o),r=n(18),s=n.n(r),l=(n(208),n(209),n(23)),u=n.n(l),d=n.p+"static/media/logo.9282528c.svg";!function(e){e.ROOT="/",e.UPCOMING_MOVIES="/upcoming",e.POPULAR_MOVIES="/popular",e.SEARCH="/search",e.MOVIE_DETAILS="/movie-details"}(i||(i={}));var v,h=n(4),p=n(25),m=n(8),j=n(246),b=n(243),_=n(247),g=n(20),f=n(190),O=n.n(f),x=n(197),M=n(13),S=n(9),I=n(65),w=n.n(I),C=n(187),E=n(188),N=n(38),y="4358ba3b339711cb0c2af7b85970b79b",R="https://api.themoviedb.org/3";!function(e){e.POPULAR_MOVIES="/movie/popular",e.UPCOMING_MOVIES="/movie/upcoming",e.MOVIE_SEARCH="/search/movie",e.MULTI_SEARCH="/search/multi",e.MOVIE_DETAILS="/movie",e.MOVIE_CREDITS="/credits",e.MOVIE_VIDEOS="/videos",e.IMDB_RATING="/rating"}(v||(v={}));var k=function(){function e(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:R,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];Object(E.a)(this,e),this.baseUrl=i,this.requiresApiKey=a,this.requestUrl=void 0,this.requestType=void 0,this.updateState=void 0,this.cacheExpirationTime=432e5;var o=a?"?api_key="+y:"";this.requestUrl=i+t+o,this.requestType=t,this.updateState=n}return Object(N.a)(e,[{key:"addParameter",value:function(e,t){var n=this.requestUrl.includes("?")?"&":"?";return this.requestUrl+=n+e+"="+t,this}},{key:"setCacheExpiration",value:function(e){return this.cacheExpirationTime=e,this}},{key:"fetch",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(Object(C.a)(w.a.mark((function e(){var t,n,i,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(t=window.sessionStorage.getItem(this.requestType)?JSON.parse(window.sessionStorage.getItem(this.requestType)):"")||this.isCacheExpired(t.timestamp)){e.next=5;break}this.updateState(t.content),e.next=18;break;case 5:return e.next=7,fetch(this.requestUrl);case 7:if(!(n=e.sent).ok){e.next=17;break}return e.next=11,n.json();case 11:i=e.sent,a={timestamp:(new Date).getTime(),content:i},window.sessionStorage.setItem(this.requestType,JSON.stringify(a)),this.updateState(i),e.next=18;break;case 17:throw new Error("HTTP error! status: ".concat(n.status));case 18:case"end":return e.stop()}}),e,this)}))))},{key:"isCacheExpired",value:function(e){return(new Date).getTime()-e>this.cacheExpirationTime}}]),e}(),L=n(242),P=n(245),D={movies:Array(1),search:"",setSearch:function(e){},fetchUpcomingMovies:function(){},fetchPopularMovies:function(){},fetchMovies:function(e){}},T=Object(o.createContext)(D),A=function(e){var t=Object(o.useState)(Array(1)),n=Object(S.a)(t,2),i=n[0],c=n[1],r=Object(o.useState)(""),s=Object(S.a)(r,2),l=s[0],u=s[1],d=Object(o.useState)(!1),h=Object(S.a)(d,2),p=h[0],m=h[1],j=function(){m(!0)};function b(e){return Object(a.jsx)(P.a,Object(M.a)({elevation:6,variant:"filled"},e))}var _=function(e,t){"clickaway"!==t&&m(!1)};return Object(a.jsxs)(T.Provider,{value:{movies:i,search:l,setSearch:u,fetchUpcomingMovies:function(){new k(v.UPCOMING_MOVIES,(function(e){c(e.results)})).fetch().catch(j)},fetchPopularMovies:function(){new k(v.POPULAR_MOVIES,(function(e){c(e.results)})).fetch().catch(j)},fetchMovies:function(e){new k(v.MOVIE_SEARCH,(function(e){c(e.results)})).addParameter("query",e).setCacheExpiration(0).fetch().catch(j)}},children:[e.children,Object(a.jsx)(L.a,{open:p,autoHideDuration:6e3,onClose:_,children:Object(a.jsx)(b,{onClose:_,severity:"error",children:"Something went wrong"})})]})},U=Object(b.a)((function(e){return Object(_.a)({search:Object(m.a)({position:"relative",alignSelf:"center",textAlign:"start",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.c)(e.palette.common.black,.025),"&:hover":{backgroundColor:Object(g.c)(e.palette.common.black,.07)},marginLeft:0},e.breakpoints.up("sm"),{width:"auto"}),searchIcon:{padding:e.spacing(0,2),color:x.a.grey[600],height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(m.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})})}));function W(){var e=U(),t=Object(o.useContext)(T),n=t.search,i=t.setSearch,c=t.fetchMovies,r=Object(h.f)();return Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(O.a,{})}),Object(a.jsx)(j.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},spellCheck:!1,onChange:function(e){return i(e.target.value)},onBlur:function(e){return e.target.value=""},onKeyPress:function(e){"Enter"===e.key&&(r.push("/search/".concat(n)),c(n))}})]})}var V,B,z=function(){var e=Object(h.g)().pathname;return Object(a.jsxs)("div",{className:u.a.NavBar,children:[Object(a.jsx)(p.b,{to:i.ROOT,activeClassName:u.a.LogoTitleDiv,children:Object(a.jsxs)("div",{className:u.a.LogoTitleDiv,children:[Object(a.jsx)("img",{className:u.a.Logo,src:d,alt:"Website logo"}),Object(a.jsx)("p",{className:u.a.NavTitle,children:"Kino Db"})]})}),Object(a.jsxs)("ul",{className:u.a.NavigationLinks,children:[Object(a.jsx)(p.b,{to:i.UPCOMING_MOVIES,activeClassName:u.a.active,isActive:function(){return[i.ROOT.toString(),i.UPCOMING_MOVIES.toString()].includes(e)},children:Object(a.jsx)("li",{children:"Upcoming Movies"})}),Object(a.jsx)(p.b,{to:i.POPULAR_MOVIES,activeClassName:u.a.active,children:Object(a.jsx)("li",{children:"Popular Movies"})}),Object(a.jsx)(W,{})]})]})},G=n(47),H=n.n(G),q=n.p+"static/media/film.1ceaa3b0.svg";!function(e){e.X_SMALL="xsm",e.SMALL="sm",e.MEDIUM="md",e.LARGE="lg",e.X_LARGE="xlg"}(V||(V={})),function(e){e.LOW="/w185",e.MEDIUM="/w500",e.HIGH="/w780"}(B||(B={}));var F=function(e){var t=void 0===e.size||e.size!==V.LARGE?V.MEDIUM:e.size;if(null==e.poster_path)return Object(a.jsx)("div",{className:H.a["poster-".concat(t)]+" "+H.a["EmptyImage-".concat(t)],children:Object(a.jsx)("img",{className:H.a["EmptyLogo-".concat(t)],src:q,alt:""})});var n="https://image.tmdb.org/t/p"+(void 0===e.quality?B.LOW:e.quality)+e.poster_path;return Object(a.jsx)("div",{children:Object(a.jsx)("img",{className:H.a["poster-".concat(t)],src:n,alt:"Movie Poster"})})},J=n(48),Y=n.n(J),K=n.p+"static/media/star.de82f684.svg",Q=function(e){var t,n;return Object(a.jsxs)("div",{className:Y.a.Caption,children:[Object(a.jsx)("h2",{className:Y.a.MovieTitle,children:null!==(t=e.title)&&void 0!==t?t:"unknown title"}),Object(a.jsxs)("div",{className:Y.a.RatingRow,children:[Object(a.jsx)("img",{className:Y.a.RatingIcon,src:K,alt:""}),Object(a.jsx)("span",{children:null!==(n=e.vote_average)&&void 0!==n?n:"NaN"})]})]})},Z=n(191),X=n.n(Z),$=function(e){var t;return Object(a.jsxs)(p.b,{to:"".concat(i.MOVIE_DETAILS,"/").concat(e.id),className:X.a.Component,children:[Object(a.jsx)(F,{poster_path:e.poster_path}),Object(a.jsx)(Q,{title:null!==(t=e.title)&&void 0!==t?t:e.name,vote_average:e.vote_average})]})},ee=n(192),te=n.n(ee);var ne=function(e){return Object(a.jsx)("div",{style:te.a,children:Object(a.jsx)("h1",{hidden:e.hidden,children:"There are no movies that match your query... Sorry!"})})},ie=n(68),ae=n.n(ie),oe=n.p+"static/media/tmdb.7d4fa33f.svg",ce=function(){return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginTop:"2em"},children:[Object(a.jsx)("img",{style:{maxHeight:"6vh",width:"auto",marginBottom:"0.4em"},src:oe,alt:"TMDB logo"}),Object(a.jsx)("span",{children:"This product uses the TMDb API but is not endorsed or certified by TMDb."})]})};var re=function(){var e=Object(o.useContext)(T),t=e.movies,n=e.fetchUpcomingMovies,c=e.fetchPopularMovies,r=e.fetchMovies,s=Object(h.g)().pathname;return Object(o.useEffect)((function(){switch(s){case i.ROOT:case i.UPCOMING_MOVIES:n();break;case i.POPULAR_MOVIES:c();break;default:s.startsWith(i.SEARCH)&&r(s.split(i.SEARCH)[1].substring(1))}}),[s]),Object(a.jsxs)("div",{className:ae.a.Wrapper,children:[Object(a.jsx)("div",{className:ae.a.MovieList,children:t.map((function(e){return Object(a.jsx)($,Object(M.a)({},e),e.id)}))}),Object(a.jsx)(ne,{hidden:0!==t.length}),Object(a.jsx)(ce,{})]})},se=n(193),le={detailedMovie:{},rating:{id:"",averageRating:"0",numVotes:0},movieCredits:{},trailer:{},fetchMovieDetails:function(e){},fetchMovieCredits:function(e){},fetchMovieVideos:function(e){}},ue=Object(o.createContext)(le),de=function(e){var t=Object(o.useState)({}),n=Object(S.a)(t,2),i=n[0],c=n[1],r=Object(o.useState)({}),s=Object(S.a)(r,2),l=s[0],u=s[1],d=Object(o.useState)({}),h=Object(S.a)(d,2),p=h[0],m=h[1],j=Object(o.useState)(null),b=Object(S.a)(j,2),_=b[0],g=b[1],f=Object(o.useState)(!1),O=Object(S.a)(f,2),x=O[0],I=O[1],w=function(e){new k("/".concat(e).concat(v.IMDB_RATING),(function(e){u(e.result)}),"https://kinodb.ssa-apis.com",!1).fetch().catch(E)},C=function(e){if(void 0!==e&&e.length>0){var t=e.filter((function(e){var t;return"trailer"===(null===(t=e.type)||void 0===t?void 0:t.toLowerCase())}));0!==t.length?g(t[0]):g(null)}else g(null)},E=function(){I(!0)};function N(e){return Object(a.jsx)(P.a,Object(M.a)({elevation:6,variant:"filled"},e))}var y=function(e,t){"clickaway"!==t&&I(!1)};return Object(a.jsx)(ue.Provider,{value:{detailedMovie:i,rating:l,movieCredits:p,trailer:_,fetchMovieDetails:function(e){new k("".concat(v.MOVIE_DETAILS,"/").concat(e),(function(e){c(e),w(e.imdb_id)})).fetch().catch(E)},fetchMovieCredits:function(e){new k("".concat(v.MOVIE_DETAILS,"/").concat(e).concat(v.MOVIE_CREDITS),(function(e){m(e)})).fetch().catch(E)},fetchMovieVideos:function(e){new k("".concat(v.MOVIE_DETAILS,"/").concat(e).concat(v.MOVIE_VIDEOS),(function(e){C(e.results)})).fetch().catch(E)}},children:Object(a.jsxs)(a.Fragment,{children:[e.children,Object(a.jsx)(L.a,{open:x,autoHideDuration:6e3,onClose:y,children:Object(a.jsx)(N,{onClose:y,severity:"error",children:"Something went wrong"})})]})})},ve=n(69),he=n.n(ve),pe=n(27),me=n.n(pe),je=n(70),be=n.n(je),_e=function(e){var t=void 0===e.size?V.MEDIUM:e.size;return Object(a.jsx)("div",{className:be.a.common+" "+be.a["size-".concat(t)],children:e.genre.name},e.genre.id)},ge=function(e){var t,n=Math.floor(e.runtime/60),i=n.toString()+"h "+(e.runtime-60*n).toString()+"min";return Object(a.jsxs)("div",{className:me.a.Wrapper,children:[Object(a.jsx)(F,{poster_path:e.poster_path,size:V.LARGE,quality:B.MEDIUM}),Object(a.jsxs)("div",{className:me.a.RightSection,children:[Object(a.jsxs)("div",{className:me.a.Header,children:[Object(a.jsx)("h1",{children:e.title}),Object(a.jsxs)("div",{className:me.a.YearAndRuntime,children:[Object(a.jsx)("span",{children:e.release_year}),Object(a.jsx)("span",{children:i})]}),Object(a.jsx)("div",{className:me.a.GenreList,children:null===(t=e.genres)||void 0===t?void 0:t.map((function(e){return _e({genre:e,size:V.MEDIUM})}))})]}),Object(a.jsxs)("div",{className:me.a.PlotSummary,children:[Object(a.jsx)("h2",{children:"Plot Summary"}),Object(a.jsx)("p",{children:e.overview})]})]})]})},fe=n(194),Oe=n.n(fe),xe=n(195),Me=n.n(xe),Se=function(e){return Object(a.jsxs)("div",{className:Me.a.Block,children:[Object(a.jsx)("h2",{children:e.name}),Object(a.jsx)("p",{children:e.value})]})},Ie=n(54),we=n.n(Ie),Ce=n.p+"static/media/imdb.2aaed4da.svg",Ee=function(e){return Object(a.jsxs)("div",{className:we.a.RowWrapper,children:[Object(a.jsxs)("div",{className:we.a.Wrapper,children:[Object(a.jsx)("img",{src:oe,alt:"Star Icon"}),Object(a.jsxs)("h2",{children:[e.tmdb_vote_average,"/10"]}),Object(a.jsx)("span",{children:e.tmdb_vote_count})]}),Object(a.jsxs)("div",{className:we.a.Wrapper,children:[Object(a.jsx)("img",{src:Ce,alt:"Star Icon"}),Object(a.jsxs)("h2",{children:[e.imdb_vote_average,"/10"]}),Object(a.jsx)("span",{children:e.imdb_vote_count})]})]})},Ne=n.p+"static/media/play.b2f4ba6a.svg",ye=n(71),Re=n.n(ye),ke=function(){var e=Object(o.useContext)(ue).trailer,t=Object(o.useState)("#"),n=Object(S.a)(t,2),i=n[0],c=n[1];return null==e?Object(a.jsx)(a.Fragment,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("a",{href:i,className:Re.a.WrappingLink,target:"_blank",rel:"noreferrer",children:Object(a.jsxs)("button",{className:Re.a.PlayButton,onClick:function(){var t;switch(null===e||void 0===e||null===(t=e.site)||void 0===t?void 0:t.toLowerCase()){case"youtube":c("https://www.youtube.com/watch?v=".concat(null===e||void 0===e?void 0:e.key));break;case"vimeo":c("https://vimeo.com/".concat(null===e||void 0===e?void 0:e.key))}},children:[Object(a.jsx)("img",{src:Ne,alt:"Play Button Icon"}),Object(a.jsx)("span",{children:"Play Trailer"})]})})})},Le=function(e){return"$"+Intl.NumberFormat("en-US",{maximumSignificantDigits:3}).format(e)},Pe=function(e){return Intl.NumberFormat("en-US").format(e)},De=function(e){var t,n=[{name:"Director",value:e.director},{name:"Release Date",value:(t=e.release_date,new Date(t).toLocaleDateString("en-IN",{year:"numeric",month:"long",day:"numeric"}))},{name:"Budget",value:Le(e.budget)},{name:"Revenue",value:Le(e.revenue)}],i={tmdb_vote_average:e.tmdb_vote_average,tmdb_vote_count:Pe(e.tmdb_vote_count),imdb_vote_average:e.imdb_vote_average,imdb_vote_count:Pe(e.imdb_vote_count)};return Object(a.jsxs)("div",{className:Oe.a.SidePanel,children:[Object(a.jsx)(Ee,Object(M.a)({},i)),n.map((function(e,t){return Object(a.jsx)(Se,Object(M.a)({},e),t)})),Object(a.jsx)(ke,{})]})},Te=n(40),Ae=n.n(Te),Ue=n.p+"static/media/person.d5b181df.svg",We=function(e){var t,n={backgroundImage:"url(".concat(e.image_url,")")},i={backgroundImage:"url(".concat(Ue,")")};return t=null==e.image_url?i:n,Object(a.jsx)("div",{style:Object(M.a)(Object(M.a)({},{backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center",width:"6em",height:"6em",borderRadius:"50%"}),t)})},Ve=function(e){var t=null==e.profile_path?null:"https://image.tmdb.org/t/p/w185"+e.profile_path;return Object(a.jsxs)("div",{className:Ae.a.ActorWrapper,children:[Object(a.jsx)(We,{image_url:t}),Object(a.jsx)("p",{className:Ae.a.TextCommon+" "+Ae.a.Name,children:e.name}),Object(a.jsx)("p",{className:Ae.a.TextCommon+" "+Ae.a.Character,children:e.character})]})},Be=n(196),ze=n.n(Be),Ge=function(e){var t;return Object(a.jsx)("div",{className:ze.a.WrapperRow,children:null===(t=e.actors)||void 0===t?void 0:t.map((function(e){return Object(a.jsx)(Ve,{name:e.name,character:e.character,profile_path:e.profile_path},e.id)}))})};function He(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var qe=function(){var e,t=Object(h.f)(),n=parseInt(t.location.pathname.split("/").slice(-1)[0]),i=function(){var e=Object(o.useState)(He()),t=Object(S.a)(e,2),n=t[0],i=t[1];return Object(o.useEffect)((function(){function e(){i(He())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),c=i.height,r=i.width,s=Object(o.useContext)(ue),l=s.detailedMovie,u=s.rating,d=s.movieCredits,v=s.fetchMovieDetails,p=s.fetchMovieCredits,m=s.fetchMovieVideos;Object(o.useEffect)((function(){v(n),p(n),m(n)}),[]);var j=void 0===l.poster_path?"":"".concat("https://image.tmdb.org/t/p","/w1280").concat(l.backdrop_path),b=r<=800||r/c<16/9||r/c>=16/9&&c<=700,_={display:"flex",backgroundImage:"url(".concat(j,")"),backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center center",width:"100%",height:b?"":"100%",maxHeight:b?"":"calc(100% - 76px)"},g={title:l.title,release_year:null===(e=l.release_date)||void 0===e?void 0:e.split("-")[0],runtime:l.runtime,genres:l.genres,overview:l.overview,poster_path:l.poster_path},f={tmdb_vote_average:l.vote_average,tmdb_vote_count:l.vote_count,imdb_vote_average:u.averageRating,imdb_vote_count:u.numVotes,director:function(e){if(void 0!==e&&e.length>0){var t=e.filter((function(e){var t;return"director"===(null===(t=e.job)||void 0===t?void 0:t.toLowerCase())})),n="";if(0!==t.length){var i,a=Object(se.a)(t);try{for(a.s();!(i=a.n()).done;){var o=i.value;n+="".concat(o.name," & ")}}catch(c){a.e(c)}finally{a.f()}}return n.substring(0,n.length-3)}return""}(d.crew),release_date:l.release_date,budget:l.budget,revenue:l.revenue};return Object(a.jsx)("div",{style:_,children:Object(a.jsxs)("div",{className:he.a.InnerDiv,children:[Object(a.jsxs)("div",{className:he.a.MainSection,children:[Object(a.jsx)(ge,Object(M.a)({},g)),Object(a.jsx)(Ge,{actors:d.cast})]}),Object(a.jsx)(De,Object(M.a)({},f))]})})},Fe=function(){return Object(a.jsx)(A,{children:Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(de,{children:Object(a.jsxs)(p.a,{basename:"kino-db",children:[Object(a.jsx)(z,{}),Object(a.jsxs)(h.c,{children:[Object(a.jsx)(h.a,{path:i.MOVIE_DETAILS,component:function(){return qe()}}),Object(a.jsx)(h.a,{path:[i.ROOT,i.UPCOMING_MOVIES,i.POPULAR_MOVIES,i.SEARCH],component:function(){return re()}})]})]})})})})},Je=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,249)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),o(e),c(e)}))},Ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ke(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(Fe,{})}),document.getElementById("root")),Je(),function(){if("serviceWorker"in navigator){if(new URL("/kino-db",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/kino-db","/service-worker.js");Ye?(!function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ke(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):Ke(e)}))}}()},23:function(e,t,n){e.exports={LogoTitleLink:"NavBar_LogoTitleLink__3V9KR",NavBar:"NavBar_NavBar__jRrhc",LogoTitleDiv:"NavBar_LogoTitleDiv__3vAYf",Logo:"NavBar_Logo__3uj8s",NavTitle:"NavBar_NavTitle__2neut",NavigationLinks:"NavBar_NavigationLinks__3Ld1o",active:"NavBar_active__2knRJ"}},27:function(e,t,n){e.exports={Wrapper:"MovieDetailsMainSection_Wrapper__3Z__8",RightSection:"MovieDetailsMainSection_RightSection__2HqRp",Header:"MovieDetailsMainSection_Header__3_zHU",YearAndRuntime:"MovieDetailsMainSection_YearAndRuntime__14gPb",GenreList:"MovieDetailsMainSection_GenreList__eeDI2",PlotSummary:"MovieDetailsMainSection_PlotSummary__3ND58"}},40:function(e,t,n){e.exports={ActorWrapper:"ActorComponent_ActorWrapper__3lcmO",TextCommon:"ActorComponent_TextCommon__1tDDM",Name:"ActorComponent_Name__3-qIx",Character:"ActorComponent_Character__MUgjk"}},47:function(e,t,n){e.exports={"poster-md":"MoviePoster_poster-md__1jWO1","poster-lg":"MoviePoster_poster-lg__3R9sy","EmptyImage-md":"MoviePoster_EmptyImage-md__21up0","EmptyImage-lg":"MoviePoster_EmptyImage-lg__2HwtI","EmptyLogo-md":"MoviePoster_EmptyLogo-md__21Exy","EmptyLogo-lg":"MoviePoster_EmptyLogo-lg__258CS"}},48:function(e,t,n){e.exports={Caption:"MoviePosterCaption_Caption__11oZa",MovieTitle:"MoviePosterCaption_MovieTitle__CwIM-",RatingRow:"MoviePosterCaption_RatingRow__2j1Z6",RatingIcon:"MoviePosterCaption_RatingIcon__3mR6Y"}},54:function(e,t,n){e.exports={RowWrapper:"Rating_RowWrapper__2oi4O",Wrapper:"Rating_Wrapper__hAnUz"}},68:function(e,t,n){e.exports={Wrapper:"MovieList_Wrapper__2ML9q",MovieList:"MovieList_MovieList__3qRRe"}},69:function(e,t,n){e.exports={InnerDiv:"MovieDetailsComponent_InnerDiv__3R3LR",MainSection:"MovieDetailsComponent_MainSection__28Q7J"}},70:function(e,t,n){e.exports={common:"GenreChip_common__2F5qz","size-xsm":"GenreChip_size-xsm__DMRRk","size-sm":"GenreChip_size-sm__2ItiB","size-md":"GenreChip_size-md__2HKlT","size-lg":"GenreChip_size-lg__2-g2f","size-xlg":"GenreChip_size-xlg__1QGAS"}},71:function(e,t,n){e.exports={WrappingLink:"TrailerButton_WrappingLink__97l9Y",PlayButton:"TrailerButton_PlayButton__2WPzU"}}},[[223,1,2]]]);
//# sourceMappingURL=main.07320f18.chunk.js.map