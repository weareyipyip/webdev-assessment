# Assessment web developer YipYip

This repository consists of an assessment assignment for prospective web developers at YipYip. It is intended to offer a starting point so that it is not necessary to waste time setting up boilerplate stuff, and immediately enable developers to showcase relevant skills. It consists basically of a standard Vue.js starter template with Vuex, Vue Router, Babel, Webpack, a service worker, ESlint, and Visual Studio Code configured and good to go. Take a look at the commit history to see what was added.

That being said, <b>it is not a requirement that you complete this exercise in Vue.js.</b> If your are more familiar with another framework like React or another language like TypeScript, feel free to take the assignment and create an implementation in whatever framework you feel most comfortable with and/or puts your skills in the best possible light. That will mean you have to setup some boilerplate stuff by yourself.

Apart from configuration for various things, a [dummy API service](./src/services/apiService.js) was added to the source code. You are supposed to use (but <b>not</b> alter: you have no control over the "backend" in this case) this code in your implementation. If you choose to implement the assessment in another framework, please copy over and use this (vanilla JavaScript) file.

In general terms, the assessment consists of requirements and possible bonus points. The bonus points are merely suggestions, and we are interested in skills that we haven't thought of that you might bring to the table. If your implementation shows us cool other stuff that you are able to do that we haven't mentioned, that will count in your favor as well!

## Part 1: JS/TS

We would like you to create a component that allows CRUD (create-read-update-delete) operations on the news items produced by the API service, a bit like a simple CMS. News items should be filterable by title and you should be able to update or delete an existing item, or add a new item. There should be multiple instances of that component visible on the web page, and these components should share state; that is, altering state in one should result in a visible state change in the others. To summarize:
- component for CRUD on REST resource offered by API service
- items filterable by title
- shared state between instances of the component (except the filter state, that does not need to be shared between instances)

### Bonus point suggestions
- general code quality, readability, elegance and use of framework features
- share state accross browser tabs
- tests
- use of ES6/7, HTML5 or CSS3 features
- use of OOP and/or JavaScript prototype-object model
- use of PWA features
- implementing the Unreal engine in WebAssembly :p

## Part 2: (S)CSS

We would like you to put the components in a responsive grid layout, with a (dummy) header component and some (dummy / lorem ipsum) text, that rearranges the components when the screen resizes, for example from a two-by-two layout to a single-column layout. Which layouts are used exactly is not important. To summarize:
- Add a (dummy) header component and some text, in addition to multiple news components created in [part 1](#part-1-jsts)
- Create a big-screen layout and a small-screen layout that are responsive to viewport size changes

### Bonus point suggestions
- Use of BEM in (S)CSS
- Use of SASS/SCSS/CSS3 features
- Animations / transitions
- General prettiness of the result

## VS Code tip

If you use Visual Studio Code, you only have to copy [settings_example.json](./.vscode/settings_example.json) to `.vscode/settings.json` to create a development environment that meshes well with vue-cli-service (which is used by `npm run serve`).