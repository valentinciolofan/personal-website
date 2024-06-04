import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import './chunks/astro_SKuPPxjG.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.N-NgkxdU.js"}],"styles":[{"type":"external","src":"/_astro/another.peALCJ8E.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.zU_1TsLA.js"}],"styles":[{"type":"external","src":"/_astro/another.peALCJ8E.css"}],"routeData":{"route":"/another","type":"page","pattern":"^\\/another\\/?$","segments":[[{"content":"another","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/another.astro","pathname":"/another","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.zU_1TsLA.js"}],"styles":[{"type":"external","src":"/_astro/another.peALCJ8E.css"}],"routeData":{"route":"/blog/[...slug]","type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.zU_1TsLA.js"}],"styles":[{"type":"external","src":"/_astro/another.peALCJ8E.css"}],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Web Projects/Astro/Personal Website/portofolio/src/pages/another.astro",{"propagation":"none","containsHead":true}],["D:/Web Projects/Astro/Personal Website/portofolio/src/pages/blog.astro",{"propagation":"in-tree","containsHead":true}],["D:/Web Projects/Astro/Personal Website/portofolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["D:/Web Projects/Astro/Personal Website/portofolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/another@_@astro":"pages/another.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/blog@_@astro":"pages/blog.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/another.astro":"chunks/pages/another_LrsCVeGC.mjs","/src/pages/blog.astro":"chunks/pages/blog_85WNw9ve.mjs","/src/pages/index.astro":"chunks/pages/index_J3QS9SSp.mjs","\u0000@astrojs-manifest":"manifest_2H_sxJtK.mjs","D:/Web Projects/Astro/Personal Website/portofolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-1.md?astroContentCollectionEntry=true":"chunks/post-1_lIIm4gO_.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-2.md?astroContentCollectionEntry=true":"chunks/post-2_EzFcViKx.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-3.md?astroContentCollectionEntry=true":"chunks/post-3_5uF25yAF.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-4.md?astroContentCollectionEntry=true":"chunks/post-4_4qKiIg2O.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-1.md?astroPropagatedAssets":"chunks/post-1_B2F5YAGt.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-2.md?astroPropagatedAssets":"chunks/post-2_zyZQj59v.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-3.md?astroPropagatedAssets":"chunks/post-3_Se39wgXQ.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-4.md?astroPropagatedAssets":"chunks/post-4_Em6oKec6.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-1.md":"chunks/post-1_8WjgNy0w.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-2.md":"chunks/post-2_ZJd5gZ51.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-3.md":"chunks/post-3_00P7CVw7.mjs","D:/Web Projects/Astro/Personal Website/portofolio/src/content/posts/post-4.md":"chunks/post-4_7Hzli7Vc.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.N-NgkxdU.js","/astro/hoisted.js?q=1":"_astro/hoisted.zU_1TsLA.js","@astrojs/react/client.js":"_astro/client.gSoe9Upx.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
