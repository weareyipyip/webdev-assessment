module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:vue/recommended",
    "eslint:recommended"
  ],
  rules: {
    "quotes": ["error", "double"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    "indent": ["error", 2],
    "no-var": "error",
    "no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_"
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
}
