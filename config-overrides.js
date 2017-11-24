const { injectBabelPlugin } = require('react-app-rewired');
const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: 'css' }], config);
  let alias = config.resolve.alias;
  alias['@'] = resolveApp('src');
  let loaderList = config.module.rules[1].oneOf;
  loaderList.splice(loaderList.length - 1, 0, {
    test: /\.less$/,
    use: [
      {
        loader: "style-loader"
      }, 
      {
        loader: "css-loader", 
        options: {
            sourceMap: true
        }
      }, 
      {
        loader: "less-loader", 
        options: {
            sourceMap: true
        }
      }]
    });
  return config;
};