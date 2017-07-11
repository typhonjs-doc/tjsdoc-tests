var path = require('path'); // eslint-disable-line no-var

module.exports =
{
   'source': './test/fixture/package/src',
   'destination': './test/fixture/dest-cli/ecmascript/default/tjsdoc-cli',
   'includes': ['desc/.*\\.js$'],
   'index': './test/fixture/package/README.md',
   'package': './test/fixture/package/package.json',
   'runtime': path.resolve('../tjsdoc-babylon/src/TJSDocBabylon.js'),
   'publisher': path.resolve('../tjsdoc-publisher-static-html/src/Publisher.js')
};
