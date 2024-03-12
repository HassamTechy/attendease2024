# Facta Studio Static Site Template

This is the basic static template used to quickly develop on the front-end of projects. It uses [Foundation](http://foundation.zurb.com/sites) for layout and other global styling.

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (16 or greater)
- [Git](https://git-scm.com/)

Install dependencies
```sh
npm install
```

Build Foundation assets (only needs to be done once)
```sh
npm run build:fn
```

Build custom assets for production
```sh
npm run build
```

Build custom assets for development
```sh
npm run dev
```

Watch mode to monitor file changes and automatically recompile
```sh
npm run dev:watch
```


Assets will be compiled to the dist/ directory. These #must# be committed for the purposes of this static site. Please refer to the dist/ path in your HTML files
Please work within the established file structure in this template, as the compilation workflow is the same as the final CMS theme that will inherit the styles and javascript.

assets/styles/scss <br>
assets/js <br>
assets/images <br>
assets/fonts <br>


An example file is included. This file doesn't reflect layouts or markup that need to be mimicked, but serves just as a reference if you need it.

Please think about how the markup is organized in these static files and how they can be converted to a CMS/PHP site. Most importantly, consider how to make each section of the site modular (think WordPress' Gutenberg blocks) and organize the .scss files according to what sections of markup they correspond to.