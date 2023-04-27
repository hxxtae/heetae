module.exports = {
  // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
  root: true,
  // 추가적인 규칙들을 적용
  env: {
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  // 코드 정리 플러그인 추가
  plugins: ["prettier"]
};