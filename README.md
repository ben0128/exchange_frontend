# My Full-Stack Project 美股、加密貨幣虛擬單交易所

這是一個前後分離的個人全端專案，包括 Vue.js 前端、Node.js + Express 後端，以及 Python 爬蟲。(DEMO 第一次登入需要啟動伺服器會需要比較久，限價單的成交功能需要額外開啟爬蟲平台)

## 目錄

- [成品 DEMO](https://exchange-frontend-tawny.vercel.app/auth)
- [前端 Github (exchange_frontend)](https://github.com/ben0128/exchange_frontend)
- [後端 Github (exchange_backend)](https://github.com/ben0128/exchange_backend)
- [爬蟲 Github (exchange_webhook)](https://github.com/ben0128/exchange_webhook)
- [爬蟲 GoogleColab](https://colab.research.google.com/drive/1cfoT5yzU5TuJWoFqGBXCzgMgZubXIN8g?usp=sharing)

### Download Project

git clone https://github.com/ben0128/exchange_frontend.git

### Project setup

npm install

### Compiles and hot-reloads for development

npm run serve

### Lints and fixes files

npm run lint

### 技術棧

- Vue: `^3.2.13`
- Vuex: `^4.1.0`
- Vue Router: `^4.2.4`
- Axios: `^1.5.0`
- Chart.js: `^4.4.0`
- AdminLTE: `^3.2.0`
- jQuery: `^3.7.1`
- Vue Axios: `^3.5.2`
- Core-JS: `^3.8.3`
- Vue3 Google Login: `^2.0.23`
- @vueup/vue-quill: `^1.2.0`

### 開發依賴（Dev Dependencies）

- Babel Core: `^7.12.16`
- Babel ESLint Parser: `^7.12.16`
- ESLint: `^7.32.0`
- ESLint Plugin Vue: `^8.0.3`
- Vue CLI: `^5.0.8`
- Vue CLI Plugin Babel: `~5.0.0`
- Vue CLI Plugin ESLint: `~5.0.0`
- @types/jquery: `^3.5.19`

### 功能

- 使用者認證
- 資料可視化
- 文本編輯
- 下單模擬(限價單、市價單)

### 其他設定

- ESLint Config: Vue3 Essential, ESLint Recommended
- Browserslist: > 1%, last 2 versions, not dead, not ie 11
