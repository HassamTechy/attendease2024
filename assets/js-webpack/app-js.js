// importing JQuery as global variable and Foundation core JS
window.$ = window.jQuery = require("jquery"); // passing jquery to $ and jQuery variables and making them global

import 'what-input';
import 'foundation-sites';

$(document).foundation();

// importing custom JS from js/scripts/ folder
requireAll(require.context('../js/scripts', true, /\.js$/));

function requireAll(r) { r.keys().forEach(r); }