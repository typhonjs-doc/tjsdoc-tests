import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'outputASTData', (target) =>
{
   /** @test {publish} */
   describe(`test config.outputASTData: true (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-outputASTData.json',
          { silent: testConfig.consoleSilent });
      });

      it('outputs ast data.', () =>
      {
         Util.assert.doesNotThrow(() =>
         {
            Util.readFile(target, 'ast/test/fixture/package/src/desc/Class.js.json', 'tjsdoc-outputASTData');
         });
      });
   });
});
