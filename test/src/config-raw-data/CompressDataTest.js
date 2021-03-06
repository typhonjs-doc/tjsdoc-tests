import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config_raw_data', 'compressData', (target) =>
{
   /** @test {publish} */
   describe(`test compressData / outputASTData / config.outputDocData: true (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-compressData.json',
          { silent: testConfig.consoleSilent });
      });

      it('compresses as AST and docData.json', () =>
      {
         const entries = Util.readDir(target, 'tjsdoc-compressData');

         // Make sure there are multiple files / directories and compressed ast and doc data.
         Util.assert.isAtLeast(entries.length, 2); // when testing raw data only
         Util.assert.isAtLeast(entries.indexOf('ast.tar.gz'), 0);
         Util.assert.isAtLeast(entries.indexOf('docData.tar.gz'), 0);
      });
   });
});
