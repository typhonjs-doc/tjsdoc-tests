import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.compressZip)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.compressFormat: "zip", config.compressOutput: true', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-compressZip.json');

         it('compresses as docs.zip', (done) =>
         {
            // Must set a timeout so that `archive` NPM module may finalize and close file.
            setTimeout(() =>
            {
               const entries = Util.readDir(target, 'tjsdoc-compressZip');

               // Make sure there is only 1 entry.
               Util.assert.lengthOf(entries, 1);
               Util.assert.strictEqual(entries[0], 'docs.zip');

               done();
            }, 1000);
         });
      });
   }
}
