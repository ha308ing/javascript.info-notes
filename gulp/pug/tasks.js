import { task, src, dest, series, watch } from "gulp";
import pug from "gulp-pug";

const config = {
  path: "./src/pug/*.pug",
  dest: "./dist",
};

task("pug", () => src(config.path).pipe(pug()).pipe(dest(config.dest)));

task("watch-pug", () => {
  watch(config.path, series("pug"));
});
