const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
    appHtml: resolveApp('src/index.html'),
    appIndex: resolveApp('src/index.js'),
    appSrc: resolveApp('src'),
    appComponents: resolveApp('src/components')
};