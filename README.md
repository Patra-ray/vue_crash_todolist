# vue_crash_todolist_vueui

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Further info
Basic vue info about file structure:
- index.html has <div id='app'></div> as placeholder for the vue application
  - it's output comes from main.js
- main.js entry point to the application
  - App.vue is the root module.

## order of calls
- app.vue has app component that is inserted in the root element which is the placeholder in the index.html
- app describes the HelloWorld top level component, its template, definition and style
- the HelloWorld component has a msg prop, which is exported with the component
- HelloWorld has the placeholder {{msg}} which is filled with the prop that has been exported.  