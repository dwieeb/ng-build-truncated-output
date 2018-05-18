const cp = require('child_process');

const result = cp.execSync('./node_modules/.bin/ng build');

console.log(result.toString());
