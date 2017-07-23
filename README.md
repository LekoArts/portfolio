# LekoArts Portfolio (2017)

Static portfolio made with [Gatsby](https://www.gatsbyjs.org/docs/) and with the help of SASS, Webstorm and Webpack.

## Develop

`gatby delevop` starts a hot-reloading development server at `localhost:8000`.

The .js files in "src/pages" represent the different pages. Links to these sites have to have the same name as the file (e.g. `<a href="/contact" />`refers to contact.js).

## Build

`gatsby build` creates the production build for the deployment.

## Plugins

Plugins are available [here](https://www.gatsbyjs.org/docs/plugins/).

## Features

* Blazing fast loading times thanks to prerendered HTML and automatic chunk loading of JS files
* Separate components for everything
* High configurability:
  * User information
  * User social profiles
  * Copyright information
  * More!
* Author segment
  * Name
  * Location
  * Description
  * Links
  * Follow Me button
* Posts in Markdown
  * Code syntax highlighting
  * Embded YouTube videos
  * Embded Tweets
* Tags
  * Seprate page for posts under each tag
* Categories
  * Separate page for posts under each category
* Disqus support
  * Notifictions about new disqus comments
* Google Analytics support
* NPM scripts for GitHub Pages deployment
* Social features
  * Twitter tweet button
  * Facebook share/share count
  * Reddit share/share count
  * Google+ share button
  * LinkedIn share button
  * Telegram share button
* SEO
  * Sitemap generation
  * robots.txt
  * General description tags
  * Schema.org JSONLD (Google Rich Snippets)
  * OpenGraph Tags (Facebook/Google+/Pinterest)
  * Twitter Tags (Twitter Cards)
* RSS feeds
* Loading progress for slow networks
* Offline support
* Web App Manifest support