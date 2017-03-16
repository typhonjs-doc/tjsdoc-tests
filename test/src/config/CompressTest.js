import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'compress', (target) =>
{
   /** @test {publish} */
   describe(`test config.compressOutput: true (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-compress.json', { silent: testConfig.consoleSilent });

      it('compresses as docs.tar.gz', (done) =>
      {
         // Must set a timeout so that `archive` NPM module may finalize and close file.
         setTimeout(() =>
         {
            const entries = Util.readDir(target, 'tjsdoc-compress');

            // Make sure there is only 1 entry.
            Util.assert.lengthOf(entries, 1);
            Util.assert.strictEqual(entries[0], 'docs.tar.gz');

            done();
         }, 1000);
      });
   });
});
