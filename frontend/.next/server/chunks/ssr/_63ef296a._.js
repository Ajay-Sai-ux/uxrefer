module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}}),
"[project]/src/components/Card/Card.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$Card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card/Card.jsx [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './Home.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const allSites = [];
const Home = ()=>{
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])("");
    const filteredSites = filter ? allSites.filter((site)=>site.tags.includes(filter) || site.aesthetic === filter || site.style === filter || site.theme === filter) : allSites;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.filters,
                children: [
                    [
                        "minimal",
                        "gradient",
                        "dark",
                        "minimalistic",
                        "hero"
                    ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setFilter(tag),
                            className: styles.filterButton,
                            children: tag
                        }, tag, false, {
                            fileName: "[project]/src/components/Card/Card.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setFilter(""),
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Card/Card.jsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Card/Card.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: styles.cardGrid,
                children: filteredSites.map((site)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$Card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        url: site.url,
                        title: site.title,
                        src: `https://s.wordpress.com/mshots/v1/${site.url}?w=1800`
                    }, site.url, false, {
                        fileName: "[project]/src/components/Card/Card.jsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Card/Card.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Card/Card.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Home;
}}),
"[project]/src/app/page.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "main": "page-module___8aEwW__main",
  "page": "page-module___8aEwW__page",
  "website": "page-module___8aEwW__website",
});
}}),
"[project]/src/components/Header/Header.module.css [app-rsc] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "header": "Header-module__ldgnoG__header",
  "nav": "Header-module__ldgnoG__nav",
});
}}),
"[project]/src/components/Header/Header.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/Header/Header.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
;
;
;
;
const Header = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].header,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].title,
                src: "/uxrLogo.svg",
                alt: "UxRefer Logo",
                width: 66,
                height: 24
            }, void 0, false, {
                fileName: "[project]/src/components/Header/Header.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].nav,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/Header.jsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        children: "Donate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header/Header.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header/Header.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Header/Header.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Header;
}}),
"[project]/src/data/websites.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const websites = [
    {
        "title": "Apple",
        "url": "https://www.apple.com/"
    },
    {
        "title": "Stripe",
        "url": "https://stripe.com/"
    },
    {
        "title": "Dropbox",
        "url": "https://www.dropbox.com/"
    },
    {
        "title": "Spotify",
        "url": "https://www.spotify.com/"
    },
    {
        "title": "Slack",
        "url": "https://slack.com/"
    },
    {
        "title": "Uber",
        "url": "https://www.uber.com/"
    },
    {
        "title": "Facebook",
        "url": "https://www.facebook.com/"
    },
    {
        "title": "Instagram",
        "url": "https://www.instagram.com/"
    },
    {
        "title": "Netflix",
        "url": "https://www.netflix.com/"
    },
    {
        "title": "GitHub",
        "url": "https://github.com/"
    },
    {
        "title": "Behance",
        "url": "https://www.behance.net/"
    },
    {
        "title": "Dribbble",
        "url": "https://dribbble.com/"
    },
    {
        "title": "Trello",
        "url": "https://trello.com/"
    },
    {
        "title": "Asana",
        "url": "https://asana.com/"
    },
    {
        "title": "Notion",
        "url": "https://www.notion.so/"
    },
    {
        "title": "Pinterest",
        "url": "https://www.pinterest.com/"
    },
    {
        "title": "LinkedIn",
        "url": "https://www.linkedin.com/"
    },
    {
        "title": "Squarespace",
        "url": "https://www.squarespace.com/"
    },
    {
        "title": "Figma",
        "url": "https://figma.com/"
    },
    {
        "title": "Netflix",
        "url": "https://www.netflix.com/"
    },
    {
        "title": "WordPress",
        "url": "https://wordpress.com/"
    },
    {
        "title": "Shopify",
        "url": "https://www.shopify.com/"
    },
    {
        "title": "Wix",
        "url": "https://www.wix.com/"
    },
    {
        "title": "Mailchimp",
        "url": "https://mailchimp.com/"
    },
    {
        "title": "Zendesk",
        "url": "https://www.zendesk.com/"
    },
    {
        "title": "Calendly",
        "url": "https://calendly.com/"
    },
    {
        "title": "CodePen",
        "url": "https://codepen.io/"
    },
    {
        "title": "CodeSandbox",
        "url": "https://codesandbox.io/"
    },
    {
        "title": "Glitch",
        "url": "https://glitch.com/"
    },
    {
        "title": "InVision",
        "url": "https://www.invisionapp.com/"
    },
    {
        "title": "Drift",
        "url": "https://www.drift.com/"
    },
    {
        "title": "Intercom",
        "url": "https://www.intercom.com/"
    },
    {
        "title": "GitLab",
        "url": "https://gitlab.com/"
    },
    {
        "title": "Atlassian",
        "url": "https://www.atlassian.com/"
    },
    {
        "title": "Zoom",
        "url": "https://zoom.us/"
    },
    {
        "title": "Stripe",
        "url": "https://stripe.com/"
    },
    {
        "title": "Robinhood",
        "url": "https://robinhood.com/"
    },
    {
        "title": "Twitch",
        "url": "https://www.twitch.tv/"
    },
    {
        "title": "Dropbox",
        "url": "https://www.dropbox.com/"
    },
    {
        "title": "Hulu",
        "url": "https://www.hulu.com/"
    },
    {
        "title": "Salesforce",
        "url": "https://www.salesforce.com/"
    },
    {
        "title": "Evernote",
        "url": "https://evernote.com/"
    },
    {
        "title": "Trello",
        "url": "https://trello.com/"
    },
    {
        "title": "Basecamp",
        "url": "https://basecamp.com/"
    },
    {
        "title": "Bitbucket",
        "url": "https://bitbucket.org/"
    },
    {
        "title": "DuckDuckGo",
        "url": "https://duckduckgo.com/"
    },
    {
        "title": "Dribbble",
        "url": "https://dribbble.com/"
    },
    {
        "title": "Unsplash",
        "url": "https://unsplash.com/"
    },
    {
        "title": "Behance",
        "url": "https://www.behance.net/"
    },
    {
        "title": "Notion",
        "url": "https://www.notion.so/"
    },
    {
        "title": "Zoom",
        "url": "https://zoom.us/"
    },
    {
        "title": "Wix",
        "url": "https://www.wix.com/"
    },
    {
        "title": "Y Combinator",
        "url": "https://www.ycombinator.com/"
    },
    {
        "title": "Codecademy",
        "url": "https://www.codecademy.com/"
    },
    {
        "title": "Coursera",
        "url": "https://www.coursera.org/"
    },
    {
        "title": "Khan Academy",
        "url": "https://www.khanacademy.org/"
    },
    {
        "title": "Duolingo",
        "url": "https://www.duolingo.com/"
    },
    {
        "title": "Figma",
        "url": "https://www.figma.com/"
    },
    {
        "title": "InVision",
        "url": "https://www.invisionapp.com/"
    },
    {
        "title": "Zoom",
        "url": "https://zoom.us/"
    },
    {
        "title": "Microsoft",
        "url": "https://www.microsoft.com/"
    },
    {
        "title": "Intel",
        "url": "https://www.intel.com/"
    },
    {
        "title": "Samsung",
        "url": "https://www.samsung.com/"
    },
    {
        "title": "NASA",
        "url": "https://www.nasa.gov/"
    },
    {
        "title": "BBC",
        "url": "https://www.bbc.com/"
    },
    {
        "title": "The New York Times",
        "url": "https://www.nytimes.com/"
    },
    {
        "title": "The Guardian",
        "url": "https://www.theguardian.com/"
    },
    {
        "title": "Bloomberg",
        "url": "https://www.bloomberg.com/"
    },
    {
        "title": "TechCrunch",
        "url": "https://techcrunch.com/"
    },
    {
        "title": "Wired",
        "url": "https://www.wired.com/"
    },
    {
        "title": "Mashable",
        "url": "https://mashable.com/"
    },
    {
        "title": "BuzzFeed",
        "url": "https://www.buzzfeed.com/"
    },
    {
        "title": "Awwwards",
        "url": "https://www.awwwards.com/"
    },
    {
        "title": "CSS-Tricks",
        "url": "https://css-tricks.com/"
    },
    {
        "title": "Smashing Magazine",
        "url": "https://www.smashingmagazine.com/"
    },
    {
        "title": "Codrops",
        "url": "https://tympanus.net/codrops/"
    },
    {
        "title": "99designs",
        "url": "https://99designs.com/"
    },
    {
        "title": "Dribbble Hiring",
        "url": "https://dribbble.com/hire"
    },
    {
        "title": "Envato Tuts+",
        "url": "https://tutsplus.com/"
    },
    {
        "title": "Framer",
        "url": "https://www.framer.com/"
    },
    {
        "title": "LottieFiles",
        "url": "https://lottiefiles.com/"
    },
    {
        "title": "Webflow",
        "url": "https://webflow.com/"
    },
    {
        "title": "Hootsuite",
        "url": "https://hootsuite.com/"
    },
    {
        "title": "Buffer",
        "url": "https://buffer.com/"
    },
    {
        "title": "Zapier",
        "url": "https://zapier.com/"
    },
    {
        "title": "Toggl",
        "url": "https://toggl.com/"
    },
    {
        "title": "Harvest",
        "url": "https://www.getharvest.com/"
    },
    {
        "title": "Monday.com",
        "url": "https://monday.com/"
    },
    {
        "title": "ClickUp",
        "url": "https://clickup.com/"
    },
    {
        "title": "Notion",
        "url": "https://www.notion.so/"
    },
    {
        "title": "Zapier",
        "url": "https://zapier.com/"
    },
    {
        "title": "Typeform",
        "url": "https://www.typeform.com/"
    },
    {
        "title": "SurveyMonkey",
        "url": "https://www.surveymonkey.com/"
    },
    {
        "title": "Calendly",
        "url": "https://calendly.com/"
    },
    {
        "title": "GitHub Pages",
        "url": "https://pages.github.com/"
    },
    {
        "title": "Vercel",
        "url": "https://vercel.com/"
    },
    {
        "title": "Netlify",
        "url": "https://www.netlify.com/"
    },
    {
        "title": "Heroku",
        "url": "https://www.heroku.com/"
    },
    {
        "title": "DigitalOcean",
        "url": "https://www.digitalocean.com/"
    },
    {
        "title": "Firebase",
        "url": "https://firebase.google.com/"
    },
    {
        "title": "MongoDB",
        "url": "https://www.mongodb.com/"
    },
    {
        "title": "Postman",
        "url": "https://www.postman.com/"
    },
    {
        "title": "Codecademy",
        "url": "https://www.codecademy.com/"
    },
    {
        "title": "Kaggle",
        "url": "https://www.kaggle.com/"
    },
    {
        "title": "Stack Overflow",
        "url": "https://stackoverflow.com/"
    },
    {
        "title": "Hacker News",
        "url": "https://news.ycombinator.com/"
    },
    {
        "title": "Product Hunt",
        "url": "https://www.producthunt.com/"
    },
    {
        "title": "AngelList",
        "url": "https://angel.co/"
    },
    {
        "title": "Crunchbase",
        "url": "https://www.crunchbase.com/"
    },
    {
        "title": "Indiegogo",
        "url": "https://www.indiegogo.com/"
    },
    {
        "title": "Vimeo",
        "url": "https://vimeo.com/"
    },
    {
        "title": "Twitch",
        "url": "https://www.twitch.tv/"
    },
    {
        "title": "Discord",
        "url": "https://discord.com/"
    },
    {
        "title": "Telegram",
        "url": "https://telegram.org/"
    },
    {
        "title": "Signal",
        "url": "https://signal.org/"
    },
    {
        "title": "WhatsApp",
        "url": "https://www.whatsapp.com/"
    },
    {
        "title": "Telegram",
        "url": "https://telegram.org/"
    },
    {
        "title": "Dropbox",
        "url": "https://www.dropbox.com/"
    },
    {
        "title": "Google Drive",
        "url": "https://drive.google.com/"
    },
    {
        "title": "OneDrive",
        "url": "https://onedrive.live.com/"
    },
    {
        "title": "Evernote",
        "url": "https://evernote.com/"
    },
    {
        "title": "Todoist",
        "url": "https://todoist.com/"
    },
    {
        "title": "Microsoft To Do",
        "url": "https://todo.microsoft.com/tasks/"
    },
    {
        "title": "Google Keep",
        "url": "https://keep.google.com/"
    },
    {
        "title": "Wunderlist (Microsoft)",
        "url": "https://www.wunderlist.com/"
    },
    {
        "title": "Basecamp",
        "url": "https://basecamp.com/"
    },
    {
        "title": "Zoho",
        "url": "https://www.zoho.com/"
    },
    {
        "title": "HubSpot",
        "url": "https://www.hubspot.com/"
    },
    {
        "title": "Mailchimp",
        "url": "https://mailchimp.com/"
    },
    {
        "title": "Campaign Monitor",
        "url": "https://www.campaignmonitor.com/"
    },
    {
        "title": "ConvertKit",
        "url": "https://convertkit.com/"
    },
    {
        "title": "Sendinblue",
        "url": "https://www.sendinblue.com/"
    },
    {
        "title": "ActiveCampaign",
        "url": "https://www.activecampaign.com/"
    },
    {
        "title": "Airtable",
        "url": "https://airtable.com/"
    },
    {
        "title": "Coda",
        "url": "https://coda.io/"
    },
    {
        "title": "Quip",
        "url": "https://quip.com/"
    },
    {
        "title": "Google Docs",
        "url": "https://docs.google.com/"
    },
    {
        "title": "Microsoft Word Online",
        "url": "https://office.live.com/start/Word.aspx"
    },
    {
        "title": "Dropbox Paper",
        "url": "https://paper.dropbox.com/"
    },
    {
        "title": "Notion",
        "url": "https://www.notion.so/"
    },
    {
        "title": "Evernote",
        "url": "https://evernote.com/"
    },
    {
        "title": "Miro",
        "url": "https://miro.com/"
    },
    {
        "title": "Lucidchart",
        "url": "https://www.lucidchart.com/"
    },
    {
        "title": "InVision",
        "url": "https://www.invisionapp.com/"
    },
    {
        "title": "Sketch",
        "url": "https://www.sketch.com/"
    },
    {
        "title": "Marvel",
        "url": "https://marvelapp.com/"
    },
    {
        "title": "Proto.io",
        "url": "https://proto.io/"
    },
    {
        "title": "UXPin",
        "url": "https://www.uxpin.com/"
    },
    {
        "title": "Zeplin",
        "url": "https://zeplin.io/"
    },
    {
        "title": "Overflow",
        "url": "https://overflow.io/"
    },
    {
        "title": "Loom",
        "url": "https://www.loom.com/"
    },
    {
        "title": "Vimeo",
        "url": "https://vimeo.com/"
    }
];
const __TURBOPACK__default__export__ = websites;
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$Card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Card/Card.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/app/page.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Header/Header.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$websites$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/websites.js [app-rsc] (ecmascript)"); // adjust the path if needed
;
;
;
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].page,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].main,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Header$2f$Header$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].website,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$websites$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].map((site, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Card$2f$Card$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: site.src,
                            title: site.title,
                            url: site.url
                        }, index, false, {
                            fileName: "[project]/src/app/page.js",
                            lineNumber: 13,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.js",
                    lineNumber: 11,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.js",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.js [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_63ef296a._.js.map