import replace from "gulp-replace"; //search and replace
import plumber from "gulp-plumber";  // error handlig
import notify from "gulp-notify"; // messages (prompts)
import browsersync from "browser-sync"; // local server

// export object
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browsersync: browsersync,
}