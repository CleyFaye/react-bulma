const loadGruntTasks = require("load-grunt-tasks");

module.exports = grunt => {
  loadGruntTasks(grunt);

  grunt.initConfig({
    clean: {
      build: [
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
              corejs: 3,
              useBuiltIns: "usage",
              modules: false,
              targets: "last 2 version, > 1%, not dead",
            },
          ],
          "@babel/preset-react",
        ],
      },
      build: {
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
  grunt.registerTask(
    "build",
    "Build library",
    [
      "babel:build",
    ]
  );
  grunt.registerTask(
    "default",
    "dist",
  );
};
