import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'compressData', (target) =>
{
   /** @test {publish} */
   describe(`test compressData / outputASTData / config.outputDocData: true (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-compressData.json', testConfig.consoleSilent);

      it('compresses as AST and docData.json', (done) =>
      {
         // Must set a timeout so that `archive` NPM module may finalize and close file.
         setTimeout(() =>
         {
            const entries = Util.readDir(target, 'tjsdoc-compressData');

            // Make sure there are multiple files / directories and compressed ast and doc data.
            Util.assert.isAtLeast(entries.length, 8);
            Util.assert.isAtLeast(entries.indexOf('ast.tar.gz'), 0);
            Util.assert.isAtLeast(entries.indexOf('docData.tar.gz'), 0);

            done();
         }, 1000);
      });
   });
});
