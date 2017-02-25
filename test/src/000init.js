import fs         from 'fs-extra';
import Util       from 'tjsdoc-test-utils';
import testConfig from './testConfig.js';

import path       from 'path';
import process    from 'process';

process.chdir(path.resolve(__dirname, '../..'));

// Potentially remove any existing generated test docs.
if (testConfig.emptyDest)
{
   fs.emptyDirSync('./test/fixture/dest/ecmascript/');
   fs.emptyDirSync('./test/fixture/dest-cli/ecmascript/');
}

if (testConfig.generateMain)
{
   for (const target of testConfig.targets)
   {
      console.log(`generating main test: ${target.name}`);

      Util.invoke(target, './test/fixture/package/tjsdoc.json', false);
   }
}
