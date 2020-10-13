# Happy - Helping schedule visits to orphanages.

An application to help good-doers to schedule visits to local orphanages, developed for the course [Next Level Week 3](https://nextlevelweek.com/).

This application will have mobile and web versions and will be developed with Node, React, and Reactive Native using TypeScript.

## Notes from class \#1

1. When installing [Node](https://nodejs.org/en/), always use a package manager. This way is easier to change Node version or uninstalling. Recommended: install [chocolatey](https://chocolatey.org/) and [yarnpkg](https://yarnpkg.com/).
 - yarn replaces npm, adding some features and with better performance (TODO: check diff)

2. Cool apps to keep notes and organize ideas: [notion](https://www.notion.so/) and [whimsical](https://whimsical.com/).

3. Cool app to plan app views: [figma](https://www.figma.com/)

4. "traditional way" v.s. RESTful API
- "traditional way" - the client (browser) make requests to the server (back-end), which sends back the entire page html with css and js to be reloaded by the client.
- RESTful API - App Front-end make requests to the server, which responds only new content or info, and front-end can show content without needing to completely reload the page (list of items etc.) (JSON)

In the second we can use a single server for mobile and web apps, as the server only needs to send json.

5. Why React? Easier to develop SPAs (Single Page Applications), that is, change page content without reloading the browser.

6. Why TypeScript (js + types)? Because types can make life easier! =)

7. Using Yarn to create project: ``yarn create react-app {project-name} --template typescript``

8. Run project ``yarn start``
- runs index.tsx
  - imports react, react dom, app
  - calls method render, which receives an html element and inputs it into \#root div.
- All 'components' in react are function that returns a html.
  - components can have properties or parameters

9. [Google Fonts](https://fonts.google.com/)

10. Make imports on app.tsx or index.tsx, avoid imports on html.

11. Cool icon package react-icons ``yarn add react-icons``

12. Routing between pages ``yarn add react-router-dom``

13. Free alternatives to google-maps:
- [leafletjs](https://leafletjs.com/) + [react-leaflet](https://react-leaflet.js.org/) + [openstreetmap](https://www.openstreetmap.org/)
- [mapbox](https://www.mapbox.com/)
  - to use this last we would need a secret token and a account. Put these in a '.env' file and make sure it is in .gitignore file.
