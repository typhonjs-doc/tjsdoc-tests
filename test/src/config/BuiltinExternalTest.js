import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

testConfig.forEachTarget('config', 'builtinExternal', (target) =>
{
   describe(`test config.builtinVirtual: false (${target.name}):`, () =>
   {
      before(async () =>
      {
         await Util.invoke(target, './test/fixture/config/tjsdoc-builtinVirtual.json',
          { silent: testConfig.consoleSilent });
      });

      it('does not have builtin external link', () =>
      {
         const doc = Util.readDoc(target, 'class/test/fixture/package/src/type/Array.js~TestTypeArray.html',
          'tjsdoc-builtinVirtual');

         Util.assert.throws(() =>
         {
            Util.assert.includes(doc,
             'a[href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"]',
               'number');
         });
      });
   });
});
