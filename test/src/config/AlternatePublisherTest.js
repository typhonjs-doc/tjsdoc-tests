import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'alternatePublisher', (target) =>
{
   /** @test {DocResolver#_resolveAccess} */
   describe(`test alternate config.publish (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-alternatePublisher.json', true, true, false);

      it('ran alternate publisher', () =>
      {
         Util.assert.isTrue(global.$$tjsdoc_alternate_publisher);
      });
   });
});


