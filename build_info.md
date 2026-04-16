1) npm install git-describe
2) add to `vue.config.js` before `module.exports`

```js
const { gitDescribeSync } = require("git-describe");
process.env.VUE_APP_GIT_HASH = gitDescribeSync().hash;
process.env.VUE_APP_BUILD_DATETIME = new Date().toLocaleString();
```

3) load process.env.VUE_APP_GIT_HASH and process.env.VUE_APP_BUILD_DATETIME in template
