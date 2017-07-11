import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'compressZip', (target) =>
{
   /** @test {publish} */
   describe(`test config.compressFormat: "zip", config.compressOutput: true (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-compressZip.json',
          { silent: testConfig.consoleSilent });
      });

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
});
