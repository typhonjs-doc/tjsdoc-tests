import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.compressData)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.compressData: true, config.outputASTData: true, config.outputDocData: true', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-compressData.json');

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
   }
}
