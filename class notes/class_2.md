## Class \#2 notes

1. Create basic info ``yarn init -y``

2. Add some tools ``yarn add express``
- if vscode dont recognize a module typing, use command ``yarn add @types/{module}`` 

3. Create src/server.ts, base code for server.

4. By default node doesnt recognize typescript, so:
- ``yarn add typescript``
- ``yarn tsc --init``
  - change tsconfig["target"] = "es2017" to tsconfig
- ``yarn add ts-node-dev -D``
- add "scripts": {"dev": "ts-node-dev src/server.ts"} to package.json
  - add flag "--transpile-only" so node stop checking for errors, we will do it ourselves.
  - add flag "--ignore-watch node-modules", to stop checking changes in node_modules

4. driver v.s. Query builder v.s. ORM
- driver: make sql queries (from table select...)
- query builder: write query with js, qb translate to sql
  - ex.: [knex](http://knexjs.org/) 
- ORM: Object Relational mapping - table -> class, rows -> instance
  - ex.: [typeorm](https://typeorm.io/#/) (using this)
- last two allow to change between databases without changing query code.

5. Cool tool to visualize db: [beekeeperstudio](https://www.beekeeperstudio.io/)

6. Node package for images: [multer](https://www.npmjs.com/package/multer)