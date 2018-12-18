/*eslint-env commonjs */
const loadGruntTasks = require("load-grunt-tasks");

module.exports = grunt => {
  loadGruntTasks(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: [
          [
            "@babel/preset-env",
            {
              modules: false,
              targets: "last 2 version, > 1%, not dead",
            },
          ],
          "@babel/preset-react",
        ],
      },
      dist: {
        files: [{
          expand: true,
          cwd: "lib",
          src: [
            "**/*.js",
            "**/*.mjs",
          ],
          /*          ext: ".js",*/
          dest: "dist",
        }],
      },
    },
  });
  grunt.registerTask("dist",
    "Build /dist directory",
    [
      "babel:dist",
    ]
  );
  grunt.registerTask("default", "dist");
};
