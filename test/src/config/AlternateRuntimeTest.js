import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.alternateRuntime)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveAccess} */
      describe('test alternate config.runtime', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-alternateRuntime.json', true, false);

         it('ran alternate publisher', () =>
         {
            Util.assert.isTrue(global.$$tjsdoc_alternate_runtime);
         });
      });
   }
}


