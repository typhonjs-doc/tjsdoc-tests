import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config_raw_data', 'compactData', (target) =>
{
   /** @test {publish} */
   describe(`test compactData / outputASTData / outputDocData: true (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-compactData.json',
          { silent: testConfig.consoleSilent });
      });

      it('does have ast / doc data.', () =>
      {
         Util.assert.doesNotThrow(() =>
         {
            const astDataLines = Util.readFile(target, 'ast/test/fixture/package/src/desc/Class.js.json',
             'tjsdoc-compactData').match(/^.+$/gm);

            const docDataLines = Util.readFile(target, 'docData.json', 'tjsdoc-compactData').match(/^.+$/gm);

            Util.assert.isArray(astDataLines);
            Util.assert.isArray(docDataLines);

            // Ensure that there is only one line.
            Util.assert.lengthOf(astDataLines, 1);
            Util.assert.lengthOf(docDataLines, 1);
         });
      });
   });
});
