import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'alternateRuntime', (target) =>
{
   /** @test {DocResolver#_resolveAccess} */
   describe(`test alternate config.runtime (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-alternateRuntime.json', testConfig.consoleSilent, false);

      it('ran alternate publisher', () =>
      {
         Util.assert.isTrue(global.$$tjsdoc_alternate_runtime);
      });
   });
});
