/* eslint-disable no-var */
var fs =    require('fs');
var path =  require('path');

var sourcePath = path.resolve(__dirname, '../package/src/desc');

var sourceFiles = fs.readdirSync(sourcePath).map((entry) => `${sourcePath}${path.sep}${entry}`);

/**
 * Tests `config.sourceFiles` loading `../package/src/desc` directly.
 */
module.exports = {
   sourceFiles,
   'destination': './test/fixture/dest/tjsdoc-sourceFiles',
   'includes': ['desc/.*\\.js$'],
   'index': './test/fixture/package/README.md',
   'package': './test/fixture/package/package.json',
   'outputASTData': true
};
