import fs         from 'fs-extra';
import Util       from 'tjsdoc-test-utils';
import testConfig from './testConfig.js';

import path       from 'path';
import process    from 'process';

// Only load one instance of `babel-polyfill`.
if (!global._babelPolyfill) { require('babel-polyfill'); }

process.chdir(path.resolve(__dirname, '../..'));

console.log(`emptying destination: ${testConfig.emptyDest}`);
console.log(`generating main (tjsdoc): ${testConfig.generateMain}\n`);

// Potentially remove any existing generated test docs.
if (testConfig.emptyDest)
{
   fs.emptyDirSync('./test/fixture/dest/ecmascript/');
   fs.emptyDirSync('./test/fixture/dest-cli/ecmascript/');
}

// console.error = () => {};

if (testConfig.generateMain)
{
   describe('', () =>
   {
      it('', async () =>
      {
         await testConfig.forEachTargetAsync(async (target) =>
         {
            console.log(`generating main test (${target.name}):`);

            await Util.invoke(target, './test/fixture/package/tjsdoc.json', { silent: false });
         });
      });
   });
}
