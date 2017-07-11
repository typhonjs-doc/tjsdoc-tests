import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'removeCommonPath', (target) =>
{
   describe(`test config.removeCommonPath: true (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-removeCommonPath.json',
          { silent: testConfig.consoleSilent });
      });

      it('does not have excluded identifier', () =>
      {
         Util.assert.doesNotThrow(() =>
         {
            Util.readDoc(target, 'class/Class.js~TestDescClass.html', 'tjsdoc-removeCommonPath');
         });
      });
   });
});
