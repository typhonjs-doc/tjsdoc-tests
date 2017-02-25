import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.outputASTData)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.outputASTData: true', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-outputASTData.json');

         it('outputs ast data.', () =>
         {
            Util.assert.doesNotThrow(() =>
            {
               Util.readFile(target, 'ast/test/fixture/package/src/desc/Class.js.json', 'tjsdoc-outputASTData');
            });
         });
      });
   }
}
