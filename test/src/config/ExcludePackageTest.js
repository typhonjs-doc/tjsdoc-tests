import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'excludePackage', (target) =>
{
   /** @test {publish} */
   describe(`test config.copyPackage: false (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-excludePackage.json',
          { silent: testConfig.consoleSilent });
      });

      it('does not have ast data.', () =>
      {
         Util.assert.throws(() => { Util.readFile(target, 'package.json', 'tjsdoc-excludePackage'); });
      });
   });
});
