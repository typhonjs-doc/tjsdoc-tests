import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.excludes)
{
   for (const target of testConfig.targets)
   {
      describe('test config.excludes: ["Class\\.js"]', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-excludes.json');

         it('does not have excluded identifier', () =>
         {
            Util.assert.throws(() =>
            {
               Util.readDoc(target, 'class/src/desc/Class.js~TestDescClass.html', 'tjsdoc-excludes');
            });
         });
      });
   }
}
