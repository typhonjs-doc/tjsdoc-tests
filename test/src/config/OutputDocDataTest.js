import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.outputDocData)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.outputDocData: true', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-outputDocData.json');

         it('outputs ast data.', () =>
         {
            Util.assert.doesNotThrow(() => { Util.readFile(target, 'docData.json', 'tjsdoc-outputDocData'); });
         });
      });
   }
}
