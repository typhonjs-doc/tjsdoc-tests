import Util       from 'tjsdoc-test-utils';

import testConfig from '../testConfig.js';

if (testConfig.category.config && testConfig.config.tests.builtinExternal)
{
   for (const target of testConfig.targets)
   {
      describe('test config.builtinVirtual: false', () =>
      {
         Util.invoke(target, './test/fixture/config/tjsdoc-builtinVirtual.json');

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
   }
}
