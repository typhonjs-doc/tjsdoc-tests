import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.test)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.test: null', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-test.json');

         it('does not have test integration', () =>
         {
            Util.assert.throws(() => Util.readDoc(target, 'test.html', 'tjsdoc-test'));
         });
      });
   }
}
