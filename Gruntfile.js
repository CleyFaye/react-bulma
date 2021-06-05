const loadGruntTasks = require("load-grunt-tasks");
const {readFileSync} = require("fs");

const licenseJS = [
  "/**",
  " * @license",
  " * @preserve",
  ...readFileSync("LICENSE", "utf8").split("\n")
    .map(c => ` * ${c}`.trimEnd()),
  " */",
].join("\n");

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
    usebanner: {
      options: {banner: licenseJS},
      build: {
        files: [{
          expand: true,
          cwd: "lib",
          src: ["**/*.js"],
        }],
      },
    },
  });
  grunt.registerTask(
    "build",
    "Build library",
    [
      "babel:build",
      "usebanner:build",
    ]
  );
  grunt.registerTask(
    "default",
    "dist",
  );
};
