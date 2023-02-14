module.exports = {
  extends: ["airbnb", "prettier", "plugin:jest/recommended"],
  plugins: ["react-hooks", "jest"],
  rules: {
    "arrow-body-style": "off",
    "react/prop-types": "off",
    "no-use-before-define": "off",
  },
  overrides: [
    {
      settings: {
        "import/resolver": {
          typescript: {},
        },
      },
      files: "**/*.+(ts|tsx)",
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint/eslint-plugin", "import"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      rules: {
        "react/jsx-one-expression-per-line": "off",
        "react/jsx-wrap-multilines": "off",
        "arrow-body-style": "off",
        "react/jsx-filename-extension": [
          2,
          { extensions: [".js", ".jsx", ".ts", ".tsx"] },
        ],
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-namespace": "off",
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            js: "never",
            jsx: "never",
            ts: "never",
            tsx: "never",
          },
        ],
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: ["**/*.test.tsx"] },
        ],
      },
    },
  ],
};
