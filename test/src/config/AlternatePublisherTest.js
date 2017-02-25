import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.alternatePublisher)
{
   for (const target of testConfig.targets)
   {
      /** @test {DocResolver#_resolveAccess} */
      describe('test alternate config.publish', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-alternatePublisher.json', true, true, false);

         it('ran alternate publisher', () =>
         {
            Util.assert.isTrue(global.$$tjsdoc_alternate_publisher);
         });
      });
   }
}


