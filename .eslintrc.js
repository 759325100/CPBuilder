module.exports = {
  "env": {
    "es6": true,
    "node": true
  },
  "extends": "semistandard",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      1,
      "unix"
    ],
    "quotes": [
      1,
      "single"
    ],
    "semi": [
      1,
      "never"
    ],
    "space-before-function-paren": 0,
    "no-multiple-empty-lines": [
      "off"
    ],
    "prefer-const": 0,
    "no-extend-native": 0,
    "no-control-regex":0,
    "no-unsafe-negation":0,
    "no-return-await":0
  },

  "globals": {
    "arguments": true
  }
};