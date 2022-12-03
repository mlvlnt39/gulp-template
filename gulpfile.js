// main module
import gulp from "gulp";
//import path
import { path } from "./gulp/config/path.js";
// import plugins 
import { plugins } from "./gulp/config/plugins.js";

// passing values to a global variable
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

// import tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html  } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";

// watcher and file tracking
function watcher() {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
}

//main tasks
const mainTasks = gulp.parallel(copy, html, scss, js);
//building script for execution tasks
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher,server));

// sript execution as default
gulp.task('default', dev);
