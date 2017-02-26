import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'excludePackage', (target) =>
{
   /** @test {publish} */
   describe(`test config.copyPackage: false (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-excludePackage.json');

      it('does not have ast data.', () =>
      {
         Util.assert.throws(() => { Util.readFile(target, 'package.json', 'tjsdoc-excludePackage'); });
      });
   });
});
