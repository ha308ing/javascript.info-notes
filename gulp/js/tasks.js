import { task, src, dest, series, watch } from "gulp";
import babel from "gulp-babel";
// import { config } from "./config.js";
const config = {
  path: "./src/js/*.js",
  dest: "./dist"
}


task("babel", () => src(config.path).pipe(babel()).pipe(dest(config.dest)));

task("watch-babel", () => {
  watch(config.path, series("babel"));
});

task("js", series("babel", "watch-babel"));
