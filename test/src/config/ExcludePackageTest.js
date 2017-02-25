import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.excludePackage)
{
   for (const target of testConfig.targets)
   {
      /** @test {publish} */
      describe('test config.copyPackage: false', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-excludePackage.json');

         it('does not have ast data.', () =>
         {
            Util.assert.throws(() => { Util.readFile(target, 'package.json', 'tjsdoc-excludePackage'); });
         });
      });
   }
}
