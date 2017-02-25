import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.manual)
{
   for (const target of testConfig.targets)
   {
      /** @test {ManualDocBuilder} */
      describe('test config.manual: null', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-manual.json');

         it('does not have manual.', () =>
         {
            Util.assert.throws(() =>
            {
               Util.readDoc(target, 'manual/index.html', 'tjsdoc-manual');
            });
         });
      });
   }
}
