/*! Built with http://stenciljs.com */

App.loadStyles("demos-page","demos-page a{text-decoration:none}\ndemos-page.hydrated{visibility:inherit}");
App.loadComponents("nvgxmkhh",function(e,t,i,s){"use strict";class o{constructor(){this.demos=[{title:"Stenciljs.com",description:"Yep, this site is also built with Stencil!",url:"https://stenciljs.com/",source:"https://github.com/ionic-team/stencil-site"},{title:"IonicHN",description:"Hacker News PWA built with @stencil/core and @ionic/core",url:"https://corehacker-10883.firebaseapp.com/",source:"https://github.com/ionic-team/ionic-stencil-hn-app"},{title:"Stencil Fiber demo",description:"This showcases the runtime performance of stencil using our async rendering",url:"https://stencil-fiber-demo.firebaseapp.com/",source:"https://github.com/ionic-team/stencil-fiber-demo"},{title:"StencilNews",description:"Demo of how you could use @stencil/core to build a fast, modern News PWA",url:"https://stencilnews.firebaseapp.com/",source:"https://github.com/ionic-team/stencil-news"}],document.title="Stencil Demos"}render(){return t("div",{class:"wrapper"},t("div",{class:"pull-left"},t("site-menu",null)),t("div",{class:"pull-right"},t("h1",null,"Demos"),t("h4",null,"Awesome demos of apps built using Stencil and Ionic"),this.demos.map(e=>[t("h4",null,e.title),t("p",null,e.description),t("p",null,t("a",{target:"_blank",rel:"noopener",href:e.url},"Demo"),"  ",t("a",{target:"_blank",rel:"noopener",href:e.source},"Source"))])))}}e["demos-page"]=o},["demos-page",0,{}]);;