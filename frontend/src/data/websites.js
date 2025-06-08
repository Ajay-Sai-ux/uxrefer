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
  },
];

export default websites;