import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'compressAllSeparate', (target) =>
{
   /** @test {publish} */
   describe(`test compressData / compressOutput / outputASTData / outputDocData / separateDataArchives: true (${
    target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-compressAllSeparate.json',
          { silent: testConfig.consoleSilent });
      });

      it('compresses all output, AST and doc data separately', () =>
      {
         // Must set a timeout so that `archive` NPM module may finalize and close file.
         // setTimeout(() =>
         // {
            const entries = Util.readDir(target, 'tjsdoc-compressAllSeparate');

            // Make sure there are exactly 3 entries with compressed docs, ast, and doc data.
            Util.assert.lengthOf(entries, 3);
            Util.assert.isAtLeast(entries.indexOf('ast.tar.gz'), 0);
            Util.assert.isAtLeast(entries.indexOf('docs.tar.gz'), 0);
            Util.assert.isAtLeast(entries.indexOf('docData.tar.gz'), 0);
         //
         //    done();
         // }, 1000);
      });
   });
});
