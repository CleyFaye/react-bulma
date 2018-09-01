module.exports = {
  "env": {
    "es6": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
  },
  "overrides": [
    {
      "files": ["**/*.mjs"],
      "parserOptions": {
        "sourceType": "module"
      }
    }
  ],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ]
  }
};
