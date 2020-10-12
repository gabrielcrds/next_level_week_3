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

8. 