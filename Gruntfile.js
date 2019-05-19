/*eslint-env commonjs */
const loadGruntTasks = require("load-grunt-tasks");

module.exports = grunt => {
  loadGruntTasks(grunt);

  grunt.initConfig({
    clean: {
      "dist": [
        "lib",
      ],
    },
    babel: {
      options: {
        sourceMap: true,
        presets: [
          [
            "@babel/preset-env",
            {
              corejs: "2.6.5",
              useBuiltIns: "usage",
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
          cwd: "src",
          src: [
            "**/*.js",
          ],
          dest: "lib",
        }],
      },
    },
  });
  grunt.registerTask("dist",
    "Build /lib directory",
    [
      "babel:dist",
    ]
  );
  grunt.registerTask("default", "dist");
};
