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
              targets: {
                node: true,
              },
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
          ext: ".js",
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