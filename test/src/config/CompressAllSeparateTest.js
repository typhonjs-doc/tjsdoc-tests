import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.compressAllSeparate)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.compressData: true, config.compressOutput: true, config.outputASTData: true, '
       + 'config.outputDocData: true, config.separateDataArchives: true', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-compressAllSeparate.json');

         it('compresses all output, AST and doc data separately', (done) =>
         {
            // Must set a timeout so that `archive` NPM module may finalize and close file.
            setTimeout(() =>
            {
               const entries = Util.readDir(target, 'tjsdoc-compressAllSeparate');

               // Make sure there are exactly 3 entries with compressed docs, ast, and doc data.
               Util.assert.lengthOf(entries, 3);
               Util.assert.isAtLeast(entries.indexOf('ast.tar.gz'), 0);
               Util.assert.isAtLeast(entries.indexOf('docs.tar.gz'), 0);
               Util.assert.isAtLeast(entries.indexOf('docData.tar.gz'), 0);

               done();
            }, 1000);
         });
      });
   }
}
