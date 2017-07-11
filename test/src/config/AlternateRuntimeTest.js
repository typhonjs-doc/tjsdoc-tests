import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'alternateRuntime', (target) =>
{
   /** @test {DocResolver#_resolveAccess} */
   describe(`test alternate config.runtime (${target.name}):`, () =>
   {
      // Store currentTarget for later async usage when invoking TJSDoc.
      const currentTarget = testConfig.currentTarget;

      before(async () =>
      {
         global.$$tjsdoc_testConfig_currentTarget = currentTarget;

         await Util.invoke(target, './test/fixture/config/tjsdoc-alternateRuntime.json',
          { silent: testConfig.consoleSilent, swapRuntime: false });

         global.$$tjsdoc_testConfig_currentTarget = void 0;
      });

      it('ran alternate publisher', () =>
      {
         Util.assert.isTrue(global.$$tjsdoc_alternate_runtime);
      });
   });
});
