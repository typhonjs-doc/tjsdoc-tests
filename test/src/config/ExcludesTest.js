import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'excludes', (target) =>
{
   describe(`test config.excludes: ["Class\\.js"] (${target.name}):`, () =>
   {
      Util.invoke(target, './test/fixture/config/tjsdoc-excludes.json', { silent: testConfig.consoleSilent });

      it('does not have excluded identifier', () =>
      {
         Util.assert.throws(() =>
         {
            Util.readDoc(target, 'class/src/desc/Class.js~TestDescClass.html', 'tjsdoc-excludes');
         });
      });
   });
});
